import { useState, useEffect } from "react";
import staticCourses from "@/data/courses.json";
import { client, urlFor } from "@/lib/sanity";

// Hardcoded fallback for courses not yet in Sanity
const getStaticCertificateImage = (title: string) => {
  if (!title) return null;
  if (title.includes("Full Stack AI")) return "/FullstackaiCertificateupdated.png";
  if (title.includes("MERN")) return "/Mern stack certificate pic.png";
  if (title.includes("Cybersecurity")) return "/CyberSecurity & Ethical Hacking.png";
  if (title.includes("Data") || title.includes("Analysis")) return "/Data analysis professionls certificate.png";
  if (title.includes("UI") || title.includes("UX")) return "/UiUx Certificate.png";
  if (title.includes("DevOps")) return "/DevOps Certificate.png";
  if (title.includes("Spoken English") || title.includes("English")) return "/SpokenEnglishMasterycertificate.png";
  return null;
};

// Map static courses to certificates format
const staticCertificates = staticCourses
  .filter((c: any) => !c.title.toLowerCase().includes('ramadan reset'))
  .map((c: any) => ({
    id: c._id,
    title: c.title, // internal title
    courseName: c.title,
    courseInfo: c.description || c.title,
    certificateImage: getStaticCertificateImage(c.title),
  }));

export const useCertificates = () => {
    const [certificates, setCertificates] = useState<any[]>(staticCertificates);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCertificates = async () => {
            try {
                // Fetch from sanity
                const sanityCertificates = await client.fetch(`*[_type == "certificate"]`);
                
                const formattedSanityCerts = sanityCertificates.map((c: any) => {
                    return {
                        id: c._id,
                        title: c.title || c.courseName,
                        courseName: c.courseName,
                        courseInfo: c.courseInfo,
                        certificateImage: c.image ? urlFor(c.image).url() : null,
                    };
                });

                // Merge: combine Sanity and static certificates. Sanity data overrides static if titles match.
                const combined = [...formattedSanityCerts];
                for (const sc of staticCertificates) {
                   if (!formattedSanityCerts.find((fc: any) => fc.courseName === sc.courseName)) {
                       combined.push(sc);
                   }
                }
                
                setCertificates(combined);
            } catch (err) {
                console.error("Failed to fetch Sanity certificates:", err);
                setCertificates(staticCertificates);
                setError("Failed to load dynamic certificates.");
            } finally {
                setLoading(false);
            }
        };

        fetchCertificates();
    }, []);

    return { certificates, loading, error };
};
