import axios from "axios";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useForm } from "react-hook-form";

const TabIndex = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState();
  const [slug, setSlug] = useState([]);
  const [applicantPerSlug, setApplicantPerSlug] = useState();
  const [applicantDetailsPerSlug, setApplicantDetailsPerSlug] = useState([]);
  const [shortlistedPerSlug, setShortlistedPerSlug] = useState();
  const [shortlistedDetailsPerSlug, setShortlistedDetailsPerSlug] = useState(
    []
  );
  const [rejectedPerSlug, setRejectedPerSlug] = useState();
  const [rejectedDetailsPerSlug, setRejectedDetailsPerSlug] = useState([]);


  const handleDropdownClick = (index) => {
    setSelectedTabIndex(index);
    setIsOpen(false); // Close dropdown after selection
    setSelectedDropdownValue(slug[index]);
  };

  //get all unique slugs for each job
  const getMyAllSlug = async (req, res) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_REACT_API}/api/v1/get-all-jobs`
      );
      if (data?.success) {
        setSlug(data?.mySlugs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //finding total clients per slug
  const candidatePerSlug = async (req, res) => {
    try {
      const { data } = await axios.post(
        `${
          import.meta.env.VITE_REACT_API
        }/api/v1/applicant-per-job/${selectedDropdownValue}`
      );
      if (data?.success) {
        setApplicantPerSlug(data.tApplicantperSlug);
        setApplicantDetailsPerSlug(data.totalApplicantPerSlug);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //finding applicantStatus like shorlisted and rejected for each slug
  const applicantStatusPerSlug = async (req, res) => {
    try {
      const { data } = await axios.post(
        `${
          import.meta.env.VITE_REACT_API
        }/api/v1/find-applicant-status/${selectedDropdownValue}`
      );
      if (data?.success) {
        setShortlistedPerSlug(data.shorlistedBySlug);
        setRejectedPerSlug(data.rejectedBySlug);
        setShortlistedDetailsPerSlug(data.sh);
        setRejectedDetailsPerSlug(data.re);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    candidatePerSlug();
    applicantStatusPerSlug();
  }, [selectedTabIndex]);

  useEffect(() => {
    getMyAllSlug();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

 

  return (
    <>
  
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 rounded-none bg-[#b9f2e5]"
          onClick={() => {
            handleDropdownClick(selectedTabIndex);
          }}
        >
          {slug[selectedTabIndex]}
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {slug.map((s, index) => (
            <li key={index} onClick={() => handleDropdownClick(index)}>
              <a>{s}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {/* ================================== */}
        <div>
          <Tabs>
            <TabList>
              <Tab>All ({applicantPerSlug ? applicantPerSlug : 0})</Tab>
              <Tab>
                Short Listed ({shortlistedPerSlug ? shortlistedPerSlug : 0})
              </Tab>
              <Tab>Rejected ({rejectedPerSlug ? rejectedPerSlug : 0})</Tab>
            </TabList>
            {slug.map((s, index) => (
              <div key={index}>
                <TabPanel>
                  <div>
                    {applicantDetailsPerSlug.map((applicant, index) => (
                      <div key={index}>
                        <div className="flex md:flex-row xl:flex-row flex-wrap bg-[#ffffff] my-[10px] w-[95%] mx-auto rounded-md">
                          <div className="md:basis-1/5 md:text-[12px] xl:text-[18px] xl:basis-1/5 py-[10px] text-center font-bold">
                            {applicant.name}
                          </div>
                          <div className="md:basis-1/5 md:text-[12px] xl:text-[18px] xl:basis-1/5 py-[10px] text-center font-bold">
                            {applicant.email}
                          </div>
                          <div className="md:basis-1/5 md:text-[12px] xl:text-[18px] xl:basis-1/5 py-[10px] text-center font-bold">
                            {applicant.phone}
                          </div>
                          <div className="md:basis-1/5 md:text-[12px] xl:text-[18px] hidden xl:block xl:basis-1/5 py-[10px] text-center font-bold">
                            {applicant.slug}
                          </div>
                          <div className="md:basis-1/5 md:text-[12px] xl:text-[18px] xl:basis-1/5 py-[10px] text-center font-bold">
                            {applicant.applicantStatus === 1 ? (
                              <span className="text-green-500">
                                Shortlisted
                              </span>
                            ) : applicant.applicantStatus === 2 ? (
                              <span className="text-red-500">Rejected</span>
                            ) : (
                              "Applied"
                            )}
                          </div>
                          
                        </div>
                      </div>
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div>
                    {shortlistedDetailsPerSlug.map((applicant, index) => (
                      <div key={index}>
                        <div className="flex md:flex-row xl:flex-row flex-wrap bg-[#ffffff] my-[10px] w-[95%] mx-auto rounded-md">
                          <div className="md:basis-1/5 xl:basis-1/5 py-[10px] md:text-[12px] xl:text-[18px] text-center font-bold">
                            {applicant.name}
                          </div>
                          <div className="md:basis-1/5 xl:basis-1/5 py-[10px] md:text-[12px] xl:text-[18px] text-center font-bold">
                            {applicant.email}
                          </div>
                          <div className="md:basis-1/5 xl:basis-1/5 py-[10px] md:text-[12px] xl:text-[18px] text-center font-bold">
                            {applicant.phone}
                          </div>
                          <div className="md:basis-1/5 xl:basis-1/5 py-[10px] md:text-[12px] xl:text-[18px] hidden xl:block text-center font-bold">
                            {applicant.slug}
                          </div>
                          <div className="md:basis-1/5 xl:basis-1/5 py-[10px] md:text-[12px] xl:text-[18px] text-center text-green-500 font-bold">
                            {applicant.applicantStatus === 1
                              ? "Shortlisted"
                              : applicant.applicantStatus === 2
                              ? "Rejected"
                              : "Applied"}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div>
                    {rejectedDetailsPerSlug.map((applicant, index) => (
                      <div key={index}>
                        <div className="flex md:flex-row xl:flex-row flex-wrap bg-[#ffffff] my-[10px] w-[95%] mx-auto rounded-md">
                          <div className="md:basis-1/5 xl:basis-1/5 py-[10px] md:text-[12px] xl:text-[18px] text-center font-bold">
                            {applicant.name}
                          </div>
                          <div className="md:basis-1/5 xl:basis-1/5 py-[10px] md:text-[12px] xl:text-[18px] text-center font-bold">
                            {applicant.email}
                          </div>
                          <div className="md:basis-1/5 xl:basis-1/5 py-[10px] md:text-[12px] xl:text-[18px] text-center font-bold">
                            {applicant.phone}
                          </div>
                          <div className="md:basis-1/5 xl:basis-1/5 py-[10px] md:text-[12px] xl:text-[18px] hidden xl:block text-center font-bold">
                            {applicant.slug}
                          </div>
                          <div className="md:basis-1/5 xl:basis-1/5 py-[10px] md:text-[12px] xl:text-[18px] text-center text-red-500 font-bold">
                            {applicant.applicantStatus === 1
                              ? "Shortlisted"
                              : applicant.applicantStatus === 2
                              ? "Rejected"
                              : "Applied"}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabPanel>
              </div>
            ))}
          </Tabs>
        </div>

        {/* =========================================== */}
      </div>
    </>
  );
};

export default TabIndex;
