import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    demoTime: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    demoTime: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let errors = { name: "", email: "", demoTime: "" };

    // Validation
    if (!formData.name) {
      isValid = false;
      errors.name = "Name is required";
    }
    if (!formData.email) {
      isValid = false;
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      errors.email = "Please enter a valid email address";
    }
    if (!formData.demoTime) {
      isValid = false;
      errors.demoTime = "Preferred demo time is required";
    }

    if (isValid) {
      setIsSubmitted(true);
      setFormErrors({ name: "", email: "", demoTime: "" });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <>
      <Header />

      {/* Intro Section */}
      <div className="bg-gray-900 text-white py-20 px-8">
        <section className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-[#FF603D] mb-6">
            Request a Demo
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Ready to see how our platform can transform your business? Request a
            demo today and get personalized insights.
          </p>
        </section>
      </div>

      {/* Demo Form Section */}
      <div className="bg-gray-800 text-white py-20 px-8">
        <section className="max-w-4xl mx-auto bg-gray-700 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-extrabold text-[#FF603D] mb-6 text-center">
            Schedule Your Demo
          </h3>

          {isSubmitted ? (
            <div className="text-center text-lg text-green-500">
              <p>Thank you for requesting a demo! We will be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-lg text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-2">{formErrors.name}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-lg text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {formErrors.email}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="demoTime"
                  className="block text-lg text-gray-300 mb-2"
                >
                  Preferred Demo Time
                </label>
                <input
                  type="datetime-local"
                  id="demoTime"
                  name="demoTime"
                  value={formData.demoTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg"
                />
                {formErrors.demoTime && (
                  <p className="text-red-500 text-sm mt-2">
                    {formErrors.demoTime}
                  </p>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#FF603D] text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-[#E64A19] transition duration-300 ease-in-out"
                >
                  Submit Request
                </button>
              </div>
            </form>
          )}
        </section>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-900 text-white py-20 px-8">
        <section className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-extrabold text-[#FF603D] mb-6">
            How It Works
          </h3>
          <p className="text-lg text-gray-300 mb-12">
            It’s simple to get started! Here’s what you can expect when you
            request a demo:
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-[#FF603D] mb-4">
                Step 1: Request
              </h4>
              <p className="text-gray-300">
                Fill out the form with your name, email, and preferred demo
                time.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-[#FF603D] mb-4">
                Step 2: Confirmation
              </h4>
              <p className="text-gray-300">
                Once submitted, you’ll receive a confirmation email with the
                demo details.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-[#FF603D] mb-4">
                Step 3: Demo
              </h4>
              <p className="text-gray-300">
                Our expert will walk you through a personalized demo, answering
                any questions you may have.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Our Key Features Section */}
      <div className="bg-gray-800 text-white py-20 px-8">
        <section className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-extrabold text-[#FF603D] mb-6">
            Our Key Features
          </h3>
          <p className="text-lg text-gray-300 mb-12">
            Discover the features you’ll experience during the demo that can
            help streamline your business operations.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-[#FF603D] mb-4">
                Real-Time Analytics
              </h4>
              <p className="text-gray-300">
                Track performance metrics and get actionable insights in
                real-time.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-[#FF603D] mb-4">
                Easy Integration
              </h4>
              <p className="text-gray-300">
                Our platform integrates seamlessly with your existing tools and
                workflows.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-[#FF603D] mb-4">
                24/7 Support
              </h4>
              <p className="text-gray-300">
                Get ongoing support from our dedicated customer service team at
                any time.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Our Partners Section */}
      <div className="bg-gray-900 text-white py-20 px-8">
        <section className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-extrabold text-[#FF603D] mb-6">
            Trusted by Leading Companies
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            We work with some of the biggest names in the industry to deliver
            cutting-edge solutions.
          </p>
          <div className="flex justify-center space-x-12">
            <img src="/path/to/logo1.png" alt="Company 1" className="h-16" />
            <img src="/path/to/logo2.png" alt="Company 2" className="h-16" />
            <img src="/path/to/logo3.png" alt="Company 3" className="h-16" />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default RequestDemo;
