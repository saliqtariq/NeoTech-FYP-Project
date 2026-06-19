import React from "react";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhyChooseUsHero from "@/components/WhyNeotechHero";
import { Helmet } from "react-helmet-async";


const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Neotech Solutions (Pvt. Ltd.)",
  url: "https://www.neotechsolution.com",
  logo: "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg",
  description:
    "Neotech Solutions is a premier Institute of Technology and Software Company in Lahore, Pakistan.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Tech Avenue, Software Park, Sector 5, Lahore, Pakistan",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    postalCode: "00000",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-300-0000000",
    contactType: "customer service",
    email: "contact@neotechsolution.com",
  },
};

const WhyNeotechSolution = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-poppins">
      <Helmet>
        <title>Best Tech Institute & Top Software Company - Why Choose Neotech Solutions?</title>
        <meta
          name="description"
          content="Discover why Neotech Solutions is the best tech institute for trending training and a top software company for premium development. Our impact, expertise, and results set us apart."
        />
        <link
          rel="canonical"
          href="https://www.neotechsolution.com/why-neotech-solutions"
        />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <WhyChooseUsHero />
      <WhyChooseUs />

    </div>
  );
};

export default WhyNeotechSolution;
