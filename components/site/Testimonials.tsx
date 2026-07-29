'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
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
  },
  {
    quote: 'Building a house is stressful, but this app was a game-changer. Approving budget changes was as easy as clicking a button. We always knew what was happening.',
    name: 'Emma & Liam',
    role: 'First-Time Homeowners',
    project: 'Maple Estate',
    img: IMAGES.testimonials[1].img,
    accent: 'blue',
  },
  {
    quote: 'Managing five sites used to mean five spreadsheets. Now it is one dashboard. My profit margins are up 14% since we switched to SITEZY.',
    name: 'Sarah K.',
    role: 'General Contractor',
    project: 'Riverside Towers',
    img: IMAGES.testimonials[2].img,
    accent: 'orange',
  },
  {
    quote: 'The daily photos and milestone notifications made us feel involved without being in the way. Our builder actually communicated more, not less.',
    name: 'James W.',
    role: 'Homeowner',
    project: 'Garden Court',
    img: IMAGES.testimonials[3].img,
    accent: 'blue',
  },
  {
    quote: 'Payroll used to take two days. Now it takes twenty minutes. The attendance tracking alone paid for itself in the first month.',
    name: 'Marcus T.',
    role: 'Site Supervisor',
    project: 'Harbour View',
    img: IMAGES.testimonials[4].img,
    accent: 'orange',
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const t = TESTIMONIALS[index];
  const accentColor = t.accent === 'orange' ? 'text-brand-orange' : 'text-brand-blue';
  const accentBg = t.accent === 'orange' ? 'from-brand-orange/10' : 'from-brand-blue/10';

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-mesh-light opacity-40" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
            Loved by builders & homeowners
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
            Don't take our word for it.
          </h2>
        </Reveal>

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5 }}
              className={`relative overflow-hidden rounded-3xl glass p-8 shadow-premium sm:p-12`}
            >
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${accentBg} to-transparent blur-2xl`} />
              <Quote className={`h-10 w-10 ${accentColor} opacity-30`} />
              <p className="mt-4 font-display text-xl font-medium leading-relaxed text-ink-800 sm:text-2xl">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-white shadow"
                />
                <div>
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-1 font-display font-bold text-ink-900">{t.name}</p>
                  <p className="text-sm text-ink-500">{t.role} · {t.project}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full glass shadow-premium transition hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-ink-700" />
            </button>
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-brand-orange' : 'w-1.5 bg-ink-200'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full glass shadow-premium transition hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-ink-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
