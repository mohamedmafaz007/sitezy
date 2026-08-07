'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';
import { Reveal } from '@/lib/anim';
import { IMAGES } from '@/lib/images';

const TESTIMONIALS = [
  {
    quote: 'Before this software, I spent my weekends reconciling paper receipts. Now my clients can see everything on their phones. SITEZY gave me my weekends back.',
    name: 'David R.',
    role: 'Custom Home Builder',
    project: 'Hillside Villa',
    img: IMAGES.testimonials[0].img,
    accent: 'orange',
    rating: 5,
  },
  {
    quote: 'Building a house is stressful, but this app was a game-changer. Approving budget changes was as easy as clicking a button. We always knew what was happening.',
    name: 'Emma & Liam',
    role: 'First-Time Homeowners',
    project: 'Maple Estate',
    img: IMAGES.testimonials[1].img,
    accent: 'blue',
    rating: 5,
  },
  {
    quote: 'Managing five sites used to mean five spreadsheets. Now it is one dashboard. My profit margins are up 14% since we switched to SITEZY.',
    name: 'Sarah K.',
    role: 'General Contractor',
    project: 'Riverside Towers',
    img: IMAGES.testimonials[2].img,
    accent: 'orange',
    rating: 5,
  },
  {
    quote: 'The daily photos and milestone notifications made us feel involved without being in the way. Our builder actually communicated more, not less.',
    name: 'James W.',
    role: 'Homeowner',
    project: 'Garden Court',
    img: IMAGES.testimonials[3].img,
    accent: 'blue',
    rating: 5,
  },
  {
    quote: 'Payroll used to take two days. Now it takes twenty minutes. The attendance tracking alone paid for itself in the first month.',
    name: 'Marcus T.',
    role: 'Site Supervisor',
    project: 'Harbour View',
    img: IMAGES.testimonials[4].img,
    accent: 'orange',
    rating: 5,
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic one-by-one slide movement every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[index];
  const accentColor = t.accent === 'orange' ? 'text-brand-orange' : 'text-brand-blue';
  const accentBg = t.accent === 'orange' ? 'from-brand-orange/15' : 'from-brand-blue/15';

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 bg-slate-50/60 backdrop-blur-sm">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/10 blur-3xl" />
      
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        {/* Compact Header */}
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-orange border border-brand-orange/20 shadow-glow-orange">
            <Sparkles className="h-3.5 w-3.5" /> Loved by builders & homeowners
          </span>
          <h2 className="mx-auto mt-2 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-4xl">
            Don't take our word for it.
          </h2>
        </Reveal>

        {/* Compact Testimonial Card Container */}
        <div
          className="relative mt-6 sm:mt-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.98 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-xl ring-1 ring-ink-100/80"
            >
              <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${accentBg} to-transparent blur-xl`} />
              
              <div className="flex items-center justify-between mb-3">
                <Quote className={`h-8 w-8 ${accentColor} opacity-40`} />
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <p className="font-display text-base font-medium leading-relaxed text-ink-800 sm:text-xl">
                "{t.quote}"
              </p>

              <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-white shadow-sm"
                  />
                  <div>
                    <p className="font-display font-bold text-sm text-ink-900">{t.name}</p>
                    <p className="text-xs text-ink-500">{t.role} · <span className="font-semibold text-ink-700">{t.project}</span></p>
                  </div>
                </div>

                <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                  t.accent === 'orange' ? 'bg-orange-50 text-brand-orange' : 'bg-blue-50 text-brand-blue'
                }`}>
                  Verified Review
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Compact Controls */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-ink-100 text-ink-700 transition hover:bg-brand-orange hover:text-white hover:ring-brand-orange"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-1.5 px-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-5 bg-brand-orange shadow-glow-orange' : 'w-1.5 bg-ink-200 hover:bg-ink-400'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-ink-100 text-ink-700 transition hover:bg-brand-orange hover:text-white hover:ring-brand-orange"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Auto-play Status Toggle */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="ml-2 flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-[9px] font-bold text-slate-600 hover:bg-slate-200 transition"
            >
              {isPaused ? <Play className="h-2.5 w-2.5 text-brand-orange" /> : <Pause className="h-2.5 w-2.5 text-slate-500" />}
              <span>{isPaused ? 'Paused' : 'Auto'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
