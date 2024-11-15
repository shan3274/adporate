// pages/services/[id].tsx
import { useRouter } from "next/router";
import productData from "@/datas/productsData.json";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type ServiceType = {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  icon: string;
  keyFeatures: string[];
  whyChooseUs: string;
  testimonials: { client: string; feedback: string }[];
};
export default function ServiceDetailPage() {
  const router = useRouter();
  const [service, setService] = useState<ServiceType | null>(null);

  useEffect(() => {
    if (router.isReady) {
      const { service: serviceId } = router.query; // Rename query to `service`
      const foundService = productData.services.find((s) => s.id === serviceId);
      setService(foundService || null);
    }
  }, [router.isReady, router.query.service]); 

  if (!router.isReady) return <p>Loading...</p>;

  if (!service) return <p>Service not found.</p>;
  return (
    <>
      <Header />
      <div className="bg-gray-900 text-gray-200 min-h-screen">
        {/* Hero Section */}
        <section className="relative text-center p-10 bg-gradient-to-r from-gray-800 to-gray-900">
          <Image
            src={service.icon}
            alt={service.name}
            width={150}
            height={150}
            className="mx-auto mb-5"
          />
          <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
          <p className="text-xl max-w-3xl mx-auto">{service.description}</p>
        </section>

        {/* Service Overview */}
        <section className="p-10 md:p-20">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-100">
            Service Overview
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-8">
            {service.detailedDescription}
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {service.keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-5 rounded-lg text-center shadow-lg hover:scale-105 transform transition duration-300"
              >
                <p className="text-lg font-medium text-white">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="flex flex-col lg:flex-row items-center gap-10 p-10 md:p-20 bg-gray-800">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <Image
              src="https://via.placeholder.com/400?text=Why+Choose+Us"
              alt="Why Choose Us"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Why Choose Us?
            </h2>
            <p className="text-gray-400 mb-6">{service.whyChooseUs}</p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="p-10 md:p-20">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-100">
            Client Testimonials
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {service.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-5 rounded-lg max-w-xs text-center shadow-lg hover:scale-105 transform transition duration-300"
              >
                <p className="italic text-gray-300">
                  &quot;{testimonial.feedback}&quot;
                </p>
                <p className="mt-3 font-bold text-white">
                  {testimonial.client}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Suggested Services Section */}
        <section className="p-10 md:p-20 bg-gray-900">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-100">
            Explore More Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {productData.services
              .filter((otherService) => otherService.id !== service)
              .map((otherService) => (
                <Link
                  href={`/services/${otherService.id}`}
                  key={otherService.id}
                  passHref
                >
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition duration-300">
                    <Image
                      src={otherService.icon}
                      alt={otherService.name}
                      width={100}
                      height={100}
                      className="mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-white text-center">
                      {otherService.name}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
