import React, { useEffect } from "react";
import Footer from "../components/Footer";
import HomeSlider from "../components/HomeSlider";
import HomeContent from "../components/HomeContent";
import { FiPhoneCall, FiMail } from "react-icons/fi"; // Importing icons
import { Link } from "react-router-dom";
import coalData from "../data/coalData";

const Home = () => {
  useEffect(() => {
    document.title = "Girnar Enterprises";
  }, []);

  return (
    <div>
      <div style={styles.container}>
        <HomeSlider />
        <div className="container mx-auto p-6">
          <h1 className="text-2xl md:text-3xl text-left">Products <span className="font-bold">We Deal In</span></h1>
          <div className="w-[225px] md:w-[278px] h-[2px] bg-blue-600 mb-6" />
          <div className="grid md:grid-cols-3 gap-6">
            {coalData.map((coal) => (
              <div
                key={coal.id}
                className="border p-4 rounded-lg shadow-lg text-center"
              >
                <img
                  src={coal.imageGallery[0]}
                  alt={coal.name}
                  className="w-full md:h-60 h-48 object-cover mx-auto"
                />
                <h2 className="text-xl font-semibold mt-2">{coal.name}</h2>
                <p className="text-gray-600">{coal.pricePerTonne} per tonne</p>
                <Link
                  to={`/product/${coal.id}`}
                  className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
        <HomeContent />
      </div>
      <Footer />

      {/* Floating Call & Email Icons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
        <a
          href="tel:+919927956481"
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <FiPhoneCall size={22} />
        </a>
        <a
          href="mailto:girnarenterprises@gmail.com"
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <FiMail size={22} />
        </a>
      </div>
    </div>
  );
};

const styles = { container: { padding: "10px", textAlign: "center" } };

export default Home;
