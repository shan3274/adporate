import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TestimonialPage from "@/components/TestimonialPage";
import React from "react";

const index = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <TestimonialPage />
      <Footer />
    </div>
  );
};

export default index;
