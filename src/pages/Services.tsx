// client/src/pages/Services.jsx
"use client"

import { useNavigate } from "react-router-dom";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Image, Search, ArrowRight, CheckCircle, MessageSquare, Globe, Cpu, Shield, BarChart, Palette, Megaphone, Code2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO
import Portfolio from "./Portfolio";

const Services = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGetQuote = (serviceName: string) => {
    toast({
      title: "Quote Request",
      description: `Redirecting to contact form for ${serviceName} quote.`,
    });
    navigate("/contact");
  };

  const handleGetConsultation = () => {
    navigate("/contact");
  };

  const handleStartProject = () => {
    navigate("/contact");
  };

  const handleViewPortfolio = () => {
    navigate("/portfolio");
  };

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Enterprise-grade custom web applications tailored to your business needs. We build scalable, secure, and high-performance solutions that drive digital transformation.",
      features: ["Responsive & Mobile-First Design", "Optimized for Performance & SEO", "Cloud-Ready Deployment", "Future-Proof Architecture"],
      technologies: ["React", "Node.js", "TypeScript", "AWS"],
      price: "Contact for Custom Quote",
      timeline: "2-8 weeks",
      url: "/WebDevelopmentServices"
    },
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Enterprise-grade custom software tailored to your complex business workflows. From ERP systems to backend APIs, we build scalable solutions for modern enterprises.",
      features: ["Agile Development Lifecycle", "Scalable Cloud Architecture", "Modern Tech Stacks (Node, Rust, Go)", "Secure API Integrations"],
      technologies: ["Node.js", "Python", "Rust", "AWS/Azure"],
      price: "Contact for Custom Quote",
      timeline: "4-16 weeks",
      url: "/SoftwareDevelopment"
    },
    {
      icon: Search,
      title: "Professional SEO Services",
      description: "Dominate search rankings and drive sustainable organic traffic. We combine technical audits with keyword intelligence to build your brand's digital authority.",
      features: ["Technical SEO Audits", "Targeted Keyword Research", "On-Page Optimization", "Authority Link Building"],
      technologies: ["SEMrush", "Ahrefs", "Google Search Console", "Screaming Frog"],
      price: "Contact for Custom Quote",
      timeline: "Ongoing",
      url: "/SEOServices"
    },
    {
      icon: Megaphone,
      title: "Social Media Marketing",
      description: "Build a loyal community and drive engagement across all major social platforms. We turn likes into loyalty through strategic content and community management.",
      features: ["Viral Content Creation (Reels/TikTok)", "Community Management", "Paid Social Advertising", "Executive Thought Leadership"],
      technologies: ["Instagram", "LinkedIn", "TikTok", "Meta Business Suite"],
      price: "Contact for Custom Quote",
      timeline: "Ongoing",
      url: "/SocialMediaMarketing"
    },
    {
      icon: Cpu,
      title: "Artificial Intelligence & Machine Learning",
      description: "Unlock the power of data with AI/ML solutions. We build intelligent systems that automate processes, predict trends, and deliver actionable insights for smarter decision-making.",
      features: ["Custom Model Development", "Predictive Analytics", "Natural Language Processing", "Computer Vision Applications"],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      price: "Contact for Custom Quote",
      timeline: "3-6 weeks",
      url: "/full-stack-ai-ml-dl"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "High-performance native and cross-platform apps that deliver seamless user experiences on iOS and Android. From idea to app stores, we cover the full lifecycle.",
      features: ["Cross-Platform with Single Codebase", "App Store & Play Store Ready", "Push Notifications & Integrations", "Scalable for Growth"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      price: "Contact for Custom Quote",
      timeline: "3-12 weeks",
      url: "/services" // Generic fallback for mobile apps since no specific page exists yet
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-focused design that blends creativity with usability. We create intuitive interfaces that increase engagement and drive higher conversions.",
      features: ["User Research & Personas", "Wireframing & Prototyping", "Interactive Design Systems", "A/B Tested Interfaces"],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
      price: "Contact for Custom Quote",
      timeline: "2-6 weeks",
      url: "/UIUXServices"
    },
    {
      icon: BarChart,
      title: "Data Analysis",
      description: "Turn raw data into actionable insights. Our analytics solutions help you optimize operations, improve performance, and identify new growth opportunities.",
      features: ["Data Cleaning & Transformation", "Exploratory & Predictive Analysis", "Statistical Modeling", "Interactive Dashboards & Reporting"],
      technologies: ["Python", "R", "Power BI", "Tableau"],
      price: "Contact for Custom Quote",
      timeline: "2-4 weeks",
      url: "/DataAnalysisServices"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Results-driven marketing strategies designed to increase brand visibility, generate leads, and maximize ROI across multiple digital channels.",
      features: ["SEO & Content Optimization", "Social Media Campaigns", "Paid Ads Management", "Analytics & Performance Tracking"],
      technologies: ["Google Ads", "Facebook Ads", "Google Analytics", "SEMrush"],
      price: "Custom Strategy – Contact for Quote",
      timeline: "Ongoing",
      url: "/DigitalMarketing"
    },
    {
      icon: Globe,
      title: "WordPress Development",
      description: "Flexible and scalable WordPress solutions — from custom theme design to full-scale CMS websites with advanced functionality.",
      features: ["Custom Themes & Plugins", "WooCommerce Integration", "SEO-Friendly Setup", "Performance Optimization"],
      technologies: ["WordPress", "PHP", "MySQL", "Elementor"],
      price: "Contact for Custom Quote",
      timeline: "2-6 weeks",
      url: "/WordPressDevelopment"
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with enterprise-level cybersecurity services. We identify risks, prevent threats, and ensure compliance with global standards.",
      features: ["Threat Detection & Prevention", "Penetration Testing & Vulnerability Assessment", "Network & Cloud Security", "Regulatory Compliance"],
      technologies: ["Firewalls", "SIEM", "Kali Linux", "Metasploit", "Wireshark"],
      price: "Contact for Custom Quote",
      timeline: "Ongoing / Based on Project Scope",
      url: "/CyberSecurityServices"
    },
    {
      icon: MessageSquare,
      title: "AI Chatbot Integration",
      description: "Smart chatbot solutions that automate customer support and improve engagement with natural, human-like conversations across platforms.",
      features: ["24/7 Automated Customer Support", "NLP-Powered Interactions", "CRM & API Integration", "Multi-Platform Deployment"],
      technologies: ["Dialogflow", "Rasa", "OpenAI", "Microsoft Bot Framework"],
      price: "Contact for Custom Quote",
      timeline: "2-4 weeks",
      url: "/AIChatbotIntegration"
    }


  ];

  // Define SEO Metadata for the Services page
  const pageTitle = "Top Software Development Company & Best IT Services | Neotech Solutions";
  const pageDescription = "Neotech Solutions is a top software development company offering best-in-class web, mobile, AI/ML, and digital marketing services to help your business innovate and rank higher.";
  const pageKeywords = "top software development company, best IT services Pakistan, web development services, AI ML solutions, Neotech Solutions services";
  const pageUrl = "https://www.neotechsolution.com/services"; // Canonical URL for the services page

  // Image URL for SEO purposes (provided by user previously)
  const seoImageUrl = "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg";

  // Schema.org Markup for the Services Page (WebPage and ItemList of Services)
  const servicesPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": pageUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Neotech Solutions",
      "url": "https://www.neotechsolution.com",
      "logo": seoImageUrl,
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+92-315-000000",
          "contactType": "customer service"
        }
      ]
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": services.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@context": "https://schema.org",
          "@type": "Service", // Represents a service offered
          "name": service.title,
          "description": service.description,
          "url": service.url, // Specific URL for each service
          "serviceType": service.title, // Can reuse title as service type
          "provider": {
            "@type": "Organization",
            "name": "Neotech Solutions"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Pakistan" // Assuming primary service area is Pakistan
          },
          "image": seoImageUrl, // Using the company logo for service image in schema
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `${service.title} Offerings`,
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description + " Key features: " + service.features.join(", ") + ". Technologies: " + service.technologies.join(", ") + ".",
                  "url": service.url
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "USD", // Assuming USD for international clarity, adjust if primarily PKR
                  "price": service.price.includes("Contact for Quote") ? "0" : service.price.replace('Starting from $', '').replace('/month', ''), // Extract price
                  "valueAddedTaxIncluded": "False", // Adjust based on your business model
                  "description": service.price // Use the original price string for full context
                }
              }
            ]
          },
          "keywords": [...service.technologies, ...service.features, service.title, "Neotech Solutions", "custom development"].join(", "),
          "processingTime": `P${service.timeline.replace(' weeks', 'W').replace(' months', 'M').replace('Ongoing', '')}` // Convert to ISO 8601 duration
        }
      }))
    }
  };


  return (
    <div className="min-h-screen font-poppins">
      <Helmet>
        {/* Page Title: Essential for SEO and browser tabs */}
        <title>{pageTitle}</title>

        {/* Meta Description: A brief summary for search engine results */}
        <meta name="description" content={pageDescription} />

        {/* Keywords: Provide context to search engines */}
        <meta name="keywords" content={pageKeywords} />

        {/* Canonical URL: Prevents duplicate content issues */}
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={seoImageUrl} /> {/* Using the provided image */}
        <meta property="og:site_name" content="Neotech Solutions" />

        {/* Twitter Card Tags for Twitter Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={seoImageUrl} /> {/* Using the provided image */}

        {/* Schema Markup for Services Page */}
        <script type="application/ld+json">
          {JSON.stringify(servicesPageSchema)}
        </script>
      </Helmet>



      {/* Hero Section */}
      <section className="relative bg-slate-50 py-16 md:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-10 animate-pulse pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
            Top Software Development & <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Best IT Services</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            We design and develop cutting-edge digital solutions that drive growth, enhance efficiency,
            and elevate your brand. From web development to AI-powered integrations, our expertise ensures
            your business stays ahead in the digital era.
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] rounded-full px-8 py-6 text-lg font-bold transform hover:-translate-y-1"
            onClick={handleGetConsultation}
          >
            Get Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group rounded-[2rem] border border-slate-100 hover:border-slate-200 transition-all duration-300 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)] hover:-translate-y-2 bg-white"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="bg-blue-50 p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-blue-900 group-hover:text-white" />
                    </div>
                    <Badge
                      variant="outline"
                      className="border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[10px] px-3 py-1 bg-slate-50"
                    >
                      {service.timeline}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-extrabold text-slate-900 mt-6 tracking-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900 text-sm md:text-base">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-xs md:text-sm text-gray-600">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900 text-sm md:text-base">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-primary/10 text-primary text-xs md:text-sm px-2 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Price & Button */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
                      <span className="text-xl md:text-2xl font-extrabold text-blue-900">
                        {service.price}
                      </span>
                      <Button
                        className="w-full sm:w-auto bg-slate-900 text-white hover:bg-blue-600 transition-colors duration-300 rounded-xl px-6"
                        onClick={() => {
                          if (service.url.startsWith("/")) {
                            navigate(service.url);
                          } else {
                            toast({
                              title: "Quote Request",
                              description: `Redirecting to contact form for ${service.title} quote.`,
                            });
                            window.open("/contact", "_blank");
                          }
                        }}
                      >
                        {service.url.startsWith("/") ? "Learn More" : "Get Quote"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Portfolio />


      {/* CTA Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Let’s collaborate to build innovative solutions that drive growth, improve efficiency,
            and bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] rounded-full px-8 py-6 text-lg font-bold transform hover:-translate-y-1"
              onClick={() => window.open("/contact", "_blank")}
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
