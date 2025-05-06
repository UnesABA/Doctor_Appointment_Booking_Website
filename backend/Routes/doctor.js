import express from "express"
import {
  updateDoctor,
  deleteDoctor,
  getSingleDoctor,
  getAllDoctors,
} from "../Controllers/doctorController.js"

const route = express.Router()

route.get("/:id", getSingleDoctor)
route.get("/", getAllDoctors)
route.put("/:id", updateDoctor)
route.delete("/:id", deleteDoctor)

export default route