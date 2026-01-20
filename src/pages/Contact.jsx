import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form Validation
  const validateForm = () => {
    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      toast.error("All fields are required");
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Enter a valid email address");
      return false;
    }

    if (phone.length < 10) {
      toast.error("Enter a valid phone number");
      return false;
    }

    return true;
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);
      
      const response = await fetch("https://alqamerautoparts.com/royalindustry/api/addContactForm.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      toast.success("Enquiry submitted successfully!");

      // Reset Form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to submit enquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 pb-6">
      {/* Header */}
      <div className="w-full max-w-md mb-6">
        <h1 className="text-2xl font-bold text-center">
          Contact Royal Industry
        </h1>
        <p className="text-sm text-gray-500 text-center mt-1">
          We’re here to help with your enquiries
        </p>
      </div>

      {/* Enquiry Form */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-5 mb-6">
        <h2 className="text-lg font-semibold mb-4">
          Send an Enquiry
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-2 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
          </div>

          <div>
            <label className="text-sm">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
          </div>

          <div>
            <label className="text-sm">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full mt-1 px-4 py-2 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
          </div>

          <div>
            <label className="text-sm">Message</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your enquiry..."
              className="w-full mt-1 px-4 py-2 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#3A4750] text-white py-3 rounded-xl font-semibold hover:bg-[#2f3a41] transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </div>

      {/* Map */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Our Location
          </h2>
          <p className="text-sm text-gray-500">
            Visit Royal Industry
          </p>
        </div>

        <iframe
          title="Royal Industry Location"
          src="Survey No 123 Min-8 And 124/3,Gram-Maheshpuriya,Jawad,Neemuch, Jawad-458330, Madhya Pradesh, India"
          className="w-full h-56 border-0"
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Royal Industry. All rights reserved.
      </div>
    </div>
  );
};

export default Contact;
