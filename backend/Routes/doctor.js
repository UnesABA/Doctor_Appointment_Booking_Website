import express                                                        from "express"
import { updateDoctor, deleteDoctor, getSingleDoctor, getAllDoctors } from "../Controllers/doctorController.js"
import { authentificate, restrict }                                   from "../auth/verifyToken.js"

const route = express.Router()

route.get("/:id"   , authentificate, getSingleDoctor)
route.get("/"      , authentificate, getAllDoctors)
route.put("/:id"   , authentificate, restrict(["doctor"]), updateDoctor)
route.delete("/:id", authentificate, restrict(["doctor"]), deleteDoctor)

export default route