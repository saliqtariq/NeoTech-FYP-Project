import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CreditCard, Calendar, BookOpen, AlertCircle, Loader2, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface InstallmentData {
    installmentId: string;
    courseName: string;
    customerName: string;
    amountDue: number;
    originalAmountDue?: number;
    originalCurrency?: string;
    dueDate: string;
    nextDueDate?: string;
    progress: string;
}

const PayInstallment: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { toast } = useToast();

    const [data, setData] = useState<InstallmentData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        const fetchInstallment = async () => {
            try {
                // Mock presentation loading
                await new Promise(resolve => setTimeout(resolve, 800));

                setData({
                    installmentId: id || "INST-9999",
                    courseName: "Mocked Neotech Course",
                    customerName: "Jane Doe",
                    amountDue: 500,
                    originalAmountDue: 500,
                    originalCurrency: "USD",
                    dueDate: new Date(new Date().getTime() + 86400000 * 7).toISOString(),
                    progress: "1 of 3"
                });
            } catch (err: any) {
                setError("Failed to load installment details.");
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchInstallment();
    }, [id]);

    const handlePayNow = async () => {
        if (!data) return;
        setIsProcessing(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 800));

            const paymentData = {
                success: true,
                params: { status: "mocked" },
                formAction: "/thank-you?payment=success"
            };

            if (paymentData.success && paymentData.params) {
                // Build and submit hidden form to GoPayFast
                const form = document.createElement('form');
                form.method = 'POST';
                form.action = paymentData.formAction;

                Object.entries(paymentData.params).forEach(([key, value]) => {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = key;
                    input.value = String(value);
                    form.appendChild(input);
                });

                document.body.appendChild(form);
                form.submit();

                toast({
                    title: "Redirecting...",
                    description: "Taking you to the secure payment gateway.",
                });
            } else {
                throw new Error("Invalid response from gateway.");
            }
        } catch (err: any) {
            toast({
                title: "Payment Error",
                description: err.message || "An unexpected error occurred.",
                variant: "destructive"
            });
            setIsProcessing(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border-t-4 border-red-500">
                    <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Unavailable</h2>
                    <p className="text-gray-600 mb-6">{error || 'This payment link is invalid or has expired.'}</p>
                    <button
                        onClick={() => navigate('/')}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-xl transition"
                    >
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    const isOverdue = new Date(data.dueDate) < new Date();

    return (
        <div className="min-h-screen bg-slate-50 font-poppins relative overflow-hidden flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            {/* Abstract Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <div className="max-w-xl w-full relative z-10">
                <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden transition-all hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]">

                    {/* Decorative accent blur */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-600/10 mb-6 shadow-inner">
                            <CreditCard className="w-10 h-10 text-blue-900" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                            Installment Payment
                        </h2>
                        <div className="inline-block bg-slate-100 px-4 py-1.5 rounded-full">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                                Invoice #{data.installmentId}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 shadow-inner group transition-all hover:bg-white hover:border-blue-600/20">
                            <div className="flex items-start gap-5">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 group-hover:border-blue-600/30 transition-colors">
                                    <BookOpen className="w-7 h-7 text-blue-900" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Selected Course</p>
                                    <p className="text-xl font-extrabold text-slate-900 leading-tight mb-2">{data.courseName}</p>
                                    <div className="flex items-center gap-2 text-sm text-slate-500 font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                        <span>{data.customerName || 'Registered Student'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 shadow-inner group transition-all hover:bg-white hover:border-blue-600/20">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-blue-900" /> Due Date
                                </p>
                                <p className={`text-lg font-black tracking-tight ${isOverdue ? 'text-red-500' : 'text-slate-900'}`}>
                                    {new Date(data.nextDueDate || data.dueDate).toLocaleDateString(undefined, {
                                        year: 'numeric', month: 'short', day: 'numeric'
                                    })}
                                </p>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 shadow-inner group transition-all hover:bg-white hover:border-blue-600/20">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Progress</p>
                                <p className="text-lg font-black text-slate-900 tracking-tighter">
                                    {data.progress} installments
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-600 p-8 rounded-[2rem] shadow-xl shadow-blue-600/20 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[4rem] group-hover:scale-110 transition-transform" />
                            <div className="relative z-10 flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-black text-blue-100 uppercase tracking-widest mb-1">Current Amount Due</p>
                                    <div className="text-4xl font-black tracking-tight flex items-baseline gap-2">
                                        <span className="text-xl text-blue-200/80 font-bold uppercase">{data.originalCurrency || 'USD'}</span>
                                        {(data.originalAmountDue || data.amountDue).toLocaleString()}
                                    </div>
                                </div>
                                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                                    <Zap className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <button
                            onClick={handlePayNow}
                            disabled={isProcessing}
                            className={`group w-full flex justify-center items-center py-5 px-6 text-xl font-black rounded-[1.5rem] text-white shadow-2xl transition-all duration-300 ${isProcessing
                                ? 'bg-slate-400 cursor-not-allowed'
                                : 'bg-slate-900 hover:bg-black hover:-translate-y-1 hover:shadow-black/20'
                                }`}
                        >
                            {isProcessing ? (
                                <>
                                    <Loader2 className="w-7 h-7 animate-spin mr-3" />
                                    Verifying Connection...
                                </>
                            ) : (
                                <>
                                    Proceed to Checkout
                                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1.5 transition-transform" />
                                </>
                            )}
                        </button>

                        <div className="mt-6 flex items-center justify-center gap-3">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center shadow-sm">
                                    <span className="text-[10px] font-black">GP</span>
                                </div>
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center shadow-sm">
                                    <CreditCard className="w-4 h-4" />
                                </div>
                            </div>
                            <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                Secured by Neotech Gateway
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayInstallment;
