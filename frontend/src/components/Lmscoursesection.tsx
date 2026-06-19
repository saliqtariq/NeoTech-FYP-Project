"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Clock, Users, Star, BookOpen, Calendar, ArrowRight, Loader2 } from "lucide-react"
import { useCourses } from "@/hooks/useCourses"

const LmsCourseSection = () => {
  const navigate = useNavigate()
  const [selectedCourse, setSelectedCourse] = useState<any>(null)
  const [showDialog, setShowDialog] = useState(false)
  const { courses, loading, error } = useCourses()

  const handleCourseClick = (course: any) => {
    setSelectedCourse(course)
    setShowDialog(true)
  }

  const handleCourseOutline = () => {
    setShowDialog(false)
    navigate(`/course-outline/${selectedCourse.id}`)
  }

  const handleEnrollNow = () => {
    setShowDialog(false)
    navigate(`/enrollnow?course=${encodeURIComponent(selectedCourse.slug || selectedCourse.title)}`)
  }

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-md flex items-center justify-center min-h-[300px]">
                <Loader2 className="h-8 w-8 animate-spin text-blue-900" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 flex justify-center items-center min-h-[400px]">
        <p className="text-xl text-red-600">Failed to load courses: {error}</p>
      </section>
    )
  }

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.length === 0 ? (
              <p className="col-span-full text-center text-gray-600">No courses available.</p>
            ) : (
              courses.map((course: any, index: number) => (
                <Card
                  key={index}
                  className="group rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer bg-white/80 backdrop-blur-sm"
                  onClick={() => handleCourseClick(course)}
                >
                  {/* Course Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <Badge className="bg-blue-600 text-white border-0 shadow-lg pr-1">Premium</Badge>
                    </div>
                  </div>
                  {/* Course Content */}
                  <CardHeader className="pb-3 relative">
                    <CardTitle className="text-lg font-bold group-hover:text-blue-900 transition-colors line-clamp-2 duration-300">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-500 line-clamp-2 mt-2 leading-relaxed">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-6">
                      <div className="flex items-center gap-1.5 bg-blue-600 px-2 py-1 rounded-md text-blue-900 border border-blue-600">
                        <Clock className="h-3.5 w-3.5" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1.5 bg-blue-50 px-2 py-1 rounded-md text-blue-700 border border-blue-100">
                        <Users className="h-3.5 w-3.5" />
                        {course.students || "0+"}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                      <span className="text-sm font-semibold text-blue-900 group-hover:translate-x-1 transition-transform duration-300">Explore Course</span>
                      <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <Button
              size="lg"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300"
              onClick={() => navigate(`/courses`)}
            >
              Browse All Courses
            </Button>
          </div>

          {/* About & Milestones Section */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-white mt-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Founded in <span className="font-semibold text-primary">2026</span>,
                  <span className="font-bold text-blue-900"> Neotech Solutions </span>
                  has been on a journey of excellence, transforming lives through education
                  and innovation. With a clear vision and commitment, we have achieved
                  remarkable success in the field of IT training and development.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-all duration-300">
                  <h3 className="text-3xl font-extrabold text-blue-900 mb-3">2026</h3>
                  <p className="text-gray-600">
                    Established with a mission to train the next generation of IT professionals.
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-all duration-300">
                  <h3 className="text-3xl font-extrabold text-blue-900 mb-3">10,000+</h3>
                  <p className="text-gray-600">
                    Students successfully trained and placed in leading industries worldwide.
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-extrabold text-red-600 mb-3">Brilliant Success</h3>
                  <p className="text-gray-600">
                    Recognized as one of the fastest-growing IT training institutes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="group hover:shadow-xl transition-all duration-300 bg-white rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary/10 p-3 rounded-full">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19V6m0 0l-2 2m2-2l2 2" /></svg>
                    </span>
                    <span className="text-2xl font-semibold text-gray-900">Our Mission</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To empower individuals with cutting-edge technology skills and provide businesses with innovative software solutions that drive growth and success in the digital age.
                  </p>
                </div>
                <div className="group hover:shadow-xl transition-all duration-300 bg-white rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary/10 p-3 rounded-full">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </span>
                    <span className="text-2xl font-semibold text-gray-900">Our Vision</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To become the leading technology education and software development hub in Pakistan, known for producing skilled professionals and delivering world-class digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Core <span className="text-primary">Values</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  The principles that guide everything we do.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-xl p-8">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-5 flex items-center justify-center">
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">Innovation</div>
                  <p className="text-gray-600 text-sm leading-relaxed">We embrace the latest technologies and trends to deliver forward-thinking solutions and modern education.</p>
                </div>
                <div className="text-center bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-xl p-8">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-5 flex items-center justify-center">
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">Excellence</div>
                  <p className="text-gray-600 text-sm leading-relaxed">We uphold the highest quality standards in both software development and professional training.</p>
                </div>
                <div className="text-center bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-xl p-8">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-5 flex items-center justify-center">
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87" /></svg>
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">Community</div>
                  <p className="text-gray-600 text-sm leading-relaxed">We foster a collaborative environment where learners and professionals thrive together.</p>
                </div>
                <div className="text-center bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-xl p-8">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-5 flex items-center justify-center">
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">Impact</div>
                  <p className="text-gray-600 text-sm leading-relaxed">Our true measure of success lies in the meaningful change we bring to our students and clients.</p>
                </div>
                <div className="text-center bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-xl p-8">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-5 flex items-center justify-center">
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">Expert Team</div>
                  <p className="text-gray-600 text-sm leading-relaxed">Our skilled mentors and developers bring real-world expertise, guiding you every step of the way.</p>
                </div>
                <div className="text-center bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-xl p-8">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-5 flex items-center justify-center">
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6" /><circle cx="11" cy="11" r="8" /></svg>
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">Global Reach</div>
                  <p className="text-gray-600 text-sm leading-relaxed">With clients and students across borders, we empower talent to compete on an international level.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md w-[95%] max-w-lg rounded-2xl shadow-2xl p-6 bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-gray-900 mb-2">
              {selectedCourse?.title}
            </DialogTitle>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Choose what you'd like to explore
            </p>
          </DialogHeader>

          <div className="space-y-4 mt-6">
            {/* Course Outline */}
            <Button
              onClick={handleCourseOutline}
              className="w-full h-16 flex items-center justify-start gap-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
              size="lg"
            >
              <BookOpen className="h-6 w-6" />
              <div className="text-left">
                <div className="font-semibold text-base sm:text-lg">Course Outline</div>
                <div className="text-xs sm:text-sm opacity-90">View detailed curriculum</div>
              </div>
            </Button>

            {/* Enrol Now */}
            <Button
              onClick={handleEnrollNow}
              className="w-full h-16 flex items-center justify-start gap-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-600 hover:to-blue-800 text-white shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
              size="lg"
            >
              <Calendar className="h-6 w-6" />
              <div className="text-left">
                <div className="font-semibold text-base sm:text-lg">Enrol Now</div>
                <div className="text-xs sm:text-sm opacity-90">Start your journey today</div>
              </div>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default LmsCourseSection
