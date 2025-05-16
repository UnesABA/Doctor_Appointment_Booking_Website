import Error from "../../components/Error/Error"
import Loading from "../../components/Loading/Loading"
import { BASE_URL } from "../../config"
import useGetAppointments from "../../hooks/useFetchData"
import DoctorCard from "../../components/Doctors/DoctorCard"

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useGetAppointments(`${BASE_URL}/users/appointments/my-appointments`)

  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errorMessage={error} />}
      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {Array.isArray(appointments) &&
            appointments.map((doctor) => (
              <DoctorCard doctor={doctor} key={doctor._id} />
            ))}
        </div>
      )}

      {!loading &&
        !error &&
        Array.isArray(appointments) &&
        appointments.length === 0 && (
          <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor">
            You didn't book any Doctor yet!
          </h2>
        )}
    </div>
  )
}

export default MyBookings
