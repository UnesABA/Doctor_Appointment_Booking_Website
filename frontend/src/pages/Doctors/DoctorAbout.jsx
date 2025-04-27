import { formatDate } from "../../routes/utils/formateDate";

const DoctorAbout = () => {
  return (
    <>
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
        About of
        <span className="text-irisBlueColor font-bold text-[24px] leading-9">
          Nabila LMAANI
        </span>
      </h3>
      <p className="text__para">
        Dr. Nabila LMAANI is a highly skilled surgeon known for her precision,
        dedication, and compassionate care. With years of experience, she
        strives to deliver the best outcomes and transform the lives of her
        patients every day.
      </p>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("9-3-2006")} - {formatDate("7-1-2013")}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">
                PhD in Surgery
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              NewYork-Presbyterian Hospital
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("9-10-2013")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PhD in Surgery
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              NewYork-Presbyterian Hospital
            </p>
          </li>
        </ul>

        <div>
          <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
            Experience
          </h3>

          <ul className= "grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            <li className= "p-4 rounded bg-[#fff9ea]">
              <span className= "text-yellowColor text-[15px] leading-6 font-semibold">
                {formatDate("9-3-2006")} - {formatDate("7-1-2013")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Sr. Surgeon
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                NewYork-Presbyterian Hospital
              </p>
            </li>
            <li className= "p-4 rounded bg-[#fff9ea]">
              <span className= "text-yellowColor text-[15px] leading-6 font-semibold">
                {formatDate("9-3-2006")} - {formatDate("7-1-2013")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Sr. Surgeon
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                NewYork-Presbyterian Hospital
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DoctorAbout;
