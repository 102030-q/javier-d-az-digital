import { Button } from "@/components/ui/button";

const stats = [
  { value: "3+ Años", label: "en Marketing Digital" },
  { value: "6+ Skills", label: "Especializados" },
  { value: "7+ Años", label: "en Comunicación" },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient glow */}
      <div className="absolute inset-0 gradient-glow animate-glow-pulse" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1
          className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight animate-fade-in-up"
        >
          Estratega Digital
        </h1>
        <p
          className="gradient-text font-display font-bold text-xl sm:text-2xl md:text-3xl mt-4 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          Marketing & Redes Sociales
        </p>
        <p
          className="text-muted-foreground max-w-xl mx-auto mt-6 text-base sm:text-lg animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Creando estrategias de contenido digital que conectan marcas con sus audiencias. Saltillo, México.
        </p>

        <div className="mt-8 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <Button variant="hero" size="lg" asChild>
            <a href="#contacto">Conectar</a>
          </Button>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-16 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-display font-bold text-2xl sm:text-3xl gradient-text">{s.value}</span>
              <span className="text-muted-foreground text-xs sm:text-sm mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
