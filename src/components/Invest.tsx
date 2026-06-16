import React from "react";
import { FaBullseye, FaCertificate, FaStar } from "react-icons/fa";

const CareerSection = () => {
  const items = [
    {
      icon: <FaBullseye size={32} className="text-blue-900 group-hover:text-white transition-colors duration-300" />,
      title: "Discover New Skills",
      description:
        "Choose from thousands of career-focused online courses in AI, business, technology, and more – tailored for professionals and learners.",
    },
    {
      icon: <FaCertificate size={32} className="text-blue-900 group-hover:text-white transition-colors duration-300" />,
      title: "Earn Recognised Certifications",
      description:
        "Receive industry-recognised certificates with every completed course. Showcase your achievements and strengthen your CV with no extra cost.",
    },
    {
      icon: <FaStar size={32} className="text-blue-900 group-hover:text-white transition-colors duration-300" />,
      title: "Learn from Industry Experts",
      description:
        "Gain practical, job-ready skills through expert-led training and AI-powered coaching – designed to boost employability in today’s job market.",
    },
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Decorative background overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-blue-50/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-900 font-semibold tracking-wider uppercase text-xs mb-4 block">
            Future-Proof Your Potential
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Invest in Your <span className="text-blue-900">Career Growth</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Advance your career with professional training programmes trusted by global learners.
            Build job-ready skills, earn respected certifications, and stay competitive in the marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-10 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-100 hover:shadow-xl bg-white transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-8 w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900 leading-tight">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
