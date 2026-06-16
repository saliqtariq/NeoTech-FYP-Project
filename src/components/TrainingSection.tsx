import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  BarChart3,
  BrainCircuit,
  Code2,
  Cpu,
  Palette,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const subCourses = [
  { name: "Cyber Security", icon: ShieldCheck },
  { name: "Data Analysis", icon: BarChart3 },
  { name: "Ai / Machine Learning", icon: BrainCircuit },
  { name: "Web Development", icon: Code2 },
  { name: "DevOps Engineering", icon: Cpu },
  { name: "UI/UX Designing", icon: Palette },
];

const TrainingSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-50/60 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">

        {/* Text and CTA */}
        <div className="w-full space-y-8 flex flex-col items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase mb-6 border border-blue-100">
              <CheckCircle2 className="w-4 h-4" />
              Empowering Excellence
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15] tracking-tight max-w-4xl">
              Leading the Future of <br className="hidden md:block" />
              <span className="text-blue-900">Tech Education & Software</span>
            </h1>
          </div>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium max-w-3xl">
            At Neotech Solutions, we bridge the gap between academic theory and real-world execution. Our dual-focus model delivers world-class IT training while simultaneously providing robust, scalable software architectures to modern enterprises. Learn directly from the experts actively building the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center w-full">
            <Link
              to="/enrollnow"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group text-lg"
            >
              Start Learning
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/freedemo"
              className="bg-white border-2 border-gray-200 hover:border-blue-200 hover:bg-blue-50 text-gray-700 hover:text-blue-700 font-semibold py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center text-center hover:-translate-y-1 text-lg"
            >
              Consult With Our Experts
            </Link>
          </div>

          {/* Features Grid - Centered & Expanded */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-100 w-full">
            {subCourses.map((course, index) => {
              let Icon = course.icon;
              return (
                <div key={index} className='flex items-center justify-start sm:justify-center gap-4 p-4 rounded-xl hover:bg-white bg-gray-50/50 transition-all duration-300 border border-gray-100 hover:border-blue-100 hover:shadow-md hover:-translate-y-1'>
                  <div className="bg-white shadow-sm p-3 rounded-xl border border-gray-100">
                    <Icon className='h-6 w-6 text-blue-900' />
                  </div>
                  <p className="font-bold text-gray-800 text-sm md:text-base text-left">{course.name}</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrainingSection;
