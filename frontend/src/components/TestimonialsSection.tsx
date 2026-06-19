import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { themeConfig } from "@/config/themeConfig";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ahmad Hassan",
      role: "MERN Graduate",
      company: "Software Engineer at TechCorp",
      content:
        "Neotech Solutions transformed my career. The MERN stack course was comprehensive, and the instructors were outstanding in delivering industry-relevant skills.",
      rating: 4,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.UkTBowRhbbhym0TupnXktgHaE7&pid=Api&P=0&h=220",
    },
    {
      name: "Fatima Ali",
      role: "Data Analyst Graduate",
      company: "Data Analyst at DataTech",
      content:
        "The Data Analyst course at Neotech provided me with practical, hands-on experience that I apply daily in my role. The project-based learning approach was invaluable.",
      rating: 4,
      image:
        "https://tse1.mm.bing.net/th?id=OIP.n-76d4Sh0jA5ZDeEbzZXlQHaE8&pid=Api&P=0&h=220",
    },
    {
      name: "Sarah Khan",
      role: "AI Course Graduate",
      company: "ML Engineer at AI Solutions",
      content:
        "The AI course exceeded my expectations. In-depth knowledge combined with real-world applications helped me secure my dream role in machine learning.",
      rating: 5,
      image:
        "https://t3.ftcdn.net/jpg/02/96/07/04/360_F_296070450_Jd5JTMFIiIOycPxiXFy70sBx5enf2wuB.jpg",
    },
    {
      name: "TechStart Inc.",
      role: "Software Development Client",
      company: "Startup Company",
      content:
        "Neotech Solutions delivered a robust, scalable web application on time and within budget. Their technical expertise and seamless communication made the collaboration effortless.",
      rating: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSLqk-rARKf4YoK_Goy60lXm5T3_Jl3t3fA&s",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-100/60 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-slate-200">
            Social Proof
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Trusted by Leaders <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Loved by Learners</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            Real experiences from graduates and premium businesses who have partnered with
            Neotech Solutions for transformative education and high-tier engineering.
          </p>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start pb-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`w-full ${index % 2 !== 0 ? 'lg:mt-16' : ''}`}
            >
              <div className="group relative bg-white border border-slate-100 rounded-3xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 overflow-visible h-full flex flex-col p-8">

                {/* Accent Top Borader */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating Quote Icon */}
                <div className="absolute -top-5 -right-5 bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 shadow-sm border border-blue-100 z-10">
                  <Quote className="text-blue-900 w-6 h-6" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 mr-1 ${i < testimonial.rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-slate-100 text-slate-200"
                        }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-600 mb-8 leading-relaxed font-medium flex-grow italic">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center mt-auto border-t border-slate-100 pt-6">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-xl mr-4 object-cover border border-slate-200 shadow-sm group-hover:shadow-md transition-all scale-100 group-hover:scale-105"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full z-10" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs font-semibold text-slate-500 mb-0.5">{testimonial.role}</p>
                    <p className="text-[10px] font-bold text-indigo-600 tracking-wider uppercase">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
