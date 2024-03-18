import styles from "./Menu.module.css";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);
  return (
    <>
      <div className="flex flex-col w-[100%]">
        <div className="basis-[100%] bg-[#ffffff]">
          <div className="">
            <img
              src="./dashboard/Aykori_Logo.png"
              alt="Aykori_Logo"
              className="pt-[20px] pb-[30px] mx-auto"
            ></img>
          </div>
        </div>
        <div className="basis-[100%] bg-[#ffffff]">
          <div>
            <h1 className="md:w-[200px] xl:w-[250px] mx-auto mb-[10px] font-bold">
              Menu
            </h1>

            {currentPath === "/application" ? (
              <div
                className={`md:w-[200px] xl:w-[250px] mx-auto my-[10px] py-[5px] px-[10px] rounded-md cursor-pointer hover:bg-[#000000] ${styles.menuDivHover}`}
              >
                <img
                  src="./dashboard/Menu_Logo.png"
                  alt="Menu_Logo"
                  className="inline bg-black"
                ></img>
                <p className="text-black inline pl-[15px]">
                  <Link to="/dashboard">Dashboard</Link>
                </p>
              </div>
            ) : (
              <div className="md:w-[200px] xl:w-[250px] border mx-auto my-[10px] bg-[#11998e] py-[5px] px-[10px] rounded-md cursor-pointer">
                <img
                  src="./dashboard/Menu_Logo.png"
                  alt="Menu_Logo"
                  className="inline"
                ></img>
                <p className="text-white inline pl-[15px]">Dashboard</p>
              </div>
            )}

            {currentPath === "/application" ? (
              <div
                className={`md:w-[200px] xl:w-[250px] mx-auto my-[10px] py-[5px] px-[10px] rounded-md cursor-pointer bg-[#11998e] ${styles.menuDivHover}`}
              >
                <img
                  src="./dashboard/Application_Logo.png"
                  alt="Application_Logo"
                  className="inline"
                ></img>
                <p className="inline pl-[15px]">
                  <a href="" className="text-white">
                    Application
                  </a>
                </p>
              </div>
            ) : (
              <div
                className={`md:w-[200px] xl:w-[250px] mx-auto my-[10px] py-[5px] px-[10px] rounded-md cursor-pointer hover:bg-[#000000] ${styles.menuDivHover}`}
              >
                <img
                  src="./dashboard/Message_Logo.png"
                  alt="Message_Logo.png"
                  className="inline"
                ></img>
                <p className="inline pl-[15px]">
                  <a href="">Message</a>
                </p>
              </div>
            )}

            <div
              className={`md:w-[200px] xl:w-[250px] mx-auto my-[10px] py-[5px] px-[10px] rounded-md cursor-pointer hover:bg-[#000000] ${styles.menuDivHover}`}
            >
              <img
                src="./dashboard/Calender_Logo.png"
                alt="Calender_Logo"
                className="inline"
              ></img>
              <p className="inline pl-[15px]">
                <a href="">Calendar</a>
              </p>
            </div>
          </div>
        </div>
        <div className="basis-[100%] bg-[#ffffff]">
          <div>
            <h1 className="md:w-[200px] xl:w-[250px] mx-auto mb-[10px] font-bold">
              Recruitment
            </h1>
            <div
              className={`md:w-[200px] xl:w-[250px] mx-auto my-[10px] py-[5px] px-[10px] rounded-md cursor-pointer hover:bg-[#000000] ${styles.menuDivHover}`}
            >
              <img
                src="./dashboard/Jobs_Logo.png"
                alt="Jobs_Logo"
                className="inline"
              ></img>
              <p className="inline pl-[15px]">
                <a href="">Jobs</a>
              </p>
            </div>
            {currentPath === "/application" ? (
              <div
                className={`md:w-[200px] xl:w-[250px] mx-auto my-[10px] py-[5px] px-[10px] rounded-md cursor-pointer hover:bg-[#000000] ${styles.menuDivHover}`}
              >
                <img
                  src="./dashboard/Message_Logo.png"
                  alt="Message_Logo.png"
                  className="inline"
                ></img>
                <p className="inline pl-[15px]">
                  <a href="">Message</a>
                </p>
              </div>
            ) : (
              <div
                className={`md:w-[200px] xl:w-[250px] mx-auto my-[10px] py-[5px] px-[10px] rounded-md cursor-pointer hover:bg-[#000000] ${styles.menuDivHover}`}
              >
                <img
                  src="./dashboard/Application_Logo.png"
                  alt="Application_Logo"
                  className="inline"
                ></img>
                <p className="inline pl-[15px]">
                  <Link to="/application">Application</Link>
                </p>
              </div>
            )}

            <div
              className={`md:w-[200px] xl:w-[250px] mx-auto my-[10px] py-[5px] px-[10px] rounded-md cursor-pointer hover:bg-[#000000] ${styles.menuDivHover}`}
            >
              <img
                src="./dashboard/Career_Site_Logo.png"
                alt="Career_Site_Logo"
                className="inline"
              ></img>
              <p className="inline pl-[15px]">
                <a href="">Career Site</a>
              </p>
            </div>
            <div
              className={`md:w-[200px] xl:w-[250px] mx-auto my-[10px] py-[5px] px-[10px] rounded-md cursor-pointer hover:bg-[#000000] ${styles.menuDivHover}`}
            >
              <img
                src="./dashboard/My_Referels_Logo.png"
                alt="My_Referels_Logo"
                className="inline"
              ></img>
              <p className="inline pl-[15px]">
                <a href="" className="">
                  My Referrels
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="basis-[100%] bg-[#ffffff]">
          <div>
            <h1 className="w-[250px] mx-auto mb-[10px] md:pl-[20px] xl:pl-[0px] font-bold">
              Organization
            </h1>
            <div
              className={`md:w-[200px] xl:w-[250px] mx-auto my-[10px] py-[5px] px-[10px] rounded-md cursor-pointer hover:bg-[#000000] ${styles.menuDivHover}`}
            >
              <img
                src="./dashboard/Employee_Logo.png"
                alt="Employee_Logo.png"
                className="inline"
              ></img>
              <p className="inline pl-[15px]">
                <a href="">Employee</a>
              </p>
            </div>
            <div
              className={`md:w-[200px] xl:w-[250px] mx-auto my-[10px] py-[5px] px-[10px] rounded-md cursor-pointer hover:bg-[#000000] ${styles.menuDivHover}`}
            >
              <img
                src="./dashboard/Structure_Logo.png"
                alt="Structure_Logo.png"
                className="inline"
              ></img>
              <p className="inline pl-[15px]">
                <a href="">Structure</a>
              </p>
            </div>
            <div
              className={`md:w-[200px] xl:w-[250px] mx-auto my-[10px] py-[5px] px-[10px] rounded-md cursor-pointer hover:bg-[#000000] ${styles.menuDivHover}`}
            >
              <img
                src="./dashboard/Report_Logo.png"
                alt="Report_Logo.png"
                className="inline"
              ></img>
              <p className="inline pl-[15px]">
                <a href="">Report</a>
              </p>
            </div>
            <div
              className={`md:w-[200px] xl:w-[250px] mx-auto my-[10px] py-[5px] px-[10px] rounded-md cursor-pointer hover:bg-[#000000] ${styles.menuDivHover}`}
            >
              <img
                src="./dashboard/Settings_Logo.png"
                alt="Settings_Logo.png"
                className="inline"
              ></img>
              <p className="inline pl-[15px]">
                <a href="" className="">
                  Settings
                </a>
              </p>
            </div>
            <div
              className={`md:w-[200px] xl:w-[250px] mx-auto my-[10px] py-[5px] px-[10px] rounded-md cursor-pointer hover:bg-[#000000] ${styles.menuDivHover}`}
            >
              <img
                src="./dashboard/Logout_Logo.png"
                alt="Logout_Logo.png"
                className="inline"
              ></img>
              <p className="inline pl-[15px]">
                <a href="" className="">
                  Logout
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
