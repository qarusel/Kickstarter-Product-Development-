import Link from "next/link";

export const metadata = {
  title: "Sketches & Design – NeuroDrive",
};

const screens = [
  {
    title: "Main Menu Screen",
    desc: "The entry point of the game. Features the NeuroDrive logo, Play button, difficulty selector, and leaderboard access.",
    color: "from-cyan-900/40 to-slate-900",
    accent: "cyan" as const,
    elements: ["NeuroDrive Logo", "Play Button", "Difficulty: Easy / Medium / Hard", "Leaderboard", "Settings"],
  },
  {
    title: "Racing Track View",
    desc: "The main gameplay screen. Third-person camera follows the car on a 3D track with HUD overlay showing speed, score, and timer.",
    color: "from-purple-900/40 to-slate-900",
    accent: "purple" as const,
    elements: ["3D Track Environment", "Player Car (3rd person)", "Obstacle Objects", "Speed Meter HUD", "Reaction Timer", "Score Counter"],
  },
  {
    title: "Post-Race Summary",
    desc: "Displayed after completing a lap. Shows reaction time breakdown, final score, performance rating, and option to retry.",
    color: "from-cyan-900/30 to-purple-900/30",
    accent: "cyan" as const,
    elements: ["Final Score", "Avg. Reaction Time", "Performance Rating", "Best Lap Time", "Retry / Menu"],
  },
];

const principles = [
  {
    title: "Dark Theme",
    desc: "Dark background reduces eye strain during extended play sessions",
  },
  {
    title: "Minimal HUD",
    desc: "Only essential info on screen to avoid distracting the player",
  },
  {
    title: "Neon Accents",
    desc: "Cyan and purple highlights for a futuristic, high-tech aesthetic",
  },
  {
    title: "Clear Feedback",
    desc: "Immediate visual and audio feedback for every player action",
  },
];

export default function DesignPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-200 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-300">Sketches &amp; Design</span>
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 rounded-full border border-purple-500/40 bg-purple-500/5 text-purple-400 text-xs font-display tracking-widest mb-4">
            04 · SKETCHES &amp; PROTOTYPE DESIGN
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Interface Design
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            Wireframe concepts for the three core screens of NeuroDrive.
          </p>
          <div className="mt-4 w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-cyan-500" />
        </div>

        {/* Screen wireframes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {screens.map((screen) => (
            <div
              key={screen.title}
              className="card-hover rounded-2xl border border-slate-800 overflow-hidden"
            >
              {/* Wireframe mockup */}
              <div
                className={`bg-gradient-to-br ${screen.color} p-6 h-52 flex flex-col items-center justify-center gap-2 border-b border-slate-800`}
              >
                <div className="w-full max-w-xs space-y-2">
                  {screen.elements.map((el) => (
                    <div
                      key={el}
                      className={`h-6 rounded px-3 flex items-center text-xs ${
                        screen.accent === "cyan"
                          ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                          : "bg-purple-500/10 border border-purple-500/20 text-purple-300"
                      }`}
                    >
                      {el}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5 bg-slate-900/60">
                <h3 className="font-display font-semibold text-white text-sm mb-2">
                  {screen.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">{screen.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Design principles */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 mb-12">
          <h2 className="font-display font-semibold text-white text-sm mb-6 tracking-widest uppercase">
            Design Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="text-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500" />
                </div>
                <div className="font-semibold text-white text-sm mb-1">{p.title}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/tech"
            className="px-6 py-3 rounded-full border border-slate-700 text-slate-400 text-sm font-display tracking-wider hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
          >
            ← Technical Requirements
          </Link>
          <Link
            href="/team"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-display tracking-wider hover:opacity-90 transition-opacity duration-200"
          >
            Meet the Team →
          </Link>
        </div>
      </div>
    </main>
  );
}
