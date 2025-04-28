import { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formatDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import showFeedbackForm from "./FeedbackForm";
import FeedbackForm from "./FeedbackForm";

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews (842)
        </h4>

        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img className="w-full" src={avatar} />
            </figure>

            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Abdesalam MACHKOKOT
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formatDate("1-13-2024")}
              </p>
              <p className="text__para mt-3 font-medium text-[15px]">
                "Dr. Nabila LMAANI's expertise and compassionate care made all
                the difference in my recovery. She took the time to explain
                everything and put me at ease. I'm grateful for the outstanding
                results and highly recommend her to anyone in need of a skilled
                surgeon. 😊"
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067FF" />
            ))}
          </div>
        </div>

        {showFeedbackForm ? (
          <FeedbackForm />
        ) : (
          <div className="text-center">
            <button className="btn" onClick={() => setShowFeedbackForm(true)}>
              Give Feedback
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Feedback;
