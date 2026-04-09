import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contacto" className="relative py-24 px-4 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 container mx-auto max-w-3xl text-center">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl animate-on-scroll">Conecta conmigo</h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto animate-on-scroll" data-delay="100">
          ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a hacer crecer tu marca digital.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8 animate-on-scroll" data-delay="200">
          <Button variant="hero" size="lg" asChild>
            <a href="mailto:javidzbusiness.2023@gmail.com">Enviar mensaje</a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://wa.me/528444610452" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground animate-on-scroll" data-delay="300">
          <span className="flex items-center gap-2">
            <Mail size={16} className="text-primary" /> javidzbusiness.2023@gmail.com
          </span>
          <span className="flex items-center gap-2">
            <Phone size={16} className="text-primary" /> +52 844 461 0452
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-primary" /> Saltillo, Coahuila, México
          </span>
        </div>
      </div>
    </section>
  );
}
