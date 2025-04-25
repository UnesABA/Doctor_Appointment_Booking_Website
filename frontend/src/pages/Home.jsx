import doctor1          from "../assets/images/Doctor1.jpg";
import doctor9          from "../assets/images/Doctor9.jpg";
import doctor4          from "../assets/images/Doctor4.jpg";
import icon01           from "../assets/images/icon01.png";
import icon02           from "../assets/images/icon02.png";
import icon03           from "../assets/images/icon03.png";
import videoIcon        from "../assets/images/video-icon.png";
import faqImg           from "../assets/images/faq-img.png";
import doctor10         from "../assets/images/doctor10.jpg";
import { Link }         from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About            from "../components/About/About";
import ServiceList      from "../components/Services/ServiceList";
import DoctorList       from "../components/Doctors/DoctorList";
import FaqList          from "../components/FAQ/faqList";
import Testimonial      from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="home">
      {/* ============== Hero Section Start ============== */}

      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ============== Hero Left: Main Heading and Intro ============== */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients toward lasting wellness
                </h1>
                <p className="text__para">
                  Our mission is to connect you with top healthcare
                  professionals and deliver trusted, personalized medical
                  solutions—ensuring comfort, clarity, and care at every step of
                  your wellness journey
                </p>

                <button className="btn">Request an Appointment</button>
              </div>
              {/* ============== Hero Stats: Expertise, Locations, Satisfaction ============== */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    25+
                  </h2>
                  <span className="w-[76px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Trusted Expertise</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    12+
                  </h2>
                  <span className="w-[76px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[115px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* ============== Hero Right: Doctor Image Gallery ============== */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img
                  className="w-[500px] h-[550px] object-cover rounded-[20px]"
                  src={doctor1}
                  alt="doctor"
                />
              </div>
              <div className="mt-[30px]">
                <img
                  className="w-[300px] h-[300px] object-cover rounded-[10px] mb-[30px]"
                  src={doctor9}
                  alt="doctor"
                />
                <img
                  className="w-[300px] h-[300px] object-cover rounded-[10px]"
                  src={doctor4}
                  alt="doctor"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== Hero Section End ============== */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Where expert care meets genuine compassion
            </h2>

            <p className="text__para text-center">
              With world-class care for everyone, our health system delivers
              unmatched, expert healthcare
            </p>
          </div>

          <div className="grid grid-col-1 mt-[30px] gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] text-center leading-9 text-headingColor font-[700]">
                  Find a Doctor
                </h2>

                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Exceptional care for all — our health network combines
                  expertise and innovation, from laboratory research to clinical
                  excellence
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] text-center leading-9 text-headingColor font-[700]">
                  Find a Location
                </h2>

                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Exceptional care for all — our health network combines
                  expertise and innovation, from laboratory research to clinical
                  excellence
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] text-center leading-9 text-headingColor font-[700]">
                  Make an Appointment
                </h2>

                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Exceptional care for all — our health network combines
                  expertise and innovation, from laboratory research to clinical
                  excellence
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* ============== Services Section Start ============== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para text-center">
              Exceptional care for all. Our healthcare system delivers
              unparalleled expertise, from the lab to the clinic
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/* ============== Services Section End ============== */}

      {/* ============== Feature Section Start ============== */}
      <section>
        <div className="container">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            {/* ============== Feature Content ============== */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br /> anytime
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact their office
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients. Use the
                  online scheduling tool to select an appointment time
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            {/* ============== Feature Img ============== */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] mr-[50px] lg:mt-0 ">
              <img src={doctor10} className="w-[400px] rounded mr-[130px]" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] ">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg-gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Thur, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400]">
                      08:00 AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px] ">
                  <img
                    className="w-[40px] h-[40px] object-cover rounded-[20px]"
                    src={doctor10}
                  />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor ">
                    Dr. Said AIT BEN ALI
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============== Feature Section End ============== */}
      {/* ============== Doctors ============== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text__para text-center">
              Meet the minds behind the medicine — experienced, dedicated, and
              driven to provide the highest standard of care to every patient.
            </p>
          </div>

          <DoctorList />
        </div>
      </section>
      {/* ============== Doctors End ============== */}

      {/* ============== FAQ Section Start ============== */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">Frequently Asked Questions</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* ============== FAQ Section End ============== */}
      {/* ============== Testimonial Start ============== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Patient testimonials</h2>
            <p className="text__para text-center">
             Hear directly from our patients about their care experience with us
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
      {/* ============== Testimonial End ============== */}
    </div>
  );
};

export default Home;
