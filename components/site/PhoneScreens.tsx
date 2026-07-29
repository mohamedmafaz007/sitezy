'use client';

import { motion } from 'framer-motion';
import {
  Users, Package, Wallet, TrendingUp, Hammer, CheckCircle2, Video,
  Image as ImageIcon, FileText, MessageSquare, Bell, Calendar,
} from 'lucide-react';

/* ---------------- Builder dashboard screen ---------------- */
export function BuilderScreen() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-ink-50 to-white px-3 pb-3">
      <div className="flex items-center justify-between px-1 pb-2 pt-1">
        <div>
          <p className="text-[10px] font-medium text-ink-400">Good morning,</p>
          <p className="font-display text-sm font-bold text-ink-900">Site Manager</p>
        </div>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
          <Bell className="h-3.5 w-3.5" />
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { icon: Users, label: 'On Site', value: '42', c: 'text-brand-blue' },
          { icon: Package, label: 'Materials', value: '86%', c: 'text-brand-green' },
          { icon: Wallet, label: 'Budget', value: '$1.2M', c: 'text-brand-orange' },
          { icon: TrendingUp, label: 'Progress', value: '64%', c: 'text-ink-900' },
        ].map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="rounded-xl bg-white p-2 shadow-sm ring-1 ring-ink-100"
          >
            <k.icon className={`mb-1 h-3.5 w-3.5 ${k.c}`} />
            <p className="text-[9px] font-medium text-ink-400">{k.label}</p>
            <p className="font-display text-sm font-bold text-ink-900">{k.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Attendance list */}
      <div className="mt-2 rounded-xl bg-white p-2 shadow-sm ring-1 ring-ink-100">
        <div className="mb-1 flex items-center justify-between">
          <p className="text-[10px] font-semibold text-ink-700">Today's Attendance</p>
          <span className="rounded-full bg-brand-green/10 px-1.5 py-0.5 text-[8px] font-bold text-brand-green">
            42 present
          </span>
        </div>
        {['Crew A · Foundation', 'Crew B · Framing', 'Crew C · Electrical'].map((c, i) => (
          <motion.div
            key={c}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="flex items-center justify-between py-0.5"
          >
            <span className="text-[9px] text-ink-600">{c}</span>
            <CheckCircle2 className="h-3 w-3 text-brand-green" />
          </motion.div>
        ))}
      </div>

      {/* Mini chart */}
      <div className="mt-2 flex-1 rounded-xl bg-white p-2 shadow-sm ring-1 ring-ink-100">
        <p className="mb-1 text-[10px] font-semibold text-ink-700">Weekly Spend</p>
        <div className="flex h-16 items-end gap-1">
          {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.6, ease: 'easeOut' }}
              className="flex-1 rounded-t bg-gradient-to-t from-brand-orange to-brand-orangeLight"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Client tracking screen ---------------- */
export function ClientScreen() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-white to-ink-50 px-3 pb-3">
      <div className="flex items-center justify-between px-1 pb-2 pt-1">
        <div>
          <p className="text-[10px] font-medium text-ink-400">Your Project</p>
          <p className="font-display text-sm font-bold text-ink-900">Hillside Villa</p>
        </div>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
          <Bell className="h-3.5 w-3.5" />
        </div>
      </div>

      {/* progress ring */}
      <div className="relative mx-auto my-1 flex h-20 w-20 items-center justify-center">
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="34" fill="none" stroke="#e2e8f0" strokeWidth="7" />
          <motion.circle
            cx="40" cy="40" r="34" fill="none" stroke="#3B82F6" strokeWidth="7" strokeLinecap="round"
            strokeDasharray={213.6}
            initial={{ strokeDashoffset: 213.6 }}
            animate={{ strokeDashoffset: 213.6 * 0.35 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          />
        </svg>
        <div className="text-center">
          <p className="font-display text-lg font-bold text-ink-900">65%</p>
          <p className="text-[8px] text-ink-400">complete</p>
        </div>
      </div>

      {/* milestones */}
      <div className="space-y-1">
        {[
          { label: 'Foundation', done: true },
          { label: 'Framing', done: true },
          { label: 'Roofing', done: true },
          { label: 'Interiors', done: false },
          { label: 'Finishing', done: false },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.08 }}
            className="flex items-center gap-2"
          >
            <div
              className={`flex h-4 w-4 items-center justify-center rounded-full ${
                m.done ? 'bg-brand-blue text-white' : 'bg-ink-100 text-ink-300'
              }`}
            >
              {m.done && <CheckCircle2 className="h-2.5 w-2.5" />}
            </div>
            <span className={`text-[10px] ${m.done ? 'font-semibold text-ink-900' : 'text-ink-400'}`}>
              {m.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* photo grid */}
      <div className="mt-2 grid grid-cols-3 gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="aspect-square rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-blue/5"
          >
            <ImageIcon className="m-auto h-full w-4 text-brand-blue/40" />
          </motion.div>
        ))}
      </div>

      {/* chat preview */}
      <div className="mt-auto flex items-center gap-1.5 rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-ink-100">
        <MessageSquare className="h-3.5 w-3.5 text-brand-blue" />
        <span className="text-[9px] text-ink-600">Message from your builder…</span>
      </div>
    </div>
  );
}

/* Generic icon list used across sticky-scroll phone screens */
export function ScreenRow({
  icon: Icon, label, value, accent,
}: { icon: React.ElementType; label: string; value: string; accent: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-ink-100">
      <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${accent}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <p className="text-[11px] font-medium text-ink-400">{label}</p>
        <p className="font-display text-sm font-bold text-ink-900">{value}</p>
      </div>
    </div>
  );
}

export const ScreenIcons = {
  Users: Users,
  Package: Package,
  Wallet: Wallet,
  TrendingUp: TrendingUp,
  Hammer: Hammer,
  CheckCircle2: CheckCircle2,
  ImageIcon: ImageIcon,
  Video: Video,
  FileText: FileText,
  MessageSquare: MessageSquare,
  Bell: Bell,
  Calendar: Calendar,
};
