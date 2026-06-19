"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      // Mocking submission for presentation
      await new Promise(resolve => setTimeout(resolve, 800));

      toast({
        title: "Message Sent Successfully!",
        description: "Our team will contact you within 24 hours.",
      });
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      setTimeout(() => navigate("/Thank-you"), 1500);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "Please try again or contact us directly via WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // SEO & Schema Data
  const pageTitle = "Contact Us | Neotech Solutions (Pvt. Ltd.)";
  const pageDescription = "Get in touch with Neotech Solutions in Lahore. Contact us for software development services, MERN stack training, and AI solutions.";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Neotech Solutions (Pvt. Ltd.)",
    "url": "https://www.neotechsolution.com",
    "logo": "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Avenue, Software Park, Sector 5, Lahore, Pakistan",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "postalCode": "00000",
      "addressCountry": "PK"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+92-300-0000000",
      "contactType": "customer service"
    }]
  };

  return (
    <div className="min-h-screen font-poppins bg-white">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://www.neotechsolution.com/contact" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>



      {/* Hero Header */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-800 tracking-widest uppercase">24/7 Support Available</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tighter"
          >
            Let's Start a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium"
          >
            Whether you have a question about our courses or need a technical overhaul for your business, our engineering experts are ready to build.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Direct Channels</h2>

            <div className="flex gap-5 p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)] hover:border-blue-200 transition-all duration-300">
              <div className="bg-white border border-slate-200 shadow-sm p-4 rounded-2xl w-14 h-14 flex flex-shrink-0 items-center justify-center">
                <MapPin className="text-blue-900 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Headquarters</h4>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">
                  123 Tech Avenue, Software Park, Sector 5, Lahore, Pakistan
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)] hover:border-blue-200 transition-all duration-300">
              <div className="bg-white border border-slate-200 shadow-sm p-4 rounded-2xl w-14 h-14 flex flex-shrink-0 items-center justify-center">
                <Phone className="text-blue-900 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Communication</h4>
                <p className="text-slate-600 font-medium text-sm">+92 300 0000000</p>
                <p className="text-slate-600 font-medium text-sm">+92 300 0000001</p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)] hover:border-blue-200 transition-all duration-300">
              <div className="bg-white border border-slate-200 shadow-sm p-4 rounded-2xl w-14 h-14 flex flex-shrink-0 items-center justify-center">
                <Mail className="text-blue-900 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Digital Support</h4>
                <p className="text-slate-600 font-medium text-sm">contact@neotechsolution.com</p>
                <p className="text-slate-600 font-medium text-sm">support@neotechsolution.com</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl overflow-hidden shadow-xl shadow-blue-900/20 relative p-8 mt-12">
              <MessageSquare className="absolute -right-6 -bottom-6 text-white/5 w-40 h-40 transform rotate-12" />
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold mb-3 tracking-tight">Need Instant Help?</h3>
                <p className="text-blue-100 font-medium text-sm mb-8 leading-relaxed">Our WhatsApp engineering & support team is active 24/7 for urgent inquiries.</p>
                <Button
                  onClick={() => window.open("https://wa.link/lkcpco", "_blank")}
                  className="bg-white text-blue-700 hover:bg-slate-50 hover:text-blue-800 w-full rounded-2xl py-6 font-bold text-base shadow-lg"
                >
                  <MessageSquare className="w-5 h-5 mr-2" /> Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] p-8 sm:p-12 h-full">
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-8">Send an Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">First Name</label>
                    <Input name="firstName" value={formData.firstName} onChange={handleInputChange} required placeholder="John" className="rounded-xl bg-slate-50 border-slate-200 h-14" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Last Name</label>
                    <Input name="lastName" value={formData.lastName} onChange={handleInputChange} required placeholder="Doe" className="rounded-xl bg-slate-50 border-slate-200 h-14" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                  <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="john@example.com" className="rounded-xl bg-slate-50 border-slate-200 h-14" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
                  <Input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+92 300 1234567" className="rounded-xl bg-slate-50 border-slate-200 h-14" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Message</label>
                  <Textarea name="message" value={formData.message} onChange={handleInputChange} required rows={6} placeholder="How can we help you?" className="rounded-xl bg-slate-50 border-slate-200 resize-none p-4" />
                </div>
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 hover:bg-blue-600 rounded-xl h-16 text-lg font-bold transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Processing Request..." : "Submit Inquiry"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
