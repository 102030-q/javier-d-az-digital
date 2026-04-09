const cards = [
  {
    icon: "🎤",
    title: "Mentor Gavel Club Toastmasters",
    desc: "Guío a jóvenes del Instituto Pablo Freire en habilidades de comunicación, oratoria y liderazgo. Programa oficial de Toastmasters Internacional.",
    badge: "Instituto Pablo Freire · Saltillo",
  },
  {
    icon: "🏆",
    title: "7+ Años en Comunicación",
    desc: "Experiencia en clubes de comunicación desde los 7 años. Habilidades en improvisación verbal, oratoria, comunicación persuasiva y presencia escénica.",
    badge: "Toastmasters Internacional",
  },
];

export default function SpeakingSection() {
  return (
    <section id="speaking" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-center animate-on-scroll">
          Comunicación & Liderazgo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {cards.map((c, i) => (
            <div
              key={i}
              className="glass-card p-8 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-on-scroll"
              data-delay={String(i * 150)}
            >
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="font-display font-bold text-xl">{c.title}</h3>
              <p className="text-muted-foreground text-sm mt-3">{c.desc}</p>
              <span className="inline-block mt-4 text-xs px-3 py-1 rounded-full border border-glass-border text-muted-foreground">
                {c.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
