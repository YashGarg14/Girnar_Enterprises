import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

// Lazy loading components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const Contact = lazy(() => import("./pages/Contact"));
const CoalDetails = lazy(() => import("./pages/CoalDetails")); // New dynamic page

const App = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      <Router>
        <Navbar />
        <ScrollToTop />
        <Suspense
          fallback={<div className="text-center text-lg p-5">Loading...</div>}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:coalType" element={<CoalDetails />} />{" "}
            {/* Dynamic route */}
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
