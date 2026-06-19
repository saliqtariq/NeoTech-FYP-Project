import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Code2,
    Cpu,
    Database,
    Layers,
    ShieldCheck,
    Zap,
    ArrowRight,
    CheckCircle2
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const softwareProjects = [
    {
        title: "Enterprise Resource Planning (ERP)",
        description: "A comprehensive ERP system for a manufacturing giant, integrating inventory, HR, and finance modules.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "FinTech Mobile Banking API",
        description: "High-concurrency middleware for a digital bank, processing millions of transactions daily with sub-millisecond latency.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "HealthTech Patient Portal",
        description: "Secure, HIPAA-compliant platform for patient data management and remote consultation.",
        image: "https://cdn.dribbble.com/userupload/44176784/file/original-4562d230225471d8bbb513eabf984589.png?format=webp&resize=400x300&vertical=center",
    },
];

export default function SoftwareServices() {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen font-poppins">
            <Helmet>
                <title>Custom Software Development Services | Neotech Solutions</title>
                <meta name="description" content="Neotech Solutions delivers enterprise-grade custom software development, from ERP systems to mobile APIs. Scalable, secure, and high-performance solutions for your business." />
                <meta name="keywords" content="custom software development, enterprise software, software solutions, Neotech Solutions, scalable applications, API development" />
                <link rel="canonical" href="https://www.neotechsolution.com/SoftwareDevelopment" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Custom Software Development Services | Neotech Solutions" />
                <meta property="og:description" content="Enterprise-grade custom software development. Scalable, secure, and high-performance solutions tailored to your business." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.neotechsolution.com/SoftwareDevelopment" />
                <meta property="og:image" content="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" />

                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Custom Software Development",
                        "description": "Enterprise-grade custom software tailored to your business needs.",
                        "provider": {
                            "@type": "Organization",
                            "name": "Neotech Solutions",
                            "url": "https://www.neotechsolution.com"
                        },
                        "serviceType": "Software Development",
                        "areaServed": "Global"
                    })}
                </script>
            </Helmet>



            {/* Hero Section */}
            <section className="relative bg-[#2563eb] text-white py-32 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] to-[#061f4e] opacity-90"></div>
                <div className="absolute inset-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'overlay' }}></div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
                    >
                        Custom Software <span className="text-blue-900">Excellence</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed text-blue-900"
                    >
                        We transform complex business challenges into intuitive, scalable, and high-performance software solutions.
                    </motion.p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            size="lg"
                            onClick={() => navigate("/contact")}
                            className="bg-white text-[#2563eb] font-bold px-12 py-6 rounded-full shadow-2xl hover:bg-blue-600 transition-all duration-300 text-lg"
                        >
                            Start Your Project
                            <ArrowRight className="ml-2 h-6 w-6" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise-Ready Features</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Our development process focuses on security, scalability, and seamless user experience.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        {
                            icon: <Code2 className="w-12 h-12 text-[#2563eb]" />,
                            title: "Custom Development",
                            desc: "Unique software built from scratch to match your specific business workflows.",
                        },
                        {
                            icon: <Layers className="w-12 h-12 text-[#2563eb]" />,
                            title: "Scalable Architecture",
                            desc: "Cloud-native designs that grow with your user base without performance drops.",
                        },
                        {
                            icon: <ShieldCheck className="w-12 h-12 text-[#2563eb]" />,
                            title: "Security First",
                            desc: "Enterprise-grade security protocols to protect your sensitive data.",
                        },
                        {
                            icon: <Zap className="w-12 h-12 text-[#2563eb]" />,
                            title: "High Performance",
                            desc: "Optimized code for blazing-fast load times and smooth interactions.",
                        },
                        {
                            icon: <Database className="w-12 h-12 text-[#2563eb]" />,
                            title: "Modern Databases",
                            desc: "Efficient data structures ensuring high availability and ACID compliance.",
                        },
                        {
                            icon: <Cpu className="w-12 h-12 text-[#2563eb]" />,
                            title: "AI Integration",
                            desc: "Leveraging machine learning to add intelligent automation to your software.",
                        },
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden bg-white">
                                <CardContent className="p-10">
                                    <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Expertise Section */}
            <section className="bg-blue-600 text-white py-24 px-6 overflow-hidden relative">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Why Neotech for Your <br /><span className="text-blue-900">Software Solutions?</span>
                        </h2>
                        <div className="space-y-6">
                            {[
                                "Agile methodology for transparent development.",
                                "Expertise in latest tech stacks (React, Node, Go, Rust).",
                                "Rigorous QA and automated testing protocols.",
                                "Seamless integration with existing business tools.",
                                "24/7 post-deployment support and maintenance."
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <CheckCircle2 className="text-blue-900 w-6 h-6 flex-shrink-0" />
                                    <p className="text-lg text-blue-900">{text}</p>
                                </div>
                            ))}
                        </div>
                        <Button
                            size="lg"
                            onClick={() => navigate("/contact")}
                            className="mt-10 bg-blue-600 hover:bg-blue-600 text-white font-bold px-10 py-6 rounded-xl"
                        >
                            Get Expert Advice
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80"
                            alt="Software Code"
                            className="rounded-3xl shadow-2xl border-4 border-blue-600"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-3xl shadow-xl hidden lg:block">
                            <p className="text-4xl font-bold">100+</p>
                            <p className="text-sm uppercase tracking-widest font-semibold">Projects Delivered</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Recent Work */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Recent Software Successes</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {softwareProjects.map((project, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100"
                        >
                            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6 text-center bg-gray-50 border-t border-gray-200">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Let's Build Something Great</h2>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Scale your business with custom software that performs. Our experts are ready to guide you from concept to code.</p>
                <Button
                    size="lg"
                    onClick={() => navigate("/contact")}
                    className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-12 py-7 rounded-full text-xl shadow-xl transition-all"
                >
                    Consult Our Team
                </Button>
            </section>


        </div>
    );
}
