import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const PricingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleGetStartedClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.password) errors.password = "Password is required.";
    setFormErrors(errors);

    // If no errors, proceed with form submission (e.g., API call)
    if (Object.keys(errors).length === 0) {
      console.log("Form Submitted:", formData);
      setShowModal(false); // Close the modal after submission
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gray-900 text-white py-20 px-8">
        {/* Pricing Plans Section */}
        <section className="py-20 px-8">
          <h2 className="text-4xl font-bold text-[#FF603D] mb-12 text-center">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Plan 1: Basic Plan */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-2xl">
              <h3 className="text-3xl font-bold text-[#FF603D] mb-4">Basic</h3>
              <p className="text-lg text-gray-300 mb-6">
                Perfect for individuals and small teams who need essential
                tools.
              </p>
              <div className="mb-4">
                <span className="text-3xl font-semibold text-white">$19</span>
                <span className="text-lg text-gray-300">/month</span>
              </div>
              <ul className="text-gray-300 mb-6">
                <li className="flex items-center mb-3">
                  <span className="text-[#FF603D] mr-2">✔</span> 1 Website
                </li>
                <li className="flex items-center mb-3">
                  <span className="text-[#FF603D] mr-2">✔</span> 10 GB Storage
                </li>
                <li className="flex items-center mb-3">
                  <span className="text-[#FF603D] mr-2">✔</span> Basic Analytics
                </li>
                <li className="flex items-center mb-3">
                  <span className="text-[#FF603D] mr-2">✔</span> Email Support
                </li>
              </ul>
              <button className="bg-[#FF603D] text-gray-900 font-semibold py-2 px-6 rounded-full hover:bg-[#E64A19] transition duration-300 ease-in-out">
                Start Free Trial
              </button>
            </div>

            {/* Plan 2: Standard Plan */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out relative">
              <div className="absolute top-0 right-0 bg-[#FF603D] text-white py-2 px-6 rounded-bl-xl">
                Most Popular
              </div>
              <h3 className="text-3xl font-bold text-[#FF603D] mb-4">
                Standard
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Ideal for growing teams and businesses looking for more advanced
                tools.
              </p>
              <div className="mb-4">
                <span className="text-3xl font-semibold text-white">$49</span>
                <span className="text-lg text-gray-300">/month</span>
              </div>
              <ul className="text-gray-300 mb-6">
                <li className="flex items-center mb-3">
                  <span className="text-[#FF603D] mr-2">✔</span> 5 Websites
                </li>
                <li className="flex items-center mb-3">
                  <span className="text-[#FF603D] mr-2">✔</span> 50 GB Storage
                </li>
                <li className="flex items-center mb-3">
                  <span className="text-[#FF603D] mr-2">✔</span> Advanced
                  Analytics
                </li>
                <li className="flex items-center mb-3">
                  <span className="text-[#FF603D] mr-2">✔</span> Priority Email
                  Support
                </li>
                <li className="flex items-center mb-3">
                  <span className="text-[#FF603D] mr-2">✔</span> Marketing
                  Automation
                </li>
              </ul>
              <button className="bg-[#FF603D] text-gray-900 font-semibold py-2 px-6 rounded-full hover:bg-[#E64A19] transition duration-300 ease-in-out">
                Start Free Trial
              </button>
            </div>

            {/* Plan 3: Premium Plan */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
              <h3 className="text-3xl font-bold text-[#FF603D] mb-4">
                Premium
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                The ultimate package for large teams and businesses who need all
                features.
              </p>
              <div className="mb-4">
                <span className="text-3xl font-semibold text-white">$99</span>
                <span className="text-lg text-gray-300">/month</span>
              </div>
              <ul className="text-gray-300 mb-6">
                <li className="flex items-center mb-3">
                  <span className="text-[#FF603D] mr-2">✔</span> Unlimited
                  Websites
                </li>
                <li className="flex items-center mb-3">
                  <span className="text-[#FF603D] mr-2">✔</span> 500 GB Storage
                </li>
                <li className="flex items-center mb-3">
                  <span className="text-[#FF603D] mr-2">✔</span> Real-Time
                  Analytics
                </li>
                <li className="flex items-center mb-3">
                  <span className="text-[#FF603D] mr-2">✔</span> 24/7 Premium
                  Support
                </li>
                <li className="flex items-center mb-3">
                  <span className="text-[#FF603D] mr-2">✔</span> Dedicated
                  Account Manager
                </li>
                <li className="flex items-center mb-3">
                  <span className="text-[#FF603D] mr-2">✔</span> Advanced
                  Marketing Automation
                </li>
              </ul>
              <button className="bg-[#FF603D] text-gray-900 font-semibold py-2 px-6 rounded-full hover:bg-[#E64A19] transition duration-300 ease-in-out">
                Start Free Trial
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-8 bg-gray-800">
          <h2 className="text-4xl font-bold text-[#FF603D] mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center w-1/3">
              <p className="text-lg text-gray-300 mb-4">
                "This platform has completely transformed the way our team
                works. We can now scale quickly and easily. Highly recommend!"
              </p>
              <p className="font-semibold text-[#FF603D]">John Doe</p>
              <p className="text-sm text-gray-400">CEO, Company</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center w-1/3">
              <p className="text-lg text-gray-300 mb-4">
                "Excellent customer support and easy-to-use features. Our
                business has been growing rapidly thanks to the premium plan!"
              </p>
              <p className="font-semibold text-[#FF603D]">Jane Smith</p>
              <p className="text-sm text-gray-400">Founder, Startup</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center w-1/3">
              <p className="text-lg text-gray-300 mb-4">
                "A game changer for our team. The marketing automation tools are
                incredible!"
              </p>
              <p className="font-semibold text-[#FF603D]">Michael Brown</p>
              <p className="text-sm text-gray-400">
                Marketing Director, Agency
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 px-8 bg-gray-900">
          <h2 className="text-4xl font-bold text-[#FF603D] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#FF603D] mb-4">
                What’s included in each plan?
              </h3>
              <p className="text-gray-300">
                Each plan includes different levels of access to our features,
                from basic functionality to advanced tools. See the plan
                descriptions for more details.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#FF603D] mb-4">
                Can I upgrade my plan later?
              </h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time, based
                on your business needs.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#FF603D] mb-4">
                Is there a free trial?
              </h3>
              <p className="text-gray-300">
                Yes, we offer a 14-day free trial on all plans so you can
                explore the platform without any commitment.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-8 text-center bg-gray-900">
          <h3 className="text-3xl font-semibold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-400 mb-8">
            Choose a plan that fits your needs and start growing your business
            with us today!
          </p>
          <button
            onClick={handleGetStartedClick}
            className="bg-[#FF603D] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#E64A19] transition duration-300 ease-in-out"
          >
            Get Started Now
          </button>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h3 className="text-xl font-semibold text-[#FF603D] mb-4">
                  Sign Up
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-2 w-full rounded-md mt-1"
                      placeholder="Enter your name"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-2 w-full rounded-md mt-1"
                      placeholder="Enter your email"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-2 w-full rounded-md mt-1"
                      placeholder="Enter your password"
                    />
                    {formErrors.password && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.password}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="bg-[#FF603D] text-white font-semibold py-2 px-6 rounded-full w-full mt-4 hover:bg-[#E64A19] transition duration-300 ease-in-out"
                  >
                    Sign Up
                  </button>
                </form>

                <button
                  onClick={handleCloseModal}
                  className="mt-4 text-gray-500 hover:text-gray-700"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PricingPage;
