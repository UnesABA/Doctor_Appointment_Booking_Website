import aboutImg     from "../../assets/images/about1.jpg"
import aboutCardImg from "../../assets/images/about-card.png"
import { Link }     from "react-router-dom"

const About = () => {
  return (
    <section>
      <div className="container">
        <div className= "flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ========== About Img ========== */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img className= "w-[400px] object-cover rounded-[10px]" src= {aboutImg} />
            <div className= "absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src= {aboutCardImg} />
            </div>
          </div>

          {/* ========== About Content ========== */}

          <div className= "w-full lg:w-1/2 xl:w-[670px] order-1 lg-order-2 ">
            <h2 className= "heading">Honored to stand among the world's greatest nations</h2>
            <p className= "text__para">
              For 25 consecutive years, Morocco News & World Report has recognized us as one of the best public hospitals in the world — and ranked #1 in Africa.
              Our unwavering commitment to excellence continues to earn the trust of patients across the continent
            </p>

            <p className="text__para mt-[30px]">
              Our best is something we strive for each day, caring for our patients not by looking back at what we've accomplished, but by focusing on what we can do tomorrow.
              Every step forward brings us closer to providing the highest level of care and making a lasting impact on our community
            </p>

            <Link to= "/">
              <button className="btn">Learn More</button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About