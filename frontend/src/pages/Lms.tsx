// client/src/pages/LMS.jsx
"use client"

import Lmscoursesection from '@/components/Lmscoursesection';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Users, Briefcase, Award, Headphones, Lightbulb } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { isClerkEnabled } from "@/withClerkProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LMS = () => {
  // Define SEO Metadata for the LMS Page
  const pageTitle = "Learning Management System (LMS) | Neotech Solutions";
  const pageDescription = "Access your online courses, learning materials, and track your progress through the Neotech Solutions Learning Management System. Engage with interactive content and community support.";
  const pageKeywords = "Neotech Solutions LMS, online learning platform, student portal, course access, learning management system, tech education, online courses, Neotech student login";
  const pageUrl = "https://www.neotechsolution.com/lms";

  // Handle Clerk safety
  const clerk = isClerkEnabled ? useUser() : { isLoaded: true, isSignedIn: false };
  const { isLoaded, isSignedIn } = clerk;
  const navigate = useNavigate();

  useEffect(() => {
    if (isClerkEnabled && isLoaded && isSignedIn) {
      navigate('/dashboard');
    }
  }, [isLoaded, isSignedIn, navigate]);

  // Define Schema.org Markup for WebPage and Organization
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": pageUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Neotech Solutions",
      "url": "https://www.neotechsolution.com/"
    },
    "about": {
      "@type": "EducationalOrganization", // Or just Organization, if not primarily educational
      "name": "Neotech Solutions",
      "url": "https://www.neotechsolution.com",
      "logo": "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg", // Replace with your actual logo URL
      "description": "Neotech Solutions is a premier Institute of Technology and Software Company, offering cutting-edge technology education and innovative software solutions.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+92-335-8746804",
        "contactType": "customer service"
      }
    }
  };

  // Note: An Organization schema for Neotech Solutions is likely already defined in your App.jsx or Index.jsx.
  // Including it here ensures this page has the full context, but avoid redundancy if it's globally managed.
  // For the purpose of making *this specific file* complete for SEO, I'm including a concise Organization schema.
  // If your app uses a single, global Organization schema, you can remove this one and rely on the global.
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Neotech Solutions",
    "url": "https://www.neotechsolution.com",
    "logo": "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg",
    "sameAs": [
      "https://www.facebook.com/NeotechSolutions",
      "https://twitter.com/NeotechSolutions",
      "https://www.linkedin.com/in/neotech-solutions-825360350"
    ]
  };


  return (
    <div className="min-h-screen font-poppins">
      <Helmet>
        {/* Page Title: Essential for SEO and browser tabs */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg" />
        <meta property="og:site_name" content="Neotech Solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg" />
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>


      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center z-10">
           <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
           >
             <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
             <span className="text-xs font-bold text-slate-800 tracking-widest uppercase">Student Portal</span>
           </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Learning Management System <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">(LMS)</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Access your online courses, learning materials, and track your progress through our modern portals.
          </motion.p>
        </div>
      </section>



      {/* LMS Course Section */}
      <Lmscoursesection />

      {/* Why Choose Neotech LMS? Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Neotech LMS?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-20 font-medium">
            We go beyond traditional training, offering a high-performance ecosystem designed for the modern tech professional.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            <div className="flex flex-col items-center bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-500 p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-md group">
              <Users className="w-10 h-10 mb-6 text-blue-500 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-black mb-2 tracking-tighter">10,000+</div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] text-center mt-auto">Students Trained</p>
            </div>
            <div className="flex flex-col items-center bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-500 p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-md group">
              <Briefcase className="w-10 h-10 mb-6 text-blue-500 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-black mb-2 tracking-tighter">500+</div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] text-center mt-auto">Tier-1 Clients</p>
            </div>
            <div className="flex flex-col items-center bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-500 p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-md group">
              <Award className="w-10 h-10 mb-6 text-blue-500 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-black mb-2 tracking-tighter">98%</div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] text-center mt-auto">Placement Rate</p>
            </div>
            <div className="flex flex-col items-center bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-500 p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-md group">
              <Headphones className="w-10 h-10 mb-6 text-blue-500 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-black mb-2 tracking-tighter">24/7</div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] text-center mt-auto">Direct Mentorship</p>
            </div>
            <div className="flex flex-col items-center bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-500 p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-md group lg:col-span-1 col-span-2 md:col-span-1">
              <Lightbulb className="w-10 h-10 mb-6 text-blue-500 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-black mb-2 tracking-tighter flex items-center justify-center">Agentic</div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] text-center mt-auto">Built-in AI Tools</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default LMS;
