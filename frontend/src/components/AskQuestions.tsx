import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { themeConfig } from "@/config/themeConfig";

const faqs = [
  {
    question: "Can I try Neotech Solutions before enrolling?",
    answer:
      "Yes! You can explore a free trial to experience our interactive learning platform and ensure it fits your goals."
  },
  {
    question: "Which courses are best for career growth?",
    answer:
      "Our top courses include Data Analysis, UI/UX Design, DevOps, Machine Learning, and Cybersecurity, all designed to make you job-ready."
  },
  {
    question: "Will these courses help me get a job?",
    answer:
      "Absolutely. We provide career guidance, portfolio building, resume reviews, and interview preparation to boost your employability."
  },
  {
    question: "Are the courses live or pre-recorded?",
    answer:
      "We offer a mix of live sessions and pre-recorded lectures, allowing flexible learning while still getting expert support."
  },
  {
    question: "Do I receive a certificate after completion?",
    answer:
      "Yes. Every course comes with an industry-recognized certificate to showcase your skills globally."
  },
  {
    question: "Can I pay in instalments?",
    answer:
      "Yes. Flexible payment options are available to make learning accessible without financial stress."
  },
  {
    question: "How much support will I get during the course?",
    answer:
      "You’ll have access to mentors, doubt-solving sessions, and 24/7 support from our instructors and community."
  },
  {
    question: "Can I access the course after completion?",
    answer:
      "Yes! Lifetime access is provided so you can revisit the materials anytime and keep your skills updated."
  }
];

export default function FAQSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleAll = () => {
    if (showAll) {
      setOpenIndexes([]);
      setShowAll(false);
    } else {
      setOpenIndexes(faqs.map((_, idx) => idx));
      setShowAll(true);
    }
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className={`transition-all duration-300 ${isOpen ? "bg-white shadow-md rounded-lg px-6 py-4" : "bg-white px-6 py-3 rounded-lg hover:shadow-sm"
                  }`}
              >
                <button
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-gray-800 text-sm md:text-base">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className={`${themeConfig.isRamadanTheme ? 'text-blue-900' : 'text-blue-900'} transition-transform duration-300`} />
                  ) : (
                    <ChevronDown className={`text-gray-400 group-hover:${themeConfig.isRamadanTheme ? 'text-blue-900' : 'text-blue-900'} transition-transform duration-300`} />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-gray-600 text-sm md:text-sm leading-relaxed pl-1">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={toggleAll}
            className={`${themeConfig.isRamadanTheme ? 'text-blue-900' : 'text-blue-900'} font-medium hover:underline flex items-center justify-center gap-1`}
          >
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {showAll ? "Hide all questions" : `Show all ${faqs.length} questions`}
          </button>
        </div>
      </div>
    </section>
  );
}
