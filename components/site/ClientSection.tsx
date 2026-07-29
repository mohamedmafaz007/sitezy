'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, type MotionValue } from 'framer-motion';
import {
  Camera, Image as ImageIcon, Video, CalendarClock, CreditCard,
  FileText, CheckCircle2, MessageSquare, Bell, FileBarChart,
} from 'lucide-react';
import { PhoneFrame } from '@/components/PhoneFrame';
import { ScreenRow, ScreenIcons } from '@/components/site/PhoneScreens';

const SCREENS = [
  {
    icon: Camera,
    title: 'Daily Progress',
    desc: 'See daily photos and videos uploaded directly by site managers.',
    rows: [
      { icon: ScreenIcons.ImageIcon, label: 'Today', value: '12 new photos', accent: 'bg-brand-blue/10 text-brand-blue' },
      { icon: ScreenIcons.Video, label: 'Walkthrough', value: '1 new video', accent: 'bg-brand-green/10 text-brand-green' },
      { icon: ScreenIcons.Calendar, label: 'This week', value: '64 updates', accent: 'bg-brand-orange/10 text-brand-orange' },
    ],
  },
  {
    icon: ImageIcon,
    title: 'Photos',
    desc: 'A beautiful gallery of every moment your home comes to life.',
    rows: [
      { icon: ScreenIcons.ImageIcon, label: 'Foundation', value: '38 photos', accent: 'bg-brand-blue/10 text-brand-blue' },
      { icon: ScreenIcons.ImageIcon, label: 'Framing', value: '72 photos', accent: 'bg-brand-blue/10 text-brand-blue' },
      { icon: ScreenIcons.ImageIcon, label: 'Roofing', value: '45 photos', accent: 'bg-brand-blue/10 text-brand-blue' },
    ],
  },
  {
    icon: Video,
    title: 'Videos',
    desc: 'Full site walkthroughs so you can walk your site from anywhere.',
    rows: [
      { icon: ScreenIcons.Video, label: 'Latest walkthrough', value: '4:32 min', accent: 'bg-brand-blue/10 text-brand-blue' },
      { icon: ScreenIcons.Video, label: 'Time-lapse', value: '8 phases', accent: 'bg-brand-green/10 text-brand-green' },
      { icon: ScreenIcons.Video, label: 'Drone footage', value: '3 clips', accent: 'bg-brand-orange/10 text-brand-orange' },
    ],
  },
  {
    icon: CalendarClock,
    title: 'Timeline',
    desc: 'Track construction phases and receive milestone notifications.',
    rows: [
      { icon: ScreenIcons.Calendar, label: 'Foundation', value: 'Complete', accent: 'bg-brand-green/10 text-brand-green' },
      { icon: ScreenIcons.Calendar, label: 'Interiors', value: 'In progress', accent: 'bg-brand-blue/10 text-brand-blue' },
      { icon: ScreenIcons.Calendar, label: 'Handover', value: 'Est. Mar 18', accent: 'bg-ink-100 text-ink-500' },
    ],
  },
  {
    icon: CreditCard,
    title: 'Payments',
    desc: 'Review payments, approve variations, and access invoices instantly.',
    rows: [
      { icon: ScreenIcons.Wallet, label: 'Paid to date', value: '$840k', accent: 'bg-brand-green/10 text-brand-green' },
      { icon: ScreenIcons.Wallet, label: 'Next invoice', value: '$120k', accent: 'bg-brand-blue/10 text-brand-blue' },
      { icon: ScreenIcons.Wallet, label: 'Variations', value: '2 pending', accent: 'bg-brand-orange/10 text-brand-orange' },
    ],
  },
  {
    icon: FileText,
    title: 'Documents',
    desc: 'Securely store blueprints, permits, contracts, warranties and guides.',
    rows: [
      { icon: ScreenIcons.FileText, label: 'Blueprints', value: '14 files', accent: 'bg-brand-blue/10 text-brand-blue' },
      { icon: ScreenIcons.FileText, label: 'Permits', value: '6 files', accent: 'bg-brand-green/10 text-brand-green' },
      { icon: ScreenIcons.FileText, label: 'Warranties', value: '9 files', accent: 'bg-brand-orange/10 text-brand-orange' },
    ],
  },
  {
    icon: CheckCircle2,
    title: 'Approvals',
    desc: 'Approve variations and milestone sign-offs with a single tap.',
    rows: [
      { icon: ScreenIcons.CheckCircle2, label: 'Tile selection', value: 'Awaiting', accent: 'bg-brand-orange/10 text-brand-orange' },
      { icon: ScreenIcons.CheckCircle2, label: 'Paint colour', value: 'Approved', accent: 'bg-brand-green/10 text-brand-green' },
      { icon: ScreenIcons.CheckCircle2, label: 'Cabinet design', value: 'Awaiting', accent: 'bg-brand-orange/10 text-brand-orange' },
    ],
  },
  {
    icon: MessageSquare,
    title: 'Chat',
    desc: 'Chat directly with your project manager. All communication in one place.',
    rows: [
      { icon: ScreenIcons.MessageSquare, label: 'Project Manager', value: '2 unread', accent: 'bg-brand-blue/10 text-brand-blue' },
      { icon: ScreenIcons.MessageSquare, label: 'Site Supervisor', value: 'Online', accent: 'bg-brand-green/10 text-brand-green' },
      { icon: ScreenIcons.Bell, label: 'Announcements', value: '1 new', accent: 'bg-brand-orange/10 text-brand-orange' },
    ],
  },
  {
    icon: Bell,
    title: 'Notifications',
    desc: 'Get notified the moment anything changes on your project.',
    rows: [
      { icon: ScreenIcons.Bell, label: 'Milestone reached', value: 'Roofing done', accent: 'bg-brand-green/10 text-brand-green' },
      { icon: ScreenIcons.Bell, label: 'New photo album', value: 'Interiors', accent: 'bg-brand-blue/10 text-brand-blue' },
      { icon: ScreenIcons.Bell, label: 'Invoice ready', value: 'Phase 4', accent: 'bg-brand-orange/10 text-brand-orange' },
    ],
  },
  {
    icon: FileBarChart,
    title: 'Completion Report',
    desc: 'A full handover report with warranties, guides and final photos.',
    rows: [
      { icon: ScreenIcons.FileText, label: 'Final report', value: 'Ready', accent: 'bg-brand-green/10 text-brand-green' },
      { icon: ScreenIcons.ImageIcon, label: 'Final photos', value: '180 photos', accent: 'bg-brand-blue/10 text-brand-blue' },
      { icon: ScreenIcons.FileText, label: 'Maintenance guides', value: '12 files', accent: 'bg-brand-orange/10 text-brand-orange' },
    ],
  },
];

export function ClientSection({ onDownload }: { onDownload: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const screenIndex = useTransform(scrollYProgress, [0.05, 0.95], [0, SCREENS.length - 1]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [3, -3]);

  return (
    <section id="clients" ref={ref} className="relative bg-ink-50">
      <div className="relative h-[1000vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-blue/15 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-bl from-brand-blue/5 via-white to-white" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2">
            {/* LEFT — scrolling content (reverse layout) */}
            <div className="order-2 space-y-[100vh] py-[10vh] lg:order-1">
              {SCREENS.map((s, i) => (
                <ClientScreenCopy key={s.title} screen={s} index={i} total={SCREENS.length} onDownload={onDownload} />
              ))}
            </div>

            {/* RIGHT — sticky phone */}
            <div className="order-1 hidden justify-center lg:order-2 lg:flex">
              <motion.div style={{ rotate: phoneRotate }}>
                <PhoneFrame accent="blue" glow float="none">
                  <ClientScreenSlot index={screenIndex} />
                </PhoneFrame>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientScreenCopy({
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
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blueDark text-white shadow-glow-blue">
          <screen.icon className="h-6 w-6" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
            Client App · {index + 1}/{total}
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

      {index === total - 1 && (
        <button
          onClick={onDownload}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-blue px-5 py-2.5 text-sm font-bold text-white shadow-glow-blue transition-transform hover:scale-105"
        >
          Download Client App
        </button>
      )}
    </motion.div>
  );
}

function ClientScreenSlot({ index }: { index: MotionValue<number> }) {
  const [i, setI] = useState(0);
  useMotionValueEvent(index, 'change', (v) => setI(Math.round(v)));
  const screen = SCREENS[i] ?? SCREENS[0];

  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-white to-ink-50 px-3 pb-3">
      <div className="mb-2 flex items-center justify-between px-1 pt-1">
        <div>
          <p className="text-[10px] font-medium text-ink-400">Client App</p>
          <p className="font-display text-sm font-bold text-ink-900">{screen.title}</p>
        </div>
        <screen.icon className="h-5 w-5 text-brand-blue" />
      </div>
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-2"
      >
        {screen.rows.map((r) => (
          <ScreenRow key={r.label} {...r} />
        ))}
      </motion.div>

      <div className="mt-auto flex justify-center gap-1.5 pt-2">
        {SCREENS.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? 'w-5 bg-brand-blue' : 'w-1.5 bg-ink-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
