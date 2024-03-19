import { Helmet } from "react-helmet-async";
import Menu from "../Components/Menu";
import TabIndex from "../Components/TabIndex";


const Application = ({ title }) => {
 
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
        <div className="md:basis-[85%] lg:basis-[80%] xl:basis-[80%] h-[100vh] bg-[#e0edea]">
          <h1 className="font-bold xl:text-[20px] pt-[30px] pl-[20px]">Application</h1>
          <p className="font-bold md:text-[12px] xl:text-[12px] pt-[15px] pl-[20px]">On going recruitment</p>

          <div>
            <TabIndex />
          </div>
        </div>
      </div>
    </>
  );
};

export default Application;
