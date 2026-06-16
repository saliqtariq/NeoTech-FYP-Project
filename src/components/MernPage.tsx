import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Code, Layers, Globe, CheckCircle, Loader2, ShoppingCart, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Helmet } from "react-helmet-async";

import { useCourses } from "@/hooks/useCourses";

export default function MernStackPage() {
  const navigate = useNavigate();
  const { addToCart, isPakistan, locationLoading, formatPrice } = useCart();
  const { findCourse } = useCourses();
  const coursePricingKey = "mern-full-stack-development"; // Canonical slug from DB
  const courseTitle = "MERN Stack Development";
  const courseDescription = "Master MongoDB, Express.js, React, and Node.js. Build real-world full-stack applications with Neotech Solutions.";
  const courseUrl = "https://www.neotechsolution.com/mern-full-stack-development";
  const courseImage = "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="bg-white text-gray-800 min-h-screen transition-all duration-300">
      <Helmet>
        <title>Best MERN Stack Course | Top Full-Stack Web Development | Neotech Solutions</title>
        <meta name="description" content={courseDescription} />
        <meta name="keywords" content="MERN stack course, full stack web development, learn react and nodejs, web dev bootcamp Pakistan" />
        <link rel="canonical" href={courseUrl} />

        {/* Open Graph Tags */}
        <meta property="og:title" content="MERN Stack Developer Career | Neotech Solutions" />
        <meta property="og:description" content={courseDescription} />
        <meta property="og:image" content={courseImage} />
        <meta property="og:url" content={courseUrl} />
        <meta property="og:type" content="website" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": courseTitle,
            "description": courseDescription,
            "provider": {
              "@type": "Organization",
              "name": "Neotech Solutions",
              "sameAs": "https://www.neotechsolution.com"
            }
          })}
        </script>
      </Helmet>
      {locationLoading ? (
        <div className="flex flex-col items-center justify-center py-40">
          <Loader2 className="h-12 w-12 animate-spin text-[#3b82f6] mb-4" />
          <p className="text-gray-600 font-medium">Loading course details...</p>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white py-28 px-6 text-center overflow-hidden">
            <motion.img
              src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
              alt="MERN Stack Development"
              className="absolute inset-0 w-full h-full object-cover opacity-25"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
            />
            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 30, y: -20 }}
                animate={{ opacity: 1.8, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
              >
                Best MERN Stack Development Training
              </motion.h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                Learn MongoDB, Express, React, and Node.js through hands-on projects.
                Build production-ready web applications and prepare for a global career in tech.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => {
                    addToCart(coursePricingKey);
                    navigate("/cart");
                  }}
                  className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-10 py-4 rounded-full shadow-lg flex items-center justify-center gap-2 transition-transform transform hover:scale-105"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  onClick={() => navigate(`/FreeDemo?course=${coursePricingKey}`)}
                  className="bg-transparent text-white hover:bg-white/10 font-bold px-10 py-4 rounded-full shadow-lg flex items-center justify-center gap-2 border-2 border-white transition-transform transform hover:scale-105"
                >
                  <PlayCircle className="h-5 w-5" />
                  Watch Free Demo
                </Button>
                <Button
                  onClick={() => navigate("/enrollnow")}
                  className="bg-blue-600/50 backdrop-blur text-white hover:bg-blue-500 font-bold px-10 py-4 rounded-full shadow-lg border-2 border-white/50 transition-transform transform hover:scale-105"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </section>

          {/* ... other sections ... */}
          {/* I will only replace the parts that change, using the next chunk for the tail */}

          {/* About Section */}
          <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=1000&auto=format&fit=crop&q=80"
              alt="Web Development Team"
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
                Why Learn MERN Stack with Neotech Solutions?
              </h2>
              <p className="text-lg mb-4 leading-relaxed text-gray-600">
                Our MERN Stack course blends theory with real-world practice. Build
                scalable apps, gain mentorship, and graduate with a strong portfolio
                to land international opportunities.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: <Code className="w-10 h-10 text-blue-900" />, title: "Modern Tech", desc: "React, Node, Express & MongoDB" },
                  { icon: <Layers className="w-10 h-10 text-blue-900" />, title: "Hands-On Projects", desc: "E-commerce apps, APIs & dashboards" },
                  { icon: <Globe className="w-10 h-10 text-blue-900" />, title: "Career Focused", desc: "Remote & global job preparation" },
                  { icon: <CheckCircle className="w-10 h-10 text-blue-900" />, title: "Mentorship", desc: "Expert guidance & Q&A sessions" },
                ].map((item, i) => (
                  <Card key={i} className="shadow-xl border border-blue-100 p-5 rounded-xl hover:border-blue-300 hover:shadow-2xl transition-all">
                    {item.icon}
                    <CardTitle className="mt-3 text-xl">{item.title}</CardTitle>
                    <CardContent className="text-gray-600 mt-1">{item.desc}</CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Course Outline Section */}
          <section className="bg-gray-50 py-24 px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              Course Outline
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                "HTML, CSS & Responsive Web Design",
                "JavaScript ES6+ & Advanced Concepts",
                "React.js Fundamentals & Hooks",
                "State Management (Redux/Context)",
                "Node.js & Express.js Backend",
                "MongoDB, Mongoose & Database Design",
                "Authentication & REST APIs",
                "Full-Stack Projects (E-Commerce, Blog, Dashboard)",
                "Deployment & Cloud Hosting (Heroku, Vercel, AWS)",
              ].map((topic, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="shadow-md border border-blue-50 hover:shadow-lg transition-all rounded-xl">
                    <CardContent className="flex items-center gap-4 py-5 text-lg font-medium">
                      <CheckCircle className="w-6 h-6 text-blue-900 shrink-0" />
                      {topic}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                onClick={() => navigate("/course-outline/688a66a3ac9a673940d21033")}
                className="bg-blue-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors font-semibold"
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
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&auto=format&fit=crop&q=80"
                alt="Web Development"
                className="rounded-2xl shadow-xl"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />
              <div>
                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                  Gain mastery in both <span className="font-semibold">frontend</span> and <span className="font-semibold">backend</span> development with MERN.
                  You’ll build responsive UIs, RESTful APIs, authentication systems, dashboards,
                  and full-scale modern web applications.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                  The demand for skilled MERN developers is rapidly increasing across Word.
                  Companies are actively seeking professionals who can handle both client-side
                  and server-side development to build scalable, real-world solutions.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                  By completing this course, you’ll graduate with a professional portfolio featuring
                  industry-standard projects, giving you the confidence and credibility to
                  step into roles as a <span className="font-semibold">Full Stack Developer </span>
                  in the competitive tech market.
                </p>
              </div>

            </div>
          </section>

          {/* CTA Section */}
          <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-28 px-6 text-center overflow-hidden">
            <motion.img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&auto=format&fit=crop&q=80"
              alt="Coding Team"
              className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
            />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
                Ready to Become a MERN Stack Developer?
              </h2>
              <p className="text-lg mb-8">
                Enroll today for only {(() => {
                  const courseObj = findCourse(coursePricingKey);
                  return courseObj ? formatPrice(courseObj) : "...";
                })()} and start
                building scalable, real-world web applications.
              </p>
              <Button
                onClick={() => navigate("/enrollnow")}
                className="bg-white text-blue-700 font-bold px-10 py-4 rounded-full shadow-2xl transition-transform transform hover:scale-105 hover:bg-gray-100"

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

