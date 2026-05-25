import { Github, Linkedin, Mail, FileText, ArrowDown } from "lucide-react";
import resumePDF from "../../imports/Hardik_Jain_Nit_Goa.pdf";

export function HeroSection() {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/40 bg-indigo-500/10 text-indigo-300 text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Open to Internship Opportunities
        </div>

        {/* Name */}
        <div className="space-y-3">
          <h1
            className="text-white tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.1 }}
          >
            Hardik Jain
          </h1>
          <p
            className="text-indigo-400"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.35rem)", fontWeight: 500 }}
          >
            Full Stack Developer Intern
          </p>
        </div>

        {/* Bio */}
        <p
          className="text-slate-400 max-w-xl mx-auto leading-relaxed"
          style={{ fontSize: "1rem" }}
        >
          2nd-year ECE student at NIT Goa passionate about building products using{" "}
          <span className="text-slate-200">React, Node.js, AI workflows,</span> and automation.
          Interested in solving real-world problems through full-stack development and product
          engineering.
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="mailto:jainhardik651@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors duration-200"
            style={{ fontSize: "0.9rem", fontWeight: 500 }}
          >
            <Mail size={16} />
            Contact Me
          </a>

          <a
            href={resumePDF as string}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-900 hover:bg-slate-800 text-slate-200 transition-colors duration-200"
            style={{ fontSize: "0.9rem", fontWeight: 500 }}
          >
            <FileText size={16} />
            Resume
          </a>

          <a
            href="https://github.com/Hardik-jain20"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-900 hover:bg-slate-800 text-slate-200 transition-colors duration-200"
            style={{ fontSize: "0.9rem", fontWeight: 500 }}
          >
            <Github size={16} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/hardik-jain-91929622b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-900 hover:bg-slate-800 text-slate-200 transition-colors duration-200"
            style={{ fontSize: "0.9rem", fontWeight: 500 }}
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        {/* Email display */}
        <p className="text-slate-500 text-sm">jainhardik651@gmail.com</p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span style={{ fontSize: "0.75rem" }}>Scroll to explore</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
