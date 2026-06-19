// src/components/Footer.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useCourses } from "@/hooks/useCourses";
import { themeConfig } from "@/config/themeConfig";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Send,
  ShieldCheck,
  CheckCircle2,
  Mail,
  MapPin,
  Globe,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const { isPakistan } = useCart();
  const { courses } = useCourses();
  const [email, setEmail] = useState("");

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Subscription successful! ${email} has been added to our network.`);
      setEmail("");
    }
  };

  return (
    <footer className={`relative ${themeConfig.isRamadanTheme ? 'bg-[#052e16]' : 'bg-[#020617]'} text-gray-300 font-sans mt-10 overflow-hidden border-t ${themeConfig.isRamadanTheme ? 'border-yellow-500/20' : 'border-gray-800/60'}`} role="contentinfo">
      {/* Premium Background Decor */}
      <div className={`absolute inset-0 ${themeConfig.isRamadanTheme ? 'bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-600/40 via-blue-700 to-blue-800' : 'bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-gray-950'} opacity-80 pointer-events-none`} />
      <div className={`absolute top-0 left-1/4 w-96 h-96 ${themeConfig.isRamadanTheme ? 'bg-yellow-500/5' : 'bg-blue-600/5'} rounded-full blur-[120px] pointer-events-none`} />

      {/* Grid Pattern for Tech Feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      {/* Main Structural Container */}
      <div className="relative max-w-[1400px] mx-auto px-6 py-20 lg:px-12 z-10">

        {/* Pre-Footer Banner for Asymmetrical Modernity */}
        <div className="mb-20 pb-16 border-b border-gray-800/80 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tighter max-w-2xl leading-[1.1]">
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">The Future</span>
            </h2>
          </div>
          <div className="md:text-right">
            <Button onClick={() => navigate('/FreeDemo')} className="bg-white text-gray-950 hover:bg-gray-200 hover:-translate-y-1 transition-all rounded-full px-8 py-6 text-lg font-bold shadow-xl shadow-white/10">
              Book a Free Consultation
            </Button>
          </div>
        </div>

        {/* Footer Grid - Asymmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Column 1: Brand & SECP Trust (Larger Span) */}
          <div className="lg:col-span-4 flex flex-col space-y-6 items-center md:items-start text-center md:text-left pr-0 lg:pr-8 border-r border-gray-800/40">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className={`h-11 w-11 ${themeConfig.isRamadanTheme ? 'bg-gradient-to-br from-yellow-400 to-blue-800' : 'bg-gradient-to-br from-blue-600 to-blue-600'} rounded-xl flex items-center justify-center shadow-xl ${themeConfig.isRamadanTheme ? 'shadow-yellow-500/20' : 'shadow-blue-600/20'} group-hover:scale-105 transition-transform`}>
                <span className="text-white font-bold text-2xl">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight leading-none uppercase">Neotech Solutions</span>
                <span className={`text-[10px] ${themeConfig.isRamadanTheme ? 'text-yellow-500' : 'text-blue-900'} font-bold uppercase tracking-widest mt-1`}>
                  {themeConfig.isRamadanTheme ? "🌙 Ramadan Mubarak • SECP Regd." : "Private Limited • SECP Regd."}
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed">
              <strong>Neotech Solutions Private Limited</strong> is a premier <strong>software house</strong> and <strong>IT training institute</strong> dedicated to engineering excellence and professional tech empowerment.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3 w-full max-w-xs">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">Newsletter</h4>
              <div className="flex gap-2 p-1 bg-gray-900/50 border border-gray-800 rounded-xl focus-within:border-blue-600 transition-all">
                <Input
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent border-none focus-visible:ring-0 text-sm text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button size="icon" className="bg-blue-600 hover:bg-blue-600 text-white rounded-lg shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>

          {/* Navigation Columns */}
          <nav className="lg:col-span-2 flex flex-col items-center md:items-start" aria-label="Footer Links">
            <h3 className="text-sm font-bold text-white mb-8 flex items-center gap-2 uppercase tracking-widest">
              <span className="w-6 h-1 bg-blue-600 rounded-full"></span>
              Explore
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Our Certificates", path: "/certificates" },
                { name: "Professional Courses", path: "/courses" },
                { name: "Insights & Blogs", path: "/blogs" },
                { name: "Schedule a Demo", path: "/FreeDemo" },
                { name: "Company Story", path: "/about" },
                { name: "Contact Hub", path: "/contact" },
                { name: "Our Portfolio", path: "/portfolio" },
              ].map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => handleNavigate(item.path)}
                    className="text-sm text-gray-400 hover:text-blue-900 hover:translate-x-1 transition-all flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all text-blue-900" />
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Contact & Location */}
          <address className="lg:col-span-3 not-italic flex flex-col items-center md:items-start">
            <h3 className="text-sm font-bold text-white mb-8 flex items-center gap-2 uppercase tracking-widest">
              <span className="w-6 h-1 bg-blue-500 rounded-full"></span>
              Get In Touch
            </h3>
            <div className="space-y-5 text-sm text-gray-400 w-full">
              <div className="flex items-start gap-4 group justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span className="leading-relaxed">123 Tech Avenue, Software Park, Sector 5, Lahore, Pakistan</span>
              </div>
              <div className="flex flex-col gap-3">
                <a href="tel:+923000000000" className="flex items-center gap-4 hover:text-blue-900 transition-colors justify-center md:justify-start">
                  <Phone className="h-4 w-4 text-blue-900" />
                  <span>+92 300 0000000</span>
                </a>
                <a href="mailto:contact@neotechsolution.com" className="flex items-center gap-4 hover:text-yellow-400 transition-colors justify-center md:justify-start">
                  <Mail className="h-4 w-4 text-yellow-500" />
                  <span>contact@neotechsolution.com</span>
                </a>
              </div>


              <div className="flex gap-3 pt-4 justify-center md:justify-start">
                {[
                  { icon: Facebook, link: "", color: "hover:bg-[#1877F2]" },
                  { icon: Instagram, link: "", color: "hover:bg-[#E4405F]" },
                  { icon: Linkedin, link: "", color: "hover:bg-[#0A66C2]" },
                  { icon: Twitter, link: "https://x.com/Neotechsolutions", color: "hover:bg-black" },
                ].map((social, idx) => (
                  <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className={`p-2 ${themeConfig.isRamadanTheme ? 'bg-blue-600 border-blue-600' : 'bg-gray-900 border-gray-800'} border rounded-lg text-gray-500 transition-all ${social.color} hover:text-white`}>
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </address>

          <nav className="lg:col-span-3 flex flex-col items-center md:items-start" aria-label="Footer Links">
            <h3 className="text-sm font-bold text-white mb-8 flex items-center gap-2 uppercase tracking-widest">
              <span className="w-6 h-1 bg-blue-600 rounded-full"></span>
              Courses
            </h3>
            <ul className="space-y-4">
              {courses.filter((course: any) => isPakistan || !course.isRamadan).map((course: any) => (
                <li key={course.url}>
                  <button
                    onClick={() => handleNavigate(course.url)}
                    className="text-sm text-gray-400 hover:text-blue-900 hover:translate-x-1 transition-all flex items-center group text-left"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all text-blue-900" />
                    {course.isRamadan ? "🌙 Ramadan Reset" : course.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-gray-800/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
              © 2026 <span className="text-white">Neotech Solutions Private Limited</span>
            </p>

          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2" aria-label="Legal">
            {[
              { name: "Privacy Policy", path: "/privacy" },
              { name: "Terms of Service", path: "/terms" },
              { name: "Refund Policy", path: "/refund-policy" },
              { name: "Sitemap", path: "/sitemap" }
            ].map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigate(link.path)}
                className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-blue-900 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
