import React, { useEffect } from 'react';
import { Search } from 'lucide-react'
import { useCategoryFilter, useSearchStore } from "../../store/store.ts"
import staticBlogs from "@/data/blogs.json";



const BlogHero = () => {
    const searchTerm = useSearchStore((state: any) => state.searchTerm);
    const setSearchTerm = useSearchStore((state: any) => state.setSearchTerm);
    const categories = useCategoryFilter((state: any) => state.categories);
    const setCategories = useCategoryFilter((state: any) => state.setCategories);
    const selectedCategory = useCategoryFilter((state: any) => state.selectedCategory);
    const setSelectedCategory = useCategoryFilter((state: any) => state.setSelectedCategory);

    const handleSearch = (e) => {
        let searchValue = e.target.value
        setSearchTerm(searchValue)
        // console.log(searchTerm)
    }
    const handleFilter = (cat) => {
        if (cat === "All") {
            cat = ""
        }
        setSelectedCategory(cat)
    }
    React.useEffect(() => {
        const fetchCategories = () => {
            try {
                const blogs = Array.isArray(staticBlogs) ? staticBlogs : (staticBlogs as any)?.data || [];
                const filterCategory = blogs.reduce((acc: string[], blog: any) => {
                    if (blog.category && !acc.includes(blog.category)) {
                        acc.push(blog.category)
                    }
                    return acc
                }, ["All"]);
                setCategories(filterCategory);
            } catch (err) {
                console.warn("Fetch categories failed, using default:", err);
                // Ensure we at least have "All" if fetch fails
                setCategories(["All"]);
            }
        };
        fetchCategories();
    }, []);
    return (
        <section className="relative overflow-hidden bg-slate-50 pt-32 pb-16">
            {/* Elegant Background Decor */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />

            <div className='max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10'>
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                        <span className="text-xs font-bold text-slate-800 tracking-widest uppercase">Neotech Knowledge Hub</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tighter">
                        Stay Ahead with <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Insights That Matter</span>
                    </h1>
                    <p className='text-lg md:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto'>
                        Explore expert perspectives, trends, and strategies shaping the future of digital innovation and branding.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Search Bar Optimization */}
                    <div className="group relative w-full h-16 mb-10 transition-all duration-300">
                        <span className='absolute inset-y-0 left-0 flex items-center pl-6 z-20'>
                            <Search className='h-6 w-6 text-slate-400 group-focus-within:text-blue-900 transition-colors' />
                        </span>
                        <input
                            onChange={handleSearch}
                            value={searchTerm}
                            type="text"
                            className='w-full h-full bg-white border border-slate-200 rounded-2xl pl-16 pr-6 text-slate-900 placeholder:text-slate-400 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:border-blue-200'
                            placeholder='Search expert articles...'
                        />
                    </div>

                    {/* Dynamic Category Pills */}
                    <div className='flex items-center justify-center flex-wrap gap-3'>
                        {categories.map((category, index) => (
                            <button
                                onClick={() => handleFilter(category)}
                                key={index}
                                className={`px-6 py-2.5 text-xs md:text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 border-2 ${(selectedCategory === category || (selectedCategory === "" && category === "All"))
                                    ? "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-900/20"
                                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 shadow-sm"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogHero
