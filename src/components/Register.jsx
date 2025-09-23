import React from "react";
import { BackgroundSlider } from "../components";
import { LogoDark } from "../assets";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <BackgroundSlider />

      {/* Register Card */}
      <div className="relative z-20 bg-[#fdfaf6]/95 shadow-2xl p-6 w-full max-w-md sm:max-w-lg border border-brown-200 font-third">
        {/* Header */}
        <div className="text-center mb-8 flex flex-col items-center">
          <LogoDark className="mb-5 w-32 sm:w-40" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#a37d4c]">
            Register Account
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Create your account and start your booking with us!
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4 sm:gap-6">
          {/* First Name and Last Name */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600"
          />

          {/* Password and Confirm Password */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Register
          </button>
        </form>

        {/* Extra Links */}
        <div className="mt-6 text-sm text-center text-gray-600">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
