import Image from "next/image";

// ─── Nav ────────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-xs font-display">ND</span>
          </div>
          <span className="font-display font-bold text-cyan-400 text-lg tracking-widest neon-cyan">
            NEURODRIVE
          </span>
        </div>
        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-400">
          {["About", "Features", "Tech", "Design", "Team", "Timeline"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#team"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/50 text-cyan-400 text-sm font-display tracking-wider hover:bg-cyan-500/10 transition-all duration-200"
        >
          Support Us
        </a>
      </div>
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
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
          <a
            href="#about"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-display font-semibold tracking-wider hover:opacity-90 transition-opacity duration-200 text-sm"
          >
            Explore the Project
          </a>
          <a
            href="#features"
            className="px-8 py-4 rounded-full border border-slate-600 text-slate-300 font-display font-semibold tracking-wider hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200 text-sm"
          >
            See Features
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "3D", label: "Unity Engine" },
            { value: "C#", label: "Language" },
            { value: "↑", label: "Reaction Speed" },
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
  );
}

// ─── Section wrapper ─────────────────────────────────────────────────────────
function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

function SectionHeader({
  tag,
  title,
  subtitle,
  accent = "cyan",
}: {
  tag: string;
  title: string;
  subtitle?: string;
  accent?: "cyan" | "purple";
}) {
  const accentClass = accent === "cyan" ? "text-cyan-400" : "text-purple-400";
  const borderClass =
    accent === "cyan" ? "border-cyan-500/40 bg-cyan-500/5 text-cyan-400" : "border-purple-500/40 bg-purple-500/5 text-purple-400";
  return (
    <div className="mb-12 text-center">
      <span
        className={`inline-block px-3 py-1 rounded-full border text-xs font-display tracking-widest mb-4 ${borderClass}`}
      >
        {tag}
      </span>
      <h2 className={`font-display font-bold text-3xl sm:text-4xl text-white mb-4`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 w-16 h-1 mx-auto rounded-full bg-gradient-to-r ${accent === "cyan" ? "from-cyan-500 to-purple-600" : "from-purple-600 to-cyan-500"}`} />
    </div>
  );
}

// ─── 1. Project Description ───────────────────────────────────────────────────
function ProjectDescription() {
  const cards = [
    {
      icon: "🎮",
      title: "What is NeuroDrive?",
      body: "NeuroDrive is a 3D racing game built in Unity where players control a car on a dynamic track, dodging obstacles and reacting to environmental changes at high speed.",
    },
    {
      icon: "🧠",
      title: "The Problem It Solves",
      body: "Most games focus purely on entertainment. NeuroDrive bridges the gap between fun and cognitive training — helping players improve reaction speed and concentration through gameplay.",
    },
    {
      icon: "⚡",
      title: "Why It Matters",
      body: "Fast reaction times and sustained focus are valuable life skills. By embedding cognitive challenges into an exciting racing format, NeuroDrive makes skill-building enjoyable and accessible.",
    },
    {
      icon: "✨",
      title: "What Makes It Unique",
      body: "NeuroDrive combines a scoring system based on reaction time and performance with a fully 3D racing environment — turning every race into a measurable cognitive workout.",
    },
  ];

  return (
    <Section id="about">
      <SectionHeader
        tag="01 · PROJECT DESCRIPTION"
        title="What is NeuroDrive?"
        subtitle="A racing game designed to entertain and train your brain at the same time."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="card-hover rounded-2xl border border-slate-800 bg-slate-900/50 p-6 glow-border-cyan"
          >
            <div className="text-3xl mb-4">{card.icon}</div>
            <h3 className="font-display font-semibold text-white text-sm mb-3 tracking-wide">
              {card.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── 2. Functional Requirements ──────────────────────────────────────────────
function FunctionalRequirements() {
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

  return (
    <Section id="features" className="bg-slate-950/50">
      <SectionHeader
        tag="02 · FUNCTIONAL REQUIREMENTS"
        title="What the Game Must Do"
        subtitle="Every feature NeuroDrive needs to deliver a complete, engaging experience."
        accent="purple"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    </Section>
  );
}

// ─── 3. Technical Requirements ────────────────────────────────────────────────
function TechnicalRequirements() {
  const techStack = [
    {
      category: "Game Engine",
      icon: "🎯",
      items: [
        { name: "Unity", detail: "Primary 3D game engine for rendering, physics, and game logic" },
      ],
    },
    {
      category: "Programming Language",
      icon: "💻",
      items: [
        { name: "C#", detail: "All game scripts, player controls, scoring, and obstacle logic" },
      ],
    },
    {
      category: "3D Assets",
      icon: "🏎️",
      items: [
        { name: "Car Models", detail: "3D vehicle assets for the player car" },
        { name: "Track Assets", detail: "Road, barriers, and environment objects" },
        { name: "Obstacle Objects", detail: "Dynamic objects placed on the track" },
      ],
    },
    {
      category: "Version Control",
      icon: "📦",
      items: [
        { name: "Git & GitHub", detail: "Source control and public repository hosting" },
      ],
    },
    {
      category: "Hosting",
      icon: "🌐",
      items: [
        { name: "GitHub Pages / Vercel", detail: "Hosting for this project homepage" },
        { name: "Unity WebGL Build", detail: "Planned browser-playable version of the game" },
      ],
    },
    {
      category: "Development Tools",
      icon: "🛠️",
      items: [
        { name: "Visual Studio / VS Code", detail: "IDE for writing C# scripts" },
        { name: "Unity Editor", detail: "Scene design, asset management, and testing" },
      ],
    },
  ];

  return (
    <Section id="tech">
      <SectionHeader
        tag="03 · TECHNICAL REQUIREMENTS"
        title="Technologies & Tools"
        subtitle="The full technology stack powering NeuroDrive from engine to deployment."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techStack.map((tech) => (
          <div
            key={tech.category}
            className="card-hover rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{tech.icon}</span>
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
    </Section>
  );
}

// ─── 4. Sketches / Prototype Design ──────────────────────────────────────────
function PrototypeDesign() {
  const screens = [
    {
      title: "Main Menu Screen",
      desc: "The entry point of the game. Features the NeuroDrive logo, Play button, difficulty selector, and leaderboard access.",
      color: "from-cyan-900/40 to-slate-900",
      accent: "cyan",
      elements: ["NeuroDrive Logo", "▶ Play Button", "Difficulty: Easy / Medium / Hard", "🏆 Leaderboard", "⚙ Settings"],
    },
    {
      title: "Racing Track View",
      desc: "The main gameplay screen. Third-person camera follows the car on a 3D track with HUD overlay showing speed, score, and timer.",
      color: "from-purple-900/40 to-slate-900",
      accent: "purple",
      elements: ["3D Track Environment", "Player Car (3rd person)", "Obstacle Objects", "Speed Meter HUD", "Reaction Timer", "Score Counter"],
    },
    {
      title: "Post-Race Summary",
      desc: "Displayed after completing a lap. Shows reaction time breakdown, final score, performance rating, and option to retry.",
      color: "from-cyan-900/30 to-purple-900/30",
      accent: "cyan",
      elements: ["Final Score", "Avg. Reaction Time", "Performance Rating ★★★", "Best Lap Time", "↩ Retry / Menu"],
    },
  ];

  return (
    <Section id="design" className="bg-slate-950/50">
      <SectionHeader
        tag="04 · SKETCHES & PROTOTYPE DESIGN"
        title="Interface Design"
        subtitle="Wireframe concepts for the three core screens of NeuroDrive."
        accent="purple"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {screens.map((screen) => (
          <div
            key={screen.title}
            className="card-hover rounded-2xl border border-slate-800 overflow-hidden"
          >
            {/* Wireframe mockup */}
            <div className={`bg-gradient-to-br ${screen.color} p-6 h-52 flex flex-col items-center justify-center gap-2 border-b border-slate-800`}>
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
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
        <h3 className="font-display font-semibold text-white text-sm mb-6 tracking-wide">
          Design Principles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "🎨", title: "Dark Theme", desc: "Dark background reduces eye strain during extended play sessions" },
            { icon: "⚡", title: "Minimal HUD", desc: "Only essential info on screen to avoid distracting the player" },
            { icon: "🔵", title: "Neon Accents", desc: "Cyan and purple highlights for a futuristic, high-tech aesthetic" },
            { icon: "📱", title: "Clear Feedback", desc: "Immediate visual and audio feedback for every player action" },
          ].map((p) => (
            <div key={p.title} className="text-center">
              <div className="text-2xl mb-2">{p.icon}</div>
              <div className="font-semibold text-white text-sm mb-1">{p.title}</div>
              <div className="text-slate-500 text-xs leading-relaxed">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── 5. About the Authors ─────────────────────────────────────────────────────
function AboutAuthors() {
  const team = [
    {
      name: "Team Member 1",
      role: "Lead Developer",
      skills: ["Unity / C#", "Game Logic", "Physics Systems"],
      bio: "Passionate about game development and interactive experiences. Responsible for core gameplay mechanics, car physics, and obstacle systems.",
      emoji: "👨‍💻",
      motivation: "I want to prove that games can be more than entertainment — they can genuinely improve how we think and react.",
    },
    {
      name: "Team Member 2",
      role: "3D Designer",
      skills: ["3D Modeling", "Unity Assets", "Scene Design"],
      bio: "Creative designer focused on building immersive environments. Handles all 3D assets, track design, and visual atmosphere of the game.",
      emoji: "🎨",
      motivation: "Designing a world that players want to race through is my goal — every corner of the track should feel alive.",
    },
    {
      name: "Team Member 3",
      role: "Researcher & Tester",
      skills: ["Cognitive Research", "QA Testing", "Documentation"],
      bio: "Bridges the gap between science and gameplay. Researches cognitive training methods and ensures the game actually improves player reaction times.",
      emoji: "🔬",
      motivation: "The science behind reaction training is fascinating. I want NeuroDrive to be backed by real research, not just a cool concept.",
    },
  ];

  return (
    <Section id="team">
      <SectionHeader
        tag="05 · ABOUT THE AUTHORS"
        title="Meet the Team"
        subtitle="The people behind NeuroDrive — united by a passion for games and cognitive science."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div
            key={member.name}
            className="card-hover rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden"
          >
            {/* Avatar area */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 p-8 flex flex-col items-center border-b border-slate-800">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-4xl mb-4">
                {member.emoji}
              </div>
              <h3 className="font-display font-bold text-white text-base tracking-wide">
                {member.name}
              </h3>
              <span className="mt-1 text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-display tracking-wider">
                {member.role}
              </span>
            </div>

            {/* Info */}
            <div className="p-6">
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{member.bio}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Motivation */}
              <blockquote className="border-l-2 border-purple-500 pl-3 text-slate-500 text-xs italic leading-relaxed">
                &ldquo;{member.motivation}&rdquo;
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── 6. Additional Project Information ───────────────────────────────────────
function AdditionalInfo() {
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
    { icon: "🌐", title: "Multiplayer Mode", desc: "Real-time online racing against other players with global leaderboards." },
    { icon: "🧬", title: "Adaptive Difficulty", desc: "AI that adjusts obstacle frequency and speed based on the player's measured reaction time." },
    { icon: "📊", title: "Progress Dashboard", desc: "Track cognitive improvement over time with detailed charts and statistics." },
    { icon: "🥽", title: "VR Support", desc: "Immersive VR mode for an even more intense reaction training experience." },
    { icon: "📱", title: "Mobile Port", desc: "Touch-controlled mobile version for training on the go." },
    { icon: "🎓", title: "Educational Mode", desc: "Classroom-friendly version with structured cognitive training programs." },
  ];

  return (
    <Section id="timeline" className="bg-slate-950/50">
      <SectionHeader
        tag="06 · ADDITIONAL INFORMATION"
        title="Timeline & Future Plans"
        subtitle="Our development roadmap and the exciting features planned for future versions."
        accent="purple"
      />

      {/* Timeline */}
      <div className="mb-16">
        <h3 className="font-display font-semibold text-white text-sm tracking-widest mb-8 text-center uppercase">
          Development Timeline
        </h3>
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
                  <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
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
      <div>
        <h3 className="font-display font-semibold text-white text-sm tracking-widest mb-8 text-center uppercase">
          Future Improvements
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {improvements.map((item) => (
            <div
              key={item.title}
              className="card-hover flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
            >
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charity note */}
      <div className="mt-12 rounded-2xl border border-purple-500/30 bg-purple-500/5 p-8 text-center">
        <div className="text-3xl mb-3">💜</div>
        <h3 className="font-display font-semibold text-purple-400 text-sm tracking-widest mb-2 uppercase">
          Charity Component
        </h3>
        <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
          A portion of any future proceeds from NeuroDrive will be donated to organizations
          supporting cognitive health research and accessible education in technology for
          young people.
        </p>
      </div>
    </Section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs font-display">ND</span>
            </div>
            <span className="font-display font-bold text-cyan-400 tracking-widest">
              NEURODRIVE
            </span>
          </div>
          <p className="text-slate-600 text-sm text-center">
            A Kickstarter-style project for Design – Unit 3 · Built with Unity & Next.js
          </p>
          <div className="flex items-center gap-4 text-slate-600 text-sm">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#team" className="hover:text-cyan-400 transition-colors">Team</a>
            <a href="#timeline" className="hover:text-cyan-400 transition-colors">Timeline</a>
          </div>
        </div>
        <div className="section-divider mt-8 mb-6" />
        <p className="text-center text-slate-700 text-xs">
          © 2025 NeuroDrive Team · All rights reserved
        </p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-200">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <ProjectDescription />
      <div className="section-divider" />
      <FunctionalRequirements />
      <div className="section-divider" />
      <TechnicalRequirements />
      <div className="section-divider" />
      <PrototypeDesign />
      <div className="section-divider" />
      <AboutAuthors />
      <div className="section-divider" />
      <AdditionalInfo />
      <Footer />
    </main>
  );
}
