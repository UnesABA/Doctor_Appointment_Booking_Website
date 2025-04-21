import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home                             from "../pages/Home"
import Doctors                          from "../pages/Doctors/Doctors"
import DoctorsDetails                   from "../pages/Doctors/DoctorsDetails"
import Login                            from "../pages/Login"
import Services                         from "../pages/Services"
import Signup                           from "../pages/Signup"

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/"            element= {<Home />} />
        <Route path= "/home"        element= {<Home />} />
        <Route path= "/doctors"     element= {<Doctors />} />
        <Route path= "/doctors/:id" element= {<DoctorsDetails />} />
        <Route path= "/login"       element= {<Login />} />
        <Route path= "/services"    element= {<Services />} />
        <Route path= "/register"    element= {<Signup />} />
        <Route path= "/contact"     element= {<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
