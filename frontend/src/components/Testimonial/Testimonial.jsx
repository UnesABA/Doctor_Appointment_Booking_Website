import { Pagination }          from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { HiStar }              from "react-icons/hi"
import patientAvatar           from "../../assets/images/patient-avatar.png"
import "swiper/css"
import "swiper/css/pagination"

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper 
        modules={[Pagination]} 
        pagination={{ clickable: true }} 
        spaceBetween={30} 
        slidesPerView={1} 
        breakpoints={{
          640:{
            spaceBetween : 0, 
            slidesPerView: 1
          },
          768:{
            spaceBetween : 20, 
            slidesPerView: 2
          },
          1024:{
            spaceBetween : 30, 
            slidesPerView: 3
          },
        }}
      >
        <SwiperSlide>
          <div className= "py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src= {patientAvatar} />
              <div>
                <h4 className= "text-[18px] leading-[30px] font-semibold text-headingColor">
                  Zakaria TALHAOUI
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className= "text-[16px] leading-7 text-textColor mt-4 font-[400]">
             "I received medical care from them, and the experience was excellent. 
              Their team is caring, and the services are top-notch."
            </p>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className= "py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src= {patientAvatar} />
              <div>
                <h4 className= "text-[18px] leading-[30px] font-semibold text-headingColor">
                  Ayoub AIT KAACH
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className= "text-[16px] leading-7 text-textColor mt-4 font-[400]">
             "The doctors were incredibly professional and compassionate. I felt genuinely cared for throughout my treatment."
            </p>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className= "py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src= {patientAvatar} />
              <div>
                <h4 className= "text-[18px] leading-[30px] font-semibold text-headingColor">
                  Hicham DOUGE
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className= "text-[16px] leading-7 text-textColor mt-4 font-[400]">
             "From the moment I walked in, I knew I was in good hands. Their medical service exceeded all my expectations"
            </p>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className= "py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src= {patientAvatar} />
              <div>
                <h4 className= "text-[18px] leading-[30px] font-semibold text-headingColor">
                  Mohamed BAHOU
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                  <HiStar className= "text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className= "text-[16px] leading-7 text-textColor mt-4 font-[400]">
             "The staff was attentive and the entire experience was smooth. I’m grateful for the excellent care I received"
            </p>

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonial
