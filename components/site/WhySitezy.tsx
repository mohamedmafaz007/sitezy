'use client';

import { motion } from 'framer-motion';
import {
  Zap, Boxes, ReceiptText, UserCheck, Users, BrainCircuit,
  Wallet, CloudUpload, CalendarClock, BellRing, ArrowRight,
} from 'lucide-react';
import { Reveal, staggerContainer, fadeUp } from '@/lib/anim';
import { IMAGES } from '@/lib/images';

const FEATURES = [
  { icon: Zap, title: 'Real-Time Updates', desc: 'Live sync between field and phone — no more waiting for end-of-day reports.', color: 'from-brand-orange to-brand-orangeLight' },
  { icon: Boxes, title: 'Material Tracking', desc: 'Stock levels, deliveries and low-stock alerts across every site, instantly.', color: 'from-brand-blue to-brand-blueLight' },
  { icon: ReceiptText, title: 'Expense Tracking', desc: 'Log petty cash, upload receipts and watch spend against budget in real time.', color: 'from-brand-green to-emerald-400' },
  { icon: UserCheck, title: 'Attendance', desc: 'Digital timesheets with GPS check-in. Know who is on site, every minute.', color: 'from-brand-orange to-amber-400' },
  { icon: Users, title: 'Labour Management', desc: 'Organise specialised crews, log overtime and auto-calculate wages.', color: 'from-brand-blue to-indigo-400' },
  { icon: BrainCircuit, title: 'AI Reports', desc: 'Generate professional PDF reports and spot bottlenecks before they cost you.', color: 'from-brand-green to-teal-400' },
  { icon: Wallet, title: 'Budget Control', desc: 'Compare actual spending against projected budgets instantly.', color: 'from-brand-orange to-brand-orangeDark' },
  { icon: CloudUpload, title: 'Cloud Sync', desc: 'One source of truth. Inventory, budget and progress update automatically.', color: 'from-brand-blue to-cyan-400' },
  { icon: CalendarClock, title: 'Project Timeline', desc: 'Track every phase and milestone. Reallocate resources the moment a slip happens.', color: 'from-brand-green to-emerald-400' },
  { icon: BellRing, title: 'Instant Notifications', desc: 'Builders and homeowners are notified the moment anything changes.', color: 'from-brand-orange to-brand-orangeLight' },
];

export function WhySitezy() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-mesh-light opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Problem / Solution */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
              Why SITEZY
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
              Bridging the gap between the field and the homeowner.
            </h2>
            <p className="mt-5 text-lg text-ink-500">
              Historically, construction has been plagued by miscommunication,
              hidden costs, and frustrated clients. Contractors juggle workers,
              materials and expenses across sites. Clients are left in the dark.
            </p>
            <p className="mt-4 text-lg text-ink-500">
              We solve this with a two-sided platform. Contractors get a rugged
              management dashboard. Clients get a beautiful app to watch their
              dream home come to life.{' '}
              <span className="font-semibold text-ink-900">
                Total synchronization. Zero confusion.
              </span>
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl glass p-5">
                <h3 className="font-display text-lg font-bold text-ink-900">For Builders</h3>
                <p className="mt-1 text-sm text-ink-500">
                  A powerful dashboard to handle the heavy lifting — labour,
                  materials, margins.
                </p>
                <button
                  onClick={() => document.querySelector('#builders')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand-orange hover:gap-2 transition-all"
                >
                  Explore the builder app <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="rounded-2xl glass p-5">
                <h3 className="font-display text-lg font-bold text-ink-900">For Homeowners</h3>
                <p className="mt-1 text-sm text-ink-500">
                  An intuitive app with live photos, milestones, payments and
                  documents.
                </p>
                <button
                  onClick={() => document.querySelector('#clients')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand-blue hover:gap-2 transition-all"
                >
                  Explore the client app <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-premium">
              <img
                src={IMAGES.problem.engineers}
                alt="Engineers reviewing plans on site"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl glass p-4">
                  <p className="text-sm font-semibold text-ink-900">
                    “Now my clients can see everything on their phones.”
                  </p>
                  <p className="mt-1 text-xs text-ink-500">— David R., Custom Home Builder</p>
                </div>
              </div>
            </div>
            {/* floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -right-4 -top-4 rounded-2xl bg-ink-900 p-4 text-white shadow-premium"
            >
              <p className="font-display text-2xl font-extrabold">98%</p>
              <p className="text-[11px] text-white/70">client satisfaction</p>
            </motion.div>
          </Reveal>
        </div>

        {/* Feature cards grid */}
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {FEATURES.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass p-5 transition-shadow hover:shadow-premium"
            >
              <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-white shadow-lg`}>
                <f.icon className="h-5 w-5 transition-transform group-hover:rotate-6" />
              </div>
              <h3 className="font-display text-base font-bold text-ink-900">{f.title}</h3>
              <p className="mt-1.5 text-sm text-ink-500">{f.desc}</p>
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-orange to-brand-blue transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
