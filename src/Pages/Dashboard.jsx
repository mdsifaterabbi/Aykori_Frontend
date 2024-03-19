import { Helmet } from "react-helmet-async";
import Menu from "../Components/Menu";
import JobCard from "../Components/JobCard";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDashboardContext } from "../ContextAPI/DashboardContextAPI";

const Dashboard = ({ title }) => {
  const {
    getAllJobs,
    setAllJobs,
    totalApplicants,
    setTotalApplicants,
    shortListed,
    setShortListed,
    rejected,
    setRejected,
  } = useDashboardContext(); //my Context API
  const [recentJobs, setRecentJobs] = useState([]);
  const [addNewJob, setAddNewJob] = useState({});

  //get all jobs
  const getMyAllJobs = async (req, res) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_REACT_API}/api/v1/get-all-jobs`
      );
      if (data?.success) {
        setAllJobs(data?.allJobs);
        setRecentJobs(data?.recentJobs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyAllJobs();
    findTotalApplicants();
    findApplicantStatus();
  }, [addNewJob]);

  const createJob = (data) => {
    setAddNewJob(data);
    reset();
  };

  //creating new job using axios call
  const createJobAxios = async (req, res) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_REACT_API}/api/v1/create-job`,
        {
          jobTitle: addNewJob.jobTitle,
          jobDescription: addNewJob.jobDescription,
        }
      );
      if (data?.success) {
        console.log("Job Created Successfully");
        console.log(data.job);
        await getMyAllJobs(); // Refetch jobs after successful creation
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    createJobAxios();
  }, [addNewJob]);

  //finding total applicants for all jobs
  const findTotalApplicants = async (req, res) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_REACT_API}/api/v1/total-applicants`
      );
      if (data?.success) {
        setTotalApplicants(data.totalApplicant);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //finding applicant status like shortlisted or rejected
  const findApplicantStatus = async (req, res) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_REACT_API}/api/v1/find-applicant-status`
      );
      if (data?.success) {
        setShortListed(data.totalShortListed);
        setRejected(data.totalRejected);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <>
      {/* Add job modal starts form here */}
      <dialog id="addJobModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <div className="py-4">
            <form onSubmit={handleSubmit(createJob)}>
              <input
                {...register("jobTitle", { required: true })}
                placeholder="add jobTitle"
                className="block py-[5px] px-[10px] my-[10px] w-[90%] mx-auto bg-[#2b2a33] text-white"
              />
              {errors.jobTitle && <p>Job title is required.</p>}
              <textarea
                {...register("jobDescription", { required: true })}
                placeholder="Add Job Description"
                className="block py-[5px] px-[10px] my-[10px] w-[90%] mx-auto bg-[#2b2a33] text-white"
                style={{ minHeight: "200px", maxHeight: "350px" }}
              />
              {errors.jobDescription && <p>Job Description is required.</p>}

              <button
                type="submit"
                className="btn btn-success btn-sm rounded-none ml-[20px]"
              >
                Create Job
              </button>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm rounded-none btn-info">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
      {/* Add job modal ends here */}
      <div>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </div>
      <div className="flex md:flex-row lg:flex-row xl:flex-row xl:flex-wrap md:w-[100vw] lg:w-[95vw] xl:w-[90vw] mx-auto">
        <div className="md:basis-[15%] lg:basis-[20%] xl:basis-[20%] h-[100vh] bg-[#ffffff]">
          <Menu />
        </div>
        {/* ============================================= */}
        <div className="md:basis-[60%] lg:basis-[60%] xl:basis-[60%] h-[100vh] bg-[#ffffff]">
          <div className="flex md:flex-row xl:flex-row bg-[#ffffff]">
            <div className="md:basis-1/2 xl:basis-1/2">
              <p className="py-[30px] font-bold xl:text-[20px]">Good Morning</p>
            </div>
            <div className="md:basis-1/2 xl:basis-1/2">
              <div className="flex md:flex-row xl:flex-row">
                <div className="md:basis-2/3 xl:basis-2/3">
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-[#b9f2e5] py-[5px] pl-[5px] mt-[30px] md:w-[150px] xl:w-[400px] rounded-sm"
                  ></input>
                </div>
                <div className="md:basis-1/3 xl:basis-1/3 md:mt-[25px] xl:mt-[25px]">
                  <button className="btn btn-sm bg-[#11998e] rounded-sm mt-[5px]">
                    <img
                      src="../dashboard/search.png"
                      alt="search"
                      className="md:w-[25px] xl:w-[25px]"
                    ></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row xl:flex-row flex-wrap bg-[#ffffff]">
            <div className="md:basis-1/3 xl:basis-1/3 py-[50px]">
              <div className="inline-block">
                <p className="font-semibold md:text-[12px] xl:text-[16px]">
                  Total Candidates
                </p>
                <p className="font-bold xl:text-[20px]">{totalApplicants}</p>
              </div>
              <div className="inline-block">
                <img
                  src="../dashboard/candidates.png"
                  alt="candidates"
                  className="inline md:w-[50px] xl:w-[100px]"
                ></img>
              </div>
            </div>
            <div className="md:basis-1/3 xl:basis-1/3 py-[50px]">
              <div className="inline-block">
                <p className="font-semibold md:text-[12px] xl:text-[16px]">
                  Shortlisted Candidates
                </p>
                <p className="font-bold xl:text-[20px]">{shortListed}</p>
              </div>
              <div className="inline-block">
                <img
                  src="../dashboard/shortlisted.png"
                  alt="shortlisted"
                  className="inline md:w-[50px] xl:w-[100px]"
                ></img>
              </div>
            </div>
            <div className="md:basis-1/3 xl:basis-1/3 py-[50px]">
              <div className="inline-block">
                <p className="font-semibold md:text-[12px] xl:text-[16px]">
                  Rejected Candidates
                </p>
                <p className="font-bold xl:text-[20px]">{rejected}</p>
              </div>
              <div className="inline-block">
                <img
                  src="../dashboard/rejected.png"
                  alt="rejected"
                  className="inline md:w-[50px] xl:w-[100px]"
                ></img>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row xl:flex-row gap-2 md:py-[50px] xl:py-[100px] bg-[#ffffff]">
            <div className="md:basis-2/3 xl:basis-2/3">
              <img
                src="../dashboard/statistics.png"
                alt="statistics"
                className="md:w-[200px] lg:w-[400px]"
              ></img>
            </div>
            <div className="md:basis-1/3 xl:basis-1/3">
              <img
                src="../dashboard/statistics_2.png"
                alt="statistics_2"
                className="md:w-[100px] lg:w-[200px]"
              ></img>
            </div>
          </div>
          <div className="flex md:flex-row xl:flex-row gap-3 md:py-[50px] xl:py-[0px] bg-[#ffffff]">
            <div className="md:basis-2/3 xl:basis-2/3">
              <img
                src="../dashboard/Time_data.png"
                alt="Time_data"
                className="md:w-[200px] lg:w-[400px]"
              ></img>
            </div>
            <div className="md:basis-2/3 xl:basis-1/3">
              <img
                src="../dashboard/Gender.png"
                alt="Gender"
                className="md:w-[100px] md:pl-[50px] lg:w-[200px]"
              ></img>
            </div>
          </div>
        </div>
        {/* ============================================== */}
        <div className="md:basis-[25%] lg:basis-[20%] xl:basis-[20%] bg-[#ffffff] h-[100vh] md:overflow-y-scroll">
          <div className="text-center">
            <h1 className="font-semibold md:text-[16px] xl:text-[24px] pt-[50px] pb-[20px]">
              Welcome back XTZ
            </h1>
            <button
              onClick={() => document.getElementById("addJobModal").showModal()}
              className="btn bg-[#11998e] text-white md:btn-sm xl:btn-md rounded-md"
            >
              +Create New Job
            </button>
          </div>
          <div>
            <p className="font-medium md:tracking-tight xl:tracking-[1px] pt-[50px] pb-[30px] md:pl-[5px] xl:pl-[30px]">
              Recent Added Jobs
            </p>

            {recentJobs.map((job, index) => (
              <JobCard key={index} props={job} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
