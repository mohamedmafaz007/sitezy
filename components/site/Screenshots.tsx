'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2, Sparkles } from 'lucide-react';
import { Reveal } from '@/lib/anim';
import { IMAGES } from '@/lib/images';

const SLIDES = [
  { img: IMAGES.gallery[0], label: 'Builder Dashboard', tag: 'Builders', desc: 'Real-time overview of active job sites & crews' },
  { img: IMAGES.gallery[1], label: 'Site Tracking', tag: 'Builders', desc: 'Live GPS attendance and material updates' },
  { img: IMAGES.gallery[2], label: 'Client Gallery', tag: 'Clients', desc: 'High-res photos uploaded daily from site' },
  { img: IMAGES.gallery[3], label: 'Live Progress', tag: 'Clients', desc: 'Milestone tracker and handover progress' },
  { img: IMAGES.gallery[4], label: 'Crew Management', tag: 'Builders', desc: 'Subcontractor rosters and overtime logs' },
  { img: IMAGES.gallery[5], label: 'Project Timeline', tag: 'Clients', desc: 'Gantt chart schedule for upcoming phases' },
  { img: IMAGES.gallery[6], label: 'Drone Overview', tag: 'Builders', desc: 'Aerial site inspection and site boundary' },
  { img: IMAGES.gallery[7], label: 'Interior Preview', tag: 'Clients', desc: 'Finished drywall, painting & fixture log' },
];

export function Screenshots() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((l) => (l! + 1) % SLIDES.length);
      if (e.key === 'ArrowLeft') setLightbox((l) => (l! - 1 + SLIDES.length) % SLIDES.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <section id="gallery" className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-b from-[#070e1c] via-[#0b1730] to-[#070e1c] text-white">
      {/* Dark Blue Ambient Background Mesh & Lighting */}
      <div className="absolute inset-0 bg-mesh-dark opacity-60 pointer-events-none" />
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
      <div className="pointer-events-none absolute -left-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-blue/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-orange/20 blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue border border-brand-blue/30 shadow-glow-blue">
            <Sparkles className="h-3.5 w-3.5" /> Interactive Gallery
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            See SITEZY in action.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-300 sm:text-lg">
            Builder screens, client screens, drone overviews, and live dashboards.
          </p>
        </Reveal>
      </div>

      {/* Seamless Infinite Left-to-Right Marquee Loop Track */}
      <div className="relative mt-12 overflow-hidden py-6">
        {/* Left & Right Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#070e1c] via-[#070e1c]/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#070e1c] via-[#070e1c]/80 to-transparent" />

        <motion.div
          className="flex gap-5 w-max"
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            ease: 'linear',
            duration: 28,
            repeat: Infinity,
          }}
        >
          {[...SLIDES, ...SLIDES, ...SLIDES].map((s, i) => {
            const originalIndex = i % SLIDES.length;
            return (
              <div key={`${s.label}-${i}`} className="w-64 sm:w-72 shrink-0">
                <button
                  onClick={() => setLightbox(originalIndex)}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/90 shadow-xl transition-all duration-300 hover:border-brand-blue hover:shadow-2xl hover:-translate-y-1.5 text-left backdrop-blur-md"
                >
                  {/* Compact Image Frame */}
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-950">
                    <img
                      src={s.img}
                      alt={s.label}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                    {/* Top Tag Badge */}
                    <div className="absolute left-3 top-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-md ${
                        s.tag === 'Builders' ? 'bg-brand-orange/80' : 'bg-brand-blue/80'
                      }`}>
                        {s.tag}
                      </span>
                    </div>

                    {/* Expand Icon Hover Button */}
                    <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/80 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-sm">
                      <Maximize2 className="h-3.5 w-3.5" />
                    </div>

                    {/* Bottom Info Overlay */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="font-display text-sm font-extrabold text-white leading-tight">
                        {s.label}
                      </p>
                      <p className="text-[10px] text-slate-300 line-clamp-1 mt-0.5 font-medium">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Lightbox Modal for Full View */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 backdrop-blur transition"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative max-w-4xl overflow-hidden rounded-3xl bg-slate-900 shadow-2xl border border-slate-800" onClick={(e) => e.stopPropagation()}>
              <img
                src={SLIDES[lightbox].img}
                alt={SLIDES[lightbox].label}
                className="max-h-[75vh] w-auto object-contain rounded-t-3xl"
              />
              <div className="p-4 sm:p-6 bg-slate-900 flex justify-between items-center border-t border-slate-800 text-white">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    {SLIDES[lightbox].tag} Screen
                  </span>
                  <h3 className="font-display text-xl font-bold">{SLIDES[lightbox].label}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{SLIDES[lightbox].desc}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLightbox((l) => (l! - 1 + SLIDES.length) % SLIDES.length)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-slate-700"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setLightbox((l) => (l! + 1) % SLIDES.length)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-slate-700"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
