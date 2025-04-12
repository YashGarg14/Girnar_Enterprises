import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import coalData from "../data/coalData";
import Footer from "../components/Footer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const CoalDetails = () => {
  const { coalType } = useParams();
  const coal = coalData.find((item) => item.id === coalType);
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % (coal?.imageGallery?.length || 1));
  };

  const prevImage = () => {
    setImageIndex((prev) =>
      (prev - 1 + (coal?.imageGallery?.length || 1)) % (coal?.imageGallery?.length || 1)
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  if (!coal) {
    return (
      <div className="text-center text-red-500 text-xl">
        Coal type not found!
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold">{coal.name}</h1>

        {/* Image Slider */}
        <div
          {...swipeHandlers}
          className="relative w-full max-w-lg my-4 overflow-hidden"
        >
          {/* Image container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${imageIndex * 100}%)`,
            }}
          >
            {coal.imageGallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={coal.name}
                className="w-full rounded-md shadow"
              />
            ))}
          </div>

          {/* Desktop Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 hidden sm:block"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 hidden sm:block"
          >
            <FaChevronRight />
          </button>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-2 mt-2 sm:hidden">
            {coal.imageGallery.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setImageIndex(idx)}
                className={`cursor-pointer w-2 h-2 rounded-full ${
                  idx === imageIndex ? "bg-black" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Details */}
        <p className="text-lg text-gray-700">{coal.description}</p>
        <p className="text-lg font-semibold">
          Price per Tonne:{" "}
          <span className="text-green-600">{coal.pricePerTonne}</span>
        </p>
        <p className="text-lg font-semibold">
          Minimum Order Quantity: {coal.minOrderQuantity}
        </p>

        {/* Specs Table */}
        <table className="mt-4 w-full border-collapse border border-gray-300">
          <tbody>
            {Object.entries(coal.specifications).map(([key, value]) => (
              <tr key={key} className="border-b">
                <td className="p-2 font-semibold capitalize border border-gray-300">
                  {key.replace(/_/g, " ")}
                </td>
                <td className="p-2 border border-gray-300">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default CoalDetails;
