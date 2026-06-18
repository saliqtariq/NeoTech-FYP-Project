import React, { useState, useEffect } from 'react';
import { Home, Star, Sparkles, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState<
    Array<{ id: number; left: number; delay: number; duration: number }>
  >([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [quoteIndex, setQuoteIndex] = useState(0);

  const navigate = useNavigate();

  const motivationalQuotes = React.useMemo(() => [
    "Your tech journey takes flight today!",
    "Greatness starts with a single step.",
    "Get ready to unlock your potential!",
    "The future belongs to those who learn."
  ], []);

  // Visual effects (confetti, fade-in)
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const pieces = Array.from({ length: 30 }).map((_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      id: i
    }));
    setConfettiPieces(pieces);
    return () => clearTimeout(timer);
  }, []);

  // Cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Rotate quotes slowly every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % motivationalQuotes.length);
    }, 8000); // <-- 8 seconds
    return () => clearInterval(interval);
  }, [motivationalQuotes.length]);

  const currentQuote = motivationalQuotes[quoteIndex];

  return (
    <div className="min-h-screen bg-slate-50 font-poppins relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-indigo-600 rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating confetti */}
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-3"
          style={{
            left: `${piece.left}%`,
            animation: `fall ${piece.duration}s linear infinite`,
            animationDelay: `${piece.delay}s`,
            backgroundColor: ['#3b82f6', '#2563eb', '#15803d', '#dcfce7', '#f0fdf4'][Math.floor(Math.random() * 5)]
          }}
        />
      ))}

      {/* Cursor trail effect */}
      <div
        className="pointer-events-none fixed w-6 h-6 bg-blue-600 rounded-full opacity-20 blur-sm transition-all duration-300 ease-out z-50"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Main content */}
      <div className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Success icon with animation */}
        <div className="relative mb-10">
          <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <div className="relative bg-white rounded-full p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-slate-100 transform transition-all duration-500 hover:scale-110">
            <div className="relative">
              <CheckCircle className="w-20 h-20 text-blue-900" />
              <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
          </div>
        </div>

        {/* Thank you message */}
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
            Payment <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Successful!</span>
          </h1>

          <div className="space-y-6">
            <p className="text-2xl md:text-3xl text-slate-700 font-bold">
              Your enrollment is confirmed! 🎉
            </p>

            <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto font-medium">
              Thank you for enrolling in our course. You will receive an email shortly with your login credentials and further instructions.
            </p>

            <div className="flex items-center justify-center gap-2 text-blue-900 font-bold tracking-wide pt-6">
              <p className="italic transition-opacity duration-500">{currentQuote}</p>
            </div>
          </div>

          {/* Return home button */}
          <div className="mt-12">
            <button
              onClick={() => navigate('/dashboard')}
              className="group relative inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-10 rounded-full shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] transform transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_30px_-6px_rgba(37,99,235,0.5)]"
            >
              <Home className="w-5 h-5 relative z-10 group-hover:-translate-y-1 transition-transform" />
              <span className="relative z-10">Go to Dashboard</span>
              <Sparkles className="w-4 h-4 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity absolute right-4" />
            </button>
          </div>

          {/* Motivational footer */}
          <div className="mt-16 p-6 bg-white/60 backdrop-blur-md rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
            <div className="flex items-center justify-center gap-3 text-slate-600">
              <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
                Next Steps: Keep an eye on your inbox for the welcome package!
              </p>
              <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: left center;
          }
          50% {
            background-position: right center;
          }
        }
      `}</style>
    </div>
  );
};

export default PaymentSuccess;
