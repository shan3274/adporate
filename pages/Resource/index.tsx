import React, { useState } from "react";
import { Modal } from "@/components/Modal"; // Assuming you have a Modal component
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import resourceData from "@/datas/resourceData.json"; // Importing data from the JSON file

const ResourcePage = () => {
  const [selectedResource, setSelectedResource] = useState(null);
  const { image, tile, description } = resourceData;
  return (
    <>
      {/* Header Component */}
      <Header />

      <div className="bg-gray-900 text-white ">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
          style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 w-full">
            <div className="text-center md:text-left w-full md:w-1/2 mb-6 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#FF603D] mb-4">
                {tile}
              </h1>
              <p className="text-lg text-gray-300">{description}</p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={image}
                alt="Resources Image"
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <main className="py-20 px-8">
          {/* Resources Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-[#FF603D] mb-8 text-center">
              Our Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceData.resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedResource(resource)}
                >
                  <h3 className="text-2xl font-semibold text-[#FF603D] mb-4">
                    {resource.title}
                  </h3>
                  <p className="text-gray-300">{resource.summary}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-[#FF603D] mb-8 text-center">
              Meet Our Experts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {resourceData.team.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform text-center"
                >
                  <img
                    src={`/images/team/${member.name
                      .toLowerCase()
                      .replace(" ", "_")}.jpg`}
                    alt={member.name}
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-2xl font-semibold text-[#FF603D] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-300">{member.position}</p>
                  <p className="text-gray-500 mt-2">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tools Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-[#FF603D] mb-8 text-center">
              Our Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceData.tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform"
                >
                  <h3 className="text-2xl font-semibold text-[#FF603D] mb-4">
                    {tool.name}
                  </h3>
                  <p className="text-gray-300">{tool.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-[#FF603D] mb-8 text-center">
              Technologies We Use
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceData.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform"
                >
                  <h3 className="text-2xl font-semibold text-[#FF603D] mb-4">
                    {tech.name}
                  </h3>
                  <p className="text-gray-300">{tech.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Resource Modal */}
        {selectedResource && (
          <Modal onClose={() => setSelectedResource(null)}>
            <h3 className="text-3xl font-semibold text-[#FF603D] mb-4">
              {selectedResource.title}
            </h3>
            <p className="text-gray-300 mb-6">{selectedResource.details}</p>
            {selectedResource.sections &&
              selectedResource.sections.map((section, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-2xl font-semibold text-[#FF603D]">
                    {section.title}
                  </h4>
                  <p className="text-gray-300">{section.content}</p>
                </div>
              ))}
          </Modal>
        )}
      </div>

      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default ResourcePage;
