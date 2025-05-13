import express from "express"
import {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUsers,
  getMyAppointments,
  getUserProfile,
} from "../Controllers/userController.js"
import { authentificate, restrict } from "../auth/verifyToken.js"

const route = express.Router()

route.get("/:id"                         , authentificate, restrict(["patient"]), getSingleUser)
route.get("/"                            , authentificate, restrict(["admin"])  , getAllUsers)
route.put("/:id"                         , authentificate, restrict(["patient"]), updateUser)
route.delete("/:id"                      , authentificate, restrict(["patient"]), deleteUser)
route.get("/appointments/my-appointments", authentificate, restrict(["patient"]), getMyAppointments)
route.get("/profile/me"                  , authentificate, restrict(["patient"]), getUserProfile)

export default route
