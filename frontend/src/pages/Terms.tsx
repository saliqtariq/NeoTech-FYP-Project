"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  const pageTitle = "Terms of Service | Neotech Solutions";
  const pageDescription = "Read the terms and conditions governing your use of Neotech Solutions' website, live courses via Zoom, and software development services.";
  const pageUrl = "https://www.neotechsolution.com/terms";
  const seoImageUrl = "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg";

  const termsPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": pageUrl,
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
        "postalCode": "05477",
        "addressCountry": "PK"
      }
    }
  };

  return (
    <div className="min-h-screen font-poppins">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={seoImageUrl} />
        <script type="application/ld+json">{JSON.stringify(termsPageSchema)}</script>
      </Helmet>



      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-800 tracking-widest uppercase">Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Service</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            By accessing our platform, you agree to comply with the professional standards and guidelines of <strong>Neotech Solutions (Pvt. Ltd.)</strong>.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8 prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-600 prose-a:text-blue-900 prose-li:text-slate-600">

            {/* Service Delivery */}
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4 mt-0 border-b border-slate-200 pb-4">Service Delivery</h2>
              <p className="font-medium leading-relaxed">
                Our courses are delivered live via <strong>Zoom or Google Meet</strong>. Students are responsible for ensuring they have a stable internet connection to attend sessions. Consultancy services are delivered according to the timelines agreed upon in the project-specific contract.
              </p>
            </div>

            {/* Payment & Billing */}
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4 mt-0 border-b border-slate-200 pb-4 pl-4">Payment & Billing</h2>
              <ul className="list-disc list-inside space-y-3 font-medium pl-4">
                <li>Payments are handled securely through authorized financial partners.</li>
                <li>We support credit/debit cards and bank transfers for both local and international clients.</li>
                <li>Prices are subject to change, but students already enrolled in a cycle will not be affected by price hikes for that duration.</li>
                <li>Official receipts are issued via email once the transaction is verified.</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4 mt-0 border-b border-slate-200 pb-4">Intellectual Property</h2>
              <p className="font-medium leading-relaxed">
                All course materials, recordings, code snippets provided during training, and proprietary software logic remain the intellectual property of <strong>Neotech Solutions (Pvt. Ltd.)</strong>. Unauthorized recording or distribution of live sessions is strictly prohibited and may result in legal action.
              </p>
            </div>

            {/* Privacy & Security */}
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4 mt-0 border-b border-slate-200 pb-4">Security & Compliance</h2>
              <p className="font-medium leading-relaxed">
                We maintain strict data security. No payment data is stored on our servers. All transactions are encrypted via SSL and follow PCI-DSS standards. For details, view our <a href="/privacy" className="font-bold underline hover:text-blue-800 transition-colors">Privacy Policy</a>.
              </p>
            </div>

            {/* Governing Law */}
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4 mt-0 border-b border-slate-200 pb-4">Governing Law</h2>
              <p className="font-medium leading-relaxed">
                These terms are governed by the laws of the <strong>Islamic Republic of Pakistan</strong>. Any disputes arising from the use of our services shall be subject to the exclusive jurisdiction of the courts in <strong>Lahore, Pakistan</strong>.
              </p>
            </div>

            {/* Contact Details Card */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-[2rem] p-8 md:p-10 mt-12 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mt-0 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span> Official Contact & Address
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 m-0">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest m-0">Email Support</p>
                  <p className="font-bold text-slate-900 m-0">contact@neotechsolution.com</p>
                  <p className="font-bold text-slate-900 m-0">support@neotechsolution.com</p>
                </div>
                <div className="space-y-2 m-0">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest m-0">Call/WhatsApp</p>
                  <p className="font-bold text-slate-900 m-0">+92 300 0000000</p>
                  <p className="font-bold text-slate-900 m-0">+92 300 0000001</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-blue-200">
                <p className="text-xs font-bold uppercase text-slate-500 tracking-widest m-0 mb-2">Registered Office</p>
                <p className="font-bold text-slate-900 m-0">123 Tech Avenue, Software Park, Sector 5, Lahore, Pakistan</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Terms;
