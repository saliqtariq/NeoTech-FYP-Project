"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const RefundPolicy = () => {
  const pageTitle = "Refund Policy | Neotech Solutions";
  const pageDescription = "Read the transparent refund and cancellation policy of Neotech Solutions (Pvt. Ltd.) regarding our tech courses and IT consultancy services.";
  const pageUrl = "https://www.neotechsolution.com/refund";

  return (
    <div className="min-h-screen font-poppins">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
      </Helmet>



      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-800 tracking-widest uppercase">Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Refund <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Policy</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            At <strong>Neotech Solutions (Pvt. Ltd.)</strong>, we value your trust. We aim to provide a fair and transparent process for all our students and consultancy clients.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8 prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-600 prose-a:text-blue-900 prose-li:text-slate-600">

            {/* Refund Eligibility */}
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4 mt-0 border-b border-slate-200 pb-4 pl-4">Refund Eligibility</h2>
              <ul className="list-disc list-inside space-y-3 font-medium pl-4">
                <li>
                  Customers may request a full refund within <strong>3 days</strong> of purchase if they are not satisfied with the teaching style or initial service delivery.
                </li>
                <li>
                  Refunds are not applicable if significant portions of the course content have been consumed or if project milestones in software services are completed.
                </li>
                <li>
                  For live Zoom/Google Meet sessions, refund requests must be submitted at least 24 hours before the second scheduled session.
                </li>
              </ul>
            </div>

            {/* Processing Times */}
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4 mt-0 border-b border-slate-200 pb-4">Processing Timelines</h2>
              <p className="font-medium leading-relaxed mb-4">Once approved, refunds are processed via the original payment method:</p>
              <ul className="list-disc list-inside space-y-3 font-medium">
                <li><strong>Credit/Debit Card:</strong> 1–3 business days.</li>
                <li><strong>Bank Transfer:</strong> 5–7 business days.</li>
                <li><strong>Digital Wallets:</strong> Timelines vary by provider.</li>
              </ul>
            </div>

            {/* Request Method & Office Contact */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-[2rem] p-8 md:p-10 mt-12 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span> How to Request a Refund
              </h3>
              <p className="text-slate-600 font-medium mb-8">
                To initiate a refund, please send your order details and reason for the request to our support team:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 m-0">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest m-0">Email Support</p>
                  <p className="font-bold text-slate-900 m-0">contact@neotechsolution.com</p>
                  <p className="font-bold text-slate-900 m-0">support@neotechsolution.com</p>
                </div>
                <div className="space-y-2 m-0">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest m-0">Call/WhatsApp</p>
                  <p className="font-bold text-slate-900 m-0">+92 335 8746804</p>
                  <p className="font-bold text-slate-900 m-0">+92 335 8746804</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-200">
                <p className="text-xs font-bold uppercase text-slate-500 tracking-widest m-0 mb-2">Registered Office</p>
                <p className="font-bold text-slate-900 m-0">
                  123 Tech Avenue, Software Park, Sector 5, Lahore, Pakistan
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default RefundPolicy;
