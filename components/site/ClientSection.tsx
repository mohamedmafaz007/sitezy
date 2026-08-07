'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Camera, Image as ImageIcon, Video, CalendarCheck, CreditCard,
  FileText, CheckCircle2, MessageSquare, Bell, FileBarChart, ArrowRight, Sparkles,
} from 'lucide-react';
import { PhoneFrame } from '@/components/PhoneFrame';
import {
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

const SCREENS = [
  {
    icon: Camera,
    title: 'Daily Progress',
    subtitle: 'Daily photos & short video updates',
    desc: 'See daily photos and videos uploaded directly by site managers. Watch your home come to life, step by step, every single day.',
    tags: ['12 new photos', '1 new video', '64 weekly updates'],
    Phone: ClientDailyProgressScreen,
    glowColor: 'rgba(28, 76, 97, 0.40)',
    accentColor: '#1c4c61',
  },
  {
    icon: ImageIcon,
    title: 'Photo Gallery',
    subtitle: 'Organized by construction phase & timestamp',
    desc: 'A high-resolution gallery of every key milestone. Easily view images organized by foundation, framing, electrical, plumbing, and interior finish phases.',
    tags: ['Foundation: 38', 'Framing: 72', 'Roofing: 45'],
    Phone: ClientPhotosScreen,
    glowColor: 'rgba(42, 111, 141, 0.40)',
    accentColor: '#2a6f8d',
  },
  {
    icon: Video,
    title: 'Site Walkthroughs',
    subtitle: 'HD video walkthroughs & drone footage',
    desc: 'Full site walkthroughs and drone aerial footage. Walk through your ongoing construction project anytime, anywhere in the world.',
    tags: ['4:32 min walkthrough', '8 phase timelapse', 'Drone footage'],
    Phone: ClientVideosScreen,
    glowColor: 'rgba(28, 76, 97, 0.40)',
    accentColor: '#1c4c61',
  },
  {
    icon: CalendarCheck,
    title: 'Construction Timeline',
    subtitle: 'Phase completion & delivery dates',
    desc: 'Track exact construction phases and receive instant notifications when milestones are signed off. Always know your target handover date.',
    tags: ['Foundation complete', 'Interiors in progress', 'Est. Mar 18'],
    Phone: ClientTimelineScreen,
    glowColor: 'rgba(42, 111, 141, 0.40)',
    accentColor: '#2a6f8d',
  },
  {
    icon: CreditCard,
    title: 'Payment Tracking',
    subtitle: 'Invoices, variation approvals & history',
    desc: 'Review payment schedules, approve cost variations with a single tap, and download invoices instantly. Complete financial transparency.',
    tags: ['$840k paid', 'Invoice: $120k', '2 variations'],
    Phone: ClientPaymentsScreen,
    glowColor: 'rgba(14, 43, 56, 0.40)',
    accentColor: '#0e2b38',
  },
  {
    icon: FileText,
    title: 'Document Vault',
    subtitle: 'Blueprints, permits, contracts & warranties',
    desc: 'Secure digital vault for all your essential home documentation. Access engineering blueprints, city permits, contracts, and warranties instantly.',
    tags: ['14 blueprints', '6 permits', '9 warranties'],
    Phone: ClientDocumentsScreen,
    glowColor: 'rgba(28, 76, 97, 0.40)',
    accentColor: '#1c4c61',
  },
  {
    icon: CheckCircle2,
    title: 'Approvals',
    subtitle: 'One-tap variation & finish sign-offs',
    desc: 'Review design options, tile selections, paint swatches, and fixture choices. Approve or request changes directly from your phone.',
    tags: ['Tiles: awaiting', 'Paint: approved', 'Cabinets: awaiting'],
    Phone: ClientApprovalsScreen,
    glowColor: 'rgba(42, 111, 141, 0.40)',
    accentColor: '#2a6f8d',
  },
  {
    icon: MessageSquare,
    title: 'Direct Messaging',
    subtitle: 'Chat with project manager & supervisor',
    desc: 'Dedicated chat threads with your builder and project manager. Keep all communication, question threads, and updates in one place.',
    tags: ['PM: 2 unread', 'Supervisor: online', '1 announcement'],
    Phone: ClientChatScreen,
    glowColor: 'rgba(28, 76, 97, 0.40)',
    accentColor: '#1c4c61',
  },
  {
    icon: Bell,
    title: 'Live Notifications',
    subtitle: 'Instant alerts on milestone progress',
    desc: 'Get notified the moment a key milestone is passed, a new photo album is added, or an invoice is ready for review.',
    tags: ['Roofing complete', 'Interiors album', 'Phase 4 invoice'],
    Phone: ClientNotificationsScreen,
    glowColor: 'rgba(42, 111, 141, 0.40)',
    accentColor: '#2a6f8d',
  },
  {
    icon: FileBarChart,
    title: 'Completion Report',
    subtitle: 'Final handover binder & maintenance guides',
    desc: 'A digital handover package featuring full project archives, appliance maintenance guides, final photos, and warranty certificates.',
    tags: ['Final report ready', '180 final photos', '12 maintenance guides'],
    Phone: ClientCompletionReportScreen,
    glowColor: 'rgba(14, 43, 56, 0.45)',
    accentColor: '#0e2b38',
  },
];

export function ClientSection({ onDownload }: { onDownload: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Pick the card whose center is closest to the viewport center on scroll
  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - mid);
        if (dist < bestDist) { bestDist = dist; best = i; }
      });
      setActiveIndex(best);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initialise on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="clients" className="relative bg-[#1c4c61]/5 py-12 sm:py-16 lg:py-24">
      {/* Background Orbs — clipped via inner wrapper so sticky still works */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-1/4 h-[600px] w-[600px] rounded-full bg-[#1c4c61]/10 blur-3xl" />
        <div className="absolute -left-40 bottom-1/4 h-[600px] w-[600px] rounded-full bg-[#2a6f8d]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader />

        {/* Desktop Showcase: Left Cards + Sticky Right Phone */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-10 lg:items-start mt-10 w-full">
          {/* Left Cards Stack */}
          <div className="col-span-7 space-y-8 pb-16 w-full">
            {SCREENS.map((screen, i) => (
              <FeatureCardItem
                key={screen.title}
                screen={screen}
                index={i}
                total={SCREENS.length}
                isActive={activeIndex === i}
                cardRef={(el) => { cardRefs.current[i] = el; }}
                onDownload={i === SCREENS.length - 1 ? onDownload : undefined}
              />
            ))}
          </div>

          {/* Right Pinned Sticky Phone Display */}
          <div className="col-span-5 sticky top-24 self-start py-2 h-fit">
            <StickyPhoneStage
              screens={SCREENS}
              activeIndex={activeIndex}
              onSelectScreen={(idx) => {
                setActiveIndex(idx);
                const el = document.getElementById(`client-card-${idx}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
            />
          </div>
        </div>

        {/* Mobile Experience: Fully Responsive Cards */}
        <div className="block lg:hidden mt-6 w-full max-w-full">
          <MobileCardsList screens={SCREENS} onDownload={onDownload} />
        </div>
      </div>
    </section>
  );
}

/* ─── Section Header ─────────────────────────────────────────────────────────── */

function SectionHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div ref={ref} className="max-w-3xl text-left">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-[#1c4c61]/10 px-3.5 py-1.5 text-xs font-bold text-[#1c4c61]">
          <Camera className="h-4 w-4" /> For Homeowners & Clients
        </span>
        <h2 className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight">
          Complete transparency from day one to handover.
        </h2>
        <p className="mt-3 text-sm sm:text-lg text-ink-500 leading-relaxed">
          Stay updated with daily photos, progress videos, documents, and direct messaging.
        </p>
      </motion.div>
    </div>
  );
}

/* ─── Desktop Feature Card Item ──────────────────────────────────────────────── */

function FeatureCardItem({
  screen,
  index,
  total,
  isActive,
  cardRef,
  onDownload,
}: {
  screen: typeof SCREENS[0];
  index: number;
  total: number;
  isActive: boolean;
  cardRef: (el: HTMLDivElement | null) => void;
  onDownload?: () => void;
}) {
  const Icon = screen.icon;

  return (
    <div id={`client-card-${index}`} ref={cardRef} className="scroll-mt-28">
      <motion.div
        animate={
          isActive
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0.55, y: 0, scale: 0.98 }
        }
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`relative overflow-hidden rounded-3xl p-6 lg:p-8 transition-all duration-500 ${
          isActive
            ? 'bg-white shadow-premium border-2 border-[#1c4c61]/30 ring-4 ring-[#1c4c61]/5'
            : 'bg-white/60 border border-slate-200/80 hover:bg-white/90'
        }`}
      >
        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                isActive
                  ? 'bg-[#1c4c61] text-white'
                  : 'bg-slate-200 text-slate-600'
              }`}
            >
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-ink-400">
              Client Feature {index + 1} of {total}
            </span>
          </div>

          {isActive && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#1c4c61]/10 px-3 py-1 text-xs font-bold text-[#1c4c61]"
            >
              <Sparkles className="h-3.5 w-3.5" /> Active Focus
            </motion.span>
          )}
        </div>

        {/* Icon & Title */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #1c4c61, #0e2b38)',
              boxShadow: isActive ? `0 10px 30px ${screen.glowColor}` : 'none',
            }}
          >
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-extrabold text-ink-900 lg:text-3xl">
              {screen.title}
            </h3>
            <p className="text-xs font-bold text-[#1c4c61] mt-1">{screen.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-base text-ink-500 leading-relaxed mb-5">
          {screen.desc}
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {screen.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                isActive
                  ? 'bg-[#1c4c61]/10 text-[#1c4c61]'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        {onDownload && (
          <div className="pt-2">
            <button
              onClick={onDownload}
              className="inline-flex items-center gap-2 rounded-xl bg-[#1c4c61] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#1c4c61]/20 transition-transform hover:scale-105 active:scale-95"
            >
              Download Client App <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

/* ─── Desktop Sticky Phone Stage ─────────────────────────────────────────────── */

function StickyPhoneStage({
  screens,
  activeIndex,
  onSelectScreen,
}: {
  screens: typeof SCREENS;
  activeIndex: number;
  onSelectScreen: (index: number) => void;
}) {
  const currentScreen = screens[activeIndex] || screens[0];
  const PhoneScreenComponent = currentScreen.Phone;

  return (
    <div className="flex flex-col items-center justify-center rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-premium p-4 lg:p-5 text-center relative overflow-hidden">
      {/* Dynamic Ambient Background Glow */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-none absolute inset-0 rounded-3xl transition-all duration-700 overflow-hidden"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${currentScreen.glowColor.replace('0.40', '0.15')}, transparent 70%)`,
        }}
      />

      {/* Screen Selector Pills */}
      <div className="relative z-10 flex flex-wrap justify-center gap-1.5 mb-3 max-w-xs">
        {screens.map((s, idx) => (
          <button
            key={s.title}
            onClick={() => onSelectScreen(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === idx
                ? 'w-7 bg-[#1c4c61]'
                : 'w-2 bg-slate-200 hover:bg-slate-300'
            }`}
            title={s.title}
          />
        ))}
      </div>

      {/* Compact Phone Mockup Frame */}
      <div className="relative z-10 my-1 flex items-center justify-center">
        <div
          className="transition-all duration-500"
          style={{
            filter: `drop-shadow(0 15px 30px ${currentScreen.glowColor})`,
          }}
        >
          <PhoneFrame accent="blue" glow={true} float="none" size="compact">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="h-full w-full"
              >
                <PhoneScreenComponent />
              </motion.div>
            </AnimatePresence>
          </PhoneFrame>
        </div>
      </div>

      {/* Active Screen Label */}
      <div className="relative z-10 mt-3 flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-[#1c4c61]" />
        <span className="text-xs font-bold text-ink-900">
          {currentScreen.title} Screen ({activeIndex + 1}/{screens.length})
        </span>
      </div>
    </div>
  );
}

/* ─── Mobile Cards List ───────────────────────────────────────────────────────── */

function MobileCardsList({
  screens,
  onDownload,
}: {
  screens: typeof SCREENS;
  onDownload: () => void;
}) {
  const [activeTab, setActiveTab] = useState(0);
  const currentScreen = screens[activeTab] || screens[0];
  const PhoneComp = currentScreen.Phone;

  return (
    <div className="flex flex-col gap-6">
      {/* Interactive Mobile Phone Preview Stage */}
      <div className="rounded-2xl bg-white p-4 shadow-premium border border-slate-200/80 flex flex-col items-center text-center overflow-hidden">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1c4c61] mb-2">
          Interactive Client App Preview · Tap any feature
        </span>
        {/* Horizontal scrollable tab pills */}
        <div className="flex w-full overflow-x-auto no-scrollbar gap-1.5 pb-2">
          {screens.map((s, idx) => (
            <button
              key={s.title}
              onClick={() => setActiveTab(idx)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold transition-all ${
                activeTab === idx
                  ? 'bg-[#1c4c61] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Scaled Phone Frame Preview */}
        <div className="my-3 flex justify-center w-full max-w-full overflow-hidden">
          <PhoneFrame accent="blue" glow={true} float="none" size="mobile">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="h-full w-full"
              >
                <PhoneComp />
              </motion.div>
            </AnimatePresence>
          </PhoneFrame>
        </div>

        <div className="mt-2">
          <p className="text-sm font-extrabold text-ink-900">{currentScreen.title}</p>
          <p className="text-xs text-ink-500 font-medium">{currentScreen.subtitle}</p>
        </div>
      </div>

      {/* Feature Cards List - 100% Always Visible on Scroll */}
      {screens.map((screen, i) => (
        <MobileCardItem
          key={screen.title}
          screen={screen}
          index={i}
          total={screens.length}
          isActive={activeTab === i}
          onSelect={() => setActiveTab(i)}
          onDownload={i === screens.length - 1 ? onDownload : undefined}
        />
      ))}
    </div>
  );
}

function MobileCardItem({
  screen,
  index,
  total,
  isActive,
  onSelect,
  onDownload,
}: {
  screen: typeof SCREENS[0];
  index: number;
  total: number;
  isActive?: boolean;
  onSelect?: () => void;
  onDownload?: () => void;
}) {
  const Icon = screen.icon;

  return (
    <div
      onClick={onSelect}
      className={`rounded-2xl bg-white p-5 shadow-sm border transition-all duration-300 ${
        isActive
          ? 'border-[#1c4c61] ring-2 ring-[#1c4c61]/15 shadow-md'
          : 'border-slate-200/80 hover:border-slate-300'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-md shrink-0"
            style={{
              background: 'linear-gradient(135deg, #1c4c61, #0e2b38)',
            }}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1c4c61]">
              0{index + 1} / 0{total}
            </span>
            <h3 className="font-display text-base font-extrabold text-ink-900 leading-tight">
              {screen.title}
            </h3>
          </div>
        </div>

        {isActive && (
          <span className="rounded-full bg-[#1c4c61]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#1c4c61]">
            Active
          </span>
        )}
      </div>

      <p className="text-xs text-ink-500 leading-relaxed font-normal">{screen.desc}</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {screen.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full px-2.5 py-1 text-[10px] font-semibold text-[#1c4c61] bg-[#1c4c61]/10"
          >
            {tag}
          </span>
        ))}
      </div>

      {onDownload && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDownload();
          }}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#1c4c61] py-2.5 text-xs font-bold text-white shadow-md"
        >
          Download Client App <ArrowRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
