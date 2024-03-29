import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Task from "./Components/Task";
import Navbar from "./Components/Task";
import ProductCard from "./Components/Productcard";
import FeaturedProducts from "./Components/FeaturedProducts";
import FeaturedCategories from "./Components/FeaturedProduct";
import Footer from "./Components/Footer";
import TestimonialSection from "./Components/TestimonialSection";

function App() {
  return (
    <>
      {/* <Task /> */}
      <Navbar />
      <TestimonialSection />
      <FeaturedProducts />
      <FeaturedCategories />
      <Footer />
      {/* <HomePage /> */}
    </>
  );
}

export default App;
