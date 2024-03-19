import { createContext, useContext, useEffect, useState } from "react";

const Dashboard_API_Obj = createContext();

const DashboardAPIObjProvider = ({ children }) => {
  const [getAllJobs, setAllJobs] = useState([]);
  const [totalApplicants, setTotalApplicants] = useState();
  const [shortListed, setShortListed] = useState();
  const [rejected, setRejected] = useState();

  useEffect(() => {
    setAllJobs([
      {
        jobTitle: "Graphics Designer",
        jobDescription: "Description of Graphics Designer",
      },
      {
        jobTitle: "Web Developer",
        jobDescription: "Description of Web Developer",
      },
    ]);
  }, []);

  return (
    <Dashboard_API_Obj.Provider
      value={{
        getAllJobs,
        setAllJobs,
        totalApplicants,
        setTotalApplicants,
        shortListed,
        setShortListed,
        rejected,
        setRejected,
      }}
    >
      {children}
    </Dashboard_API_Obj.Provider>
  );
};

//creating custom hook

const useDashboardContext = () => {
  const myContext = useContext(Dashboard_API_Obj);

  if (!myContext) {
    throw new Error(
      "useDashboardContext must be used within a Dashboard_API_Obj_Provider"
    );
  }

  const {
    getAllJobs,
    setAllJobs,
    totalApplicants,
    setTotalApplicants,
    shortListed,
    setShortListed,
    rejected,
    setRejected,
  } = myContext;
  //  Destructure getAllJobs, setAllJobs, totalApplicants, setTotalApplicants,shortListed,setShortListed,rejected, setRejected,
  return {
    getAllJobs,
    setAllJobs,
    totalApplicants,
    setTotalApplicants,
    shortListed,
    setShortListed,
    rejected,
    setRejected,
  };
};

export { useDashboardContext, DashboardAPIObjProvider };
