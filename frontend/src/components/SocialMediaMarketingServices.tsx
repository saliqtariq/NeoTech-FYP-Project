import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Share2,
    Instagram,
    Twitter,
    Linkedin,
    Facebook,
    Video,
    MessagesSquare,
    BarChart,
    ArrowRight,
    Sparkles,
    Zap
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function SocialMediaMarketingServices() {
    const navigate = useNavigate();

    return (
        <div className="bg-[#fafafa] text-[#1a1a1a] min-h-screen font-poppins overflow-x-hidden">
            <Helmet>
                <title>Social Media Marketing & Management | Neotech Solutions</title>
                <meta name="description" content="Build a loyal community and drive engagement with Neotech Solutions' social media marketing services. From content creation to multi-platform management." />
                <meta name="keywords" content="social media marketing, SMM services, Instagram management, LinkedIn marketing, Meta ads, social media agency, content creation" />
                <link rel="canonical" href="https://www.neotechsolution.com/SocialMediaMarketing" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Social Media Marketing | Neotech Solutions" />
                <meta property="og:description" content="Build your brand community across all social platforms. Content creation, management, and growth hacking." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.neotechsolution.com/SocialMediaMarketing" />
                <meta property="og:image" content="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80" />

                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Social Media Marketing",
                        "description": "Comprehensive social media management and multi-platform growth services.",
                        "provider": {
                            "@type": "Organization",
                            "name": "Neotech Solutions"
                        }
                    })}
                </script>
            </Helmet>



            {/* Hero Section */}
            <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-tr from-[#ff4d4d] via-[#f9cb28] to-[#7367f0]">
                {/* Abstract shapes for a "social" feel */}
                <motion.div
                    animate={{ x: [0, 50, 0], y: [0, 100, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl"
                />

                <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <div className="flex -space-x-3 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                                    <img src={`https://i.pravatar.cc/150?img=${i}`} alt="user" />
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-4 border-white bg-indigo-500 flex items-center justify-center font-bold text-xs ring-2 ring-indigo-300">
                                +1k
                            </div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-black mb-8 leading-[0.95] tracking-tighter"
                    >
                        Turn Likes <br /> Into <span className="text-white drop-shadow-lg underline decoration-white/30">Loyalty</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl md:text-2xl font-medium text-white/90 mb-12 max-w-2xl leading-relaxed"
                    >
                        Social media isn't a broadcast — it's a conversation. We help your brand find its voice and build communities that matter.
                    </motion.p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            size="lg"
                            onClick={() => navigate("/contact")}
                            className="bg-white text-indigo-600 hover:bg-slate-50 font-black px-14 py-8 rounded-full text-xl shadow-2xl transition-all"
                        >
                            Get Started
                            <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Platforms Focus */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { name: "Instagram", color: "from-purple-500 to-pink-500", icon: <Instagram className="w-6 h-6" />, desc: "Visual storytelling through Reels and aesthetic grids." },
                        { name: "LinkedIn", color: "from-blue-600 to-blue-800", icon: <Linkedin className="w-6 h-6" />, desc: "B2B authority building and executive thought leadership." },
                        { name: "Twitter / X", color: "from-slate-800 to-black", icon: <Twitter className="w-6 h-6" />, desc: "Real-time engagement and community trending." },
                        { name: "Facebook", color: "from-blue-500 to-blue-700", icon: <Facebook className="w-6 h-6" />, desc: "Mass reach and targeted interest-based communities." }
                    ].map((platform, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-10 rounded-[2rem] bg-gradient-to-br ${platform.color} text-white shadow-xl hover:scale-105 transition-transform`}
                        >
                            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                {platform.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                            <p className="text-white/80 text-sm leading-relaxed">{platform.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Main Services */}
            <section className="py-24 px-6 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="text-center mb-20 max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-6 tracking-tight">Social Management Redefined</h2>
                        <p className="text-gray-500 text-lg">We handle the noise so you can focus on the growth. Strategic, creative, and data-backed management for every handle.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12 w-full">
                        {[
                            {
                                icon: <Video className="w-10 h-10 text-indigo-500" />,
                                title: "Viral Content Creation",
                                desc: "High-impact Reels, TikToks, and static graphics designed specifically for the algorithms of today."
                            },
                            {
                                icon: <MessagesSquare className="w-10 h-10 text-indigo-500" />,
                                title: "Community Management",
                                desc: "24/7 engagement, comment moderation, and DM management to keep your brand active and human."
                            },
                            {
                                icon: <BarChart className="w-10 h-10 text-indigo-500" />,
                                title: "Growth Hack Analytics",
                                desc: "Weekly reports on reach, engagement rate, and conversion paths from your social funnels."
                            }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="text-center p-8"
                            >
                                <div className="inline-flex items-center justify-center w-24 h-24 bg-indigo-50 rounded-[2.5rem] mb-8 rotate-3 hover:rotate-0 transition-transform duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-[#1a1a1a] leading-tight">{service.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-lg">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Wrapper */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto rounded-[3.5rem] bg-[#1a1a1a] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute top-0 left-0 w-full h-full bg-indigo-500/20 blur-[100px]"
                    />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Ready to Go <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-800">Omni-Channel?</span></h2>
                        <p className="text-white/60 text-xl mb-12 max-w-xl mx-auto">Build a presence that commands attention. Let's design your social blueprint today.</p>
                        <Button
                            size="lg"
                            onClick={() => navigate("/contact")}
                            className="bg-indigo-500 hover:bg-indigo-400 text-white font-black px-12 py-8 rounded-2xl text-xl shadow-xl transition-all"
                        >
                            Get a Proposal
                        </Button>
                    </div>
                </div>
            </section>


        </div>
    );
}
