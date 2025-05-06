import express from "express"
import {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUsers,
} from "../Controllers/userController.js"

const route = express.Router()

route.get("/:id", getSingleUser)
route.get("/", getAllUsers)
route.put("/:id", updateUser)
route.delete("/:id", deleteUser)

export default route