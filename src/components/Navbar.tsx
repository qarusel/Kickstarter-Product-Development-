"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Tech", href: "/tech" },
  { label: "Design", href: "/design" },
  { label: "Team", href: "/team" },
  { label: "Timeline", href: "/timeline" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-xs font-display">ND</span>
          </div>
          <span className="font-display font-bold text-cyan-400 text-lg tracking-widest neon-cyan">
            NEURODRIVE
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-400">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-cyan-400 transition-colors duration-200 ${
                pathname === link.href ? "text-cyan-400" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/team"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/50 text-cyan-400 text-sm font-display tracking-wider hover:bg-cyan-500/10 transition-all duration-200"
        >
          Support Us
        </Link>
      </div>
    </nav>
  );
}
