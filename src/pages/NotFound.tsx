// client/src/pages/NotFound.tsx
"use client"

import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Home, BookOpen, MessageSquare, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const pageTitle = "Page Not Found | Neotech Solutions";
  const pageDescription = `Oops! The page you were looking for at Neotech Solutions could not be found.`;
  const pageUrl = window.location.href;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-poppins relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <main className="flex-grow flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-2xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative inline-block mb-8">
              <h1 className="text-[12rem] font-black leading-[0.8] text-slate-200 select-none tracking-tighter">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 10, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut"
                  }}
                  className="bg-white/80 backdrop-blur-md p-6 rounded-full shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-slate-100"
                >
                  <span className="text-6xl drop-shadow-sm">🔍</span>
                </motion.div>
              </div>
            </div>

            <h2 className="text-4xl font-extrabold text-slate-900 mb-5 tracking-tight">
              Lost in Space?
            </h2>
            <p className="text-lg text-slate-600 mb-12 max-w-md mx-auto font-medium">
              We couldn't find the page you're looking for. It might have been moved or doesn't exist anymore.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              <QuickLink
                to="/"
                icon={<Home size={20} />}
                label="Home"
                description="Back to start"
              />
              <QuickLink
                to="/courses"
                icon={<BookOpen size={20} />}
                label="Courses"
                description="Browse learning"
              />
              <QuickLink
                to="/contact"
                icon={<MessageSquare size={20} />}
                label="Contact"
                description="Get support"
              />
            </div>

            <motion.div
              whileHover={{ x: -4 }}
              className="inline-block mt-8"
            >
              <Link
                to="/"
                className="flex items-center gap-2 text-blue-900 font-bold hover:text-blue-800 transition-colors bg-blue-50 px-6 py-3 rounded-xl border border-blue-100"
              >
                <ArrowLeft size={18} />
                Return to Homepage
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>


    </div>
  );
};

function QuickLink({ to, icon, label, description }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Link
        to={to}
        className="flex flex-col items-center p-8 rounded-[2rem] bg-white border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all hover:border-blue-600 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] group"
      >
        <div className="p-4 rounded-2xl bg-blue-50 text-blue-900 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          {icon}
        </div>
        <span className="font-extrabold text-slate-900 block mb-1.5">{label}</span>
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{description}</span>
      </Link>
    </motion.div>
  );
}

export default NotFound;

