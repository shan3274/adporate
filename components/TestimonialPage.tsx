import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import contentData from "@/datas/testinomialcontent.json"; 
const TestimonialPage = () => {
  return (
    <div className="w-full bg-[#F8F8F8] text-[#333]">
      {/* Hero Section */}
      <div className="w-full h-[60vh] bg-[#FF7F4F] flex flex-col justify-center items-center text-center px-5">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {contentData.heroSection.title}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl font-medium text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {contentData.heroSection.description}
        </motion.p>
      </div>

      {/* Testimonials Section */}
      <div className="w-full flex flex-wrap justify-center gap-10 py-10 px-5">
        {contentData.testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-[250px] md:w-[300px] bg-[#FFFFFF] p-5 rounded-lg shadow-md flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <Image
              alt={`${testimonial.name}`}
              src={testimonial.image}
              width={80}
              height={80}
              className="rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{testimonial.name}</h2>
            <p className="text-sm italic text-[#FF7F4F]">{testimonial.role}</p>
            <p className="text-md mt-3">{testimonial.feedback}</p>
          </motion.div>
        ))}
      </div>

      {/* How It Works Section */}
      <div className="w-full bg-[#4F86C6] py-16">
        <div className="w-full max-w-6xl mx-auto text-center text-white px-5">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {contentData.howItWorks.title}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl font-medium mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contentData.howItWorks.description}
          </motion.p>
          <div className="flex flex-wrap justify-center gap-10 mt-8">
            {contentData.howItWorks.steps.map((step, index) => (
              <div
                key={index}
                className="w-[250px] p-5 bg-[#FFFFFF] rounded-lg text-[#FF7F4F] shadow-lg"
              >
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full bg-[#FFFFFF] py-16">
        <div className="w-full max-w-6xl mx-auto text-center text-[#333] px-5">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {contentData.ctaSection.title}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl font-medium mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contentData.ctaSection.description}
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block px-6 py-3 bg-[#FF7F4F] text-white rounded-lg text-lg font-semibold hover:bg-[#D64E2D] transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {contentData.ctaSection.buttonText}
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
