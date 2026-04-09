import { useState } from "react";
import { X, Play } from "lucide-react";

const tabs = ["Reels", "Posts", "Logos"] as const;
type Tab = (typeof tabs)[number];

function Lightbox({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
    >
      <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-foreground hover:text-primary transition-colors"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}

function GradientPlaceholder({
  aspect,
  gradient,
  label,
  overlay,
  onClick,
}: {
  aspect: string;
  gradient: string;
  label: string;
  overlay?: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative ${aspect} rounded-lg overflow-hidden cursor-pointer group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300`}
    >
      <div className={`absolute inset-0 ${gradient}`} />
      {overlay}
      <span className="absolute bottom-2 left-2 text-xs font-medium text-foreground/80">{label}</span>
    </button>
  );
}

export default function PortfolioSection() {
  const [tab, setTab] = useState<Tab>("Reels");
  const [lightbox, setLightbox] = useState<{ type: Tab; index: number } | null>(null);

  return (
    <section id="portafolio" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-center animate-on-scroll">Portafolio</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mt-8 animate-on-scroll" data-delay="100">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                tab === t ? "gradient-bg text-primary-foreground" : "text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Reels */}
        {tab === "Reels" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
            {Array.from({ length: 6 }, (_, i) => (
              <GradientPlaceholder
                key={i}
                aspect="aspect-[9/16]"
                gradient="bg-gradient-to-br from-primary/60 to-accent/60"
                label={`Reel ${i + 1}`}
                overlay={
                  <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                    <Play className="text-foreground" size={32} />
                  </div>
                }
                onClick={() => setLightbox({ type: "Reels", index: i })}
              />
            ))}
          </div>
        )}

        {/* Posts */}
        {tab === "Posts" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
            {Array.from({ length: 12 }, (_, i) => (
              <GradientPlaceholder
                key={i}
                aspect="aspect-square"
                gradient="bg-gradient-to-br from-secondary/60 to-primary/60"
                label={`Post ${i + 1}`}
                onClick={() => setLightbox({ type: "Posts", index: i })}
              />
            ))}
          </div>
        )}

        {/* Logos */}
        {tab === "Logos" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
            {Array.from({ length: 6 }, (_, i) => (
              <GradientPlaceholder
                key={i}
                aspect="aspect-square"
                gradient="bg-gradient-to-br from-accent/60 to-secondary/60"
                label={`Logo ${i + 1}`}
                onClick={() => setLightbox({ type: "Logos", index: i })}
              />
            ))}
          </div>
        )}

        {/* Lightbox */}
        {lightbox && (
          <Lightbox onClose={() => setLightbox(null)}>
            {lightbox.type === "Reels" ? (
              <div className="aspect-[9/16] max-h-[80vh] mx-auto rounded-lg overflow-hidden bg-gradient-to-br from-primary/60 to-accent/60 flex items-center justify-center">
                <p className="text-foreground/60 text-sm">Reel {lightbox.index + 1}</p>
              </div>
            ) : (
              <div className="aspect-square max-h-[80vh] mx-auto rounded-lg overflow-hidden bg-gradient-to-br from-secondary/60 to-primary/60 flex items-center justify-center">
                <p className="text-foreground/60 text-sm">
                  {lightbox.type === "Posts" ? `Post ${lightbox.index + 1}` : `Logo ${lightbox.index + 1}`}
                </p>
              </div>
            )}
          </Lightbox>
        )}
      </div>
    </section>
  );
}
