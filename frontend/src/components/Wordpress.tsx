import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Layout,
  Paintbrush,
  Settings,
  Rocket,
  Globe,
} from "lucide-react";
import { useNavigate } from "react-router-dom";


const projects = [
  {
    title: "Advanced E-Commerce WordPress Platform",
    description:
      "Developed a feature-rich e-commerce solution with seamless payment gateway integration, intuitive product management, and a fully responsive design. The platform ensures a smooth shopping experience, optimized performance, and enhanced security to help businesses scale and increase conversions.",
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/best-ecommerce-wordpress-themes-pofo.jpg",
  },
  {
    title: "Creative Portfolio Showcase Website",
    description:
      "Designed and built a visually stunning portfolio website tailored for a designer to highlight projects with elegance and professionalism. Integrated modern animations, interactive galleries, and optimized responsiveness to create a memorable user experience that attracts potential clients.",
    image:
      "https://i.ytimg.com/vi/agmqDFKrM-0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCrQhvxNw5cHs5JqDXWsvKMSHFkTg",
  },
  {
    title: "High-Converting Business Landing Page",
    description:
      "Crafted a professional business landing page for a startup with a focus on driving user engagement and lead generation. Features include compelling call-to-action sections, conversion-optimized design, clean UI/UX, and smooth animations to capture attention and build trust with visitors.",
    image:
      "https://i0.wp.com/themes.svn.wordpress.org/business-landing-page/0.4.5/screenshot.png",
  },
  {
    title: "Custom Real Estate WordPress Platform",
    description:
      "Developed a powerful real estate website with property listings, advanced search filters, and an integrated booking system. Enhanced with interactive maps, professional design, and responsive layouts, the platform provides a seamless property-browsing experience for both buyers and sellers.",
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/wp-real-estate-7-wordpress-theme.jpg",
  },
  {
    title: "Educational LMS Web Application",
    description:
      "Built a modern Learning Management System with online courses, student dashboards, progress tracking, and secure login. The LMS features interactive course modules, quiz integration, and admin tools for easy management—making it an all-in-one solution for online education providers.",
    image:
      "https://s3.envato.com/files/409384063/Preview%20(2).__large_preview.jpg",
  },
  {
    title: "Restaurant Website with Ordering System",
    description:
      "Developed a dynamic restaurant website featuring an online food ordering system, table reservation functionality, and an elegant menu showcase. The design emphasizes user convenience, responsiveness, and an engaging dining brand experience that drives both reservations and online sales.",
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/tastyc-wordpress-restaurant-theme.jpg",
  },
];

export default function WordPressDevelopment() {
  const navigate = useNavigate(); // ✅ Hook must be inside component

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section
        className="relative bg-[#3b82f6] text-white py-32 px-6 text-center overflow-hidden"
        style={{
                  backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
        >
          WordPress Development Services
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md"
        >
          We build fast, secure, and SEO-friendly WordPress websites with
          <br />
          custom themes, plugins, and powerful features tailored for your
          business.
        </motion.p>

        {/* Animated Call to Action Button */}
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
      </section>


      {/* Services Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our WordPress Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Layout className="w-10 h-10 text-[#3b82f6]" />, title: "Custom Theme Development", desc: "Unique, responsive, and engaging WordPress themes tailored to your brand." },
            { icon: <Code className="w-10 h-10 text-[#3b82f6]" />, title: "Plugin Development", desc: "Custom plugins to add advanced functionalities to your website." },
            { icon: <Paintbrush className="w-10 h-10 text-[#3b82f6]" />, title: "UI/UX Design", desc: "Beautiful and user-friendly designs for better user engagement." },
            { icon: <Settings className="w-10 h-10 text-[#3b82f6]" />, title: "Performance Optimization", desc: "Boost your site’s speed, SEO, and mobile-friendliness." },
            { icon: <Rocket className="w-10 h-10 text-[#3b82f6]" />, title: "WooCommerce Development", desc: "Powerful eCommerce solutions to grow your online business." },
            { icon: <Globe className="w-10 h-10 text-[#3b82f6]" />, title: "Website Migration", desc: "Seamless migration of websites with zero data loss." },
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
            src="https://images.unsplash.com/photo-1705904506592-d8a0d5392c66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFdvcmRwcmVzcyUyMGRldmVvcG1lbnR8ZW58MHx8MHx8fDA%3D"
            alt="WordPress Development"
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
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Choose Us?</h2>
            <ul className="space-y-4 text-gray-700">
              <li>✅ Experienced WordPress developers</li>
              <li>✅ Mobile-first responsive design</li>
              <li>✅ SEO & performance optimized</li>
              <li>✅ Affordable packages</li>
              <li>✅ 24/7 support & maintenance</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our Recent Projects
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
        {/* Background floating shapes for animation */}
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

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg"
        >
          Ready to Build Your WordPress Website?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-90"
        >
          Let our expert team craft a stunning, high-performance website that drives traffic, boosts sales,
          and takes your business to the next level.
        </motion.p>

        {/* CTA Button */}
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

