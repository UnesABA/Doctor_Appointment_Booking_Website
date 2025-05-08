import jwt    from "jsonwebtoken"
import Doctor from "../models/DoctorSchema.js"
import User   from "../models/UserSchema.js"

export const authentificate = async (req, res, next) => {
  // Get token from Headers
  const authToken = req.headers.authorization
  
  // Check Token exists 
  if(!authToken || !authToken.startsWith("Bearer ")){
    return res.status(401).json({success: false, message: "No token, authorization denied"})
  }
  
  try {
    const token = authToken.split(" ")[1]
    
    //verify token 
    const decoded = jwt.verify(token, process.env.JWT_SECRET_key)
    
    req.userId = decoded.id
    req.role   = decoded.role
    
    next() // must be called 
  } catch (error) {
    if(error.name === "TokenExpiredError"){
      return res.status(401).json({message: "Token is Expired"})
    }
    return res.status(401).json({message: "INvalid Token"})
  }
}
export const restrict = async (req, res, next) => {

}