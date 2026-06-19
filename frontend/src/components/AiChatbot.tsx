import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bot,
  MessageSquare,
  Headphones,
  Cpu,
  Globe,
  Rocket,
} from "lucide-react";
import { useNavigate } from "react-router-dom";


const projects = [
  {
    title: "AI-Powered Customer Support Chatbot",
    description:
      "Built an intelligent chatbot for an e-commerce platform that automates 80% of customer queries. Integrated with live chat escalation, multilingual support, and real-time order tracking to improve customer experience.",
    image:
      "https://cdn.prod.website-files.com/610213245ac9941009e625a6/611302bde4a1916a6c3f1c77_Chatbot_Puchased-201130_small-e1606685175680.jpg",
  },
  {
    title: "Banking & Finance Virtual Assistant",
    description:
      "Developed a secure AI assistant for a financial institution to handle account inquiries, fraud detection, and customer onboarding with advanced NLP and compliance features.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGPRqZp9Bvu84kgncWyh9gnlbfsd3rIOh5w&s",
  },
  {
    title: "Healthcare Appointment Scheduling Bot",
    description:
      "Created a healthcare chatbot that manages doctor appointments, patient reminders, and symptom-based triage to reduce wait times and streamline hospital operations.",
    image:
      "https://www.virtualspirits.com/images-blog/chatbot-for-clinic-doctor-appointment.png",
  },
  {
    title: "E-Learning AI Tutor Bot",
    description:
      "Built an AI tutor that guides students with personalized learning paths, instant Q&A support, and interactive quizzes to improve engagement and academic results.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjqPdHSaMdwwwOa6x9xXuJczkV5E4vQZVWQ&s",
  },
  {
    title: "Travel & Booking Chatbot",
    description:
      "Integrated a chatbot for a travel agency that automates bookings, recommends destinations, and provides real-time flight & hotel updates with payment gateway support.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ9CFRPW_EgXrUshlGlR8P1y6wimXJmIEbew&s",
  },
  {
    title: "Retail In-Store Assistant Bot",
    description:
      "Developed an AI chatbot that helps retail shoppers with product recommendations, store navigation, and personalized offers through kiosks and mobile devices.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8W0z9EF2gQd9c7euwlLRsJi9RhKZ-SllAA&s",
  },
];

export default function AIChatbotIntegration() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section
        className="relative bg-[#3b82f6] text-white py-32 px-6 text-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWl8ZW58MHx8MHx8fDA%3D')",
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
            AI Chatbot Integration Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md"
          >
            Automate conversations, enhance customer experiences, and boost
            efficiency with intelligent AI-powered chatbot solutions for every
            industry.
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
          Our AI Chatbot Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Bot className="w-10 h-10 text-[#3b82f6]" />,
              title: "Custom Chatbot Development",
              desc: "AI-powered chatbots tailored to your business needs with advanced NLP.",
            },
            {
              icon: <MessageSquare className="w-10 h-10 text-[#3b82f6]" />,
              title: "Omnichannel Integration",
              desc: "Integrate chatbots into WhatsApp, Messenger, Slack, and websites.",
            },
            {
              icon: <Headphones className="w-10 h-10 text-[#3b82f6]" />,
              title: "Customer Support Automation",
              desc: "Automate FAQs, ticketing, and live chat support to save time.",
            },
            {
              icon: <Cpu className="w-10 h-10 text-[#3b82f6]" />,
              title: "AI & NLP Training",
              desc: "Train chatbots with domain-specific knowledge for accurate responses.",
            },
            {
              icon: <Rocket className="w-10 h-10 text-[#3b82f6]" />,
              title: "E-Commerce Chatbots",
              desc: "Boost sales with product recommendation, upselling & order tracking.",
            },
            {
              icon: <Globe className="w-10 h-10 text-[#3b82f6]" />,
              title: "Multilingual Bots",
              desc: "Engage global audiences with AI bots supporting multiple languages.",
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
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QWl8ZW58MHx8MHx8fDA%3D"
            alt="AI Chatbot"
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
              Why Choose Our AI Solutions?
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>✅ AI chatbots that reduce support costs by 60%</li>
              <li>✅ Seamless integration with your existing systems</li>
              <li>✅ Human-like interactions powered by NLP</li>
              <li>✅ Scalable solutions for any industry</li>
              <li>✅ 24/7 availability and instant response time</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our Recent AI Chatbot Projects
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
          Ready to Transform Your Business with AI Chatbots?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-90"
        >
          Let our AI experts design and integrate chatbots that improve customer
          service, increase engagement, and drive growth.
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

