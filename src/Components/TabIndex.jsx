import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabIndex = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    "Front End Developer",
    "Backend Developer",
    "Graphics Designer",
  ];

  const handleDropdownClick = (index) => {
    setSelectedTabIndex(index);
    setIsOpen(false); // Close dropdown after selection
  };

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
          {options[selectedTabIndex]}
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => handleDropdownClick(0)}>
            <a>Front End Developer</a>
          </li>
          <li onClick={() => handleDropdownClick(1)}>
            <a>Backend Developer</a>
          </li>
          <li onClick={() => handleDropdownClick(2)}>
            <a>Graphics Designer</a>
          </li>
        </ul>
      </div>
      <div>
        {selectedTabIndex === 0 && (
          <div>
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                <Tab>Short Listed</Tab>
                <Tab>Inprocess</Tab>
                <Tab>On Hold</Tab>
                <Tab>Rejected</Tab>
              </TabList>

              <TabPanel>
                <h2>All Candidates of Frontend developer</h2>
              </TabPanel>
              <TabPanel>
                <h2>ShortListed Candidates of Frontend developer</h2>
              </TabPanel>
              <TabPanel>
                <h2>Inprocess Candidates of Frontend developer</h2>
              </TabPanel>
              <TabPanel>
                <h2>On Hold Candidates of Frontend developer</h2>
              </TabPanel>
              <TabPanel>
                <h2>Rejected Candidates of Frontend developer</h2>
              </TabPanel>
            </Tabs>
          </div>
        )}
        {selectedTabIndex === 1 && (
          <div>
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                <Tab>Short Listed</Tab>
                <Tab>Inprocess</Tab>
                <Tab>On Hold</Tab>
                <Tab>Rejected</Tab>
              </TabList>

              <TabPanel>
                <h2>All Candidates of Backend developer</h2>
              </TabPanel>
              <TabPanel>
                <h2>ShortListed Candidates of Backend developer</h2>
              </TabPanel>
              <TabPanel>
                <h2>Inprocess Candidates of Backend developer</h2>
              </TabPanel>
              <TabPanel>
                <h2>On Hold Candidates of Backend developer</h2>
              </TabPanel>
              <TabPanel>
                <h2>Rejected Candidates of Backend developer</h2>
              </TabPanel>
            </Tabs>
          </div>
        )}
        {selectedTabIndex === 2 && (
          <div>
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                <Tab>Short Listed</Tab>
                <Tab>Inprocess</Tab>
                <Tab>On Hold</Tab>
                <Tab>Rejected</Tab>
              </TabList>

              <TabPanel>
                <h2>All Candidates of Graphics Designer</h2>
              </TabPanel>
              <TabPanel>
                <h2>ShortListed Candidates of Graphics Designer</h2>
              </TabPanel>
              <TabPanel>
                <h2>Inprocess Candidates of Graphics Designer</h2>
              </TabPanel>
              <TabPanel>
                <h2>On Hold Candidates of Graphics Designer</h2>
              </TabPanel>
              <TabPanel>
                <h2>Rejected Candidates of Graphics Designer</h2>
              </TabPanel>
            </Tabs>
          </div>
        )}
      </div>
    </>
  );
};

export default TabIndex;
