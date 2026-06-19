import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaShieldAlt,
  FaCode,
  FaPaintBrush,
  FaRobot,
  FaCogs,
  FaChartLine,
  FaBullhorn,
  FaUserAstronaut
} from "react-icons/fa";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-white pt-20 pb-16">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#2563eb 2px, transparent 2px)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }} />

      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-300/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content Layout - Asymmetrical Display */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

        {/* Left Column: Typography & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-10 lg:pt-0"
        >


          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tighter mb-6 relative">
            Master the <br className="hidden lg:block" />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Future of Tech
              {/* Subtle underline SVG */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            Today.
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-lg mb-10 leading-relaxed font-medium">
            Accelerate your career with elite, expert-led training in AI, Cyber Security, DevOps, and Full-Stack Engineering designed specifically for the modern software industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <button
              onClick={() => navigate("/FreeDemo")}
              className="group relative inline-flex items-center justify-center bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(37,99,235,0.5)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_50px_-10px_rgba(37,99,235,0.6)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2">
                Book Free Demo <FaUserAstronaut className="text-xl group-hover:animate-bounce" />
              </span>
            </button>
            <button
              onClick={() => navigate("/courses")}
              className="inline-flex items-center justify-center bg-white text-slate-800 border-2 border-slate-200 font-bold text-lg px-8 py-4 rounded-2xl hover:border-blue-300 hover:bg-blue-50/50 transition-all shadow-sm hover:shadow-md"
            >
              Explore Curriculum
            </button>
          </div>

          {/* Social Proof Mini */}
          <div className="mt-12 flex items-center gap-4 pt-8 border-t border-slate-200/60 w-full max-w-sm justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative shadow-sm">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm font-medium text-slate-600">
              <span className="text-blue-900 font-bold">500+</span> Enrolled
            </div>
          </div>
        </motion.div>

        {/* Right Column: Floating Asymmetrical UI Elements */}
        <div className="lg:w-1/2 relative h-[500px] lg:h-[650px] w-full flex justify-center items-center">

          {/* Main Visual Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute z-20 w-[90%] max-w-[420px] bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="bg-blue-100 p-3 rounded-2xl">
                <FaCode className="text-blue-900 text-3xl" />
              </div>
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                Live Now
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Advanced MERN</h3>
            <p className="text-slate-500 text-sm mb-6 line-clamp-2">Master enterprise-grade generic engineering and scalable architecture with our capstone curriculum.</p>

            <div className="space-y-4">
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ delay: 1, duration: 1.5 }} className="h-full bg-blue-500 rounded-full" />
              </div>
              <div className="flex justify-between text-xs font-bold text-slate-400">
                <span>Progress: 75%</span>
                <span>Module 4/6</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Element 1 - AI */}
          <motion.div
            animate={{ y: [-10, 15, -10] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-30 top-[10%] right-[-5%] lg:right-[5%] bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-4"
          >
            <div className="bg-indigo-100 p-2 rounded-xl">
              <FaRobot className="text-indigo-600 text-xl" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">AI Integration</p>
              <p className="text-xs text-slate-500">+ Neural Networks</p>
            </div>
          </motion.div>



          {/* Abstract Graph/Chart Graphic */}
          <div className="absolute z-0 w-full h-full flex items-center justify-center opacity-40">
            <svg viewBox="0 0 200 200" className="w-[120%] h-[120%] fill-blue-50" xmlns="http://www.w3.org/2000/svg">
              <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.4,-46.2C91,-33.4,97.2,-17.7,96.6,-2.4C96,-12.9,88.6,12.5,78.2,25.2C67.8,37.9,54.4,47.9,40.1,54.7C25.8,61.5,10.6,65.1,-4.6,73.1C-19.8,81.1,-35,93.5,-48.5,89.5C-62,85.5,-73.8,65.1,-82.9,46.7C-92,28.3,-98.4,12,-97.6,-3.6C-96.8,-19.2,-88.8,-34.1,-78.6,-47C-68.4,-59.9,-56,-70.8,-42.1,-78C-28.2,-85.2,-12.8,-88.7,1.8,-91.7C16.4,-94.7,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
