import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Project Description",
    desc: "What NeuroDrive is, the problem it solves, and what makes it unique.",
    href: "/about",
    accent: "cyan",
  },
  {
    number: "02",
    title: "Functional Requirements",
    desc: "Every feature the game must deliver for a complete, engaging experience.",
    href: "/features",
    accent: "purple",
  },
  {
    number: "03",
    title: "Technical Requirements",
    desc: "The full technology stack — from Unity engine to deployment tools.",
    href: "/tech",
    accent: "cyan",
  },
  {
    number: "04",
    title: "Sketches & Design",
    desc: "Wireframe concepts for the three core screens of NeuroDrive.",
    href: "/design",
    accent: "purple",
  },
  {
    number: "05",
    title: "Meet the Team",
    desc: "The two developers behind NeuroDrive and their roles in the project.",
    href: "/team",
    accent: "cyan",
  },
  {
    number: "06",
    title: "Timeline & Future Plans",
    desc: "Development roadmap and exciting features planned for future versions.",
    href: "/timeline",
    accent: "purple",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-200">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden grid-bg">
        {/* Background glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/5 text-cyan-400 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Unity 3D Racing Game · Kickstarter Project
          </div>

          {/* Title */}
          <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight mb-6">
            <span className="gradient-text">NEURO</span>
            <span className="text-white">DRIVE</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-slate-300 mb-4 font-light">
            Train Your Mind. Race Your Limits.
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-10">
            A 3D racing game that combines the thrill of high-speed competition with
            cognitive skill development — improving your reaction speed and focus
            while you race.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-display font-semibold tracking-wider hover:opacity-90 transition-opacity duration-200 text-sm"
            >
              Explore the Project
            </Link>
            <Link
              href="/features"
              className="px-8 py-4 rounded-full border border-slate-600 text-slate-300 font-display font-semibold tracking-wider hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200 text-sm"
            >
              See Features
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: "3D", label: "Unity Engine" },
              { value: "C#", label: "Language" },
              { value: "2", label: "Team Members" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-2xl text-cyan-400 neon-cyan">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs">
          <span>Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </section>

      {/* Section navigation cards */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-500/5 text-cyan-400 text-xs font-display tracking-widest mb-4">
              EXPLORE
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Project Sections
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
              Navigate through each section of the NeuroDrive Kickstarter project.
            </p>
            <div className="mt-4 w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-600" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className={`card-hover group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col gap-4 ${
                  section.accent === "cyan" ? "glow-border-cyan" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-display text-xs tracking-widest ${
                      section.accent === "cyan" ? "text-cyan-400" : "text-purple-400"
                    }`}
                  >
                    {section.number}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border ${
                      section.accent === "cyan"
                        ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                        : "border-purple-500/30 bg-purple-500/10 text-purple-400"
                    }`}
                  >
                    View
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-sm mb-2 tracking-wide group-hover:text-cyan-400 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{section.desc}</p>
                </div>
                <div
                  className={`mt-auto text-xs font-display tracking-wider ${
                    section.accent === "cyan" ? "text-cyan-500" : "text-purple-500"
                  } group-hover:translate-x-1 transition-transform`}
                >
                  Read more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
