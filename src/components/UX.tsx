import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  PenTool,
  Layout,
  Palette,
  Workflow,
  MousePointerClick,
  Eye,
} from "lucide-react";
import { useNavigate } from "react-router-dom";


const projects = [
  {
    title: "E-Commerce App Redesign",
    description:
      "Transformed an outdated online shopping app into a sleek, modern experience with intuitive navigation, leading to a 45% boost in conversions.",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/60ebe2218622413.Y3JvcCwzMjMyLDI1MjgsMCww.png",
  },
  {
    title: "SaaS Dashboard UI",
    description:
      "Designed a responsive, data-driven dashboard for a SaaS product, improving user engagement and reducing churn by 30%.",
    image:
      "https://tailadmin.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fhkc8ojqt%2Fproduction%2Fe8c7251a9eed63a9bb80403d7becaca5b694c5d0-1800x900.png%3Ffit%3Dmax%26auto%3Dformat&w=3840&q=75",
  },
  {
    title: "Healthcare App UX",
    description:
      "Crafted an accessible patient management app with a clean interface and easy navigation, boosting adoption among elderly users.",
    image:
      "https://cdn.dribbble.com/userupload/16274100/file/original-404f4ed319095ecd67ad343b7e690dfa.jpg?resize=752x&vertical=center",
  },
  {
    title: "Fintech Mobile App",
    description:
      "Developed a user-friendly banking app prototype with secure login flows, simplifying transactions for over 1M users.",
    image:
      "https://www.figma.com/community/resource/3de10957-1475-466f-9a24-23812a86a432/thumbnail",
  },
  {
    title: "Startup Landing Page",
    description:
      "Designed a bold and engaging landing page that boosted signups by 60% within the first quarter.",
    image:
      "https://cdn.sketchrepo.com/images/2x/freebie-hello-landing-page-v2.jpg",
  },
  {
    title: "EdTech Platform UX",
    description:
      "Created a gamified, interactive learning experience that improved student retention and engagement.",
    image:
      "https://cdn.dribbble.com/userupload/15802899/file/original-aae64ef6eacacf2032f6a0991995fc31.png?resize=752x&vertical=center",
  },
];

export default function UIUXServices() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 text-gray-800">


      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-[#3b82f6] to-[#3b82f6] text-white py-32 px-6 text-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dWklMjB1eCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-[#3b82f6]"></div>

        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
          >
            UI/UX Design Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md"
          >
            We craft user experiences that delight, engage, and convert. From
            wireframes to polished interfaces, we bring your ideas to life with
            design excellence.
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
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our UI/UX Design Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <PenTool className="w-10 h-10 text-[#3b82f6]" />,
              title: "Wireframing & Prototyping",
              desc: "Transforming ideas into interactive prototypes to validate concepts quickly.",
            },
            {
              icon: <Layout className="w-10 h-10 text-[#3b82f6]" />,
              title: "User Interface Design",
              desc: "Modern, pixel-perfect interfaces aligned with your brand identity.",
            },
            {
              icon: <Palette className="w-10 h-10 text-[#3b82f6]" />,
              title: "Visual Identity & Branding",
              desc: "Consistent design systems and styles to create brand recognition.",
            },
            {
              icon: <Workflow className="w-10 h-10 text-[#3b82f6]" />,
              title: "User Research & Testing",
              desc: "Understanding user needs through testing, surveys, and interviews.",
            },
            {
              icon: <MousePointerClick className="w-10 h-10 text-[#3b82f6]" />,
              title: "Interaction Design",
              desc: "Crafting intuitive workflows and seamless interactions.",
            },
            {
              icon: <Eye className="w-10 h-10 text-[#3b82f6]" />,
              title: "Usability Testing",
              desc: "Identifying friction points to refine and optimize user journeys.",
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
            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=800&q=80"
            alt="UI UX Design Team"
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
              Why Choose Our Design Services?
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>✅ Human-centered, research-driven design</li>
              <li>✅ Mobile-first, responsive interfaces</li>
              <li>✅ Consistent branding & visual storytelling</li>
              <li>✅ Rapid prototyping & iterative improvements</li>
              <li>✅ Cross-industry expertise in SaaS, E-commerce & more</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our Design Case Studies
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
          Let’s Design Experiences That Inspire
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-90"
        >
          Collaborate with our expert designers to craft meaningful, engaging,
          and visually stunning digital experiences.
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
            Get a Free Consultation
          </Button>
        </motion.div>
      </section>


    </div>
  );
}

