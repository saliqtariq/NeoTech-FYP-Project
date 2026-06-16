import React from 'react';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from "react-markdown"
import staticBlogs from '@/data/blogs.json';
import { Helmet } from 'react-helmet-async';

interface FeaturedImageProps {
    url: string;
    altText: string;
}

interface Blog {
    id: number;
    title: string;
    slug: string;
    metaDescription: string;
    featuredImage: FeaturedImageProps;
    content: string;
    keywords: string[];
    publishDate: string;
    author: string;
    category: string;
    readTime: number;
}

function Navigation() {
    return (
        <section className="">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link to={"/blogs"}>
                        <div className="flex cursor-pointer items-center gap-2 text-slate-900 hover:text-slate-500 transition-colors">
                            <ArrowLeft size={18} />
                            <span className="text-sm">Back to Blog</span>
                        </div>
                    </Link>
                    <div className="flex gap-3">
                        <ActionButton icon={<Share2 size={18} />} />
                        <ActionButton icon={<Bookmark size={18} />} />
                    </div>
                </div>
            </div>
        </section>
    );
}

// Action Button Component
function ActionButton({ icon }: { icon: React.ReactNode }) {
    return (
        <button className="p-2 rounded-lg bg-[#0F1629] border border-[#1E293B] text-slate-300 hover:bg-[#1E293B] hover:border-[#334155] transition-all">
            {icon}
        </button>
    );
}

// Category Badge Component
function CategoryBadge({ category }: { category: string }) {
    return (
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-widest shadow-sm border border-blue-100">
            {category}
        </span>
    );
}

// Article Header Component
function ArticleHeader({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-slate-900 tracking-tight">
                {title}
            </h1>
            <div className="flex items-start gap-6 border-l-4 border-blue-600 pl-6 py-2">
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}

// Meta Info Component
function MetaInfo({ publishDate, readTime }: { publishDate: string; readTime: number }) {
    return (
        <div className="flex flex-wrap gap-6 text-slate-500 font-bold text-xs uppercase tracking-widest">
            <MetaItem icon={<Calendar size={16} className="text-blue-900" />} text={publishDate} />
            <MetaItem icon={<Clock size={16} className="text-blue-900" />} text={`${readTime} MIN READ`} />
        </div>
    );
}

function MetaItem({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="flex items-center gap-2.5">
            {icon}
            <span className="hover:text-blue-900 transition-colors">{text}</span>
        </div>
    );
}

// Author Info Component
function AuthorInfo({ author }: { author: string }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border border-slate-200 shadow-sm bg-white p-1 flex-shrink-0">
                <img
                    src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg"
                    alt="Neotech Author"
                    className="w-full h-full object-contain"
                />
            </div>
            <div>
                <div className="font-extrabold text-slate-900 text-lg leading-none mb-1">{author}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Verified Contributor</div>
            </div>
        </div>
    );
}

// Featured Image Component
function FeaturedImage({ src, alt }: { src: FeaturedImageProps; alt: string }) {
    return (
        <div className="mb-16 rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] relative group">
            <img src={src.url} alt={alt} className="w-full max-h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-40" />
        </div>
    );
}

// Main Blog Post Page Component
export default function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>();
    const [blog, setBlog] = React.useState<Blog | null>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchBlog = () => {
            try {
                const blogsArray = Array.isArray(staticBlogs) ? staticBlogs : (staticBlogs as any)?.data || [];
                const foundBlog = blogsArray.find((b: any) => b.slug.toLowerCase() === slug?.toLowerCase());
                setBlog(foundBlog || null);
            } catch (err) {
                console.error("Fetch blog error:", err);
                setBlog(null);
            } finally {
                setLoading(false);
            }
        };
        if (slug) fetchBlog();
    }, [slug]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-slate-50">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-blue-600 border-slate-200"></div>
            </div>
        );
    }

    if (!blog) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-blue-600 selection:text-white">
            <Helmet>
                <title>{blog.title} | Neotech Solutions Blog</title>
                <meta name="description" content={blog.metaDescription} />
                <meta name="keywords" content={blog.keywords.join(", ")} />
                <meta property="og:title" content={blog.title} />
                <meta property="og:description" content={blog.metaDescription} />
                <meta property="og:image" content={blog.featuredImage.url} />
                <link rel="canonical" href={`https://www.neotechsolution.com/blogs/${blog.slug}`} />
            </Helmet>

            <Navigation />

            <main className="max-w-4xl mx-auto px-6 py-16">
                <div className="mb-10 flex justify-center md:justify-start">
                    <CategoryBadge category={blog.category} />
                </div>

                <ArticleHeader title={blog.title} subtitle={blog.metaDescription} />

                <div className="flex flex-wrap gap-10 items-center justify-between pb-10 border-b border-slate-200 mb-12">
                    <AuthorInfo author={blog.author} />
                    <MetaInfo
                        publishDate={new Date(blog.publishDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                        })}
                        readTime={blog.readTime}
                    />
                </div>

                <FeaturedImage src={blog.featuredImage} alt={blog.title} />

                <div className='prose prose-lg md:prose-xl max-w-none prose-slate mx-auto mb-20 bg-white p-8 md:p-12 rounded-[2rem] border border-slate-200/60 shadow-sm'>
                    <ReactMarkdown>{blog.content}</ReactMarkdown>
                </div>

                {/* Overhauled Related Topics Section */}
                <div className="pt-16 border-t border-slate-200">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px flex-grow bg-slate-200" />
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">
                            Related Topics
                        </h3>
                        <div className="h-px flex-grow bg-slate-200" />
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {blog.keywords.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-5 py-2 rounded-full border border-slate-200 bg-white text-slate-600 text-[11px] font-bold uppercase tracking-wider hover:bg-slate-50 cursor-default transition-all duration-300 shadow-sm"
                            >
                                {tag.replace(/\s+/g, ' ')}
                            </span>
                        ))}
                    </div>
                </div>
            </main>

        </div>
    );
}
