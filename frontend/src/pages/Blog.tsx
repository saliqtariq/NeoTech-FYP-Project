import React from "react";
import BlogHero from "@/components/BlogHero";
import BlogGrid from "@/components/BlogGrid";
import { Helmet } from "react-helmet-async";


const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Neotech Solutions (Pvt. Ltd.)",
  "url": "https://www.neotechsolution.com",
  "logo": "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg",
  "description": "Neotech Solutions is a premier Institute of Technology and Software Company in Lahore, Pakistan.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Tech Avenue, Software Park, Sector 5, Lahore, Pakistan",
    "addressLocality": "Lahore",
    "addressRegion": "Punjab",
    "postalCode": "05477",
    "addressCountry": "PK"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+92-335-8746804",
    "contactType": "customer service",
    "email": "contact@neotechsolution.com"
  }
};

const BlogPage = () => {
  return (
    <div>
      <Helmet>
        <title>Latest Tech Insights & Tutorials | Neotech Solutions Blog</title>
        <meta
          name="description"
          content="Explore the Neotech Solutions blog for the latest trends in software development, tech education, and industry insights from our expert team in Lahore."
        />
        <link rel="canonical" href="https://www.neotechsolution.com/blogs" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>

      <BlogHero />
      <BlogGrid />

    </div>
  );
};

export default BlogPage;
