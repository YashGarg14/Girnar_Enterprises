import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState("");
  const [ip, setIp] = useState("");

  useEffect(() => {
    document.title = "Contact - Girnar Enterprises";

    // Fetch user's IP address
    fetch("https://api64.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch((err) => console.error("IP fetch error:", err));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("ip_address", ip); // Attach user's IP address

    try {
      const response = await fetch("https://formspree.io/f/xldjgayn", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Server responded with an error");

      setFormStatus("Your message has been sent successfully!");
      event.target.reset();
    } catch (error) {
      setFormStatus("Failed to send message. Please check your network.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen mt-8">
      <div className="flex-grow container mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Contact Details Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
            <p className="text-gray-700">
              <strong>Contact Person:</strong> Sanyam Jain (Marketing Head)
            </p>
            <p className="mt-3 text-gray-700">
              <strong>Phone:</strong>{" "}
              <span className="text-lg">+91 9927956481</span>
            </p>
            <p className="mt-3 text-gray-700 max-w-64">
              <strong>Address:</strong> <br />
              B-5, Roopnagar Ind. Area, Loni, Ghaziabad, Uttar Pradesh, India
            </p>
            <div className="flex space-x-2 mt-4">
              <a
                href="tel:+919927956481"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
              >
                Call Now
              </a>
              <a
                href="mailto:girnarenterprises@gmail.com"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Your Mobile Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your number"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Your Message</label>
                <textarea
                  name="message"
                  placeholder="Describe your requirement in detail"
                  className="w-full p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows="4"
                  required
                ></textarea>
              </div>
              <input type="hidden" name="ip_address" value={ip} />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
              >
                Submit
              </button>
              {formStatus && (
                <p className="mt-2 text-sm text-center text-gray-700">{formStatus}</p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
