import React, { useState, useCallback } from "react";

const ContactModal = ({ isOpen, onClose }) => {
  // Hooks should always be at the top level
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setIsSubmitting(true);
      setFormStatus("");

      try {
        const response = await fetch("https://formspree.io/f/xldjgayn", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error("Failed to send message.");

        setFormStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } catch (error) {
        setFormStatus("Failed to send message. Try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  // Keep this check after hooks are declared
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✖
          </button>
        </div>

        {/* Modal Body */}
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              rows="3"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full py-2 rounded-md text-white ${
              isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
          {formStatus && <p className="mt-2 text-center text-sm text-gray-700">{formStatus}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
