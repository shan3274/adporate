import React from "react";
import Image from "next/image";
import productData from "@/datas/productsData.json";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const ProductPage = () => {
  const { title, description, aboutSection, services, img } = productData;

  return (
    <>
      <Header />
      <div className="bg-[#1F1F1F] text-white">
        {/* Hero Section */}
        <div className="w-full min-h-[60vh] bg-[#FF603D] text-white flex  justify-around items-center text-center px-5 flex-wrap">
          <div className="flex xl:items-start flex-col justify-around">
            <h1 className="text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg max-w-4xl mx-auto">{description}</p>
          </div>
          <Image src={img} alt="" width={600} height={0} />
        </div>

        {/* About Section */}
        <div className="w-full py-12 bg-[#333333]">
          <div className="w-full max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#FF603D]">
              {aboutSection.title}
            </h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              {aboutSection.content}
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="w-full py-16 bg-[#222222]">
          <h2 className="text-4xl font-bold text-center text-[#FF603D] mb-8">
            Our Services
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto lg:p-0 p-3">
            {services.map((service, index) => (
              <Link
                href={`/services/${service.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                key={index}
                className="w-full bg-[#444444] p-8 rounded-lg shadow-xl flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 hover:bg-[#FF603D] hover:text-white transition-all duration-300"
              >
                {/* Service Image */}
                <div className="flex-shrink-0">
                  <Image
                    alt={service.name}
                    src={service.icon}
                    width={100}
                    height={100}
                    className="rounded-full mb-4 lg:mb-0"
                  />
                </div>

                {/* Service Text */}
                <div className="lg:ml-6 text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-white">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="w-full bg-[#160828] py-16">
          <div className="w-full max-w-6xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Get in touch with us today to start working with a team that
              values quality and client satisfaction.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-[#FCFF70] text-[#160828] rounded-lg font-semibold hover:bg-[#FF603D] hover:text-white transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
