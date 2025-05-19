import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import uploadImageToCloudinary from "../../utils/uploadCloudinary.js"
import { BASE_URL, token } from "../../config.js"
import { toast } from "react-toastify"
import HashLoader from "react-spinners/hashLoader"

const Profile = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    gender: "",
    bloodType: "",
  })

  const navigate = useNavigate()

  useEffect(() => {
    if (!user || !user.name) return

    setFormData((prev) => ({
      ...prev,
      name: user.name || "",
      photo: user.photo || "",
      gender: user.gender || "",
      bloodType: user.bloodType || "",
      email: user.email || "",
    }))
  }, [user])

  const handleChanges = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleFileChanges = async (event) => {
    const file = event.target.files[0]
    const data = await uploadImageToCloudinary(file)

    setSelectedFile(data.url)
    setFormData({
      ...formData,
      photo: data.url,
    })
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      })

      const { message } = await res.json()

      if (!res.ok) {
        throw new Error(message)
      }

      setLoading(false)
      toast.success(message)
      navigate("/users/profile/me")
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }
  return (
    <div className="mt-5 ml-2">
      <form onSubmit={submitHandler}>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChanges}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7text-headingColor placeholder:text-textColor cursor-pointer"
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            value={formData.email}
            onChange={handleChanges}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7text-headingColor placeholder:text-textColor cursor-pointer"
            aria-readonly
            readOnly
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChanges}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7text-headingColor placeholder:text-textColor cursor-pointer"
          />
        </div>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Blood Type"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChanges}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7text-headingColor placeholder:text-textColor cursor-pointer"
            required
          />
        </div>

        <div className="mb-5 flex items-center justify-between">
          <label
            htmlFor=""
            className="text-headingColor font-bold text-[16px] leading-7"
          >
            Gender :
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChanges}
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
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid flex items-center justify-center">
              <img src={formData.photo} className="w-full rounded-full" />
            </figure>
          )}

          <div className="relative w-[130px] h-[50px] object-fit">
            <input
              type="file"
              name="photo"
              onChange={handleFileChanges}
              id="customFile"
              accept=".jpg, .png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center px-3 py-[0.375rem] text-[15px] leading-6 bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
            >
              {selectedFile ? selectedFile.name : "Upload Photo"}
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg font-semibold px-4 py-3"
          >
            {loading ? <HashLoader size={25} color="#ffffff" /> : "Update"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Profile
