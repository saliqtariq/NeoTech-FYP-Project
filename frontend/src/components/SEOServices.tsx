import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Search,
    TrendingUp,
    BarChart4,
    Globe2,
    FileSearch,
    Lightbulb,
    ArrowRight,
    Target,
    Zap
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function SEOServices() {
    const navigate = useNavigate();

    return (
        <div className="bg-white text-gray-800 min-h-screen font-poppins">
            <Helmet>
                <title>Professional SEO Services | Rank Higher | Neotech Solutions</title>
                <meta name="description" content="Drive organic traffic and dominate search results with Neotech Solutions. Our SEO services include technical audits, keyword research, and on-page optimization." />
                <meta name="keywords" content="SEO services, search engine optimization, technical SEO, link building, Neotech Solutions, rank higher, organic traffic" />
                <link rel="canonical" href="https://www.neotechsolution.com/SEOServices" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Professional SEO Services | Rank Higher | Neotech Solutions" />
                <meta property="og:description" content="Dominate search rankings and drive sustainable organic traffic with data-backed SEO strategies." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.neotechsolution.com/SEOServices" />
                <meta property="og:image" content="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" />

                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Professional SEO Services",
                        "description": "Comprehensive Search Engine Optimization to increase organic visibility.",
                        "provider": {
                            "@type": "Organization",
                            "name": "Neotech Solutions"
                        }
                    })}
                </script>
            </Helmet>



            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-28 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-500/30 px-4 py-2 rounded-full text-blue-100 font-medium mb-6 backdrop-blur-sm">
                            <Target className="w-4 h-4" />
                            <span>Data-Driven Growth</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1]">
                            Dominate the <span className="text-blue-300">Front Page</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl leading-relaxed">
                            We don't just optimize websites; we build visibility that lasts. Rank higher, drive traffic, and convert visitors into loyal customers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                onClick={() => navigate("/contact")}
                                className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-6 rounded-xl shadow-lg transition-all"
                            >
                                Free SEO Audit
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="text-blue-700 hover:bg-white/10 font-bold px-8 py-6 rounded-xl"
                            >
                                Our Process
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="hidden lg:block"
                    >
                        <div className="relative p-8 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-md">
                            <div className="flex gap-4 mb-6">
                                <div className="w-full h-8 bg-white/20 rounded-full animate-pulse"></div>
                                <div className="w-24 h-8 bg-blue-400/50 rounded-full"></div>
                            </div>
                            <div className="space-y-4">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="h-6 bg-white/10 rounded-lg" style={{ width: `${100 - (i * 15)}%` }}></div>
                                ))}
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-blue-500 p-6 rounded-2xl shadow-xl">
                                <TrendingUp className="w-12 h-12 text-white" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete SEO Solutions</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">From technical foundations to creative content, we cover every aspect of modern search visibility.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FileSearch className="w-10 h-10 text-blue-900" />,
                            title: "Technical SEO Audit",
                            desc: "Deep dive into your site architecture, speed, and mobile-friendliness to ensure search engines can crawl with ease.",
                            tag: "Optimization"
                        },
                        {
                            icon: <Lightbulb className="w-10 h-10 text-blue-900" />,
                            title: "Keyword Intelligence",
                            desc: "Targeted research focused on intent, finding the exact search terms that bring converting traffic to your door.",
                            tag: "Strategy"
                        },
                        {
                            icon: <Globe2 className="w-10 h-10 text-blue-900" />,
                            title: "On-Page Excellence",
                            desc: "Perfectly optimized content, meta tags, and internal linking to signal relevance for every target page.",
                            tag: "Implementation"
                        },
                        {
                            icon: <TrendingUp className="w-10 h-10 text-blue-900" />,
                            title: "Content Strategy",
                            desc: "Creating high-value, authority-building content that satisfies users and signals expertise to search algorithms.",
                            tag: "Authority"
                        },
                        {
                            icon: <BarChart4 className="w-10 h-10 text-blue-900" />,
                            title: "Performance Analytics",
                            desc: "Monthly detailed reports on ranking changes, traffic sources, and conversion metrics to justify your ROI.",
                            tag: "Transparency"
                        },
                        {
                            icon: <Zap className="w-10 h-10 text-blue-900" />,
                            title: "Local SEO Mastery",
                            desc: "Optimizing your Google Business Profile and local citations to dominate your local market area.",
                            tag: "Local Growth"
                        }
                    ].map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card className="h-full group hover:bg-blue-600 transition-all duration-500 rounded-3xl border-gray-100 shadow-sm hover:shadow-2xl">
                                <CardContent className="p-10">
                                    <div className="mb-8 flex justify-between items-start">
                                        <div className="p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-500 transition-colors">
                                            {service.icon}
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-blue-900 group-hover:text-blue-100 transition-colors pt-2">
                                            {service.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 group-hover:text-blue-50 transition-colors leading-relaxed">
                                        {service.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Proof Section */}
            <section className="bg-gray-50 py-24 px-6 border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-extrabold mb-8 text-gray-900 leading-tight">
                                Our Data-Backed <br />Optimization Workflow
                            </h2>
                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Analyze", body: "We crawl your entire site to find roadblocks and hidden opportunities." },
                                    { step: "02", title: "Discover", body: "Deep keyword intelligence to find untapped revenue-generating terms." },
                                    { step: "03", title: "Optimize", body: "Executing technical and on-page fixes with surgical precision." },
                                    { step: "04", title: "Scale", body: "Building authority through content and elite backlinks." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6">
                                        <span className="text-4xl font-black text-blue-100">{item.step}</span>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                                            <p className="text-gray-600">{item.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-10 rounded-[3rem] shadow-2xl relative"
                        >
                            <div className="absolute -top-6 -right-6 p-6 bg-blue-600 rounded-3xl text-white font-bold text-center">
                                <span className="text-2xl block">+240%</span>
                                <span className="text-[10px] uppercase tracking-tighter">Avg Traffic Lift</span>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                                alt="SEO Results"
                                className="rounded-2xl"
                            />
                            <p className="mt-8 text-gray-700 italic font-medium leading-relaxed">
                                "Neotech Solutions took our complex SaaS platform from page 10 to page 1 for our most competitive keywords in just 4 months."
                            </p>
                            <div className="mt-6 flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">David Miller</p>
                                    <p className="text-xs text-gray-500">Marketing Director, CloudStream</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                        Ready to Outrank Your Competition?
                    </h2>
                    <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                        Don't leave your visibility to chance. Partner with SEO experts who put data before guesses and results before excuses.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => navigate("/contact")}
                        className="bg-blue-700 hover:bg-blue-800 text-white font-black px-12 py-8 rounded-2xl text-xl shadow-2xl transition-all hover:scale-105"
                    >
                        Start Your Free Consultation
                    </Button>
                </div>
            </section>


        </div>
    );
}
