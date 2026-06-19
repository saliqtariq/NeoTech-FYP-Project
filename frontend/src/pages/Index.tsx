import PricingSection from "@/components/Pakge"
import HeroSection from "@/components/HeroSection"
import TrainingSection from "@/components/TrainingSection"
import CertificatesSection from "@/components/CertificatesSection"
import CoursesSection from "@/components/CoursesSection"
import FAQSection from "@/components/AskQuestions"
import Coursess from "@/components/Coure"
import CareerSection from "@/components/Invest"
import TestimonialsSection from "@/components/TestimonialsSection"
import DemoCTA from "@/components/DemoCTA"

import { Helmet } from 'react-helmet-async';
import { themeConfig } from "@/config/themeConfig";


const Index = () => {
  // Define SEO Metadata for the Homepage
  const pageTitle = "Best Tech Education Institute & Top Software Development Company in Pakistan | Neotech Solutions";
  const pageDescription = "Looking for the best tech institute? Neotech Solutions offers trending courses in MERN Stack, AI, Data Science, & DevOps. We are also a top software development company in Pakistan providing premium web, mobile, and AI solutions.";
  const pageKeywords = "best tech institute Pakistan, top software development company, trending IT courses, Neotech Solutions, MERN stack, AI courses, Data Science, Cybersecurity, Digital Marketing, DevOps, web development, mobile app development, IT training Lahore";
  const pageUrl = "https://www.neotechsolution.com/";
  // Define the SEO Image URL (from your previous instruction)
  const seoImageUrl = "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg";


  // Define Schema.org Markup for WebSite and Organization
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Neotech Solutions",
    "url": pageUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${pageUrl}search?q={search_term_string}`, // Replace with your actual search page if exists
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Neotech Solutions",
    "url": pageUrl,
    "logo": "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg", // Replace with your actual logo URL
    "description": "Neotech Solutions is a premier Institute of Technology and Software Company, dedicated to empowering individuals with cutting-edge technology skills and providing innovative software solutions that drive growth and success in the digital age.",
    "sameAs": [
      "https://www.facebook.com/NeotechSolutions", // Replace with your actual Facebook page
      "https://twitter.com/NeotechSolutions",    // Replace with your actual Twitter page
      "https://www.linkedin.com/in/neotech-solutions-825360350" // Replace with your actual LinkedIn page
      // Add more social media links as applicable
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+92-335-8746804",
        "contactType": "customer service",
        "areaServed": "PK",
        "availableLanguage": "en"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+92-335-8746804",
        "contactType": "customer service",
        "areaServed": "PK",
        "availableLanguage": "en"
      },
      {
        "@type": "ContactPoint",
        "email": "contact@neotechsolution.com",
        "contactType": "customer service"
      },
      {
        "@type": "ContactPoint",
        "email": "support@neotechsolution.com",
        "contactType": "customer service"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Avenue, Software Park, Sector 5, Lahore, Pakistan",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "postalCode": "00000",
      "addressCountry": "PK"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ]
  };

  // Define Schema.org Markup for Testimonials Section (from the provided artifact)
  const testimonialsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Student & Client Testimonials for Neotech Solutions",
    "description": "Hear what our students and clients say about Neotech Solutions' transformative tech education and professional software development services.",
    "url": `${pageUrl}`, // Use pageUrl and fragment for section
    "publisher": {
      "@type": "Organization",
      "name": "Neotech Solutions",
      "url": pageUrl,
      "logo": seoImageUrl // Using the centralized SEO image URL
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Neotech Solutions",
      "url": pageUrl,
      "logo": seoImageUrl, // Using the centralized SEO image URL
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.0",
        "reviewCount": "4"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ahmad Hassan"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4",
            "bestRating": "5",
            "worstRating": "1"
          },
          "itemReviewed": {
            "@type": "Organization",
            "name": "Neotech Solutions",
            "url": pageUrl // Using the pageUrl
          },
          "reviewBody": "Neotech Solutions transformed my career. The MERN stack course was comprehensive and the instructors were amazing.",
          "datePublished": "2023-01-01"
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Fatima Ali"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4",
            "bestRating": "5",
            "worstRating": "1"
          },
          "itemReviewed": {
            "@type": "Organization",
            "name": "Neotech Solutions",
            "url": pageUrl // Using the pageUrl
          },
          "reviewBody": "The Data Analyst course at Neotech gave me practical skills that I use every day in my job. The hands-on projects were invaluable.",
          "datePublished": "2023-01-01"
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sarah Khan"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "itemReviewed": {
            "@type": "Organization",
            "name": "Neotech Solutions",
            "url": pageUrl // Using the pageUrl
          },
          "reviewBody": "The AI course exceeded my expectations. The depth of knowledge and practical applications helped me land my dream job in machine learning.",
          "datePublished": "2023-01-01"
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "TechStart Inc."
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "3",
            "bestRating": "5",
            "worstRating": "1"
          },
          "itemReviewed": {
            "@type": "Organization",
            "name": "Neotech Solutions",
            "url": pageUrl // Using the pageUrl
          },
          "reviewBody": "Neotech Solutions delivered our web application on time and within budget. Their team's expertise and communication made the entire process smooth.",
          "datePublished": "2023-01-01"
        }
      ]
    }
  };

  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Neotech Solutions Educational Courses",
    "description": "Industry-leading courses designed by experts to prepare students for the future of technology, covering MERN Stack, Data Analysis, AI, and Data Science.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Course",
          "name": "MERN Full Stack Development",
          "description": "Master MongoDB, Express.js, React, and Node.js to become a complete full-stack developer.",
          "url": "https://www.neotechsolution.com/courses/mern-full-stack-development",
          "provider": {
            "@type": "Organization",
            "name": "Neotech Solutions",
            "url": "https://www.neotechsolution.com",
            "logo": "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg"
          },
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "duration": "P6M",
            "numberOfStudents": 560,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "Unknown"
            }
          },
          "image": "https://tse4.mm.bing.net/th?id=OIP.cyWP42AU_lRSdlek7FUlsQHaEf&pid=Api&P=0&h=220",
          "audience": {
            "@type": "Audience",
            "audienceType": "Intermediate"
          },
          "learningResourceType": "Full Stack Development Course",
          "educationalCredentialAwarded": "Certificate of Completion",
          "keywords": "MERN Stack, MongoDB, Express.js, React, Node.js, full-stack development, web development course"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Course",
          "name": "Data Analyst",
          "description": "Learn Python, Power BI, SQL, and data visualization tools to become a professional data analyst.",
          "url": "https://www.neotechsolution.com/courses/data-analyst",
          "provider": {
            "@type": "Organization",
            "name": "Neotech Solutions",
            "url": "https://www.neotechsolution.com",
            "logo": "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg"
          },
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "duration": "P3M",
            "numberOfStudents": 285,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "reviewCount": "Unknown"
            }
          },
          "image": "https://tse3.mm.bing.net/th?id=OIP.i538oI5MqXFCVWAT0a3NfwHaHa&pid=Api&P=0&h=220",
          "audience": {
            "@type": "Audience",
            "audienceType": "Beginner"
          },
          "learningResourceType": "Data Analyst Course",
          "educationalCredentialAwarded": "Certificate of Completion",
          "keywords": "Data Analyst, Python, Power BI, SQL, data visualization, data analysis course"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Course",
          "name": "AI With Machine Learning",
          "description": "Focus on machine learning algorithms, data preprocessing, and model deployment.",
          "url": "https://www.neotechsolution.com/courses/ai-machine-learning",
          "provider": {
            "@type": "Organization",
            "name": "Neotech Solutions",
            "url": "https://www.neotechsolution.com",
            "logo": "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg"
          },
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "duration": "P3M",
            "numberOfStudents": 90,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "Unknown"
            }
          },
          "image": "https://logicmojo.com/assets/dist/new_pages/images/AIandMLintro.jpg",
          "audience": {
            "@type": "Audience",
            "audienceType": "Intermediate"
          },
          "learningResourceType": "AI and Machine Learning Course",
          "educationalCredentialAwarded": "Certificate of Completion",
          "keywords": "AI, Artificial Intelligence, Machine Learning, ML, Deep Learning, AI course, machine learning algorithms"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Course",
          "name": "Data Science",
          "description": "Learn data collection, preprocessing, statistical analysis, visualization, and model deployment for real-world data projects.",
          "url": "https://www.neotechsolution.com/courses/data-science",
          "provider": {
            "@type": "Organization",
            "name": "Neotech Solutions",
            "url": "https://www.neotechsolution.com",
            "logo": "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg"
          },
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "duration": "P3M",
            "numberOfStudents": 90,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "Unknown"
            }
          },
          "image": "/DS.png",
          "audience": {
            "@type": "Audience",
            "audienceType": "Intermediate"
          },
          "learningResourceType": "Data Science Course",
          "educationalCredentialAwarded": "Certificate of Completion",
          "keywords": "Data Science, data collection, statistical analysis, data visualization, data projects, data science course"
        }
      }
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Neotech Solutions Software Services",
    "description": "We deliver cutting-edge software solutions including web development, mobile app development, UI/UX design, and digital marketing to help businesses thrive.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Custom web applications built with modern technologies like React, Node.js, and cloud platforms. Features: Responsive Design, Performance Optimized, SEO Ready.",
          "url": "https://www.neotechsolution.com/services/web-development",
          "serviceType": "Web Development",
          "provider": {
            "@type": "Organization",
            "name": "Neotech Solutions",
            "url": "https://www.neotechsolution.com",
            "logo": "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg"
          },
          "image": "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg",
          "areaServed": {
            "@type": "Country",
            "name": "Pakistan"
          },
          "keywords": "web development, custom web apps, React, Node.js, cloud platforms, responsive design, SEO ready"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Course",
          "name": "Mobile App Development",
          "description": "Native and cross-platform mobile applications for iOS and Android platforms. Features: React Native, Flutter, Native iOS/Android.",
          "url": "https://www.neotechsolution.com/services/mobile-app-development",
          "serviceType": "Mobile App Development",
          "provider": {
            "@type": "Organization",
            "name": "Neotech Solutions",
            "url": "https://www.neotechsolution.com",
            "logo": "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg"
          },
          "image": "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg",
          "areaServed": {
            "@type": "Country",
            "name": "Pakistan"
          },
          "keywords": "mobile app development, iOS apps, Android apps, React Native, Flutter, native performance"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "UI/UX Design",
          "description": "Beautiful, user-centered designs that enhance user experience and drive conversions. Features: User Research, Wireframing, Prototyping.",
          "url": "https://www.neotechsolution.com/services/ui-ux-design",
          "serviceType": "UI/UX Design",
          "provider": {
            "@type": "Organization",
            "name": "Neotech Solutions",
            "url": "https://www.neotechsolution.com",
            "logo": "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg"
          },
          "image": "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg",
          "areaServed": {
            "@type": "Country",
            "name": "Pakistan"
          },
          "keywords": "UI design, UX design, user experience, user interface, wireframing, prototyping, design systems"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Digital Marketing",
          "description": "Comprehensive digital marketing strategies to grow your online presence and reach. Features: SEO Optimization, Social Media, Content Strategy.",
          "url": "https://www.neotechsolution.com/services/digital-marketing",
          "serviceType": "Digital Marketing",
          "provider": {
            "@type": "Organization",
            "name": "Neotech Solutions",
            "url": "https://www.neotechsolution.com",
            "logo": "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg"
          },
          "image": "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg",
          "areaServed": {
            "@type": "Country",
            "name": "Pakistan"
          },
          "keywords": "digital marketing, SEO, search engine optimization, social media marketing, content strategy, online presence"
        }
      }
    ]
  }



  return (
    <div className="min-h-screen font-poppins">
      <Helmet>
        {/* Page Title: Essential for SEO and browser tabs */}
        <title>{pageTitle}</title>

        {/* Meta Description: A brief summary for search engine results */}
        <meta name="description" content={pageDescription} />

        {/* Keywords: Provide context to search engines (less critical but still useful) */}
        <meta name="keywords" content={pageKeywords} />

        {/* Canonical URL: Prevents duplicate content issues */}
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph Tags for Social Media Sharing (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg" /> {/* Replace with a high-quality banner image for sharing */}
        <meta property="og:site_name" content="Neotech Solutions" />

        {/* Twitter Card Tags for Twitter Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg" /> {/* Replace with a high-quality banner image for sharing */}

        {/* Schema Markup for WebSite */}
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>

        {/* Schema Markup for Organization */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        {/* Schema Markup for Testimonials Section */}
        <script type="application/ld+json">
          {JSON.stringify(testimonialsSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(coursesSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <HeroSection />
      <DemoCTA />
      <Coursess />
      <TrainingSection />
      <CareerSection />
      <CoursesSection />
      <CertificatesSection />
      <PricingSection />
      <FAQSection />
      <TestimonialsSection />
    </div>
  );
};

export default Index;
