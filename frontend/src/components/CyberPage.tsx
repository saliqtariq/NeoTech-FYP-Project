import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Cpu, CheckCircle, Network, Loader2, ShoppingCart, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Helmet } from "react-helmet-async";

import { useCourses } from "@/hooks/useCourses";

export default function CyberSecurityPage() {
  const navigate = useNavigate();
  const { addToCart, isPakistan, locationLoading, formatPrice } = useCart();
  const { findCourse } = useCourses();
  const coursePricingKey = "cybersecurity-ethical-hacking"; // Using the canonical slug from DB

  const courseTitle = "Cyber Security"; // This is for SEO and display
  const courseDescription = "Defend digital frontiers with our comprehensive Cyber Security course. Learn ethical hacking, network security, and threat intelligence.";
  const courseUrl = "https://www.neotechsolution.com/cybersecurity-ethical-hacking";
  const courseImage = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="bg-white text-gray-800 min-h-screen transition-all duration-300">
      <Helmet>
        <title>Best Cyber Security & Ethical Hacking Course | Top IT Training | Neotech Solutions</title>
        <meta name="description" content="Master the digital frontier with the best Cyber Security & Ethical Hacking course. Top-rated professional training in network security, threat prevention, and infoSec." />
        <meta name="keywords" content="best cyber security course, top ethical hacking training, learn cybersecurity Pakistan, professional infoSec training, cybersecurity bootcamp" />
        <link rel="canonical" href={courseUrl} />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Cyber Security Professional | Neotech Solutions" />
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
              src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q3liZXIlMjBTZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D"
              alt="MERN Stack Development"
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
                Best Cyber Security & Ethical Hacking Course
              </motion.h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                Become a top-rated specialist. Learn how to protect digital systems, secure networks, prevent cyber
                threats, and build a strong foundation for a career in Cyber Security.
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
              src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=1000&auto=format&fit=crop&q=80"
              alt="Cyber Security Team"
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
                Why Learn Cyber Security with Neotech Solutions?
              </h2>
              <p className="text-lg mb-4 leading-relaxed text-gray-600">
                Our Cyber Security course equips you with essential knowledge and
                hands-on skills to safeguard businesses against cyber-attacks,
                secure infrastructures, and respond to real-world threats.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                {[
                  {
                    icon: <Shield className="w-10 h-10 text-[#3b82f6]" />,
                    title: "Defensive Security",
                    desc: "Learn penetration testing, threat detection & prevention",
                  },
                  {
                    icon: <Lock className="w-10 h-10 text-[#3b82f6]" />,
                    title: "Network Security",
                    desc: "Master firewalls, VPNs & encryption techniques",
                  },
                  {
                    icon: <Cpu className="w-10 h-10 text-[#3b82f6]" />,
                    title: "Practical Labs",
                    desc: "Hands-on exercises & real-world simulations",
                  },
                  {
                    icon: <Network className="w-10 h-10 text-[#3b82f6]" />,
                    title: "Career Focused",
                    desc: "Prepare for Cyber Security Analyst & SOC roles",
                  },
                ].map((item, i) => (
                  <Card
                    key={i}
                    className="shadow-xl border border-gray-200 p-5 rounded-xl hover:shadow-2xl transition-all"
                  >
                    {item.icon}
                    <CardTitle className="mt-3 text-xl">{item.title}</CardTitle>
                    <CardContent className="text-gray-600 mt-1">
                      {item.desc}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Course Outline Section */}
          <section className="bg-gray-50 py-24 px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Course Outline</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                "Introduction to Cyber Security",
                "Networking & Operating Systems Fundamentals",
                "Cryptography & Encryption",
                "Web Application Security",
                "Ethical Hacking & Penetration Testing",
                "Incident Response & Digital Forensics",
                "Cloud Security & Virtualization",
                "Security Tools & Automation",
                "Final Project: Simulated Security Operations Center (SOC)",
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
                    "/course-outline/689cadaae6771b1b06e8a478"
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
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=1000&auto=format&fit=crop&q=80"
                alt="Cyber Security"
                className="rounded-2xl shadow-xl"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />
              <div>
                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                  Develop strong foundations in <span className="font-semibold">network security</span>, <span className="font-semibold">penetration testing</span>, and <span className="font-semibold">incident response</span>. You’ll learn how to analyze vulnerabilities, defend against attacks, and secure systems.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                  With cyber threats on the rise, demand for skilled Cyber Security professionals is growing rapidly across the Word, Europe, and worldwide.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                  By the end of this course, you’ll have practical experience and a professional portfolio of security projects, preparing you for roles such as <span className="font-semibold">Cyber Security Analyst</span>, <span className="font-semibold">Penetration Tester</span>, or <span className="font-semibold">SOC Specialist</span>.
                </p>
              </div>
            </div>
          </section>
          <section className="relative bg-[#3b82f6] text-white py-28 px-6 text-center overflow-hidden">
            <motion.img
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEN5YmVyJTIwU2VjdXJpdHl8ZW58MHx8MHx8fDA%3D"
              alt="Coding Team"
              className="absolute inset-0 w-full h-full object-cover opacity-45"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
            />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
                Ready to Start Your Cyber Security Career?
              </h2>
              <p className="text-lg mb-8">
                Enroll today for only {(() => {
                  const courseObj = findCourse(coursePricingKey);
                  return courseObj ? formatPrice(courseObj) : "...";
                })()} and gain the skills needed to protect organizations,
                secure digital systems, and step confidently into one of the most
                in-demand careers in tech.
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

