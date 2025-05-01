import User   from "../models/UserSchema.js"
import Doctor from "../models/DoctorSchema.js"
import jwt    from "jsonwebtoken"
import bcrypt from "bcryptjs"

export const register = async (req, res) => {
  const { name, email, password, role, photo, gender } = req.body

  try {
    let user = null

      // verify if the user already exist
      if (role === "patient" || role === "doctor") {
        user = await User.findOne({ email })
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
      user = new User({
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
    return res.status(500).json({ message: "Something went wrong" })
  }
}