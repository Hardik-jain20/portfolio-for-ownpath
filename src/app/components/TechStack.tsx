const skills = {
  Frontend: {
    icon: "🖥️",
    color: "from-blue-600/20 border-blue-700/40 text-blue-300",
    accent: "text-blue-400",
    items: [
      { name: "React", level: "Working knowledge" },
      { name: "HTML / CSS", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
    ],
  },
  Backend: {
    icon: "⚙️",
    color: "from-violet-600/20 border-violet-700/40 text-violet-300",
    accent: "text-violet-400",
    items: [
      { name: "Node.js", level: "Learning / Project exposure" },
      { name: "REST APIs", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
    ],
  },
  Database: {
    icon: "🗄️",
    color: "from-green-600/20 border-green-700/40 text-green-300",
    accent: "text-green-400",
    items: [
      { name: "Pinecone", level: "Used in production" },
      { name: "MySQL", level: "Intermediate" },
    ],
  },
  Tools: {
    icon: "🛠️",
    color: "from-amber-600/20 border-amber-700/40 text-amber-300",
    accent: "text-amber-400",
    items: [
      { name: "Git & GitHub", level: "Daily use" },
      { name: "VS Code", level: "Daily use" },
      { name: "Google Cloud", level: "Familiar" },
      { name: "n8n", level: "Used in production" },
    ],
  },
  Programming: {
    icon: "💻",
    color: "from-rose-600/20 border-rose-700/40 text-rose-300",
    accent: "text-rose-400",
    items: [
      { name: "C++", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
    ],
  },
};

function LevelDot({ level }: { level: string }) {
  const map: Record<string, number> = {
    "Learning / Project exposure": 1,
    Familiar: 2,
    "Working knowledge": 2,
    Intermediate: 2,
    "Used in production": 3,
    "Daily use": 3,
  };
  const filled = map[level] ?? 2;
  return (
    <div className="flex gap-1 items-center">
      {[1, 2, 3].map((d) => (
        <span
          key={d}
          className={`w-1.5 h-1.5 rounded-full ${d <= filled ? "bg-current opacity-80" : "bg-slate-700"}`}
        />
      ))}
    </div>
  );
}

export function TechStack() {
  return (
    <section id="tech" className="px-6 py-20 max-w-5xl mx-auto">
      <div className="mb-12 text-center space-y-2">
        <p className="text-indigo-400 text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>
          Skills & Tools
        </p>
        <h2 className="text-white" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700 }}>
          Technical Snapshot
        </h2>
        <p className="text-slate-500 max-w-md mx-auto text-sm">
          A clean map of my current technical capabilities.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, data]) => (
          <div
            key={category}
            className={`rounded-2xl border bg-gradient-to-b ${data.color} bg-slate-900/50 p-5 space-y-4 hover:shadow-lg transition-shadow duration-300`}
          >
            <div className="flex items-center gap-2.5">
              <span style={{ fontSize: "1.25rem" }}>{data.icon}</span>
              <h3
                className={`${data.accent}`}
                style={{ fontSize: "0.875rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}
              >
                {category}
              </h3>
            </div>
            <ul className="space-y-2.5">
              {data.items.map((item) => (
                <li key={item.name} className="flex items-center justify-between gap-2">
                  <span className="text-slate-200 text-sm">{item.name}</span>
                  <div className={`${data.accent} flex items-center gap-2`}>
                    <span className="text-xs text-slate-500 hidden sm:block">{item.level}</span>
                    <LevelDot level={item.level} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
