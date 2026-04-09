import { useState } from "react";
import { X, Play } from "lucide-react";

const tabs = ["Reels", "Diseños"] as const;
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

const reels = Array.from({ length: 6 }, (_, i) => `/reels/reel${i + 1}.mp4`);

export default function PortfolioSection() {
  const [tab, setTab] = useState<Tab>("Reels");
  const [lightbox, setLightbox] = useState<{ type: string; index: number } | null>(null);

  return (
    <section id="portfolio" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-center animate-on-scroll">Portfolio</h2>

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
            {reels.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightbox({ type: "Reel", index: i })}
                className="relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-gradient-to-br from-primary/60 to-accent/60"
              >
                <video
                  src={src}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity bg-background/20">
                  <Play className="text-foreground" size={32} />
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Diseños */}
        {tab === "Diseños" && (
          <div className="mt-8 space-y-4">
            {/* Single post image */}
            <div className="max-w-md mx-auto">
              <button
                onClick={() => setLightbox({ type: "Post", index: 0 })}
                className="relative aspect-square w-full rounded-lg overflow-hidden cursor-pointer group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-gradient-to-br from-secondary/60 to-primary/60"
              >
                <img
                  src="/posts/post1.png"
                  alt="Post"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </button>
            </div>
            {/* 2 logos side by side */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {["/logos/logo1.png", "/logos/logo2.png"].map((src, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox({ type: "Logo", index: i })}
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-gradient-to-br from-accent/60 to-secondary/60"
                >
                  <img
                    src={src}
                    alt={`Logo ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox */}
        {lightbox && (
          <Lightbox onClose={() => setLightbox(null)}>
            {lightbox.type === "Reel" ? (
              <div className="aspect-[9/16] max-h-[80vh] mx-auto rounded-lg overflow-hidden">
                <video
                  src={reels[lightbox.index]}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                />
              </div>
            ) : lightbox.type === "Post" ? (
              <div className="aspect-square max-h-[80vh] mx-auto rounded-lg overflow-hidden">
                <img
                  src="/posts/post1.png"
                  alt="Post"
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="aspect-square max-h-[80vh] mx-auto rounded-lg overflow-hidden">
                <img
                  src={`/logos/logo${lightbox.index + 1}.png`}
                  alt={`Logo ${lightbox.index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </Lightbox>
        )}
      </div>
    </section>
  );
}
