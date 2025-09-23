import React from "react";
import { BackgroundSlider } from "../components";
import { LogoDark } from '../assets'; 
import { Link } from "react-router-dom";

const Login = () => {
  return (
    
    <div className="relative flex justify-center items-center h-screen font-third">
      <BackgroundSlider />

      {/* Login Card */}
      <div className="relative z-20 bg-[#fdfaf6]/90 shadow-2xl p-8 w-[400px] border border-brown-200">
        <div className="text-center mb-10 justify-center flex items-center flex-col">
          <LogoDark className='mb-5' />
          <h2 className="text-3xl font-extrabold text-brand text-[#a37d4c]">
            Welcome back!
          </h2>
          <p className="text-gray-500">
            Log in to continue to your account
          </p>
        </div>
        <form className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600"
            />
          </div>

          <div className="flex items-center justify-between">
            {/* Remember Me checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="rememberMe"
                className="h-4 w-4 text-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="text-gray-700">Remember me</label>
            </div>
            {/* Forgot Password link */}
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <div className="mt-4 text-sm text-center text-gray-600">
          <p>
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
