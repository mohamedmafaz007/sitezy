'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Users, Wallet, Package, Activity } from 'lucide-react';
import { useCountUp, Reveal } from '@/lib/anim';

export function LiveDashboard() {
  return (
    <section className="relative overflow-hidden bg-ink-50 py-24 sm:py-32">
      <div className="absolute inset-0 bg-mesh-light opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
            Live Dashboard
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
            Your entire portfolio, at a glance.
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Numbers update live. Charts draw as you scroll. Every metric across
            every site — one screen.
          </p>
        </Reveal>

        {/* Laptop mockup */}
        <Reveal delay={0.1} className="mt-16">
          <div className="relative mx-auto max-w-5xl">
            {/* glow */}
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-brand-orange/20 via-brand-blue/20 to-brand-green/20 blur-3xl" />

            <div className="relative rounded-t-2xl bg-ink-800 p-3 shadow-premium">
              <div className="overflow-hidden rounded-xl bg-ink-950 ring-1 ring-ink-700">
                {/* browser bar */}
                <div className="flex items-center gap-2 border-b border-ink-800 px-4 py-2.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <div className="ml-3 flex-1 rounded-md bg-ink-800 px-3 py-1 text-[10px] text-ink-400">
                    app.sitezy.com/dashboard
                  </div>
                </div>

                {/* dashboard body */}
                <div className="grid gap-3 bg-ink-950 p-4 text-white lg:grid-cols-4">
                  {/* KPI row */}
                  <KpiCard icon={Users} label="Active Workers" value={142} suffix="" color="text-brand-orange" trend="+8 today" up />
                  <KpiCard icon={Package} label="Open Orders" value={36} suffix="" color="text-brand-blue" trend="+3 today" up />
                  <KpiCard icon={Wallet} label="Budget Used" value={1.24} prefix="$" suffix="M" color="text-brand-green" trend="64% of total" up />
                  <KpiCard icon={Activity} label="Profit Margin" value={22.4} suffix="%" color="text-brand-orange" trend="+1.2%" up />

                  {/* Chart */}
                  <div className="lg:col-span-3 rounded-xl bg-ink-900 p-5 ring-1 ring-ink-800">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-display text-sm font-bold">Weekly Spend vs Budget</h3>
                        <p className="text-[11px] text-ink-400">Last 7 days</p>
                      </div>
                      <div className="flex items-center gap-3 text-[10px]">
                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-brand-orange" /> Spend</span>
                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-brand-blue" /> Budget</span>
                      </div>
                    </div>
                    <BarChart />
                  </div>

                  {/* Side: donut + activity */}
                  <div className="space-y-3">
                    <div className="rounded-xl bg-ink-900 p-4 ring-1 ring-ink-800">
                      <h3 className="mb-2 font-display text-sm font-bold">Cost Breakdown</h3>
                      <Donut />
                    </div>
                    <div className="rounded-xl bg-ink-900 p-4 ring-1 ring-ink-800">
                      <h3 className="mb-2 font-display text-sm font-bold">Recent Activity</h3>
                      <ActivityFeed />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* laptop base */}
            <div className="mx-auto h-3 w-32 rounded-b-xl bg-ink-700" />
            <div className="mx-auto h-1.5 w-64 rounded-b-lg bg-ink-600" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function KpiCard({
  icon: Icon, label, value, prefix = '', suffix = '', color, trend, up,
}: {
  icon: React.ElementType; label: string; value: number; prefix?: string; suffix?: string;
  color: string; trend: string; up?: boolean;
}) {
  const { ref, value: v } = useCountUp(value, 2);
  return (
    <div className="rounded-xl bg-ink-900 p-4 ring-1 ring-ink-800">
      <div className="flex items-center justify-between">
        <Icon className={`h-5 w-5 ${color}`} />
        <span className={`flex items-center gap-0.5 text-[10px] font-semibold ${up ? 'text-brand-green' : 'text-red-400'}`}>
          {up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
          {trend}
        </span>
      </div>
      <p className="mt-2 text-[11px] text-ink-400">{label}</p>
      <p ref={ref} className="font-display text-2xl font-extrabold">
        {prefix}{v < 100 ? v.toFixed(value % 1 ? 1 : 0) : Math.round(v)}{suffix}
      </p>
    </div>
  );
}

function BarChart() {
  const spend = [55, 70, 45, 85, 60, 95, 75];
  const budget = [70, 70, 70, 70, 70, 70, 70];
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  return (
    <div className="flex h-40 items-end justify-between gap-2">
      {days.map((d, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-1">
          <div className="flex h-32 w-full items-end justify-center gap-1">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${spend[i]}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: 'easeOut' }}
              className="w-3 rounded-t bg-gradient-to-t from-brand-orange to-brand-orangeLight"
            />
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${budget[i]}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 + 0.1, duration: 0.7 }}
              className="w-3 rounded-t bg-brand-blue/60"
            />
          </div>
          <span className="text-[10px] text-ink-500">{d}</span>
        </div>
      ))}
    </div>
  );
}

function Donut() {
  const segments = [
    { value: 45, color: '#F97316' },
    { value: 25, color: '#3B82F6' },
    { value: 18, color: '#10B981' },
    { value: 12, color: '#64748b' },
  ];
  let offset = 0;
  const r = 40;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex items-center justify-between">
      <svg width="110" height="110" viewBox="0 0 110 110" className="-rotate-90">
        <circle cx="55" cy="55" r={r} fill="none" stroke="#1e293b" strokeWidth="14" />
        {segments.map((s, i) => {
          const len = (s.value / 100) * c;
          const dash = `${len} ${c - len}`;
          const el = (
            <motion.circle
              key={i}
              cx="55" cy="55" r={r} fill="none" stroke={s.color} strokeWidth="14"
              strokeDasharray={dash}
              strokeDashoffset={-offset}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            />
          );
          offset += len;
          return el;
        })}
      </svg>
      <ul className="space-y-1 text-[10px]">
        {['Labour', 'Materials', 'Equipment', 'Other'].map((l, i) => (
          <li key={l} className="flex items-center gap-1.5 text-ink-300">
            <span className="h-2 w-2 rounded-full" style={{ background: segments[i].color }} />
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ActivityFeed() {
  const items = [
    { t: 'Crew A checked in', c: 'text-brand-orange', time: '2m' },
    { t: '240 cement bags received', c: 'text-brand-green', time: '14m' },
    { t: 'Invoice #1042 paid', c: 'text-brand-blue', time: '38m' },
    { t: 'Photo album "Roofing" added', c: 'text-brand-orange', time: '1h' },
  ];
  return (
    <div className="space-y-2">
      {items.map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center justify-between text-[11px]"
        >
          <span className={`flex items-center gap-1.5 ${it.c}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            <span className="text-ink-300">{it.t}</span>
          </span>
          <span className="text-ink-500">{it.time}</span>
        </motion.div>
      ))}
    </div>
  );
}
