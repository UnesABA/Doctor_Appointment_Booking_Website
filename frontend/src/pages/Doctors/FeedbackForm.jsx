import { useState } from "react"
import { AiFillStar } from "react-icons/ai"

const FeedbackForm = () => {
  const [rating, setRating]         = useState(0)
  const [hover, setHover]           = useState(0)
  const [reviewText, setReviewText] = useState("")

  const handleSubmitReview = ( async e => {
    e.preventDefault()
  })

  return (
    <form>
      {/* rating */}
      <div>
        <h3 className="text-headingColor text-[16px] font-semibold leading-6 mb-4 mt-0">
          How would you rate the overall experience ?
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1

            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= (hover ? hover : rating)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } 
                transition-transform duration-200 ease-in-out 
                hover:scale-125 
                active:scale-90
                bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0)
                  setRating(0)
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            )
          })}
        </div>
      </div>
      
      {/* Feedback */}
      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] font-semibold leading-6 mb-4 mt-0">
          Share your Feedback or your Suggestions
        </h3>

        <textarea 
          className= "border border-solid border-[#0066ff34] focus-outline outline-primaryColor w-full px-4 py-3 rounded-md" 
          rows= "5"
          placeholder= "write your message here"
          onChange= {(event) => setReviewText(event.target.value)}
        ></textarea>
      </div>

      <button 
        type= "submit" 
        onClick= {handleSubmitReview} 
        className="btn"
      > 
        Submit Feedback
      </button>
    </ form>
  )
}

export default FeedbackForm
