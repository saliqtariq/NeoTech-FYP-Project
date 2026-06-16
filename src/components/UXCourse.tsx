import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Palette, Layout, Figma, CheckCircle, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";


import { useCourses } from "@/hooks/useCourses";
import { Helmet } from "react-helmet-async";

export default function UiUxDesigningPage() {
  const navigate = useNavigate();
  const { addToCart, isPakistan, locationLoading, formatPrice } = useCart();
  const { findCourse } = useCourses();
  const coursePricingKey = "ui-ux-design"; // Canonical slug

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Helmet>
        <title>Best UI/UX Design Course | Top Product Design Training | Neotech Solutions</title>
        <meta name="description" content="Join the best UI/UX design course. Master Figma, user research, wireframing, and prototyping with our top-rated professional training for creative designers." />
        <meta name="keywords" content="best ui ux course, top product design training, learn figma, ui design bootcamp, graphic design services, Neotech Solutions" />
        <link rel="canonical" href="https://www.neotechsolution.com/ui-ux-design" />
      </Helmet>

      {locationLoading ? (
        <div className="flex flex-col items-center justify-center py-40">
          <Loader2 className="h-12 w-12 animate-spin text-[#3b82f6] mb-4" />
          <p className="text-gray-600 font-medium">Loading course details...</p>
        </div>
      ) : (
        <>

          {/* Hero Section */}
          <section className="relative bg-[#3b82f6] text-white py-28 px-6 text-center overflow-hidden">
            <motion.img
              src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1600&auto=format&fit=crop&q=80"
              alt="Best UI/UX Design Course"
              className="absolute inset-0 w-full h-full object-cover opacity-25"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
            />
            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
              >
                Best UI/UX Design Course
              </motion.h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                Learn user-centered design, wireframing, prototyping, and modern UI tools.
                Design stunning, user-friendly digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => {
                    addToCart(coursePricingKey);
                    navigate("/cart");
                  }}
                  className="bg-white text-[#3b82f6] hover:bg-gray-100 font-bold px-10 py-4 rounded-full shadow-lg flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  onClick={() => navigate("/enrollnow")}
                  className="bg-blue-600 text-white font-bold px-10 py-4 rounded-full shadow-lg border-2 border-white"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <motion.img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&auto=format&fit=crop&q=80"
                alt="UI UX Design Process"
                className="rounded-2xl shadow-2xl"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6">
                  Why Learn UI/UX with Neotech Solutions?
                </h2>
                <p className="text-lg mb-6 leading-relaxed text-gray-600">
                  UI/UX design is essential for creating engaging digital products.
                  Our course focuses on real-world design workflows, usability,
                  and modern tools used by top companies.
                </p>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Palette className="w-10 h-10 text-[#3b82f6]" />,
                  title: "Visual Design",
                  desc: "Color theory, typography & layouts",
                },
                {
                  icon: <Layout className="w-10 h-10 text-[#3b82f6]" />,
                  title: "UX Process",
                  desc: "User research & wireframing",
                },
                {
                  icon: <Figma className="w-10 h-10 text-[#3b82f6]" />,
                  title: "Design Tools",
                  desc: "Figma, Adobe XD & prototyping",
                },
                {
                  icon: <CheckCircle className="w-10 h-10 text-[#3b82f6]" />,
                  title: "Portfolio Ready",
                  desc: "Real-world UI/UX projects",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="shadow-xl border border-gray-200 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-2xl transition-all"
                >
                  {item.icon}
                  <CardTitle className="mt-4 text-xl">{item.title}</CardTitle>
                  <CardContent className="text-gray-600 mt-2">
                    {item.desc}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Course Outline Section */}
          <section className="bg-gray-50 py-24 px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Course Outline</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                "Introduction to UI/UX Design",
                "Design Thinking & User Research",
                "Wireframing & User Flows",
                "UI Design Principles",
                "Figma & Adobe XD Mastery",
                "Prototyping & Usability Testing",
                "Responsive & Mobile Design",
                "Design Systems & Style Guides",
                "Real-World UI/UX Projects",
              ].map((topic, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="shadow-md border border-gray-200 hover:shadow-lg transition-all rounded-xl">
                    <CardContent className="flex items-center gap-4 py-5 text-lg font-medium">
                      <CheckCircle className="w-6 h-6 text-[#3b82f6]" />
                      {topic}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                onClick={() => navigate("/course-outline/69abde8c1b84c8b557dd2cb6")}
                className="bg-[#3b82f6] text-white px-10 py-4 rounded-full shadow-lg hover:bg-blue-600"
              >
                View Full Course Outline
              </Button>
            </div>
          </section>

          {/* SEO Content */}
          <section className="py-24 px-6 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              What Will You Learn?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.img
                src="https://www.mygreatlearning.com/blog/wp-content/uploads/2025/08/learn-ui-ux-while-working.webp"
                alt="UI UX Learning"
                className="rounded-2xl shadow-xl"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />
              <div>
                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                  Learn how to design intuitive interfaces, conduct user research,
                  and create engaging digital experiences.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                  UI/UX Designers are highly demanded in startups, agencies,
                  and tech companies worldwide.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                  After completing this course, you’ll be ready for roles like
                  <span className="font-semibold"> UI Designer, UX Designer </span>
                  and <span className="font-semibold"> Product Designer</span>.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative bg-[#3b82f6] text-white py-28 px-6 text-center overflow-hidden">
            <motion.img
              src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&auto=format&fit=crop&q=80"
              alt="UI UX Career"
              className="absolute inset-0 w-full h-full object-cover opacity-25"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
            />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
                Start Your UI/UX Designing Career Today
              </h2>
              <p className="text-lg mb-8">
                Enroll now for only {(() => {
                  const courseObj = findCourse(coursePricingKey);
                  return courseObj ? formatPrice(courseObj) : "...";
                })()} and build a professional UI/UX design portfolio.
              </p>
              <Button
                onClick={() => navigate("/enrollnow")}
                className="bg-white text-black font-bold px-10 py-4 rounded-full shadow-lg"
              >
                Enroll Now
              </Button>
            </div>
          </section>

        </>
      )}

    </div>
  );
}
