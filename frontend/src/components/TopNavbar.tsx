import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Sparkles,
  MessageCircle,
  GraduationCap,
  Clapperboard,
} from "lucide-react";

export default function TopNavbar() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-blue-900 text-white border-b border-blue-800">
      <div className="max-w-7xl mx-auto px-4 py-2.5">
        {/* ================= Desktop / Tablet ================= */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <span className="bg-blue-600 text-white font-bold tracking-wide px-4 py-1 rounded-full text-xs shadow-sm uppercase">
              Pro Courses 2026
            </span>
          </motion.div>

          {/* Center */}
          <div className="flex items-center gap-2 bg-blue-800/40 px-5 py-1.5 rounded-full border border-blue-700/50">
            <Sparkles className="w-4 h-4 text-blue-300 animate-pulse" />
            <span className="text-sm font-medium text-blue-50 tracking-wide">
              Industry-Focused In-Demand Skills
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-5 text-sm font-medium">
            <div className="hidden md:flex items-center gap-2 text-blue-100 hover:text-white transition-colors cursor-pointer">
              <Phone className="w-4 h-4 text-blue-400" />
              <span>+92 335 8746804</span>
            </div>

            <div className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors cursor-pointer">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>contact@neotechsolution.com</span>
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="flex items-center gap-1.5 bg-blue-700 hover:bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Contact
            </button>

            <button
              onClick={() => navigate("/enrollnow")}
              className="bg-white text-blue-700 hover:bg-blue-50 px-4 py-1.5 rounded-full text-sm font-bold transition-all shadow-sm"
            >
              Enroll Now
            </button>
          </div>
        </div>

        {/* ================= Mobile View (NO HAMBURGER) ================= */}
        <div className="md:hidden flex flex-col gap-3">
          {/* Row 1 */}
          <div className="flex items-center gap-2 justify-between">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-blue-500 opacity-20 blur-md rounded-lg"></div>
              <div className="relative flex items-center gap-1.5 px-3 py-1.5 bg-blue-800/40 backdrop-blur-sm rounded-lg border border-blue-700/50">
                <Sparkles className="w-4 h-4 text-blue-300 animate-pulse" />
                <span className="text-xs font-bold text-white tracking-wide uppercase">
                  Pro Courses 2026
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => navigate("/FreeDemo")}
                className="flex items-center gap-1 bg-blue-700 hover:bg-blue-600 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm transition-colors"
              >
                <Clapperboard className="w-3.5 h-3.5" />
                Demo
              </button>
              <button
                onClick={() => navigate("/enrollnow")}
                className="flex items-center gap-1 bg-white text-blue-700 hover:bg-blue-50 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm transition-colors"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                Enroll
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
