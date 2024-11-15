import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import customerData from "@/datas/customerData.json";

const Customer = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-900 text-white py-20 px-8 space-y-20">
        {/* Overview Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-extrabold text-[#FF603D] mb-6">
              {customerData.overview.title}
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              {customerData.overview.description}
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={customerData.overview.image}
              alt="Customer Overview"
              className="rounded-lg shadow-lg w-full md:w-auto"
            />
          </div>
        </section>

        {/* Key Offerings Section*/}
        <section>
          <h2 className="text-4xl font-bold text-[#FF603D] mb-8 text-center">
            Key Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerData.keyOfferings.map((offering, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                  index % 2 === 0 ? "bg-[#292B2F]" : "bg-gray-800"
                }`}
              >
                <h3 className="text-2xl font-semibold text-[#FF603D] mb-4">
                  {offering.title}
                </h3>
                <p className="text-gray-300">{offering.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Served Section */}
        <section>
          <h2 className="text-4xl font-bold text-[#FF603D] mb-8 text-center">
            Industries Served
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {customerData.industriesServed.map((industry, index) => (
              <div
                key={index}
                className={`py-4 px-6 rounded-lg font-medium text-center shadow-md transition-transform transform hover:scale-105 ${
                  index % 2 === 0
                    ? "bg-[#FF603D] text-gray-900"
                    : "bg-gray-800 text-[#FF603D]"
                }`}
              >
                {industry}
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="relative">
          <h2 className="text-4xl font-bold text-[#FF603D] mb-8 text-center">
            Success Stories
          </h2>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {customerData.successStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform"
                >
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {story.client}
                  </h3>
                  <p className="text-gray-400">"{story.testimonial}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-4xl font-bold text-[#FF603D] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customerData.faq.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-transform"
              >
                <h4 className="text-xl font-semibold text-white mb-2">
                  {item.question}
                </h4>
                <p className="text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Customer;
