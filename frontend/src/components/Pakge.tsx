import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface PackageProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

import { useCart } from "@/context/CartContext";

const PackageCard: React.FC<PackageProps> = ({ title, price, features, highlighted }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col h-full bg-white ${highlighted
          ? "border-2 border-blue-500 shadow-[0_20px_50px_-15px_rgba(37,99,235,0.3)] scale-105 z-10"
          : "border border-slate-200 shadow-sm hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:border-blue-200"
        }`}
    >
      {highlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6 pt-4">
        <h3 className={`text-xl font-bold tracking-tight mb-2 ${highlighted ? "text-blue-700" : "text-slate-900"}`}>
          {title}
        </h3>
        <p className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tighter">
          {price}
        </p>
        <p className="text-sm text-slate-500 font-medium">Billed monthly</p>
      </div>

      <div className="flex justify-center mb-8">
        <span className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100/50 text-indigo-700 px-3 py-1.5 rounded-full text-xs font-bold w-max">
          🎉 Free Demo Class Included
        </span>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-slate-600 text-sm font-medium leading-relaxed">
            <CheckCircle2 className={`shrink-0 mt-0.5 ${highlighted ? 'text-blue-900' : 'text-blue-400'}`} size={18} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Button
          className={`w-full rounded-2xl py-6 font-bold text-base transition-all duration-300 ${highlighted
              ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30"
              : "bg-slate-50 text-slate-900 border border-slate-200 hover:bg-white hover:border-blue-300 hover:text-blue-900 shadow-sm"
            }`}
          onClick={() => navigate("/enrollnow")}
        >
          {highlighted ? "Get Started Now" : "Choose Plan"}
        </Button>
      </div>
    </motion.div>
  );
};

const PricingSection: React.FC = () => {
  const { isPakistan, locationLoading, formatPrice } = useCart();

  if (locationLoading || isPakistan) return null; // ✅ Hide section during loading or if user is in Pakistan

  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Heading */}
      <div className="text-center mb-20 max-w-4xl mx-auto relative z-10">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 text-blue-800 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-blue-200/50 backdrop-blur-sm">
          Transparent Investment
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          Flexible & Affordable <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Pricing Plans</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
          Whether you're starting out or scaling up, our globally recognized tech architecture training is accessible to everyone. Choose a plan that fits your ambition.
        </p>
        <p className="mt-6 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-xl text-sm font-bold text-slate-500 shadow-sm border border-slate-100">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Up to 3 Classes/Week (2 Live + 1 Assignment)
        </p>
      </div>

      {/* Packages */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PackageCard
          title="Basic"
          price={formatPrice(99, 1999)}
          features={[
            "Access to live interactive sessions",
            "Weekly assignments & hands-on labs",
            "On-demand access to recordings via LMS",
            "Live Q&A with instructors"
          ]}
        />

        <PackageCard
          title="Standard"
          price={formatPrice(149, 1999 + 1000)}
          highlighted
          features={[
            "Everything in Basic",
            "Work on portfolio-ready projects",
            "Dedicated student success support",
            "Career guidance & employability sessions"
          ]}
        />

        <PackageCard
          title="Premium"
          price={formatPrice(199, 2999 + 2000)}
          features={[
            "Everything in Standard",
            "On-demand access to recordings via LMS",
            "Priority learner support",
            "Exclusive webinars & networking communities"
          ]}
        />
      </div>
    </section>
  );
};

export default PricingSection;
