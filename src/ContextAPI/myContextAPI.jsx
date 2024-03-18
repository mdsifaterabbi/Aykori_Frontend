import { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [xname, setXname] = useState("");
  const [xage, setXage] = useState();

  useEffect(() => {
    setXname("Afridi");
    setXage(30);
  }, []);

  return (
    <MyContext.Provider value={{ xname, setXname, xage, setXage }}>
      {children}
    </MyContext.Provider>
  );
};

//custom hook
const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

export { MyContextProvider, useMyContext };
