import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Login = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-[#FF603D] to-[#FF8C42] flex items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-[#FF603D] mb-6">
            Login
          </h2>
          <form>
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

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#FF603D] text-white py-2 rounded hover:bg-[#FF8C42] transition-colors font-semibold"
            >
              Login
            </button>
          </form>

          {/* Link to Signup */}
          <p className="text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a href="/Signup" className="text-[#FF603D] hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>{" "}
      <Footer />
    </>
  );
};

export default Login;
