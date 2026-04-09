# PROYECTO_ESTADO.md — Portafolio Javier Díaz Digital

> Archivo de sesión para retomar este proyecto en cualquier herramienta de IA (Claude, Cursor, Lovable, Antigravity, etc.)
> Última actualización: 2026-04-09

---

## 🔗 URLs del Proyecto

| Recurso | URL |
|---------|-----|
| Repositorio GitHub | https://github.com/102030-q/javier-d-az-digital |
| Netlify (producción) | _pendiente — agregar URL de Netlify aquí_ |

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| React | 18.3.1 | Framework UI |
| TypeScript | ~5.5.3 | Tipado estático |
| Vite | 5.4.19 | Build tool / dev server |
| Tailwind CSS | 3.4.17 | Estilos utilitarios |
| shadcn/ui | latest | Componentes UI (Radix UI) |
| React Router DOM | 6.30.1 | Navegación SPA |
| TanStack React Query | 5.83.0 | Estado asíncrono |
| Lucide React | latest | Íconos |
| Bun / npm | — | Package manager |
| Playwright | latest | Tests E2E |
| Vitest | latest | Unit tests |

---

## 📁 Estructura de Carpetas

```
javier-d-az-digital/
├── public/                        ← Archivos estáticos (servidos desde raíz)
│   ├── reels/                     ← Videos MP4 (reel1.mp4 … reel6.mp4) [SUBIR AQUÍ]
│   ├── posts/                     ← Imagen post (post1.png) [SUBIR AQUÍ]
│   ├── logos/                     ← Logos PNG (logo1.png, logo2.png) [SUBIR AQUÍ]
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx       ← Sección "Sobre Mí" con roles y certificaciones
│   │   ├── ContactSection.tsx     ← Email + WhatsApp + ubicación
│   │   ├── ExpertiseSection.tsx   ← 6 áreas de expertise
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx        ← Sección principal "Estratega Digital"
│   │   ├── Navbar.tsx
│   │   ├── NavLink.tsx
│   │   ├── PortfolioSection.tsx   ← ⭐ MODIFICADO EN ESTA SESIÓN
│   │   ├── SpeakingSection.tsx
│   │   ├── ToolsSection.tsx
│   │   └── ui/                   ← Componentes shadcn/ui (40+)
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   ├── useScrollAnimation.ts  ← Animaciones al hacer scroll
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts               ← Función cn() para clases Tailwind
│   ├── pages/
│   │   ├── Index.tsx              ← Página principal (monta todas las secciones)
│   │   └── NotFound.tsx           ← Página 404
│   ├── App.tsx
│   ├── App.css
│   ├── index.css                  ← Variables CSS globales (colores HSL, fuentes)
│   └── main.tsx                   ← Entry point
├── index.html
├── package.json
├── tailwind.config.ts
├── vite.config.ts                 ← Puerto 8080, alias @/
├── tsconfig.app.json
├── components.json                ← Config shadcn/ui (baseColor: slate)
├── playwright.config.ts
├── eslint.config.js
├── PROYECTO_ESTADO.md             ← Este archivo
└── .gitignore
```

---

## 🎨 Estado Actual del Portafolio

### Secciones (orden en Index.tsx)
1. **Navbar** — Navegación superior fija
2. **HeroSection** — "Estratega Digital / Marketing & Redes Sociales"
   - Stats: 3+ años marketing digital, 6+ skills, 7+ años comunicación
3. **AboutSection** — 4 roles + 3 certificaciones (HubSpot, Toastmasters)
4. **ExpertiseSection** — 6 tarjetas de expertise
5. **SpeakingSection** — Conferencias/presentaciones
6. **PortfolioSection** ← MODIFICADA — 2 tabs: Reels | Diseños
7. **ToolsSection** — Herramientas utilizadas
8. **ContactSection** — javidzbusiness.2023@gmail.com / +52 844 461 0452 / Saltillo, Coah.
9. **Footer**

### Diseño / Colores
- Fuentes: **Outfit** (títulos), **DM Sans** (cuerpo)
- Tema: oscuro con variables CSS HSL
- Efecto glass en cards
- Animaciones: fade-in-up, glow-pulse al hacer scroll (useScrollAnimation hook)
- Gradient principal: from-primary/60 to-accent/60

---

## ⭐ Cambios Realizados en Esta Sesión (2026-04-09)

### PortfolioSection.tsx — `src/components/PortfolioSection.tsx`

**Antes:**
- Usaba placeholders con gradientes (sin archivos reales)
- Los logos tenían etiqueta de texto ("Logo 1", "Logo 2")
- El lightbox mostraba texto placeholder

**Después (commit: "feat: update PortfolioSection with video/image paths"):**
- **Tab "Reels"**: 6 elementos `<video>` reales en grid 3 columnas
  - Rutas: `/reels/reel1.mp4` hasta `/reels/reel6.mp4`
  - Solo ícono Play visible, sin texto
  - Al hacer click abre lightbox con `<video controls autoPlay>`
- **Tab "Diseños"**: Imágenes reales con `<img>`
  - 1 post centrado: `/posts/post1.png`
  - 2 logos lado a lado: `/logos/logo1.png` y `/logos/logo2.png`
  - Sin etiquetas de texto
  - Al hacer click abre lightbox con la imagen ampliada
- Solo 2 tabs: **Reels** y **Diseños**

---

## 📥 Instrucciones: Descargar y Subir Archivos de Canva

### Paso 1 — Descargar desde Canva

Carpeta en Canva: **"Portafolio-JD"**

#### Reels (6 videos verticales MP4)
1. Abre cada reel en Canva
2. Click en **"Compartir"** → **"Descargar"**
3. Formato: **MP4 (Video)**
4. Calidad: **1080p** (recomendado)
5. Nombrarlos en orden: `reel1.mp4`, `reel2.mp4`, ..., `reel6.mp4`

#### Post / Anuncio (1 imagen PNG)
1. Abre el diseño en Canva
2. Click en **"Compartir"** → **"Descargar"**
3. Formato: **PNG**
4. Nombrar: `post1.png`

#### Logos (2 imágenes PNG)
1. "Logo Lilyana Portafolio JD" → descargar como **PNG** → renombrar: `logo1.png`
2. "Logo-mercy" → descargar como **PNG** → renombrar: `logo2.png`
   - Para logos: activar **"Fondo transparente"** si está disponible en tu plan Canva

---

### Paso 2 — Subir a GitHub (carpeta /public)

**Opción A — GitHub Web (recomendado)**
1. Ve a: https://github.com/102030-q/javier-d-az-digital/tree/main/public
2. Click en **"Add file"** → **"Upload files"**
3. Crea la carpeta arrastrando archivos con el path correcto:
   - Para reels: escribe `reels/` antes del nombre en el input de filename
   - Para post: escribe `posts/` antes del nombre
   - Para logos: escribe `logos/` antes del nombre
4. Commit message: `feat: add portfolio media files (reels, post, logos)`

**Opción B — Git local**
```bash
# Clonar si no tienes el repo localmente
git clone https://github.com/102030-q/javier-d-az-digital.git
cd javier-d-az-digital

# Crear carpetas y copiar archivos
mkdir -p public/reels public/posts public/logos

# Copiar tus archivos descargados a las carpetas:
# public/reels/reel1.mp4 ... reel6.mp4
# public/posts/post1.png
# public/logos/logo1.png logo2.png

# Commit y push
git add public/
git commit -m "feat: add portfolio media files (reels, post, logos)"
git push
```

---

### Paso 3 — Verificar en Netlify

1. Después del push, Netlify debería hacer deploy automático (si está conectado a GitHub)
2. Espera ~1-2 minutos y visita tu URL de Netlify
3. Navega a la sección **Portfolio**
4. Verifica:
   - Tab "Reels": que se vean las miniaturas de los videos con el ícono Play
   - Tab "Diseños": que aparezcan el post y los 2 logos
   - Click en cada elemento: que el lightbox abra correctamente con el video/imagen

**Si los archivos no aparecen:**
- Verifica que las rutas sean exactas (case-sensitive): `/reels/reel1.mp4` no `/Reels/Reel1.MP4`
- En Netlify > Deploys > revisa el log de build para errores
- Abre DevTools (F12) > Network y filtra por los nombres de archivo para ver si dan 404

---

## 💻 Comandos para Correr Localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/102030-q/javier-d-az-digital.git
cd javier-d-az-digital

# 2. Instalar dependencias
npm install
# o con bun:
bun install

# 3. Iniciar servidor de desarrollo (puerto 8080)
npm run dev
# o:
bun dev

# 4. Abrir en navegador
# http://localhost:8080

# Otros comandos útiles:
npm run build      # Build para producción
npm run preview    # Preview del build de producción
npm run lint       # Revisar errores de ESLint
npm run test       # Correr tests con Vitest
```

---

## 📋 Próximos Pasos Pendientes

- [ ] **URGENTE**: Subir archivos de media a `/public` (reels, post, logos)
- [ ] Agregar URL de Netlify en este archivo (reemplazar "_pendiente_")
- [ ] Verificar que los videos cargan correctamente en móvil
- [ ] Considerar agregar poster/thumbnail estático a los `<video>` para mejor UX
- [ ] Optimizar videos MP4 si son muy pesados (usar HandBrake o similar, target < 10MB por reel)
- [ ] Configurar dominio personalizado en Netlify (opcional)

---

## 🤖 Cómo Retomar Este Trabajo en una IA

Comparte este archivo completo con la IA y dile:

> "Este es el estado actual de mi portafolio React. [Pega el contenido de este archivo]. Necesito que me ayudes con: [describe tu tarea]"

La IA tendrá todo el contexto necesario: stack, estructura, cambios hechos y próximos pasos.
