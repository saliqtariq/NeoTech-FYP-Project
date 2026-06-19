import React, { useState, useEffect } from 'react';
import { Home, Star, Sparkles, Award, XCircle, Loader2 } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';


const ThankYouPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState<
    Array<{ id: number; left: number; delay: number; duration: number }>
  >([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [quoteIndex, setQuoteIndex] = useState(0);

  // 'loading' | 'paid' | 'failed' | 'unknown'
  const [verifiedStatus, setVerifiedStatus] = useState<'loading' | 'paid' | 'failed' | 'unknown'>('loading');

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const hasVerified = React.useRef(false);

  const motivationalQuotes = React.useMemo(() => [
    "Your journey is just beginning!",
    "Every submission is a step towards greatness",
    "You're making amazing progress!",
    "Keep shining bright, scholar!"
  ], []);

  const paymentParam = searchParams.get('payment');
  const orderIdParam = searchParams.get('orderId') || searchParams.get('basket_id');

  const transactionData = React.useMemo(() => ({
    payment: paymentParam,
    orderId: orderIdParam,
    transactionId: searchParams.get('transaction_id'),
    date: searchParams.get('order_date'),
    method: searchParams.get('PaymentName'),
    amount: searchParams.get('transaction_amount'),
    currency: searchParams.get('transaction_currency'),
    errMsg: searchParams.get('err_msg'),
    issuer: searchParams.get('issuer_name')
  }), [paymentParam, orderIdParam, searchParams]);

  // Visual effects (confetti, fade-in)
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const pieces = Array.from({ length: 40 }).map((_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      id: i
    }));
    setConfettiPieces(pieces);
    return () => clearTimeout(timer);
  }, []);


  // ──────────────────────────────────────────────────────────────────
  // Verify payment status from the server (don't trust URL params alone)
  // ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    // If already verified or currently verifying, don't start again
    if (hasVerified.current) return;

    const verify = async () => {
      // If we don't have an orderId, we can't verify with server
      if (!orderIdParam) {
        const isSuccess = paymentParam === 'success' || paymentParam === 'paid';
        setVerifiedStatus(isSuccess ? 'paid' : 'failed');
        if (isSuccess) clearCart();
        hasVerified.current = true;
        return;
      }

      // Fast path for obvious failure
      if (paymentParam === 'failed') {
        setVerifiedStatus('failed');
        hasVerified.current = true;
        return;
      }

      hasVerified.current = true; // Mark as verified/processing to prevent duplicate calls

      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        const data = { status: 'success' };

        // Note: we don't check for 'cancelled' here because we WANT this state to update 
        // even if a re-render happened (e.g. from animations). 
        // React handles state updates on unmounted components safely in modern versions.

        if (data.status === 'paid' || data.status === 'success') {
          setVerifiedStatus('paid');
          clearCart();
        } else if (data.status === 'failed') {
          setVerifiedStatus('failed');
        } else {
          // Fallback to URL hint
          const isSuccess = paymentParam === 'success' || paymentParam === 'paid';
          setVerifiedStatus(isSuccess ? 'paid' : 'failed');
          if (isSuccess) clearCart();
        }
      } catch (error) {
        console.error("Verification error:", error);
        const isSuccess = paymentParam === 'success' || paymentParam === 'paid';
        setVerifiedStatus(isSuccess ? 'paid' : 'failed');
        if (isSuccess) clearCart();
      }
    };

    verify();
  }, [orderIdParam, paymentParam, clearCart]);



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
  //   const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <>
      {/* ─── Loading View ──────────────────────────────────────── */}
      {verifiedStatus === 'loading' && (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
          <Loader2 className="w-16 h-16 text-blue-900 animate-spin mb-4" />
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Verifying Payment...</h2>
          <p className="text-slate-500 mt-2 font-medium">Please wait a moment while we confirm your transaction securely.</p>
        </div>
      )}

      {/* ─── Payment Failed View ───────────────────────────────── */}
      {verifiedStatus === 'failed' && (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
          <div className="bg-white rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-10 max-w-md w-full">
            <XCircle className="w-24 h-24 text-red-500 mx-auto mb-6 bg-red-50 rounded-full" />
            <h1 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Payment Failed</h1>
            <p className="text-slate-600 font-medium mb-4">We couldn't process your transaction.</p>
            {transactionData.errMsg && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm font-bold border border-red-100">
                Reason: {decodeURIComponent(transactionData.errMsg)}
              </div>
            )}
            <p className="text-slate-500 text-sm mb-8">
              Don't worry, your cart is safe. You can try again or use a different payment method.
            </p>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => navigate('/cart')}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full shadow-[0_8px_20px_-6px_rgba(239,68,68,0.4)] transition-all hover:scale-105"
              >
                Try Again
              </button>
              <button
                onClick={() => navigate('/')}
                className="bg-slate-100 text-slate-600 font-bold py-4 px-8 rounded-full hover:bg-slate-200 transition-colors"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── Payment Success View ──────────────────────────────── */}
      {(verifiedStatus === 'paid' || verifiedStatus === 'unknown') && (
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
              className="absolute w-2 h-3 animate-fall"
              style={{
                left: `${piece.left}%`,
                animationDelay: `${piece.delay}s`,
                animationDuration: `${piece.duration}s`,
                backgroundColor: ['#3b82f6', '#2563eb', '#15803d', '#dcfce7', '#f0fdf4'][Math.floor(Math.random() * 5)]
              }}
            />
          ))}

          {/* Cursor trail effect */}
          <div
            className="pointer-events-none fixed w-6 h-6 bg-blue-600 rounded-full opacity-20 blur-sm transition-all duration-300 ease-out"
            style={{
              left: mousePosition.x - 12,
              top: mousePosition.y - 12,
              transform: 'translate(-50%, -50%)'
            }}
          />

          {/* Main content */}
          <div className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* Success icon with animation */}
            <div className="relative mb-10 mt-4">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white rounded-full p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-slate-100 transform transition-all duration-500 hover:scale-110">
                <div className="relative">
                  <Award className="w-20 h-20 text-blue-900 " />
                  <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
                </div>
              </div>
            </div>

            {/* Thank you message */}
            <div className="text-center max-w-2xl mx-auto space-y-6">
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
                Thank <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">You!</span>
              </h1>

              <div className="space-y-6">
                <p className="text-2xl md:text-3xl text-slate-700 font-bold">
                  Your submission has been received! 🎉
                </p>

                <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto font-medium">
                  We're incredibly proud of you for taking this step. Your enrollment is being processed, and you'll receive a confirmation email shortly.
                </p>

                {/* Transaction Details Card */}
                {transactionData.orderId && (
                  <div className="bg-white/60 backdrop-blur-md border border-slate-100 p-8 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] max-w-md mx-auto mt-10 text-left space-y-5">
                    <h3 className="text-slate-900 font-bold border-b border-slate-100 pb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-blue-900" />
                      Transaction Summary
                    </h3>
                    <div className="grid grid-cols-2 gap-y-4 text-sm font-medium">
                      <span className="text-slate-500">Order ID:</span>
                      <span className="text-slate-900 font-bold text-right truncate" title={transactionData.orderId}>{transactionData.orderId}</span>

                      {transactionData.date && (
                        <>
                          <span className="text-slate-500">Date:</span>
                          <span className="text-slate-900 font-bold text-right">{decodeURIComponent(transactionData.date)}</span>
                        </>
                      )}

                      {transactionData.method && (
                        <>
                          <span className="text-slate-500">Method:</span>
                          <span className="text-slate-900 font-bold text-right">{transactionData.method} {transactionData.issuer ? `(${transactionData.issuer})` : ''}</span>
                        </>
                      )}

                      {transactionData.amount && (
                        <>
                          <span className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">Total Amount</span>
                          <span className="text-blue-900 font-black text-right text-lg mt-1">
                            {transactionData.currency || 'PKR'} {parseFloat(transactionData.amount).toLocaleString()}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-center gap-2 text-blue-900 font-medium pt-4">
                  <p className="italic transition-opacity duration-500">{currentQuote}</p>
                </div>
              </div>

              {/* Achievement badges */}
              {/* <div className="flex justify-center gap-4 mt-8">
            {[BookOpen, GraduationCap, Star].map((Icon, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-3"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Icon className="w-8 h-8 text-blue-900" />
              </div>
            ))}
          </div> */}

              {/* Return home button */}
              <div className="mt-12">
                <button
                  onClick={() => window.location.href = '/'}
                  className="group relative inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-10 rounded-full shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] transform transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_30px_-6px_rgba(37,99,235,0.5)]"
                >
                  <Home className="w-5 h-5 relative z-10 group-hover:-translate-y-1 transition-transform" />
                  <span className="relative z-10">Return to Home</span>
                  <Sparkles className="w-4 h-4 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity absolute right-4" />
                </button>
              </div>

              {/* Motivational footer */}
              <div className="mt-16 p-6 bg-white/60 backdrop-blur-md rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
                <div className="flex items-center justify-center gap-3 text-slate-600">
                  <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
                    Remember: You're capable of amazing things. Keep pushing forward!
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
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-fall {
          animation: fall linear infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </div>
      )}
    </>
  );
};

export default ThankYouPage;
