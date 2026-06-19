import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { BookOpen, BarChart2, Users, CheckCircle, Loader2, ShoppingCart, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Helmet } from "react-helmet-async";
import { themeConfig } from "@/config/themeConfig";
import { useCourses } from "@/hooks/useCourses";

export default function DataAnalysisPage() {
  const navigate = useNavigate();
  const { addToCart, isPakistan, locationLoading, formatPrice } = useCart();
  const { findCourse } = useCourses();
  const coursePricingKey = "data-analyst-professional"; // Canonical slug from DB
  const courseTitle = "Data Analysis";
  const courseDescription = "Master Data Analysis with Python, SQL, and Power BI. Learn to visualize and interpret data like a pro.";
  const courseUrl = "https://www.neotechsolution.com/data-analyst-professional";
  const courseImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Helmet>
        <title>Best Data Analysis Course | Top Job-Ready IT Training | Neotech Solutions</title>
        <meta name="description" content={courseDescription} />
        <meta name="keywords" content="data analysis course, learn python for data, SQL training, Power BI course, Neotech Solutions data training" />
        <link rel="canonical" href={courseUrl} />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Data Analysis Career Track | Neotech Solutions" />
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
          <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white h-screen px-6 text-center overflow-hidden">
            <motion.img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Data Analysis Hero"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              initial={{ scale: 1.9 }}
              animate={{ scale: 1.8 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
            />
            <div className="relative z-10 flex flex-col justify-center items-center h-full">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Best Tech Education & Top Software Development Company
              </motion.h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                Learn how to analyze, visualize, and interpret data like a pro.
                Designed for beginners to advanced learners who want to become
                data-driven decision-makers.
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

          <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {" "}
            <motion.img
              src="https://images.unsplash.com/photo-1522071901873-411886a10004?w=600&auto=format&fit=crop&q=60"
              alt="Data Team Working"
              className="rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />{" "}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {" "}
              <h2 className="text-3xl font-bold mb-6">
                {" "}
                Why Choose Our Data Analysis Course?{" "}
              </h2>{" "}
              <p className="text-lg mb-4 leading-relaxed">
                {" "}
                Our Data Analysis course is crafted to give you a perfect blend of
                theory and practical applications. With expert mentors, hands-on
                projects, and real-world case studies, you’ll gain skills that
                employers value.{" "}
              </p>{" "}
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                {" "}
                <Card className="shadow-lg border border-blue-100 p-4 hover:shadow-2xl transition-all hover:border-blue-300">
                  {" "}
                  <BookOpen className="w-10 h-10 text-blue-900 mb-2" />{" "}
                  <CardTitle>Comprehensive Curriculum</CardTitle>{" "}
                  <CardContent>
                    {" "}
                    From Excel & SQL to Python & BI tools.{" "}
                  </CardContent>{" "}
                </Card>{" "}
                <Card className="shadow-lg border border-blue-100 p-4 hover:shadow-2xl transition-all hover:border-blue-300">
                  {" "}
                  <BarChart2 className="w-10 h-10 text-blue-900 mb-2" />{" "}
                  <CardTitle>Hands-on Projects</CardTitle>{" "}
                  <CardContent>
                    {" "}
                    Build dashboards, forecasts, and reports.{" "}
                  </CardContent>{" "}
                </Card>{" "}
                <Card className="shadow-lg border border-blue-100 p-4 hover:shadow-2xl transition-all hover:border-blue-300">
                  {" "}
                  <Users className="w-10 h-10 text-blue-900 mb-2" />{" "}
                  <CardTitle>Community & Mentorship</CardTitle>{" "}
                  <CardContent>
                    {" "}
                    Live Q&As, peer learning, and expert guidance.{" "}
                  </CardContent>{" "}
                </Card>{" "}
                <Card className="shadow-lg border border-blue-100 p-4 hover:shadow-2xl transition-all hover:border-blue-300">
                  {" "}
                  <CheckCircle className="w-10 h-10 text-blue-900 mb-2" />{" "}
                  <CardTitle>Career Support</CardTitle>{" "}
                  <CardContent>
                    {" "}
                    Resume building, interview prep, and job referrals.{" "}
                  </CardContent>{" "}
                </Card>{" "}
              </div>{" "}
            </motion.div>{" "}
          </section>

          {/* Course Outline Section */}
          <section className="bg-gray-50 py-20 px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Course Outline</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                "Introduction to Data Analysis",
                "Excel for Data Management",
                "SQL for Data Extraction",
                "Python for Data Cleaning & Transformation",
                "Data Visualization with Power BI & Tableau",
                "Statistics & Predictive Analysis",
                "Capstone Project",
              ].map((topic, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="shadow-md border border-blue-50 hover:shadow-lg transition-all rounded-xl">
                    <CardContent className="flex items-center gap-4 py-5 text-lg font-medium">
                      <CheckCircle className="w-6 h-6 text-blue-900 shrink-0" />
                      <span>{topic}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button
                onClick={() => {
                  navigate("/course-outline/68a1d512e53f7ca805d296ae");
                }}
                className="bg-blue-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                View Full Course Outline
              </Button>
            </div>
          </section>

          {/* Long SEO Content */}
          <section className="py-20 px-6 max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
              Best Tech Education &{" "}
              <br />
              <span className={themeConfig.isRamadanTheme ? "text-blue-900" : "text-blue-900"}>Top Software Development Company in Pakistan</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.img
                src="https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?w=600&auto=format&fit=crop&q=60"
                alt="Data Visualization"
                className="rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  By enrolling in this course, you’ll gain skills in Excel, SQL,
                  Python, Power BI, and Tableau to analyze and visualize data. Our
                  hands-on projects include customer churn analysis, sales
                  forecasting, marketing dashboards, and financial reports.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  According to industry reports, data analyst demand is growing by
                  over 30% annually. In Pakistan, salaries range from PKR 120,000 to
                  500,000/month, while global opportunities are even higher.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  By the end of this course, you won’t just understand data—you’ll
                  be able to turn it into actionable business insights and
                  career-changing opportunities.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-24 px-6 text-center overflow-hidden">
            <motion.img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Team Working on Data"
              className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Start Your Data Analysis Journey?
              </h2>
              <p className="text-lg mb-8">
                Enroll today for just{" "}
                <span className="font-bold">
                  {(() => {
                    const courseObj = findCourse(coursePricingKey);
                    return courseObj ? formatPrice(courseObj) : "...";
                  })()}
                </span> and unlock
                unlimited learning opportunities.
              </p>
              <Button
                onClick={() => navigate("/enrollnow")} // ✅ Route navigation
                className="bg-white text-blue-700 font-bold px-10 py-4 rounded-full shadow-2xl hover:bg-gray-100 transition-transform transform hover:scale-105"
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
