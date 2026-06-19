import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Lock,
  GlobeLock,
  Server,
  Fingerprint,
  Bug,
} from "lucide-react";
import { useNavigate } from "react-router-dom";


const projects = [
  {
    title: "Enterprise Firewall Implementation",
    description:
      "Deployed next-gen firewalls and intrusion detection systems for a multinational corporation, reducing cyber threats by 70%.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "E-Commerce Security Hardening",
    description:
      "Secured a global online retailer’s platform with end-to-end encryption, fraud prevention, and PCI-DSS compliance.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Healthcare Data Protection",
    description:
      "Implemented HIPAA-compliant data protection measures, encryption, and access control for a hospital’s patient portal.",
    image:
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Phishing Defense Training",
    description:
      "Developed a cybersecurity awareness and phishing simulation program, reducing employee phishing click rates by 80%.",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cloud Security Deployment",
    description:
      "Hardened cloud infrastructure with IAM, continuous monitoring, and zero-trust architecture for a fintech startup.",
    image:
      "https://static.wixstatic.com/media/0398d2_5bd8e3b3e94946559a207b00d5e29bd8~mv2.jpg/v1/fill/w_824,h_714,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0398d2_5bd8e3b3e94946559a207b00d5e29bd8~mv2.jpg",
  },
  {
    title: "Incident Response & Recovery",
    description:
      "Successfully contained and remediated a ransomware attack for a logistics company, restoring operations within 24 hours.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcv1OjpvDa56YgVcJ2PM188Ahy9Ym0jHLqQ&s",
  },
];

export default function CyberSecurityServices() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section
        className="relative bg-[#3b82f6] text-white py-32 px-6 text-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-[#3b82f6]/85"></div>

        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
          >
            Cybersecurity Solutions & Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md"
          >
            Protect your business from cyber threats with advanced security
            solutions, real-time monitoring, and expert defense strategies.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="bg-white text-[#1e293b] font-semibold px-10 py-4 rounded-full shadow-xl hover:bg-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              Get a Security Assessment
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our Cybersecurity Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="w-10 h-10 text-[#1e293b]" />,
              title: "Network Security",
              desc: "Firewalls, intrusion prevention, and secure VPN solutions.",
            },
            {
              icon: <Lock className="w-10 h-10 text-[#1e293b]" />,
              title: "Data Encryption",
              desc: "Protect sensitive data with advanced encryption protocols.",
            },
            {
              icon: <GlobeLock className="w-10 h-10 text-[#1e293b]" />,
              title: "Cloud Security",
              desc: "Zero-trust architecture and continuous cloud monitoring.",
            },
            {
              icon: <Server className="w-10 h-10 text-[#1e293b]" />,
              title: "Threat Detection & Response",
              desc: "Real-time monitoring and rapid incident response services.",
            },
            {
              icon: <Fingerprint className="w-10 h-10 text-[#1e293b]" />,
              title: "Identity & Access Management",
              desc: "Multi-factor authentication and role-based access control.",
            },
            {
              icon: <Bug className="w-10 h-10 text-[#1e293b]" />,
              title: "Vulnerability Assessment",
              desc: "Penetration testing and proactive vulnerability scanning.",
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
            src="https://images.unsplash.com/photo-1614064548237-096f735f344f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Cybersecurity Team"
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
              Why Choose Our Cybersecurity Services?
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>✅ 24/7 Monitoring & Incident Response</li>
              <li>✅ Compliance with GDPR, HIPAA, PCI-DSS</li>
              <li>✅ Advanced threat intelligence systems</li>
              <li>✅ Certified cybersecurity experts (CISSP, CEH)</li>
              <li>✅ Proactive defense & vulnerability management</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our Cybersecurity Case Studies
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
          Stay One Step Ahead of Cyber Threats
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-90"
        >
          Partner with our cybersecurity experts to secure your infrastructure,
          safeguard data, and ensure business continuity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button
            size="lg"
            onClick={() => navigate("/contact")}
            className="bg-white text-[#1e293b] font-semibold px-10 py-4 rounded-full shadow-xl hover:bg-gray-100 hover:shadow-2xl transition-all duration-300"
          >
            Request a Free Security Audit
          </Button>
        </motion.div>
      </section>


    </div>
  );
}

