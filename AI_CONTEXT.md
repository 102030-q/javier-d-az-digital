# AI_CONTEXT.md — Portafolio Javier Díaz Digital
# ARCHIVO DE CONTEXTO PARA IA (Antigravity, Cursor, Claude, etc.)

> Pega este archivo completo al inicio de tu conversación con cualquier IA.
> Última actualización: 2026-04-09

---

## INSTRUCCIÓN PARA LA IA

Eres un asistente que va a ayudar a modificar el portafolio web personal de Javier Díaz.
Es un sitio React + TypeScript + Tailwind CSS + shadcn/ui.
El repositorio está en: https://github.com/102030-q/javier-d-az-digital
Todos los cambios deben hacerse en los archivos de `src/`.

---

## STACK TECNOLÓGICO

- React 18.3.1 + TypeScript
- Vite 5.4.19 (puerto 8080 en dev)
- Tailwind CSS 3.4.17
- shadcn/ui (baseColor: slate, tema oscuro)
- React Router DOM 6.30.1
- Lucide React (íconos)
- Fuentes: Outfit (títulos, class: font-display) / DM Sans (cuerpo)
- Alias de importación: `@/` → `./src/`

---

## ESTRUCTURA DE ARCHIVOS CLAVE

```
src/
├── pages/
│   └── Index.tsx          ← Página principal — monta todas las secciones en orden
├── components/
│   ├── Navbar.tsx          ← Navegación superior
│   ├── HeroSection.tsx     ← Sección hero: "Estratega Digital"
│   ├── AboutSection.tsx    ← Sobre mí: roles + certificaciones
│   ├── ExpertiseSection.tsx ← 6 áreas de expertise con íconos emoji
│   ├── SpeakingSection.tsx ← Conferencias/presentaciones
│   ├── PortfolioSection.tsx ← Galería: tabs Reels | Diseños ← ARCHIVO PRINCIPAL
│   ├── ToolsSection.tsx    ← Stack de herramientas
│   ├── ContactSection.tsx  ← Email + WhatsApp + ubicación
│   ├── Footer.tsx
│   └── ui/                 ← Componentes shadcn/ui (NO modificar)
├── hooks/
│   ├── useScrollAnimation.ts ← Anima elementos con clase .animate-on-scroll
│   └── use-mobile.tsx
├── index.css               ← Variables CSS globales (colores, fuentes)
└── App.tsx                 ← Router principal
```

---

## ORDEN DE SECCIONES (Index.tsx)

1. Navbar
2. HeroSection
3. AboutSection
4. ExpertiseSection
5. SpeakingSection
6. PortfolioSection
7. ToolsSection
8. ContactSection
9. Footer

---

## INFORMACIÓN PERSONAL DEL PORTAFOLIO

- **Nombre:** Javier Díaz
- **Título:** Estratega Digital
- **Subtítulo:** Marketing & Redes Sociales
- **Ubicación:** Saltillo, Coahuila, México
- **Email:** javidzbusiness.2023@gmail.com
- **WhatsApp:** +52 844 461 0452
- **Stats Hero:** 3+ años en marketing digital | 6+ skills especializados | 7+ años en comunicación
- **Certificaciones:** HubSpot Inbound Marketing, HubSpot Ventas, Toastmasters
- **Expertise (6):** Estrategia digital, Campañas Meta/TikTok/Instagram, Marketing automation, Copywriting, Edición de video, Gestión de redes sociales

---

## CÓDIGO ACTUAL: PortfolioSection.tsx

```tsx
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

        {/* Reels: 6 videos en grid 3 columnas, solo ícono Play */}
        {tab === "Reels" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
            {reels.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightbox({ type: "Reel", index: i })}
                className="relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-gradient-to-br from-primary/60 to-accent/60"
              >
                <video src={src} className="absolute inset-0 w-full h-full object-cover" muted playsInline preload="metadata" />
                <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity bg-background/20">
                  <Play className="text-foreground" size={32} />
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Diseños: 1 post centrado + 2 logos lado a lado */}
        {tab === "Diseños" && (
          <div className="mt-8 space-y-4">
            <div className="max-w-md mx-auto">
              <button
                onClick={() => setLightbox({ type: "Post", index: 0 })}
                className="relative aspect-square w-full rounded-lg overflow-hidden cursor-pointer group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-gradient-to-br from-secondary/60 to-primary/60"
              >
                <img src="/posts/post1.png" alt="Post" className="absolute inset-0 w-full h-full object-cover" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {["/logos/logo1.png", "/logos/logo2.png"].map((src, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox({ type: "Logo", index: i })}
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-gradient-to-br from-accent/60 to-secondary/60"
                >
                  <img src={src} alt={`Logo ${i + 1}`} className="absolute inset-0 w-full h-full object-contain p-2" />
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
                <video src={reels[lightbox.index]} className="w-full h-full object-cover" controls autoPlay />
              </div>
            ) : lightbox.type === "Post" ? (
              <div className="aspect-square max-h-[80vh] mx-auto rounded-lg overflow-hidden">
                <img src="/posts/post1.png" alt="Post" className="w-full h-full object-contain" />
              </div>
            ) : (
              <div className="aspect-square max-h-[80vh] mx-auto rounded-lg overflow-hidden">
                <img src={`/logos/logo${lightbox.index + 1}.png`} alt={`Logo ${lightbox.index + 1}`} className="w-full h-full object-contain" />
              </div>
            )}
          </Lightbox>
        )}
      </div>
    </section>
  );
}
```

---

## PATRONES Y CONVENCIONES DEL PROYECTO

### Cómo agregar animación al scroll
Agrega `animate-on-scroll` como clase al elemento. Opcionalmente `data-delay="100"` (ms).
```tsx
<h2 className="... animate-on-scroll">Título</h2>
<div className="animate-on-scroll" data-delay="200">Contenido</div>
```

### Cómo agregar una nueva sección
1. Crea `src/components/NuevaSección.tsx`
2. Agrégala en `src/pages/Index.tsx` en el orden correcto
3. Si necesitas ancla de navegación: usa `id="nombre-seccion"` en el `<section>`

### Clases de Tailwind más usadas en este proyecto
- Gradiente principal: `bg-gradient-to-br from-primary/60 to-accent/60`
- Gradiente secundario: `bg-gradient-to-br from-secondary/60 to-primary/60`
- Títulos: `font-display font-extrabold text-3xl sm:text-4xl`
- Cards con hover: `hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300`
- Botón activo (tab): `gradient-bg text-primary-foreground`
- Botón inactivo (tab): `text-muted-foreground hover:text-foreground border border-border`
- Sección container: `py-24 px-4` + `container mx-auto max-w-5xl`

### Variables de color (definidas en index.css)
El tema usa variables HSL. Los colores principales son:
- `primary` → morado/violeta
- `accent` → acento complementario
- `secondary` → secundario
- `background` / `foreground` → fondo oscuro / texto claro
- `muted-foreground` → texto secundario/suave
- `border` → color de bordes

---

## ARCHIVOS MULTIMEDIA (en /public)

| Archivo | Ruta | Estado |
|---------|------|--------|
| reel1.mp4 | /reels/reel1.mp4 | Pendiente de subir |
| reel2.mp4 | /reels/reel2.mp4 | Pendiente de subir |
| reel3.mp4 | /reels/reel3.mp4 | Pendiente de subir |
| reel4.mp4 | /reels/reel4.mp4 | Pendiente de subir |
| reel5.mp4 | /reels/reel5.mp4 | Pendiente de subir |
| reel6.mp4 | /reels/reel6.mp4 | Pendiente de subir |
| post1.png | /posts/post1.png | Pendiente de subir |
| logo1.png | /logos/logo1.png | Pendiente de subir |
| logo2.png | /logos/logo2.png | Pendiente de subir |

---

## EJEMPLOS DE CAMBIOS COMUNES

### Cambiar texto del Hero
Archivo: `src/components/HeroSection.tsx`
Busca el texto "Estratega Digital" y el subtítulo "Marketing & Redes Sociales"

### Cambiar email o WhatsApp
Archivo: `src/components/ContactSection.tsx`
Busca "javidzbusiness.2023@gmail.com" y "+52 844 461 0452"

### Agregar un área de expertise
Archivo: `src/components/ExpertiseSection.tsx`
Agrega un objeto al array de expertise con: { emoji, título, descripción }

### Agregar más reels al portfolio
Archivo: `src/components/PortfolioSection.tsx`
Cambia `Array.from({ length: 6 }, ...)` por el número deseado y sube los MP4 adicionales

### Cambiar colores del tema
Archivo: `src/index.css`
Modifica las variables CSS `--primary`, `--accent`, etc. en formato HSL

---

## COMANDOS ÚTILES

```bash
npm install        # Instalar dependencias
npm run dev        # Dev server en http://localhost:8080
npm run build      # Build para producción
npm run lint       # Revisar errores ESLint
```

---

## REPOSITORIO Y DEPLOY

- **GitHub:** https://github.com/102030-q/javier-d-az-digital
- **Netlify:** _agregar URL aquí_
- **Branch principal:** main
- **Deploy:** automático desde GitHub (si Netlify está conectado)
