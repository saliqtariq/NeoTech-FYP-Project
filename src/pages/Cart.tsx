import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, ShoppingBag, CreditCard, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCourses } from "@/hooks/useCourses";


const Cart = () => {
    const { cartItems, removeFromCart, updatePaymentPlan, clearCart, cartCount, isPakistan, isUAE, formatPrice, currency, exchangeRate } = useCart();
    const { courses, loading } = useCourses();
    const navigate = useNavigate();
    const { toast } = useToast();
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [userPhone, setUserPhone] = useState("");

    const parseDuration = (d?: string) => {
        if (!d) return 3;
        const match = d.match(/(\d+)/);
        return match ? parseInt(match[1]) : 3;
    };

    const fullCartItems = cartItems.map(cartItem => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const course = courses.find((c: any) => c.id === cartItem.id || c._id === cartItem.id || c.slug === cartItem.id || c.title === cartItem.id);

        if (!course) {
            return {
                ...cartItem,
                name: loading ? "Loading..." : "Unknown Course",
                durationMonths: 3,
                pricePKR: 1999,
                priceAED: 299,
                priceUSD: 99,
                path: "#"
            };
        }

        const durationMonths = parseDuration(course.duration);

        return {
            ...cartItem,
            name: course.title || course.name,
            durationMonths: durationMonths,
            pricePKR: course.pricePKR || 1999,
            priceAED: course.priceAED || 299,
            priceUSD: course.priceUSD || 99,
            path: course.url || `/course-outline/${course._id}`
        };
    });

    const getCalculatedPrices = (items: typeof fullCartItems) => {
        let totalUSD = 0;
        let totalPKR = 0;
        let totalAED = 0;

        items.forEach(item => {
            const duration = item.paymentPlan === "pay_full" ? (item.durationMonths || 3) : 1;
            totalUSD += (item.priceUSD || 99) * duration;
            totalPKR += (item.pricePKR || 1999) * duration;
            totalAED += (item.priceAED || 299) * duration;
        });

        // Billing amount depends on region
        let billingAmount = 0;
        let billingCurrency = "USD";

        if (isPakistan) {
            billingAmount = totalPKR;
            billingCurrency = "PKR";
        } else if (isUAE) {
            billingAmount = totalAED;
            billingCurrency = "AED";
        } else {
            billingAmount = totalUSD;
            billingCurrency = "USD";
        }

        return {
            display: { priceUSD: totalUSD, pricePKR: totalPKR, priceAED: totalAED },
            billing: { amount: parseFloat(billingAmount.toFixed(2)), currency: billingCurrency }
        };
    };

    const handleCheckout = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userName || !userEmail || !userPhone) {
            toast({
                title: "Missing Information",
                description: "Please fill in all details to proceed.",
                variant: "destructive",
            });
            return;
        }

        setIsCheckingOut(true);

        const { billing } = getCalculatedPrices(fullCartItems);

        try {
            await new Promise(resolve => setTimeout(resolve, 800));

            const data = {
                success: true,
                params: { status: "mocked" },
                formAction: "/thank-you?payment=success"
            };

            if (data.success && data.params) {
                // Perform Redirection via Form Submission
                // NOTE: Cart is NOT cleared here — it clears only on the ThankYou page
                // after PayFast confirms successful payment via SUCCESS_URL query parameter.
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

                toast({
                    title: "Redirecting...",
                    description: "Please wait while we redirect you to the secure payment gateway.",
                });
            } else {
                throw new Error("Invalid response from payment gateway");
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error("Checkout Error:", error);
            toast({
                title: "Checkout Failed",
                description: error.message || "There was an error processing your request. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsCheckingOut(false);
        }
    };


    if (cartCount === 0) {
        return (
            <div className="min-h-[80vh] flex flex-col font-poppins bg-slate-50">

                <main className="flex-grow flex items-center justify-center p-6 relative">
                    {/* Decorative background grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
                    <div className="text-center max-w-md relative z-10 bg-white p-12 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
                        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShoppingBag className="h-10 w-10 text-blue-900" />
                        </div>
                        <h1 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">Your Cart is Empty</h1>
                        <p className="text-slate-500 mb-8 font-medium">Looks like you haven't added any courses to your cart yet. Discover your next skill today.</p>
                        <Button onClick={() => navigate("/courses")} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded-full shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-1">
                            Explore Courses
                        </Button>
                    </div>
                </main>

            </div>
        );
    }

    return (
        <div className="min-h-[80vh] flex flex-col font-poppins bg-slate-50 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-10 flex items-center gap-3 tracking-tight">
                        <ShoppingBag className="text-blue-900 h-8 w-8" /> Shopping Cart
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-6">
                            {fullCartItems.map((item) => (
                                <Card key={item.id} className="overflow-hidden border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_50px_-15px_rgba(0,0,0,0.08)] transition-all rounded-[2rem] bg-white">
                                    <CardContent className="p-8">
                                        <div className="flex flex-col sm:flex-row justify-between gap-6">
                                            <div className="space-y-1 flex-1">
                                                <h3
                                                    onClick={() => navigate(item.path)}
                                                    className="text-2xl font-extrabold text-slate-900 cursor-pointer hover:text-blue-900 transition-colors leading-tight"
                                                >
                                                    {item.name}
                                                </h3>
                                                <p className="text-sm font-medium text-slate-500 flex justify-between">
                                                    Duration: {item.durationMonths} Months
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-end gap-3 justify-between sm:justify-start">
                                                <div className="text-xl font-black text-blue-900 bg-blue-50 px-4 py-2 rounded-xl">
                                                    {(() => {
                                                        const { display } = getCalculatedPrices([item]);
                                                        return formatPrice(display);
                                                    })()}
                                                    <span className="text-xs text-slate-500 font-bold ml-1 uppercase tracking-wider">
                                                        {item.paymentPlan === "pay_full" ? "/ total" : "/ month"}
                                                    </span>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-500 hover:text-red-700 hover:bg-red-50 px-4 rounded-full h-9 font-semibold text-xs uppercase tracking-widest"
                                                >
                                                    <Trash2 className="h-4 w-4 mr-2" /> Remove
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-5 items-center">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Payment Plan</span>
                                            <div className="flex bg-slate-100 p-1 rounded-xl">
                                                <button
                                                    onClick={() => updatePaymentPlan(item.id, "pay_monthly")}
                                                    className={`px-5 py-2 text-xs text-center font-bold uppercase tracking-wider rounded-lg transition-all ${item.paymentPlan === "pay_monthly"
                                                        ? "bg-white text-blue-900 shadow-sm"
                                                        : "text-slate-500 hover:text-blue-900"
                                                        }`}
                                                >
                                                    Installments
                                                </button>
                                                <button
                                                    onClick={() => updatePaymentPlan(item.id, "pay_full")}
                                                    className={`px-5 py-2 text-xs text-center font-bold uppercase tracking-wider rounded-lg transition-all ${item.paymentPlan === "pay_full"
                                                        ? "bg-white text-blue-900 shadow-sm"
                                                        : "text-slate-500 hover:text-blue-900"
                                                        }`}
                                                >
                                                    Full Fee
                                                </button>
                                            </div>
                                            <p className="text-xs text-slate-500 font-medium ml-auto bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                                                {item.paymentPlan === "pay_monthly"
                                                    ? `Pay ${(() => {
                                                        const { display } = getCalculatedPrices([{ ...item, paymentPlan: "pay_monthly" }]);
                                                        return formatPrice(display);
                                                    })()} every month.`
                                                    : `One-time payment.`}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Checkout Summary */}
                        <div className="space-y-6">
                            <Card className="border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] bg-white rounded-[2rem] overflow-hidden">
                                <CardHeader className="bg-blue-600 text-white rounded-t-[2rem] px-8 py-6">
                                    <CardTitle className="text-xl font-extrabold flex items-center gap-3">
                                        <CreditCard className="w-6 h-6" /> Order Summary
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-8 space-y-6">
                                    <div className="space-y-4">
                                        {fullCartItems.map(item => (
                                            <div key={item.id} className="flex justify-between items-center text-sm border-b border-slate-50 pb-2">
                                                <span
                                                    onClick={() => navigate(item.path)}
                                                    className="text-slate-600 font-medium cursor-pointer hover:text-blue-900 transition-colors"
                                                >
                                                    {item.name} <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full ml-1 uppercase">{item.paymentPlan === "pay_full" ? 'Full' : 'Monthly'}</span>
                                                </span>
                                                <span className="font-bold text-slate-900">
                                                    {(() => {
                                                        const { display } = getCalculatedPrices([item]);
                                                        return formatPrice(display);
                                                    })()}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border-t border-slate-200 pt-6 flex justify-between items-end">
                                        <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Total Amount</span>
                                        <span className="text-3xl font-black text-blue-900 leading-none">
                                            {(() => {
                                                const { display } = getCalculatedPrices(fullCartItems);
                                                return formatPrice(display);
                                            })()}
                                        </span>
                                    </div>

                                    <form onSubmit={handleCheckout} className="pt-6 space-y-5">
                                        <div className="space-y-4">
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                value={userName}
                                                onChange={(e) => setUserName(e.target.value)}
                                                className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none text-sm font-medium transition-all"
                                                required
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                value={userEmail}
                                                onChange={(e) => setUserEmail(e.target.value)}
                                                className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none text-sm font-medium transition-all"
                                                required
                                            />
                                            <input
                                                type="tel"
                                                placeholder="Phone / WhatsApp"
                                                value={userPhone}
                                                onChange={(e) => setUserPhone(e.target.value)}
                                                className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none text-sm font-medium transition-all"
                                                required
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isCheckingOut}
                                            className="w-full bg-blue-600 hover:bg-blue-700 hover:shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] py-7 text-lg font-bold rounded-xl transition-all"
                                        >
                                            {isCheckingOut ? (
                                                "Processing..."
                                            ) : (
                                                <>Proceed to Checkout <Send className="ml-2 h-4 w-4" /></>
                                            )}
                                        </Button>
                                    </form>

                                    <div className="space-y-3 mt-4">
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <CheckCircle2 className="h-4 w-4 text-blue-900" />
                                            Secure Enrollment Process
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <CheckCircle2 className="h-4 w-4 text-blue-900" />
                                            Instant access to LMS after verification
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Cart;
