import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
      <h2 className="text-center m-4">
        Copyright © 2025 <span className="text-blue-500">PrintMine.in</span> all
        rights reserved.
      </h2>
    </div>
  );
};

export default App;
