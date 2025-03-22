import React from "react";
import { useParams } from "react-router-dom";
import coalData from "../data/coalData";
import Footer from "../components/Footer";

const CoalDetails = () => {
  const { coalType } = useParams(); // Get the dynamic parameter from URL
  const coal = coalData.find((item) => item.id === coalType);

  if (!coal) {
    return <div className="text-center text-red-500 text-xl">Coal type not found!</div>;
  }

  return (
    <div>
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">{coal.name}</h1>
      <img src={coal.image} alt={coal.name} className="w-full max-w-lg my-4" />
      <p className="text-lg text-gray-700">{coal.description}</p>
      <p className="text-lg font-semibold">Price per Tonne: <span className="text-green-600">{coal.pricePerTonne}</span></p>
      <p className="text-lg font-semibold">Minimum Order Quantity: {coal.minOrderQuantity}</p>

      {/* Coal Specifications Table */}
      <table className="mt-4 w-full border-collapse border border-gray-300">
        <tbody>
          {Object.entries(coal.specifications).map(([key, value]) => (
            <tr key={key} className="border-b">
              <td className="p-2 font-semibold capitalize border border-gray-300">{key.replace(/_/g, " ")}</td>
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
