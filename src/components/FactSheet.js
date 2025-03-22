import React from "react";

const Factsheet = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md md:my-4">
      <h1 className="text-2xl font-bold mb-4">Company Brief</h1>

      {/* Basic Information */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold bg-blue-100 p-2">
          Basic Information
        </h2>
        <table className="w-full border border-gray-300 bg-white">
          <tbody>
            <tr className="border-b">
              <td className="p-2 font-semibold">Nature of Business</td>
              <td className="p-2">Trader - Wholesaler/Distributor</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">Additional Business</td>
              <td className="p-2">Wholesale Business</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">Company CEO</td>
              <td className="p-2">Nitin Jain</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">Registered Address</td>
              <td className="p-2">
                B-5, Roopnagar Ind. Area, Loni, Ghaziabad, Uttar Pradesh, India
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">Total Number of Employees</td>
              <td className="p-2">5 to 10 People</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">GST No.</td>
              <td className="p-2">09AENPJ4407P3ZV</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">GST Registration Date</td>
              <td className="p-2">09-08-2017</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">Legal Status of Firm</td>
              <td className="p-2">Proprietorship</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">Annual Turnover</td>
              <td className="p-2">5 - 10 Cr</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Packaging/Payment and Shipment Details */}
      <div>
        <h2 className="text-xl font-semibold bg-blue-100 p-2">
          Packaging/Payment and Shipment Details
        </h2>
        <table className="w-full border border-gray-300 bg-white">
          <tbody>
            <tr className="border-b">
              <td className="p-2 font-semibold">Payment Mode</td>
              <td className="p-2">
                <ul className="list-disc pl-5">
                  <li>Credit Card</li>
                  <li>Cheque</li>
                  <li>DD</li>
                  <li>RTGS</li>
                  <li>Bank Transfer</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">Shipment Mode</td>
              <td className="p-2">
                <ul className="list-disc pl-5">
                  <li>By Road</li>
                  <li>By Cargo</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Factsheet;
