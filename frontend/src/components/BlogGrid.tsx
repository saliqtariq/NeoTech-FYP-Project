import React from 'react';
import staticBlogs from '@/data/blogs.json';
import { Link } from 'react-router-dom';
import { useSearchStore, useCategoryFilter } from '../../store/store';

const BlogGrid = () => {
    const searchTerm = useSearchStore((state: any) => state.searchTerm);
    const selectedCategory = useCategoryFilter((state: any) => state.selectedCategory);
    const [blogData, setBlogData] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchBlogs = () => {
            try {
                const blogs = Array.isArray(staticBlogs) ? staticBlogs : (staticBlogs?.data || []);
                setBlogData(blogs);
            } catch (err) {
                console.error("Fetch blogs error:", err);
                setBlogData([]);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    const filteredData = (Array.isArray(blogData) ? blogData : []).filter(blog => {
        if (!blog) return false;

        const title = blog.title || "";
        const category = blog.category || "";

        let searchFilter = title.toLowerCase().includes(searchTerm.toLowerCase());
        let categoriesFilter = category.toLowerCase().includes(selectedCategory.toLowerCase());
        return searchFilter && categoriesFilter;
    });

    if (loading) {
        return (
            <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (filteredData.length === 0) {
        return <p className="text-center text-xl py-20 text-slate-400">No blogs match your search</p>
    }

    return (
        <section className={"py-16 bg-slate-50"}>
            <div className={"max-w-[1400px] mx-auto px-6 lg:px-12"}>
                <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredData.map((data: any) => (
                        <Link key={data._id} to={`/blogs/${data.slug.toLowerCase()}`} className="flex h-full group">
                            <div
                                className="w-full flex flex-col relative transition-all duration-500 rounded-[2rem] overflow-hidden bg-white hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)] border border-slate-200/60 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2"
                            >
                                {/* Image section with Minimal Overlay */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 m-2 rounded-[1.5rem]">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                                    <img
                                        src={data.featuredImage.url}
                                        alt={data.featuredImage.altText}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Reading Time Badge */}
                                    <div className="absolute top-3 left-3 z-20 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                                        {data.readTime} MIN READ
                                    </div>
                                </div>

                                {/* Content section */}
                                <div className="flex flex-col flex-grow p-6 pt-4 relative z-20">
                                    {/* Category & Date */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md">
                                            {data.category}
                                        </span>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                            {new Date(data.publishDate).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>

                                    {/* Title - High Contrast Black */}
                                    <h3 className="text-xl font-bold mb-3 text-slate-900 leading-[1.3] group-hover:text-blue-900 transition-colors line-clamp-2">
                                        {data.title}
                                    </h3>

                                    {/* Description - Readable Black */}
                                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6 font-medium">
                                        {data.metaDescription}
                                    </p>

                                    {/* Author Footer */}
                                    <div className="mt-auto pt-5 flex items-center gap-3 border-t border-slate-100">
                                        <div className="h-9 w-9 rounded-full overflow-hidden border border-slate-200 shadow-sm bg-white p-1 flex-shrink-0 group-hover:border-blue-200 transition-colors">
                                            <img
                                                src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg"
                                                alt="Neotech Author"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-slate-900 font-bold leading-none mb-0.5 group-hover:text-blue-900">{data.author}</span>
                                            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Verified Insights</span>
                                        </div>
                                        <div className="ml-auto text-slate-300 transform group-hover:translate-x-1 group-hover:text-blue-900 transition-all duration-300">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14m-7-7 7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </article>
            </div>
        </section>
    );
};

export default BlogGrid;
