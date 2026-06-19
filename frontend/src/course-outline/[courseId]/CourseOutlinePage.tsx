"use client"

import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom" // Changed import
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Calendar, Clock, BookOpen, Users, CheckCircle, Loader2, ShoppingCart, MonitorPlay } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { Helmet } from 'react-helmet-async'

interface WeeklySchedule {
  theory: string
  practice: string
  lab: string
}

interface Week {
  week: number
  title: string
  description?: string
  theory: string[]
  lab: string
  _id: string
}

interface Month {
  title: string
  description?: string
  weeks: Week[]
  _id: string
}

interface CourseOutlineResponse {
  weeklySchedule: WeeklySchedule
  _id: string
  courseId: string
  roadmap: string
  durationWeeks: number
  months: Month[]
  createdAt: string
  __v: number
}

interface CourseModule {
  id: number
  title: string
  duration: string
  topics: string[]
}

interface CourseData {
  title: string
  duration: string
  totalModules: number
  months: Month[]
  weeklySchedule: WeeklySchedule
}

export default function CourseOutlinePage() {
  const { courseId } = useParams() // Using useParams from react-router-dom
  const navigate = useNavigate() // Using useNavigate from react-router-dom
  const { addToCart } = useCart()

  const [course, setCourse] = useState<CourseData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCourseOutline = async () => {
      try {
        setLoading(true)
        setError(null)
        await new Promise(r => setTimeout(r, 800)); // Simulate load

        // Mock standard curriculum for offline presentation
        setCourse({
          title: "Premium Course Curriculum",
          duration: "12 Weeks",
          totalModules: 12,
          weeklySchedule: { theory: "3 Hours", practice: "2 Hours", lab: "1 Hour" },
          months: [
            {
              _id: "m1",
              title: "Month 1: Fundamentals",
              description: "Building a strong technical foundation.",
              weeks: [
                {
                  _id: "w1", week: 1, title: "Introduction to Core Concepts", theory: ["Course overview", "Environment setup", "Architecture"], lab: "Initial project configuration"
                },
                {
                  _id: "w2", week: 2, title: "Deep Dive into Basics", theory: ["Syntax basics", "Data structures", "Control flow"], lab: "Building the first comprehensive module"
                },
                {
                  _id: "w3", week: 3, title: "Advanced Features", theory: ["Complex algorithms", "State management", "Best practices"], lab: "Refactoring and testing"
                },
                {
                  _id: "w4", week: 4, title: "Project Milestone", theory: ["Deployment strategies", "CI/CD overview"], lab: "Deploying the MVP"
                }
              ]
            }
          ]
        })
      } catch (e: any) {
        setError(e.message || "Failed to fetch course outline. Please check your connection.")
        console.error("Error fetching course outline:", e)
      } finally {
        setLoading(false)
      }
    }

    if (courseId) {
      fetchCourseOutline()
    }
  }, [courseId])

  // Define SEO metadata and Schema Markup dynamically once course data is loaded
  const pageTitle = course ? `${course.title} - Course Outline | Neotech Solutions` : "Course Outline | Neotech Solutions";
  const pageDescription = course ?
    `Detailed course outline for ${course.title} at Neotech Solutions. Explore weekly modules, topics, and learning objectives for this ${course.duration} program.` :
    "Explore the detailed curriculum and learning roadmap for our courses at Neotech Solutions.";
  const pageUrl = `https://www.neotechsolution.com/course-outline/${courseId}`;
  const courseKeywords = course ?
    `${course.title.toLowerCase()}, course outline, curriculum, ${courseId.replace(/-/g, ', ')}, Neotech Solutions, online course, ${course.duration.toLowerCase().replace(' ', ', ')}, theory, practice, lab, modules, topics` :
    "course outline, curriculum, Neotech Solutions, online courses, programming, development";

  // Schema Markup for the Course
  const courseSchema = course ? {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": pageDescription,
    "url": pageUrl,
    "provider": {
      "@type": "Organization",
      "name": "Neotech Solutions",
      "sameAs": "https://www.neotechsolution.com"
    },
    // If you have an image specific to the course, replace this placeholder
    "image": `https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg`, // Using local logo as fallback
    "coursePrerequisites": "Basic programming knowledge recommended", // Example, adjust or remove
    "timeRequired": `P${course.duration.split(' ')[0]}W`, // ISO 8601 duration, e.g., P8W for 8 Weeks
    "occupationalCredentialAwarded": "Certificate of Completion", // Example, adjust or remove
    "educationalAlignment": { // Example, adjust or remove
      "@type": "AlignmentObject",
      "alignmentType": "educationalFramework",
      "educationalFramework": "National Skill Standards",
      "targetUrl": "https://www.example.com/standards"
    },
    "courseWorkload": course.weeklySchedule ? `Theory: ${course.weeklySchedule.theory}, Practice: ${course.weeklySchedule.practice}, Lab: ${course.weeklySchedule.lab}` : undefined,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online", // Assuming courses are online, adjust if mixed modes
      "location": {
        "@type": "VirtualLocation",
        "url": pageUrl
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "AUD", // Placeholder for any currency, ideally dynamic from course data
        "price": "Call for price", // Or fetch from a separate course pricing API
        "url": pageUrl,
        "validFrom": new Date().toISOString().split('T')[0], // Today's date
        // No validThrough as end date not available for individual course outline
      },
    },
    // You can add more properties like 'about', 'learningResourceType', 'syllabus' etc.
    "courseSchedule": course.months.flatMap(m => m.weeks).map(week => ({
      "@type": "CreativeWork",
      "name": `Week ${week.week}: ${week.title}`,
      "description": (week.theory || []).join(', '),
      "url": pageUrl // Links back to this outline page
    }))
  } : {};

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <Helmet>
          <title>Course Not Found | Neotech Solutions</title>
          <meta name="description" content="The requested course curriculum could not be found." />
        </Helmet>
        <div className="max-w-md w-full text-center p-12 bg-white rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative z-10">
          <div className="mb-8 inline-flex p-5 rounded-3xl bg-blue-50 text-blue-900 shadow-inner">
            <BookOpen className="h-14 w-14" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Outline Not Found</h1>
          <p className="text-slate-500 mb-10 font-medium leading-relaxed">
            The curriculum for this specific course is currently being architected by our experts. Explore our other premium programs in the meantime!
          </p>
          <div className="flex flex-col gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl h-14 font-bold shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1"
              onClick={() => navigate("/courses")}
            >
              Browse All Courses
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-2xl h-14 border-slate-200 text-slate-600 font-bold hover:bg-white hover:border-blue-600/30"
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 font-poppins relative">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={courseKeywords} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph Tags for social media sharing */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="Course" /> {/* Specific type for course */}
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg`} /> {/* Specific course image */}
        <meta property="og:site_name" content="Neotech Solutions" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg`} /> {/* Specific course image */}

        {/* Schema Markup for the Course */}
        {course && ( // Only render schema if course data is available
          <script type="application/ld+json">
            {JSON.stringify(courseSchema)}
          </script>
        )}
      </Helmet>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-8 hover:bg-white/50 text-slate-500 font-bold flex items-center gap-2 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Courses
          </Button>
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12 relative overflow-hidden transition-all hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]">
            {/* Decorative accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-900 font-black text-[10px] uppercase tracking-widest mb-4">
                  Curriculum Architecture
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">{course.title}</h1>
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2.5 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 font-bold text-slate-600">
                    <Clock className="h-4 w-4 text-blue-900" />
                    <span>{course.duration} Program</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 font-bold text-slate-600">
                    <BookOpen className="h-4 w-4 text-blue-900" />
                    <span>{course.totalModules} Core Modules</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button
                  onClick={() => navigate(`/batches/${courseId}`)}
                  className="w-full sm:w-auto bg-slate-900 hover:bg-black text-white h-14 px-8 rounded-2xl font-black shadow-xl shadow-black/10 transition-all hover:-translate-y-1"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  View Batches
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate("/enrollnow")}
                  className="w-full sm:w-auto border-blue-600 text-blue-900 h-14 px-8 rounded-2xl font-black hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Apply Now
                </Button>
              </div>
            </div>

            {course.weeklySchedule && (
              <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Learning Hours</h3>
                  <div className="flex items-center gap-8">
                    <div className="text-center md:text-left">
                      <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Theory</p>
                      <p className="text-lg font-extrabold text-blue-900 leading-none">{course.weeklySchedule.theory}</p>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Practice</p>
                      <p className="text-lg font-extrabold text-indigo-600 leading-none">{course.weeklySchedule.practice}</p>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Lab</p>
                      <p className="text-lg font-extrabold text-slate-900 leading-none">{course.weeklySchedule.lab}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-4 max-w-sm">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-slate-100 shadow-sm flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-900" />
                  </div>
                  <p className="text-xs text-slate-500 font-medium">This curriculum is designed to optimize retention and practical execution.</p>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Course Months */}
        <div className="space-y-16">
          {course.months.map((month, mIndex) => (
            <div key={mIndex} className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="h-10 w-2 bg-blue-600 rounded-full" />
                <div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">{month.title}</h2>
                  {month.description && <p className="text-slate-500 font-medium mt-1">{month.description}</p>}
                </div>
              </div>

              <div className="grid gap-8">
                {month.weeks.map((week, wIndex) => (
                  <Card key={wIndex} className="overflow-hidden bg-white rounded-[2.5rem] shadow-[0_10px_40px_-20px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all group">
                    <CardHeader className="bg-slate-900 text-white p-8 md:p-10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                      <div className="flex items-center justify-between relative z-10">
                        <div className="space-y-2">
                          <div className="inline-block px-3 py-1 rounded-full bg-blue-600 text-[10px] font-black uppercase tracking-widest">Week {week.week}</div>
                          <CardTitle className="text-2xl md:text-3xl font-extrabold tracking-tight">
                            {week.title}
                          </CardTitle>
                          {week.description && <CardDescription className="text-slate-400 font-bold text-base mt-2">{week.description}</CardDescription>}
                        </div>
                        <div className="hidden sm:flex h-14 w-14 bg-white/10 rounded-2xl items-center justify-center backdrop-blur-sm border border-white/10">
                          <BookOpen className="h-7 w-7 text-blue-500" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8 md:p-10 space-y-8">
                      <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <div className="h-1 w-4 bg-blue-600 rounded-full" /> Theoretical Deep Dive
                          </p>
                          <div className="space-y-3">
                            {week.theory.map((topic, topicIndex) => (
                              <div
                                key={topicIndex}
                                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:border-blue-600/20 group/item"
                              >
                                <CheckCircle className="h-5 w-5 text-blue-900 mt-0.5 flex-shrink-0 transition-transform group-hover/item:scale-110" />
                                <span className="text-slate-700 font-bold leading-relaxed whitespace-pre-wrap">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {week.lab && (
                          <div className="space-y-4">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                              <div className="h-1 w-4 bg-indigo-600 rounded-full" /> Practical Execution
                            </p>
                            <div className="p-6 rounded-[2rem] bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 relative overflow-hidden group/lab">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[4rem] group-hover/lab:scale-110 transition-transform pointer-events-none" />
                              <span className="text-[10px] font-black text-indigo-200 uppercase tracking-[0.2em] block mb-3">Live Environment Lab</span>
                              <p className="text-lg font-extrabold leading-relaxed mb-6">{week.lab}</p>
                              <div className="flex items-center gap-2 text-xs font-bold text-indigo-100">
                                <MonitorPlay className="w-4 h-4" />
                                <span>Hands-on Mentor Support Available</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Card */}
        <div className="mt-24 relative group">
          <div className="absolute inset-0 bg-blue-600 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="relative bg-slate-900 rounded-[3rem] px-8 py-16 md:py-24 text-center text-white overflow-hidden border border-white/5">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-block p-4 bg-blue-600 rounded-3xl mb-10 shadow-2xl animate-bounce">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Ready to Sculpt Your Career?</h2>
              <p className="text-xl text-slate-400 mb-12 font-medium leading-relaxed">
                Don't just learn. Graduate into the elite percentage of professionals who lead the global tech market. Your transformation starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  onClick={() => navigate(`/batches/${courseId}`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white h-16 px-12 rounded-2xl text-xl font-black shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-1"
                >
                  <Calendar className="mr-3 h-6 w-6" />
                  Enroll Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate(`/contact`)}
                  className="bg-white/5 border-white/20 text-white h-16 px-12 rounded-2xl text-xl font-black backdrop-blur-md hover:bg-white/10 transition-all hover:-translate-y-1"
                >
                  <Users className="mr-3 h-6 w-6" />
                  Talk to Expert
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
