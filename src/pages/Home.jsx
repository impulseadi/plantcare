import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BestsellingPlants from "../components/BestsellingPlants";

import BestsellingDecor from "../components/BestsellingDecor";
import CustomerReviews from "../components/CustomerReviews";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <BestsellingPlants />
      <BestsellingDecor />
      <CustomerReviews />
      <Footer />
    </>
  );
};

export default Home;
