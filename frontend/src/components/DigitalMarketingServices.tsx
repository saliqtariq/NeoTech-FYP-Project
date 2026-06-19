import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Megaphone,
    BarChart3,
    Mail,
    Search,
    Users,
    PieChart,
    ArrowRight,
    Sparkles,
    Zap
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function DigitalMarketingServices() {
    const navigate = useNavigate();

    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen font-poppins">
            <Helmet>
                <title>Full-Service Digital Marketing Agency | Neotech Solutions</title>
                <meta name="description" content="Elevate your brand with Neotech Solutions' data-driven digital marketing strategies. We specialize in ROI-focused campaigns, PPC, email marketing, and comprehensive growth strategies." />
                <meta name="keywords" content="digital marketing services, marketing agency, PPC management, email marketing, growth strategy, Neotech Solutions, ROI marketing" />
                <link rel="canonical" href="https://www.neotechsolution.com/DigitalMarketing" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Digital Marketing Agency | Neotech Solutions" />
                <meta property="og:description" content="Data-driven digital marketing strategies for modern brands. Master every channel and grow your business." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.neotechsolution.com/DigitalMarketing" />
                <meta property="og:image" content="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" />

                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Digital Marketing Services",
                        "description": "Full-service digital marketing including PPC, SEO, and growth consulting.",
                        "provider": {
                            "@type": "Organization",
                            "name": "Neotech Solutions"
                        }
                    })}
                </script>
            </Helmet>



            {/* Hero Section */}
            <section className="relative bg-[#3b82f6] text-white py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 opacity-95"></div>
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <span className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase">
                            Growth Unleashed
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-black mb-8 leading-tight max-w-4xl"
                    >
                        Data-Driven <span className="text-blue-200">Digital Strategies</span> for Modern Brands
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-2xl text-blue-50 mb-12 max-w-2xl leading-relaxed"
                    >
                        Stop guessing. Start growing. We combine creative storytelling with rigorous data analysis to deliver measurable marketing results.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <Button
                            size="lg"
                            onClick={() => navigate("/contact")}
                            className="bg-white text-blue-900 hover:bg-blue-50 font-black px-12 py-8 rounded-2xl text-xl shadow-2xl transition-all"
                        >
                            Get My Growth Map
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-black text-slate-900 mb-4">Master Every Channel</h2>
                        <p className="text-slate-600 text-lg">We provide a 360-degree approach to digital presence, ensuring your message lands exactly where your audience lives.</p>
                    </div>
                    <div className="hidden md:block">
                        <Sparkles className="w-16 h-16 text-blue-500 opacity-20" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Megaphone className="w-8 h-8 text-blue-900" />,
                            title: "Strategic PPC",
                            desc: "Hyper-targeted paid search and social campaigns optimized for conversion and acquisition cost.",
                            features: ["Google Ads", "Meta Ads", "LinkedIn Ads"]
                        },
                        {
                            icon: <Mail className="w-8 h-8 text-blue-900" />,
                            title: "Lifecycle Marketing",
                            desc: "Personalized email and SMS automation that nurtures prospects and retains loyal customers.",
                            features: ["Marketing Automation", "Segmented Lists", "A/B Testing"]
                        },
                        {
                            icon: <BarChart3 className="w-8 h-8 text-blue-900" />,
                            title: "Performance Analytics",
                            desc: "Advanced tracking and attribution models to show exactly where your revenue is coming from.",
                            features: ["Real-time Dashboards", "ROI Tracking", "User Flow Mapping"]
                        },
                        {
                            icon: <Search className="w-8 h-8 text-blue-900" />,
                            title: "Search Authority",
                            desc: "Beyond SEO — we build search authority that turns your brand into a trusted resource.",
                            features: ["Content Hubs", "E-E-A-T Focus", "Semantic Search"]
                        },
                        {
                            icon: <Users className="w-8 h-8 text-blue-900" />,
                            title: "Growth Consulting",
                            desc: "High-level strategic guidance to align your marketing budget with your long-term business goals.",
                            features: ["Market Analysis", "Competitor Audits", "Brand Positioning"]
                        },
                        {
                            icon: <PieChart className="w-8 h-8 text-blue-900" />,
                            title: "Campaign Management",
                            desc: "End-to-end execution of multi-channel campaigns from concept to post-mortem analysis.",
                            features: ["Creative Direction", "Media Buying", "Performance Monitoring"]
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card className="h-full border-none shadow-sm hover:shadow-2xl transition-all duration-300 rounded-[2.5rem] bg-white group">
                                <CardContent className="p-10">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-300">
                                        <span className="group-hover:text-white transition-colors">
                                            {item.icon}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 text-slate-900">{item.title}</h3>
                                    <p className="text-slate-600 mb-8 leading-relaxed">{item.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.features.map((f, idx) => (
                                            <span key={idx} className="bg-slate-100 px-3 py-1 rounded-full text-xs font-bold text-slate-600 uppercase tracking-tighter">
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="bg-slate-900 text-white py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black mb-8 leading-tight"
                        >
                            Our Philosophy: <br />
                            <span className="text-blue-400">Precision Over Noise</span>
                        </motion.h2>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                            We believe digital marketing isn't about being loud; it's about being right. We focus on reaching the right person, with the right message, at the peak of their intent.
                        </p>
                        <div className="grid grid-cols-2 gap-8 mb-10">
                            <div>
                                <span className="text-5xl font-black text-blue-500 block mb-2">94%</span>
                                <p className="text-sm font-bold uppercase text-slate-400">Client Retention</p>
                            </div>
                            <div>
                                <span className="text-5xl font-black text-blue-500 block mb-2">3.5x</span>
                                <p className="text-sm font-bold uppercase text-slate-400">Avg ROI Increase</p>
                            </div>
                        </div>
                        <Button
                            size="lg"
                            onClick={() => navigate("/contact")}
                            className="bg-blue-600 hover:bg-blue-500 text-white font-black px-10 py-6 rounded-2xl transition-transform hover:-translate-y-1"
                        >
                            Work With Us
                        </Button>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80"
                            alt="Marketing Strategy"
                            className="rounded-[3rem] shadow-2xl relative z-10"
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/20 blur-[120px] rounded-full"></div>
                    </motion.div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block p-4 bg-blue-50 rounded-full mb-8">
                        <Zap className="w-10 h-10 text-blue-900 animate-pulse" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                        Ready to Amplify Your Digital Impact?
                    </h2>
                    <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                        Contact Neotech Solutions today for a comprehensive digital marketing audit and a custom-built growth strategy.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => navigate("/contact")}
                        className="bg-slate-900 hover:bg-slate-800 text-white font-black px-12 py-8 rounded-3xl text-xl shadow-2xl transition-all hover:scale-105"
                    >
                        Start Growing Now
                    </Button>
                </div>
            </section>


        </div>
    );
}
