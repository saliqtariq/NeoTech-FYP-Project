"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Clock, Mail, Check, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";

import { useCourses } from "@/hooks/useCourses";
import { writeClient } from "@/lib/sanity";

// Detailed Course interface, matching the structure from Courses.jsx for consistent schema generation
interface Course {
  _id: string;
  title: string;
  description: string;
  duration: string;
  students: string;
  rating: string;
  level: string;
  modules: number;
  projects: number;
  image: string;
  thumbnail?: string;
  slug: string;
  skills: string[];
  pricePKR?: number;
  priceAED?: number;
  priceUSD?: number;
  isRamadan?: boolean;
}

const Enroll = () => {
  const { toast } = useToast();
  const { addToCart, updatePaymentPlan, locationLoading, formatPrice, isPakistan, isUAE, currency, exchangeRate } = useCart();
  const { courses: fetchedCourses } = useCourses();
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [paymentFrequency, setPaymentFrequency] = useState<'monthly' | 'full'>('monthly');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryCode, setCountryCode] = useState("+92");
  const [phoneError, setPhoneError] = useState("");

  // Sync courses from useCourses hook (which fetches from Sanity + static)
  useEffect(() => {
    if (fetchedCourses && fetchedCourses.length > 0) {
      setCourses(fetchedCourses);
    }
  }, [fetchedCourses]);

  const getCourseImage = (imageOrName: string) => {
    if (!imageOrName) return "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80?height=320&width=500&text=Course+Image";

    // 1. Check if it's already a full URL or local path
    if (imageOrName.startsWith("http") || imageOrName.startsWith("https") || imageOrName.startsWith("/") || imageOrName.startsWith("data:")) {
      return imageOrName;
    }

    // 2. Check if it's an Unsplash photo ID
    if (imageOrName.startsWith("photo-")) {
      return `https://images.unsplash.com/${imageOrName}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
    }

    // 3. Try to find the image in the fetched courses list if it was a name
    const foundCourse = courses.find(c => c.title === imageOrName);
    const courseImage = foundCourse?.thumbnail || foundCourse?.image;
    if (courseImage && courseImage !== imageOrName) {
      return getCourseImage(courseImage);
    }

    // 4. Legacy hardcoded mappings (for stability - prioritized before global fallback)
    const nameLower = imageOrName.toLowerCase();
    if (nameLower.includes("mern")) return "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80";
    if (nameLower.includes("ai") || nameLower.includes("ml")) return "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80";
    if (nameLower.includes("data") || nameLower.includes("analyst")) return "https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&w=800&q=80";
    if (nameLower.includes("ethical") || nameLower.includes("cyber") || nameLower.includes("hacker")) return "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80";

    // 5. Fallback for international users or missing data
    if (!isPakistan) {
      return "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80?height=320&width=500&text=Course+Image";
    }

    return "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80?height=320&width=500&text=Course+Image";
  };



  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCourseChange = (value: string) => {
    setSelectedCourse(value);
    setFormData((prev) => ({
      ...prev,
      course: value,
    }));
  };

  const getPricingDetails = (selectedCourseTitle?: string) => {
    const courseObj = courses.find(c => c.title === selectedCourseTitle);

    const parseDuration = (d?: string) => {
      if (!d) return 3;
      const match = d.match(/(\d+)/);
      return match ? parseInt(match[1]) : 3;
    };

    const durationInMonths = parseDuration(courseObj?.duration);
    const isFull = paymentFrequency === 'full';
    const multiplier = isFull ? durationInMonths : 1;

    const baseUSD = courseObj?.priceUSD || 99;
    const basePKR = courseObj?.pricePKR || 1999;
    const baseAED = courseObj?.priceAED || 299;

    const pricingObj = { priceUSD: baseUSD * multiplier, pricePKR: basePKR * multiplier, priceAED: baseAED * multiplier };

    return {
      name: "Standard Enrollment",
      price: isFull ? formatPrice(pricingObj) : `${formatPrice(pricingObj)}/mo`,
      total: `${formatPrice({ priceUSD: baseUSD * durationInMonths, pricePKR: basePKR * durationInMonths, priceAED: baseAED * durationInMonths })} total`,
      duration: `${durationInMonths} months`,
      monthlyInstallment: isFull ? "Full Course Fee" : `${formatPrice(pricingObj)} per month`,
      features: [
        "🎉 Free Demo Class Included",
        "Access to all live sessions",
        "Weekly assignments & labs",
        "Recorded lectures on LMS",
        "Q&A with instructors",
        "Dedicated customer support",
        "Career guidance sessions",
      ]
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return; // ⛔ Prevent multiple clicks
    setIsSubmitting(true);

    try {
      // Submit to Sanity database
      await writeClient.create({
        _type: 'enrollment',
        name: formData.firstName + (formData.lastName ? ' ' + formData.lastName : ''),
        email: formData.email,
        phone: `${countryCode} ${formData.phone}`,
        course: selectedCourse,
        paymentFrequency: paymentFrequency,
        status: 'Pending'
      });

      const response = { ok: true };

      if (response.ok) {
        toast({
          title: "Enrollment Request Sent!",
          description:
            "Thank you for your interest. We'll get back to you soon with course details.",
          duration: 5000,
        });

        // Reset form data after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        });
        setSelectedCourse("");

        // ✅ Redirect after success
        window.location.href = "/demo-success";
      } else {
        toast({
          title: "Submission Failed",
          description: "Please try again later or contact us via WhatsApp.",
          duration: 5000,
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description:
          error.message || "Something went wrong. Please try again later.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false); // 🔄 Re-enable after request
    }
  };

  const handleProceedToPayment = async () => {
    if (!selectedCourse) {
      toast({
        title: "Selection Required",
        description: "Please select a course before proceeding to payment.",
        duration: 3000,
      });
      return;
    }

    if (!formData.firstName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, email, and phone number to proceed.",
        variant: "destructive",
      });
      return;
    }

    // Phone validation (digits only, length 7-15)
    const phoneRegex = /^[0-9]{7,15}$/;
    const rawPhone = formData.phone.replace(/[\s-]/g, '');
    if (!phoneRegex.test(rawPhone)) {
      setPhoneError("Please enter a valid phone number (digits only, 7-15 characters)");
      return;
    }
    setPhoneError("");

    setIsSubmitting(true);

    try {
      // 1. Calculate price based on selected plan
      const courseObj = courses.find(c => c.title === selectedCourse);

      let amount = 0;
      if (selectedCourse.toLowerCase().includes("ramadan") || courseObj?.isRamadan) {
        const pkPrice = courseObj?.pricePKR || 10;
        const aePrice = courseObj?.priceAED || 25;
        const usdPrice = courseObj?.priceUSD || 25;

        if (isPakistan) amount = pkPrice;
        else if (isUAE) {
          // UAE Billed in USD (Native AED / 3.67)
          amount = aePrice / 3.67;
        } else {
          amount = usdPrice; // Global Billed in USD
        }
      } else {
        const basePKR = courseObj?.pricePKR || 1999;
        const baseAED = courseObj?.priceAED || 299;
        const baseUSD = courseObj?.priceUSD || 99;

        const isFull = paymentFrequency === 'full';
        const parseDuration = (d?: string) => {
          if (!d) return 3;
          const match = d.match(/(\d+)/);
          return match ? parseInt(match[1]) : 3;
        };
        const durationMonths = parseDuration(courseObj?.duration);
        const multiplier = isFull ? durationMonths : 1;

        if (isPakistan) {
          amount = basePKR * multiplier;
        } else if (isUAE) {
          // UAE Billed in AED
          amount = baseAED * multiplier;
        } else {
          // Global Billed in USD
          amount = baseUSD * multiplier;
        }
      }
      amount = parseFloat(amount.toFixed(2));

      // Determine currency based on location
      let currencyCode = 'usd';
      if (isPakistan) currencyCode = 'pkr';
      else if (isUAE) currencyCode = 'aed';

      // Submit to Sanity CRM first so it shows up in Dashboard
      await writeClient.create({
        _type: 'enrollment',
        name: formData.firstName + (formData.lastName ? ' ' + formData.lastName : ''),
        email: formData.email,
        phone: `${countryCode} ${formData.phone}`,
        course: selectedCourse,
        paymentFrequency: paymentFrequency,
        status: 'Pending Payment'
      });

      // Call our new Node.js backend to create a Stripe checkout session
      const response = await fetch('http://localhost:5000/api/payments/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          courseName: selectedCourse, 
          price: amount,
          courseId: courseObj?._id || 'unknown',
          currency: currencyCode
        })
      });
      
      const data = await response.json();
      
      if (response.ok && data.url) {
        toast({
          title: "Redirecting...",
          description: "Please wait while we redirect you to Stripe securely.",
        });
        window.location.href = data.url; 
      } else {
        throw new Error(data.message || "Failed to create Stripe payment session");
      }


    } catch (error: any) {
      console.error("Payment Error:", error);
      toast({
        title: "Payment Initiation Failed",
        description: error.message || "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  // Define SEO Metadata
  const pageTitle = "Enroll in Courses | Neotech Solutions";
  const pageDescription =
    "Ready to start your tech journey? Enroll in MERN Stack, Data Science, AI, Cybersecurity, Digital Marketing, or DevOps courses at Neotech Solutions. Fill out our simple enrollment form today!";
  const pageKeywords =
    "enroll in courses, Neotech Solutions enrollment, tech course registration, MERN stack enrollment, AI course signup, cybersecurity training application, digital marketing bootcamp, DevOps program enrollment, online education Pakistan";
  const pageUrl = "https://www.neotechsolution.com/enrollnow";

  // Schema Markup for the Enrollment Page (WebPage and ItemList of Courses)
  const enrollPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: courses.map((course: any, index: number) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@context": "https://schema.org", // Nested context for each Course
          "@type": "Course",
          name: course.title,
          description: course.description || "Course description not available",
          url: `https://www.neotechsolution.com/course-outline/${course.slug || "course"}`, // Using slug for SEO URL
          provider: {
            "@type": "Organization",
            name: "Neotech Solutions",
            url: "https://www.neotechsolution.com",
          },
          // Using local public paths for image in schema as well
          image: `https://www.neotechsolution.com/images/${course.slug || "default"
            }.jpg`, // Assuming images are named after slugs in public/images
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "Online", // Assuming online mode, adjust if mixed
            timeRequired: course.duration
              ? `P${course.duration.split(" ")[0]}M`
              : "P4M",
            instructor: {
              "@type": "Person",
              name: "Neotech Solutions Instructors", // Generic name, ideally specific instructor
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: course.rating || "4.5",
              reviewCount: course.students
                ? course.students.replace("+", "")
                : "100", // Remove '+' for numerical count
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: course.priceUSD || "99.00",
              url: `https://www.neotechsolution.com/batches/${course.slug || "course"
                }`, // Link to view batches for pricing
              availability: "https://schema.org/InStock", // Assuming courses are generally available
              validFrom: new Date().toISOString().split("T")[0], // Example: Today's date
            },
          },
          about: course.skills
            ? course.skills.join(", ")
            : "Programming, Development", // Skills as 'about'
          educationalCredentialAwarded: "Certificate of Completion", // Example
          learningResourceType: "Full Course, Practical Projects", // Example
          audience: course.level || "Beginner", // Level as audience
        },
      })),
    },
  };

  return (
    <div className="min-h-screen font-poppins" id="contact">

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-800 tracking-widest uppercase">Admissions Open</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Enroll in Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Courses</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Ready to start your tech journey? Choose your course and get started
            today!
          </p>
        </div>
      </section>

      {/* Enrollment Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Course Image Display / Pricing Details */}
            <div className="space-y-8">
              <Card className="hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 rounded-[2rem] border border-slate-100 overflow-hidden bg-white">
                <CardHeader className="bg-slate-50 border-b border-slate-100 px-8 py-6">
                  <CardTitle className="text-2xl font-extrabold text-slate-900 flex items-center gap-3 tracking-tight">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span> Selected Course
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  {selectedCourse ? (
                    (() => {
                      const details = getPricingDetails(selectedCourse);
                      return (
                        <div className="space-y-6">
                          <div className="relative h-56 rounded-2xl overflow-hidden shadow-md group">
                            <img
                              src={getCourseImage(selectedCourse)}
                              alt={selectedCourse}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                              <div>
                                <Badge className="mb-2 bg-primary/90 text-white">Selected Course</Badge>
                                <h3 className="text-white text-xl font-bold">{selectedCourse}</h3>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] rounded-[2rem] p-6 md:p-8 border border-slate-100 text-center mt-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
                            <h3 className="text-2xl font-extrabold text-slate-900">
                              {details.name}
                            </h3>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
                              <div className="bg-blue-50 text-blue-900 px-8 py-4 rounded-2xl text-2xl font-black shadow-sm min-w-[160px] border border-blue-100">
                                {details.price || "..."}
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mt-1">
                                  {paymentFrequency === 'full' ? 'Full Course Fee' : 'Billed monthly'}
                                </span>
                              </div>
                              <div className="text-slate-600 text-sm text-left bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <span className="font-medium">Duration:</span>{" "}
                                <strong className="text-slate-900">{details.duration}</strong>
                                <br />
                                <span className="font-medium">Total Commitment:</span>{" "}
                                <strong className="text-slate-900">{details.total}</strong>
                              </div>
                            </div>

                            {!selectedCourse?.toLowerCase().includes("ramadan") && (
                              <div className="mt-8 inline-flex p-1.5 bg-slate-100 rounded-xl">
                                <button
                                  type="button"
                                  onClick={() => setPaymentFrequency('monthly')}
                                  className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${paymentFrequency === 'monthly' ? 'bg-white text-blue-900 shadow-sm' : 'text-slate-500 hover:text-blue-900'}`}
                                >
                                  Monthly
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setPaymentFrequency('full')}
                                  className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${paymentFrequency === 'full' ? 'bg-white text-blue-900 shadow-sm' : 'text-slate-500 hover:text-blue-900'}`}
                                >
                                  Full Fee
                                </button>
                              </div>
                            )}

                            <div className="text-left mt-8 space-y-4">
                              {details.features.map((feature, index) => (
                                <div
                                  key={index}
                                  className="flex items-start space-x-3 bg-slate-50 p-3 rounded-lg"
                                >
                                  <Check className="h-5 w-5 text-blue-900 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-700 font-medium">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-100">
                              <p className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">First Installment Detail</p>
                              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all cursor-default">
                                Amount at Checkout: {details.monthlyInstallment || "..."}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })()
                  ) : (
                    <div className="h-[400px] rounded-[2rem] bg-slate-50 border-2 border-dashed border-slate-200 flex items-center justify-center transition-all duration-300 hover:bg-slate-100">
                      <div className="text-center text-slate-400">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                          <ShoppingCart className="w-8 h-8 text-slate-300" />
                        </div>
                        <p className="font-bold text-slate-500">Select a course to view its pricing details</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {selectedCourse && (
                <Card className="bg-blue-600 text-white border-none rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(37,99,235,0.4)] relative overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                  <CardContent className="p-8 relative z-10">
                    <h3 className="text-2xl font-extrabold mb-6 tracking-tight">
                      Why Choose This Course?
                    </h3>
                    <ul className="space-y-3 text-blue-50 font-medium">
                      <li className="flex gap-2"><Check className="h-5 w-5 text-blue-300 shrink-0" /> Industry-relevant curriculum</li>
                      <li className="flex gap-2"><Check className="h-5 w-5 text-blue-300 shrink-0" /> Hands-on practical projects</li>
                      <li className="flex gap-2"><Check className="h-5 w-5 text-blue-300 shrink-0" /> Expert instructors</li>
                      <li className="flex gap-2"><Check className="h-5 w-5 text-blue-300 shrink-0" /> Job placement assistance</li>
                      <li className="flex gap-2"><Check className="h-5 w-5 text-blue-300 shrink-0" /> Lifetime community access</li>
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Enrollment Form */}
            <Card className="hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 rounded-[2rem] border border-slate-100 bg-white h-fit">
              <CardHeader className="bg-slate-50 border-b border-slate-100 px-8 py-6 rounded-t-[2rem]">
                <CardTitle className="text-2xl font-extrabold text-slate-900 flex items-center gap-3 tracking-tight">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span> Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Target Discipline</label>
                    <Select onValueChange={handleCourseChange} required>
                      <SelectTrigger className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 md:text-base font-medium focus:ring-blue-600 focus:ring-2">
                        <SelectValue placeholder="Select a Course" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-slate-200 shadow-xl">
                        {courses.map((course) => (
                          <SelectItem key={course._id} value={course.title} className="md:text-base font-medium py-3 cursor-pointer">
                            {course.title.toLowerCase().includes("ramadan") ? `🌙 ${course.title}` : course.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">First Name</label>
                      <Input
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-50 border-slate-200 rounded-xl h-12 md:text-base font-medium focus:ring-blue-600 focus:bg-white transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Last Name</label>
                      <Input
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-50 border-slate-200 rounded-xl h-12 md:text-base font-medium focus:ring-blue-600 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Email Address</label>
                    <Input
                      name="email"
                      placeholder="student@example.com"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-50 border-slate-200 rounded-xl h-12 md:text-base font-medium focus:ring-blue-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">WhatsApp Number</label>
                    <div className="flex gap-2">
                      <Select value={countryCode} onValueChange={setCountryCode}>
                        <SelectTrigger className="w-[110px] bg-slate-50 border-slate-200 rounded-xl h-12 md:text-base font-medium focus:ring-blue-600 focus:bg-white">
                          <SelectValue placeholder="Code" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-slate-200 shadow-xl">
                          <SelectItem value="+92">🇵🇰 +92</SelectItem>
                          <SelectItem value="+971">🇦🇪 +971</SelectItem>
                          <SelectItem value="+1">🇺🇸 +1</SelectItem>
                          <SelectItem value="+44">🇬🇧 +44</SelectItem>
                          <SelectItem value="+61">🇦🇺 +61</SelectItem>
                          <SelectItem value="+91">🇮🇳 +91</SelectItem>
                          <SelectItem value="+966">🇸🇦 +966</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        name="phone"
                        placeholder="300 1234567"
                        value={formData.phone}
                        onChange={(e) => {
                          handleInputChange(e);
                          if (phoneError) setPhoneError("");
                        }}
                        required
                        className={`flex-1 bg-slate-50 border-slate-200 rounded-xl h-12 md:text-base font-medium focus:bg-white transition-colors ${phoneError ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-600'}`}
                      />
                    </div>
                    {phoneError && <p className="text-xs text-red-500 font-medium pl-1 mt-1">{phoneError}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Message (Optional)</label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your goals and experience"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-slate-50 border-slate-200 rounded-xl md:text-base font-medium focus:ring-blue-600 focus:bg-white transition-colors resize-none p-4"
                    />
                  </div>

                  <div className="space-y-3 pt-6">
                    <Button
                      type="button"
                      onClick={handleProceedToPayment}
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 hover:shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] text-white font-bold py-7 md:text-base rounded-xl transition-all"
                    >
                      {isSubmitting ? "Processing Request..." : "Proceed to Payment (Enroll)"}
                    </Button>
                    <p className="text-center text-xs font-medium text-slate-400 mt-4">
                      Securely processed via GoPayFast. Your details are encrypted.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 bg-slate-50 relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <Card className="shadow-none border border-slate-200 bg-white rounded-[2rem] overflow-hidden">
              <CardHeader className="bg-slate-50 border-b border-slate-100 px-8 py-6">
                <CardTitle className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="flex items-start space-x-5">
                  <div className="bg-blue-50 p-4 rounded-2xl shrink-0">
                    <Phone className="h-6 w-6 text-blue-900" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Phone & WhatsApp</h4>
                    <p className="text-slate-600 font-medium">
                      <a href="tel:+923000000000" className="hover:text-blue-900 transition-colors inline-block pb-1">+92 300 0000000</a>
                      <br />
                      <a href="tel:+923000000001" className="hover:text-blue-900 transition-colors inline-block">+92 300 0000001</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="bg-blue-50 p-4 rounded-2xl shrink-0">
                    <Mail className="h-6 w-6 text-blue-900" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Email Connect</h4>
                    <p className="text-slate-600 font-medium">
                      <a href="mailto:contact@neotechsolution.com" className="hover:text-blue-900 transition-colors inline-block pb-1">contact@neotechsolution.com</a>
                      <br />
                      <a href="mailto:support@neotechsolution.com" className="hover:text-blue-900 transition-colors inline-block">support@neotechsolution.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="bg-blue-50 p-4 rounded-2xl shrink-0">
                    <Clock className="h-6 w-6 text-blue-900" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Available Hours</h4>
                    <p className="text-slate-600 font-medium">
                      Monday - Friday: 9:00 AM - 7:00 PM
                      <br /> Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-slate-900 text-white rounded-[2rem] border-none shadow-2xl relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
              <CardContent className="p-10 md:p-14 text-center relative z-10">
                <h3 className="text-3xl font-extrabold mb-4 tracking-tight">
                  Need More Guidance?
                </h3>
                <p className="mb-10 text-slate-300 font-medium text-lg max-w-sm mx-auto">
                  Have questions about our course structures or schedules? Schedule a free consultation call.
                </p>
                <Button
                  onClick={() => window.open("https://wa.link/lkcpco", "_blank")}
                  variant="outline"
                  className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white hover:text-slate-900 font-bold py-6 px-10 rounded-full text-lg transition-all"
                >
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Enroll;
