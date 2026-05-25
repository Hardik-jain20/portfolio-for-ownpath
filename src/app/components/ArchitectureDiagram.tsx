const steps = [
  { label: "Google Drive", icon: "📁", color: "from-blue-600/20 to-blue-500/10 border-blue-500/30 text-blue-300" },
  { label: "Chunking", icon: "✂️", color: "from-violet-600/20 to-violet-500/10 border-violet-500/30 text-violet-300" },
  { label: "Embeddings", icon: "🔢", color: "from-purple-600/20 to-purple-500/10 border-purple-500/30 text-purple-300" },
  { label: "Pinecone", icon: "🌲", color: "from-green-600/20 to-green-500/10 border-green-500/30 text-green-300" },
  { label: "Retriever", icon: "🔍", color: "from-amber-600/20 to-amber-500/10 border-amber-500/30 text-amber-300" },
  { label: "LLM", icon: "🧠", color: "from-orange-600/20 to-orange-500/10 border-orange-500/30 text-orange-300" },
  { label: "Chat UI", icon: "💬", color: "from-indigo-600/20 to-indigo-500/10 border-indigo-500/30 text-indigo-300" },
];

export function ArchitectureDiagram() {
  return (
    <div className="mt-6 p-4 rounded-xl bg-slate-900/60 border border-slate-700/50">
      <p className="text-slate-500 text-xs mb-4 uppercase tracking-widest">Pipeline Architecture</p>
      <div className="flex flex-wrap items-center gap-2 justify-center">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-2">
            <div
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg border bg-gradient-to-b ${step.color} min-w-[72px]`}
            >
              <span style={{ fontSize: "1.25rem" }}>{step.icon}</span>
              <span className="text-xs whitespace-nowrap" style={{ fontWeight: 500 }}>
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="text-slate-600 shrink-0">
                <path d="M0 6h16M12 1l6 5-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
