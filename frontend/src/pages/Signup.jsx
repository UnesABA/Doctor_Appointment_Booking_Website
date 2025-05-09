import { useState } from "react"
import signUp       from "../assets/images/signup.gif"
import younes       from "../assets/images/younes.jpg"
import { Link }     from "react-router-dom"

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl]     = useState("")

  const [formData, setFormData] = useState({
    name    : "",
    email   : "",
    password: "",
    photo   : selectedFile,
    gender  : "",
    role    : "patient"
  })

  const handleChanges = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleFileChanges = async event =>{
    const file = event.target.files[0]
    console.log(file)
  }

  const submitHandler = async (event) =>{
    event.preventDefault()
  }

  return (
    <section className="px-5 xl:px-0 ">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ========== Img box ==========*/}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signUp} className="w-full rounded-l-lg" />
            </figure>
          </div>
          {/* ========== Sign Up form ==========*/}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">Account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type       ="text"
                  placeholder="Full Name"
                  name       ="name"
                  value      = {formData.name}
                  onChange   = {handleChanges}
                  className  ="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type       ="email"
                  placeholder="Enter your Email"
                  name       ="email"
                  value      = {formData.email}
                  onChange   = {handleChanges}
                  className  ="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type       ="password"
                  placeholder="Password"
                  name       ="password"
                  value      = {formData.password}
                  onChange   = {handleChanges}
                  className  ="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label
                  htmlFor  =""
                  className="text-headingColor font-bold text-[16px] leading-7"
                >
                  Are you a:
                  <select
                    name     ="role"
                    value    = {formData.role}
                    onChange = {handleChanges}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="select">Select</option>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <label
                  htmlFor=""
                  className="text-headingColor font-bold text-[16px] leading-7"
                >
                  Gender :
                  <select
                    name     ="gender"
                    value    = {formData.gender}
                    onChange = {handleChanges}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="select">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid flex items-center justify-center">
                  <img
                    src      ={younes}
                    className="w-[60px] h-[60px] rounded-full object-cover object-top"
                  />
                </figure>

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type     ="file"
                    name     ="photo"
                    onChange = {handleFileChanges}
                    id       ="customFile"
                    accept   =".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-3 py-[0.375rem] text-[15px] leading-6 bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                  type     ="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg font-semibold px-4 py-3"
                >
                  Sign Up
                </button>
              </div>

              <p className="mt-5 text-textColor text-center">
                Already have an account?{" "}
                <Link
                  to       ="/login"
                  className="text-primaryColor font-medium ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup
