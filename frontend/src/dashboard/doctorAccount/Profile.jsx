import { useEffect, useState }            from "react"
import { AiOutlineDelete }     from "react-icons/ai"
import uploadImageToCloudinary from "./../../utils/uploadCloudinary"
import { BASE_URL, token }     from "./../../config.js"
import { toast }               from "react-toastify"  

const Profile = ({doctorData}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: 0,
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about: "",
    photo: null,
  })

  useEffect(() => {
  setFormData({
    name: doctorData?.name || "",
    email: doctorData?.email || "",
    password: doctorData?.password || "",
    phone: doctorData?.phone || "",
    bio: doctorData?.bio || "",
    gender: doctorData?.gender || "",
    specialization: doctorData?.specialization || "",
    ticketPrice: doctorData?.ticketPrice || 0,
    qualifications: doctorData?.qualifications || [],
    experiences: doctorData?.experiences || [],
    timeSlots: doctorData?.timeSlots || [],
    about: doctorData?.about || "",
    photo: doctorData?.photo || null,
  });
}, [doctorData])
  

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0]
    const data =  await uploadImageToCloudinary(file)

    setFormData({...formData, photo: data?.url})
  }

  const updateProfileHandler = async (event) => {
    event.preventDefault()

    try {
      const res = await fetch(`${BASE_URL}/doctors/profile/${doctorData._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData) 
      })

      const result = await res.json()
      if(!res.ok){
        throw Error(result.message)
      }

      toast.success(result.message)
      

    } catch (error) {
      toast.error(error.message)
    }
  }

  //Reusable function for adding item
  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }))
  }

  //Reusable function for deleting item
  const deleteItem = (key, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i !== index),
    }))
  }

  //Reusable input change function
  const handleReusableInputChangeFunction = (key, index, event) => {
    const { name, value } = event.target

    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]]

      updateItems[index][name] = value

      return {
        ...prevFormData,
        [key]: updateItems,
      }
    })
  }

  const addQualification = (event) => {
    event.preventDefault()

    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "",
      university: "",
    })
  }

  const handleQualificationChange = (event, index) => {
    handleReusableInputChangeFunction("qualifications", index, event)
  }

  const deleteQualification = (event, index) => {
    event.preventDefault()
    deleteItem("qualifications", index)
  }

  const addExperience = (event) => {
    event.preventDefault()

    addItem("experiences", {
      startingDate: "",
      endingDate: "",
      position: "Senior Sergeon",
      hospital: "AIT BEN ALI Hospital",
    })
  }

  const handleExperienceChange = (event, index) => {
    handleReusableInputChangeFunction("experiences", index, event)
  }

  const deleteExperience = (event, index) => {
    event.preventDefault()
    deleteItem("experiences", index)
  }

  const addTimeSlot = (event) => {
    event.preventDefault();

    addItem("timeSlots", { day: "Monday", startingTime: "09:00", endingTime: "04:30" });
  };

  const handleTimeSlotChange = (event, index) => {
    handleReusableInputChangeFunction("timeSlots", index, event);
  };

  const deleteTimeSlot = (event, index) => {
    event.preventDefault();
    deleteItem("timeSlots", index);
  }

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile Information
      </h2>
      <form>
        <div className="mb-5">
          <p className="form__label">Name*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form__input"
            required
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Email*</p>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form__input"
            readOnly
            aria-readonly
            disabled={true}
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Phone*</p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone number"
            className="form__input"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Bio*</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Tell us more about you"
            className="form__input"
            maxLength={100}
          />
        </div>

        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form__label">Gender*</p>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <p className="form__label">Specialization*</p>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>

            <div>
              <p className="form__label">Ticket Price*</p>
              <input
                type="number"
                placeholder="100"
                name="ticketPrice"
                value={formData.ticketPrice}
                onChange={handleInputChange}
                className="form__input"
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <p className="form__label">Qualifications*</p>
          {formData?.qualifications.map((qualification, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={qualification.startingDate}
                      onChange={(event) =>
                        handleQualificationChange(event, index)
                      }
                      className="form__input"
                    />
                  </div>
                  <div>
                    <p className="form__label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={qualification.endingDate}
                      onChange={(event) =>
                        handleQualificationChange(event, index)
                      }
                      className="form__input"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form__label">Degree*</p>
                    <input
                      type="text"
                      name="degree"
                      value={qualification.degree}
                      onChange={(event) =>
                        handleQualificationChange(event, index)
                      }
                      className="form__input"
                    />
                  </div>
                  <div>
                    <p className="form__label">University*</p>
                    <input
                      type="text"
                      name="university"
                      value={qualification.university}
                      onChange={(event) =>
                        handleQualificationChange(event, index)
                      }
                      className="form__input"
                    />
                  </div>
                </div>

                <button
                  onClick={(event) => deleteQualification(event, index)}
                  className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addQualification}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Qualification
          </button>
        </div>
        <div className="mb-5">
          <p className="form__label">Experiences*</p>
          {formData?.experiences.map((experience, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={experience.startingDate}
                      onChange={(event) => handleExperienceChange(event, index)}
                      className="form__input"
                    />
                  </div>
                  <div>
                    <p className="form__label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={experience.endingDate}
                      onChange={(event) => handleExperienceChange(event, index)}
                      className="form__input"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form__label">Position*</p>
                    <input
                      type="text"
                      name="position"
                      value={experience.position}
                      onChange={(event) => handleExperienceChange(event, index)}
                      className="form__input"
                    />
                  </div>
                  <div>
                    <p className="form__label">Hospital*</p>
                    <input
                      type="text"
                      name="hospital"
                      value={experience.hospital}
                      onChange={(event) => handleExperienceChange(event, index)}
                      className="form__input"
                    />
                  </div>
                </div>

                <button
                  onClick={(event) => deleteExperience(event, index)}
                  className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button onClick= {addExperience} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
            Add Experience
          </button>
        </div>
        <div className="mb-5">
          <p className="form__label">Time Slots*</p>
          {formData?.timeSlots.map((timeSlot, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                  <div>
                    <p className="form__label">Day*</p>
                    <select
                      name="day"
                      value={timeSlot.day}
                      onChange={(event) =>
                        handleTimeSlotChange(event, index)
                      }
                      className="form__input py-3.5"
                    >
                      <option value="">Select</option>
                      <option value="Saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                    </select>
                  </div>
                  <div>
                    <p className="form__label">Starting Time*</p>
                    <input
                      type="time"
                      name="startingTime"
                      value={timeSlot.startingTime}
                      onChange={(event) =>
                        handleTimeSlotChange(event, index)
                      }
                      className="form__input"
                    />
                  </div>
                  <div>
                    <p className="form__label">Ending Time*</p>
                    <input
                      type="time"
                      name="endingTime"
                      value={timeSlot.endingTime}
                      onChange={(event) =>
                        handleTimeSlotChange(event, index)
                      }
                      className="form__input"
                    />
                  </div>
                  <div 
                    onClick={(event) => deleteTimeSlot(event, index)}
                    className="flex items-center">
                    <button className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-8 cursor-pointer">
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button onClick= {addTimeSlot} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
            Add TimeSlot
          </button>
        </div>

        <div className="mb-5">
          <p className="form__label">About*</p>
          <textarea
            name="about"
            rows={5}
            value={formData.about}
            placeholder="Write something about you"
            onChange={handleInputChange}
            className="form__input"
          ></textarea>
        </div>

        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid flex items-center justify-center">
              <img src={formData.photo} className="w-full rounded-full" />
            </figure>
          )}

          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="photo"
              onChange={handleFileInputChange}
              id="customFile"
              accept=".jpg, .png"
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
            type="submit"
            onClick={updateProfileHandler}
            className="bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  )
}

export default Profile
