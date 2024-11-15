import Footer from "@/components/Footer";
import Header from "@/components/Header";
import solutionData from "@/datas/solutionData.json";

const Solution = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-900 text-white py-20 px-8">
        {/* Overview Section with Image */}
        <section className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-extrabold text-[#FF603D] mb-6">
              {solutionData.overview.title}
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              {solutionData.overview.description}
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={solutionData.overview.image} // Add image URL in JSON file
              alt="Overview Illustration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Key Offerings Section in Grid */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#FF603D] mb-8 text-center">
            Key Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionData.keyOfferings.map((offering, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform"
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
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#FF603D] mb-8 text-center">
            Industries Served
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {solutionData.industriesServed.map((industry, index) => (
              <div
                key={index}
                className="bg-[#FF603D] text-gray-900 py-4 px-6 rounded-lg font-medium text-center shadow-md"
              >
                {industry}
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#FF603D] mb-8 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionData.successStories.map((story, index) => (
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
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#FF603D] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionData.faq.map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
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

export default Solution;
