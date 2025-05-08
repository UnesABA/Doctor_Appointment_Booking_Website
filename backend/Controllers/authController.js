import User   from "../models/UserSchema.js"
import Doctor from "../models/DoctorSchema.js"
import jwt    from "jsonwebtoken"
import bcrypt from "bcryptjs"

const generateToken = user =>{
  return jwt.sign({
    id: user._id,
    role: user.role
  }, process.env.JWT_SECRET_key, {
    expiresIn: "15d"
  })
}

export const register = async (req, res) => {
  const { name, email, password, role, photo, gender } = req.body

  try {
    let user = null

    // verify if the user already exist
    if (role === "patient") {
      user = await User.findOne({ email })
    }
    
    if (role === "doctor") {
      user = await Doctor.findOne({ email })
    }

    // if the user already exist
    if (user) {
      return res.status(400).json({ message: "User already exists" })
    }
    
    //hash password
    const salt         = await bcrypt.genSalt(10) 
    const hashPassword = await bcrypt.hash(password, salt)
    
    if(role === "patient"){
      user = new User({
        name,
        email, 
        password: hashPassword,
        photo,
        gender,
        role
      })
    }
    if(role === "doctor"){
      user = new Doctor({
        name,
        email, 
        password: hashPassword,
        photo,
        gender,
        role
      })
    }
    
    await user.save()
    
    res.status(200).json("User successfully created !!")
    
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Something went wrong "+ error })
  }
}

export const login = async (req, res) => {
  const {email} = req.body
  
  try {
    let user = null 
    
    const patient = await User.findOne({email})
    const doctor  = await Doctor.findOne({email})
    
    if (patient) {
      user = patient
    }
    if (doctor) {
      user = doctor
    }
    
    //chack if User exist or not 
    if(!user){
      return res.status(404).json({ message: "User not found" })
    }
    
    //compare password 
    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)
    
    if(!isPasswordMatch){
      return res.status(404).json({ message: "Invalid Credentials" })
    }
    
    //get Token
    const token = generateToken(user)
    
    const {password, role, appointments, ...rest} = user._doc
    
    return res.status(200).json({ message: "login successful", token, data: {...rest}, role })
    
  } catch (error) {
    return res.status(500).json({ message: "Failed to login " + error })
  }
}