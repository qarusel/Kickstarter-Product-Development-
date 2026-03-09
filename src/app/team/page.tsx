import Link from "next/link";

export const metadata = {
  title: "Meet the Team – NeuroDrive",
};

const team = [
  {
    name: "Yeskendir",
    role: "Lead Developer",
    skills: ["Unity / C#", "Game Mechanics", "Car Controls", "Obstacle Systems", "Scoring System", "HTML & CSS"],
    bio: "Responsible for the main development of the project. Creates the 3D game in Unity, writes the C# code, and develops the project website using HTML and CSS. Also implements gameplay mechanics, car controls, obstacles, and the scoring system.",
    initials: "YK",
    accentFrom: "from-cyan-500",
    accentTo: "to-purple-600",
  },
  {
    name: "Amir",
    role: "Designer & Tester",
    skills: ["Gameplay Ideas", "Visual Design", "Website Layout", "UX Feedback", "Testing"],
    bio: "Contributes ideas for gameplay and helps with the visual design of the project. Provides feedback on the game concept, assists with layout and design decisions for the website, and participates in testing and improving the overall user experience.",
    initials: "AM",
    accentFrom: "from-purple-500",
    accentTo: "to-cyan-500",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-200 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-300">Meet the Team</span>
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-500/5 text-cyan-400 text-xs font-display tracking-widest mb-4">
            05 · ABOUT THE AUTHORS
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Meet the Team
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            Two developers united by a passion for games and creative problem-solving.
          </p>
          <div className="mt-4 w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-600" />
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {team.map((member) => (
            <div
              key={member.name}
              className="card-hover rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden"
            >
              {/* Avatar area */}
              <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 p-8 flex flex-col items-center border-b border-slate-800">
                <div
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.accentFrom} ${member.accentTo} flex items-center justify-center mb-4`}
                >
                  <span className="font-display font-bold text-white text-2xl tracking-wider">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-xl tracking-wide mb-1">
                  {member.name}
                </h3>
                <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-display tracking-wider">
                  {member.role}
                </span>
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="text-slate-300 text-sm leading-relaxed mb-5">{member.bio}</p>

                {/* Skills */}
                <div>
                  <div className="text-xs font-display text-slate-500 tracking-widest uppercase mb-2">
                    Skills &amp; Responsibilities
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration note */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 max-w-4xl mx-auto mb-12 text-center">
          <h2 className="font-display font-semibold text-white text-sm tracking-widest mb-3 uppercase">
            How We Work Together
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
            Yeskendir handles the technical implementation — building the game in Unity and
            developing the website — while Amir shapes the creative direction, provides design
            input, and ensures the final product delivers a great user experience through
            continuous testing and feedback.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/design"
            className="px-6 py-3 rounded-full border border-slate-700 text-slate-400 text-sm font-display tracking-wider hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
          >
            ← Sketches &amp; Design
          </Link>
          <Link
            href="/timeline"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-display tracking-wider hover:opacity-90 transition-opacity duration-200"
          >
            Timeline &amp; Future Plans →
          </Link>
        </div>
      </div>
    </main>
  );
}
