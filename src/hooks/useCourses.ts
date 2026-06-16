import { useState, useEffect } from "react";
import staticCourses from "@/data/courses.json";


// List of course slugs that have dedicated static pages in App.tsx
const IMPLEMENTED_STATIC_PAGES = [
    "data-analyst-professional",
    "mern-full-stack-development",
    "cybersecurity-ethical-hacking",
    "full-stack-ai-ml-dl",
    "devops-engineering",
    "ui-ux-design",
    "ramadan-reset",
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
    const [courses] = useState<any[]>(formattedStaticCourses);
    const [loading] = useState<boolean>(false);
    const [error] = useState<string | null>(null);

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

