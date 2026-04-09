const roles = [
  { icon: "🎓", title: "Fundador", org: "Right On English Academy", desc: "Escuela de inglés con metodología propia para niños, adolescentes y adultos. Desde 2017." },
  { icon: "📢", title: "Promotor", org: "Right On Educa", desc: "Gestión de marketing digital y estrategia de contenido para academia de idiomas. Desde 2023." },
  { icon: "📊", title: "Estratega Digital", org: "Mercy Saltillo", desc: "Gestión de redes sociales, marketing y contenido digital. Desde 2023." },
  { icon: "🎤", title: "Mentor", org: "Gavel Club Toastmasters", desc: "Guiando jóvenes en comunicación y liderazgo en Instituto Pablo Freire." },
];

const certs = [
  "HubSpot: Inbound Marketing (2024)",
  "HubSpot: Ventas Inbound (2024)",
  "Toastmasters: Comunicación Persuasiva Pathways",
];

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-center animate-on-scroll">Sobre Mí</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-6 animate-on-scroll" data-delay="100">
          Soy Javier Díaz, estudiante de Marketing & Advertising en Universidad Tecmilenio. Combino estrategia digital, creación de contenido y habilidades de comunicación para construir presencia de marca que genera resultados reales.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
          {roles.map((r, i) => (
            <div
              key={i}
              className="glass-card p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-on-scroll"
              data-delay={String(i * 100 + 200)}
            >
              <div className="text-3xl mb-3">{r.icon}</div>
              <h3 className="font-display font-bold text-lg">{r.title}</h3>
              <p className="text-sm text-primary mt-0.5">{r.org}</p>
              <p className="text-muted-foreground text-sm mt-2">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-12 animate-on-scroll" data-delay="600">
          {certs.map((c, i) => (
            <span key={i} className="text-xs px-4 py-2 rounded-full border border-glass-border text-muted-foreground">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
