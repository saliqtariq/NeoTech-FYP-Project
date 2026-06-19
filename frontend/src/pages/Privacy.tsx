"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  const pageTitle = "Privacy Policy | Neotech Solutions";
  const pageDescription = "Learn how Neotech Solutions (Pvt. Ltd.) handles, stores, and protects your personal, consultancy data, and payment information with industry-leading security standards.";
  const pageKeywords = "privacy policy, data protection, payment security, Neotech Solutions, tech courses privacy, IT consultancy data safety, PCI-DSS compliance Pakistan";
  const pageUrl = "https://www.neotechsolution.com/privacy";

  const seoImageUrl = "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg";

  const privacyPageSchema = {
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
    "publisher": {
      "@type": "Organization",
      "name": "Neotech Solutions (Pvt. Ltd.)",
      "url": "https://www.neotechsolution.com",
      "logo": seoImageUrl,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Tech Avenue, Software Park, Sector 5, Lahore, Pakistan",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "postalCode": "00000",
        "addressCountry": "PK"
      }
    },
  };

  return (
    <div className="min-h-screen font-poppins">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">
          {JSON.stringify(privacyPageSchema)}
        </script>
      </Helmet>



      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-800 tracking-widest uppercase">Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Policy</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            At <strong>Neotech Solutions (Pvt. Ltd.)</strong>, we value the trust you place in us when sharing your personal and business data.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8 prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-600 prose-a:text-blue-900 prose-li:text-slate-600">

            {/* 1. Information We Collect */}
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4 mt-0 border-b border-slate-200 pb-4">1. Information We Collect</h2>
              <p className="font-medium leading-relaxed mb-4">We collect information to provide better services to our students and consultancy clients:</p>
              <ul className="list-disc list-inside space-y-3 font-medium">
                <li><strong>Personal Identity:</strong> Name, email address, phone number, and billing address.</li>
                <li><strong>Educational Data:</strong> Course enrollments, attendance logs, and progress in our live sessions.</li>
                <li><strong>Virtual Class Data:</strong> As we use <strong>Zoom and Google Meet</strong> for live courses, we may process technical identifiers required for session access.</li>
                <li><strong>Consultancy Data:</strong> Business requirements and project-related files shared during IT services.</li>
              </ul>
            </div>

            {/* 2. How We Use Your Information */}
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4 mt-0 border-b border-slate-200 pb-4">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-3 font-medium">
                <li>To verify your identity and manage course subscriptions.</li>
                <li>To provide seamless IT consultancy and software services.</li>
                <li>To process transactions securely through authorized financial partners.</li>
                <li>To automate the delivery of Zoom/Meet links and course materials.</li>
                <li>To comply with regulatory requirements and fraud prevention standards.</li>
              </ul>
            </div>

            {/* 3. Payment Processing & Security */}
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4 mt-0 border-b border-slate-200 pb-4 pl-4">3. Payment & Security Standards</h2>
              <p className="font-medium leading-relaxed mb-4 pl-4">
                All future electronic payments will be processed via secure, regulated third-party gateways.
              </p>
              <ul className="list-disc list-inside space-y-3 font-medium pl-4">
                <li><strong>Neotech Solutions</strong> does not store your credit card or sensitive banking credentials on our servers.</li>
                <li>All transactions are handled using <strong>PCI-DSS</strong> compliant encryption standards.</li>
                <li>Personal and payment data is handled with the highest level of confidentiality.</li>
              </ul>
            </div>

            {/* 4. Consultancy Confidentiality */}
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4 mt-0 border-b border-slate-200 pb-4">4. Consultancy Confidentiality</h2>
              <p className="font-medium leading-relaxed">
                For IT consultancy services, we treat all project-specific data and intellectual property as strictly confidential. We do not share project logic or business data with third parties unless required for service delivery.
              </p>
            </div>

            {/* 5. Information Sharing */}
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4 mt-0 border-b border-slate-200 pb-4">5. Information Sharing</h2>
              <p className="font-medium leading-relaxed mb-4">We do not sell your data. Sharing occurs only with:</p>
              <ul className="list-disc list-inside space-y-3 font-medium">
                <li>Regulated financial institutions for transaction processing.</li>
                <li>Platform partners like <strong>Zoom/Google</strong> for live session hosting.</li>
                <li>Legal authorities if required by the law of Pakistan.</li>
              </ul>
            </div>

            {/* 6. Contact Us */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-[2rem] p-8 md:p-10 mt-12 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mt-0 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span> Contact Us
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 m-0">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest m-0 mb-2">Registered Office Address</p>
                  <p className="font-bold text-slate-900 m-0">123 Tech Avenue, Software Park, Sector 5, Lahore, Pakistan</p>
                  <p className="text-xs font-medium italic text-slate-500 m-0 mt-2">Office visits are strictly by appointment only.</p>
                </div>
                <div className="space-y-2 m-0">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest m-0 mb-2">Connect with Us</p>
                  <p className="font-bold text-slate-900 m-0">contact@neotechsolution.com</p>
                  <p className="font-bold text-slate-900 m-0">support@neotechsolution.com</p>
                  <p className="font-bold text-slate-900 m-0 mt-2">+92 300 0000000</p>
                  <p className="font-bold text-slate-900 m-0">+92 300 0000001</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Privacy;
