"use client";

import React from "react";
import { motion, KeyframeOptions } from "framer-motion";
import {
  Users,
  Briefcase,
  Award,
  Headphones,
  Lightbulb,
  Globe,
  Rocket,
  Target,
  Eye,
  Heart,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import WhyChooseUsAbout from "@/components/WhyChooseUsAbout";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description:
        "We continuously adopt emerging technologies and industry trends to create cutting-edge solutions and provide future-ready education.",
    },
    {
      icon: Eye,
      title: "Excellence",
      description:
        "Our commitment to excellence ensures top-quality software development services and professional IT training that meet global standards.",
    },
    {
      icon: Heart,
      title: "Community",
      description:
        "At Neotech Solutions, we build a strong tech community where developers, students, and professionals collaborate and grow together.",
    },
    {
      icon: Award,
      title: "Impact",
      description:
        "We measure success through real impact—empowering students with skills and delivering solutions that drive business growth.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our team of certified mentors and developers bring hands-on expertise, guiding students with personalized industry insights.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "With a strong global footprint, we serve clients worldwide, enabling talent to compete internationally through quality IT services.",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Neotech Solutions (Pvt. Ltd.)",
    url: "https://www.neotechsolution.com",
    logo: "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg",
    description:
      "Neotech Solutions is a premier Institute of Technology and Software Company in Lahore, Pakistan.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Tech Avenue, Software Park, Sector 5, Lahore, Pakistan",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "00000",
      addressCountry: "PK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-300-0000000",
      contactType: "customer service",
      email: "contact@neotechsolution.com",
    },
  };

  return (
    <div className="min-h-screen font-poppins bg-slate-50 relative">
      <Helmet>
        <title>
          About Neotech Solutions | Leading Tech Education & Software Company
        </title>
        <meta
          name="description"
          content="Learn about Neotech Solutions (Pvt. Ltd.), a premier Institute of Technology and Software House in Lahore. Discover our mission, vision, and core values."
        />
        <link rel="canonical" href="https://www.neotechsolution.com/about" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>



      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>

        <div className="relative max-w-[1400px] mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-800 tracking-widest uppercase">The Neotech Story</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Engineering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Frontier</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-16 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We drive innovation at the intersection of powerful technology and elite education. Based in Pakistan, we empower learners and businesses globally.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-8 bg-white/60 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white">
              <AnimatedCounter from={9900} to={10000} useCommas suffix="+" className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2 block" />
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Graduates Trained</p>
            </div>
            <div className="p-8 bg-white/60 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white">
              <AnimatedCounter from={400} to={500} useCommas suffix="+" className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2 block" />
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Projects Delivered</p>
            </div>
            <div className="p-8 bg-white/60 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white">
              <AnimatedCounter from={0} to={80} useCommas suffix="%" className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2 block" />
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-50 to-transparent"></div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
                Our Journey Since <span className="text-blue-900">2024</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                Founded with a vision to revolutionize the tech landscape, Neotech Solutions has quickly become a trusted vanguard for high-end software development and industry-ready IT training.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5 p-6 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-900 shrink-0">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">
                      Registered & Certified
                    </h4>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed">
                      Operating as a legally registered Private Limited company with global compliance and standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-6 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-900 shrink-0">
                    <Rocket size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Rapid Growth</h4>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed">
                      Recognized as one of the fastest-growing tech forces in the region, empowering thousands.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 relative w-full h-[500px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-blue-600 rounded-[3rem] translate-x-4 translate-y-4 opacity-10"></div>
              <div className="w-full h-full bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border border-slate-200/50">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                  alt="Team Work"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl group-hover:bg-blue-100 transition-colors pointer-events-none" />
            <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/30 transform group-hover:scale-110 transition-transform">
              <Target className="text-white w-7 h-7" />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Mission</h3>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              To equip individuals and organizations across the world with future-ready technology skills and innovative software solutions. We bridge the digital gap and empower professionals to thrive.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
            <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl group-hover:bg-indigo-100 transition-colors pointer-events-none" />
            <div className="bg-slate-900 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-slate-900/30 transform group-hover:scale-110 transition-transform">
              <Eye className="text-white w-7 h-7" />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Vision</h3>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              To be recognized as the leading hub for technology education and bespoke software development, driving economic transformation and delivering world-class digital solutions globally.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Our Core <span className="text-blue-900">Values</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium">The principles that guide our innovation and commitment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group flex flex-col p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)] hover:border-blue-200 transition-all duration-300"
              >
                <div className="bg-white border border-slate-200 shadow-sm p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-200 transition-transform">
                  <value.icon className="h-8 w-8 text-blue-900" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Partner with Us?
            </h2>
            <p className="text-blue-900 max-w-2xl mx-auto">
              We are more than just a provider; we are your growth partner.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Headphones className="mx-auto mb-4 text-yellow-300" size={40} />
              <h5 className="font-bold mb-1">24/7 Support</h5>
              <p className="text-xs text-blue-900">
                Dedicated support for students & clients.
              </p>
            </div>
            <div className="text-center">
              <Lightbulb className="mx-auto mb-4 text-yellow-300" size={40} />
              <h5 className="font-bold mb-1">Modern Tech</h5>
              <p className="text-xs text-blue-900">
                Innovative software & learning stacks.
              </p>
            </div>
            <div className="text-center">
              <Globe className="mx-auto mb-4 text-yellow-300" size={40} />
              <h5 className="font-bold mb-1">Global Standards</h5>
              <p className="text-xs text-blue-900">
                Serving excellence in 10+ countries.
              </p>
            </div>
            <div className="text-center">
              <Award className="mx-auto mb-4 text-yellow-300" size={40} />
              <h5 className="font-bold mb-1">Impactful Results</h5>
              <p className="text-xs text-blue-900">
                Proven 98% satisfaction track record.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <WhyChooseUsAbout />
    </div>
  );
};

export default About;
