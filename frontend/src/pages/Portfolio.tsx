// client/src/pages/Portfolio.jsx
"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async"; // Import Helmet for SEO
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [

    {
      title: "E-Commerce Platform Development",
      description:
        "A full-stack e-commerce platform built for UK retailers, featuring secure payment integration, advanced inventory management, and a responsive admin dashboard. Designed to enhance customer experience and boost online sales.",
      image: "mern.jpeg",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      client: "TechCorp Inc.",
      duration: "3 months",
      featured: true,
      slug: "ecommerce-platform",
      githubUrl: null,
      url: "https://www.sundialhome.com/",
    },
    {
      title: "Food Delivery Mobile Application",
      description:
        "A cross-platform mobile app tailored for the food delivery sector, complete with real-time order tracking, seamless payment processing, and intuitive UX. Built to meet the growing demand for fast, reliable delivery services across the UK.",
      image: "ai.jpeg",
      category: "Mobile Development",
      technologies: ["React Native", "Firebase", "Google Maps", "Payment Gateway"],
      client: "FoodieExpress",
      duration: "4 months",
      featured: true,
      slug: "food-delivery-mobile-app",
      githubUrl: null,
      url: "https://play.google.com/store/apps/details?id=com.beeorder.customer&pli=1",
    },
    {
      title: "Healthcare Management Dashboard",
      description:
        "A modern UI/UX dashboard designed for healthcare providers in the UK. Features include patient monitoring, secure data access, and in-depth analytics to improve efficiency and streamline care delivery.",
      image: "data.jpeg",
      category: "UI/UX Design",
      technologies: ["Figma", "Adobe XD", "Prototyping", "Design System"],
      client: "MediCare Solutions",
      duration: "2 months",
      featured: false,
      slug: "healthcare-dashboard",
      githubUrl: null,
      url: "https://www.figma.com/community/file/1026733583562048041/healthcare-dashboard",
    },
    {
      title: "SaaS Digital Marketing Campaign",
      description:
        "A results-driven digital marketing strategy for a SaaS provider, incorporating SEO, targeted social media advertising, and content marketing. Optimised for the UK market to increase visibility, generate leads, and drive long-term growth.",
      image: "photo-1460925895917-afdab827c52f",
      category: "Digital Marketing",
      technologies: ["Google Ads", "Facebook Ads", "SEO", "Content Strategy"],
      client: "CloudTech SaaS",
      duration: "6 months",
      featured: false,
      slug: "saas-marketing-campaign",
      githubUrl: null,
      url: "https://www.madx.digital/learn/best-saas-marketing-campaigns",
    },
    {
      title: "Real Estate Property Website",
      description:
        "A bespoke property listing platform with advanced search filters, virtual tours, and lead capture features. Developed for the UK housing market to connect buyers, sellers, and estate agents with an intuitive, user-friendly experience.",
      image: "photo-1560518883-ce09059eeffa",
      category: "Web Development",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "Google Maps"],
      client: "Prime Properties",
      duration: "2 months",
      featured: true,
      slug: "real-estate-website",
      githubUrl: null,
      url: "https://www.jaageer.com/",
    },
    {
      title: "Fitness Tracking Mobile App",
      description:
        "A mobile fitness solution designed for the UK health and wellness sector. Features include personalised workout tracking, nutrition planning, and community-driven social integration to motivate users and improve lifestyle outcomes.",
      image: "photo-1571019613454-1cb2f99b2d8b",
      category: "Mobile Development",
      technologies: ["Flutter", "Firebase", "Health Kit", "Social Integration"],
      client: "FitLife Studio",
      duration: "5 months",
      featured: false,
      slug: "fitness-tracking-app",
      githubUrl: null,
      url: "https://play.google.com/store/apps/details?id=com.keephealthpro.android",
    }



  ];

  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Digital Marketing",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Function to determine image source (Unsplash ID vs. direct URL vs. local public)
  const getProjectImageSrc = (imageIdentifier: string) => {
    if (imageIdentifier.startsWith("http")) {
      return imageIdentifier; // It's already a full URL (e.g., from Bing or external CDN)
    }
    // Check if it's a local public image (e.g., from your public folder)
    // Note: Assuming these exact filenames are in your public directory
    if (
      ["mern.jpeg", "ai.jpeg", "data.jpeg", "cyber.jpeg"].includes(
        imageIdentifier.toLowerCase()
      )
    ) {
      return `/${imageIdentifier}`; // Absolute path from public directory root (for build)
    }
    // Assume it's an Unsplash ID if it's not a direct URL or known local file
    return `https://images.unsplash.com/${imageIdentifier}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
  };

  // Define SEO Metadata for the Portfolio page
  const pageTitle =
    "Neotech Solutions | Our Digital Portfolio & Client Case Studies";
  const pageDescription =
    "Explore Neotech Solutions' diverse portfolio of impactful web development, mobile app, UI/UX design, and digital marketing projects. See how we've delivered innovative solutions for our clients.";
  const pageKeywords =
    "Neotech Solutions portfolio, web development projects, mobile app design, UI/UX case studies, digital marketing campaigns, custom software solutions, client work, software house, technology services";
  const pageUrl = "https://www.neotechsolution.com/portfolio";

  // Schema Markup for the Portfolio Page (CollectionPage or WebPage with ItemList)
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    publisher: {
      "@type": "Organization",
      name: "Neotech Solutions",
      url: "https://www.neotechsolution.com",
      logo: "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg", // Replace with your actual logo
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: filteredProjects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@context": "https://schema.org",
          "@type": "CreativeWork", // General type for projects
          name: project.title,
          description: project.description,
          // If no liveUrl, default to portfolio page URL or GitHub URL if available
          url: pageUrl, // Primary URL for the item now defaults to portfolio page
          image: getProjectImageSrc(project.image),
          about: project.technologies.join(", "),
          genre: project.category,
          keywords: [
            ...project.technologies,
            project.category,
            project.client,
          ].join(", "),
          creator: {
            "@type": "Organization",
            name: "Neotech Solutions", // Neotech Solutions is the creator/developer of this work
          },
          isAccessibleForFree: "False", // Assuming commercial projects
          // If the project has a client, use 'sponsor'
          sponsor: {
            "@type": "Organization",
            name: project.client,
          },
          // Conditional properties for projects with code/live demos
          // liveUrl and githubUrl related properties removed from Schema.org as well
          dateCreated: "2023-01-01", // Placeholder, ideally from actual project data
          datePublished: "2023-01-01", // Placeholder, ideally from actual project data
          duration: `P${project.duration.split(" ")[0]}M`, // Convert "3 months" to "P3M" (ISO 8601)
        },
      })),
    },
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
        <meta property="og:type" content="website" />{" "}
        {/* Or "CollectionPage" */}
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg"
        />
        <meta property="og:site_name" content="Neotech Solutions" />
        {/* Twitter Card Tags for Twitter Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg"
        />
        {/* Schema Markup for Portfolio Page */}
        <script type="application/ld+json">
          {JSON.stringify(portfolioSchema)}
        </script>
      </Helmet>



      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[size:20px_20px]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-800 tracking-widest uppercase">Select Case Studies</span>
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tighter">
            Our Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Masterpieces</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 font-medium">
            Explore a curated selection of our recent digital projects. From innovative web platforms to bespoke mobile solutions, we build to scale globally.
          </p>
          <Button
            size="lg"
            className="rounded-full px-8 py-6 font-bold text-lg bg-slate-900 text-white hover:bg-blue-600 hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => window.open("/contact", "_self")}
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-[72px] z-30 shadow-sm backdrop-blur-md bg-white/90">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`transition-all duration-300 px-6 py-2.5 rounded-full text-sm font-bold border-2 ${activeFilter === category
                  ? "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-900/20"
                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900"
                  }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-slate-50 min-h-[50vh]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white rounded-[2rem] border border-slate-200/60 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden shrink-0 h-64 m-2 rounded-[1.5rem]">
                  <img
                    src={getProjectImageSrc(project.image)}
                    alt={`${project.title} – ${project.category} project for ${project.client}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://placehold.co/800x450/E0F2F1/00796B?text=${encodeURIComponent(
                        `Project: ${project.title}`
                      )}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {project.featured && (
                    <span className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-md text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm">
                      Featured
                    </span>
                  )}

                  {/* Overlay Link */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-slate-900 p-4 rounded-full shadow-xl hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="h-6 w-6" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 leading-tight mb-4 group-hover:text-blue-900 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-50 border border-slate-200 text-slate-700 px-2.5 py-1 text-xs font-semibold rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-slate-50 border border-slate-200 text-slate-500 px-2.5 py-1 text-xs font-semibold rounded-md">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex justify-between items-center pt-5 border-t border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <span>
                      Client <span className="text-slate-900 ml-1">{project.client}</span>
                    </span>
                    <span>
                      {project.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Our <span className="text-blue-900">Achievements</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl">
              <div className="text-5xl font-extrabold text-slate-900 mb-3 tracking-tighter">290<span className="text-blue-900">+</span></div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Projects Completed</div>
            </div>
            <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl">
              <div className="text-5xl font-extrabold text-slate-900 mb-3 tracking-tighter">280<span className="text-blue-900">+</span></div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Happy Clients</div>
            </div>
            <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl">
              <div className="text-5xl font-extrabold text-slate-900 mb-3 tracking-tighter">7<span className="text-blue-900">+</span></div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl">
              <div className="text-5xl font-extrabold text-slate-900 mb-3 tracking-tighter">24<span className="text-blue-900">/7</span></div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Support Available</div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Portfolio;
