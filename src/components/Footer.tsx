import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs font-display">ND</span>
            </div>
            <span className="font-display font-bold text-cyan-400 tracking-widest">
              NEURODRIVE
            </span>
          </Link>
          <p className="text-slate-600 text-sm text-center">
            A Kickstarter-style project for Design – Unit 3 · Built with Unity &amp; Next.js
          </p>
          <div className="flex items-center gap-4 text-slate-600 text-sm">
            <Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link>
            <Link href="/team" className="hover:text-cyan-400 transition-colors">Team</Link>
            <Link href="/timeline" className="hover:text-cyan-400 transition-colors">Timeline</Link>
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
