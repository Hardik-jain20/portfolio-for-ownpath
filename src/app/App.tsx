import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, FileText, Menu, X } from "lucide-react";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { TechStack } from "./components/TechStack";
import { WhyOwnpath } from "./components/WhyOwnpath";
import resumePDF from "../imports/Hardik_Jain_Nit_Goa.pdf";

const navLinks = [
  { href: "#intro", label: "Intro" },
  { href: "#projects", label: "Projects" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#why-ownpath", label: "Why ownpath" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span style={{ fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.12em", fontFamily: "'Inter', sans-serif" }}>
          <span className="text-white uppercase">Hardik Jain</span><span className="text-indigo-400">.</span>
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 hover:text-white transition-colors duration-200"
              style={{ fontSize: "0.875rem" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={resumePDF as string}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-indigo-600/60 bg-indigo-600/10 text-indigo-300 hover:bg-indigo-600/20 transition-colors duration-200"
            style={{ fontSize: "0.875rem" }}
          >
            <FileText size={14} />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-slate-400 hover:text-white transition-colors duration-200 py-1"
              style={{ fontSize: "0.9rem" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={resumePDF as string}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-indigo-400 py-1"
            style={{ fontSize: "0.9rem" }}
          >
            <FileText size={14} />
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 px-6 py-10 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white" style={{ fontWeight: 600 }}>Hardik Jain</p>
          <p className="text-slate-500 text-sm">2nd-year ECE @ NIT Goa</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:jainhardik651@gmail.com"
            className="text-slate-500 hover:text-slate-300 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/Hardik-jain20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-300 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/hardik-jain-91929622b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
      <p className="text-slate-700 text-xs text-center mt-6">
        © 2026 Hardik Jain · Built for ownpath
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <HeroSection />
        <div className="border-t border-slate-800/50" />
        <ProjectsSection />
        <div className="border-t border-slate-800/50" />
        <TechStack />
        <div className="border-t border-slate-800/50" />
        <WhyOwnpath />
      </main>
      <Footer />
    </div>
  );
}
