import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import {
    Moon,
    EyeOff,
    ShieldAlert,
    Zap,
    Heart,
    Search,
    ChevronDown,
    ChevronUp,
    Clock,
    MapPin,
    CheckCircle2,
    Lock,
    MessageSquareHeart,
    Sparkles,
    ShoppingCart,
    ArrowRight,
    Star
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

const RamadanReset = () => {
    const navigate = useNavigate();
    const { addToCart, formatPrice } = useCart();
    const { toast } = useToast();
    const [searchQuery, setSearchQuery] = useState('');

    const curriculum = [
        {
            week: "Week 1",
            focus: "Internal Foundation",
            sessions: ["Purpose of Life", "Science of Tauba", "Quran as a Life Manual"]
        },
        {
            week: "Week 2",
            focus: "Ethics & Character",
            sessions: ["Rizq-e-Halal in Tech", "Protecting the Tongue", "Emotional Intelligence"]
        },
        {
            week: "Week 3",
            focus: "Digital Firewall",
            sessions: ["Breaking Social Media Slavery", "Cyber-Ethics", "Mental Health & Peace"]
        },
        {
            week: "Week 4",
            focus: "Legacy & Success",
            sessions: ["The Final Logout (Death)", "Tech Skills as Sadaqah-e-Jariya", "Permanent Commitment"]
        }
    ];

    const phases = [
        {
            title: "Phase 1: RESET (Days 1–7)",
            subtitle: '"Finding Home"',
            goal: "System Diagnosis and Emotional Connection.",
            highlights: "Discover why you feel lost and meet the Allah who hasn't given up on you.",
            action: "Lazy-proof step: 5 minutes of silent reflection after Isha."
        },
        {
            title: "Phase 2: CONNECTION (Days 8–15)",
            subtitle: '"Talking to Him"',
            goal: "Fixing internal \"Bugs\" and Sincerity.",
            highlights: "Find peace in Sujood and learn to talk to Allah like a friend.",
            action: "Lazy-proof step: Make one Du'a in your own language today."
        },
        {
            title: "Phase 3: PURGE (Days 16–23)",
            subtitle: '"The Deep Clean"',
            goal: "Modern World & Relationship Interface.",
            highlights: "Gently managing ego, jealousy, and social media addiction without using fear.",
            action: "Lazy-proof step: Unfollow one account that makes you feel inferior."
        },
        {
            title: "Phase 4: DIRECTION (Days 24–30)",
            subtitle: '"The New You"',
            goal: "Long-term Deployment & Success.",
            highlights: "Build habits that LAST and learn to raise a family in today's digital world.",
            action: "Lazy-proof step: Set a 'no-phone zone' for 30 minutes daily."
        }
    ];

    const filteredCurriculum = curriculum.filter(item =>
        item.week.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.focus.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sessions.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const handleEnroll = () => {
        addToCart("Ramadan Reset");
        toast({
            title: "Added to Cart",
            description: "Ramadan Reset has been added to your cart. Redirecting to checkout...",
        });
        setTimeout(() => navigate("/cart"), 1000);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-poppins selection:bg-blue-600 selection:text-white overflow-x-hidden">
            <Helmet>
                <title>Best Islamic Spiritual Journey | Ramadan Reset 2026 | Neotech Solutions</title>
                <meta name="description" content="Join the best 30-day Islamic spiritual journey. Ramadan Reset 2026 at Neotech Solutions offers a unique path back to yourself through the Qur’an and Sunnah." />
                <meta name="keywords" content="best islamic course ramadan, ramadan reset 2026, spiritual connection course, neotech solutions ramadan, islamic education for professionals" />
            </Helmet>



            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
                {/* Abstract Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

                {/* Spiritual subtle radial blur */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 mb-10 bg-white border border-slate-200 px-5 py-2.5 rounded-full text-slate-800 font-bold shadow-sm animate-fade-in transition-all hover:border-blue-600/30">
                        <Moon className="w-4 h-4 text-blue-900 fill-blue-600" />
                        <span className="text-xs tracking-widest uppercase">Ramadan 2026 Special</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-slate-900 mb-10 leading-[1] tracking-tight">
                        A Journey <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-800 italic pr-2">Back to Yourself</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-slate-600 max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
                        This isn't just a course. It's a sanctuary for the modern professional. <br className="hidden md:block" />
                        Bridge the gap between digital chaos and <span className="text-blue-900 font-bold">timeless peace</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <Button
                            onClick={handleEnroll}
                            size="lg"
                            className="group bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] px-12 py-9 text-2xl h-auto shadow-[0_20px_50px_rgba(37,99,235,0.25)] transition-all hover:scale-105 active:scale-95"
                        >
                            Secure Your Seat
                            <ShoppingCart className="ml-3 w-7 h-7 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <div className="flex flex-col items-start gap-1 p-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/60">
                            <div className="flex items-center gap-2 text-slate-900 font-black text-2xl tracking-tighter">
                                <span className="text-blue-900">{formatPrice(25, 10)}</span>
                                <span className="text-slate-400 font-medium text-base line-through">{formatPrice(99, 1999)}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-blue-900 text-xs font-black uppercase tracking-widest">
                                <Sparkles className="w-4 h-4 animate-pulse" />
                                <span>Limited Community Seats</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium USPs Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 lg:gap-10">
                        <div className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-[5rem] -mr-10 -mt-10" />
                            <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 text-blue-900 group-hover:scale-110 transition-transform">
                                <Zap className="w-9 h-9" />
                            </div>
                            <h3 className="text-2xl font-extrabold mb-4 text-slate-900 tracking-tight">The First of Its Kind</h3>
                            <p className="text-slate-500 leading-relaxed font-medium">A specialized Islamic curriculum architected for the modern Muslim tech professional, bridging deen and dunya.</p>
                        </div>

                        <div className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100/50 rounded-bl-[5rem] -mr-10 -mt-10" />
                            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-8 text-slate-900 group-hover:scale-110 transition-transform font-black">
                                <EyeOff className="w-9 h-9" />
                            </div>
                            <h3 className="text-2xl font-extrabold mb-4 text-slate-900 tracking-tight">Total Stealth Mode</h3>
                            <p className="text-slate-500 leading-relaxed font-medium">Maintain absolute privacy with optional camera and interaction. High-value learning without any social pressure.</p>
                        </div>

                        <div className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-[5rem] -mr-10 -mt-10" />
                            <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-8 text-rose-600 group-hover:scale-110 transition-transform">
                                <ShieldAlert className="w-9 h-9" />
                            </div>
                            <h3 className="text-2xl font-extrabold mb-4 text-slate-900 tracking-tight">Zero Label Zone</h3>
                            <p className="text-slate-500 leading-relaxed font-medium">Purely focused on the Qur’an and Sunnah. No sectarian agendas or exhaustive debates—just pure connection.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] -z-0" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <Badge className="bg-blue-600/20 text-blue-900 border-none mb-4">The Roadmap</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">The 4-Phase Soul Reset</h2>
                        <p className="text-slate-400 max-w-xl mx-auto">A data-driven yet spiritual approach to debugging your life and optimizing your soul.</p>
                    </div>

                    <div className="max-w-5xl mx-auto relative px-6 md:px-0">
                        {/* Desktop Vertical Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-600/20 to-transparent -translate-x-1/2 hidden md:block" />

                        {phases.map((phase, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center gap-12 mb-20 md:mb-32 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Desktop Timeline Dot */}
                                <div className="absolute left-1/2 w-10 h-10 bg-slate-900 rounded-full border-2 border-blue-600 -translate-x-1/2 items-center justify-center hidden md:flex z-20 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
                                </div>

                                <div className="md:w-1/2 w-full">
                                    <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-600/40 transition-all shadow-2xl group flex flex-col items-center md:items-start text-center md:text-left">
                                        <div className="flex items-center justify-between w-full mb-6">
                                            <span className="text-blue-500 font-black tracking-[0.2em] text-[10px] uppercase">{phase.title.split(':')[0]}</span>
                                            <Badge variant="outline" className="text-blue-400 border-blue-400/30 font-bold uppercase tracking-tighter">{phase.title.split(':')[1].trim()}</Badge>
                                        </div>
                                        <h3 className="text-3xl font-extrabold mb-6 text-white tracking-tight">{phase.subtitle}</h3>
                                        <div className="space-y-5 mb-10 w-full">
                                            <div className="flex gap-4 items-start">
                                                <div className="mt-1 flex-shrink-0"><CheckCircle2 className="w-5 h-5 text-blue-500" /></div>
                                                <p className="text-slate-300 text-sm leading-relaxed font-medium"><span className="text-white font-black">Mission:</span> {phase.goal}</p>
                                            </div>
                                            <div className="flex gap-4 items-start">
                                                <div className="mt-1 flex-shrink-0"><Star className="w-5 h-5 text-blue-500 fill-blue-500/20" /></div>
                                                <p className="text-slate-400 text-sm italic font-medium">{phase.highlights}</p>
                                            </div>
                                        </div>
                                        <div className="w-full bg-blue-600/10 border border-blue-600/20 p-5 rounded-2xl flex items-center gap-4 group-hover:bg-blue-600/20 transition-colors">
                                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                                <Sparkles className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.15em]">Daily Protocol</p>
                                                <p className="text-sm font-bold text-white leading-tight">{phase.action}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/2 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="py-24 bg-white relative">
                {/* Decorative Pattern Section */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent" />

                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">Inside the Journey</h2>
                            <div className="relative max-w-xl mx-auto">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
                                <Input
                                    placeholder="Search topics (e.g. Tauba, Cyber-Ethics, Success)"
                                    className="pl-12 py-7 rounded-2xl border-slate-200 focus:border-blue-600 text-lg shadow-sm"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            {filteredCurriculum.map((week, idx) => (
                                <Accordion key={idx} type="single" collapsible className="w-full">
                                    <AccordionItem value={`week-${idx}`} className="border rounded-[2rem] px-8 bg-slate-50 border-slate-100 overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all">
                                        <AccordionTrigger className="hover:no-underline py-8">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left gap-4">
                                                <div>
                                                    <span className="text-blue-900 font-black text-xs uppercase tracking-[0.2em] mb-1 block">{week.week}</span>
                                                    <h3 className="text-2xl font-bold text-slate-800">{week.focus}</h3>
                                                </div>
                                                <div className="hidden md:flex items-center gap-2">
                                                    <Badge className="bg-blue-600 text-blue-900 hover:bg-blue-600 border-none uppercase tracking-tighter px-3">Live Sessions</Badge>
                                                </div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-10">
                                            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
                                                {week.sessions.map((session, sidx) => (
                                                    <div key={sidx} className="flex flex-col gap-4 p-5 rounded-2xl bg-white border border-slate-100 hover:border-blue-600/20 transition-all hover:translate-y-[-2px]">
                                                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                                            <Moon className="w-5 h-5 text-blue-900" />
                                                        </div>
                                                        <p className="font-bold text-slate-800 leading-tight">{session}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Commitment Fee Card Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-center text-white shadow-2xl">
                        {/* Decorative BG Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
                        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
                        <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]" />

                        <div className="relative z-10">
                            <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl shadow-blue-600/20">
                                <Lock className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Why the Commitment Fee?</h2>
                            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                                We charge a minimal, <span className="text-white font-black underline decoration-blue-500 decoration-4 underline-offset-8">non-profit fee of {formatPrice(25, 10)}</span> because "free knowledge is rarely valued." This is your skin in the game—a promise to yourself and to the community.
                            </p>

                            <div className="inline-block bg-white/[0.03] backdrop-blur-xl rounded-[2rem] p-10 border border-white/10 mb-16 shadow-inner">
                                <div className="text-6xl md:text-7xl font-black mb-4 tracking-tighter text-blue-500 italic">{formatPrice(25, 10)}</div>
                                <p className="text-slate-500 uppercase tracking-[0.2em] text-[10px] font-black">Lifetime Access • Technical Infrastructure • Non-profit</p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Button
                                    onClick={handleEnroll}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-black px-12 py-8 rounded-[2rem] text-xl h-auto transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(37,99,235,0.3)]"
                                >
                                    Join the Community
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Heart-to-Heart Section */}
            <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <MessageSquareHeart className="w-20 h-20 mx-auto mb-10 text-blue-500 drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-10 leading-tight tracking-tight">One Final Question</h2>
                        <div className="space-y-8 text-xl md:text-3xl font-light text-slate-300 leading-relaxed mb-16">
                            <p>"This Ramadan will end."</p>
                            <p>Will you return to the <span className="text-white font-medium italic underline decoration-blue-500 decoration-4">same distractions</span>, or will you take <span className="text-blue-400 font-bold">ONE step back to Allah</span>?</p>
                            <p className="text-lg md:text-xl text-slate-400">If your heart felt something while reading this... <br /> you already know the answer.</p>
                        </div>

                        <Button
                            onClick={handleEnroll}
                            size="lg"
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black rounded-[2rem] px-16 py-10 text-2xl h-auto shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-all hover:scale-105"
                        >
                            I Want to Try
                            <ArrowRight className="ml-4 w-8 h-8" />
                        </Button>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default RamadanReset;
