'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Reveal } from '@/lib/anim';
import { IMAGES } from '@/lib/images';

const SLIDES = [
  { img: IMAGES.gallery[0], label: 'Builder Dashboard', tag: 'Builders' },
  { img: IMAGES.gallery[1], label: 'Site Tracking', tag: 'Builders' },
  { img: IMAGES.gallery[2], label: 'Client Gallery', tag: 'Clients' },
  { img: IMAGES.gallery[3], label: 'Live Progress', tag: 'Clients' },
  { img: IMAGES.gallery[4], label: 'Crew Management', tag: 'Builders' },
  { img: IMAGES.gallery[5], label: 'Project Timeline', tag: 'Clients' },
  { img: IMAGES.gallery[6], label: 'Drone Overview', tag: 'Builders' },
  { img: IMAGES.gallery[7], label: 'Interior Preview', tag: 'Clients' },
];

export function Screenshots() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 3000);
    return () => clearInterval(t);
  }, [paused]);

  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setIndex((i) => (i + 1) % SLIDES.length);

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
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
            Gallery
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
            See SITEZY in action.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-500">
            Builder screens, client screens, drone overviews and dashboards.
          </p>
        </Reveal>

        <div
          className="mt-16 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            ref={trackRef}
            className="flex"
            animate={{ x: `-${index * (100 / 3)}%` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: `${(SLIDES.length / 3) * 100}%` }}
          >
            {SLIDES.map((s, i) => (
              <div key={i} className="w-1/3 shrink-0 px-3">
                <button
                  onClick={() => setLightbox(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl shadow-premium"
                >
                  <img
                    src={s.img}
                    alt={s.label}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="text-left">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">{s.tag}</span>
                      <p className="font-display text-lg font-bold text-white">{s.label}</p>
                    </div>
                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] text-white backdrop-blur">View</span>
                  </div>
                </button>
              </div>
            ))}
          </motion.div>
        </div>

        {/* controls */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button onClick={prev} className="flex h-10 w-10 items-center justify-center rounded-full glass shadow-premium transition hover:scale-110" aria-label="Previous">
            <ChevronLeft className="h-5 w-5 text-ink-700" />
          </button>
          <div className="flex gap-1.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-brand-orange' : 'w-1.5 bg-ink-200'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="flex h-10 w-10 items-center justify-center rounded-full glass shadow-premium transition hover:scale-110" aria-label="Next">
            <ChevronRight className="h-5 w-5 text-ink-700" />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/80 p-4 backdrop-blur"
          >
            <button onClick={() => setLightbox(null)} className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={SLIDES[lightbox].img}
              alt={SLIDES[lightbox].label}
              className="max-h-[85vh] rounded-2xl object-contain shadow-premium"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
