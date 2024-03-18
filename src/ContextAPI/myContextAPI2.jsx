import { createContext, useContext, useState } from "react";

const MyContext2 = createContext();

const MyContext2Provider = ({ children }) => {
  const [data, setData] = useState([
    { name: "Tamim Iqbal", age: 30, address: "Chottogram" },
    { name: "Taijul Islam", age: 28, address: "Sylhet" },
    { name: "Mehedi Hasan Meraz", age: 29, address: "Rajshahi" },
  ]);

  return (
    <MyContext2.Provider value={{ data, setData }}>
      {children}
    </MyContext2.Provider>
  );
};

//creating custom hook

const useMyContext2 = () => {
  const context2 = useContext(MyContext2);

  if (!context2) {
    throw new Error("useMyContext2 must be used within a MyContextProvider");
  }

  const { data, setData } = context2; // Destructure data and setData
  return { data, setData };
};

export { useMyContext2, MyContext2Provider };
