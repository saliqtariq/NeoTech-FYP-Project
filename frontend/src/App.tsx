import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DataAnalysisPage from "./components/DataPage";
import MernStackPage from "./components/MernPage";
import CyberSecurityPage from "./components/CyberPage";
import AiPage from "./components/AiPage";
import AIChatbotIntegration from "./components/AiChatbot";
import DataAnalysisServices from "./components/DataServices";
import WebDevelopmentServices from "./components/WebServices";
import CyberSecurityServices from "./components/CyberServices";
import UIUXServices from "./components/UX";
import PayInstallment from "./pages/PayInstallment";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./pages/Chatbot";
import LMS from "./pages/Lms";
import CourseOutlinePage from "./course-outline/[courseId]/CourseOutlinePage";
import BatchesPage from "./batches [courseId]/BatchesPage";
import RecordedLecturesPage from "./pages/recorded-lectures";
import WordPressDevelopment from "./components/Wordpress";
import DevOpsEngineeringPage from "./components/DevOps";
import UIUXDesignCoursePage from "./components/UX";
import TopNavbar from "./components/TopNavbar";
import UiUxDesigningPage from "./components/UXCourse";
import SoftwareServicesPage from "./components/SoftwareServices";
import SEOServicesPage from "./components/SEOServices";
import DigitalMarketingServicesPage from "./components/DigitalMarketingServices";
import SocialMediaMarketingServicesPage from "./components/SocialMediaMarketingServices";
import Enroll from "./pages/Enroll";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import AdminStudio from "./pages/AdminStudio";

import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
} from "@clerk/clerk-react";
import { isClerkEnabled } from "@/withClerkProvider";
import { HelmetProvider } from "react-helmet-async";
import FreeDemoPage from "./components/Freedemo";
import CertificatesPage from "./pages/Certificates";
import RefundPolicy from "./pages/Refund";
import DevToolsBlocker from "./components/DevToolsBlocker";
import EnrollGuard from "./guards/EnrollGuard";
import ThankYou from "./pages/ThankYou";
import DemoThankYou from "./pages/DemoThankYou";
import PaymentSuccess from "./pages/PaymentSuccess";
import BlogPage from "./pages/Blog";
import BlogPostPage from "./pages/BlogDetails";
import WhyNeotechSolution from "./pages/WhyNeotechSolution";

import Sitemap from "./pages/Sitemap";
import Portfolio from "./pages/Portfolio";
import SpokenEnglishPage from "@/components/SpokenEnglishPage";


import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HelmetProvider>
          {/* <DevToolsBlocker /> */}
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              {/* Auth Routes - No standard Layout */}
              {isClerkEnabled && (
                <>
                  <Route
                    path="/sign-in/*"
                    element={
                      <div
                        style={{
                          minHeight: "100vh",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#f8fafc",
                        }}
                      >
                        <SignIn
                          routing="path"
                          path="/sign-in"
                          signUpUrl="/sign-up"
                          appearance={{
                            layout: { logoPlacement: "none" },
                            elements: {
                              logoBox: { display: "none" },
                              card: {
                                boxShadow: "0 4px 32px 0 rgba(37, 99, 235, 0.15)",
                                borderRadius: "1.5rem",
                                border: "1px solid #e5e7eb",
                                background: "#fff",
                              },
                              headerTitle: {
                                color: "#2563eb",
                                fontWeight: 700,
                                fontSize: "1.5rem",
                              },
                              headerSubtitle: { color: "#64748b" },
                              socialButtons: {
                                display: "flex",
                                width: "100%",
                              },
                              socialButtonsBlockButton: { 
                                borderRadius: "0.5rem",
                                width: "100%",
                                justifyContent: "center",
                              },
                              formFieldInput: {
                                borderRadius: "0.5rem",
                                borderColor: "#bfdbfe",
                              },
                              formButtonPrimary: {
                                background: "linear-gradient(to right,#2563eb,#60a5fa)",
                                borderRadius: "0.5rem",
                              },
                              footerAction: { color: "#2563eb" },
                            },
                            variables: {
                              colorPrimary: "#2563eb",
                              colorText: "#0f172a",
                              colorBackground: "#fff",
                              colorInputBackground: "#eff6ff",
                              colorInputText: "#0f172a",
                            },
                          }}
                        />
                      </div>
                    }
                  />
                  <Route
                    path="/sign-up/*"
                    element={
                      <div
                        style={{
                          minHeight: "100vh",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#f8fafc",
                        }}
                      >
                        <SignUp
                          routing="path"
                          path="/sign-up"
                          signInUrl="/sign-in"
                          appearance={{
                            layout: { logoPlacement: "none" },
                            elements: {
                              logoBox: { display: "none" },
                              card: {
                                boxShadow: "0 4px 32px 0 rgba(37, 99, 235, 0.15)",
                                borderRadius: "1.5rem",
                                border: "1px solid #e5e7eb",
                                background: "#fff",
                              },
                              headerTitle: {
                                color: "#2563eb",
                                fontWeight: 700,
                                fontSize: "1.5rem",
                              },
                              headerSubtitle: { color: "#64748b" },
                              socialButtons: {
                                display: "flex",
                                width: "100%",
                              },
                              socialButtonsBlockButton: { 
                                borderRadius: "0.5rem",
                                width: "100%",
                                justifyContent: "center",
                              },
                              formFieldInput: {
                                borderRadius: "0.5rem",
                                borderColor: "#bfdbfe",
                              },
                              formButtonPrimary: {
                                background: "linear-gradient(to right,#2563eb,#60a5fa)",
                                borderRadius: "0.5rem",
                              },
                              footerAction: { color: "#2563eb" },
                            },
                            variables: {
                              colorPrimary: "#2563eb",
                              colorText: "#0f172a",
                              colorBackground: "#fff",
                              colorInputBackground: "#eff6ff",
                              colorInputText: "#0f172a",
                            },
                          }}
                        />
                      </div>
                    }
                  />
                </>
              )}

              {/* Standard Routes with Layout */}
              <Route path="/admin/*" element={<AdminStudio />} />
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/certificates" element={<CertificatesPage />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/FreeDemo" element={<FreeDemoPage />} />

                <Route path="why-neotech-solutions" element={<WhyNeotechSolution />} />
                <Route path="/blogs" element={<BlogPage />} />
                <Route path="/blogs/:slug" element={<BlogPostPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/data-analyst-professional" element={<DataAnalysisPage />} />
                <Route path="/mern-full-stack-development" element={<MernStackPage />} />
                <Route path="/cybersecurity-ethical-hacking" element={<CyberSecurityPage />} />
                <Route path="/full-stack-ai-ml-dl" element={<AiPage />} />
                <Route path="/spoken-english-mastery" element={<SpokenEnglishPage />} />
                <Route path="/devops-engineering" element={<DevOpsEngineeringPage />} />
                <Route path="/UIUXDesignServices" element={<UIUXDesignCoursePage />} />
                <Route path="/ui-ux-design" element={<UiUxDesigningPage />} />
                <Route path="/WordPressDevelopment" element={<WordPressDevelopment />} />
                <Route path="/AIChatbotIntegration" element={<AIChatbotIntegration />} />
                <Route path="/DataAnalysisServices" element={<DataAnalysisServices />} />
                <Route path="/WebDevelopmentServices" element={<WebDevelopmentServices />} />
                <Route path="/CyberSecurityServices" element={<CyberSecurityServices />} />
                <Route path="/UIUXServices" element={<UIUXServices />} />
                <Route path="/SoftwareDevelopment" element={<SoftwareServicesPage />} />
                <Route path="/SEOServices" element={<SEOServicesPage />} />
                <Route path="/DigitalMarketing" element={<DigitalMarketingServicesPage />} />
                <Route path="/SocialMediaMarketing" element={<SocialMediaMarketingServicesPage />} />
                <Route path="/Thank-you" element={<ThankYou />} />
                <Route path="/demo-success" element={<DemoThankYou />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
                <Route path="/payment-failed" element={<ThankYou />} />
                <Route path="/pay-installment/:id" element={<PayInstallment />} />

                <Route path="/lms" element={<LMS />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/course-outline/:courseId" element={<CourseOutlinePage />} />
                <Route path="/batches/:courseId" element={<BatchesPage />} />
                <Route path="/recorded-lectures/:batchId" element={<RecordedLecturesPage />} />
                <Route path="/enrollnow" element={<EnrollGuard />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
