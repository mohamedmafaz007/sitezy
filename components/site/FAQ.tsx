'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from '@/lib/anim';

const FAQS = [
  {
    q: 'How does SITEZY connect builders and homeowners?',
    a: 'SITEZY is one ecosystem with two apps. When a builder logs attendance, materials or photos in the Builders App, the data syncs to the cloud instantly. The homeowner sees updates, photos and milestones in the Client App within seconds — no manual sharing required.',
  },
  {
    q: 'Do I need separate accounts for each project site?',
    a: 'No. A single builder account lets you manage unlimited project sites from one dashboard. You can organise crews, materials and budgets per site and switch between them in a click.',
  },
  {
    q: 'Can homeowners approve variations and payments through the app?',
    a: 'Yes. Homeowners can review invoices, approve variations, and make payments directly in the Client App. Every approval is logged and timestamped for both parties.',
  },
  {
    q: 'Is my project data secure?',
    a: 'All documents, blueprints and contracts are stored in an encrypted vault with role-based access. Only authorised team members and the linked homeowner can view project data.',
  },
  {
    q: 'What devices does SITEZY work on?',
    a: 'The Builders App and Client App are available on iOS and Android. The full management dashboard also runs in any modern browser on laptop and desktop.',
  },
  {
    q: 'How quickly are updates shared with the homeowner?',
    a: 'Instantly. The moment a site manager uploads a photo or marks a milestone, the homeowner receives a push notification and the update appears in their app.',
  },
  {
    q: 'Can I generate reports for clients or stakeholders?',
    a: 'Yes. SITEZY generates professional PDF reports covering progress, budget, attendance and milestones — ready to share with clients, investors or partners.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-mesh-light opacity-40" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
            FAQ
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
            Questions, answered.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className={`overflow-hidden rounded-2xl border transition-colors ${isOpen ? 'border-brand-orange/30 bg-white' : 'border-ink-100 bg-white/60'}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-bold text-ink-900 sm:text-lg">{f.q}</span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-brand-orange text-white' : 'bg-ink-100 text-ink-600'}`}>
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="px-5 pb-5 text-ink-500">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
