import React, { useEffect } from "react"
import Faculty from "@/components/Uni"
import FAQSection from "@/components/AskQuestions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, BookOpen, Award, Loader2 } from "lucide-react"
import { Helmet } from "react-helmet-async" // Import Helmet for SEO
import { useNavigate } from "react-router-dom"
import { useCart } from "@/context/CartContext"
import { useCourses } from "@/hooks/useCourses"


const Courses = () => {
  const navigate = useNavigate()
  const { addToCart, isPakistan, locationLoading, formatPrice } = useCart()
  const { courses: fetchedCourses, loading: coursesLoading } = useCourses()
  const [showPrice, setShowPrice] = React.useState(true) // Always show price now

  const getUniversalImage = (image: string) => {
    if (!image) return "https://via.placeholder.com/800x450/ECFDF5/065F46?text=Course+Image";
    if (image.startsWith("http") || image.startsWith("https") || image.startsWith("/") || image.startsWith("data:")) {
      return image;
    }
    return `https://images.unsplash.com/${image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
  };

  const courses = isPakistan ? fetchedCourses : fetchedCourses.filter(c => !c.isRamadan);

  // Define SEO Metadata for the Courses page
  const pageTitle = "Best Tech Courses & Top IT Bootcamps in Pakistan | Neotech Solutions"
  const pageDescription =
    "Join the best tech institute for trending IT courses. Explore top MERN Stack, Data Science, AI, Cybersecurity, Digital Marketing, and DevOps bootcamps at Neotech Solutions."
  const pageKeywords =
    "best tech courses, top IT bootcamps Pakistan, trending IT courses, Neotech Solutions courses, MERN stack course, AI bootcamp, Cybersecurity course"
  const pageUrl = "https://www.neotechsolution.com/courses"

  // Schema Markup for the Courses page (CollectionPage)
  const courseCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    publisher: {
      "@type": "Organization",
      name: "Neotech Solutions",
      url: "https://www.neotechsolution.com",
      logo: "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg", // Placeholder
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: courses.map((course, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@context": "https://schema.org",
          "@type": "Course",
          name: course.title,
          description: String(course.description).replace(/\n/g, ""),
          url: `https://www.neotechsolution.com${course.url}`,
          provider: {
            "@type": "Organization",
            name: "Neotech Solutions",
            url: "https://www.neotechsolution.com",
          },
          image: getUniversalImage(course.image),
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "Online",
            timeRequired: course.duration ? `P${course.duration.split(" ")[0]}M` : '',
            instructor: {
              "@type": "Person",
              name: "Neotech Solutions Instructors",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: course.rating || "4.8",
              reviewCount: (course.students || "0").replace("+", ""),
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: course.priceUSD || "99",
              url: `https://www.neotechsolution.com/batches/${course.id}`,
              availability: "https://schema.org/InStock",
              validFrom: new Date().toISOString().split("T")[0],
            },
          },
          about: (course.skills || []).join(", "),
          educationalCredentialAwarded: "Certificate of Completion",
          learningResourceType: "Full Course, Practical Projects",
          audience: course.level,
        },
      })),
    },
  }

  return (
    <div className="min-h-screen font-poppins">
      <Helmet>
        {/* Page Title: Essential for SEO and browser tabs */}
        <title>{pageTitle}</title>
        {/* Meta Description: A brief summary for search engine results */}
        <meta name="description" content={pageDescription} />
        {/* Keywords: Provide context to search engines */}
        <meta name="keywords" content={pageKeywords} />
        {/* Canonical URL: Prevents duplicate content issues */}
        <link rel="canonical" href={pageUrl} />
        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" /> {/* Or "CollectionPage" */}
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg"
        />{" "}
        {/* Replace with relevant image */}
        <meta property="og:site_name" content="Neotech Solutions" />
        {/* Twitter Card Tags for Twitter Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg"
        />{" "}
        {/* Replace with relevant image */}
        {/* Schema Markup for Courses Page */}
        <script type="application/ld+json">{JSON.stringify(courseCollectionSchema)}</script>
      </Helmet>



      {/* Hero Section */}
      <section className="relative bg-slate-50 py-24 overflow-hidden">
        {/* Background Grid & Accents */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-10 animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] opacity-10 animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight">
            Best Professional{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              IT Courses & Bootcamps
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Gain <span className="font-semibold text-gray-900">industry-recognised skills</span> through
            expert-led training. Learn cutting-edge technologies, work on{" "}
            <span className="text-[#3b82f6] font-medium">real-world projects</span>, and prepare to excel
            in today’s <span className="text-[#3b82f6] font-medium">UK and global job markets</span>.
          </p>

          {/* Call to Action */}
          <div className="flex justify-center gap-4">
            <button
              className="px-8 py-3 rounded-2xl border-2 border-[#3b82f6] text-[#3b82f6] font-semibold hover:bg-[#3b82f6]/10 transition duration-300"
              onClick={() => navigate("/enrollnow")}
            >
              Book your Free Demo
            </button>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Explore Our <span className="text-blue-900">Trending Career-Focused Courses</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Designed for aspiring professionals, our IT training programmes combine
              expert instruction, hands-on learning, and practical projects to make you
              truly job-ready.
            </p>
          </div>

          {/* Courses Grid */}
          {locationLoading || coursesLoading ? (
            <div className="flex flex-col items-center justify-center py-20 min-h-[400px]">
              <Loader2 className="h-12 w-12 animate-spin text-[#3b82f6] mb-4" />
              <p className="text-gray-600 font-medium">Loading...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {courses.map((course, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)] transition-all duration-300 hover:-translate-y-2 border border-slate-100 rounded-[2rem] overflow-hidden bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]"
                >
                  <div className="relative aspect-video">
                    <img
                      src={getUniversalImage(course.image)}
                      alt={course.title}
                      className="w-full  object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                      onClick={() => {
                        navigate(course.url);
                      }}
                      onError={(e) => {
                        e.currentTarget.onerror = null
                        e.currentTarget.src = `https://placehold.co/800x450/ECFDF5/065F46?text=${encodeURIComponent(
                          course.title,
                        )}`
                      }}
                    />
                    <Badge className={`absolute top-4 left-4 ${course.isRamadan ? 'bg-blue-600 animate-pulse' : 'bg-[#3b82f6]'} text-white shadow-md`}>
                      {course.isRamadan ? "🌙 Ramadan Special" : (course.level || "Advance")}
                    </Badge>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{course.rating || "4.8"}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <CardHeader>
                    <CardTitle
                      className="text-2xl font-extrabold text-slate-900 group-hover:text-blue-900 transition-colors cursor-pointer tracking-tight"
                      onClick={() => navigate(course.url)}
                    >
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-slate-500 font-medium line-clamp-2 leading-relaxed">{course.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Course Info */}
                    <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-[#3b82f6]" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-[#3b82f6]" />
                        {course.students || "0+"}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4 text-[#3b82f6]" />
                        {course.modules || 0} modules
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4 text-[#3b82f6]" />
                        {course.projects || 0} projects
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900">Key Skills You’ll Master</h4>
                      <div className="flex flex-wrap gap-2">
                        {(course.skills || []).map((skill: string, idx: number) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-[#3b82f6]/10 text-[#3b82f6] text-xs font-medium"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t">
                      {showPrice && (
                        <div className="text-left">
                          <span className="block text-sm text-gray-500">
                            {isPakistan ? "Monthly Installment" : "Starting at"}
                          </span>
                          <span className="text-xl font-semibold text-[#3b82f6]">
                            {formatPrice(course)}
                            {!isPakistan && "/Mo"}
                          </span>
                        </div>
                      )}
                      <div className="flex gap-2 flex-wrap">
                        <Button
                          className="bg-primary hover:bg-primary/90 rounded-xl px-5"
                          onClick={() => {
                            addToCart(course.slug || course.title);
                            navigate("/cart");
                          }}
                        >
                          Add to Cart
                        </Button>
                        <Button
                          className="bg-[#3b82f6] hover:bg-blue-600 rounded-xl px-5"
                          onClick={() => window.open("/enrollnow", "_blank")}
                        >
                          Enrol Now
                        </Button>
                        <Button
                          variant="outline"
                          className="border-blue-600 text-blue-900 hover:bg-blue-600 hover:text-white rounded-xl px-5"
                          onClick={() => navigate(`/course-outline/${course.id}`)}
                        >
                          Course Outline
                        </Button>
                      </div>
                    </div>

                    {/* Students Enrolled */}
                    <div className="flex items-center justify-end text-sm text-gray-500 mt-2">
                      <Users className="w-4 h-4 mr-1 text-[#3b82f6]" />
                      {course.students || "0+"} students enrolled
                    </div>

                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>


      <Faculty />
      <FAQSection />

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Why Choose <span className="text-blue-900">Neotech Solutions?</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-lg font-medium">
              At Neotech Solutions, we combine{" "}
              <span className="font-semibold">industry-recognised certifications, world-class instructors,</span>
              and <span className="font-semibold">hands-on learning</span> to prepare you for a successful career
              in the World.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className="group text-center p-10 rounded-[2rem] bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.1)] transition-all duration-300 hover:-translate-y-2"
              aria-label="Industry Certification"
            >
              <div className="bg-blue-50 group-hover:bg-blue-600 transition-colors p-5 rounded-2xl w-20 h-20 mx-auto mb-8 flex items-center justify-center">
                <Award className="h-10 w-10 text-blue-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Industry Certification</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Earn globally recognised certificates valued by leading employers and international companies.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="group text-center p-10 rounded-[2rem] bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.1)] transition-all duration-300 hover:-translate-y-2"
              aria-label="Expert Instructors"
            >
              <div className="bg-blue-50 group-hover:bg-blue-600 transition-colors p-5 rounded-2xl w-20 h-20 mx-auto mb-8 flex items-center justify-center">
                <Users className="h-10 w-10 text-blue-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Expert Instructors</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Learn directly from experienced professionals and academics who bring real-world expertise into the classroom.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="group text-center p-10 rounded-[2rem] bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.1)] transition-all duration-300 hover:-translate-y-2"
              aria-label="Hands-on Projects"
            >
              <div className="bg-blue-50 group-hover:bg-blue-600 transition-colors p-5 rounded-2xl w-20 h-20 mx-auto mb-8 flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-blue-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Hands-on Projects</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Work on real-world projects, build an impressive portfolio, and graduate job-ready with practical, applied skills.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Courses
