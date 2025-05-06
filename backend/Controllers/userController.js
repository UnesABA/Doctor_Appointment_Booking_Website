import User from "../models/UserSchema.js"

export const updateUser = async (req, res) =>{
  const id = req.params.id

  try {
    const updateUser = await User.findByIdAndUpdate(id, {$set: req.body}, {new: true})

    res.status(200).json({message: "Successfully Updated", data: updateUser})
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Failed to Update"})
  }
}  

export const deleteUser = async (req, res) =>{
  const id = req.params.id

  try {
    await User.findByIdAndDelete(id)

    res.status(200).json({message: "Successfully Deleted"})
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Failed to Delete"})
  }
} 

export const getSingleUser = async (req, res) =>{
  const id = req.params.id

  try {
   const user = await User.findById(id).select("-password")

    res.status(200).json({message: "User Found", data: user})
  } catch (error) {
    console.log(error)
    res.status(404).json({message: "No User Found"})
  }
}

export const getAllUsers = async (req, res) =>{

  try {
   const users = await User.find().select("-password")

    res.status(200).json({message: "Users Found", data: users})
  } catch (error) {
    console.log(error)
    res.status(404).json({message: "Users not Found"})
  }
}