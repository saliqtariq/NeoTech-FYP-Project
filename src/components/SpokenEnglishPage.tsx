import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import {
  MessageCircle,
  Mic,
  Users,
  Globe,
  CheckCircle,
  PlayCircle,
  ShoppingCart,
  Loader2,
  BookOpen,
  Award,
  Video
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Helmet } from "react-helmet-async";
import { useCourses } from "@/hooks/useCourses";

export default function SpokenEnglishPage() {
  const navigate = useNavigate();
  const { addToCart, locationLoading, formatPrice } = useCart();
  const { findCourse } = useCourses();
  const coursePricingKey = "spoken-english-mastery"; // Canonical slug from DB

  const courseTitle = "Top-Rated Spoken English Mastery Course";
  const courseDescription = "Master fluent English communication with Neotech Solutions. Our expert-led Spoken English course focuses on pronunciation, grammar, and real-life conversation skills to boost your career and confidence.";
  const courseUrl = "https://www.neotechsolution.com/spoken-english-mastery";
  const courseImage = "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80";

  const courseData = {
    weeklySchedule: {
      theory: "Concept + Grammar Principles + Speaking Demonstration (3 Classes / Week)",
      practice: "Guided speaking exercises, pair conversations, and pronunciation drills",
      lab: "Real-life communication practice, role plays, and presentation activities"
    },
    courseId: "688a66a3ac9a673940d21034",
    roadmap: "Roadmap for Spoken English Mastery",
    durationWeeks: 12,
    months: [
      {
        title: "Month 1 – Communication Foundations",
        weeks: [
          {
            week: 1,
            title: "Introduction to English Communication",
            theory: [
              "Introduction to English Communication",
              "Importance of English in Career Growth",
              "Understanding Basic Sentence Structure",
              "Subject, Verb, Object Concept"
            ]
          },
          {
            week: 2,
            title: "Grammar for Speaking (Present Tense)",
            theory: [
              "Present Tense Basics",
              "Present Continuous Tense",
              "Using Helping Verbs",
              "Negative Sentences"
            ]
          },
          {
            week: 3,
            title: "Grammar for Speaking (Past & Future)",
            theory: [
              "Past Tense Basics",
              "Future Tense Basics",
              "Question Formation",
              "Correcting Mistakes"
            ]
          },
          {
            week: 4,
            title: "Pronunciation Fundamentals",
            theory: [
              "Pronunciation Rules",
              "Word Stress",
              "Sentence Intonation",
              "Silent Letters"
            ]
          }
        ]
      },
      {
        title: "Month 2 – Vocabulary & Conversation",
        weeks: [
          {
            week: 5,
            title: "Vocabulary Development",
            theory: [
              "Daily Use Vocabulary",
              "Common English Phrases",
              "Practical Word Usage",
              "Word Recall"
            ]
          },
          {
            week: 6,
            title: "Advanced Vocabulary",
            theory: [
              "Idioms and Expressions",
              "Synonyms and Antonyms",
              "Contextual Usage",
              "Business English"
            ]
          },
          {
            week: 7,
            title: "Daily Conversations",
            theory: [
              "Self-Introduction",
              "Greeting People",
              "Polite Communication",
              "Confidence Building"
            ]
          },
          {
            week: 8,
            title: "Real-Life Communication",
            theory: [
              "Telephone Conversations",
              "Market Conversations",
              "Office Communication",
              "Travel Communication"
            ]
          }
        ]
      },
      {
        title: "Month 3 – Public Speaking & Confidence",
        weeks: [
          {
            week: 9,
            title: "Public Speaking Basics",
            theory: [
              "Audience Engagement",
              "Building Confidence",
              "Organizing Speech",
              "Handling Nervousness"
            ]
          },
          {
            week: 10,
            title: "Communication Skills",
            theory: [
              "Body Language",
              "Voice Control",
              "Tone and Expression",
              "Active Listening"
            ]
          },
          {
            week: 11,
            title: "Advanced Speaking",
            theory: [
              "Storytelling Techniques",
              "Group Discussions",
              "Opinion Sharing",
              "Fluent Practice"
            ]
          },
          {
            week: 12,
            title: "Presentation & Interview",
            theory: [
              "Presentation Skills",
              "Professional Comms",
              "Interview Techniques",
              "Final Review"
            ]
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen transition-all duration-300">
      <Helmet>
        <title>Best Spoken English Course | Top-Rated Communication Skills Training | Neotech Solutions</title>
        <meta name="description" content={courseDescription} />
        <meta name="keywords" content="best spoken english course, learn english speaking, english communication skills, english pronunciation training, public speaking course, english for career growth, top-rated english training" />
        <link rel="canonical" href={courseUrl} />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Expert Spoken English Mastery | Neotech Solutions" />
        <meta property="og:description" content={courseDescription} />
        <meta property="og:image" content={courseImage} />
        <meta property="og:url" content={courseUrl} />
        <meta property="og:type" content="website" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Spoken English Mastery",
            "description": courseDescription,
            "provider": {
              "@type": "Organization",
              "name": "Neotech Solutions",
              "sameAs": "https://www.neotechsolution.com"
            },
            "educationalLevel": "Beginner to Advanced",
            "offers": {
              "@type": "Offer",
              "category": "Online Course"
            }
          })}
        </script>
      </Helmet>

      {locationLoading ? (
        <div className="flex flex-col items-center justify-center py-40">
          <Loader2 className="h-12 w-12 animate-spin text-[#3b82f6] mb-4" />
          <p className="text-gray-600 font-medium">Loading course details...</p>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <section className="relative bg-[#3b82f6] text-white py-28 px-6 text-center overflow-hidden">
            <motion.img
              src={courseImage}
              alt="Professional English Communication"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
            />
            <div className="relative z-10 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-1.5 mb-6 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30"
              >
                #1 Top-Rated English Course
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg leading-tight"
              >
                Best Spoken English Course <br className="hidden md:block" />
                <span className="text-blue-900">For Professional Fluency</span>
              </motion.h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 text-white/90">
                Break the language barrier and advance your career. Join the best English speaking program
                designed for professionals, students, and everyone ready to speak with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => {
                    addToCart(coursePricingKey);
                    navigate("/cart");
                  }}
                  className="bg-white text-[#3b82f6] hover:bg-gray-100 font-bold px-10 py-6 rounded-full shadow-xl flex items-center justify-center gap-2 text-lg transform hover:scale-105 transition-all"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  onClick={() => navigate(`/FreeDemo?course=${coursePricingKey}`)}
                  className="bg-blue-600/20 text-white hover:bg-white hover:text-[#3b82f6] font-bold px-10 py-6 rounded-full shadow-xl flex items-center justify-center gap-2 border-2 border-white backdrop-blur-sm text-lg transform hover:scale-105 transition-all"
                >
                  <PlayCircle className="h-5 w-5" />
                  Watch Free Demo
                </Button>
                <Button
                  onClick={() => navigate("/enrollnow")}
                  className="bg-blue-600 text-white hover:bg-blue-600 font-bold px-10 py-6 rounded-full shadow-xl border-2 border-blue-600 text-lg transform hover:scale-105 transition-all"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </section>

          {/* Quick Stats / Highlights */}
          <section className="py-12 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { label: "Duration", value: "12 Weeks", icon: <BookOpen className="w-5 h-5 text-[#3b82f6]" /> },
                  { label: "Sessions", value: "36+ Live", icon: <Video className="w-5 h-5 text-[#3b82f6]" /> },
                  { label: "Practice", value: "Unlimited", icon: <Mic className="w-5 h-5 text-[#3b82f6]" /> },
                  { label: "Certificate", value: "Expert Level", icon: <Award className="w-5 h-5 text-[#3b82f6]" /> },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="bg-blue-600 p-3 rounded-full mb-3">{stat.icon}</div>
                    <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&auto=format&fit=crop&q=80"
                alt="English Excellence"
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-600 rounded-full -z-0 blur-3xl opacity-60"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Why Choose Neotech for the <span className="text-[#3b82f6]">Best Spoken English</span> Training?
              </h2>
              <p className="text-lg mb-8 leading-relaxed text-gray-600">
                Our curriculum is designed to transform you into a confident speaker. We don't just teach grammar;
                we focus on the practical application of language in real-world professional and social scenarios.
              </p>
              <div className="grid gap-6">
                {[
                  {
                    icon: <Globe className="w-8 h-8 text-[#3b82f6]" />,
                    title: "Global Standards",
                    desc: "Curriculum aligned with international communication standards.",
                  },
                  {
                    icon: <Mic className="w-8 h-8 text-[#3b82f6]" />,
                    title: "Live Practice Labs",
                    desc: "Interactive sessions for real-time pronunciation correction.",
                  },
                  {
                    icon: <Users className="w-8 h-8 text-[#3b82f6]" />,
                    title: "Career-Focused",
                    desc: "Mock interviews and professional presentation training.",
                  },
                  {
                    icon: <MessageCircle className="w-8 h-8 text-[#3b82f6]" />,
                    title: "Expert Mentorship",
                    desc: "One-on-one feedback from experienced language coaches.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 hover:bg-blue-600 rounded-2xl transition-colors">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Daily Schedule / Method */}
          <section className="bg-blue-600 text-white py-20 px-6">
            <div className="max-w-7xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Proven Learning Methodology</h2>
              <p className="text-blue-900 text-lg max-w-2xl mx-auto">
                A balanced approach of theory, practice, and real-world application to ensure permanent retention.
              </p>
            </div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 border-none backdrop-blur-md text-white">
                <CardHeader className="text-center">
                  <BookOpen className="w-12 h-12 mx-auto text-blue-900 mb-4" />
                  <CardTitle className="text-2xl text-white">Theory</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-blue-900">
                  {courseData.weeklySchedule.theory}
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-none backdrop-blur-md text-white">
                <CardHeader className="text-center">
                  <Mic className="w-12 h-12 mx-auto text-blue-900 mb-4" />
                  <CardTitle className="text-2xl text-white">Practice</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-blue-900">
                  {courseData.weeklySchedule.practice}
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-none backdrop-blur-md text-white">
                <CardHeader className="text-center">
                  <Globe className="w-12 h-12 mx-auto text-blue-900 mb-4" />
                  <CardTitle className="text-2xl text-white">Practical Lab</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-blue-900">
                  {courseData.weeklySchedule.lab}
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Course Roadmap / Timeline */}
          <section className="py-24 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">{courseData.roadmap}</h2>
                <div className="h-1.5 w-24 bg-[#3b82f6] mx-auto rounded-full"></div>
              </div>

              <div className="grid gap-12">
                {courseData.months.map((month, mIdx) => (
                  <div key={mIdx}>
                    <h3 className="text-2xl font-bold mb-8 text-[#3b82f6] flex items-center gap-3">
                      <span className="bg-[#3b82f6] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">{mIdx + 1}</span>
                      {month.title}
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {month.weeks.map((week, wIdx) => (
                        <motion.div
                          key={wIdx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: wIdx * 0.1 }}
                        >
                          <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all rounded-3xl overflow-hidden group">
                            <div className="bg-blue-600 p-6 border-b border-blue-600 group-hover:bg-[#3b82f6] transition-colors duration-300">
                              <span className="text-[#3b82f6] font-bold text-sm block mb-2 group-hover:text-white transition-colors">WEEK {week.week}</span>
                              <h4 className="font-bold text-lg group-hover:text-white transition-colors">{week.title}</h4>
                            </div>
                            <CardContent className="p-6">
                              <ul className="space-y-3">
                                {week.theory.map((item, iIdx) => (
                                  <li key={iIdx} className="flex gap-2 text-sm text-gray-600">
                                    <CheckCircle className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-16">
                <Button
                  onClick={() => navigate(`/course-outline/${courseData.courseId}`)}
                  className="bg-[#3b82f6] text-white px-10 py-5 rounded-full shadow-lg hover:bg-blue-600 text-lg font-bold"
                >
                  View Full Detailed Syllabus
                </Button>
              </div>
            </div>
          </section>

          {/* Expert Tips / FAQ Section Preview */}
          <section className="py-24 px-6 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Success Secrets for Mastering English</h2>
            <div className="space-y-8">
              {[
                { q: "Is this course suitable for complete beginners?", a: "Yes! We start from communication foundations in Month 1 to ensure everyone builds a strong base." },
                { q: "Will I get a certificate after completion?", a: "Absolutely. Upon successful completion of all modules and final review, you will receive a Neotech Solutions Professional Certificate." },
                { q: "Can I take this course while working full-time?", a: "Our flexible schedule with 3 classes per week and recorded sessions makes it perfect for working professionals." }
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:border-[#3b82f6] transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h4 className="text-xl font-bold mb-3 flex gap-3 text-gray-900">
                    <span className="text-[#3b82f6]">Q.</span> {faq.q}
                  </h4>
                  <p className="text-gray-600 leading-relaxed pl-8">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="relative bg-[#061f4e] text-white py-32 px-6 text-center overflow-hidden">
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
              style={{ backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)", backgroundSize: "40px 40px" }}
            />
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                Don't Wait! Start Your Journey to <br />
                <span className="text-[#3b82f6]">Brilliant Communication</span> Today.
              </h2>
              <p className="text-xl mb-12 text-blue-900 max-w-2xl mx-auto leading-relaxed">
                Unlock global opportunities. Enroll in the most comprehensive and best
                spoken English training program and become the communicator you've always wanted to be.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  onClick={() => navigate("/enrollnow")}
                  className="bg-[#3b82f6] text-white hover:bg-blue-600 font-bold px-12 py-7 rounded-full shadow-2xl text-xl transform hover:scale-110 transition-all"
                >
                  Join the Program Now
                </Button>
                <div className="flex items-center gap-4 justify-center sm:justify-start">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-600 bg-gray-200 overflow-hidden shadow-md">
                        <img src={`https://i.pravatar.cc/40?img=${i + 10}`} alt="Student" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-blue-900">Joined by 12,000+ Students</span>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
