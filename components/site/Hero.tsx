'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, Play, UserCheck, Package, Wallet, Eye, Camera, Cloud,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PhoneFrame } from '@/components/PhoneFrame';
import {
  BuilderAttendanceScreen,
  BuilderMaterialsScreen,
  BuilderExpensesScreen,
  BuilderPayrollScreen,
  BuilderProjectsScreen,
  BuilderReportsScreen,
  ClientDailyProgressScreen,
  ClientPhotosScreen,
  ClientVideosScreen,
  ClientTimelineScreen,
  ClientPaymentsScreen,
  ClientDocumentsScreen,
  ClientApprovalsScreen,
  ClientChatScreen,
  ClientNotificationsScreen,
  ClientCompletionReportScreen,
} from '@/components/site/PhoneScreens';
import { IMAGES } from '@/lib/images';

const NOTIFICATIONS = [
  { icon: UserCheck, label: 'Worker Checked In', sub: 'Crew A · 7:42 AM', accent: 'bg-brand-navy' },
  { icon: Package, label: 'Material Delivered', sub: '240 cement bags', accent: 'bg-brand-orange' },
  { icon: Wallet, label: 'Budget Updated', sub: '$1.2M spent', accent: 'bg-brand-navy' },
  { icon: Eye, label: 'Client Viewed Progress', sub: 'Hillside Villa', accent: 'bg-brand-orange' },
  { icon: Camera, label: 'New Site Photo Uploaded', sub: 'Roofing phase', accent: 'bg-brand-navy' },
];

export function Hero({ onWatchDemo }: { onWatchDemo: () => void }) {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const bgScale = useTransform(scrollY, [0, 800], [1, 1.15]);
  const contentY = useTransform(scrollY, [0, 800], [0, 100]);

  const [notifIndex, setNotifIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setNotifIndex((i) => (i + 1) % NOTIFICATIONS.length), 2800);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-x-hidden pt-20 sm:pt-24"
    >
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
        style={{ y: contentY }}
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-4 sm:gap-8 px-4 pb-16 pt-4 sm:px-6 lg:grid-cols-2 lg:gap-4 lg:pt-8"
      >
        {/* LEFT */}
        <div className="flex flex-col items-start text-left">
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

          <h1 className="font-display text-4xl xs:text-5xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
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
            className="mt-6 max-w-xl text-base text-ink-500 sm:text-lg"
          >
            SITEZY transforms construction management by connecting builders and
            homeowners in one intelligent ecosystem. One platform, two tailored
            experiences — total synchronization, zero confusion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-col items-stretch gap-3 w-full sm:w-auto sm:flex-row sm:items-center"
          >
            <Button
              onClick={() => scrollTo('#features')}
              size="lg"
              className="group h-12 rounded-xl bg-brand-teal text-white hover:bg-brand-tealDark shadow-glow-teal font-bold px-7 w-full sm:w-auto"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={onWatchDemo}
              size="lg"
              className="h-12 rounded-xl bg-brand-tealLight text-white hover:bg-brand-teal shadow-glow-teal font-bold px-7 transition-all duration-300 border border-white/20 w-full sm:w-auto"
            >
              <Play className="mr-2 h-4 w-4 fill-white text-white" /> Watch Demo
            </Button>

          </motion.div>

          {/* mini trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center justify-start gap-4 text-xs text-ink-400 sm:gap-6"
          >
            <span className="font-semibold text-ink-700">$50M+ managed</span>
            <span className="h-3 w-px bg-ink-200" />
            <span className="font-semibold text-ink-700">10,000+ daily photos</span>
            <span className="h-3 w-px bg-ink-200" />
            <span className="font-semibold text-ink-700">98% satisfaction</span>
          </motion.div>
        </div>

        {/* RIGHT — floating phones with auto-sliding screen rotators */}
        {/* MOBILE: stacked centered phones. DESKTOP: absolute positioned overlapping phones */}
        <div className="relative w-full max-w-full overflow-hidden">
          {/* ── MOBILE ONLY ──
               Dynamic responsive phones scale wrapper fitting 100% viewport width */}
          <div className="flex sm:hidden items-start justify-center gap-2 xs:gap-3 pb-8 w-full max-w-full overflow-hidden px-1">
            {/* Builder phone */}
            <div
              className="relative shrink-0"
              style={{ width: 140, height: 300, overflow: 'hidden' }}
            >
              {/* Label */}
              <div className="absolute top-0 left-0 right-0 z-20 flex justify-center">
                <span className="rounded-b-lg bg-brand-teal px-2 py-0.5 text-[8px] font-bold text-white shadow-sm">
                  BUILDERS APP
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transform: 'scale(0.5)',
                  transformOrigin: 'top left',
                  width: 280,
                }}
              >
                <PhoneFrame accent="blue" float="none" rotate={0}>
                  <AutoHeroBuilderPhone />
                </PhoneFrame>
              </div>
            </div>

            {/* Client phone */}
            <div
              className="relative shrink-0 mt-6"
              style={{ width: 140, height: 300, overflow: 'hidden' }}
            >
              {/* Label */}
              <div className="absolute top-0 left-0 right-0 z-20 flex justify-center">
                <span className="rounded-b-lg bg-brand-tealLight px-2 py-0.5 text-[8px] font-bold text-white shadow-sm">
                  CLIENT APP
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transform: 'scale(0.5)',
                  transformOrigin: 'top left',
                  width: 280,
                }}
              >
                <PhoneFrame accent="blue" float="none" rotate={0}>
                  <AutoHeroClientPhone />
                </PhoneFrame>
              </div>
            </div>
          </div>

          {/* Floating notification — mobile only, sits below the phones */}
          <div className="flex sm:hidden justify-center pb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={notifIndex}
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="w-[90%] max-w-xs"
              >
                <div className="flex items-center gap-3 rounded-2xl glass px-4 py-3 shadow-premium border border-white/40 backdrop-blur-xl">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${NOTIFICATIONS[notifIndex].accent} text-white`}>
                    {(() => { const Icon = NOTIFICATIONS[notifIndex].icon; return <Icon className="h-4 w-4" />; })()}
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-xs font-bold text-ink-900 truncate">{NOTIFICATIONS[notifIndex].label}</p>
                    <p className="text-[10px] text-ink-500 truncate">{NOTIFICATIONS[notifIndex].sub}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── DESKTOP ONLY: original absolute-positioned overlapping phones ── */}
          <div className="relative hidden sm:block mx-auto h-[720px] w-full max-w-lg">
            {/* glow base */}
            <div className="absolute bottom-8 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-brand-teal/20 blur-5xl" />
            <div className="absolute bottom-16 right-10 h-32 w-48 rounded-full bg-brand-tealLight/20 blur-4xl" />

            {/* sync line */}
            <svg className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2" width="300" height="220">
              <defs>
                <linearGradient id="sync" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#1c4c61" />
                  <stop offset="100%" stopColor="#2a6f8d" />
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
              className="absolute left-4 top-8 z-10"
            >
              <PhoneFrame accent="blue" float="normal" rotate={-6}>
                <AutoHeroBuilderPhone />
              </PhoneFrame>
              <div className="absolute -top-3 left-6 rounded-lg bg-brand-teal px-2.5 py-1 text-[10px] font-bold text-white shadow-glow-teal">
                BUILDERS APP
              </div>
            </motion.div>

            {/* Client phone (right) */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute right-4 top-24 z-20"
            >
              <PhoneFrame accent="blue" float="delayed" rotate={6}>
                <AutoHeroClientPhone />
              </PhoneFrame>
              <div className="absolute -top-3 right-6 rounded-lg bg-brand-tealLight px-2.5 py-1 text-[10px] font-bold text-white shadow-glow-teal">
                CLIENT APP
              </div>
            </motion.div>

            {/* Floating notification — desktop */}
            <AnimatePresence mode="wait">
              <motion.div
                key={notifIndex}
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 max-w-xs"
              >
                <div className="flex items-center gap-3 rounded-2xl glass px-4 py-3 shadow-premium border border-white/40 backdrop-blur-xl">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${NOTIFICATIONS[notifIndex].accent} text-white`}>
                    {(() => { const Icon = NOTIFICATIONS[notifIndex].icon; return <Icon className="h-4 w-4" />; })()}
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-xs font-bold text-ink-900 truncate">{NOTIFICATIONS[notifIndex].label}</p>
                    <p className="text-[10px] text-ink-500 truncate">{NOTIFICATIONS[notifIndex].sub}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

    </section>

  );
}

function AutoHeroBuilderPhone() {
  const [screenIndex, setScreenIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setScreenIndex((prev) => (prev + 1) % 6);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={screenIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="h-full"
        >
          {screenIndex === 0 && <BuilderAttendanceScreen />}
          {screenIndex === 1 && <BuilderMaterialsScreen />}
          {screenIndex === 2 && <BuilderExpensesScreen />}
          {screenIndex === 3 && <BuilderPayrollScreen />}
          {screenIndex === 4 && <BuilderProjectsScreen />}
          {screenIndex === 5 && <BuilderReportsScreen />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function AutoHeroClientPhone() {
  const [screenIndex, setScreenIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setScreenIndex((prev) => (prev + 1) % 10);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={screenIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="h-full"
        >
          {screenIndex === 0 && <ClientDailyProgressScreen />}
          {screenIndex === 1 && <ClientPhotosScreen />}
          {screenIndex === 2 && <ClientVideosScreen />}
          {screenIndex === 3 && <ClientTimelineScreen />}
          {screenIndex === 4 && <ClientPaymentsScreen />}
          {screenIndex === 5 && <ClientDocumentsScreen />}
          {screenIndex === 6 && <ClientApprovalsScreen />}
          {screenIndex === 7 && <ClientChatScreen />}
          {screenIndex === 8 && <ClientNotificationsScreen />}
          {screenIndex === 9 && <ClientCompletionReportScreen />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
