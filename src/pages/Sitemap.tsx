import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import staticBlogs from "@/data/blogs.json";

interface Blog {
    _id: string;
    title: string;
    slug: string;
}

const SitemapPage = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const blogsArray = Array.isArray(staticBlogs) ? staticBlogs : (staticBlogs as any)?.data || [];
        setBlogs(blogsArray);
    }, []);

    const sections = [
        {
            heading: "Main Pages",
            links: [
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Our Services", to: "/services" },
                { label: "All Courses", to: "/courses" },
                { label: "Portfolio", to: "/portfolio" },
                { label: "Blog", to: "/blogs" },
                { label: "Contact Us", to: "/contact" },
                { label: "Free Demo", to: "/FreeDemo" },
                { label: "Why Neotech Solution", to: "/why-neotech-solutions" },
            ],
        },
        {
            heading: "Service Pages",
            links: [
                { label: "Web Development", to: "/WebDevelopmentServices" },
                { label: "AI Chatbot Integration", to: "/AIChatbotIntegration" },
                { label: "Data Analysis Services", to: "/DataAnalysisServices" },
                { label: "WordPress Development", to: "/WordPressDevelopment" },
                { label: "UI/UX Services", to: "/UIUXServices" },
                { label: "Cyber Security Services", to: "/CyberSecurityServices" },
            ],
        },
        {
            heading: "Course Pages",
            links: [
                { label: "MERN Stack Development", to: "/mern-full-stack-development" },
                { label: "Data Analysis Professional", to: "/data-analyst-professional" },
                { label: "Full Stack AI (ML + DL)", to: "/full-stack-ai-ml-dl" },
                { label: "Cybersecurity & Ethical Hacking", to: "/cybersecurity-ethical-hacking" },
                { label: "UI/UX Design", to: "/ui-ux-design" },
                { label: "DevOps Engineering", to: "/devops-engineering" },
                { label: "Ramadan Reset", to: "/ramadan-reset" },
            ],
        },
        {
            heading: "Course Outlines",
            links: [
                { label: "MERN Stack Outline", to: "/course-outline/688a66a3ac9a673940d21033" },
                { label: "Data Analysis Outline", to: "/course-outline/68a1d512e53f7ca805d296ae" },
                { label: "AI & ML Outline", to: "/course-outline/688b581e679c9e9bdb3da238" },
                { label: "Cybersecurity Outline", to: "/course-outline/689cadaae6771b1b06e8a478" },
                { label: "UI/UX Design Outline", to: "/course-outline/6949870e1765562d99b0a6be" },
                { label: "DevOps Engineering Outline", to: "/course-outline/694988021765562d99b0a6bf" },
            ],
        },
        {
            heading: "Legal Pages",
            links: [
                { label: "Privacy Policy", to: "/privacy" },
                { label: "Terms & Conditions", to: "/terms" },
                { label: "Refund Policy", to: "/refund-policy" },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-poppins relative">
            <Helmet>
                <title>Sitemap | Neotech Solutions</title>
                <meta
                    name="description"
                    content="Complete sitemap of Neotech Solutions — all pages, services, courses, outlines, blogs, and legal resources."
                />
                <link rel="canonical" href="https://www.neotechsolution.com/sitemap" />
            </Helmet>

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <main className="max-w-[1400px] mx-auto px-6 pt-32 pb-24 relative z-10">
                <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] p-10 md:p-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Neotech Solutions — <span className="text-blue-900">Full Sitemap</span>
                    </h1>
                    <p className="text-lg text-slate-500 mb-12 border-b border-slate-100 pb-8 font-medium">
                        A complete index of all pages on neotechsolution.com for browsers and search engines.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {sections.map((section) => (
                            <div key={section.heading} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:border-blue-200 hover:shadow-sm transition-all duration-300">
                                <h2 className="text-sm font-black uppercase tracking-widest text-blue-900 mb-5 border-b border-blue-600/20 pb-3 flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                                    {section.heading}
                                </h2>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.to}>
                                            <Link
                                                to={link.to}
                                                className="text-base text-slate-700 font-medium hover:text-blue-900 transition-colors flex items-center gap-2 group"
                                            >
                                                <span className="text-slate-300 group-hover:text-blue-900 transition-colors opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 duration-300">→</span>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Dynamic Blog Posts */}
                        {blogs.length > 0 && (
                            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:border-blue-200 hover:shadow-sm transition-all duration-300 lg:col-span-1">
                                <h2 className="text-sm font-black uppercase tracking-widest text-blue-900 mb-5 border-b border-blue-600/20 pb-3 flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                                    Blog Posts
                                </h2>
                                <ul className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                                    {blogs.map((blog) => (
                                        <li key={blog._id}>
                                            <Link
                                                to={`/blogs/${blog.slug}`}
                                                className="text-base text-slate-700 font-medium hover:text-blue-900 transition-colors line-clamp-2"
                                            >
                                                {blog.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </main>


        </div>
    );
};

export default SitemapPage;
