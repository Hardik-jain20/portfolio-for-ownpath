const reasons = [
  {
    icon: "🔨",
    title: "Builder Culture",
    desc: "ownpath values developers who ship real, tangible products — not just code reviewers.",
  },
  {
    icon: "🤝",
    title: "Cross-functional Collaboration",
    desc: "Working closely with designers and product teams is where my best ideas emerge.",
  },
  {
    icon: "🎓",
    title: "Mentorship-driven Growth",
    desc: "I want to grow fast through hands-on guidance, not just tutorials.",
  },
  {
    icon: "🌍",
    title: "Client-facing Impact",
    desc: "Building products that real users interact with daily is what drives my motivation.",
  },
];

export function WhyOwnpath() {
  return (
    <section id="why-ownpath" className="px-6 py-20 max-w-5xl mx-auto">
      <div className="mb-12 text-center space-y-2">
        <p className="text-indigo-400 text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>
          Motivation
        </p>
        <h2 className="text-white" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700 }}>
          Why I'm Interested in ownpath
        </h2>
      </div>

      <div className="rounded-2xl border border-indigo-800/50 bg-gradient-to-br from-indigo-950/60 to-slate-900/60 p-8 md:p-10 space-y-8">
        {/* Quote */}
        <div className="relative pl-5 border-l-2 border-indigo-500">
          <p className="text-slate-200 leading-relaxed" style={{ fontSize: "1.05rem" }}>
            I'm excited about ownpath because it combines{" "}
            <span className="text-indigo-300" style={{ fontWeight: 600 }}>product engineering</span> with close
            collaboration between developers, designers, and product teams. I enjoy building practical products
            and want mentorship while contributing to real{" "}
            <span className="text-indigo-300" style={{ fontWeight: 600 }}>client-facing work</span>.
          </p>
        </div>

        {/* Reason cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-colors duration-200"
            >
              <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>{r.icon}</span>
              <div>
                <p className="text-white text-sm" style={{ fontWeight: 600 }}>
                  {r.title}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mt-0.5">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/[0.06]">
          <div>
            <p className="text-white" style={{ fontWeight: 600 }}>
              Ready to contribute from day one.
            </p>
            <p className="text-slate-500 text-sm">Let's build something great together.</p>
          </div>
          <a
            href="mailto:jainhardik651@gmail.com"
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors duration-200"
            style={{ fontSize: "0.9rem", fontWeight: 500 }}
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  );
}
