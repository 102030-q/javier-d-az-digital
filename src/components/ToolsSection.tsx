const tools = [
  { icon: "🎨", title: "Diseño & Creación", items: "Canva · Flow (Google Labs) · CapCut" },
  { icon: "📣", title: "Social Media & Ads", items: "Meta ADS Manager · Facebook · Instagram" },
  { icon: "⚙️", title: "Automatización", items: "ManyChat · Zapier · Meta Business Suite" },
  { icon: "🤖", title: "Herramientas de IA", items: "Claude (Anthropic) · Grok · Gemini (Google)" },
];

export default function ToolsSection() {
  return (
    <section id="herramientas" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-center animate-on-scroll">
          Herramientas & Tecnología
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
          {tools.map((t, i) => (
            <div
              key={i}
              className="glass-card p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-on-scroll"
              data-delay={String(i * 100)}
            >
              <div className="text-3xl mb-3">{t.icon}</div>
              <h3 className="font-display font-bold text-base">{t.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">{t.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
