import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { BarChart2, Users, Cpu, CheckCircle, Brain, Loader2, ShoppingCart, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Helmet } from "react-helmet-async";


import { useCourses } from "@/hooks/useCourses";

export default function AiPage() {
  const navigate = useNavigate();
  const { addToCart, isPakistan, locationLoading, formatPrice } = useCart();
  const { findCourse, loading: coursesLoading } = useCourses();
  const coursePricingKey = "full-stack-ai-ml-dl"; // Canonical slug from DB
  const courseTitle = "Artificial Intelligence & Machine Learning";
  const courseDescription = "Master AI and Machine Learning from scratch. Build neural networks, predictive models, and intelligent systems with Neotech Solutions.";
  const courseUrl = "https://www.neotechsolution.com/full-stack-ai-ml-dl";
  const courseImage = "https://images.unsplash.com/photo-1677756119517-756a188d2d94?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="bg-white text-gray-800 min-h-screen transition-all duration-300">
      <Helmet>
        <title>Best AI & Machine Learning Course | Top Full-Stack AI Training | Neotech Solutions</title>
        <meta name="description" content={courseDescription} />
        <meta name="keywords" content="AI course, machine learning training, deep learning, python for AI, artificial intelligence training Pakistan" />
        <link rel="canonical" href={courseUrl} />

        {/* Open Graph Tags */}
        <meta property="og:title" content="AI & Machine Learning Mastery | Neotech Solutions" />
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

          <section className="relative bg-[#3b82f6] text-white py-28 px-6 text-center overflow-hidden">
            <motion.img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&auto=format&fit=crop&q=80"
              alt="AI & Machine Learning"
              className="absolute inset-0 w-full h-full object-cover opacity-45"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
            />
            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
              >
                Best AI & Machine Learning Course
              </motion.h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                Learn how to design intelligent systems, train models, and leverage data-driven
                solutions. Master the core skills that power innovation in Artificial Intelligence
                and Machine Learning.
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
                  onClick={() => navigate(`/FreeDemo?course=${coursePricingKey}`)}
                  className="bg-blue-600 text-[#3b82f6] hover:bg-white font-bold px-10 py-4 rounded-full shadow-lg flex items-center justify-center gap-2 border-2 border-white"
                >
                  <PlayCircle className="h-5 w-5" />
                  Watch Free Demo
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
          <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&auto=format&fit=crop&q=80"
              alt="AI & ML Team"
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
                Why Learn AI & Machine Learning with Neotech Solutions?
              </h2>
              <p className="text-lg mb-4 leading-relaxed text-gray-600">
                Our AI & ML course blends practical coding with deep theoretical concepts.
                From predictive models to natural language processing, you’ll develop the
                skills to innovate and solve real-world problems using cutting-edge technology.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                {[
                  {
                    icon: <Cpu className="w-10 h-10 text-[#3b82f6]" />,
                    title: "Core AI Fundamentals",
                    desc: "Understand algorithms, neural networks, and deep learning.",
                  },
                  {
                    icon: <BarChart2 className="w-10 h-10 text-[#3b82f6]" />,
                    title: "Data-Driven Insights",
                    desc: "Work with large datasets to train and optimize models.",
                  },
                  {
                    icon: <Brain className="w-10 h-10 text-[#3b82f6]" />,
                    title: "Hands-on ML Projects",
                    desc: "Build intelligent systems and real-world applications.",
                  },
                  {
                    icon: <Users className="w-10 h-10 text-[#3b82f6]" />,
                    title: "Career Ready",
                    desc: "Prepare for roles like ML Engineer, AI Specialist, and Data Scientist.",
                  },
                ].map((item, i) => (
                  <Card
                    key={i}
                    className="shadow-xl border border-gray-200 p-5 rounded-xl hover:shadow-2xl transition-all"
                  >
                    {item.icon}
                    <CardTitle className="mt-3 text-xl">{item.title}</CardTitle>
                    <CardContent className="text-gray-600 mt-1">{item.desc}</CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </section>


          {/* Course Outline Section */}
          {/* Course Outline Section */}
          <section className="bg-gray-50 py-24 px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Course Outline</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                "Introduction to Artificial Intelligence & Machine Learning",
                "Mathematics for AI: Linear Algebra, Probability & Statistics",
                "Python Programming for Data Science",
                "Data Preprocessing & Feature Engineering",
                "Supervised & Unsupervised Learning Algorithms",
                "Deep Learning & Neural Networks",
                "Natural Language Processing (NLP)",
                "Computer Vision & Image Recognition",
                "Final Project: End-to-End AI/ML Application",
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
                onClick={() =>
                  navigate(
                    "/course-outline/688b581e679c9e9bdb3da238"
                  )
                }
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
                src="https://images.unsplash.com/photo-1742163961842-393a43f4ea40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE1hY2hpbmUlMjBsZWFybmk5bmd8ZW58MHx8MHx8fDA%3D"
                alt="AI & Machine Learning"
                className="rounded-2xl shadow-xl"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />
              <div>
                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                  Gain strong foundations in <span className="font-semibold">machine learning algorithms</span>,
                  <span className="font-semibold"> deep learning</span>, and
                  <span className="font-semibold"> natural language processing</span>.
                  You’ll learn how to build AI-driven solutions that solve real-world challenges.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                  With AI transforming industries globally, demand for skilled AI & ML specialists
                  is growing rapidly across the UK, Europe, and worldwide.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                  By the end of this course, you’ll have hands-on experience and a portfolio
                  of AI/ML projects, preparing you for roles such as
                  <span className="font-semibold"> Machine Learning Engineer</span>,
                  <span className="font-semibold"> AI Specialist</span>, or
                  <span className="font-semibold"> Data Scientist</span>.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative bg-[#3b82f6] text-white py-28 px-6 text-center overflow-hidden">
            <motion.img
              src="https://images.unsplash.com/photo-1749566679636-a9b0f4c52e08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE1hY2hpbmUlMjBsZWFybmk5bmd8ZW58MHx8MHx8fDA%3D"
              alt="AI Team Working"
              className="absolute inset-0 w-full h-full object-cover opacity-45"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
            />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
                Ready to Launch Your Career in AI & Machine Learning?
              </h2>
              <p className="text-lg mb-8">
                Enroll today for only {(() => {
                  const courseObj = findCourse(coursePricingKey);
                  return courseObj ? formatPrice(courseObj) : "...";
                })()} and gain the skills needed to design intelligent systems,
                build predictive models, and step confidently into one of the most
                future-proof careers in tech.
              </p>
              <Button
                onClick={() => navigate("/enrollnow")}
                className="bg-white text-[black] font-bold px-10 py-4 rounded-full shadow-lg"
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

