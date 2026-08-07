'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react';
import { Reveal } from '@/lib/anim';

const FAQS = [
  {
    q: 'How does SITEZY connect builders and homeowners?',
    a: 'SITEZY is one ecosystem with two apps. When a builder logs attendance, materials, or photos in the Builders App, the data syncs to the cloud instantly. The homeowner sees updates, photos, and milestones in the Client App within seconds — no manual sharing required.',
  },
  {
    q: 'Do I need separate accounts for each project site?',
    a: 'No. A single builder account lets you manage unlimited project sites from one dashboard. You can organize crews, materials, and budgets per site and switch between them in a click.',
  },
  {
    q: 'Can homeowners approve variations and payments through the app?',
    a: 'Yes. Homeowners can review invoices, approve variations, and make payments directly in the Client App. Every approval is logged and timestamped for both parties.',
  },
  {
    q: 'Is my project data secure?',
    a: 'All documents, blueprints, and contracts are stored in an encrypted vault with role-based access. Only authorized team members and the linked homeowner can view project data.',
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
    a: 'Yes. SITEZY generates professional PDF reports covering progress, budget, attendance, and milestones — ready to share with clients, investors, or partners.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-12 sm:py-16 bg-slate-50/50 backdrop-blur-sm">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        {/* Compact Header */}
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-orange border border-brand-orange/20 shadow-glow-orange">
            <Sparkles className="h-3.5 w-3.5" /> FAQ
          </span>
          <h2 className="mx-auto mt-2 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-4xl">
            Questions, answered.
          </h2>
          <p className="mx-auto mt-2 text-sm text-ink-500 max-w-md">
            Everything you need to know about SITEZY. Scroll to view answers automatically.
          </p>
        </Reveal>

        {/* Compact FAQ Items with Scroll-Auto-Expand */}
        <div className="mt-6 sm:mt-8 space-y-2.5">
          {FAQS.map((f, i) => (
            <FaqItem
              key={f.q}
              faq={f}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
              onFocus={() => setOpen(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
  onFocus,
}: {
  faq: typeof FAQS[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  onFocus: () => void;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { margin: '-35% 0px -35% 0px' });

  // Auto-expand dropdown when scrolled into focus view
  useEffect(() => {
    if (isInView) {
      onFocus();
    }
  }, [isInView]);

  return (
    <div
      ref={itemRef}
      className={`overflow-hidden rounded-2xl border transition-all duration-300 shadow-sm ${
        isOpen
          ? 'border-brand-orange/40 bg-white ring-2 ring-brand-orange/20 shadow-md'
          : 'border-ink-100/80 bg-white/80 hover:border-brand-orange/30 hover:bg-white'
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-4 py-3.5 sm:px-5 sm:py-4 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <HelpCircle className={`h-4 w-4 shrink-0 transition-colors ${isOpen ? 'text-brand-orange' : 'text-ink-400'}`} />
          <span className="font-display text-sm sm:text-base font-bold text-ink-900">
            {faq.q}
          </span>
        </div>

        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? 'bg-brand-orange text-white rotate-180 shadow-glow-orange'
              : 'bg-ink-100 text-ink-600'
          }`}
        >
          {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="px-4 pb-4 sm:px-5 sm:pb-4 pl-11 text-xs sm:text-sm leading-relaxed text-ink-600 border-t border-slate-100 pt-3">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
