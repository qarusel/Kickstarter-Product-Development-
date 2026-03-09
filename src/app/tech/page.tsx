import Link from "next/link";

export const metadata = {
  title: "Technical Requirements – NeuroDrive",
};

const techStack = [
  {
    category: "Game Engine",
    label: "Unity",
    items: [
      { name: "Unity", detail: "Primary 3D game engine for rendering, physics, and game logic" },
    ],
  },
  {
    category: "Programming Language",
    label: "C#",
    items: [
      { name: "C#", detail: "All game scripts, player controls, scoring, and obstacle logic" },
    ],
  },
  {
    category: "3D Assets",
    label: "Assets",
    items: [
      { name: "Car Models", detail: "3D vehicle assets for the player car" },
      { name: "Track Assets", detail: "Road, barriers, and environment objects" },
      { name: "Obstacle Objects", detail: "Dynamic objects placed on the track" },
    ],
  },
  {
    category: "Version Control",
    label: "Git",
    items: [
      { name: "Git & GitHub", detail: "Source control and public repository hosting" },
    ],
  },
  {
    category: "Hosting",
    label: "Web",
    items: [
      { name: "GitHub Pages / Vercel", detail: "Hosting for this project homepage" },
      { name: "Unity WebGL Build", detail: "Planned browser-playable version of the game" },
    ],
  },
  {
    category: "Development Tools",
    label: "IDE",
    items: [
      { name: "Visual Studio / VS Code", detail: "IDE for writing C# scripts" },
      { name: "Unity Editor", detail: "Scene design, asset management, and testing" },
    ],
  },
];

export default function TechPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-200 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-300">Technical Requirements</span>
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-500/5 text-cyan-400 text-xs font-display tracking-widest mb-4">
            03 · TECHNICAL REQUIREMENTS
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Technologies &amp; Tools
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            The full technology stack powering NeuroDrive from engine to deployment.
          </p>
          <div className="mt-4 w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-600" />
        </div>

        {/* Tech stack grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {techStack.map((tech) => (
            <div
              key={tech.category}
              className="card-hover rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <span className="font-display text-cyan-400 text-xs font-bold">{tech.label.slice(0, 2)}</span>
                </div>
                <h3 className="font-display font-semibold text-cyan-400 text-xs tracking-widest uppercase">
                  {tech.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {tech.items.map((item) => (
                  <li key={item.name}>
                    <div className="font-semibold text-white text-sm">{item.name}</div>
                    <div className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.detail}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Architecture note */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 mb-12">
          <h2 className="font-display font-semibold text-white text-sm tracking-widest mb-6 uppercase">
            Architecture Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Game Layer",
                desc: "Unity handles all 3D rendering, physics simulation, collision detection, and real-time game logic written in C#.",
              },
              {
                step: "02",
                title: "Data Layer",
                desc: "Player scores, reaction times, and lap data are stored locally using Unity's PlayerPrefs or a simple JSON file system.",
              },
              {
                step: "03",
                title: "Web Layer",
                desc: "This homepage is built with Next.js and deployed via Vercel. A WebGL build of the game can be embedded for browser play.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                  <span className="font-display text-white text-xs font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/features"
            className="px-6 py-3 rounded-full border border-slate-700 text-slate-400 text-sm font-display tracking-wider hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
          >
            ← Functional Requirements
          </Link>
          <Link
            href="/design"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-display tracking-wider hover:opacity-90 transition-opacity duration-200"
          >
            Sketches &amp; Design →
          </Link>
        </div>
      </div>
    </main>
  );
}
