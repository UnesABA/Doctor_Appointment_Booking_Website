import doctor1          from "../assets/images/Doctor1.jpg"
import doctor9          from "../assets/images/Doctor9.jpg"
import doctor4          from "../assets/images/Doctor4.jpg"
import icon01           from "../assets/images/icon01.png"
import icon02           from "../assets/images/icon02.png"
import icon03           from "../assets/images/icon03.png"
import { Link }         from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"

const Home = () => {
  return (
    <div className= "home">
      {/* ============== Hero Section ============== */}
        
          <section className= "hero__section pt-[60px] 2xl:h-[800px]">
            <div className="container">
              <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
                {/* ============== Hero Left: Main Heading and Intro ============== */}
                <div>
                  <div className= "lg:w-[570px]">
                    <h1 className= "text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                      We help patients toward lasting wellness
                    </h1>
                    <p className= "text__para">
                      Our mission is to connect you with top healthcare professionals and deliver trusted, personalized medical solutions—ensuring comfort, clarity, and care at every step of your wellness journey
                    </p>

                    <button className="btn">
                      Request an Appointment
                    </button>
                  </div>
                {/* ============== Hero Stats: Expertise, Locations, Satisfaction ============== */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      25+
                    </h2>
                    <span className= "w-[76px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className= "text__para">Trusted Expertise</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      12+
                    </h2>
                    <span className= "w-[76px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className= "text__para">Clinic Location</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className= "w-[115px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className= "text__para">Patient Satisfaction</p>
                  </div>
                </div>
                </div>

                {/* ============== Hero Right: Doctor Image Gallery ============== */}
                <div className="flex gap-[30px] justify-end">
                  <div>
                    <img className= "w-[500px] h-[550px] object-cover rounded-[20px]" src={doctor1} alt="doctor" />
                  </div>
                  <div className= "mt-[30px]">
                    <img className= "w-[300px] h-[300px] object-cover rounded-[10px] mb-[30px]" src={doctor9} alt="doctor" />
                    <img className= "w-[300px] h-[300px] object-cover rounded-[10px]"           src={doctor4} alt="doctor" />
                  </div>
                </div>
              </div>  
            </div>
          </section>
        
      {/* ============== Hero Section End ============== */}

      <section>
        <div className="container">
          <div className= "lg:w-[470px] mx-auto">
            <h2 className= "heading text-center">
              Where expert care meets genuine compassion
            </h2>

            <p className="text__para text-center">
             With world-class care for everyone, our health system delivers unmatched, expert healthcare
            </p>
          </div>

          <div className= "grid grid-col-1 mt-[30px] gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className= "flex items-center justify-center">
                <img src= {icon01} />
              </div>

              <div className= "mt-[30px]">
                <h2 className= "text-[26px] text-center leading-9 text-headingColor font-[700]">
                  Find a Doctor
                </h2>

                <p className= "text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                 Exceptional care for all — our health network combines expertise and innovation,  from laboratory research to clinical excellence
                </p>

                <Link to= "/doctors" className= "w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none ">
                  <BsArrowRight className= "group-hover:text-white w-6 h-5"/>
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className= "flex items-center justify-center">
                <img src= {icon02} />
              </div>

              <div className= "mt-[30px]">
                <h2 className= "text-[26px] text-center leading-9 text-headingColor font-[700]">
                  Find a Location
                </h2>

                <p className= "text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                 Exceptional care for all — our health network combines expertise and innovation,  from laboratory research to clinical excellence
                </p>

                <Link to= "/doctors" className= "w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none ">
                  <BsArrowRight className= "group-hover:text-white w-6 h-5"/>
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className= "flex items-center justify-center">
                <img src= {icon03} />
              </div>

              <div className= "mt-[30px]">
                <h2 className= "text-[26px] text-center leading-9 text-headingColor font-[700]">
                  Make an Appointment
                </h2>

                <p className= "text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Exceptional care for all — our health network combines expertise and innovation, from laboratory research to clinical excellence
                </p>

                <Link to= "/doctors" className= "w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none ">
                  <BsArrowRight className= "group-hover:text-white w-6 h-5"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home