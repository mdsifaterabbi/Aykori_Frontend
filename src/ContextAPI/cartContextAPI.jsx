import { createContext, useContext, useState } from "react";

const myCart = createContext();

const MyCartProvider = ({ children }) => {
  const [country, setCountry] = useState("Bangladesh");
  const [products, setProducts] = useState([
    {
      productID: "8001",
      productName: "Apple",
      quantity: "5KG",
      pricePerKG: 100,
      like: 0,
      dislike: 0,
    },
    {
      productID: "8002",
      productName: "Mango",
      quantity: "3KG",
      pricePerKG: 250,
      like: 0,
      dislike: 0,
    },
    {
      productID: "8003",
      productName: "Banana",
      quantity: "1KG",
      pricePerKG: 80,
      like: 0,
      dislike: 0,
    },
  ]);

  return (
    <myCart.Provider value={{ country, setCountry, products, setProducts }}>
      {children}
    </myCart.Provider>
  );
};

//creating custom hook

const useMyCart = () => {
  const abc = useContext(myCart);

  if (!abc) {
    throw new Error("useMyContext2 must be used within a MyContextProvider");
  }
  const { country, setCountry, products, setProducts } = abc; //destructure country and setCountry

  return { country, setCountry, products, setProducts };
};

export { useMyCart, MyCartProvider };
