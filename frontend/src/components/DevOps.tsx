import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Server, Cloud, GitBranch, CheckCircle, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";


import { useCourses } from "@/hooks/useCourses";
import { Helmet } from "react-helmet-async";

export default function DevOpsEngineeringPage() {
  const navigate = useNavigate();
  const { addToCart, isPakistan, locationLoading, formatPrice } = useCart();
  const { findCourse } = useCourses();
  const coursePricingKey = "devops-engineering"; // Canonical slug

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Helmet>
        <title>Best DevOps Engineering Course | Top Cloud & Automation Training | Neotech Solutions</title>
        <meta name="description" content="Enroll in the best DevOps engineering course. Master AWS, Docker, Kubernetes, and CI/CD pipelines with our top-rated professional training and become a cloud specialist." />
        <meta name="keywords" content="best devops course, top devops engineering training, learn kubernetes, docker certification, cloud engineering bootcamp, Neotech Solutions" />
        <link rel="canonical" href="https://www.neotechsolution.com/devops-engineering" />
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
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop&q=80"
              alt="Best DevOps Training"
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
                Best DevOps Engineering Course
              </motion.h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                Master CI/CD, Cloud, Docker, Kubernetes, and automation tools.
                Build, deploy, and scale modern applications with industry best practices.
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
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=80"
                alt="DevOps Collaboration"
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
                  Why Learn DevOps with Neotech Solutions?
                </h2>
                <p className="text-lg mb-6 leading-relaxed text-gray-600">
                  DevOps is the backbone of modern software delivery. Our course trains
                  you to automate deployments, manage cloud infrastructure, and build
                  highly scalable systems used by top tech companies.
                </p>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Server className="w-10 h-10 text-[#3b82f6]" />, title: "DevOps Tools", desc: "Linux, Git, Jenkins, Docker, Kubernetes" },
                { icon: <GitBranch className="w-10 h-10 text-[#3b82f6]" />, title: "CI/CD Pipelines", desc: "Automated build, test & deployment" },
                { icon: <Cloud className="w-10 h-10 text-[#3b82f6]" />, title: "Cloud Platforms", desc: "AWS, Azure & Cloud Services" },
                { icon: <CheckCircle className="w-10 h-10 text-[#3b82f6]" />, title: "Job Ready Skills", desc: "Real-world DevOps projects" },
              ].map((item, i) => (
                <Card key={i} className="shadow-xl border border-gray-200 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-2xl transition-all">
                  {item.icon}
                  <CardTitle className="mt-4 text-xl">{item.title}</CardTitle>
                  <CardContent className="text-gray-600 mt-2">{item.desc}</CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Course Outline Section */}
          <section className="bg-gray-50 py-24 px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Course Outline</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                "Linux & Shell Scripting",
                "Git & GitHub Version Control",
                "CI/CD with Jenkins & GitHub Actions",
                "Docker & Containerization",
                "Kubernetes Orchestration",
                "AWS Cloud Fundamentals",
                "Infrastructure as Code (Terraform)",
                "Monitoring & Logging (Prometheus, Grafana)",
                "DevOps Real-World Projects",
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
                onClick={() => navigate("/course-outline/69abde8c1b84c8b557dd2cb7")}
                className="bg-[#3b82f6] text-white px-10 py-4 rounded-full shadow-lg hover:bg-blue-600"
              >
                View Full Course Outline
              </Button>
            </div>
          </section>

          {/* SEO Content */}
          <section className="py-24 px-6 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What Will You Learn?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.img
                src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=1000&auto=format&fit=crop&q=80"
                alt="Cloud & DevOps"
                className="rounded-2xl shadow-xl"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />
              <div>
                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                  Learn how to automate software delivery, manage cloud infrastructure,
                  and deploy scalable applications using DevOps best practices.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                  DevOps Engineers are in high demand globally as companies shift
                  towards cloud-native and automation-driven environments.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                  After completing this course, you’ll be ready for roles like
                  <span className="font-semibold"> DevOps Engineer, Cloud Engineer </span>
                  and <span className="font-semibold"> Site Reliability Engineer (SRE)</span>.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative bg-[#3b82f6] text-white py-28 px-6 text-center overflow-hidden">
            <motion.img
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1600&auto=format&fit=crop&q=80"
              alt="DevOps Career"
              className="absolute inset-0 w-full h-full object-cover opacity-25"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
            />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
                Start Your DevOps Engineering Career Today
              </h2>
              <p className="text-lg mb-8">
                Enroll now for only {(() => {
                  const courseObj = findCourse(coursePricingKey);
                  return courseObj ? formatPrice(courseObj) : "...";
                })()} and gain hands-on experience with real-world DevOps tools.
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
