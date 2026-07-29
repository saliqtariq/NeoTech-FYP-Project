import React, { useState, useEffect } from 'react';
import { Home, Star, Sparkles, CheckCircle, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContactThankYou: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-poppins relative overflow-hidden">

      {/* Animated background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-indigo-600 rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main content */}
      <div className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Success icon */}
        <div className="relative mb-10 mt-4">
          <div className="absolute inset-0 bg-green-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <div className="relative bg-white rounded-full p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-slate-100 transform transition-all duration-500 hover:scale-110">
            <div className="relative">
              <CheckCircle className="w-20 h-20 text-green-500" />
              <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
          </div>
        </div>

        {/* Thank you message */}
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
            Thank <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">You!</span>
          </h1>

          <div className="space-y-6">
            <p className="text-2xl md:text-3xl text-slate-700 font-bold">
              Your message has been received! 🎉
            </p>

            <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto font-medium">
              Thank you for reaching out to us. Our team will review your inquiry and get back to you within 24 hours.
            </p>

            {/* Info card */}
            <div className="bg-white/60 backdrop-blur-md border border-slate-100 p-8 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] max-w-md mx-auto mt-10 text-center space-y-4">
              <MessageSquare className="w-10 h-10 text-blue-600 mx-auto" />
              <h3 className="text-slate-900 font-bold text-lg">What happens next?</h3>
              <ul className="text-left text-slate-600 text-sm space-y-3 font-medium">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Our team will review your message</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>You'll receive a response via email within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>For urgent inquiries, reach us on WhatsApp at +92 335 8746804</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Return home button */}
          <div className="mt-12">
            <button
              onClick={() => navigate('/')}
              className="group relative inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-10 rounded-full shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] transform transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_30px_-6px_rgba(37,99,235,0.5)]"
            >
              <Home className="w-5 h-5 relative z-10 group-hover:-translate-y-1 transition-transform" />
              <span className="relative z-10">Return to Home</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-16 p-6 bg-white/60 backdrop-blur-md rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
            <div className="flex items-center justify-center gap-3 text-slate-600">
              <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
                We value your interest and will respond promptly!
              </p>
              <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactThankYou;
