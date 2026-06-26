import React from 'react';

export default function BookChapters() {
  // Static data for Ebook Chapters
  const chapters = [
    {
      num: "01",
      title: "The Mindset & Foundation",
      duration: "Pages 12 - 45",
      topics: ["Overcoming tutorial hell", "Setting up a bulletproof workflow", "Mental models for modern devs"]
    },
    {
      num: "02",
      title: "Advanced Architecture",
      duration: "Pages 46 - 98",
      topics: ["Deep dive into design patterns", "State management secrets", "Scalable folder structures"]
    },
    {
      num: "03",
      title: "The Art of Clean Code",
      duration: "Pages 99 - 150",
      topics: ["Refactoring messy logic", "Writing self-documenting code", "Automated testing essentials"]
    },
    {
      num: "04",
      title: "Monetizing Your Skills",
      duration: "Pages 151 - 210",
      topics: ["Freelancing blueprints", "Cracking tech interviews", "Building a high-value portfolio"]
    }
  ];

  return (
    <section className="bg-black text-slate-100 py-24 px-6 sm:px-12 lg:px-24 relative">
      {/* Premium subtle mesh grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Heading Left Aligned for a change */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm tracking-widest uppercase mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Curriculum Syllabus
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Take a look <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">inside the chapters.</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-base md:text-right leading-relaxed">
            4 comprehensive modules, 200+ pages of pure value, packed with actionable strategies and code blocks.
          </p>
        </div>

        {/* Chapters Stack List */}
        <div className="space-y-6">
          {chapters.map((chapter) => (
            <div 
              key={chapter.num}
              className="group bg-neutral-950/60 border border-neutral-800 rounded-3xl p-6 sm:p-8 hover:bg-neutral-900/60 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* Left Side: Number and Title */}
                <div className="flex items-center gap-6">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-neutral-700 group-hover:text-emerald-400/80 transition-colors duration-300">
                    {chapter.num}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-wide group-hover:text-white transition-colors">
                      {chapter.title}
                    </h3>
                    <span className="inline-block bg-neutral-800 text-neutral-400 text-xs font-medium px-2.5 py-1 rounded-md mt-2">
                      {chapter.duration}
                    </span>
                  </div>
                </div>

                {/* Right Side: Topics Bullets */}
                <div className="border-t border-neutral-800 md:border-t-0 pt-4 md:pt-0">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 max-w-md">
                    {chapter.topics.map((topic, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/60"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callouts */}
        <div className="mt-12 flex flex-wrap gap-6 justify-center items-center text-sm text-neutral-500 bg-neutral-950 border border-neutral-900 p-4 rounded-2xl">
          <div className="flex items-center gap-2">🟢 Includes Interactive Quizzes</div>
          <div className="text-neutral-700">•</div>
          <div className="flex items-center gap-2">🟢 HD Code Snippets Inside</div>
          <div className="text-neutral-700">•</div>
          <div className="flex items-center gap-2">🟢 EPUB + PDF Formats</div>
        </div>

      </div>
    </section>
  );
}