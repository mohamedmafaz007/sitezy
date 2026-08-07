'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  UserCheck, Boxes, Wallet, Receipt, FileBarChart, CalendarCheck, ArrowRight, Sparkles, CheckCircle2,
} from 'lucide-react';
import { PhoneFrame } from '@/components/PhoneFrame';
import {
  BuilderAttendanceScreen,
  BuilderMaterialsScreen,
  BuilderExpensesScreen,
  BuilderPayrollScreen,
  BuilderProjectsScreen,
  BuilderReportsScreen,
} from '@/components/site/PhoneScreens';

const SCREENS = [
  {
    icon: UserCheck,
    title: 'Attendance Tracking',
    subtitle: 'Real-time site check-ins & auto wage calculation',
    desc: "Track daily worker attendance, log overtime hours, and calculate wages with total precision. Always know who is active on site at any given second.",
    tags: ['12 workers checked in', '3 Crews Active', 'Auto wage calc'],
    Phone: BuilderAttendanceScreen,
    glowColor: 'rgba(28, 76, 97, 0.40)',
    accentColor: '#1c4c61',
  },
  {
    icon: Boxes,
    title: 'Materials Management',
    subtitle: 'Inventory alerts & delivery tracking',
    desc: 'Monitor real-time inventory levels, track deliveries, and get instant low-stock alerts to keep your job sites moving without expensive delays.',
    tags: ['Cement: 240/500', 'Steel: 1.2t', '⚠ Bricks Low'],
    Phone: BuilderMaterialsScreen,
    glowColor: 'rgba(42, 111, 141, 0.40)',
    accentColor: '#2a6f8d',
  },
  {
    icon: Wallet,
    title: 'Expense Control',
    subtitle: 'Petty cash, receipt uploads & equipment rentals',
    desc: 'Log petty cash transactions on the spot, snap receipt photos, and track equipment rental costs. Every single dollar accounted for in real-time.',
    tags: ['$1,840 petty cash', '$3,200 rental', '23 receipts'],
    Phone: BuilderExpensesScreen,
    glowColor: 'rgba(28, 76, 97, 0.40)',
    accentColor: '#1c4c61',
  },
  {
    icon: Receipt,
    title: 'Payroll Processing',
    subtitle: 'Multi-crew wage calculation & overtime',
    desc: 'Automated wage calculations across multiple crews and job locations. Pay the right workers the exact right amount on schedule.',
    tags: ['$48,200 weekly', '186 overtime hrs', '$192k this month'],
    Phone: BuilderPayrollScreen,
    glowColor: 'rgba(14, 43, 56, 0.40)',
    accentColor: '#0e2b38',
  },
  {
    icon: CalendarCheck,
    title: 'Project Dashboard',
    subtitle: 'Multi-site resource allocation & timeline monitoring',
    desc: 'Oversee multiple active projects from a unified command center. Reallocate workers, machinery, and resources instantly as project priorities shift.',
    tags: ['Hillside Villa 64%', 'Maple Estate 38%', 'Riverside 81%'],
    Phone: BuilderProjectsScreen,
    glowColor: 'rgba(42, 111, 141, 0.40)',
    accentColor: '#2a6f8d',
  },
  {
    icon: FileBarChart,
    title: 'Reports & Analytics',
    subtitle: 'One-click PDF reports & profit margin insights',
    desc: 'Generate clear, professional PDF reports for clients or stakeholders. Identify project bottlenecks and cost overruns before they impact your margin.',
    tags: ['22.4% profit margin', '94% on-time', '128 reports'],
    Phone: BuilderReportsScreen,
    glowColor: 'rgba(28, 76, 97, 0.45)',
    accentColor: '#1c4c61',
  },
];

export function BuildersSection({ onDownload }: { onDownload: () => void }) {
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
    <section id="builders" className="relative bg-slate-50/70 py-12 sm:py-16 lg:py-24">
      {/* Background Orbs — clipped via inner wrapper so sticky still works */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-[#1c4c61]/10 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-[600px] w-[600px] rounded-full bg-[#2a6f8d]/10 blur-3xl" />
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
                const el = document.getElementById(`builder-card-${idx}`);
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
          <UserCheck className="h-4 w-4" /> For Builders & Contractors
        </span>
        <h2 className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight">
          Everything you need to run your job sites smoothly.
        </h2>
        <p className="mt-3 text-sm sm:text-lg text-ink-500 leading-relaxed">
          Real-time synchronization between office, site managers, and field crews. Discover features as you scroll.
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
    <div id={`builder-card-${index}`} ref={cardRef} className="scroll-mt-28">
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
              0{index + 1}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-ink-400">
              Feature {index + 1} of {total}
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
              Download Builder App <ArrowRight className="h-4 w-4" />
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
      <div className="relative z-10 flex flex-wrap justify-center gap-1.5 mb-3">
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
          <PhoneFrame accent="orange" glow={true} float="none" size="compact">
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
          Interactive App Preview · Tap any feature
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
          <PhoneFrame accent="orange" glow={true} float="none" size="mobile">
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
          Download Builder App <ArrowRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
