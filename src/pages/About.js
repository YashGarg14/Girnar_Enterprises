
import React, { useEffect } from "react";
import Factsheet from "../components/FactSheet";
import Footer from "../components/Footer";

const About = () => {
  useEffect(() => {
    document.title = "Company Brief - Girnar Enterprises";
  }, []);

  return (
    <div>
      <Factsheet />
      <Footer />
    </div>
  );
};

export default About;

