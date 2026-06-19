import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { GraduationCap, Users, Award, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const whyChooseUs = [
  {
    title: "Expert Instructors",
    link: "/our-instructors",
    description: [
      "At Neotech Solutions, quality education starts with expert instructors. Our trainers are industry professionals with years of real-world experience, bringing practical knowledge directly into the classroom.",
      "With a strong focus on hands-on learning, mentorship, and career transition, we help learners build both confidence and professional competence that meets global standards.",
    ],
    icon: GraduationCap,
    color: "from-blue-600 to-indigo-600",
    stats: "50+ Expert Mentors",
  },
  {
    title: "24/7 Digital Campus",
    link: "/lms",
    description: [
      "Our Learning Management System offers round-the-clock access to resources, allowing students to study at their own pace from anywhere in the world.",
      "With recorded sessions, dedicated labs, and community forums, you stay in full control of your learning journey without ever falling behind.",
    ],
    icon: Clock,
    color: "from-slate-800 to-slate-900",
    stats: "Global LMS Access",
  },
  {
    title: "Certified Excellence",
    link: "/courses",
    description: [
      "Our programs are designed to provide industry-recognized certifications that enhance your credibility and accelerate your professional growth.",
      "Each certification validates your practical expertise, helping you stand out in competitive job markets and build trust with international clients.",
    ],
    icon: Award,
    color: "from-indigo-600 to-blue-800",
    stats: "Industry Validated",
  },
  {
    title: "Global Tech Community",
    link: "https://www.whatsapp.com/channel/0029VaxxiRl6GcGHfaJ6mX2R",
    description: [
      "Join a thriving ecosystem of learners and professionals. Our community-driven environment encourages collaboration, networking, and peer-to-peer support.",
      "Exchange ideas, collaborate on projects, and build professional connections that last a lifetime in our supportive global network.",
    ],
    icon: Users,
    color: "from-blue-500 to-indigo-500",
    stats: "10,000+ Students",
  },
  {
    title: "Career Transformation",
    link: "/courses",
    isLink: true,
    description: [
      "We are committed to your long-term success. Gain access to personalized mentorship, resume optimization, and job placement assistance.",
      "Our structured support system focuses on career-readiness, ensuring you transition confidently into the global tech workforce.",
    ],
    icon: TrendingUp,
    color: "from-blue-700 to-slate-900",
    stats: "85% Placement Rate",
  },
];

const StickyCard = ({
  i,
  title,
  description,
  icon: Icon,
  link,
  color,
  stats,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.8, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky w-full -top-0 flex h-[90vh] md:h-screen items-center justify-center px-4"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20}px)`,
        }}
        className="relative flex w-full max-w-7xl md:h-[500px] origin-top flex-col rounded-3xl p-6 md:p-10 shadow-2xl"
      >
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color} opacity-100`}
        />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
            <motion.div
              style={{ scale: imageScale }}
              className="flex h-16 w-16 md:h-20 md:w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"
            >
              <Icon
                className="h-8 w-8 md:h-10 md:w-10 text-white"
                strokeWidth={1.5}
              />
            </motion.div>

            <div className="flex-1 w-full">
              <div className="mb-2 md:mb-3 inline-block rounded-full bg-white/20 px-3 py-1 md:px-4 md:py-1 backdrop-blur-sm">
                <span className="text-xs md:text-sm font-semibold text-white">
                  {stats}
                </span>
              </div>
              <h2 className="mb-2 md:mb-4 text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                {title}
              </h2>
              <div className="text-base md:text-lg flex flex-col gap-6 lg:text-xl leading-relaxed text-white/90">
                {description.map((des, index) => (
                  <p key={index}>{des}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex gap-1 md:gap-2">
              {[...Array(3)].map((_, idx) => (
                <div
                  key={idx}
                  className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-white/40"
                  style={{ opacity: idx === 0 ? 1 : 0.4 }}
                />
              ))}
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-white/80">
            <Link to={link} className="flex items-center gap-2">
              <span className="text-xs md:text-sm font-medium">Learn More</span>
              <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30">
                <svg
                  className="h-4 w-4 md:h-5 md:w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const WhyChooseUs = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className="relative w-full bg-slate-50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <div className="text-center py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
          <span className="text-xs font-bold text-slate-800 tracking-widest uppercase">The Neotech Advantage</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8">
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Neotech Solutions?</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
          Neotech Solutions is a premier technology partner dedicated to empowering professionals with high-impact training and bespoke software solutions. We specialize in modern web ecosystems, AI integration, and career-first education that drives real-world success in the global tech landscape.
        </p>
      </div>
      {whyChooseUs.map((item, i) => {
        const targetScale = Math.max(
          0.85,
          1 - (whyChooseUs.length - i - 1) * 0.05
        );
        return (
          <StickyCard
            key={`card_${i}`}
            i={i}
            {...item}
            progress={scrollYProgress}
            range={[i * 0.2, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

export default WhyChooseUs;
