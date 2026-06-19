import { useState, useEffect } from "react";
import staticCourses from "@/data/courses.json";
import { client, urlFor } from "@/lib/sanity";

// List of course slugs that have dedicated static pages in App.tsx
const IMPLEMENTED_STATIC_PAGES = [
    "data-analyst-professional",
    "mern-full-stack-development",
    "cybersecurity-ethical-hacking",
    "full-stack-ai-ml-dl",
    "devops-engineering",
    "ui-ux-design",
    "spoken-english-mastery"
];

const formattedStaticCourses = staticCourses.map((c: any) => {
    const hasStaticPage = c.slug && IMPLEMENTED_STATIC_PAGES.includes(c.slug);
    return {
        ...c,
        id: c._id,
        image: c.thumbnail || "https://via.placeholder.com/800x450/ECFDF5/065F46?text=Course+Image",
        url: hasStaticPage ? `/${c.slug}` : `/course-outline/${c._id}`
    };
});

export const useCourses = () => {
    const [courses, setCourses] = useState<any[]>(formattedStaticCourses);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const sanityCourses = await client.fetch(`*[_type == "course"]{
                  ...,
                  "certificate": *[_type == "certificate" && course._ref == ^._id][0].image
                }`);
                
                const formattedSanityCourses = sanityCourses.map((c: any) => {
                    const slugStr = c.slug?.current || '';
                    const hasStaticPage = IMPLEMENTED_STATIC_PAGES.includes(slugStr);
                    return {
                        _id: c._id,
                        id: c._id,
                        title: c.title,
                        description: c.description,
                        duration: c.duration,
                        students: c.students,
                        modules: c.modules,
                        projects: c.projects,
                        skills: c.skills || [],
                        priceUSD: c.priceUSD,
                        pricePKR: c.pricePKR,
                        level: c.level,
                        isRamadan: c.isRamadan || false,
                        rating: c.rating,
                        slug: slugStr,
                        thumbnail: c.thumbnail ? urlFor(c.thumbnail).url() : undefined,
                        image: c.thumbnail ? urlFor(c.thumbnail).url() : "https://via.placeholder.com/800x450/ECFDF5/065F46?text=Course+Image",
                        certificateImage: c.certificate ? urlFor(c.certificate).url() : null,
                        url: hasStaticPage ? `/${slugStr}` : `/course-outline/${c._id}`
                    };
                });

                // Merge: combine Sanity and static courses. Sanity data overrides static if titles match.
                const combined = [...formattedSanityCourses];
                for (const sc of formattedStaticCourses) {
                   if (!formattedSanityCourses.find((fc: any) => fc.title === sc.title || fc.slug === sc.slug)) {
                       combined.push(sc);
                   }
                }
                
                setCourses(combined);
            } catch (err) {
                console.error("Failed to fetch Sanity courses:", err);
                setCourses(formattedStaticCourses);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const findCourse = (identifier: string) => {
        const lowerId = identifier.toLowerCase();
        return courses.find(c => 
            c.title.toLowerCase().includes(lowerId) || 
            (c.slug && c.slug.toLowerCase().includes(lowerId)) ||
            c._id === identifier
        );
    };

    return { courses, loading, error, findCourse };
};
