const items = [
  { icon: "🎯", title: "Estrategia Digital & Content Marketing", desc: "Planificación estratégica de contenido digital. Casos: Teatro de Sombras, Right On Academia." },
  { icon: "📱", title: "Campañas Meta, TikTok & Instagram", desc: "Gestión de campañas pagadas y orgánicas enfocadas en engagement y conversiones." },
  { icon: "⚡", title: "Marketing Automation", desc: "Flujos automatizados con ManyChat y Zapier para escalar comunicación de marca." },
  { icon: "✍️", title: "Copywriting & Social Media Strategy", desc: "Textos persuasivos y estrategia integral de redes sociales para marcas locales." },
  { icon: "🎬", title: "Edición de Video & Reels", desc: "Creación de contenido visual optimizado para redes usando CapCut y Canva." },
  { icon: "📈", title: "Gestión de Redes Sociales", desc: "Administración integral de perfiles, calendarios editoriales y crecimiento orgánico." },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-center animate-on-scroll">
          Marketing Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="glass-card p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-on-scroll"
              data-delay={String(i * 80)}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-display font-bold text-base">{item.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
