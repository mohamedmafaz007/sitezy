'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Sparkles, Phone } from 'lucide-react';
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
import { Reveal } from '@/lib/anim';

export function Download() {
  return (
    <section id="download" className="relative overflow-hidden bg-slate-950 py-12 sm:py-16 text-white">
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-mesh-dark opacity-80" />
      <div className="absolute inset-0 grid-overlay opacity-25" />
      <motion.div
        className="pointer-events-none absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-brand-orange/20 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-brand-blue/20 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Compact Header */}
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-orange border border-brand-orange/20 shadow-glow-orange">
            <Sparkles className="h-3.5 w-3.5" /> Get the apps
          </span>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            One platform. Two beautiful apps.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm sm:text-base text-white/60">
            Download the app built for your role — free to start.
          </p>
        </Reveal>

        {/* Compact Side-by-Side App Cards with Glowing Colors & Authentic Store Icons */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* BUILDER APP CARD */}
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-brand-orange/40 bg-gradient-to-br from-[#1a0f08] via-[#0f172a] to-[#090d16] p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(249,115,22,0.2)] transition-all duration-500 hover:border-brand-orange/70 hover:shadow-[0_0_65px_rgba(249,115,22,0.35)]">
              {/* Dynamic Glow Blobs & Grid Pattern */}
              <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand-orange/30 blur-3xl animate-pulse" />
              <div className="pointer-events-none absolute right-0 bottom-0 h-48 w-48 rounded-full bg-amber-500/20 blur-2xl" />
              <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />

              <div className="relative z-10 grid items-center gap-6 sm:grid-cols-2">
                {/* Left Auto-sliding Phone */}
                <div className="flex justify-center scale-75 sm:scale-80 origin-center -my-12 sm:-my-10">
                  <PhoneFrame accent="orange" glow float="none">
                    <AutoBuilderPhone />
                  </PhoneFrame>
                </div>

                {/* Right Details */}
                <div className="text-left">
                  <span className="inline-block rounded-full bg-brand-orange/20 px-3 py-1 text-xs font-bold text-brand-orange border border-brand-orange/40 shadow-glow-orange">
                    BUILDERS APP
                  </span>
                  <h3 className="mt-2.5 font-display text-2xl font-extrabold text-white">SITEZY Builder</h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    Manage sites, crews, materials, budgets, and PDF reports on the go.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-300">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-white">4.9</span>
                    <span>· 50k+ downloads</span>
                  </div>

                  {/* Contact Button Redirect */}
                  <div className="mt-5">
                    <a
                      href="tel:8122552055"
                      className="group flex w-full items-center gap-3.5 rounded-2xl bg-white px-4 py-3.5 text-ink-950 transition-all duration-300 hover:scale-[1.03] shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/80 hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:border-brand-orange/60"
                      aria-label="Contact 8122552055"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange transition-transform group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div className="text-left leading-tight">
                        <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                          Contact Us
                        </p>
                        <p className="text-sm font-black tracking-tight text-slate-900">
                          8122552055
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CLIENT APP CARD */}
          <Reveal delay={0.12} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-brand-blue/40 bg-gradient-to-br from-[#081326] via-[#0f172a] to-[#090d16] p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(59,130,246,0.2)] transition-all duration-500 hover:border-brand-blue/70 hover:shadow-[0_0_65px_rgba(59,130,246,0.35)]">
              {/* Dynamic Glow Blobs & Grid Pattern */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-blue/30 blur-3xl animate-pulse" />
              <div className="pointer-events-none absolute left-0 bottom-0 h-48 w-48 rounded-full bg-sky-500/20 blur-2xl" />
              <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />

              <div className="relative z-10 grid items-center gap-6 sm:grid-cols-2">
                {/* Left Auto-sliding Phone */}
                <div className="flex justify-center scale-75 sm:scale-80 origin-center -my-12 sm:-my-10">
                  <PhoneFrame accent="blue" glow float="none">
                    <AutoClientPhone />
                  </PhoneFrame>
                </div>

                {/* Right Details */}
                <div className="text-left">
                  <span className="inline-block rounded-full bg-brand-blue/20 px-3 py-1 text-xs font-bold text-brand-blue border border-brand-blue/40 shadow-glow-blue">
                    CLIENT APP
                  </span>
                  <h3 className="mt-2.5 font-display text-2xl font-extrabold text-white">SITEZY Client</h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    Watch your dream home come to life in real time with photos, videos & messaging.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-slate-300 text-xs">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-white">4.8</span>
                    <span>· 30k+ downloads</span>
                  </div>

                  {/* Authentic Glowing Store Buttons */}
                  <div className="mt-5 space-y-2.5">
                    <StoreButton platform="google" accent="blue" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AutoBuilderPhone() {
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

function AutoClientPhone() {
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

/** Official Pixel-Perfect Google Play Store Logo SVG */
function GooglePlayLogo({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.609 1.814L13.793 12 3.61 22.186A2.37 2.37 0 0 1 3 20.603V3.397c0-.623.226-1.2.609-1.583z" fill="#00D2FF"/>
      <path d="M17.47 8.323l-3.677 3.677 3.677 3.677 4.195-2.42c.866-.5 1.335-1.257 1.335-2.257 0-1-.469-1.757-1.335-2.257l-4.195-2.42z" fill="#FFD700"/>
      <path d="M13.793 12L3.609 1.814A2.344 2.344 0 0 1 5.097 1.32c.623 0 1.2.164 1.687.445l10.686 6.158L13.793 12z" fill="#00F076"/>
      <path d="M13.793 12l3.677 3.677L6.784 21.835A2.88 2.88 0 0 1 5.097 22.68a2.344 2.344 0 0 1-1.488-.494L13.793 12z" fill="#FF3A44"/>
    </svg>
  );
}

/** Official Pixel-Perfect Apple App Store Logo SVG */
function AppleLogo({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.87c.64-.78 1.08-1.86.96-2.94-.93.04-2.07.62-2.74 1.4-.59.68-1.11 1.78-.97 2.84 1.04.08 2.11-.52 2.75-1.3z" />
    </svg>
  );
}

function StoreButton({ platform, accent }: { platform: 'google' | 'apple'; accent: 'orange' | 'blue' }) {
  const isGoogle = platform === 'google';
  const glowColorClass = accent === 'orange'
    ? 'hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:border-brand-orange/60'
    : 'hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:border-brand-blue/60';

  return (
    <button
      className={`group flex w-full items-center gap-3 rounded-2xl bg-white px-4 py-3 text-ink-950 transition-all duration-300 hover:scale-[1.03] shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/80 ${glowColorClass}`}
      aria-label={isGoogle ? 'Get it on Google Play' : 'Download on the App Store'}
    >
      <div className="flex h-6 w-6 shrink-0 items-center justify-center transition-transform group-hover:scale-110">
        {isGoogle ? <GooglePlayLogo className="h-6 w-6" /> : <AppleLogo className="h-6 w-6 text-black" />}
      </div>
      <div className="text-left leading-tight">
        <p className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500">
          {isGoogle ? 'GET IT ON' : 'DOWNLOAD ON'}
        </p>
        <p className="text-xs font-black tracking-tight text-slate-900">
          {isGoogle ? 'Google Play Store' : 'Apple App Store'}
        </p>
      </div>
    </button>
  );
}
