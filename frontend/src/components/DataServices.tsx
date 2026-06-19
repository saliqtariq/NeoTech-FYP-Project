import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  PieChart,
  Database,
  Cpu,
  LineChart,
  Globe,
} from "lucide-react";
import { useNavigate } from "react-router-dom";


const projects = [
  {
    title: "Sales Performance Dashboard",
    description:
      "Developed an interactive dashboard to analyze sales trends, revenue growth, and customer segments. Enabled executives to make real-time decisions with predictive analytics.",
    image:
      "https://www.geckoboard.com/uploads/Sales-YTD-dashboard-example-1efebb.png",
  },
  {
    title: "Financial Risk Analysis Platform",
    description:
      "Built a secure financial risk analysis tool for a banking client, integrating big data models to forecast credit risks and fraud detection.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Healthcare Data Insights",
    description:
      "Created a healthcare analytics solution to monitor patient outcomes, optimize resource allocation, and provide predictive insights for hospital management.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxiO7Hx9UF2z6LCkUcSY-KYd9HTfdHqWvGwQ&s",
  },
  {
    title: "E-Commerce Customer Analytics",
    description:
      "Implemented a data-driven platform to track customer journeys, buying behavior, and loyalty, leading to a 35% increase in repeat sales.",
    image:
      "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Marketing Campaign Optimization",
    description:
      "Built a machine learning-powered analytics system that evaluates ad spend efficiency, predicts campaign ROI, and improves targeting strategies.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr83DYae7eAVj_GqIivEMMEWFMi2WCyl_K4A&s",
  },
  {
    title: "Retail Inventory Forecasting",
    description:
      "Developed predictive analytics models to optimize retail inventory management, minimize stockouts, and increase profitability.",
    image:
      "https://gmdhsoftware.com/wp-content/uploads/Retail-Forecasting.png",
  },
];

export default function DataAnalysisServices() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section
        className="relative bg-[#3b82f6] text-white py-32 px-6 text-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80')",
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
            Data Analysis & Business Intelligence Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md"
          >
            Unlock the power of data with advanced analytics, dashboards, and AI-driven insights that help businesses grow and make smarter decisions.
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
          Our Data Analysis Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <BarChart className="w-10 h-10 text-[#3b82f6]" />,
              title: "Business Intelligence Dashboards",
              desc: "Visualize key metrics with real-time dashboards for smarter decision-making.",
            },
            {
              icon: <PieChart className="w-10 h-10 text-[#3b82f6]" />,
              title: "Predictive Analytics",
              desc: "Use AI models to forecast sales, risks, and trends with accuracy.",
            },
            {
              icon: <Database className="w-10 h-10 text-[#3b82f6]" />,
              title: "Big Data Management",
              desc: "Transform raw big data into structured insights with powerful tools.",
            },
            {
              icon: <Cpu className="w-10 h-10 text-[#3b82f6]" />,
              title: "Machine Learning Models",
              desc: "Automate analysis with ML algorithms tailored for your industry.",
            },
            {
              icon: <LineChart className="w-10 h-10 text-[#3b82f6]" />,
              title: "Data Visualization",
              desc: "Interactive reports and charts that make complex data easy to understand.",
            },
            {
              icon: <Globe className="w-10 h-10 text-[#3b82f6]" />,
              title: "Global Data Strategy",
              desc: "Scale your data solutions with cloud and multi-region analytics.",
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
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80"
            alt="Data Analysis"
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
              Why Choose Our Data Solutions?
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>✅ Data-driven insights that increase business growth</li>
              <li>✅ Real-time dashboards for faster decision-making</li>
              <li>✅ Predictive analytics powered by AI/ML</li>
              <li>✅ Scalable solutions for enterprises and startups</li>
              <li>✅ End-to-end data strategy and implementation</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our Recent Data Analysis Projects
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
          Ready to Leverage the Power of Data?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-90"
        >
          Let our data experts transform your raw data into valuable insights
          that improve decision-making and drive measurable business outcomes.
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

