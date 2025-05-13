import Booking from "../models/BookingSchema.js"
import Doctor from "../models/DoctorSchema.js"

export const updateDoctor = async (req, res) => {
  const id = req.params.id

  try {
    const updateDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    )

    res
      .status(200)
      .json({ message: "Successfully Updated", data: updateDoctor })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Failed to Update" })
  }
}

export const deleteDoctor = async (req, res) => {
  const id = req.params.id

  try {
    await Doctor.findByIdAndDelete(id)

    res.status(200).json({ message: "Successfully Deleted" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Failed to Delete" })
  }
}

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id

  try {
    const doctor = await Doctor.findById(id).populate("reviews").select("-password")

    res.status(200).json({ message: "Doctor Found", data: doctor })
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: "No Doctor Found" })
  }
}

export const getAllDoctors = async (req, res) => {
  try {
    const { query } = req.query
    let doctors

    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [{ name: { $regex: query, $options: "i" } }],
      }).select("-password")
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      )
    }

    res.status(200).json({ message: "Doctors Found", data: doctors })
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: "Doctors not Found" })
  }
}

export const getDoctorProfile = async (req, res) =>{
  const doctorId = req.doctorId
  
  try {
    const doctor = await Doctor.findById(doctorId)
    
    if(!doctor){
      return 
      res.status(404).json({ message: "Doctor not Found"})
    }
    
    const {password, ...rest} = doctor._doc
    const appointments = await Booking.find({doctor: doctorId})
    
    res
      .status(200)
      .json({ message: "Profile info is getting : ", data: { ...rest, appointments } })
  } catch (error) {
    res.status(500).json("Something went wrong !")
  }
}

export const getDoctorAppointments = (req, res) =>{

}