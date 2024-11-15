import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
const Signup = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-[#FF603D] to-[#FF8C42] flex items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-[#FF603D] mb-6">
            Sign Up
          </h2>
          <form>
            {/* Name Input */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#FF603D]"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#FF603D]"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#FF603D]"
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-[#FF603D] text-white py-2 rounded hover:bg-[#FF8C42] transition-colors font-semibold"
            >
              Sign Up
            </button>
          </form>

          {/* Link to Login */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-[#FF603D] hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
