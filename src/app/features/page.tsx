import Link from "next/link";

export const metadata = {
  title: "Functional Requirements – NeuroDrive",
};

const requirements = [
  {
    id: "FR-01",
    title: "Car Control System",
    desc: "Player can steer, accelerate, and brake a 3D car using keyboard or controller input with responsive physics.",
    status: "Core",
  },
  {
    id: "FR-02",
    title: "Obstacle System",
    desc: "Dynamic obstacles appear on the track that the player must avoid. Collision detection triggers penalties.",
    status: "Core",
  },
  {
    id: "FR-03",
    title: "Reaction-Based Scoring",
    desc: "The game measures and scores the player based on reaction time to obstacles and overall lap performance.",
    status: "Core",
  },
  {
    id: "FR-04",
    title: "Track Environment",
    desc: "A fully designed 3D racing track with varied terrain, lighting, and environmental signals the player must respond to.",
    status: "Core",
  },
  {
    id: "FR-05",
    title: "Timer & Lap System",
    desc: "A real-time timer tracks lap completion. Players can compare their times across sessions.",
    status: "Core",
  },
  {
    id: "FR-06",
    title: "Performance Summary",
    desc: "After each race, a summary screen displays reaction time stats, score, and performance rating.",
    status: "Core",
  },
  {
    id: "FR-07",
    title: "Difficulty Levels",
    desc: "Multiple difficulty settings adjust obstacle frequency and speed to match different skill levels.",
    status: "Planned",
  },
  {
    id: "FR-08",
    title: "Leaderboard",
    desc: "A local leaderboard stores top scores so players can track improvement over time.",
    status: "Planned",
  },
];

export default function FeaturesPage() {
  const coreCount = requirements.filter((r) => r.status === "Core").length;
  const plannedCount = requirements.filter((r) => r.status === "Planned").length;

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-200 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-300">Functional Requirements</span>
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 rounded-full border border-purple-500/40 bg-purple-500/5 text-purple-400 text-xs font-display tracking-widest mb-4">
            02 · FUNCTIONAL REQUIREMENTS
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            What the Game Must Do
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            Every feature NeuroDrive needs to deliver a complete, engaging experience.
          </p>
          <div className="mt-4 w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-cyan-500" />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Total Requirements", value: requirements.length },
            { label: "Core Features", value: coreCount },
            { label: "Planned Features", value: plannedCount },
            { label: "Completion", value: `${Math.round((coreCount / requirements.length) * 100)}%` },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-center"
            >
              <div className="font-display font-bold text-2xl text-cyan-400 neon-cyan mb-1">
                {stat.value}
              </div>
              <div className="text-slate-500 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Requirements grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {requirements.map((req) => (
            <div
              key={req.id}
              className="card-hover flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
            >
              <div className="flex-shrink-0">
                <span className="font-display text-xs text-purple-400 bg-purple-500/10 border border-purple-500/30 px-2 py-1 rounded-md">
                  {req.id}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-white text-sm">{req.title}</h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      req.status === "Core"
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                        : "bg-slate-700/50 text-slate-400 border border-slate-600/30"
                    }`}
                  >
                    {req.status}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{req.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/about"
            className="px-6 py-3 rounded-full border border-slate-700 text-slate-400 text-sm font-display tracking-wider hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
          >
            ← Project Description
          </Link>
          <Link
            href="/tech"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-display tracking-wider hover:opacity-90 transition-opacity duration-200"
          >
            Technical Requirements →
          </Link>
        </div>
      </div>
    </main>
  );
}
