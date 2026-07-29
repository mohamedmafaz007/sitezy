'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PhoneFrameProps {
  accent: 'orange' | 'blue';
  float?: 'none' | 'slow' | 'normal' | 'delayed';
  glow?: boolean;
  rotate?: number;
  className?: string;
  children: React.ReactNode;
}

const accentRing = {
  orange: 'shadow-glow-orange',
  blue: 'shadow-glow-blue',
};

/** A premium smartphone frame with a notch, screen content slot, and optional float. */
export function PhoneFrame({
  accent,
  float = 'none',
  glow = true,
  rotate = 0,
  className = '',
  children,
}: PhoneFrameProps) {
  const floatClass =
    float === 'normal'
      ? 'animate-float'
      : float === 'slow'
      ? 'animate-float-slow'
      : float === 'delayed'
      ? 'animate-float-delayed'
      : '';

  return (
    <div
      className={cn(
        'relative w-[280px] rounded-[2.6rem] bg-ink-950 p-3 transition-transform',
        glow && accentRing[accent],
        floatClass,
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* side buttons */}
      <div className="absolute -left-[3px] top-24 h-12 w-[3px] rounded-full bg-ink-800" />
      <div className="absolute -left-[3px] top-40 h-16 w-[3px] rounded-full bg-ink-800" />
      <div className="absolute -right-[3px] top-32 h-20 w-[3px] rounded-full bg-ink-800" />

      {/* screen */}
      <div className="relative h-[580px] w-full overflow-hidden rounded-[2.1rem] bg-white">
        {/* notch */}
        <div className="absolute left-1/2 top-2 z-30 h-6 w-28 -translate-x-1/2 rounded-full bg-ink-950" />
        {/* status bar */}
        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 pt-3 text-[10px] font-semibold text-ink-900">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-sm bg-ink-900/80" />
            <span className="h-2.5 w-3 rounded-sm bg-ink-900/80" />
            <span className="h-2.5 w-5 rounded-sm bg-ink-900/80" />
          </div>
        </div>
        <div className="h-full pt-9">{children}</div>
      </div>
    </div>
  );
}

/** A small bar used inside dashboard mockups. */
export function MiniBar({ height, accent }: { height: number; accent: string }) {
  return (
    <motion.div
      className="w-full rounded-full"
      style={{ background: accent, height }}
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    />
  );
}
