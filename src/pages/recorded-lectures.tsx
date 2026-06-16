"use client"

import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, PlayCircle, CheckCircle2, MonitorPlay, Clock as ClockIcon, Calendar as CalendarIcon } from "lucide-react"
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"
import staticBatches from "@/data/batches.json"
import { useUser, RedirectToSignIn } from "@clerk/clerk-react"
import { isClerkEnabled } from "@/withClerkProvider"

type Lecture = {
  _id: string
  batchNumber: string
  lectureNumber: number
  title: string
  url: string
  videoType?: 'bunny' | 'youtube' | 'embed'
  batchName: string
}

export default function RecordedLecturesPage() {
  // Handle Clerk safety
  const clerk = isClerkEnabled ? useUser() : { isLoaded: true, isSignedIn: false, user: null };
  const { isLoaded, isSignedIn, user } = clerk;

  const { batchId } = useParams<{ batchId: string }>()
  const navigate = useNavigate()
  const [lectures, setLectures] = useState<Lecture[]>([])
  const [selectedVideo, setSelectedVideo] = useState<{ url: string, type?: string } | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [batchInfo, setBatchInfo] = useState<any>(null)
  const [batchLoading, setBatchLoading] = useState<boolean>(true)

  // Fetch batch information
  useEffect(() => {
    const fetchBatchInfo = async () => {
      if (!batchId) return

      setBatchLoading(true)
      try {
        const batches = Array.isArray(staticBatches) ? staticBatches : (staticBatches as any)?.data || [];
        const currentBatch = batches.find((batch: any) => batch._id === batchId)
        setBatchInfo(currentBatch)
      } catch (err) {
        console.error("Failed to set batch info:", err)
      } finally {
        setBatchLoading(false)
      }
    }

    fetchBatchInfo()
  }, [batchId])

  // Fetch lectures based on user email
  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user?.primaryEmailAddress?.emailAddress || !batchId) return;

    const fetchLectures = async () => {
      setLoading(true)
      setError(null)

      try {
        // Mock presentation loading
        await new Promise(resolve => setTimeout(resolve, 800));

        // Return simulated static videos for the presentation
        setLectures([
          {
            _id: "vid1",
            batchNumber: batchId || "2026",
            lectureNumber: 1,
            title: "Course Orientation",
            url: "https://www.youtube.com/watch?v=mock1",
            videoType: "youtube",
            batchName: batchInfo?.name || "Mock Batch"
          }
        ])
      } catch (err: any) {
        console.error("Fetch lectures error:", err)
        setError("Failed to load lectures.")
        setLectures([])
      } finally {
        setLoading(false)
      }
    }

    fetchLectures()
  }, [batchId, isLoaded, isSignedIn, user])

  // ✅ SEO metadata
  const basePageTitle = "Recorded Lectures | Neotech Solutions"
  const dynamicBatchName = batchInfo ? ` for Batch ${batchInfo.name}` : ""
  const pageTitle = `${basePageTitle}${dynamicBatchName}`
  const pageDescription = batchInfo
    ? `Access recorded lecture sessions for Batch ${batchInfo.name} at Neotech Solutions. Catch up on missed classes and review course material.`
    : "Access your recorded lecture sessions at Neotech Solutions. Catch up on missed classes and review course material."
  const pageKeywords = `recorded lectures, Neotech Solutions, online classes, batch videos, course material, ${batchInfo ? batchInfo.name.toLowerCase().replace(/\s/g, ', ') : ''} learning, student portal`
  const pageUrl = `https://www.neotechsolution.com/recorded-lectures/${batchId}`
  const seoImageUrl = "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg"

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": pageUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Neotech Solutions",
      "url": "https://www.neotechsolution.com",
      "logo": seoImageUrl,
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+92-315-000000",
          "contactType": "customer service"
        }
      ]
    },
    ...(batchInfo && {
      "mainEntity": {
        "@type": "CourseInstance",
        "name": `Recorded Lectures for Batch ${batchInfo.name}`,
        "description": batchInfo.description || `Recorded sessions for the ${batchInfo.name} course.`,
        "courseMode": "Online",
        "startDate": batchInfo.startDate || "2023-01-01",
        "instructor": {
          "@type": "Person",
          "name": batchInfo.instructor || "Neotech Solutions Instructor"
        },
        "url": pageUrl,
        "isAccessibleForFree": "False",
        "offers": {
          "@type": "Offer",
          "price": "Restricted Access",
          "priceCurrency": "N/A",
          "availability": "https://schema.org/LimitedAvailability"
        }
      }
    })
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Skeleton className="h-12 w-12 rounded-full" />
      </div>
    );
  }

  if (!isClerkEnabled) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
        <div className="max-w-md w-full text-center p-12 bg-white rounded-[2.5rem] shadow-xl border border-slate-100">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Auth Disabled</h2>
          <p className="text-slate-500 mb-8 font-medium">Authentication is required to view recorded lectures but is currently disabled. Please contact support.</p>
          <Button onClick={() => navigate("/")} className="w-full bg-blue-600 rounded-2xl h-14 font-bold">Back to Home</Button>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20 font-poppins relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={seoImageUrl} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      </Helmet>

      {/* Modern Header */}
      <div className="bg-white border-b border-slate-100 shadow-sm mb-12 relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="p-0 h-auto hover:bg-transparent text-slate-500 hover:text-blue-900 flex items-center gap-2 mb-4 font-bold transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Batches
              </Button>
              <h1 className="text-4xl font-extrabold text-slate-900 flex items-center gap-4 tracking-tight">
                <div className="bg-blue-600/10 p-2.5 rounded-2xl">
                  <MonitorPlay className="h-8 w-8 text-blue-900" />
                </div>
                Recorded Lectures
              </h1>
              {batchInfo && (
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-slate-500 font-bold bg-slate-100 px-3 py-1 rounded-full text-xs uppercase tracking-widest leading-none">Batch {batchInfo.name}</p>
                  <span className="text-slate-300">•</span>
                  <p className="text-slate-500 font-medium text-sm">{batchInfo.instructor}</p>
                </div>
              )}
            </div>

            {!error && !loading && (
              <div className="flex items-center gap-3 bg-white border border-slate-200 px-5 py-3 rounded-2xl shadow-sm">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-xs font-black text-slate-800 uppercase tracking-widest">Student Verified</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-64 rounded-[2rem] bg-white shadow-sm" />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-20 bg-white rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 max-w-2xl mx-auto">
            <div className="h-24 w-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500 border border-red-100">
              <span className="text-4xl">⚠️</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">Access Denied</h3>
            <p className="text-red-500 font-bold text-lg mb-8">{error}</p>
            <Button onClick={() => navigate('/dashboard')} className="rounded-xl bg-blue-600 hover:bg-blue-700 shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-1 text-white font-bold h-14 px-10 text-lg">
              Return to Dashboard
            </Button>
          </div>
        ) : lectures.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
            <div className="h-24 w-24 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
              <MonitorPlay className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">No Recorded Lectures</h3>
            <p className="text-slate-500 font-medium">Wait for the instructor to upload the sessions.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Playlist/List Area */}
            <div className="lg:col-span-1 space-y-4 max-h-[calc(100vh-250px)] overflow-y-auto pr-2 scrollbar-hide py-2">
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-3 mb-6 tracking-tight">
                Playlist
                <span className="text-xs bg-slate-100 border border-slate-200 text-slate-600 px-3 py-1 rounded-full">{lectures.length} Total</span>
              </h3>
              {lectures.map((lecture, index) => (
                <motion.div
                  key={lecture._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedVideo({ url: lecture.url, type: lecture.videoType })}
                  className={`p-4 rounded-2xl cursor-pointer border transition-all duration-300 group ${selectedVideo?.url === lecture.url
                    ? "bg-blue-600 border-blue-600 shadow-lg shadow-blue-600"
                    : "bg-white border-gray-100 hover:border-blue-600 hover:shadow-md"
                    }`}
                >
                  <div className="flex gap-4">
                    <div className={`h-16 w-24 rounded-xl flex-shrink-0 flex items-center justify-center transition-all ${selectedVideo?.url === lecture.url ? "bg-white/20 text-white shadow-sm" : "bg-slate-50 text-slate-300 hover:text-slate-400 border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-900"
                      }`}>
                      <PlayCircle className="h-8 w-8 text-inherit" />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${selectedVideo?.url === lecture.url ? "text-blue-200" : "text-blue-900"
                        }`}>Lecture {lecture.lectureNumber}</p>
                      <h4 className={`text-sm font-bold truncate ${selectedVideo?.url === lecture.url ? "text-white" : "text-slate-900"
                        }`}>{lecture.title}</h4>
                      <div className={`flex items-center gap-3 mt-1.5 text-[10px] font-bold uppercase tracking-wider ${selectedVideo?.url === lecture.url ? "text-blue-100" : "text-slate-400"
                        }`}>
                        <span className="flex items-center gap-1"><ClockIcon className="h-3.5 w-3.5" /> Batch {lecture.batchNumber}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Content / Video View Area */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence mode="wait">
                {selectedVideo ? (
                  <motion.div
                    key={selectedVideo.url}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] p-5 overflow-hidden border border-slate-100 sticky top-4"
                  >
                    <div className="aspect-video bg-black rounded-2xl overflow-hidden relative shadow-inner">
                      {/* Video Player Components remains same as per functional requirements but styled */}
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
                          title="Bunny Stream Video"
                        />
                      )}
                    </div>
                    <div className="mt-8 px-4 pb-2 flex items-start justify-between">
                      <div>
                        <h2 className="text-2xl font-extrabold text-slate-900 mb-2 tracking-tight">
                          {lectures.find(l => l.url === selectedVideo.url)?.title}
                        </h2>
                        <div className="flex items-center gap-5 text-[11px] uppercase tracking-widest font-bold text-slate-500">
                          <span className="flex items-center gap-1.5"><CalendarIcon className="h-4 w-4 text-blue-900" /> Recorded Session</span>
                          <span className="flex items-center gap-1.5"><MonitorPlay className="h-4 w-4 text-indigo-500" /> High Quality</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        onClick={() => setSelectedVideo(null)}
                        className="text-slate-400 hover:text-red-500 h-10 w-10 p-0 rounded-full hover:bg-red-50 flex items-center justify-center border border-transparent hover:border-red-100"
                      >
                        <span className="text-3xl">&times;</span>
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center bg-white rounded-[2rem] border-2 border-dashed border-slate-200 p-20 text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] sticky top-4">
                    <div className="h-28 w-28 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-900 mb-8 animate-bounce shadow-sm">
                      <PlayCircle className="h-12 w-12 text-slate-300" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Ready to Study?</h2>
                    <p className="text-slate-500 max-w-sm mb-10 font-medium">Select a lecture from the playlist on the left to start watching. Learn at your own pace.</p>
                    <div className="flex gap-4">
                      <div className="px-6 py-3 bg-blue-50 text-blue-700 rounded-xl text-xs font-bold uppercase tracking-widest shadow-sm">💻 Technical Skills</div>
                      <div className="px-6 py-3 bg-indigo-50 text-indigo-700 rounded-xl text-xs font-bold uppercase tracking-widest shadow-sm">🚀 Career Growth</div>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
