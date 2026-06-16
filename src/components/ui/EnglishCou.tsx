import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Star, Users, Globe, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";





export default function ProCourse() {
  const navigate = useNavigate();
  const courses = [
    {
      title: "IELTS Preparation",
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
      desc: "Comprehensive IELTS preparation including Listening, Reading, Writing, and Speaking with real exam simulations and strategies."
    },
    {
      title: "PTE Academic",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      desc: "Learn PTE with modern AI-based techniques, scoring strategies, and real exam practice tests."
    },
    {
      title: "Spoken English",
      img: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21",
      desc: "Improve fluency, pronunciation, and communication skills for everyday and professional conversations."
    },
    {
      title: "Business English",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      desc: "Master professional communication for meetings, presentations, interviews, and corporate environments."
    },
    {
      title: "English Grammar Mastery",
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      desc: "Strengthen grammar fundamentals to improve writing, speaking, and exam performance."
    },
    {
      title: "Interview & Career English",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
      desc: "Prepare for international job interviews and professional communication confidently."
    },

    {
      title: "TOEFL Preparation",
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0",
      desc: "Prepare for the TOEFL exam with complete training in reading, writing, listening, and speaking."
    },
    {
      title: "OET Preparation",
      img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
      desc: "Professional English training designed for healthcare professionals preparing for the OET exam."
    },
    {
      title: "English for Study Abroad",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      desc: "Prepare for studying abroad with academic English, presentations, and communication training."
    },
    {
      title: "Advanced Speaking & Fluency",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      desc: "Advanced speaking sessions designed to improve fluency, accent, and confidence."
    },
    {
      title: "English Writing Skills",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
      desc: "Learn professional writing including essays, reports, emails, and academic writing."
    },
    {
      title: "Public Speaking in English",
      img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
      desc: "Develop confidence in delivering presentations, speeches, and professional communication."
    }

  ];

  const testimonials = [
    {
      name: "Ali Hassan",
      role: "IELTS Student",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "The IELTS training helped me achieve Band 7.5. The instructors were extremely supportive."
    },
    {
      name: "Ayesha Khan",
      role: "Spoken English Student",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "My spoken English improved dramatically. Now I can confidently communicate in meetings."
    },
    {
      name: "Usman Tariq",
      role: "PTE Student",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      review:
        "Best institute for English courses. The environment and training quality is excellent."
    }
  ];

  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center py-32 text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b)",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-6xl mx-auto text-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Pro English Courses 2026
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto text-lg text-gray-200"
          >
            Master English communication, prepare for international exams,
            and unlock global opportunities with our expert-led training programs.
          </motion.p>



        </div>
      </section>


      {/* STATISTICS SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

          <div>
            <Users className="mx-auto text-[#3b82f6]" size={40} />
            <h3 className="text-2xl font-bold mt-3">5200+</h3>
            <p className="text-gray-500">Students Trained</p>
          </div>

          <div>
            <Award className="mx-auto text-[#3b82f6]" size={40} />
            <h3 className="text-2xl font-bold mt-3">98%</h3>
            <p className="text-gray-500">Success Rate</p>
          </div>

          <div>
            <Globe className="mx-auto text-[#3b82f6]" size={40} />
            <h3 className="text-2xl font-bold mt-3">20+</h3>
            <p className="text-gray-500">Countries Students</p>
          </div>

          <div>
            <Star className="mx-auto text-[#3b82f6]" size={40} />
            <h3 className="text-2xl font-bold mt-3">4.9</h3>
            <p className="text-gray-500">Average Rating</p>
          </div>

        </div>
      </section>


      {/* COURSES SECTION */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-14"
          >
            Our Professional English Programs
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">

            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >

                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-xl font-semibold mb-3">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {course.desc}
                  </p>

                  <button
                    onClick={() => navigate("/enrollnow")}
                    className="flex items-center gap-2 mt-6 bg-[#3b82f6] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition"
                  >
                    <GraduationCap size={18} />
                    Enroll Now
                  </button>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10">
            Why Choose Our English Training?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Expert Trainers
              </h3>
              <p className="text-gray-600 text-sm">
                Learn from experienced instructors with real international
                exam and professional training experience.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Practical Learning
              </h3>
              <p className="text-gray-600 text-sm">
                Interactive sessions, real exam simulations, and speaking
                practice to build confidence.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Career Opportunities
              </h3>
              <p className="text-gray-600 text-sm">
                Prepare for global careers, international studies,
                and professional growth.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* TESTIMONIALS */}
      <section className="py-28 px-6 bg-gray-100">

        <div className="max-w-6xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            What Our Students Say
          </motion.h2>

          <p className="text-gray-600 mb-16">
            Thousands of students trust our training programs to improve their English
            and achieve international success.
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-left relative"
              >

                {/* Stars */}
                <div className="flex mb-4 text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>

                {/* Review */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  "{item.review}"
                </p>

                {/* Student Info */}
                <div className="flex items-center gap-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.name}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {item.role}
                    </span>
                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-[#3b82f6] text-white py-16 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Start Your English Learning Journey Today
        </h2>

        <p className="mb-8">
          Join thousands of students improving their English skills
          and preparing for global opportunities.
        </p>

        <button className="bg-white text-[#3b82f6] px-8 py-3 rounded-full font-semibold shadow-md">
          Book Free Demo
        </button>

      </section>

    </div>
  );
}
