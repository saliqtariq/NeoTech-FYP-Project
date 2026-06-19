import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PlayCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const DemoCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="py-12 bg-gradient-to-r from-blue-50 via-white to-blue-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(59,130,246,0.05)] border border-blue-100 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Sparkles className="h-24 w-24 text-blue-900" />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-sm font-semibold mb-4 border border-blue-100">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                            </span>
                            Free Recorded Classes
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight">
                            Experience Our Expert-Led <br className="hidden md:block" />
                            <span className="text-blue-900">Demo Classes for Free</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mb-0 font-medium">
                            Get a glimpse of our teaching style and course content. Watch real recorded lectures by industry experts before you enroll.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 shrink-0 z-10">
                        <Button
                            onClick={() => navigate('/FreeDemo')}
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-7 rounded-2xl shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1 group text-lg"
                        >
                            <PlayCircle className="mr-2 h-6 w-6" />
                            Watch Free Demo
                            <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DemoCTA;
