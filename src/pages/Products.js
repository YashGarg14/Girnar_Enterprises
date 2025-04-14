import React from "react";
import { Link } from "react-router-dom";
import coalData from "../data/coalData";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold">Our Coal Products</h1>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {coalData.map((coal) => (
            <div key={coal.id} className="border p-4 rounded-lg shadow-lg">
              <img
                src={coal.imageGallery[0]}
                alt={coal.name}
                className="w-full h-40 object-cover"
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
      <Footer />
    </div>
  );
};

export default Products;
