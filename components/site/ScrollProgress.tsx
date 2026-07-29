'use client';

import { motion } from 'framer-motion';
import { useScrollProgress } from '@/lib/anim';

export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-brand-orange via-brand-blue to-brand-green"
      style={{ scaleX: progress }}
    />
  );
}
