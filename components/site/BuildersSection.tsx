'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, type MotionValue } from 'framer-motion';
import {
  UserCheck, Boxes, Wallet, Receipt, Users, FileBarChart,
  CalendarClock, TrendingUp, ArrowRight,
} from 'lucide-react';
import { PhoneFrame } from '@/components/PhoneFrame';
import { ScreenRow, ScreenIcons } from '@/components/site/PhoneScreens';

const SCREENS = [
  {
    icon: UserCheck,
    title: 'Attendance',
    desc: 'Track daily attendance, log overtime, and calculate wages automatically.',
    rows: [
      { icon: ScreenIcons.Users, label: 'Crew A · Foundation', value: '12 present', accent: 'bg-brand-orange/10 text-brand-orange' },
      { icon: ScreenIcons.Hammer, label: 'Crew B · Framing', value: '18 present', accent: 'bg-brand-green/10 text-brand-green' },
      { icon: ScreenIcons.CheckCircle2, label: 'Crew C · Electrical', value: '12 present', accent: 'bg-brand-blue/10 text-brand-blue' },
    ],
  },
  {
    icon: Boxes,
    title: 'Materials',
    desc: 'Real-time stock levels, deliveries, and automated low-stock alerts.',
    rows: [
      { icon: ScreenIcons.Package, label: 'Cement bags', value: '240 / 500', accent: 'bg-brand-orange/10 text-brand-orange' },
      { icon: ScreenIcons.Package, label: 'Steel rebar', value: '1.2 tons', accent: 'bg-brand-green/10 text-brand-green' },
      { icon: ScreenIcons.Package, label: 'Bricks', value: 'Low stock', accent: 'bg-red-100 text-red-600' },
    ],
  },
  {
    icon: Wallet,
    title: 'Expenses',
    desc: 'Log petty cash, upload receipts, and monitor equipment rental costs.',
    rows: [
      { icon: ScreenIcons.Wallet, label: 'Petty cash today', value: '$1,840', accent: 'bg-brand-orange/10 text-brand-orange' },
      { icon: ScreenIcons.Wallet, label: 'Equipment rental', value: '$3,200', accent: 'bg-brand-blue/10 text-brand-blue' },
      { icon: ScreenIcons.Wallet, label: 'Receipts uploaded', value: '23 new', accent: 'bg-brand-green/10 text-brand-green' },
    ],
  },
  {
    icon: Receipt,
    title: 'Payroll',
    desc: 'Automated wage calculation across crews and project sites.',
    rows: [
      { icon: ScreenIcons.Users, label: 'Weekly payroll', value: '$48,200', accent: 'bg-brand-orange/10 text-brand-orange' },
      { icon: ScreenIcons.Users, label: 'Overtime hours', value: '186 hrs', accent: 'bg-brand-blue/10 text-brand-blue' },
      { icon: ScreenIcons.Wallet, label: 'Paid this month', value: '$192k', accent: 'bg-brand-green/10 text-brand-green' },
    ],
  },
  {
    icon: CalendarClock,
    title: 'Projects',
    desc: 'Monitor multiple projects from one dashboard. Reallocate resources instantly.',
    rows: [
      { icon: ScreenIcons.Hammer, label: 'Hillside Villa', value: '64% done', accent: 'bg-brand-orange/10 text-brand-orange' },
      { icon: ScreenIcons.Hammer, label: 'Maple Estate', value: '38% done', accent: 'bg-brand-blue/10 text-brand-blue' },
      { icon: ScreenIcons.Hammer, label: 'Riverside Towers', value: '81% done', accent: 'bg-brand-green/10 text-brand-green' },
    ],
  },
  {
    icon: FileBarChart,
    title: 'Reports',
    desc: 'Generate professional PDF reports and identify bottlenecks before they cost you.',
    rows: [
      { icon: ScreenIcons.TrendingUp, label: 'Profit margin', value: '22.4%', accent: 'bg-brand-orange/10 text-brand-orange' },
      { icon: ScreenIcons.TrendingUp, label: 'On-time delivery', value: '94%', accent: 'bg-brand-green/10 text-brand-green' },
      { icon: ScreenIcons.FileText, label: 'Reports generated', value: '128', accent: 'bg-brand-blue/10 text-brand-blue' },
    ],
  },
];

export function BuildersSection({ onDownload }: { onDownload: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // 6 screens across the sticky section
  const screenIndex = useTransform(scrollYProgress, [0.05, 0.95], [0, SCREENS.length - 1]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section id="builders" ref={ref} className="relative">
      {/* sticky container: tall enough to scroll through 6 screens */}
      <div className="relative h-[600vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          {/* orange ambient glow */}
          <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-orange/15 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-white to-white" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2">
            {/* LEFT — sticky phone */}
            <div className="relative hidden justify-center lg:flex">
              <motion.div style={{ rotate: phoneRotate }}>
                <PhoneFrame accent="orange" glow float="none">
                  <ScreenSlot index={screenIndex} />
                </PhoneFrame>
              </motion.div>
            </div>

            {/* RIGHT — scrolling content */}
            <div className="space-y-[100vh] py-[10vh]">
              {SCREENS.map((s, i) => (
                <ScreenCopy key={s.title} screen={s} index={i} total={SCREENS.length} onDownload={onDownload} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScreenCopy({
  screen, index, total, onDownload,
}: { screen: typeof SCREENS[0]; index: number; total: number; onDownload: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: '-45% 0px -45% 0px' }}
      transition={{ duration: 0.6 }}
      className="max-w-xl"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orangeDark text-white shadow-glow-orange">
          <screen.icon className="h-6 w-6" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
            Builders App · {index + 1}/{total}
          </span>
          <h3 className="font-display text-3xl font-extrabold text-ink-900">{screen.title}</h3>
        </div>
      </div>
      <p className="text-lg text-ink-500">{screen.desc}</p>

      <div className="mt-6 space-y-2">
        {screen.rows.map((r) => (
          <ScreenRow key={r.label} {...r} />
        ))}
      </div>
    </motion.div>
  );
}

/** Renders the active screen inside the phone based on scroll progress. */
function ScreenSlot({ index }: { index: MotionValue<number> }) {
  const [i, setI] = useState(0);
  useMotionValueEvent(index, 'change', (v) => setI(Math.round(v)));

  const screen = SCREENS[i] ?? SCREENS[0];
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-ink-50 to-white px-3 pb-3">
      <div className="mb-2 flex items-center justify-between px-1 pt-1">
        <div>
          <p className="text-[10px] font-medium text-ink-400">Builders App</p>
          <p className="font-display text-sm font-bold text-ink-900">{screen.title}</p>
        </div>
        <screen.icon className="h-5 w-5 text-brand-orange" />
      </div>
      <motion.div
        key={i}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-2"
      >
        {screen.rows.map((r) => (
          <ScreenRow key={r.label} {...r} />
        ))}
      </motion.div>

      {/* progress dots */}
      <div className="mt-auto flex justify-center gap-1.5 pt-2">
        {SCREENS.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? 'w-5 bg-brand-orange' : 'w-1.5 bg-ink-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
