import React, { useState } from "react";
import { Headphones, Lightbulb, Globe, Award, Sparkles } from "lucide-react";

export default function WhyChooseUsAbout() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated support for students & clients.",
      color: "#1040b9",
      bgGlow: "rgba(16, 185, 129, 0.4)",
    },
    {
      icon: Lightbulb,
      title: "Modern Tech",
      description: "Innovative software & learning stacks.",
      color: "#14b8a6",
      bgGlow: "rgba(20, 184, 166, 0.4)",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Serving excellence in 10+ countries.",
      color: "#3b82f6",
      bgGlow: "rgba(34, 197, 94, 0.4)",
    },
    {
      icon: Award,
      title: "Impactful Results",
      description: "Proven 98% satisfaction track record.",
      color: "#2563eb",
      bgGlow: "rgba(5, 150, 105, 0.4)",
    },
  ];

  return (
    <section className="relative py-12 overflow-hidden bg-black">
      <style>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        
        .grid-bg {
          background-image: 
            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        
        .card-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.6s;
        }
        
        .card-hover:hover .card-shine {
          left: 200%;
        }
      `}</style>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      {/* Large Glowing Orbs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.6) 0%, transparent 70%)",
          animation: "glow 4s ease-in-out infinite",
        }}
      ></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(20, 184, 166, 0.6) 0%, transparent 70%)",
          animation: "glow 4s ease-in-out infinite",
          animationDelay: "2s",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Epic Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-teal-500/20 border-2 border-blue-600/50 backdrop-blur-xl">
            <Sparkles className="text-blue-900" size={20} />
            <span className="text-blue-900 font-bold tracking-widest uppercase text-sm">
              Partnership Excellence
            </span>
            <Sparkles className="text-blue-900" size={20} />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-teal-300 to-blue-800 bg-clip-text text-transparent drop-shadow-2xl">
              Why Partner
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">with Us?</span>
          </h2>

          <p className="text-blue-900 text-xl max-w-3xl mx-auto font-light">
            We are more than just a provider; <br className="hidden md:block" />
            <span className="font-bold text-white">
              we are your growth partner.
            </span>
          </p>
        </div>

        {/* Feature Cards - Bold 3D Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative card-hover"
                style={{
                  animation: `float ${6 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Glow on Hover */}
                {isHovered && (
                  <div
                    className="absolute inset-0 rounded-3xl transition-all duration-700"
                    style={{
                      background: `radial-gradient(circle at center, ${feature.bgGlow} 0%, transparent 70%)`,
                      filter: "blur(30px)",
                      transform: "scale(1.3)",
                    }}
                  ></div>
                )}

                {/* Card Body */}
                <div
                  className="relative rounded-3xl p-8 transition-all duration-700 overflow-hidden"
                  style={{
                    background: isHovered
                      ? `linear-gradient(135deg, ${feature.color}15 0%, ${feature.color}30 100%)`
                      : "rgba(255, 255, 255, 0.05)",
                    border: `2px solid ${isHovered ? feature.color : "rgba(255, 255, 255, 0.1)"
                      }`,
                    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                    boxShadow: isHovered
                      ? `0 20px 40px ${feature.bgGlow}`
                      : "0 10px 30px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Shine Effect */}
                  <div className="card-shine"></div>

                  {/* Icon - Large & Bold */}
                  <div className="mb-8 relative">
                    <div
                      className="w-28 h-28 mx-auto rounded-2xl flex items-center justify-center relative transition-all duration-700"
                      style={{
                        background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}80 100%)`,
                        boxShadow: isHovered
                          ? `0 15px 30px ${feature.bgGlow}`
                          : "none",
                        transform: isHovered
                          ? "rotate(5deg) scale(1.05)"
                          : "rotate(0deg) scale(1)",
                      }}
                    >
                      <Icon
                        className="text-white"
                        size={56}
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <h5
                    className="font-black text-2xl mb-4 text-center transition-all duration-700"
                    style={{ color: isHovered ? feature.color : "white" }}
                  >
                    {feature.title}
                  </h5>

                  <p className="text-gray-300 text-center leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  {/* Bottom Bar Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
                    <div
                      className="h-full transition-all duration-700"
                      style={{
                        background: feature.color,
                        width: isHovered ? "100%" : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
