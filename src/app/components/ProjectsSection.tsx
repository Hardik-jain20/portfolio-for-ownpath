import { Github } from "lucide-react";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

function Tag({ label, color = "default" }: { label: string; color?: string }) {
  const colors: Record<string, string> = {
    default: "bg-slate-800 text-slate-300 border-slate-700",
    indigo: "bg-indigo-900/40 text-indigo-300 border-indigo-700/50",
    green: "bg-green-900/40 text-green-300 border-green-700/50",
    amber: "bg-amber-900/40 text-amber-300 border-amber-700/50",
  };
  return (
    <span
      className={`inline-flex px-2.5 py-0.5 rounded-full border text-xs ${colors[color] || colors.default}`}
      style={{ fontWeight: 500 }}
    >
      {label}
    </span>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-green-400 shrink-0">✅</span>
      <span className="text-slate-300 text-sm">{text}</span>
    </div>
  );
}

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="text-indigo-500 text-sm" style={{ fontWeight: 600 }}>
        {number}
      </span>
      <h3 className="text-white" style={{ fontSize: "1.25rem", fontWeight: 600 }}>
        {title}
      </h3>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-20 max-w-5xl mx-auto">
      {/* Section header */}
      <div className="mb-12 text-center space-y-2">
        <p className="text-indigo-400 text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>
          Featured Work
        </p>
        <h2 className="text-white" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700 }}>
          Projects
        </h2>
        <p className="text-slate-500 max-w-md mx-auto text-sm">
          Three projects that demonstrate my range across AI, automation, and embedded systems.
        </p>
      </div>

      <div className="space-y-8">
        {/* Project 1 — RAG Chatbot */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 hover:border-slate-700 transition-colors duration-300">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span className="text-indigo-400 text-xs uppercase tracking-widest" style={{ fontWeight: 600 }}>
                  Project 01
                </span>
              </div>
              <h3 className="text-white" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                RAG Chatbot
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Retrieval-Augmented Generation from uploaded documents
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Tag label="AI / ML" color="indigo" />
              <Tag label="Backend" />
              <Tag label="Pipelines" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left */}
            <div className="space-y-5">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-2" style={{ fontWeight: 600 }}>
                  Problem
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Users need fast, contextual answers from uploaded documents without manually searching through pages of content.
                </p>
              </div>

              <div>
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-2" style={{ fontWeight: 600 }}>
                  What I Built
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Document ingestion pipeline",
                    "Text chunking + embeddings",
                    "Pinecone vector DB storage",
                    "Retrieval-based chatbot responses",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-indigo-400 mt-0.5 shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-2" style={{ fontWeight: 600 }}>
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["n8n", "Pinecone", "OpenAI Embeddings", "OpenRouter", "AI Agents"].map((t) => (
                    <Tag key={t} label={t} color="indigo" />
                  ))}
                </div>
              </div>
            </div>

            {/* Right — What this demonstrates */}
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-3" style={{ fontWeight: 600 }}>
                What This Demonstrates
              </p>
              <div className="space-y-2">
                <CheckItem text="API integrations" />
                <CheckItem text="Backend workflows" />
                <CheckItem text="AI product building" />
                <CheckItem text="System thinking" />
              </div>
            </div>
          </div>

          <ArchitectureDiagram />
        </div>

        {/* Project 2 — AI Workflow Automation */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 hover:border-slate-700 transition-colors duration-300">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                <span className="text-violet-400 text-xs uppercase tracking-widest" style={{ fontWeight: 600 }}>
                  Project 02
                </span>
              </div>
              <h3 className="text-white" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                AI Workflow Automation
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                End-to-end automation pipelines using n8n
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Tag label="Automation" color="indigo" />
              <Tag label="APIs" />
              <Tag label="n8n" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-5">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-2" style={{ fontWeight: 600 }}>
                  What I Built
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Scheduled trigger workflows",
                    "Gmail API integration",
                    "Gemini / OpenRouter prompt execution",
                    "Automated communication pipelines",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-violet-400 mt-0.5 shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-2" style={{ fontWeight: 600 }}>
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["n8n", "Gmail API", "Gemini", "OpenRouter", "Webhooks"].map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-3" style={{ fontWeight: 600 }}>
                Why Relevant
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Demonstrates backend logic, third-party API integration, and production-level thinking around reliable, automated systems — key for any product engineering role.
              </p>

              {/* Visual pipeline */}
              <div className="mt-4 flex items-center gap-2 flex-wrap">
                {["Trigger", "API Call", "AI Process", "Notify"].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="px-3 py-1.5 rounded-lg bg-violet-900/30 border border-violet-700/40 text-violet-300 text-xs" style={{ fontWeight: 500 }}>
                      {step}
                    </div>
                    {i < arr.length - 1 && (
                      <span className="text-slate-600 text-xs">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 — IoT Home Automation */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 hover:border-slate-700 transition-colors duration-300">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-amber-400 text-xs uppercase tracking-widest" style={{ fontWeight: 600 }}>
                  Project 03
                </span>
              </div>
              <h3 className="text-white" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                IoT Home Automation
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Full working prototype built under ₹1,350
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Tag label="IoT" color="amber" />
              <Tag label="Hardware" />
              <Tag label="ESP8266" />
              <a
                href="https://github.com/Hardik-jain20/IOT-BASED-HOME-AUTOMATION-SYSTEM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-0.5 rounded-full border border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors duration-200 text-xs"
                style={{ fontWeight: 500 }}
              >
                <Github size={12} />
                View on GitHub
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-5">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-2" style={{ fontWeight: 600 }}>
                  Features
                </p>
                <ul className="space-y-1.5">
                  {[
                    "ESP8266 remote control over Wi-Fi",
                    "Smoke detection with real-time alerts",
                    "Intrusion detection system",
                    "Wi-Fi appliance control",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-amber-400 mt-0.5 shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-3" style={{ fontWeight: 600 }}>
                Builder's Mindset
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Designed and assembled a complete working prototype under a tight ₹1,350 budget constraint — demonstrating resourceful engineering and hardware-software integration skills.
              </p>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-900/20 border border-amber-700/30">
                <span style={{ fontSize: "1.5rem" }}>🏗️</span>
                <div>
                  <p className="text-amber-300 text-sm" style={{ fontWeight: 600 }}>Full Prototype</p>
                  <p className="text-amber-500/80 text-xs">Built under ₹1,350</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
