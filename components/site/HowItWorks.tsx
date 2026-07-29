'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Camera, Cloud, BrainCircuit, Wallet, Bell, CalendarClock, Smartphone,
} from 'lucide-react';
import { Reveal } from '@/lib/anim';

const STEPS = [
  { icon: Camera, title: 'Builder uploads photo', desc: 'A site manager logs cement usage and uploads progress photos from the field.', color: 'from-brand-orange to-brand-orangeLight' },
  { icon: Cloud, title: 'Cloud sync', desc: 'Inventory, budget and project progress update automatically across both apps.', color: 'from-brand-blue to-brand-blueLight' },
  { icon: BrainCircuit, title: 'AI processing', desc: 'Photos are tagged, milestones detected, and reports generated in seconds.', color: 'from-brand-green to-emerald-400' },
  { icon: Wallet, title: 'Budget updated', desc: 'Material consumption is costed and reflected against the project budget live.', color: 'from-brand-orange to-amber-400' },
  { icon: Bell, title: 'Client notified', desc: 'The homeowner receives an instant push notification with the new update.', color: 'from-brand-blue to-indigo-400' },
  { icon: CalendarClock, title: 'Timeline updated', desc: 'The project timeline advances and the milestone is marked complete.', color: 'from-brand-green to-teal-400' },
  { icon: Smartphone, title: 'Client opens app', desc: 'The homeowner opens SITEZY and views updated photos and milestones.', color: 'from-brand-orange to-brand-orangeDark' },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
      {/* ambient bg */}
      <div className="absolute inset-0 bg-mesh-dark opacity-70" />
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl animate-blob" />
      <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl animate-blob" style={{ animationDelay: '5s' }} />

      <div ref={ref} className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
            How SITEZY Works
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            From field to phone, in one seamless flow.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Watch how information moves the moment a builder acts on site.
          </p>
        </Reveal>

        <div className="relative mt-20">
          {/* vertical track */}
          <div className="absolute left-[27px] top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-brand-orange via-brand-blue to-brand-green"
            />
          </div>

          <div className="space-y-12">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.05}>
                <div className={`relative flex items-start gap-6 md:gap-12 ${i % 2 ? 'md:flex-row-reverse' : ''}`}>
                  {/* node */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2"
                    style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                  >
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-glow-orange`}>
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* card */}
                  <div className={`flex-1 md:w-1/2 ${i % 2 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="rounded-2xl glass-dark p-6">
                      <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                        Step {i + 1}
                      </span>
                      <h3 className="mt-1 font-display text-2xl font-bold text-white">{step.title}</h3>
                      <p className="mt-2 text-sm text-white/60">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
