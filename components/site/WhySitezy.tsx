'use client';

import { motion } from 'framer-motion';
import {
  Zap, Boxes, ReceiptText, UserCheck, Users, BrainCircuit,
  Wallet, CloudUpload, CalendarClock, BellRing, ArrowRight, Sparkles
} from 'lucide-react';
import { Reveal } from '@/lib/anim';

const FEATURES = [
  { icon: Zap, title: 'Real-Time Updates', desc: 'Live sync between field and phone — no waiting for end-of-day reports.', color: 'from-brand-orange to-amber-500' },
  { icon: Boxes, title: 'Material Tracking', desc: 'Stock levels, deliveries, and low-stock alerts across every site, instantly.', color: 'from-brand-blue to-indigo-500' },
  { icon: ReceiptText, title: 'Expense Tracking', desc: 'Log petty cash, upload receipts, and watch spend against budget in real time.', color: 'from-emerald-500 to-brand-green' },
  { icon: UserCheck, title: 'Attendance Logs', desc: 'Digital timesheets with GPS check-in. Know who is on site every minute.', color: 'from-amber-500 to-brand-orange' },
  { icon: Users, title: 'Labour Roster', desc: 'Organise specialised crews, log overtime, and auto-calculate wages.', color: 'from-brand-blue to-sky-400' },
  { icon: BrainCircuit, title: 'Smart Site Reports', desc: 'Generate professional PDF reports and spot bottlenecks before they cost you. AI-powered analysis coming soon.', color: 'from-brand-green to-teal-400' },
  { icon: Wallet, title: 'Budget Control', desc: 'Compare actual spending against projected budgets instantly with variance alerts.', color: 'from-brand-orange to-rose-500' },
  { icon: CloudUpload, title: 'Cloud Sync Relay', desc: 'One source of truth. Inventory, budget, and progress update instantly across all devices.', color: 'from-brand-blue to-cyan-400' },
  { icon: CalendarClock, title: 'Project Timeline', desc: 'Track every phase and milestone. Reallocate resources the moment a slip happens.', color: 'from-brand-green to-emerald-400' },
  { icon: BellRing, title: 'Instant Push Alerts', desc: 'Builders and homeowners are notified the moment anything changes on site.', color: 'from-brand-orange to-amber-400' },
];

export function WhySitezy() {
  return (
    <section id="features" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-mesh-light opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Problem / Solution */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="flex flex-col items-center text-center">
            {/* Section Badge */}
            <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-white/90 px-5 py-2 border border-brand-teal/20 shadow-sm backdrop-blur-md">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
                Why SITEZY
              </span>
            </div>

            <h2 className="mt-2 font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl text-center">
              Bridging the gap between the field and the homeowner.
            </h2>
            <p className="mt-5 text-lg text-ink-500 leading-relaxed text-center max-w-2xl">
              Historically, construction has been plagued by miscommunication,
              hidden costs, and frustrated clients. Contractors juggle workers,
              materials and expenses across sites. Clients are left in the dark.
            </p>
            <p className="mt-4 text-lg text-ink-500 leading-relaxed text-center max-w-2xl">
              We solve this with a two-sided platform. Contractors get a rugged
              management dashboard. Clients get a beautiful app to watch their
              dream home come to life.{' '}
              <span className="font-bold text-ink-900">
                Total synchronization. Zero confusion.
              </span>
            </p>

            <div className="mt-8 grid gap-4 w-full sm:grid-cols-2 text-left">
              <div className="rounded-2xl glass p-5 border border-ink-100/80 shadow-sm transition-all hover:shadow-md">
                <h3 className="font-display text-lg font-bold text-ink-900">For Builders</h3>
                <p className="mt-1 text-xs text-ink-500 leading-relaxed">
                  A powerful dashboard to handle the heavy lifting — labour,
                  materials, margins.
                </p>
                <button
                  onClick={() => document.querySelector('#builders')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-teal hover:gap-2 transition-all"
                >
                  Explore the builder app <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="rounded-2xl glass p-5 border border-ink-100/80 shadow-sm transition-all hover:shadow-md">
                <h3 className="font-display text-lg font-bold text-ink-900">For Homeowners</h3>
                <p className="mt-1 text-xs text-ink-500 leading-relaxed">
                  An intuitive app with live photos, milestones, payments and
                  documents.
                </p>
                <button
                  onClick={() => document.querySelector('#clients')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-teal hover:gap-2 transition-all"
                >
                  Explore the client app <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Reveal>

          {/* Premium SITEZY Brand Logo Showcase Card */}
          <Reveal delay={0.15} className="relative">
            <div className="relative flex min-h-[440px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-brand-teal/25 bg-gradient-to-br from-white via-slate-50 to-teal-50/50 p-8 sm:p-10 shadow-premium transition-all duration-500 hover:border-brand-teal/45 hover:shadow-glow-teal">
              {/* Dynamic Glow Blobs & Grid Pattern */}
              <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-brand-teal/20 blur-3xl animate-pulse" />
              <div className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-brand-tealLight/20 blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
              <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />

              {/* Center SITEZY Transparent Logo Display - BIGGER SIZE */}
              <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center py-6">
                <motion.img
                  src="/logo-transparent.png"
                  alt="SITEZY Brand Logo"
                  className="h-44 xs:h-56 sm:h-80 md:h-[360px] max-w-full object-contain filter drop-shadow-[0_20px_45px_rgba(28,76,97,0.35)]"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                />
                <span className="mt-6 sm:mt-8 rounded-full bg-brand-teal px-5 py-2 sm:px-7 sm:py-2.5 text-[10px] sm:text-xs font-black uppercase tracking-widest text-white shadow-md border border-brand-tealLight/30 backdrop-blur-md">
                  ONE PLATFORM · TWO TAILORED APPS
                </span>
              </div>

              {/* Bottom Quote Card */}
              <div className="relative z-10 rounded-2xl bg-white/90 p-4 backdrop-blur-md border border-brand-teal/15 shadow-sm text-left">
                <p className="text-sm font-semibold text-ink-900">
                  “Now my clients can see everything on their phones in real time.”
                </p>
                <p className="mt-1 text-xs text-ink-500 font-medium">— David R., Custom Home Builder</p>
              </div>
            </div>

            {/* Floating Accent Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute right-2 -top-4 sm:-right-4 sm:-top-4 rounded-2xl bg-ink-900 p-3 sm:p-4 text-white shadow-premium border border-brand-teal/40"
            >
              <p className="font-display text-xl sm:text-2xl font-extrabold text-brand-tealLight">98%</p>
              <p className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-white/70">Client Satisfaction</p>
            </motion.div>
          </Reveal>
        </div>
      </div>

      {/* Infinite Left-to-Right Looping Marquee Track */}
      <div className="relative mt-20 overflow-hidden py-4">
        {/* Left & Right Gradient Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />

        <motion.div
          className="flex gap-5 w-max"
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            ease: 'linear',
            duration: 28,
            repeat: Infinity,
          }}
        >
          {[...FEATURES, ...FEATURES, ...FEATURES].map((f, i) => (
            <div
              key={`${f.title}-${i}`}
              className="group relative w-72 shrink-0 overflow-hidden rounded-2xl border border-brand-navy/10 bg-white/90 p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-brand-orange/40 hover:-translate-y-1 backdrop-blur-md"
            >
              <div className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold text-brand-navy group-hover:text-brand-orange transition-colors">{f.title}</h3>
              <p className="mt-1 text-xs text-ink-500 leading-relaxed font-normal">{f.desc}</p>
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-navy via-brand-orange to-brand-navy transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
