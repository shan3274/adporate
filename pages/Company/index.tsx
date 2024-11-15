import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import companyData from "@/datas/companyData.json";

const Company = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Function to open the modal with selected company details
  const openModal = (company) => {
    setSelectedCompany(company);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedCompany(null);
  };

  return (
    <>
      <Header />
      <main className="bg-gray-900 text-white py-20 px-8">
        {/* Overview Section */}
        <section className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-extrabold text-[#FF603D] mb-6">
              {companyData.overview.title}
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              {companyData.overview.description}
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={companyData.overview.image}
              alt="Company Overview"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Our Partners Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#FF603D] mb-8 text-center">
            Our Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {companyData.partners.map((partner, index) => (
              <div
                key={index}
                onClick={() => openModal(partner)}
                className="cursor-pointer bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                <h3 className="text-2xl font-semibold text-[#FF603D] mb-4">
                  {partner.name}
                </h3>
                <p className="text-gray-300">{partner.description}</p>
                <a
                  href={partner.website}
                  className="text-[#FF603D] mt-4 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Our Subsidiaries Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#FF603D] mb-8 text-center">
            Our Subsidiaries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {companyData.subsidiaries.map((subsidiary, index) => (
              <div
                key={index}
                onClick={() => openModal(subsidiary)}
                className="cursor-pointer bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                <h3 className="text-2xl font-semibold text-[#FF603D] mb-4">
                  {subsidiary.name}
                </h3>
                <p className="text-gray-300">{subsidiary.description}</p>
                <a
                  href={subsidiary.website}
                  className="text-[#FF603D] mt-4 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="relative mb-20">
          <h2 className="text-4xl font-bold text-[#FF603D] mb-8 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {companyData.successStories.map((story, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                <h3 className="text-2xl font-semibold text-[#FF603D] mb-4">
                  {story.client}
                </h3>
                <p className="text-gray-300">"{story.testimonial}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#FF603D] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyData.faq.map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-white mb-2">
                  {item.question}
                </h4>
                <p className="text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Modal Component */}
        {selectedCompany && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-gray-900 p-10 rounded-lg shadow-lg w-full max-w-3xl mx-4 md:mx-8 lg:mx-auto overflow-auto">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                &#x2715;
              </button>
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Company Logo */}
                {selectedCompany.logo && (
                  <img
                    src={selectedCompany.logo}
                    alt={`${selectedCompany.name} logo`}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg"
                  />
                )}

                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-[#FF603D] mb-2">
                    {selectedCompany.name}
                  </h3>
                  <p className="text-lg text-gray-300 mb-4">
                    {selectedCompany.industry} - {selectedCompany.location}
                  </p>
                </div>
              </div>
              <div className="mt-6 text-gray-300">
                <p className="mb-4">{selectedCompany.description}</p>
                <p className="mb-4">{selectedCompany.completeDetail}</p>
                {selectedCompany.website && (
                  <a
                    href={selectedCompany.website}
                    className="text-[#FF603D] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                )}
              </div>
              <button
                onClick={closeModal}
                className="mt-6 px-4 py-2 bg-[#FF603D] text-white rounded hover:bg-[#ff3a1e] focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Company;
