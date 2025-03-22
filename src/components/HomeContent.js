import ContactModal from "./ContactModal";
import React, { useState } from "react";

const HomeContent = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="pt-6 text-left">
      {/* Why Us Section */}
      <section className="mb-8 bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Why Us?</h2>
        <p className="text-gray-700 leading-relaxed md:mr-28 text-justify">
          In order to maintain our reputation over the years, we are involved in
          providing supreme grade coal to our patrons. We are offering a large
          range of coal pellets that are made as per quality standards at our
          vendor’s end.
        </p>
        <h3 className="font-bold mt-4">
          Some factors of our company are as follows:
        </h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Rich vendor base</li>
          <li>Experienced professionals</li>
          <li>Client-centric approach</li>
          <li>Timely delivery</li>
          <li>Ethical business policy</li>
          <li>Transparent trade dealing</li>
          <li>Complete client satisfaction</li>
        </ul>
        <div className="flex mt-2"></div>
      </section>

      {/* Quality Policy Section */}
      <section className="mb-8 bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Quality Policy</h2>
        <p className="text-gray-700 leading-relaxed md:mr-28 text-justify">
          Quality being our aim, we ensure stringent quality checking and
          measurements at every stage of production. To provide a qualitative
          range of products to our clients, we undertake extensive research
          activities that help us in keeping ourselves in line with the latest
          market demands and enhance our market value. The finished products are
          tested on various parameters due to which our wide array has gained
          huge accolades among our clients.
        </p>
        <div className="flex mt-2"></div>
      </section>

      {/* Our Vendor Base Section */}
      <section className="bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Our Vendor Base</h2>
        <p className="text-gray-700 leading-relaxed md:mr-28 text-justify">
          As a trusted name of this industry, we are responsible to deliver the
          quality assured coal pellets within the committed frame of time. We
          source our entire product range from authentic vendors that enable us
          to offer premium quality coal to our clients. These forged links with
          vendors of the market help us in attaining the coal of standards of
          quality within the promised time frame.
        </p>
      </section>

      <div className="flex mt-4">
        <h2 className="text-gray-700 text-xl font-bold pl-2">
          For more information:{" "}
        </h2>
        <button
          onClick={() => setModalOpen(true)}
          className="mx-1 py-1 px-3 bg-blue-500 text-white font-semibold rounded-md"
        >
          Contact Us
        </button>

        {/* Contact Modal */}
        <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </div>
  );
};

export default HomeContent;
