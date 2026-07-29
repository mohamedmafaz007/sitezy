'use client';

import { motion } from 'framer-motion';
import { useCountUp, staggerContainer, fadeUp, Reveal } from '@/lib/anim';
import { IMAGES } from '@/lib/images';

const STATS = [
  { value: 1250, suffix: '+', label: 'Projects Managed' },
  { value: 850, suffix: '+', label: 'Builders' },
  { value: 3200, suffix: '+', label: 'Homeowners' },
  { value: 10000, suffix: '+', label: 'Daily Photos', short: true },
  { value: 50, prefix: '$', suffix: 'M+', label: 'Budgets Managed' },
  { value: 98, suffix: '%', label: 'Satisfaction' },
];

export function Trust() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-mesh-dark opacity-60" />
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-brand-orange/15 blur-3xl animate-blob" />
      <div className="absolute right-1/3 bottom-0 h-72 w-72 rounded-full bg-brand-blue/15 blur-3xl animate-blob" style={{ animationDelay: '6s' }} />

      {/* parallax bg image */}
      <motion.img
        src={IMAGES.trust.aerial}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-10"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
            Trusted at scale
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Numbers that build trust.
          </h2>
        </Reveal>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6"
        >
          {STATS.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="text-center">
              <StatValue {...s} />
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/50">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatValue({
  value, prefix = '', suffix = '', short,
}: { value: number; prefix?: string; suffix?: string; short?: boolean }) {
  const { ref, value: v } = useCountUp(value, 2);
  const display = short
    ? v >= 1000 ? `${(v / 1000).toFixed(1)}k` : Math.round(v).toString()
    : v >= 1000 ? Math.round(v).toLocaleString() : Math.round(v).toString();
  return (
    <p ref={ref} className="font-display text-4xl font-extrabold sm:text-5xl">
      <span className="gradient-text-orange">{prefix}{display}{suffix}</span>
    </p>
  );
}
