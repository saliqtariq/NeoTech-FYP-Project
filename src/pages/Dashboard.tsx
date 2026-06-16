"use client";

import { useState, useEffect } from "react";
import { useUser, RedirectToSignIn } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, Calendar, Clock, PlayCircle, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { isClerkEnabled } from "@/withClerkProvider";

export default function StudentDashboard() {
  // Handle Clerk safety
  const clerk = isClerkEnabled ? useUser() : { isLoaded: true, isSignedIn: false, user: null };
  const { isLoaded, isSignedIn, user } = clerk;
  const navigate = useNavigate();

  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [loading, setLoading] = useState(isClerkEnabled);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isClerkEnabled) {
      setLoading(false);
      return;
    }
    if (!isLoaded || !isSignedIn || !user?.primaryEmailAddress?.emailAddress) return;

    const fetchEnrollments = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        setEnrollments([{
          _id: "mock1",
          accessType: "admin_granted",
          batch: { _id: "2026", name: "Mock Batch", startDate: new Date().toISOString() },
          course: { title: "Neotech Rebranding Overview", thumbnail: "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg" }
        }]);
      } catch (err) {
        console.error("Failed to fetch enrollments:", err);
        setError("Could not load your courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollments();
  }, [isLoaded, isSignedIn, user]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-12 h-12 text-blue-900 animate-spin" />
      </div>
    );
  }

  if (!isClerkEnabled) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
        <div className="max-w-md w-full text-center p-12 bg-white rounded-[2.5rem] shadow-xl border border-slate-100">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Auth Disabled</h2>
          <p className="text-slate-500 mb-8 font-medium">Authentication is currently disabled due to configuration issues. Please contact support.</p>
          <Button onClick={() => navigate("/")} className="w-full bg-blue-600 rounded-2xl h-14 font-bold">Back to Home</Button>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <div className="min-h-[85vh] bg-slate-50 pb-24 pt-32 font-poppins relative">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <Helmet>
        <title>My Dashboard | Neotech Solutions</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Welcome Section */}
        <div className="bg-white rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-10 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="h-20 w-20 rounded-full overflow-hidden bg-gray-100 shadow-inner flex items-center justify-center">
              {user?.imageUrl ? (
                <img src={user.imageUrl} alt={user.fullName || "User"} className="h-full w-full object-cover" />
              ) : (
                <span className="text-3xl font-bold text-gray-400">{user?.firstName?.charAt(0) || "U"}</span>
              )}
            </div>
            <div>
              <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                {enrollments.some(e => e.accessType === 'admin_granted')
                  ? "Welcome back, Admin!"
                  : `Welcome back, ${user?.firstName || "Student"}!`} 🚀
              </h1>
              <p className="text-slate-500 mt-2 font-medium">
                {enrollments.some(e => e.accessType === 'admin_granted')
                  ? "You have unrestricted access to oversee all active courses and lectures."
                  : "Here is the latest overview of your learning journey with Neotech."}
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3 tracking-tight">
          <BookOpen className="h-6 w-6 text-blue-900" />
          My Enrolled Courses
        </h2>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-blue-900 animate-spin" />
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-600 p-6 rounded-[2rem] text-center border border-red-100 font-bold">
            {error}
          </div>
        ) : enrollments.length === 0 ? (
          <div className="bg-white rounded-[2rem] p-16 text-center border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
            <div className="h-24 w-24 bg-slate-50 mx-auto rounded-full flex items-center justify-center mb-6 border border-slate-100">
              <BookOpen className="h-10 w-10 text-slate-300" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">No active enrollments found</h3>
            <p className="text-slate-500 mb-8 max-w-md mx-auto font-medium">
              If you recently purchased a course, it might take a few moments to appear here. If you enrolled manually via WhatsApp, please wait for admin approval.
            </p>
            <Link to="/courses">
              <Button className="bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] transition-all duration-300 text-white rounded-full px-10 py-6 text-lg font-bold">
                Explore Courses
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enrollments.map((enr) => (
              <Card key={enr._id} className="rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden group bg-white">
                <div className="aspect-video w-full relative overflow-hidden bg-gray-100">
                  <img
                    src={enr.course?.thumbnail || "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg"}
                    alt={enr.course?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold border border-white/30 truncate block max-w-fit">
                      Batch: {enr.batch?.name}
                    </span>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 line-clamp-2 tracking-tight">
                    {enr.course?.title || "Unknown Course"}
                  </h3>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-sm text-slate-500 font-medium gap-3">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span>Started: {new Date(enr.batch?.startDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-500 font-medium gap-3">
                      <PlayCircle className="h-4 w-4 text-blue-900" />
                      <span>{enr.batch?.videos?.length || 0} Recorded Lectures</span>
                    </div>
                  </div>

                  <Link to={`/recorded-lectures/${enr.batch?._id}`}>
                    <Button className="w-full rounded-xl bg-blue-50 text-blue-900 hover:bg-blue-600 hover:text-white transition-all duration-300 py-6 font-bold shadow-none ring-1 ring-inset ring-blue-100 hover:ring-transparent hover:shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)]">
                      <PlayCircle className="mr-2 h-5 w-5" />
                      Watch Lectures
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
