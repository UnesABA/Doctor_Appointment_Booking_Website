import { Link }           from "react-router-dom"
import logo               from "../../assets/images/logo.png"
import { AiFillGithub }   from "react-icons/ai"

const github = {
  path: "https://github.com/UnesABA/Doctor_Appointment_Booking_Website/",
  icon: <AiFillGithub className= "group-hover:text-white w-4 h-5"/>
}

const quickLinks01 = [
{
  path   : "/",
  display: "Home"
},
{
  path   : "/",
  display: "About us"
},
{
  path   : "/services",
  display: "Services"
},
{
  path   : "/",
  display: "Blog"
},
]
const quickLinks02 = [
{
  path   : "/find-a-doctor",
  display: "Find a Doctor"
},
{
  path   : "/",
  display: "Request an Appointment"
},
{
  path   : "/",
  display: "Find a Location"
},
{
  path   : "/",
  display: "Get a Opinion"
},
]
const quickLinks03 = [
{
  path   : "/",
  display: "Donate"
},
{
  path   : "/contact",
  display: "Contact Us"
}
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className= "pb-16 pt-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between flex-wrap gap-[30px]">
          <div>
            <img src={logo} />
            <p className= "text-[16px] leading-7 font-[400] text-textColor">Copyrights © {year} developed by Younes AIT BEN ALI all rights reserved</p>

            <Link to= {github.path} className= "w-9 h-9 border border-solid border-[#121A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none">
              {github.icon}
            </Link>
          </div>

          <div>
            <h2 className= "text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>

            <ul>
              {quickLinks01.map((link, index) =><li key= {index} className= "mb-4">
                  <Link to= {link.path} className= "text-[16px] leanding-7 font-[400] text-textColor">
                    {link.display}
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h2 className= "text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to
            </h2>

            <ul>
              {quickLinks02.map((link, index) =><li key= {index} className= "mb-4">
                  <Link to= {link.path} className= "text-[16px] leanding-7 font-[400] text-textColor">
                    {link.display}
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h2 className= "text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>

            <ul>
              {quickLinks03.map((link, index) =><li key= {index} className= "mb-4">
                  <Link to= {link.path} className= "text-[16px] leading-7 font-[400] text-textColor">
                    {link.display}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer