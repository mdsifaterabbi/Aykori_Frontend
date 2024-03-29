import axios from "axios";
import { useEffect, useState } from "react";

const JobCard = ({ props }) => {
  const { _id, jobTitle, slug, jobDescription, createdAt, updatedAt } = props;

  const [totalCandidatesPerSlug, setTotalCandidatesPerSlug] = useState();

  //get total applicant per slug
  const getTotalApplicantPerSlug = async (req, res) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_REACT_API}/api/v1/applicant-per-job/${slug}`
      );
      if (data?.success) {
        setTotalCandidatesPerSlug(data?.tApplicantperSlug);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTotalApplicantPerSlug();
  }, [slug]);


  return (
    <>
      <div className="flex flex-row bg-[#b9f2e5] md:w-[90%] xl:w-[80%] mx-auto my-[10px] py-[10px] rounded-md">
        <div className="md:basis-1/5 xl:basis-1/4">
          <div className="md:w-[30px] md:h-[30px] md:mt-[5px] xl:w-[50px] xl:h-[50px] bg-[#11998e] text-white ml-[10px] rounded-sm text-center md:leading-[30px] xl:leading-[50px]">
            {totalCandidatesPerSlug ? (
              <p>{totalCandidatesPerSlug}</p>
            ) : (
              <p>0</p>
            )}
          </div>
        </div>
        <div className="md:basis-1/5 xl:basis-3/4">
          <p className="pl-[10px] pr-[2px] xl:text-[18px] md:text-[12px] font-semibold">
            {jobTitle}
          </p>
          <p className="pl-[10px] font-thin xl:text-[14px] md:text-[11px] md:pt-[5px] xl:tracking-[1px]">
            Total Application
          </p>
        </div>
      </div>
    </>
  );
};

export default JobCard;
