import { Helmet } from "react-helmet-async";
import Menu from "../Components/Menu";
import JobCard from "../Components/JobCard";

const Dashboard = ({ title }) => {
  const jobCardContents = [
    {
      id: 1,
      jobtitle: "Product Designer",
      subText: "Total Application",
      total: 54,
    },
    {
      id: 2,
      jobtitle: "Javascript Developer",
      subText: "Total Application",
      total: 39,
    },
    {
      id: 3,
      jobtitle: "Python Developer",
      subText: "Total Application",
      total: 60,
    },
    {
      id: 4,
      jobtitle: "MERN Stack Developer",
      subText: "Total Application",
      total: 50,
    },
    {
      id: 5,
      jobtitle: "Product Designer",
      subText: "Total Application",
      total: 54,
    },
    {
      id: 6,
      jobtitle: "Junior UI/UX Designer",
      subText: "Total Application",
      total: 39,
    },
    {
      id: 7,
      jobtitle: "Brand Strategist",
      subText: "Total Application",
      total: 60,
    },
    {
      id: 8,
      jobtitle: "Jr. Frontend Engineer",
      subText: "Total Application",
      total: 50,
    },
  ];

  return (
    <>
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
                <p className="font-semibold md:text-[12px] xl:text-[16px]">Total Candidates</p>
                <p className="font-bold xl:text-[20px]">361</p>
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
                <p className="font-bold xl:text-[20px]">201</p>
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
                <p className="font-bold xl:text-[20px]">160</p>
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
              <img src="../dashboard/statistics.png" alt="statistics" className="md:w-[200px] lg:w-[400px]"></img>
            </div>
            <div className="md:basis-1/3 xl:basis-1/3">
              <img src="../dashboard/statistics_2.png" alt="statistics_2" className="md:w-[100px] lg:w-[200px]"></img>
            </div>
          </div>
          <div className="flex md:flex-row xl:flex-row gap-3 md:py-[50px] xl:py-[0px] bg-[#ffffff]">
            <div className="md:basis-2/3 xl:basis-2/3">
              <img src="../dashboard/Time_data.png" alt="Time_data" className="md:w-[200px] lg:w-[400px]"></img>
            </div>
            <div className="md:basis-2/3 xl:basis-1/3">
              <img src="../dashboard/Gender.png" alt="Gender" className="md:w-[100px] md:pl-[50px] lg:w-[200px]"></img>
            </div>
          </div>
        </div>
        {/* ============================================== */}
        <div className="md:basis-[25%] lg:basis-[20%] xl:basis-[20%] bg-[#ffffff] h-[100vh] md:overflow-y-scroll">
          <div className="text-center">
            <h1 className="font-semibold md:text-[16px] xl:text-[24px] pt-[50px] pb-[20px]">
              Welcome back XTZ
            </h1>
            <button className="btn bg-[#11998e] text-white md:btn-sm xl:btn-md rounded-md">
              +Create New Job
            </button>
          </div>
          <div>
            <p className="font-medium md:tracking-tight xl:tracking-[1px] pt-[50px] pb-[30px] md:pl-[5px] xl:pl-[30px]">
              Recent Added Jobs
            </p>
            {jobCardContents.map((jc) => (
              <JobCard key={jc.id} props={jc} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
