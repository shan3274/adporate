import React from "react";
import contactData from "@/datas/contactData.json";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center bg-[#160828] text-white p-5 md:p-10">
        {/* Page Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {contactData.title}
        </motion.h1>

        {/* Page Description */}
        <motion.p
          className="text-center text-lg md:text-xl max-w-2xl mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {contactData.description}
        </motion.p>

        {/* Contact Form */}
        <form className="w-full max-w-lg bg-[#FF603D] rounded-lg p-6">
          {contactData.form.fields.map((field, index) => (
            <div key={index} className="mb-5">
              <label className="block text-sm font-semibold mb-2">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  placeholder={field.placeholder}
                  className="w-full p-3 rounded-md text-[#160828] focus:outline-none"
                  rows={4}
                />
              ) : (
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full p-3 rounded-md text-[#160828] focus:outline-none"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-[#160828] text-white py-3 rounded-md font-semibold hover:bg-[#FCFF70] transition duration-300"
          >
            {contactData.form.buttonText}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
