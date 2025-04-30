import express      from "express"
import cookieParser from "cookie-parser"
import cors         from "cors"
import mongoose     from "mongoose"
import dotenv       from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corsOrigin = {
  origin: true
}

app.get("/", (req, res) =>{
  res.send("API is working !")
})

//database connection
mongoose.set("strictQuery", false)
const connectDB = async () =>{
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser   : true,
      useUnifiedTopology: true,
    })

    console.log("MongoDB database is connected")
  } catch (error) {
    console.log("MongoDB database connection is failed !")
  }
}

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOrigin))

app.listen(port, () =>{
  connectDB()
  console.log("Server is running on port : " + port)
})

//te2LSMM6xwHoh4uu
//Your current IP address (105.155.92.56)
