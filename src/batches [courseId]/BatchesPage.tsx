"use client"

import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Users, User, ChevronRight, X, MonitorPlay } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Helmet } from "react-helmet-async";
import staticBatches from "@/data/batches.json"
import { motion, AnimatePresence } from "framer-motion"


type Batch = {
  _id: string
  name: string
  mode: string
  duration: string
  schedule: string
  timing: string
  startDate: string
  instructor: string
  enrolled: number
  seats: number
  price: string
  endDate: string
  course: {
    duration: string
  }
}

export default function BatchesPage() {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const [batches, setBatches] = useState<Batch[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [selectedVideo, setSelectedVideo] = useState<{ url: string, type?: string } | null>(null)
  const [secretId, setSecretId] = useState<string | null>(null)
  const [showSecretIdInput, setShowSecretIdInput] = useState<boolean>(false)
  const [secretIdError, setSecretIdError] = useState<string | null>(null)

  useEffect(() => {
    const storedSecretId = localStorage.getItem('videoSecretId');
    if (storedSecretId) {
      setSecretId(storedSecretId);
    }
  }, []);

  const pageTitle = `Available Batches | Neotech Solutions`;
  const pageDescription = `Explore available batches and schedules for our courses at Neotech Solutions. Choose the best fit for your learning needs.`;
  const pageUrl = `https://www.neotechsolution.com/batches/${courseId}`;

  const batchListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: batches.map((batch, index) => ({
        "@type": "CourseInstance",
        position: index + 1,
        name: `Batch ${batch.name} - ${batch.mode}`,
        // Removed endDate from description
        description: `Mode: ${batch.mode}, Schedule: ${batch.schedule
          }, Timing: ${batch.timing}, Instructor: ${batch.instructor
          }, Starts: ${new Date(batch.startDate).toLocaleDateString()}. Price: ${batch.price
          }.`,
        url: pageUrl,
        instructor: {
          "@type": "Person",
          name: batch.instructor,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "AUD", // Placeholder for any currency. Ideally fetched from backend.
          price: batch.price,
          validFrom: new Date(batch.startDate).toISOString(),
          // Removed validThrough as endDate is removed
          validThrough: new Date(batch.endDate).toISOString(),
          url: pageUrl,
        },
        inCourse: {
          "@type": "Course",
          name: "Unknown Course",
          url: `https://www.neotechsolution.com/course-outline/${courseId}`,
        },
      })),
    },
  };

  useEffect(() => {
    function fetchBatches() {
      try {
        setLoading(true);
        // Filter static batches by course.id (which matches courseId param)
        const courseBatches = (staticBatches as any[]).filter(b => b.course._id === courseId);
        setBatches(courseBatches);
      } catch (err) {
        setError("Could not load batches for this course.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (courseId) fetchBatches();
  }, [courseId]);

  const getAvailabilityColor = (enrolled: number = 0, seats: number = 20) => {
    const percentage = (enrolled / seats) * 100
    if (percentage >= 90) return "bg-red-100 text-red-800"
    if (percentage >= 70) return "bg-yellow-100 text-yellow-800"
    return "bg-blue-50 text-blue-900"
  }

  const getAvailabilityText = (enrolled: number = 0, seats: number = 20) => {
    const available = seats - enrolled
    if (available <= 2) return "Almost Full"
    if (available <= 5) return "Filling Fast"
    return "Available"
  }

  const handleWatchVideo = async (batchId: string) => {
    setSecretIdError(null);

    let currentSecretId = secretId;

    if (!currentSecretId) {
      setShowSecretIdInput(true);
      return;
    }

    // Mock secret ID check for presentation: any 4-digit code works, or 'NEO2024'
    if (currentSecretId.trim().toUpperCase() === "NEO2026" || currentSecretId.trim().length >= 4) {
      const batch = (staticBatches as any[]).find(b => b._id === batchId);
      if (batch && batch.videos?.length) {
        setSelectedVideo({
          url: batch.videos[0].url,
          type: batch.videos[0].videoType || 'youtube'
        });
        setShowSecretIdInput(false);
      } else {
        alert("No video found for this batch.");
      }
    } else {
      setSecretIdError("Invalid Secret ID. Try 'NEO2026'");
      setShowSecretIdInput(true);
    }
  };


  const handleSecretIdSubmit = (enteredSecretId: string, batchId: string) => {
    if (enteredSecretId) {
      const trimmedId = enteredSecretId.trim();
      setSecretId(trimmedId);
      localStorage.setItem('videoSecretId', trimmedId);
      handleWatchVideo(batchId);

    } else {
      setSecretIdError("Secret ID cannot be empty.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50/50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-10 bg-gray-200 rounded-md w-32 mb-8 animate-pulse" />
          <div className="h-32 bg-white rounded-2xl shadow-sm mb-12 animate-pulse" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse">
                <div className="h-12 bg-gray-200 rounded-xl mb-6" />
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                  <div className="h-4 bg-gray-200 rounded w-4/6" />
                </div>
                <div className="mt-8 h-12 bg-gray-200 rounded-xl w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error || !batches.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">No Batches Found</h1>
          <p className="text-gray-600 mb-4">{error || "Please check back later or contact support."}</p>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`batches, schedule, online courses, MERN stack, coding bootcamps, Neotech Solutions`} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg" />
        <meta property="og:site_name" content="Neotech Solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(batchListSchema)}</script>
      </Helmet>

      {/* Hero Header Section */}
      <div className="bg-white border-b border-gray-100 shadow-sm mb-12">
        <div className="max-w-6xl mx-auto px-4 py-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <button onClick={() => navigate("/")} className="hover:text-blue-900 transition-colors">Home</button>
            <ChevronRight className="h-3 w-3" />
            <button onClick={() => navigate("/courses")} className="hover:text-blue-900 transition-colors">Courses</button>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gray-900 font-medium">Available Batches</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                Available <span className="text-blue-900">Batches</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Find the perfect schedule and start your learning journey with our expert-led batches.
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => navigate(-1)}
                className="rounded-xl border-gray-200 hover:bg-gray-50"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Batches Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {batches.map((batch, index) => (
            <motion.div
              key={batch._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-white flex flex-col">
                <div className="p-8 pb-4">
                  <div className="flex justify-between items-start mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-blue-600 flex items-center justify-center text-blue-900 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                      <Users className="h-7 w-7" />
                    </div>
                    <Badge variant="outline" className={`${getAvailabilityColor(batch.enrolled, batch.seats)} border-none px-3 py-1 rounded-full font-bold shadow-sm`}>
                      {getAvailabilityText(batch.enrolled, batch.seats)}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Batch {batch.name}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <User className="h-4 w-4 mr-1.5 text-blue-500" />
                    <span>{batch.instructor}</span>
                  </div>

                  {/* Watch Intro Button - Hidden as per user request */}
                  {/* 
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Button
                      variant="ghost"
                      onClick={() => handleWatchVideo(batch._id)}
                      className="h-8 px-3 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800 text-xs font-bold gap-1.5 transition-all"
                    >
                      <MonitorPlay className="h-3.5 w-3.5" />
                      Watch Intro
                    </Button>
                  </div>
                  */}

                  <div className="space-y-4">
                    <div className="flex items-center p-3 rounded-2xl bg-gray-50/80 group-hover:bg-white transition-colors duration-500">
                      <Calendar className="h-5 w-5 text-blue-900 mr-3" />
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Starts</p>
                        <p className="text-sm font-semibold text-gray-900">
                          {new Date(batch.startDate).toLocaleDateString("en-US", {
                            month: "short", day: "numeric", year: "numeric"
                          })}
                        </p>
                      </div>
                    </div>

                    {/* Timing section removed as per user request */}
                  </div>
                </div>

                <div className="mt-auto p-8 pt-0">
                  {/* Seats and Avatars removed as per user request */}

                  {showSecretIdInput && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mb-4 p-4 rounded-2xl bg-blue-50 border border-blue-100"
                    >
                      <p className="text-sm font-medium text-blue-800 mb-2">Student Access Required</p>
                      <Input
                        type="password"
                        placeholder="Enter Secret ID"
                        value={secretId || ''}
                        onChange={(e) => setSecretId(e.target.value)}
                        className={`bg-white rounded-xl border-blue-200 mb-2 ${secretIdError ? "border-red-500" : ""}`}
                      />
                      {secretIdError && <p className="text-red-500 text-[10px] mt-1 mb-2">{secretIdError}</p>}
                      <Button
                        variant="default"
                        className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 shadow-md"
                        onClick={() => handleSecretIdSubmit(secretId || '', batch._id)}
                      >
                        Unlock Videos
                      </Button>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      onClick={() => navigate(`/recorded-lectures/${batch._id}`)}
                      variant="outline"
                      className="rounded-2xl border-gray-100 bg-gray-50/50 hover:bg-white hover:border-blue-200 text-gray-700 font-bold text-xs h-12"
                    >
                      Lectures
                    </Button>
                    <Button
                      onClick={() => navigate(`/enrollnow`)}
                      className="rounded-2xl bg-blue-600 hover:bg-blue-600 text-white font-bold text-xs h-12 shadow-lg shadow-blue-600"
                    >
                      Enroll
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-[100] p-4"
          >
            <div className="w-full max-w-5xl relative">
              <button
                className="absolute -top-12 right-0 text-white hover:text-blue-900 transition-colors p-2"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="h-8 w-8" />
              </button>
              <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
                {(selectedVideo.type === 'youtube' || selectedVideo.url.includes('youtube.com') || selectedVideo.url.includes('youtu.be')) ? (
                  <iframe
                    src={(() => {
                      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
                      const match = selectedVideo.url.match(regExp);
                      let videoId = (match && match[2] && match[2].length === 11) ? match[2] : null;
                      if (!videoId && selectedVideo.url.length === 11) videoId = selectedVideo.url;

                      if (videoId) return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1`;
                      return selectedVideo.url.includes('?') ? `${selectedVideo.url}&rel=0` : `${selectedVideo.url}?rel=0`;
                    })()}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube Video Player"
                  />
                ) : selectedVideo.type === 'embed' ? (
                  selectedVideo.url.startsWith('<iframe') ? (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      dangerouslySetInnerHTML={{ __html: selectedVideo.url.replace(/width="\d+"/, 'width="100%"').replace(/height="\d+"/, 'height="100%"') }}
                    />
                  ) : (
                    <iframe
                      src={selectedVideo.url}
                      className="w-full h-full"
                      allowFullScreen
                      title="Embedded Video Content"
                    />
                  )
                ) : (
                  <iframe
                    src={selectedVideo.url}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Video Lecture"
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
