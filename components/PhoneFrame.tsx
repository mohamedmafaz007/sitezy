'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PhoneFrameProps {
  accent: 'orange' | 'blue';
  float?: 'none' | 'slow' | 'normal' | 'delayed';
  glow?: boolean;
  rotate?: number;
  className?: string;
  size?: 'normal' | 'compact' | 'mobile';
  children: React.ReactNode;
}

const accentRing = {
  orange: 'shadow-glow-orange',
  blue: 'shadow-glow-blue',
};

/** A premium smartphone frame with a notch, screen content slot, and responsive size options. */
export function PhoneFrame({
  accent,
  float = 'none',
  glow = true,
  rotate = 0,
  className = '',
  size = 'normal',
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

  const isMobile = size === 'mobile';
  const isCompact = size === 'compact';

  return (
    <div
      className={cn(
        'relative bg-ink-950 transition-all shrink-0',
        isMobile
          ? 'w-[205px] xs:w-[225px] sm:w-[245px] rounded-[1.8rem] xs:rounded-[2rem] p-2'
          : isCompact
          ? 'w-[245px] rounded-[2.2rem] p-2.5'
          : 'w-[280px] rounded-[2.6rem] p-3',
        glow && accentRing[accent],
        floatClass,
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Side buttons */}
      <div
        className={cn(
          'absolute -left-[3px] rounded-full bg-ink-800',
          isMobile
            ? 'top-14 h-8 w-[2px]'
            : isCompact
            ? 'top-20 h-10 w-[3px]'
            : 'top-24 h-12 w-[3px]'
        )}
      />
      <div
        className={cn(
          'absolute -left-[3px] rounded-full bg-ink-800',
          isMobile
            ? 'top-26 h-10 w-[2px]'
            : isCompact
            ? 'top-34 h-12 w-[3px]'
            : 'top-40 h-16 w-[3px]'
        )}
      />
      <div
        className={cn(
          'absolute -right-[3px] rounded-full bg-ink-800',
          isMobile
            ? 'top-20 h-12 w-[2px]'
            : isCompact
            ? 'top-28 h-16 w-[3px]'
            : 'top-32 h-20 w-[3px]'
        )}
      />

      {/* Screen container */}
      <div
        className={cn(
          'relative w-full overflow-hidden bg-white',
          isMobile
            ? 'h-[390px] xs:h-[430px] sm:h-[460px] rounded-[1.4rem] xs:rounded-[1.6rem]'
            : isCompact
            ? 'h-[470px] rounded-[1.8rem]'
            : 'h-[580px] rounded-[2.1rem]'
        )}
      >
        {/* Dynamic Island / Notch */}
        <div
          className={cn(
            'absolute left-1/2 top-1.5 z-30 -translate-x-1/2 rounded-full bg-ink-950',
            isMobile ? 'h-4 w-20' : isCompact ? 'h-5 w-24' : 'h-6 w-28'
          )}
        />

        {/* Status bar */}
        <div
          className={cn(
            'absolute inset-x-0 top-0 z-20 flex items-center justify-between font-semibold text-ink-900',
            isMobile
              ? 'px-3 pt-1.5 text-[8px]'
              : isCompact
              ? 'px-4 pt-2 text-[9px]'
              : 'px-6 pt-3 text-[10px]'
          )}
        >
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-xs bg-ink-900/80" />
            <span className="h-1.5 w-2 rounded-xs bg-ink-900/80" />
            <span className="h-1.5 w-3.5 rounded-xs bg-ink-900/80" />
          </div>
        </div>

        {/* Inner Content Slot */}
        <div className={cn('h-full', isMobile ? 'pt-6' : isCompact ? 'pt-8' : 'pt-9')}>
          {children}
        </div>
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
