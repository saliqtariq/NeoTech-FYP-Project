import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';


const WhyChooseUsHero = () => {
  return (
    <div className="relative overflow-hidden bg-slate-50 font-poppins">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Subtle radial blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-800 tracking-widest uppercase">Purpose Driven</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tighter mb-8">
              Technology That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Empowers Everyone</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 font-medium">
              We believe great technology should simplify existence. At Neotech Solutions, we build human-centered digital experiences and elite educational programs that bridge the gap between complexity and clarity.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                to="/enrollnow"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-600/20"
              >
                Start Your Journey
              </Link>
              <Link to="/FreeDemo">
                <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 hover:bg-slate-50 hover:shadow-sm hover:-translate-y-0.5">
                  <PlayCircle className="w-5 h-5 text-blue-900" />
                  Watch Free Demo
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Image Area with Glassmorphism Wrapper */}
          <motion.div
            className="flex-1 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-indigo-600/10 rounded-[3rem] -rotate-3 scale-105 pointer-events-none"></div>
              <div className="w-full h-full bg-white/40 backdrop-blur-md rounded-[3rem] border border-white/50 shadow-2xl p-8 flex items-center justify-center overflow-hidden">
                <motion.img
                  src="/whyus.svg"
                  alt="Neotech Solutions Mission"
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </div>

              {/* Dynamic Badge */}
              <motion.div
                className="absolute -top-6 -right-6 bg-slate-900 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                100% Student Success
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsHero;
