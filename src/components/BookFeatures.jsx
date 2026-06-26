import React from 'react';
import FadeUp from './FadeUp';

export default function BookFeatures() {
  // Static data for the ebook features
  const features = [
    {
      id: 1,
      icon: "🚀",
      title: "Master the Fundamentals",
      description: "Dive deep into core concepts with crystal-clear explanations and zero fluff."
    },
    {
      id: 2,
      icon: "💻",
      title: "Real-World Projects",
      description: "Build 5 hands-on projects from scratch to solidify your practical knowledge."
    },
    {
      id: 3,
      icon: "⚡",
      title: "Production Optimization",
      description: "Learn industry-standard tips to optimize performance and scale effortlessly."
    },
    {
      id: 4,
      icon: "🛠️",
      title: "Cheatsheets & Assets",
      description: "Get exclusive access to downloadable source codes, checklists, and guides."
    }
  ];

  return (
    <section className="bg-slate-900 text-white py-20 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Subtle Gradient Blobs for Modern Look */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <FadeUp  className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm">
            Inside The Book
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 tracking-tight leading-tight">
            What will you achieve after reading this <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Ebook?</span>
          </h2>
          <p className="text-slate-400 mt-4 text-lg">
            Stop wasting time on endless tutorials. Get a structured roadmap designed to take you from a beginner to a confident pro.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 group backdrop-blur-sm"
            >
              <div className="flex items-start gap-5">
                {/* Icon Container */}
                <div className="text-3xl bg-slate-700/50 p-4 rounded-xl group-hover:bg-purple-600/20 transition-colors duration-300 shrink-0">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-purple-300 transition-colors duration-300">
                    {feature.id}. {feature.title}
                  </h3>
                  <p className="text-slate-400 mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Micro-CTA inside Section */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 italic">
            * Includes lifetime updates and future additions for free.
          </p>
        </div>

      </FadeUp>
    </section>
  );
}