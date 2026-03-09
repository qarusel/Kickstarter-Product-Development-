import Link from "next/link";

export const metadata = {
  title: "Timeline & Future Plans – NeuroDrive",
};

const timeline = [
  { week: "Week 1", title: "Research & Planning", desc: "Define game concept, research cognitive training methods, plan feature list and architecture.", status: "done" },
  { week: "Week 2", title: "Environment Setup", desc: "Set up Unity project, import base assets, design the racing track layout.", status: "done" },
  { week: "Week 3", title: "Core Mechanics", desc: "Implement car controls, physics, camera system, and basic movement.", status: "done" },
  { week: "Week 4", title: "Obstacle & Scoring System", desc: "Add dynamic obstacles, collision detection, reaction timer, and scoring logic.", status: "active" },
  { week: "Week 5", title: "UI & HUD", desc: "Build main menu, in-game HUD, and post-race summary screen.", status: "upcoming" },
  { week: "Week 6", title: "Testing & Polish", desc: "Playtest, fix bugs, tune difficulty, and polish visuals and audio.", status: "upcoming" },
  { week: "Week 7", title: "Final Build & Submission", desc: "Create final playable build, record demo, publish homepage, submit project.", status: "upcoming" },
];

const improvements = [
  { title: "Multiplayer Mode", desc: "Real-time online racing against other players with global leaderboards." },
  { title: "Adaptive Difficulty", desc: "AI that adjusts obstacle frequency and speed based on the player's measured reaction time." },
  { title: "Progress Dashboard", desc: "Track cognitive improvement over time with detailed charts and statistics." },
  { title: "VR Support", desc: "Immersive VR mode for an even more intense reaction training experience." },
  { title: "Mobile Port", desc: "Touch-controlled mobile version for training on the go." },
  { title: "Educational Mode", desc: "Classroom-friendly version with structured cognitive training programs." },
];

export default function TimelinePage() {
  const doneCount = timeline.filter((t) => t.status === "done").length;

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-200 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-300">Timeline &amp; Future Plans</span>
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 rounded-full border border-purple-500/40 bg-purple-500/5 text-purple-400 text-xs font-display tracking-widest mb-4">
            06 · ADDITIONAL INFORMATION
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Timeline &amp; Future Plans
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            Our development roadmap and the exciting features planned for future versions.
          </p>
          <div className="mt-4 w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-cyan-500" />
        </div>

        {/* Progress bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="flex justify-between text-xs text-slate-500 mb-2">
            <span className="font-display tracking-wider">PROGRESS</span>
            <span className="text-cyan-400">{doneCount} / {timeline.length} weeks complete</span>
          </div>
          <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-500"
              style={{ width: `${(doneCount / timeline.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="font-display font-semibold text-white text-sm tracking-widest mb-8 text-center uppercase">
            Development Timeline
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent" />

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div
                  key={item.week}
                  className={`relative flex gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 mt-1.5 ${
                      item.status === "done"
                        ? "bg-cyan-400 border-cyan-400"
                        : item.status === "active"
                        ? "bg-purple-400 border-purple-400 animate-pulse"
                        : "bg-slate-700 border-slate-600"
                    }`}
                  />

                  {/* Content */}
                  <div className={`ml-10 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"}`}>
                    <div
                      className={`inline-block px-2 py-0.5 rounded text-xs font-display mb-1 ${
                        item.status === "done"
                          ? "bg-cyan-500/10 text-cyan-400"
                          : item.status === "active"
                          ? "bg-purple-500/10 text-purple-400"
                          : "bg-slate-800 text-slate-500"
                      }`}
                    >
                      {item.week}
                    </div>
                    <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future improvements */}
        <div className="mb-12">
          <h2 className="font-display font-semibold text-white text-sm tracking-widest mb-8 text-center uppercase">
            Future Improvements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {improvements.map((item) => (
              <div
                key={item.title}
                className="card-hover flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Charity note */}
        <div className="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-8 text-center mb-12">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-3">
            <div className="w-4 h-4 rounded-full bg-purple-400" />
          </div>
          <h2 className="font-display font-semibold text-purple-400 text-sm tracking-widest mb-2 uppercase">
            Charity Component
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            A portion of any future proceeds from NeuroDrive will be donated to organizations
            supporting cognitive health research and accessible education in technology for
            young people.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/team"
            className="px-6 py-3 rounded-full border border-slate-700 text-slate-400 text-sm font-display tracking-wider hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
          >
            ← Meet the Team
          </Link>
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-display tracking-wider hover:opacity-90 transition-opacity duration-200"
          >
            Back to Home →
          </Link>
        </div>
      </div>
    </main>
  );
}
