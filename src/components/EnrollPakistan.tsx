"use client";

import React, { useState, useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Clock, Mail, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, ShoppingCart } from "lucide-react";
import { useCourses } from "@/hooks/useCourses";
import { writeClient } from "@/lib/sanity";

interface Course {
  _id: string;
  title: string;
  pricePKR?: number;
  priceAED?: number;
  priceUSD?: number;
  duration?: string;
  isRamadan?: boolean;
  slug?: string;
}

const EnrollPakistan = () => {
  const { toast } = useToast();
  const { courses: fetchedCourses } = useCourses();
  const [courses, setCourses] = useState<Course[]>([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "Pakistan",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [paymentFrequency, setPaymentFrequency] = useState<'monthly' | 'full'>('monthly');
  const navigate = useNavigate();
  const { addToCart, updatePaymentPlan, locationLoading, formatPrice, isPakistan, isUAE } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryCode, setCountryCode] = useState("+92");
  const [phoneError, setPhoneError] = useState("");

  // Sync courses from useCourses hook (Sanity + static)
  useEffect(() => {
    if (fetchedCourses && fetchedCourses.length > 0) {
      let data = [...fetchedCourses] as any[];
      // Inject Ramadan Reset if not present
      if (!data.some(c => c.title.toLowerCase().includes("ramadan"))) {
        data.push({
          _id: "ramadan-reset-temp",
          title: "Ramadan Reset"
        });
      }
      setCourses(data);
    }
  }, [fetchedCourses]);

  const getPricingDetails = (selectedCourseTitle?: string) => {
    const courseObj = courses.find(c => c.title === selectedCourseTitle);

    if (selectedCourseTitle?.toLowerCase().includes("ramadan") || courseObj?.isRamadan) {
      const pkrPrice = courseObj?.pricePKR || 10;
      const usdPrice = courseObj?.priceUSD || 25;
      const displayStr = formatPrice(usdPrice, pkrPrice);

      return {
        name: "Ramadan Special",
        price: displayStr,
        total: `${displayStr} total`,
        duration: "30 Days",
        monthlyInstallment: `${displayStr} (One-time)`,
        features: [
          "Full 30-Day Journey",
          "Live Sessions Access",
          "Private Soul Journal",
          "Digital Ethics Workshop",
          "Lifetime Community Access"
        ]
      };
    }

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

  const handleProceedToPayment = async () => {
    const selectedCourse = formData.course;
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
      const courseObj = courses.find(c => c.title === selectedCourse);
      let amount = 0;

      if (selectedCourse.toLowerCase().includes("ramadan") || courseObj?.isRamadan) {
        const pkPrice = courseObj?.pricePKR || 10;
        const aePrice = courseObj?.priceAED || 25;
        const usdPrice = courseObj?.priceUSD || 25;

        if (isPakistan) amount = pkPrice;
        else if (isUAE) amount = aePrice / 3.67;
        else amount = usdPrice;
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

        if (isPakistan) amount = basePKR * multiplier;
        else if (isUAE) amount = (baseAED * multiplier) / 3.67;
        else amount = baseUSD * multiplier;
      }

      amount = parseFloat(amount.toFixed(2));

      // Mock wait and redirect
      await new Promise(resolve => setTimeout(resolve, 800));

      const data = {
        success: true,
        params: { status: "mocked" },
        formAction: "/demo-success"
      };

      if (data.success && data.params) {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = data.formAction;
        Object.keys(data.params).forEach((key) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = data.params[key];
          form.appendChild(input);
        });
        document.body.appendChild(form);
        form.submit();
      }
    } catch (error: any) {
      toast({
        title: "Payment Initiation Failed",
        description: error.message || "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      // Submit to Sanity database
      await writeClient.create({
        _type: 'enrollment',
        name: formData.firstName + (formData.lastName ? ' ' + formData.lastName : ''),
        email: formData.email,
        phone: `${countryCode} ${formData.phone}`,
        course: formData.course,
        paymentFrequency: paymentFrequency,
        status: 'Pending'
      });
      const response = { ok: true };

      if (response.ok) {
        toast({
          title: "Request Sent!",
          description:
            "Thank you for enrolling. Our team will contact you via WhatsApp shortly.",
          duration: 3000,
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          course: "",
          country: "Pakistan",
          message: "",
        });

        // ✅ Redirect after toast
        setTimeout(() => {
          navigate("/demo-success");
        }, 1000);
      } else {
        toast({
          title: "Submission Failed",
          description: "Please try again later or contact us via WhatsApp.",
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Try again later.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (locationLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Loading location details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-b from-gray-50 via-white to-gray-100">


      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 via-white to-primary/10 py-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Unlock Your Potential with{" "}
            <span className="text-primary">Expert-Led Courses</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the enrollment form below and our team will reach out to
            guide you through the next steps.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Enrollment Form */}
          <Card className="shadow-md hover:shadow-xl transition rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Start Your Enrollment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Course Dropdown */}
                <div>
                  <label className="text-gray-700 font-medium block mb-2">
                    Choose Your Course
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary"
                  >
                    <option value="">-- Select a Course --</option>
                    {courses.map((c) => (
                      <option key={c._id} value={c.title}>
                        {c.title.toLowerCase().includes("ramadan") ? `🌙 ${c.title}` : c.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* User Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div className="space-y-1.5">
                  <label className="text-gray-700 font-medium block mb-2">WhatsApp Number</label>
                  <div className="flex gap-2">
                    <Select value={countryCode} onValueChange={setCountryCode}>
                      <SelectTrigger className="w-[110px] bg-white border-gray-300 rounded-xl h-12 md:text-base font-medium focus:ring-primary">
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
                        handleChange(e);
                        if (phoneError) setPhoneError("");
                      }}
                      required
                      className={`flex-1 border-gray-300 rounded-xl h-12 md:text-base font-medium focus:bg-white transition-colors ${phoneError ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'}`}
                    />
                  </div>
                  {phoneError && <p className="text-xs text-red-500 font-medium pl-1 mt-1">{phoneError}</p>}
                </div>
                <Textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your goals (optional)"
                  value={formData.message}
                  onChange={handleChange}
                />
                {formData.course && (
                  <div className="mb-6 bg-white shadow-lg rounded-2xl p-6 border-t-4 border-primary text-center">
                    {(() => {
                      const details = getPricingDetails(formData.course);
                      return (
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-gray-900">{details.name}</h3>

                          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <div className="bg-primary text-white px-6 py-2 rounded-lg text-lg font-bold shadow min-w-[120px]">
                              {details.price}
                              <span className="text-xs font-normal block">
                                {paymentFrequency === 'full' ? 'Full Course Fee' : 'Billed monthly'}
                              </span>
                            </div>
                            <div className="text-gray-600 text-xs text-left">
                              <span>Duration:</span> <strong>{details.duration}</strong>
                              <br />
                              <span>Total Commitment:</span> <strong>{details.total}</strong>
                            </div>
                          </div>

                          {!formData.course.toLowerCase().includes("ramadan") && (
                            <div className="inline-flex p-1 bg-gray-100 rounded-lg">
                              <button
                                type="button"
                                onClick={() => setPaymentFrequency('monthly')}
                                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${paymentFrequency === 'monthly' ? 'bg-white text-primary shadow' : 'text-gray-500 hover:text-primary'}`}
                              >
                                Monthly
                              </button>
                              <button
                                type="button"
                                onClick={() => setPaymentFrequency('full')}
                                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${paymentFrequency === 'full' ? 'bg-white text-primary shadow' : 'text-gray-500 hover:text-primary'}`}
                              >
                                Full Fee
                              </button>
                            </div>
                          )}

                          <div className="text-left mt-4 space-y-2">
                            {details.features.slice(0, 3).map((f, i) => (
                              <div key={i} className="flex items-start space-x-2 text-sm">
                                <Check className="h-4 w-4 text-blue-900 mt-0.5 shrink-0" />
                                <span className="text-gray-700">{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    })()}
                  </div>
                )}

                <div className="flex flex-col gap-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primary hover:bg-primary/90 rounded-xl py-6 text-md font-semibold ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                      }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request Free Demo"}
                  </Button>

                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">Or to enroll directly</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                  </div>

                  <Button
                    type="button"
                    onClick={() => {
                      if (formData.course) {
                        const courseObj = courses.find(c => c.title === formData.course);
                        const identifier = courseObj?.slug || formData.course;
                        addToCart(identifier);
                        if (paymentFrequency === 'full') {
                          updatePaymentPlan(identifier, 'pay_full');
                        }
                        navigate("/cart");
                      } else {
                        toast({
                          title: "Select a Course",
                          description: "Please select a course before adding to cart.",
                          variant: "destructive",
                        });
                      }
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl py-6 text-md font-semibold flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart (Enroll)
                  </Button>

                  <Button
                    type="button"
                    onClick={handleProceedToPayment}
                    className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl py-6 text-md font-semibold"
                  >
                    Proceed to Payment (Enroll)
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Why Choose Us */}
          <Card className="bg-primary text-white shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Why Choose Us?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-4">
                {[
                  "Free Demo Class for Every Course",
                  "Hands-on Practical Training",
                  "Expert Mentors with 5+ Years of Industry Experience",
                  "Job Placement & Career Counseling Assistance",
                  "Lifetime Alumni Community Access",
                  "Globally Recognized Certifications",
                  "Personalized Mentorship & 1-on-1 Guidance",
                  "Affordable Fee Structure with Easy Installments",
                  "Access to Premium Learning Resources & Tools",
                  "Regular Assessments and Project-Based Learning",
                  "Internship Opportunities with Partner Companies",
                  "Continuous Support Even After Course Completion",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-blue-900 mt-1 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => window.open("https://wa.link/u409zt", "_blank")}
                className="w-full bg-white text-primary hover:bg-gray-100 rounded-xl py-6 text-lg font-semibold"
              >
                Chat on WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4">
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-primary">
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <p className="text-gray-700">
                  +92 300 0000000 / +92 300 0000001
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <p className="text-gray-700">contact@neotechsolution.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="h-6 w-6 text-primary" />
                <p className="text-gray-700">
                  Mon–Fri: 9 AM – 7 PM | Sat: 10 AM – 4 PM
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-primary text-white rounded-2xl">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Need Help?</h3>
              <p className="mb-6">
                Talk to our experts today and find the right course for you.
              </p>
              <Button
                onClick={() => window.open("https://wa.link/lkcpco", "_blank")}
                className="w-full bg-white text-primary hover:bg-gray-100 rounded-xl py-6 text-lg font-semibold"
              >
                Schedule Free Call
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>


    </div>
  );
};

export default EnrollPakistan;
