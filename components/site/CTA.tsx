'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/lib/anim';
import { IMAGES } from '@/lib/images';

export function CTA({ onBookDemo }: { onBookDemo: () => void }) {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink-950 px-6 py-16 text-center text-white shadow-premium sm:px-16 sm:py-24">
            {/* bg image + overlays */}
            <img src={IMAGES.cta.forest} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
            <div className="absolute inset-0 bg-mesh-dark opacity-70" />
            <div className="absolute inset-0 grid-overlay opacity-20" />
            <motion.div
              className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-orange/30 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4 inline-flex items-center gap-3.5 rounded-2xl bg-white/95 px-6 py-3 shadow-lg backdrop-blur-md"
              >
                <img src="/logo-transparent.png" alt="SITEZY Logo" className="h-14 sm:h-20 w-auto object-contain" />
                <div className="h-7 w-px bg-slate-300" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
                  Modern Construction Revolution
                </span>
              </motion.div>

              <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
                Start Building Smarter Today.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/60">
                Builders and homeowners on one platform. Real-time sync, total
                transparency, zero confusion. Try SITEZY free.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  onClick={() => document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  className="group h-12 rounded-xl bg-brand-teal px-7 text-white hover:bg-brand-tealDark shadow-glow-teal font-bold"
                >
                  <Smartphone className="mr-2 h-4 w-4" /> Download Builders App
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  onClick={() => document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  className="group h-12 rounded-xl bg-brand-teal px-7 text-white hover:bg-brand-tealDark shadow-glow-teal font-bold"
                >
                  <Smartphone className="mr-2 h-4 w-4" /> Download Client App
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  onClick={onBookDemo}
                  size="lg"
                  className="h-12 rounded-xl bg-white px-7 text-ink-900 hover:bg-white/90 font-bold shadow-md"
                >
                  <CalendarCheck className="mr-2 h-4 w-4 text-brand-teal" /> Book Free Demo
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
