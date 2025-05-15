import express from "express"
import {
  updateDoctor,
  deleteDoctor,
  getSingleDoctor,
  getAllDoctors,
  getDoctorProfile,
} from "../Controllers/doctorController.js"
import { authentificate, restrict } from "../auth/verifyToken.js"
import reviewRouter from "./review.js"

const route = express.Router()

//nested route
route.use("/:doctorId/reviews", reviewRouter)

route.get("/:id", authentificate, getSingleDoctor)
route.get("/", authentificate, getAllDoctors)
route.put("/:id", authentificate, restrict(["doctor"]), updateDoctor)
route.delete("/:id", authentificate, restrict(["doctor"]), deleteDoctor)
route.get(
  "/profile/me",
  authentificate,
  restrict(["doctor"]),
  getDoctorProfile
)

export default route
