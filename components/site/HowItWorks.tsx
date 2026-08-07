'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  Camera, Cloud, BrainCircuit, Wallet, Bell, CalendarClock, Smartphone,
  Sparkles, UploadCloud, ShieldCheck, CheckCircle2, Zap
} from 'lucide-react';
import { Reveal } from '@/lib/anim';

const STEPS = [
  {
    icon: Camera,
    title: 'Builder Logs & Uploads Photo',
    desc: 'Site managers log daily crew attendance, material deliveries, and snap high-res progress photos directly from their smartphone on site. Every photo is timestamped, geotagged, and linked to the active project phase.',
    color: 'from-brand-orange to-amber-500',
    tags: ['Timestamped & Geotagged', '1-Tap Field Upload', 'Offline Mode Ready'],
    mockup: {
      type: 'upload',
      title: 'Site_Roof_Truss_04.jpg',
      sub: '2.4 MB · Uploaded by Crew A (Site Manager)',
      tag: 'Field Logged',
    },
  },
  {
    icon: Cloud,
    title: 'Instant Real-Time Cloud Sync',
    desc: 'Data uploaded on the field is instantly transmitted across encrypted cloud channels, synchronizing office management dashboards, inventory records, and client portals without any manual data re-entry.',
    color: 'from-brand-blue to-indigo-500',
    tags: ['Zero Data Latency', 'AWS 256-bit Encryption', 'Multi-Device Sync'],
    mockup: {
      type: 'sync',
      title: 'Syncing to AWS Cloud Pipeline',
      sub: 'Office & Client Portals Updated (0.4s latency)',
      tag: 'Live Sync Active',
    },
  },
  {
    icon: BrainCircuit,
    title: 'Smart Photo Analysis',
    desc: 'Uploaded site photos are reviewed and organised into structured daily progress logs, phase-tagged albums, and milestone galleries — giving office teams and clients a clear visual record of construction progress.',
    color: 'from-emerald-500 to-brand-green',
    tags: ['Phase-Tagged Albums', 'Milestone Galleries', '🔮 AI Analysis — Coming Soon'],
    mockup: {
      type: 'ai',
      title: 'Photo Log: Roofing Phase Review',
      sub: 'Tagged: Cement (240 bags), Roof Trusses (100%)',
      tag: '🔮 Future Enhancement',
    },
  },
  {
    icon: Wallet,
    title: 'Live Budget & Expense Adjustments',
    desc: 'Material consumption and petty cash expenditures are logged and tracked against project budget thresholds in real-time, giving office teams instant financial visibility and control.',
    color: 'from-amber-500 to-brand-orange',
    tags: ['Ledger Entry Tracking', 'Instant Cost Variance', '🔮 Receipt OCR — Coming Soon'],
    mockup: {
      type: 'budget',
      title: '+$1,840.00 Petty Cash Logged & Costed',
      sub: 'Project Budget: 73% Spent ($1.2M Contract)',
      tag: 'Ledger Updated',
    },
  },
  {
    icon: Bell,
    title: 'Instant Client Push Notification',
    desc: 'Homeowners receive a curated, professional push notification on their mobile devices the moment new photos, milestones, or progress summaries are published — no phone calls or emails needed.',
    color: 'from-brand-blue to-sky-400',
    tags: ['Instant Push Alert', 'No Manual Emails', 'Branded Client Update'],
    mockup: {
      type: 'notify',
      title: '🔔 SITEZY Update Alert',
      sub: '12 new photos & Roofing milestone added to Hillside Villa',
      tag: 'Push Delivered',
    },
  },
  {
    icon: CalendarClock,
    title: 'Live Schedule Tracking',
    desc: 'As site milestones are verified, project timelines and estimated handover dates are updated, keeping subcontractors, suppliers, and homeowners synchronised on upcoming deadlines.',
    color: 'from-brand-green to-teal-400',
    tags: ['Gantt Timeline View', 'Milestone Sign-off', 'Subcontractor Sync'],
    mockup: {
      type: 'timeline',
      title: 'Milestone: Roofing Structure Complete',
      sub: 'Overall Schedule: 65% Completed (Est. Handover: Mar 18)',
      tag: 'Schedule Updated',
    },
  },
  {
    icon: Smartphone,
    title: 'Client Portal Live Experience',
    desc: 'The homeowner opens SITEZY to explore high-res site galleries, interactive progress walkthroughs, verified invoices, and chat directly with their project supervisor in one unified app.',
    color: 'from-brand-orange to-rose-500',
    tags: ['Full Transparency', 'Verified Invoices', 'Direct Messaging'],
    mockup: {
      type: 'client',
      title: '100% Total Synchronization',
      sub: 'Complete transparency from ground break to handover',
      tag: 'Zero Confusion',
    },
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const lineHeight = useTransform(scrollYProgress, [0.15, 0.85], ['0%', '100%']);

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
      {/* Ambient glowing background */}
      <div className="absolute inset-0 bg-mesh-dark opacity-70" />
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-brand-orange/15 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl animate-blob" style={{ animationDelay: '5s' }} />

      <div ref={ref} className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-teal/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-tealLight border border-brand-teal/30 shadow-glow-teal">
            <Sparkles className="h-3.5 w-3.5" /> How SITEZY Works
          </span>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            From field to phone, in one seamless flow.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            Watch how information moves instantaneously the moment a builder acts on site.
          </p>
        </Reveal>

        <div className="relative mt-20 sm:mt-28">
          {/* Vertical Laser Beam Progress Track */}
          <div className="absolute left-6 top-0 h-full w-1 bg-slate-800/80 md:left-1/2 md:-translate-x-1/2 rounded-full">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full rounded-full bg-gradient-to-b from-brand-teal via-brand-tealLight to-teal-400 shadow-[0_0_15px_rgba(28,76,97,0.8)]"
            />
          </div>

          <div className="space-y-16 sm:space-y-24">
            {STEPS.map((step, i) => (
              <StepItem key={step.title} step={step} index={i} total={STEPS.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({
  step,
  index,
  total,
}: {
  step: typeof STEPS[0];
  index: number;
  total: number;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { margin: '-20% 0px -20% 0px' });

  const isEven = index % 2 === 0;

  return (
    <div ref={itemRef} className="relative flex items-start gap-4 sm:gap-6 md:gap-12 overflow-hidden">
      {/* Glowing Node Marker */}
      <div className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl md:absolute md:left-1/2 md:-translate-x-1/2">
        <motion.div
          animate={isInView ? { scale: [1, 1.15, 1] } : { scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg transition-all duration-500 ${
            isInView ? 'shadow-[0_0_20px_rgba(28,76,97,0.6)] scale-110' : 'opacity-70'
          }`}
        >
          <step.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </motion.div>
      </div>

      {/* Content Card */}
      <div className={`min-w-0 flex-1 md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16 md:ml-auto'}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 10 }}
          transition={{ duration: 0.5 }}
          className={`group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-5 sm:p-8 text-left shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-slate-700 ${
            isInView ? 'border-slate-700 bg-slate-900/95 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : ''
          }`}
        >
          {/* Step Pill */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-300 border border-slate-700">
              <Zap className="h-3 w-3 text-brand-tealLight" /> Step 0{index + 1} / 0{total}
            </span>
          </div>

          <h3 className="font-display text-xl font-extrabold text-white sm:text-2xl md:text-3xl leading-snug">
            {step.title}
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {step.desc}
          </p>

          {/* Feature Highlight Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {step.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-slate-800/80 px-2.5 py-1 text-[11px] font-semibold text-slate-300 border border-slate-700/60"
              >
                ✓ {tag}
              </span>
            ))}
          </div>

          {/* Mini-UI Mockup Snippet */}
          <div className="mt-5 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-3 rounded-2xl bg-slate-950/90 p-3 sm:p-3.5 border border-slate-800/80 text-left overflow-hidden">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-800 border border-slate-700">
                {step.mockup.type === 'upload' && <UploadCloud className="h-5 w-5 text-brand-tealLight" />}
                {step.mockup.type === 'sync' && <Cloud className="h-5 w-5 text-teal-400" />}
                {step.mockup.type === 'ai' && <Sparkles className="h-5 w-5 text-emerald-400" />}
                {step.mockup.type === 'budget' && <Wallet className="h-5 w-5 text-amber-400" />}
                {step.mockup.type === 'notify' && <Bell className="h-5 w-5 text-sky-400" />}
                {step.mockup.type === 'timeline' && <CalendarClock className="h-5 w-5 text-teal-400" />}
                {step.mockup.type === 'client' && <ShieldCheck className="h-5 w-5 text-brand-tealLight" />}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center gap-2">
                  <p className="text-xs font-bold text-slate-100 truncate">{step.mockup.title}</p>
                  <span className="shrink-0 text-[9px] font-bold text-brand-tealLight bg-brand-teal/20 px-2 py-0.5 rounded-full border border-brand-teal/30 whitespace-nowrap">
                    {step.mockup.tag}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5 truncate">{step.mockup.sub}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
