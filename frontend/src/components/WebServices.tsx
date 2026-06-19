import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Layout,
  Code,
  Smartphone,
  Globe,
  ShoppingCart,
  Server,
} from "lucide-react";
import { useNavigate } from "react-router-dom";


const projects = [
  {
    title: "Corporate Website Redesign",
    description:
      "Revamped a financial consulting firm’s website with modern UI/UX, responsive design, and SEO optimization, resulting in a 50% increase in organic traffic.",
    image:
      "https://cdn.dribbble.com/userupload/43019034/file/still-1a06de14f1d702e4044a14e475b4ba51.png?resize=400x0",
  },
  {
    title: "E-Commerce Platform Development",
    description:
      "Built a scalable e-commerce solution with custom cart features, secure payments, and advanced product filtering for a global retailer.",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQF8GGlQaYG9Vw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686137572046?e=2147483647&v=beta&t=UQPHh_ywy3TqW8jBb_S6S_b_Dxb7GswZf9VsUzWmNnw",
  },
  {
    title: "Healthcare Web Portal",
    description:
      "Developed a patient management and booking portal with HIPAA-compliant data handling and real-time appointment scheduling.",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Startup Landing Page",
    description:
      "Created a high-converting landing page for a SaaS startup that boosted user signups by 70% within three months.",
    image:
      "https://landingi.com/wp-content/uploads/2024/08/Startup-Landing-Page-Best-Practices_okladka-blue-600optimized.webp",
  },
  {
    title: "Custom Web App for Logistics",
    description:
      "Designed a web-based logistics management system to optimize fleet tracking, inventory, and real-time reporting.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Educational E-Learning Platform",
    description:
      "Developed a learning platform with interactive courses, live video integration, and gamified assessments for better engagement.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqx0FFybctSkmRcym2IXRpKHPKySCqZHCUw&s",
  },
];

export default function WebDevelopmentServices() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section
        className="relative bg-[#3b82f6] text-white py-32 px-6 text-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#3b82f6]/85"></div>

        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
          >
            Professional Web Development Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md"
          >
            Build fast, secure, and scalable websites and applications that
            engage users and drive measurable business results.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="bg-white text-[#3b82f6] font-semibold px-10 py-4 rounded-full shadow-xl hover:bg-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              Get a Free Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our Web Development Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Layout className="w-10 h-10 text-[#3b82f6]" />,
              title: "Custom Website Design",
              desc: "Tailored, user-centric designs built for engagement and conversions.",
            },
            {
              icon: <Code className="w-10 h-10 text-[#3b82f6]" />,
              title: "Full-Stack Development",
              desc: "Robust front-end and back-end solutions built with modern frameworks.",
            },
            {
              icon: <Smartphone className="w-10 h-10 text-[#3b82f6]" />,
              title: "Responsive Design",
              desc: "Mobile-first websites that work flawlessly across all devices.",
            },
            {
              icon: <ShoppingCart className="w-10 h-10 text-[#3b82f6]" />,
              title: "E-Commerce Solutions",
              desc: "Custom online stores with secure payments and product management.",
            },
            {
              icon: <Server className="w-10 h-10 text-[#3b82f6]" />,
              title: "Web Applications",
              desc: "Custom web apps that streamline workflows and boost productivity.",
            },
            {
              icon: <Globe className="w-10 h-10 text-[#3b82f6]" />,
              title: "SEO & Performance Optimization",
              desc: "Websites optimized for speed, security, and search engine ranking.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Card className="hover:shadow-2xl transition-shadow duration-300 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80"
            alt="Web Development"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Why Choose Our Web Development Services?
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>✅ High-performance, scalable web solutions</li>
              <li>✅ Mobile-friendly, responsive designs</li>
              <li>✅ SEO-ready for maximum visibility</li>
              <li>✅ Cutting-edge technologies and frameworks</li>
              <li>✅ Dedicated support & ongoing maintenance</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our Recent Web Development Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#3b82f6] text-white py-24 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0.8, 1.1, 1], opacity: 0.15 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.2, 1], opacity: 0.15 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
          className="absolute bottom-10 right-10 w-52 h-52 bg-white rounded-full blur-3xl"
        />

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg"
        >
          Ready to Build Your Next Website?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-90"
        >
          Partner with our expert developers to create powerful, scalable, and
          visually stunning websites tailored to your business goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button
            size="lg"
            onClick={() => navigate("/contact")}
            className="bg-white text-[#3b82f6] font-semibold px-10 py-4 rounded-full shadow-xl hover:bg-gray-100 hover:shadow-2xl transition-all duration-300"
          >
            Contact Us Today
          </Button>
        </motion.div>
      </section>


    </div>
  );
}

