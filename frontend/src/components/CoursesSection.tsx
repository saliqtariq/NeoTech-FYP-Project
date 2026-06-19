import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ShoppingCart, Loader2, PlayCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useCourses } from "@/hooks/useCourses";

const CoursesSection = () => {
  const navigate = useNavigate();
  const { addToCart, isPakistan, locationLoading, formatPrice } = useCart();
  const { courses: fetchedCourses, loading: coursesLoading } = useCourses();
  const [showPrice, setShowPrice] = useState(true);

  const getUniversalImage = (image: string) => {
    if (!image) return "https://via.placeholder.com/800x450/ECFDF5/065F46?text=Course+Image";
    if (image.startsWith("http") || image.startsWith("https") || image.startsWith("/") || image.startsWith("data:")) {
      return image;
    }
    if (image.includes("unsplash.com") || image.includes("images.unsplash.com")) return image;
    return `https://images.unsplash.com/${image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
  };

  const courses = isPakistan ? fetchedCourses : fetchedCourses.filter((c: any) => !c.isRamadan);
  const coursesToDisplay = courses.slice(0, 6); // Take top 4 for the homepage section

  // Disable Inspect Element
  useEffect(() => {
    const disableInspect = (e: any) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) // Ctrl+Shift+I/J
      ) {
        e.preventDefault();
        return false;
      }
    };

    const disableRightClick = (e: any) => e.preventDefault();

    document.addEventListener("keydown", disableInspect);
    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("keydown", disableInspect);
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-60 -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-100 pb-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Elite Engineering <br />
              <span className="text-blue-900">Masterclasses</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Explore advanced, industry-recognised training architectures. Designed for the ambitious developer and digital leader.
            </p>
          </div>
          <div>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 font-bold border-gray-200 text-slate-800 hover:bg-slate-50 hover:text-blue-900 hover:border-blue-200 transition-all shadow-sm"
              onClick={() => navigate("/courses")}
            >
              View Full Catalog
            </Button>
          </div>
        </div>

        {/* Courses Grid */}
        {locationLoading || coursesLoading ? (
          <div className="flex flex-col items-center justify-center py-20 min-h-[400px]">
            <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
            <p className="text-gray-600 font-medium">Loading courses...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {coursesToDisplay.map((course: any, index: number) => (
              <div
                key={index}
                className="group relative flex flex-col bg-white rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Overlapping Image Area */}
                <div className="relative overflow-hidden shrink-0 h-[240px] m-2 rounded-2xl">
                  <img
                    src={getUniversalImage(course.image)}
                    alt={`${course.title} online course`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                    onClick={() => {
                      navigate(course.url);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  <Badge className={`absolute top-4 left-4 ${course.isRamadan ? 'bg-blue-600/90' : 'bg-slate-900/90'} backdrop-blur-sm text-white px-3 py-1 rounded-full z-10 border-none shadow-sm`}>
                    {course.isRamadan ? "🌙 Ramadan Special" : (course.level || "Advance")}
                  </Badge>

                  {/* Floating Price Tag */}
                  {showPrice && (
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-slate-900 font-bold px-4 py-2 rounded-xl text-sm shadow-lg border border-white/20">
                      {formatPrice(course)}{!isPakistan && "/Mo"}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 pt-6 flex flex-col flex-grow">

                  {/* Meta Stats Row */}
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-500 mb-4 tracking-wide uppercase">
                    <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md">
                      <Clock className="h-3.5 w-3.5 text-blue-900" /> {course.duration}
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md">
                      <Star className="h-3.5 w-3.5 text-amber-500" /> {course.rating || "4.8"}
                    </div>
                  </div>

                  <h3
                    className="text-2xl font-extrabold text-slate-900 group-hover:text-blue-900 transition-colors cursor-pointer line-clamp-2 leading-tight mb-3"
                    onClick={() => {
                      navigate(course.url);
                    }}
                  >
                    {course.title}
                  </h3>

                  <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed mb-8 flex-grow">
                    {course.description}
                  </p>

                  {/* Interactive Footer Row */}
                  <div className="mt-auto border-t border-slate-100 pt-6">
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        className="w-full bg-slate-900 border-slate-900 text-white hover:bg-slate-800 transition-all rounded-xl shadow-sm hover:shadow-md"
                        onClick={() => window.open("/enrollnow", "_blank")}
                      >
                        Enroll Now
                      </Button>
                      <Button
                        className="w-full bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white transition-all rounded-xl border border-blue-100"
                        onClick={() => {
                          addToCart(course.title);
                          navigate("/cart");
                        }}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" /> Cart
                      </Button>

                      {!course.isRamadan && (
                        <div className="col-span-2 grid grid-cols-2 gap-3 mt-1">
                          <Button
                            variant="ghost"
                            className="w-full text-slate-500 hover:text-blue-900 hover:bg-blue-50 text-xs font-semibold rounded-lg"
                            onClick={() => navigate(`/FreeDemo?course=${course.id}`)}
                          >
                            <PlayCircle className="h-4 w-4 mr-1.5" /> Demo
                          </Button>
                          <Button
                            variant="ghost"
                            className="w-full text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 text-xs font-semibold rounded-lg"
                            onClick={() => navigate(`/course-outline/${course.id}`)}
                          >
                            Curriculum
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}


      </div>
    </section>
  );
};

export default CoursesSection;
