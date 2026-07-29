'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, Play, UserCheck, Package, Wallet, Eye, Camera, Cloud,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PhoneFrame } from '@/components/PhoneFrame';
import { BuilderScreen, ClientScreen } from '@/components/site/PhoneScreens';
import { IMAGES } from '@/lib/images';

const NOTIFICATIONS = [
  { icon: UserCheck, label: 'Worker Checked In', sub: 'Crew A · 7:42 AM', accent: 'bg-brand-orange' },
  { icon: Package, label: 'Material Delivered', sub: '240 cement bags', accent: 'bg-brand-green' },
  { icon: Wallet, label: 'Budget Updated', sub: '$1.2M spent', accent: 'bg-brand-orange' },
  { icon: Eye, label: 'Client Viewed Progress', sub: 'Hillside Villa', accent: 'bg-brand-blue' },
  { icon: Camera, label: 'New Site Photo Uploaded', sub: 'Roofing phase', accent: 'bg-brand-blue' },
];

export function Hero({ onWatchDemo }: { onWatchDemo: () => void }) {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const bgScale = useTransform(scrollY, [0, 800], [1, 1.15]);
  const contentY = useTransform(scrollY, [0, 600], [0, 80]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const [notifIndex, setNotifIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setNotifIndex((i) => (i + 1) % NOTIFICATIONS.length), 2800);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      {/* background imagery */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0"
      >
        <img
          src={IMAGES.hero.construction}
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />
      </motion.div>

      {/* mesh + blobs */}
      <div className="absolute inset-0 z-0 bg-mesh-light" />
      <div className="absolute -left-32 top-32 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl animate-blob" />
      <div className="absolute -right-32 top-48 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-green/15 blur-3xl animate-blob" style={{ animationDelay: '7s' }} />
      <div className="absolute inset-0 z-0 grid-overlay opacity-60" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-2 lg:gap-4 lg:pt-16"
      >
        {/* LEFT */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-ink-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange" />
            </span>
            The Future of Construction Management
          </motion.div>

          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Build Smarter.
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Manage Better.
            </motion.span>
            <motion.span
              className="block gradient-text"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Deliver Faster.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto mt-6 max-w-xl text-base text-ink-500 sm:text-lg lg:mx-0"
          >
            SITEZY transforms construction management by connecting builders and
            homeowners in one intelligent ecosystem. One platform, two tailored
            experiences — total synchronization, zero confusion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <Button
              onClick={() => scrollTo('#features')}
              size="lg"
              className="group h-12 rounded-xl bg-ink-900 px-7 text-white hover:bg-ink-800"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={onWatchDemo}
              variant="outline"
              size="lg"
              className="h-12 rounded-xl border-ink-200 bg-white/70 px-7 text-ink-900 hover:bg-white"
            >
              <Play className="mr-2 h-4 w-4 fill-ink-900" /> Watch Demo
            </Button>
          </motion.div>

          {/* mini trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex items-center justify-center gap-6 text-xs text-ink-400 lg:justify-start"
          >
            <span className="font-semibold text-ink-700">$50M+ managed</span>
            <span className="h-3 w-px bg-ink-200" />
            <span className="font-semibold text-ink-700">10,000+ daily photos</span>
            <span className="h-3 w-px bg-ink-200" />
            <span className="font-semibold text-ink-700">98% satisfaction</span>
          </motion.div>
        </div>

        {/* RIGHT — floating phones */}
        <div className="relative mx-auto h-[640px] w-full max-w-lg">
          {/* glow base */}
          <div className="absolute bottom-8 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-brand-orange/30 blur-5xl" />
          <div className="absolute bottom-16 right-10 h-32 w-48 rounded-full bg-brand-blue/30 blur-4xl" />

          {/* cloud center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl glass shadow-premium">
              <Cloud className="h-7 w-7 text-ink-700" />
              <motion.div
                className="absolute inset-0 rounded-2xl ring-2 ring-brand-orange/40"
                animate={{ scale: [1, 1.3], opacity: [0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* sync line */}
          <svg className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2" width="300" height="220">
            <defs>
              <linearGradient id="sync" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F97316" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 20 110 Q 150 20 280 110"
              fill="none"
              stroke="url(#sync)"
              strokeWidth="2"
              strokeDasharray="6 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </svg>

          {/* Builder phone (left) */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-0 top-8 z-10 sm:left-4"
          >
            <PhoneFrame accent="orange" float="normal" rotate={-6}>
              <BuilderScreen />
            </PhoneFrame>
            <div className="absolute -top-3 left-6 rounded-lg bg-brand-orange px-2.5 py-1 text-[10px] font-bold text-white shadow-glow-orange">
              BUILDERS APP
            </div>
          </motion.div>

          {/* Client phone (right) */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute right-0 top-24 z-10 sm:right-4"
          >
            <PhoneFrame accent="blue" float="delayed" rotate={6}>
              <ClientScreen />
            </PhoneFrame>
            <div className="absolute -top-3 right-6 rounded-lg bg-brand-blue px-2.5 py-1 text-[10px] font-bold text-white shadow-glow-blue">
              CLIENT APP
            </div>
          </motion.div>

          {/* Floating notification cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={notifIndex}
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2"
            >
              <div className="flex items-center gap-3 rounded-2xl glass px-4 py-3 shadow-premium">
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${NOTIFICATIONS[notifIndex].accent} text-white`}>
                  {(() => {
                    const Icon = NOTIFICATIONS[notifIndex].icon;
                    return <Icon className="h-4 w-4" />;
                  })()}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-ink-900">{NOTIFICATIONS[notifIndex].label}</p>
                  <p className="text-[10px] text-ink-400">{NOTIFICATIONS[notifIndex].sub}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-ink-300 p-1">
          <motion.div
            className="h-2 w-1 rounded-full bg-ink-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
