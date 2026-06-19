"use client";

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { Quote, PlayCircle, Filter, Globe, ChevronRight, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CoursesSection from "./CoursesSection";
import { useCourses } from "@/hooks/useCourses";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const testimonials = [
  {
    name: "Ayesha Khan",
    text: "The free demo class at Neotech Solutions gave me complete clarity about the course. The tutor explained every concept with practical examples, making the session highly engaging.",
    role: "Student, Artificial Intelligence"
  },
  {
    name: "Rahul Sharma",
    text: "I truly valued the interactive learning environment at Neotech Solutions. The Cyber Security demo session provided real-world insights and encouraged me to enrol immediately.",
    role: "Student, Cyber Security"
  },
  {
    name: "Sophia Lee",
    text: "Booking a free demo was the best decision I made. The session was well-structured, professional, and helped me feel confident in pursuing Data Analysis as a career path.",
    role: "Student, Data Analysis"
  },
  {
    name: "Ahmed Raza",
    text: "The Full Stack Development demo showed me how coding can be applied to real projects. The mentor’s hands-on approach gave me confidence to start building applications.",
    role: "Student, Full Stack Development"
  },
  {
    name: "Maria Gonzalez",
    text: "The Mobile App Development demo at Neotech Solutions was brilliant. Step by step, I learned how apps are built, which gave me the motivation to begin my journey.",
    role: "Student, Mobile App Development"
  },
  {
    name: "David Chen",
    text: "The Machine Learning demo exceeded expectations. Complex topics were broken down in a clear, simple way, leaving me confident about enrolling in the full programme.",
    role: "Student, Machine Learning"
  },
];

const faqs = [
  { q: "Is the demo class free?", a: "Yes, the demo is completely free with no hidden charges." },
  { q: "How long does a demo class last?", a: "Each session runs for around 30–45 minutes." },
  { q: "Can I attend more than one demo?", a: "Yes, you are welcome to request demos for multiple courses." },
  { q: "Do I receive a certificate after the demo?", a: "Certificates are awarded only upon completion of a full course." },
  { q: "How can I book my demo?", a: "Simply complete the registration form on our website and select your preferred course." },
  { q: "Are demos live or recorded?", a: "We offer both live sessions and recorded demo classes for your convenience." },
  { q: "What if I cannot attend my scheduled demo?", a: "You may reschedule at no additional cost, or watch our recorded demos at any time." },
  { q: "Do I need prior knowledge before attending?", a: "Not at all — our demos are beginner-friendly and designed to give you a clear overview." },
  { q: "Will I be able to interact with the tutor?", a: "Yes, you can ask questions directly during the live demo." },
  { q: "Which courses are available for demo?", a: "We currently offer demos in Artificial Intelligence, Cyber Security, Data Analysis, Web Development, and more." },
  { q: "Do I need any software installed?", a: "No, all you need is a stable internet connection and access to Zoom or Google Meet for live sessions." },
  { q: "Can working professionals attend?", a: "Yes, our flexible timings and recorded sessions are designed for both students and professionals." },
];

const FreeDemoPage = () => {
  const [recordings, setRecordings] = useState([]);
  const [filteredRecordings, setFilteredRecordings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourseId, setSelectedCourseId] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const { courses } = useCourses();

  const [showPlayer, setShowPlayer] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

    useEffect(() => {
        const fetchRecordings = () => {
            try {
                // Mocking static data for presentation
                const mockData = [
                    {
                        _id: "demo1",
                        title: "Intro to MERN Stack",
                        youtubeLink: "https://www.youtube.com/watch?v=mock1",
                        language: "English",
                        course: { title: "MERN Stack Development" }
                    },
                    {
                        _id: "demo2",
                        title: "AI and Machine Learning Basics",
                        youtubeLink: "https://www.youtube.com/watch?v=mock2",
                        language: "Urdu",
                        course: { title: "AI & Machine Learning" }
                    }
                ];
                setRecordings(mockData);
                setFilteredRecordings(mockData);
            } catch (err) {
                console.error("Error setting demo recordings:", err);
                setRecordings([]);
                setFilteredRecordings([]);
            } finally {
                setLoading(false);
            }
        };
        fetchRecordings();
    }, []);

  useEffect(() => {
    let result = recordings;
    if (selectedCourseId !== "all") {
      result = result.filter(r => r.course?._id === selectedCourseId || r.course?.id === selectedCourseId);
    }
    if (selectedLanguage !== "all") {
      result = result.filter(r => r.language === selectedLanguage);
    }
    setFilteredRecordings(result);
  }, [selectedCourseId, selectedLanguage, recordings]);

  const languages = [...new Set((Array.isArray(recordings) ? recordings : []).map(r => r.language))];

  const handleWatchNow = (video) => {
    setActiveVideo(video);
    setShowPlayer(true);
  };

  const getYoutubeEmbedUrl = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2] && match[2].length === 11) ? match[2] : null;
    if (videoId) {
      return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1`;
    }
    return url;
  };

  const getYoutubeThumbnail = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2] && match[2].length === 11) ? match[2] : null;
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return "/api/placeholder/400/225";
  };

  return (
    <section className="bg-gradient-to-br from-primary-50 to-white pb-20">
      <Helmet>
        <title>Best Free Tech Demo Classes | Top IT Training & Live Sessions | Neotech Solutions</title>
        <meta name="description" content="Experience the best free tech demo classes at Neotech Solutions. Watch recorded sessions or book a live demo for AI, Cyber Security, Data Analysis, and Web Development. 100% Free." />
        <meta name="keywords" content="free demo classes, best tech training demo, live IT sessions, Neotech Solutions free demo, learn AI free, cyber security demo class" />
        <link rel="canonical" href="https://www.neotechsolution.com/FreeDemo" />
      </Helmet>
      <Container>
        {/* Hero Section */}
        <div className="text-center py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Best <span className="text-primary">Free Tech Demo Classes</span> & Training
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of tech education. Watch our top-rated recorded demo sessions or
            book a live session to interact with expert mentors. 100% Free.
          </p>
        </div>

        {/* Recorded Demos Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                Recorded <span className="text-primary">Demo Gallery</span>
              </h2>
              <p className="text-gray-600">Watch anytime, anywhere. No registration required for recordings.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Select value={selectedCourseId} onValueChange={setSelectedCourseId}>
                <SelectTrigger className="w-full sm:w-[200px] h-12 rounded-xl border-gray-200 shadow-sm bg-white">
                  <SelectValue placeholder="All Courses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courses</SelectItem>
                  {courses.map(c => (
                    <SelectItem key={c.id} value={c.id}>{c.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-full sm:w-[180px] h-12 rounded-xl border-gray-200 shadow-sm bg-white">
                  <SelectValue placeholder="All Languages" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Languages</SelectItem>
                  {languages.map(l => (
                    <SelectItem key={l} value={l}>{l}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          ) : filteredRecordings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecordings.map((recording: any, idx) => (
                <div
                  key={recording._id || idx}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                >
                  {/* Thumbnail Area */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={getYoutubeThumbnail(recording.youtubeLink)}
                      alt={recording.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://img.youtube.com/vi/" + (recording.youtubeLink.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/)?.[2] || "") + "/hqdefault.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                      <div
                        className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer shadow-xl"
                        onClick={() => handleWatchNow(recording)}
                      >
                        <PlayCircle className="h-8 w-8 fill-current" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold text-gray-900 uppercase tracking-wider shadow-sm">
                        {recording.language}
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="text-primary text-[10px] font-bold uppercase tracking-widest block mb-2">
                        {recording.course?.title || "Neotech Special"}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {recording.title}
                      </h3>
                    </div>

                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-50">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Globe className="h-4 w-4" />
                        <span className="text-xs font-medium uppercase tracking-wider">{recording.language}</span>
                      </div>
                      <button
                        onClick={() => handleWatchNow(recording)}
                        className="flex items-center gap-2 text-primary font-bold text-sm group/btn"
                      >
                        Watch Now
                        <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
              <p className="text-gray-500 font-medium">No demo recordings found matching your filters.</p>
              <Button variant="link" onClick={() => { setSelectedCourseId("all"); setSelectedLanguage("all"); }}>Clear Filters</Button>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center pt-10 border-t">
            Want a <span className="text-primary">Live Session</span>? Choose Your Course Below
          </h2>
        </div>
        <CoursesSection />

        {/* Testimonials */}
        <div className="py-16 md:py-20 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-2xl shadow-inner mt-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-gray-900">
            What Our Students Say About <span className="text-primary">Neotech Solutions</span>
          </h2>

          <Row className="justify-center">
            {testimonials.map((t, i) => (
              <Col key={i} lg={4} md={6} sm={12} className="mb-8">
                <Card className="p-8 h-full border-0 bg-white shadow-lg hover:shadow-xl rounded-2xl transition transform hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-md">
                      <Quote className="h-6 w-6" />
                    </div>
                    <h5 className="ml-4 font-bold text-lg text-gray-900">{t.name}</h5>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">“{t.text}”</p>
                  <div className="mt-5">
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* FAQs */}
        <div className="py-16 md:py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Row className="justify-content-center">
            <Col lg={8} md={10}>
              {faqs.map((faq, i) => (
                <div key={i} className="mb-6 border-b pb-4">
                  <h4 className="font-semibold text-gray-900">{faq.q}</h4>
                  <p className="text-gray-600 mt-2">{faq.a}</p>
                </div>
              ))}
            </Col>
          </Row>
        </div>
      </Container>

      {/* Secure Video Player Dialog */}
      <Dialog open={showPlayer} onOpenChange={setShowPlayer}>
        <DialogContent
          className="max-w-4xl p-0 overflow-hidden bg-black border-0 shadow-2xl rounded-3xl"
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="p-6 bg-white flex justify-between items-center border-b">
            <DialogTitle className="text-xl font-bold m-0">
              {activeVideo?.title}
            </DialogTitle>
          </div>
          <div className="p-2 sm:p-4 bg-gray-900">
            <div
              className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative"
              onContextMenu={(e) => e.preventDefault()}
            >
              {activeVideo && (
                <iframe
                  src={getYoutubeEmbedUrl(activeVideo.youtubeLink)}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Recorded Demo Player"
                />
              )}
              <div className="absolute inset-0 pointer-events-none border-4 border-primary/10 rounded-xl" />
            </div>
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-2">
              <div className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {activeVideo?.course?.title}
                </span>
                <span className="bg-white/10 text-gray-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {activeVideo?.language}
                </span>
              </div>
              <p className="text-[10px] text-gray-500 font-medium italic">Powered by Neotech Secure Player</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FreeDemoPage;
