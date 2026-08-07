'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import {
  BarChart3, FileText, Boxes, UserCheck, Cpu, Truck,
  ShoppingCart, ReceiptText, CalendarClock, BellRing,
  Image as ImageIcon, ShieldCheck, X, Sparkles, CheckCircle2, ArrowRight
} from 'lucide-react';
import { Reveal } from '@/lib/anim';
import { IMAGES } from '@/lib/images';

const CATEGORIES = ['All', 'Operations', 'Finance & Inventory', 'Client Portal'];

const FEATURES = [
  { icon: BarChart3, title: 'Construction Analytics', desc: 'Live dashboards across every site, crew, and cost center in real time.', category: 'Operations', img: IMAGES.hero.construction, tag: 'Live Data' },
  { icon: FileText, title: 'Daily Site Reports', desc: 'Site reports generated and delivered to office inboxes the moment a field update is logged.', category: 'Operations', img: IMAGES.builders.siteWorker, tag: 'Instant Reports' },
  { icon: Boxes, title: 'Smart Inventory', desc: 'Real-time stock levels with low-stock alerts and threshold meters to prevent project delays.', category: 'Finance & Inventory', img: IMAGES.howItWorks.site, tag: 'Stock Alert' },
  { icon: UserCheck, title: 'Labour Attendance', desc: 'GPS check-in, overtime timesheets, and crew tracking in one place.', category: 'Operations', img: IMAGES.builders.crew, tag: 'GPS Verified' },
  { icon: Cpu, title: 'Machine Tracking', desc: 'Track heavy equipment operational hours, fuel, and rental utilization.', category: 'Operations', img: IMAGES.howItWorks.drone, tag: 'IoT Sync' },
  { icon: Truck, title: 'Vendor Management', desc: 'Manage suppliers, delivery lead times, and scheduled material drops.', category: 'Operations', img: IMAGES.builders.dashboard, tag: 'Logistics' },
  { icon: ShoppingCart, title: 'Purchase Orders', desc: 'Raise, approve, and track POs without leaving the mobile app.', category: 'Finance & Inventory', img: IMAGES.problem.engineers, tag: 'Approvals' },
  { icon: ReceiptText, title: 'Expense Logs', desc: 'Capture petty cash receipts and categorize spend in seconds.', category: 'Finance & Inventory', img: IMAGES.builders.engineer, tag: 'OCR Scan' },
  { icon: CalendarClock, title: 'Project Timeline', desc: 'Visual Gantt charts across construction phases and milestones.', category: 'Operations', img: IMAGES.trust.aerial, tag: 'Gantt Chart' },
  { icon: BellRing, title: 'Client Updates', desc: 'Push site photos, progress logs, and notes straight to homeowners.', category: 'Client Portal', img: IMAGES.client.couple, tag: 'Push Alerts' },
  { icon: ImageIcon, title: 'Photo Gallery', desc: 'Phase-by-phase albums with HD before and after comparisons.', category: 'Client Portal', img: IMAGES.client.villa, tag: 'HD Albums' },
  { icon: ShieldCheck, title: 'Secure Vault', desc: 'Encrypted document storage for permits, contracts, and warranties.', category: 'Client Portal', img: IMAGES.client.interior, tag: '256-bit Vault' },
];

export function FeaturesGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [active, setActive] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const filteredFeatures = activeCategory === 'All'
    ? FEATURES
    : FEATURES.filter((f) => f.category === activeCategory);

  const feature = active !== null ? FEATURES[active] : null;

  return (
    <section ref={sectionRef} id="features-grid" className="relative overflow-hidden py-24 sm:py-32">
      {/* Dynamic Background Parallax Blobs */}
      <motion.div style={{ y: backgroundY }} className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/3 top-20 h-96 w-96 rounded-full bg-brand-orange/10 blur-3xl" />
        <div className="absolute right-1/3 bottom-20 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
      </motion.div>
      <div className="absolute inset-0 bg-mesh-light opacity-50 z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange border border-brand-orange/20 shadow-glow-orange">
            <Sparkles className="h-3.5 w-3.5" /> Everything in one place
          </span>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Twelve tools that replace a dozen apps.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink-500 sm:text-lg">
            Tap any interactive card below to explore its live features inside SITEZY.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-ink-900 text-white shadow-md scale-105'
                    : 'bg-white/80 text-ink-600 hover:bg-white hover:text-ink-900 border border-ink-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* 3D Scroll & Tilt Cards Grid */}
        <motion.div
          layout
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredFeatures.map((f, i) => {
              const originalIndex = FEATURES.findIndex((item) => item.title === f.title);
              return (
                <FeatureCard
                  key={f.title}
                  feature={f}
                  index={i}
                  onClick={() => setActive(originalIndex)}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Feature Detail Modal */}
      <AnimatePresence>
        {feature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/75 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 220, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-white/20"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-ink-700 backdrop-blur transition hover:bg-white shadow-md"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative h-60 overflow-hidden">
                <img src={feature.img} alt={feature.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orangeDark text-white shadow-glow-orange">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/20 px-2 py-0.5 rounded-full">
                        {feature.tag}
                      </span>
                      <h3 className="font-display text-2xl font-extrabold text-white mt-1">{feature.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-base text-ink-600 leading-relaxed">{feature.desc}</p>
                <h4 className="mt-6 font-display text-xs font-bold uppercase tracking-wider text-ink-400">
                  Key Capabilities Included
                </h4>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {[
                    'Real-time live dashboard sync',
                    'Mobile & Desktop app access',
                    'Instant push notifications',
                    'Exportable PDF reports',
                    'Role-based security controls',
                    '256-bit encrypted cloud storage',
                  ].map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs font-semibold text-ink-700">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </span>
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

/** 3D Mouse Tilt & Scroll Card Component */
function FeatureCard({
  feature,
  index,
  onClick,
}: {
  feature: typeof FEATURES[0];
  index: number;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLButtonElement>(null);

  // Mouse tilt animation values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group relative overflow-hidden rounded-3xl bg-white/80 p-6 text-left shadow-sm ring-1 ring-ink-100/80 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:ring-brand-orange/40 backdrop-blur-md flex flex-col justify-between"
    >
      <div>
        {/* Top Header Row */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-ink-900 to-ink-800 text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-brand-orange group-hover:to-brand-orangeDark group-hover:shadow-glow-orange">
            <feature.icon className="h-6 w-6" />
          </div>
          <span className="rounded-full bg-ink-50 px-2.5 py-1 text-[10px] font-bold text-ink-500 transition-colors group-hover:bg-brand-orange/10 group-hover:text-brand-orange">
            {feature.tag}
          </span>
        </div>

        {/* Content */}
        <h3 className="font-display text-lg font-bold text-ink-900 transition-colors group-hover:text-brand-orange">
          {feature.title}
        </h3>
        <p className="mt-2 text-xs text-ink-500 leading-relaxed font-normal">
          {feature.desc}
        </p>
      </div>

      {/* Bottom Action */}
      <div className="mt-6 flex items-center justify-between pt-3 border-t border-ink-100/60">
        <span className="text-xs font-bold text-ink-400 transition-colors group-hover:text-ink-900">
          Explore Feature
        </span>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-ink-50 text-ink-400 transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white group-hover:translate-x-1">
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>

      {/* Bottom Gradient Hover Bar */}
      <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-orange via-brand-blue to-brand-green transition-transform duration-500 group-hover:scale-x-100" />
    </motion.button>
  );
}
