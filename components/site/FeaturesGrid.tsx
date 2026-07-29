'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3, FileText, Boxes, UserCheck, Cpu, Truck,
  ShoppingCart, ReceiptText, CalendarClock, BellRing,
  Image as ImageIcon, ShieldCheck, X,
} from 'lucide-react';
import { Reveal, staggerContainer, fadeUp } from '@/lib/anim';
import { IMAGES } from '@/lib/images';

const FEATURES = [
  { icon: BarChart3, title: 'Construction Analytics', desc: 'Live dashboards across every site, crew and cost centre.', img: IMAGES.hero.construction },
  { icon: FileText, title: 'Daily Reports', desc: 'Auto-generated site reports delivered to your inbox.', img: IMAGES.builders.siteWorker },
  { icon: Boxes, title: 'Inventory', desc: 'Real-time stock levels with low-stock alerts.', img: IMAGES.howItWorks.site },
  { icon: UserCheck, title: 'Labour Attendance', desc: 'GPS check-in, timesheets and overtime in one place.', img: IMAGES.builders.crew },
  { icon: Cpu, title: 'Machine Tracking', desc: 'Track equipment hours, rentals and utilisation.', img: IMAGES.howItWorks.drone },
  { icon: Truck, title: 'Vendor Management', desc: 'Manage suppliers, lead times and delivery schedules.', img: IMAGES.builders.dashboard },
  { icon: ShoppingCart, title: 'Purchase Orders', desc: 'Raise, approve and track POs without leaving the app.', img: IMAGES.problem.engineers },
  { icon: ReceiptText, title: 'Expense Logs', desc: 'Capture receipts and categorise spend in seconds.', img: IMAGES.builders.engineer },
  { icon: CalendarClock, title: 'Project Timeline', desc: 'Visual Gantt across phases, dependencies and milestones.', img: IMAGES.trust.aerial },
  { icon: BellRing, title: 'Client Updates', desc: 'Push photos, milestones and notes straight to homeowners.', img: IMAGES.client.couple },
  { icon: ImageIcon, title: 'Photo Gallery', desc: 'Phase-by-phase albums with before/after comparisons.', img: IMAGES.client.villa },
  { icon: ShieldCheck, title: 'Secure Documents', desc: 'Encrypted vault for permits, contracts and warranties.', img: IMAGES.client.interior },
];

export function FeaturesGrid() {
  const [active, setActive] = useState<number | null>(null);
  const feature = active !== null ? FEATURES[active] : null;

  return (
    <section id="features-grid" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-mesh-light opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
            Everything in one place
          </span>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
            Twelve tools that replace a dozen apps.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-500">
            Tap any card to see how it works inside SITEZY.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {FEATURES.map((f, i) => (
            <motion.button
              key={f.title}
              variants={fadeUp}
              onClick={() => setActive(i)}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 text-left transition-shadow hover:shadow-premium"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ink-900 to-ink-700 text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-ink-900">{f.title}</h3>
              <p className="mt-1.5 text-sm text-ink-500">{f.desc}</p>
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-orange to-brand-blue transition-transform duration-500 group-hover:scale-x-100" />
              <span className="mt-3 inline-block text-xs font-bold text-brand-orange opacity-0 transition-opacity group-hover:opacity-100">
                Learn more →
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Feature modal */}
      <AnimatePresence>
        {feature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-premium"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-ink-700 backdrop-blur transition hover:bg-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative h-56 overflow-hidden">
                <img src={feature.img} alt={feature.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
                <div className="absolute bottom-4 left-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-orangeDark text-white shadow-glow-orange">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl font-extrabold text-white">{feature.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-ink-600">{feature.desc}</p>
                <h4 className="mt-5 font-display text-sm font-bold uppercase tracking-wider text-ink-400">
                  What you get
                </h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {['Real-time dashboard', 'Mobile + desktop access', 'Automated alerts', 'Exportable reports', 'Role-based permissions', 'Cloud backup'].map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-ink-700">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
