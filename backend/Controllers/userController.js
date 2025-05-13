import User from "../models/UserSchema.js"
import Booking from "../models/BookingSchema.js"
import Doctor from "../models/DoctorSchema.js"

export const updateUser = async (req, res) => {
  const id = req.params.id

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    )

    res.status(200).json({ message: "Successfully Updated", data: updateUser })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Failed to Update" })
  }
}

export const deleteUser = async (req, res) => {
  const id = req.params.id

  try {
    await User.findByIdAndDelete(id)

    res.status(200).json({ message: "Successfully Deleted" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Failed to Delete" })
  }
}

export const getSingleUser = async (req, res) => {
  const id = req.params.id

  try {
    const user = await User.findById(id).select("-password")

    res.status(200).json({ message: "User Found", data: user })
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: "No User Found" })
  }
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password")

    res.status(200).json({ message: "Users Found", data: users })
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: "Users not Found" })
  }
}

export const getUserProfile = async (req, res) => {
  const userId = req.userId

  try {
    const user = await User.findById(userId)

    if (!user) {
      return res.status(404).json("User not Found")
    }

    const { password, ...rest } = user._doc
    res
      .status(200)
      .json({ message: "Profile info is getting : ", data: { ...rest } })
  } catch (error) {
    res.status(500).json("Something went wrong !")
  }
}

export const getMyAppointments = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId })

    const doctorIds = bookings.map((element) => {
      return element.doctor.id
    })
    
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
      "-password"
    )
    res
      .status(200)
      .json({ message: "Appointments are getting : ", data: { doctors }})
  } catch (error) {
    res.status(500).json("Something went wrong !")
  }
}
