"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe, ShoppingCart } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { isClerkEnabled } from "@/withClerkProvider";
import { useTranslation } from "react-i18next";
import { useCart } from "@/context/CartContext";
import { themeConfig } from "@/config/themeConfig";
import { Moon } from "lucide-react";
import { useCourses } from "@/hooks/useCourses";
import { useServices } from "@/hooks/useServices";

type DropKey = "courses" | "services" | "demo" | "about" | null;


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropKey>(null); // desktop hover
  const [mobileOpen, setMobileOpen] = useState<Record<string, boolean>>({}); // mobile accordions
  const [currentPath, setCurrentPath] = useState("");
  const [isLangOpen, setIsLangOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const { cartCount, isPakistan } = useCart();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  const navigation: Array<
    | { name: string; href: string }
    | { name: string; href: string; dropdown: "courses" | "services" | "demo" | "about" }
  > = [
      { name: t("navbar.home", { defaultValue: "Home" }), href: "/" },
      { name: t("navbar.about", { defaultValue: "About" }), href: "/about", dropdown: "about" },
      {
        name: t("navbar.courses", { defaultValue: "Online Courses" }),
        href: "/courses",
        dropdown: "courses",
      },
      {
        name: t("navbar.certificates", { defaultValue: "Certificates" }),
        href: "/certificates",
      },
      { name: t("navbar.freeDemo", { defaultValue: "Free Demo" }), href: "/FreeDemo" },
    ];

  const { courses: fetchedCourses } = useCourses();

  const subCoursesRaw = fetchedCourses.map((c: any) => ({
    name: c.isRamadan ? t("Ramadan Reset", { defaultValue: "🌙 Ramadan Reset" }) : c.title,
    href: c.url,
    isSpecial: !!c.isRamadan
  }));

  const subCourses = isPakistan ? subCoursesRaw : subCoursesRaw.filter(c => !c.isSpecial);

  const { services: fetchedServicesList } = useServices();

  const staticServices = [
    { name: t("Software Development", { defaultValue: "Software Development" }), href: "/SoftwareDevelopment" },
    { name: t("SEO Services", { defaultValue: "SEO Services" }), href: "/SEOServices" },
    { name: t("Digital Marketing", { defaultValue: "Digital Marketing" }), href: "/DigitalMarketing" },
    { name: t("Social Media Marketing", { defaultValue: "Social Media Marketing" }), href: "/SocialMediaMarketing" },
    { name: t("WordPress Development", { defaultValue: "WordPress Development" }), href: "/WordPressDevelopment" },
    { name: t("AI Chatbot Integration", { defaultValue: "AI Chatbot Integration" }), href: "/AIChatbotIntegration" },
    { name: t("Data Analysis Services", { defaultValue: "Data Analysis Services" }), href: "/DataAnalysisServices" },
    { name: t("Web Development Services", { defaultValue: "Web Development Services" }), href: "/WebDevelopmentServices" },
    { name: t("Cybersecurity Services", { defaultValue: "Cybersecurity Services" }), href: "/CyberSecurityServices" },
    { name: t("UI/UX Design", { defaultValue: "UI/UX Design" }), href: "/UIUXServices" },
  ];

  const subServices = fetchedServicesList.length > 0
    ? fetchedServicesList.map((s: any) => ({ name: t(s.title, { defaultValue: s.title }), href: `/${s.link}` }))
    : staticServices;

  const subDemo = [
    { name: t("Book Free Session", { defaultValue: "Book Free Session" }), href: "/FreeDemo#book" },
    { name: t("Recorded Demo", { defaultValue: "Recorded Demo" }), href: "/FreeDemo#recorded" },
  ];
  const subAbout = [
    { name: t("Why Neotech Solutions", { defaultValue: "Why Neotech Solutions" }), href: "/why-neotech-solutions" },
    // { name: t("Our Instructors", { defaultValue: "Our Instructors" }), href: "/our-instructors" },
  ];

  const langOptions = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
    { code: "ar", label: "العربية" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  const isLmsActive = currentPath === "/lms" || currentPath.startsWith("/lms/");
  const isContactActive =
    currentPath === "/contact" || currentPath.startsWith("/contact/");

  const handleContact = () => {
    if (location.pathname === "/") {
      const section = document.getElementById("contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigate("/contact");
  };

  const handleLms = () => {
    if (location.pathname === "/") {
      const section = document.getElementById("lms");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigate("/lms");
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  const dropdownItems = (key: "courses" | "services" | "demo" | "about") =>
    key === "courses" ? subCourses : key === "services" ? subServices : key === "about" ? subAbout : subDemo;

  const toggleMobile = (key: string) =>
    setMobileOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <header className={`${themeConfig.isRamadanTheme ? 'bg-blue-600 border-b-2 border-yellow-500/20' : 'bg-white/80 backdrop-blur-lg border-b border-white/20'} sticky top-0 z-50 transition-colors duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.03)]`}>
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <div className="flex items-center">
                {themeConfig.isRamadanTheme && (
                  <motion.div
                    animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="mr-2"
                  >
                    <Moon className="h-6 w-6 text-yellow-600 fill-yellow-500/20" />
                  </motion.div>
                )}
                <span className={`text-2xl font-bold ${themeConfig.isRamadanTheme ? 'text-blue-900' : 'text-primary'}`}>Neotech</span>
                <span className={`text-2xl font-bold ${themeConfig.isRamadanTheme ? 'text-yellow-600' : 'text-gray-900'} ml-1`}>Solutions</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-1 lg:space-x-4 bg-slate-50/50 px-4 py-1.5 rounded-full border border-slate-100/60 shadow-sm">
              {navigation.map((item) =>
                "dropdown" in item ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.dropdown)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      onClick={() => navigate(item.href)}
                      className={`flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${isActive(item.href)
                        ? (themeConfig.isRamadanTheme ? "text-blue-900 bg-blue-600/50" : "text-blue-700 bg-blue-100/50 shadow-sm")
                        : (themeConfig.isRamadanTheme ? "text-blue-900 hover:text-blue-900 hover:bg-blue-600/30" : "text-slate-600 hover:text-blue-900 hover:bg-white")
                        }`}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 opacity-70 ${themeConfig.isRamadanTheme ? 'text-yellow-600' : ''}`} />
                    </button>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {openDropdown === item.dropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-0 mt-3 w-64 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] z-50 overflow-hidden p-2"
                        >
                          {dropdownItems(item.dropdown).map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              className={`block px-4 py-2.5 mx-1 my-1 rounded-xl text-sm font-semibold transition-all duration-200 ${(sub as any).isSpecial
                                ? "text-blue-900 bg-blue-600/10 hover:bg-blue-600 hover:text-white"
                                : "text-slate-600 hover:bg-blue-50 hover:text-blue-900 hover:translate-x-1"
                                }`}
                              onClick={() => setOpenDropdown(null)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${isActive(item.href)
                      ? (themeConfig.isRamadanTheme ? "text-blue-900 bg-blue-600" : "text-blue-700 bg-blue-100/50 shadow-sm")
                      : (themeConfig.isRamadanTheme ? "text-blue-900 hover:text-blue-900 hover:bg-blue-600/50" : "text-slate-600 hover:text-blue-900 hover:bg-white")
                      }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Desktop Right: contact, auth/LMS */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language */}
            {/* <div className="relative">
              <button
                aria-label="Change language"
                onClick={() => setIsLangOpen((v) => !v)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <Globe className="h-5 w-5 text-gray-700" />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden"
                  >
                    {langOptions.map((opt) => (
                      <button
                        key={opt.code}
                        onClick={() => changeLanguage(opt.code)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div> */}

            {/* Contact */}
            {/* <Button
              onClick={handleContact}
              className={`text-white hover:opacity-90 transition-all duration-200 ${
                isContactActive
                  ? "ring-4 ring-blue-500 ring-opacity-75 shadow-2xl transform scale-110"
                  : ""
              }`}
              style={{
                background: isContactActive
                  ? "linear-gradient(to bottom, #2563eb, #1d4ed8)"
                  : "linear-gradient(to bottom, #3b82f6, #60a5fa)",
              }}
            >
              <strong>{t("navbar.contact", { defaultValue: "Contact" })} {isContactActive ? "✓" : ""}</strong>
            </Button> */}

            {/* Cart Icon */}
            <div className="relative mr-2">
              <button
                aria-label="View shopping cart"
                onClick={() => navigate("/cart")}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
              >
                <ShoppingCart className="h-6 w-6 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Always visible LMS Button */}
            <Button
              onClick={handleLms}
              className={`text-white hover:opacity-90 transition-all duration-200 ${isLmsActive
                ? (themeConfig.isRamadanTheme ? "ring-4 ring-yellow-500 ring-opacity-75" : "ring-4 ring-blue-500 ring-opacity-75")
                : ""
                }`}
              style={{
                background: themeConfig.isRamadanTheme
                  ? (isLmsActive ? "linear-gradient(to bottom, #d97706, #b45309)" : "linear-gradient(to bottom, #1040b9, #2563eb)")
                  : (isLmsActive
                    ? "linear-gradient(to bottom, #2563eb, #1d4ed8)"
                    : "linear-gradient(to bottom, #3b82f6, #60a5fa)"),
              }}
            >
              <strong>LMS {isLmsActive ? "✓" : ""}</strong>
            </Button>

            {/* Sign In */}
            {isClerkEnabled ? (
              <>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>

                <SignedOut>
                  <Button
                    onClick={() => navigate("/sign-in")}
                    className={`text-white hover:opacity-90 transition-all duration-200 font-bold`}
                    style={{
                      background: themeConfig.isRamadanTheme
                        ? "linear-gradient(to bottom, #1040b9, #2563eb)"
                        : "linear-gradient(to bottom, #3b82f6, #60a5fa)",
                    }}
                  >
                    <strong>{t("SignIn", { defaultValue: "Sign In" })}</strong>
                  </Button>
                </SignedOut>
              </>
            ) : (
              <Button
                onClick={() => navigate("/sign-in")}
                className={`text-white hover:opacity-90 transition-all duration-200 font-bold`}
                style={{
                  background: themeConfig.isRamadanTheme
                    ? "linear-gradient(to bottom, #1040b9, #2563eb)"
                    : "linear-gradient(to bottom, #3b82f6, #60a5fa)",
                }}
              >
                <strong>Sign In</strong>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <div className="relative">
              <button
                aria-label="View shopping cart"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/cart");
                }}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
              >
                <ShoppingCart className="h-6 w-6 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="text-gray-700 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden"
            >
              <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${themeConfig.isRamadanTheme ? 'bg-blue-600 text-blue-900 border-t border-yellow-500/20 shadow-lg' : 'bg-white border-t'}`}>
                {navigation.map((item) =>
                  "dropdown" in item ? (
                    <div key={item.name} className="space-y-1">
                      <button
                        onClick={() => toggleMobile(item.dropdown)}
                        className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${isActive(item.href)
                          ? (themeConfig.isRamadanTheme ? "text-blue-900 bg-blue-600" : "text-primary bg-primary/10")
                          : (themeConfig.isRamadanTheme ? "text-blue-900 hover:text-blue-900 hover:bg-blue-600/50" : "text-gray-700 hover:text-primary hover:bg-primary/5")
                          }`}
                      >
                        <span onClick={(e) => { e.stopPropagation(); navigate(item.href); }}>
                          {item.name}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transform transition-transform ${mobileOpen[item.dropdown] ? "rotate-180" : ""
                            } ${themeConfig.isRamadanTheme ? 'text-yellow-600' : ''}`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileOpen[item.dropdown] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="ml-4 space-y-1 overflow-hidden"
                          >
                            {dropdownItems(item.dropdown).map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md text-sm ${themeConfig.isRamadanTheme ? 'text-blue-900 hover:text-yellow-400 hover:bg-white/5' : 'text-gray-700 hover:text-primary hover:bg-primary/5'}`}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.href)
                        ? (themeConfig.isRamadanTheme ? "text-yellow-500 bg-white/10" : "text-primary bg-primary/10")
                        : (themeConfig.isRamadanTheme ? "text-blue-900 hover:text-blue-900 hover:bg-white/5" : "text-gray-700 hover:text-primary hover:bg-primary/5")
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                )}


                <div className="pt-2 space-y-2 px-2">
                  <Button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleContact();
                    }}
                    className={`w-full text-white hover:opacity-90 transition-all duration-200 ${isContactActive ? "ring-4 ring-opacity-75 shadow-2xl" : ""
                      }`}
                    style={{
                      background: themeConfig.isRamadanTheme
                        ? (isContactActive ? "linear-gradient(to bottom, #d97706, #b45309)" : "linear-gradient(to bottom, #1040b9, #2563eb)")
                        : (isContactActive
                          ? "linear-gradient(to bottom, #2563eb, #1d4ed8)"
                          : "linear-gradient(to bottom, #3b82f6, #60a5fa)"),
                    }}
                  >
                    <strong>{t("navbar.contact", { defaultValue: "Contact" })} {isContactActive ? "✓" : ""}</strong>
                  </Button>

                  {/* Always visible LMS Button in Mobile */}
                  <Button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleLms();
                    }}
                    className={`w-full text-white hover:opacity-90 transition-all duration-200 ${isLmsActive ? "ring-4 ring-opacity-75 shadow-2xl" : ""
                      }`}
                    style={{
                      background: themeConfig.isRamadanTheme
                        ? (isLmsActive ? "linear-gradient(to bottom, #d97706, #b45309)" : "linear-gradient(to bottom, #1040b9, #2563eb)")
                        : (isLmsActive
                          ? "linear-gradient(to bottom, #2563eb, #1d4ed8)"
                          : "linear-gradient(to bottom, #3b82f6, #60a5fa)"),
                    }}
                  >
                    <strong>LMS {isLmsActive ? "✓" : ""}</strong>
                  </Button>

                  {isClerkEnabled && (
                    <>
                      <SignedIn>
                        <div className="w-full flex justify-center mt-2">
                          <UserButton afterSignOutUrl="/" />
                        </div>
                      </SignedIn>

                      <SignedOut>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => {
                              setIsMenuOpen(false);
                              navigate("/sign-in");
                            }}
                            className="flex-1 text-white hover:opacity-90 transition-all duration-200 font-bold"
                            style={{ background: "linear-gradient(to bottom, #3b82f6, #60a5fa)" }}
                          >
                            {t("SignIn", { defaultValue: "Sign In" })}
                          </Button>
                        </div>
                      </SignedOut>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
