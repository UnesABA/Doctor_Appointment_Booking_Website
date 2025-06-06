import { useState }  from "react"
import Loading       from "../../components/Loading/Loading"
import Error         from "../../components/Error/Error"
import useGetProfile from "../../hooks/useFetchData"
import { BASE_URL }  from "../../config"
import Tabs          from "./Tabs"
import starIcon      from "../../assets/images/Star.png"
import DoctorAbout   from "../../pages/Doctors/DoctorAbout"
import Profile       from "./Profile"

const Dashboard = () => {
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
  )

  const [tab, setTab] = useState("overview")

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}
        {error && !loading && <Error />}

        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} />
            <div className="lg:col-span-2">
              {data.isApproved !== "pending" && (
                <div className="flex items-center gap-3 p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 text-yellow-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <text
                      x="10"
                      y="15"
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="bold"
                      fill="currentColor"
                      fontFamily="Arial, sans-serif"
                    >
                      i
                    </text>
                  </svg>
                  <span className="sr-only">Info</span>
                  <div className="ml-3 text-sm font-medium">
                    to get approved please complete your profile. we will review
                    manually and approve within 3 days.
                  </div>
                </div>
              )}

              <div className="mt-8">
                {tab === "overview" && (
                  <div>
                    <div className="flex items-center gap-4 mt-10">
                      <figure className="max-w-[200px] max-h-[200px]">
                        <img src={data?.photo} className="w-full" />
                      </figure>
                      <div>
                        <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
                          {data.specialization}
                        </span>
                        <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">
                        {data.name}
                        </h3>
                        <div className="flex items-center gap-[6px]">
                          <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold ">
                            <img src={starIcon} /> {data.averageRating}
                          </span>
                          <span className="text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold ">
                            ({data.totalRating})
                          </span>
                        </div>

                        <p className="text__para font-[15px] lg:max-w-[390px] leading-6">
                          doctor bio
                        </p>
                      </div>
                    </div>
                    <DoctorAbout
                      name          ={data.name}
                      about         ={data.about}
                      qualifications={data.qualifications}
                      experiences   ={data.experiences}
                    />
                  </div>
                )}
                {tab === "appointment" && <div>Appointments</div>}
                {tab === "settings" && <Profile doctorData={data}/>}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Dashboard
