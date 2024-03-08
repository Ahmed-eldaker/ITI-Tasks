import React from "react";
import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Product from "./Components/Product";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      categoryId: 1,
      inCart: true,
      name: "Small burger",
      price: 15,
      count: 0,
    },
    {
      id: 2,
      categoryId: 1,
      inCart: false,
      name: "Cheese burger",
      price: 20,
      count: 0,
    },
    {
      id: 3,
      categoryId: 1,
      inCart: false,
      name: "Double burger",
      price: 30,
      count: 0,
    },
    {
      id: 4,
      categoryId: 1,
      inCart: false,
      name: "Veggie burger",
      price: 50,
      count: 0,
    },
    {
      id: 5,
      categoryId: 1,
      inCart: false,
      name: "Bacon burger",
      price: 35,
      count: 0,
    },
    {
      id: 6,
      categoryId: 2,
      inCart: false,
      name: "Small fries",
      price: 10,
      count: 0,
    },
    {
      id: 7,
      categoryId: 2,
      inCart: false,
      name: "Medium fries",
      price: 15,
      count: 0,
    },
    {
      id: 8,
      categoryId: 2,
      inCart: false,
      name: "Large fries",
      price: 20,
      count: 0,
    },
    { id: 9, categoryId: 3, inCart: false, name: "soda", price: 10, count: 0 },
  ]);
  const [categories, setSelected] = useState([
    {
      id: 0,
      category: "All",
    },
    {
      id: 1,
      category: "Burger",
    },
    {
      id: 2,
      category: "Fries",
    },
    {
      id: 3,
      category: "Soda",
    },
  ]);
  const handelIncrement = (e) => {
    //clone
    let newData = [...data];
    //edit
    let Index = newData.findIndex((p) => p.name === e.name);
    newData[Index].count = newData[Index].count + 1;
    //set state
    setData(newData);
  };
  const handelDecrement = (e) => {
    if (e.count) {
      let newData = [...data];
      let Index = newData.findIndex((p) => p.name === e.name);
      newData[Index].count = newData[Index].count - 1;
      setData(newData);
    }
  };
  const handelDelete = (e) => {
    let newData = [...data];

    newData = newData.filter((p) => p.name !== e.name);
    setData(newData);
  };
  const reset = () => {
    let newData = [...data];
    newData.map((p) => (p.count = 0));
    setData(newData);
  };
  const handelAddToCart = (e) => {
    let newData = [...data];
    let Index = newData.findIndex((p) => p.id === e.id);
    newData[Index] = { ...newData[Index] };
    newData[Index].inCart = !newData[Index].inCart;
    console.log(newData[Index], newData[Index].inCart);
    setData(newData);
  };
  return (
    <>
      <BrowserRouter>
        <NavBar numOfProducts={data.filter((p) => p.inCart).length} />
        <Routes>
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/"
            element={
              <Home
                handelAddToCart={handelAddToCart}
                categories={categories}
                data={data}
              />
            }
          />
          <Route path="/About" element={<About />} />
          <Route
            path="/cart"
            element={
              <Cart
                data={data.filter((p) => p.inCart)}
                handelIncrement={handelIncrement}
                handelDecrement={handelDecrement}
                handelDelete={handelDelete}
                reset={reset}
              />
            }
          />
          <Route path="*" element={<>error</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
