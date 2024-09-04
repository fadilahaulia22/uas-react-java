import React, { useState } from "react";
import ApiService from "../../service/ApiService";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, password, phoneNumber } = formData;
    if (!name || !email || !password || !phoneNumber) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setErrorMessage("Please fill all the fields.");
      setTimeout(() => setErrorMessage(""), 5000);
      return;
    }
    try {
      // Call the register method from ApiService
      const response = await ApiService.registerUser(formData);

      // Check if the response is successful
      if (response.statusCode === 200) {
        // Clear the form fields after successful registration
        setFormData({
          name: "",
          email: "",
          password: "",
          phoneNumber: "",
        });
        setSuccessMessage("User registered successfully");
        setTimeout(() => {
          setSuccessMessage("");
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || error.message);
      setTimeout(() => setErrorMessage(""), 5000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100">
      <div className="w-full max-w-md">
        {/* <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">
          Sign Up
        </h2> */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div
          className="bg-white shadow-md rounded-lg p-8 space-y-6 transition-transform duration-300 ease-in-out 
                    transform hover:scale-105 hover:shadow-xl hover:bg-pink-50"
        >
          <h2 className="text-2xl font-bold text-pink-600 text-center">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label className="block text-pink-700 font-bold mb-2">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-pink-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-pink-700 font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-pink-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-pink-700 font-bold mb-2">
                Phone Number:
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-pink-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-pink-700 font-bold mb-2">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-pink-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Register
            </button>
          </form>
          <p className="text-center text-pink-700 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-pink-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
