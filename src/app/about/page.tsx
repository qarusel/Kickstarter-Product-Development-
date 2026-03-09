import Link from "next/link";

export const metadata = {
  title: "Project Description – NeuroDrive",
};

const cards = [
  {
    title: "What is NeuroDrive?",
    body: "NeuroDrive is a 3D racing game built in Unity where players control a car on a dynamic track, dodging obstacles and reacting to environmental changes at high speed.",
  },
  {
    title: "The Problem It Solves",
    body: "Most games focus purely on entertainment. NeuroDrive bridges the gap between fun and cognitive training — helping players improve reaction speed and concentration through gameplay.",
  },
  {
    title: "Why It Matters",
    body: "Fast reaction times and sustained focus are valuable life skills. By embedding cognitive challenges into an exciting racing format, NeuroDrive makes skill-building enjoyable and accessible.",
  },
  {
    title: "What Makes It Unique",
    body: "NeuroDrive combines a scoring system based on reaction time and performance with a fully 3D racing environment — turning every race into a measurable cognitive workout.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-200 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-300">Project Description</span>
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-500/5 text-cyan-400 text-xs font-display tracking-widest mb-4">
            01 · PROJECT DESCRIPTION
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            What is NeuroDrive?
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            A racing game designed to entertain and train your brain at the same time.
          </p>
          <div className="mt-4 w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-600" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card) => (
            <div
              key={card.title}
              className="card-hover rounded-2xl border border-slate-800 bg-slate-900/50 p-6 glow-border-cyan"
            >
              <h3 className="font-display font-semibold text-cyan-400 text-sm mb-3 tracking-wide">
                {card.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        {/* Extended description */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 mb-12">
          <h2 className="font-display font-semibold text-white text-sm tracking-widest mb-6 uppercase">
            Project Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-400 text-sm leading-relaxed">
            <div>
              <p className="mb-4">
                NeuroDrive started as a concept to merge two worlds: competitive racing games and
                cognitive science. The idea is simple — what if the game you play for fun also
                made you sharper, faster, and more focused?
              </p>
              <p>
                Built entirely in Unity using C#, the game features a fully 3D racing environment
                with dynamic obstacles, a real-time reaction timer, and a performance scoring
                system that rewards quick thinking as much as driving skill.
              </p>
            </div>
            <div>
              <p className="mb-4">
                The project is developed as a Kickstarter-style pitch, demonstrating both the
                technical feasibility and the creative vision behind NeuroDrive. Every design
                decision — from the HUD layout to the obstacle patterns — is made with the
                player&apos;s cognitive experience in mind.
              </p>
              <p>
                Whether you&apos;re a casual gamer or someone looking to sharpen your reflexes,
                NeuroDrive offers a unique experience that grows with you.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-full border border-slate-700 text-slate-400 text-sm font-display tracking-wider hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
          >
            ← Back to Home
          </Link>
          <Link
            href="/features"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-display tracking-wider hover:opacity-90 transition-opacity duration-200"
          >
            Functional Requirements →
          </Link>
        </div>
      </div>
    </main>
  );
}
