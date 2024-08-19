// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { PortfolioHome } from "./pages/PortfolioHome";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
