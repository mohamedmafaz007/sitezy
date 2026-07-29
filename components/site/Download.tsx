'use client';

import { motion } from 'framer-motion';
import { Star, QrCode, Apple, Play } from 'lucide-react';
import { PhoneFrame } from '@/components/PhoneFrame';
import { BuilderScreen, ClientScreen } from '@/components/site/PhoneScreens';
import { Reveal } from '@/lib/anim';

export function Download() {
  return (
    <section id="download" className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
      {/* animated gradient bg */}
      <div className="absolute inset-0 bg-mesh-dark opacity-80" />
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <motion.div
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-brand-orange/20 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-brand-blue/20 blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
            Get the apps
          </span>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            One platform. Two beautiful apps.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
            Download the app built for your role — free to start.
          </p>
        </Reveal>

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          {/* Builder app */}
          <Reveal className="relative">
            <div className="absolute -inset-8 rounded-full bg-brand-orange/20 blur-4xl" />
            <div className="relative flex flex-col items-center">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <PhoneFrame accent="orange" float="none">
                  <BuilderScreen />
                </PhoneFrame>
              </motion.div>

              <div className="mt-8 w-full max-w-sm rounded-3xl glass-dark p-6 text-center">
                <span className="rounded-full bg-brand-orange/20 px-3 py-1 text-xs font-bold text-brand-orange">
                  BUILDERS APP
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold">SITEZY Builder</h3>
                <p className="mt-1 text-sm text-white/60">
                  Manage sites, crews, materials, budgets and reports.
                </p>
                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-white/70">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold">4.9</span>
                  <span>· 50k+ downloads</span>
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                  <StoreButton platform="google" />
                  <StoreButton platform="apple" />
                </div>
                <div className="mt-5 flex items-center justify-center gap-3 text-white/60">
                  <QrCode className="h-12 w-12" />
                  <p className="text-left text-[11px]">Scan to download<br />on your device</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Client app */}
          <Reveal delay={0.15} className="relative">
            <div className="absolute -inset-8 rounded-full bg-brand-blue/20 blur-4xl" />
            <div className="relative flex flex-col items-center">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <PhoneFrame accent="blue" float="none">
                  <ClientScreen />
                </PhoneFrame>
              </motion.div>

              <div className="mt-8 w-full max-w-sm rounded-3xl glass-dark p-6 text-center">
                <span className="rounded-full bg-brand-blue/20 px-3 py-1 text-xs font-bold text-brand-blue">
                  CLIENT APP
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold">SITEZY Client</h3>
                <p className="mt-1 text-sm text-white/60">
                  Watch your dream home come to life in real time.
                </p>
                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-white/70">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold">4.8</span>
                  <span>· 30k+ downloads</span>
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                  <StoreButton platform="google" />
                  <StoreButton platform="apple" />
                </div>
                <div className="mt-5 flex items-center justify-center gap-3 text-white/60">
                  <QrCode className="h-12 w-12" />
                  <p className="text-left text-[11px]">Scan to download<br />on your device</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StoreButton({ platform }: { platform: 'google' | 'apple' }) {
  return (
    <button
      className="group flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-ink-900 transition-transform hover:scale-105"
      aria-label={platform === 'google' ? 'Get it on Google Play' : 'Download on the App Store'}
    >
      {platform === 'google' ? <Play className="h-5 w-5" /> : <Apple className="h-5 w-5" />}
      <div className="text-left leading-tight">
        <p className="text-[9px] uppercase tracking-wide text-ink-400">
          {platform === 'google' ? 'Get it on' : 'Download on'}
        </p>
        <p className="text-sm font-bold">
          {platform === 'google' ? 'Google Play' : 'App Store'}
        </p>
      </div>
    </button>
  );
}
