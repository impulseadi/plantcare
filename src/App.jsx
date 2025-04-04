import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlantPage from "./pages/PlantPage";
import Layout from "./components/Layout";
import Decor from "./pages/Decor";

const App = () => {
  return (
    <Layout>
 <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<PlantPage />} />
      <Route path="/decor" element={<Decor />} />

    </Routes>
    </Layout>
   
  );
};

export default App;
