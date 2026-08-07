'use client';

import { motion } from 'framer-motion';
import {
  Users, Package, Wallet, TrendingUp, Hammer, CheckCircle2, Video,
  Image as ImageIcon, FileText, MessageSquare, Bell, Calendar,
  AlertTriangle, ArrowUpRight, Play, ShieldCheck, Download, ChevronRight,
  Clock, DollarSign, Check, X, CreditCard
} from 'lucide-react';
import { IMAGES } from '@/lib/images';

/* ---------------- Hero Default Builder Screen ---------------- */
export function BuilderScreen() {
  return <BuilderAttendanceScreen />;
}

/* ---------------- Hero Default Client Screen ---------------- */
export function ClientScreen() {
  return <ClientDailyProgressScreen />;
}

/* =========================================================================
   BUILDERS APP MOBILE SCREENS (6 Screens)
   ========================================================================= */

/** 1. Attendance Screen */
export function BuilderAttendanceScreen() {
  return (
    <div className="flex h-full flex-col bg-slate-50 p-3">
      <div className="flex items-center justify-between pb-2">
        <div>
          <p className="text-[9px] font-medium text-slate-400">Site Manager</p>
          <p className="font-display text-sm font-bold text-slate-900">Attendance Log</p>
        </div>
        <span className="rounded-full bg-brand-orange/10 px-2 py-0.5 text-[9px] font-bold text-brand-orange">
          42 Active
        </span>
      </div>

      {/* Summary card */}
      <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100 mb-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] text-slate-500 font-medium">Daily Goal</span>
          <span className="text-[10px] font-bold text-brand-green">94% Check-in</span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
          <div className="h-full bg-brand-orange w-[65%]" />
          <div className="h-full bg-brand-green w-[25%]" />
        </div>
      </div>

      {/* Crews */}
      <div className="space-y-1.5 flex-1">
        {[
          { crew: 'Crew A · Foundation', count: '12 Present', status: 'On Site', c: 'bg-brand-orange/10 text-brand-orange' },
          { crew: 'Crew B · Framing', count: '18 Present', status: 'On Site', c: 'bg-brand-green/10 text-brand-green' },
          { crew: 'Crew C · Electrical', count: '12 Present', status: 'On Site', c: 'bg-brand-blue/10 text-brand-blue' },
        ].map((item, i) => (
          <motion.div
            key={item.crew}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center justify-between rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-slate-100"
          >
            <div className="flex items-center gap-2">
              <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${item.c}`}>
                <Users className="h-3.5 w-3.5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-800">{item.crew}</p>
                <p className="text-[8px] text-slate-400">{item.count}</p>
              </div>
            </div>
            <span className="text-[8px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
              {item.status}
            </span>
          </motion.div>
        ))}
      </div>

      <button className="w-full py-2 bg-brand-orange text-white text-[10px] font-bold rounded-xl shadow-glow-orange mt-2">
        + Check-in New Worker
      </button>
    </div>
  );
}

/** 2. Materials Screen */
export function BuilderMaterialsScreen() {
  return (
    <div className="flex h-full flex-col bg-slate-50 p-3">
      <div className="flex items-center justify-between pb-2">
        <div>
          <p className="text-[9px] font-medium text-slate-400">Inventory Tracker</p>
          <p className="font-display text-sm font-bold text-slate-900">Stock & Orders</p>
        </div>
        <Package className="h-4 w-4 text-brand-orange" />
      </div>

      {/* Alert banner */}
      <div className="rounded-xl bg-red-50 p-2.5 border border-red-100 flex items-center gap-2 mb-2">
        <AlertTriangle className="h-4 w-4 text-red-500 shrink-0" />
        <div>
          <p className="text-[9px] font-bold text-red-700">Low Stock Alert</p>
          <p className="text-[8px] text-red-500">Bricks running low (12% remaining)</p>
        </div>
      </div>

      {/* Stock Meters */}
      <div className="space-y-2 flex-1">
        {[
          { name: 'Cement Bags', qty: '240 / 500', pct: 48, color: 'bg-brand-orange' },
          { name: 'Steel Rebar', qty: '1.2 Tons', pct: 85, color: 'bg-brand-green' },
          { name: 'Red Bricks', qty: '800 / 6000', pct: 12, color: 'bg-red-500' },
        ].map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-slate-100"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-bold text-slate-800">{m.name}</span>
              <span className="text-[9px] font-medium text-slate-500">{m.qty}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className={`h-full ${m.color}`} style={{ width: `${m.pct}%` }} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="rounded-xl bg-slate-900 p-2.5 text-white flex items-center justify-between">
        <div>
          <p className="text-[8px] text-slate-400">Incoming Delivery</p>
          <p className="text-[9px] font-bold">Truck #4 · Cement (10:30 AM)</p>
        </div>
        <ArrowUpRight className="h-3.5 w-3.5 text-brand-orange" />
      </div>
    </div>
  );
}

/** 3. Expenses Screen */
export function BuilderExpensesScreen() {
  return (
    <div className="flex h-full flex-col bg-slate-50 p-3">
      <div className="flex items-center justify-between pb-2">
        <div>
          <p className="text-[9px] font-medium text-slate-400">Petty Cash & Rentals</p>
          <p className="font-display text-sm font-bold text-slate-900">Expenses Log</p>
        </div>
        <Wallet className="h-4 w-4 text-brand-orange" />
      </div>

      {/* Spend Gauge */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-3 text-white mb-2 shadow-sm">
        <p className="text-[8px] text-slate-400 uppercase tracking-wide">Petty Cash Today</p>
        <p className="font-display text-xl font-bold text-white">$1,840.00</p>
        <div className="mt-2 flex items-center justify-between text-[8px] text-slate-300">
          <span>Budget: $2,500</span>
          <span className="text-emerald-400 font-bold">73% Spent</span>
        </div>
      </div>

      <div className="space-y-1.5 flex-1">
        {[
          { title: 'Petty Cash Today', amt: '$1,840', sub: 'Food & Supplies', icon: Wallet },
          { title: 'Equipment Rental', amt: '$3,200', sub: 'Excavator Day 3', icon: Hammer },
          { title: 'Receipts Uploaded', amt: '23 files', sub: 'Pending approval', icon: FileText },
        ].map((item, i) => (
          <div key={item.title} className="flex items-center justify-between rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-50 text-brand-orange">
                <item.icon className="h-3.5 w-3.5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-800">{item.title}</p>
                <p className="text-[8px] text-slate-400">{item.sub}</p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-slate-900">{item.amt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** 4. Payroll Screen */
export function BuilderPayrollScreen() {
  return (
    <div className="flex h-full flex-col bg-slate-50 p-3">
      <div className="flex items-center justify-between pb-2">
        <div>
          <p className="text-[9px] font-medium text-slate-400">Weekly Wages</p>
          <p className="font-display text-sm font-bold text-slate-900">Crew Payroll</p>
        </div>
        <DollarSign className="h-4 w-4 text-emerald-600" />
      </div>

      <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100 mb-2">
        <p className="text-[8px] text-slate-400 uppercase font-semibold">Total Weekly Payroll</p>
        <p className="font-display text-xl font-bold text-slate-900">$48,200.00</p>
        <p className="text-[8px] text-emerald-600 font-bold mt-1">✓ Calculated across 42 workers</p>
      </div>

      <div className="space-y-1.5 flex-1">
        {[
          { label: 'Weekly Payroll', val: '$48,200', tag: 'Ready' },
          { label: 'Overtime Hours', val: '186 Hours', tag: 'Calculated' },
          { label: 'Paid This Month', val: '$192,000', tag: 'Processed' },
        ].map((r) => (
          <div key={r.label} className="flex items-center justify-between rounded-xl bg-white p-2.5 ring-1 ring-slate-100">
            <div>
              <p className="text-[9px] font-medium text-slate-500">{r.label}</p>
              <p className="text-[11px] font-bold text-slate-900">{r.val}</p>
            </div>
            <span className="text-[8px] font-bold text-brand-orange bg-orange-50 px-2 py-0.5 rounded-full">
              {r.tag}
            </span>
          </div>
        ))}
      </div>

      <button className="w-full py-2 bg-emerald-600 text-white text-[10px] font-bold rounded-xl shadow-sm mt-2">
        Approve & Send Payments
      </button>
    </div>
  );
}

/** 5. Projects Screen */
export function BuilderProjectsScreen() {
  return (
    <div className="flex h-full flex-col bg-slate-50 p-3">
      <div className="flex items-center justify-between pb-2">
        <div>
          <p className="text-[9px] font-medium text-slate-400">Multi-Site Overview</p>
          <p className="font-display text-sm font-bold text-slate-900">Active Projects</p>
        </div>
        <Hammer className="h-4 w-4 text-brand-orange" />
      </div>

      <div className="space-y-2 flex-1">
        {[
          { name: 'Hillside Villa', progress: 64, crew: '14 Workers', status: 'Roofing' },
          { name: 'Maple Estate', progress: 38, crew: '18 Workers', status: 'Framing' },
          { name: 'Riverside Towers', progress: 81, crew: '10 Workers', status: 'Finishing' },
        ].map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-slate-100"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-bold text-slate-900">{p.name}</span>
              <span className="text-[9px] font-bold text-brand-orange">{p.progress}%</span>
            </div>
            <p className="text-[8px] text-slate-400 mb-1.5">{p.status} · {p.crew}</p>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-brand-orange" style={{ width: `${p.progress}%` }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/** 6. Reports Screen */
export function BuilderReportsScreen() {
  return (
    <div className="flex h-full flex-col bg-slate-50 p-3">
      <div className="flex items-center justify-between pb-2">
        <div>
          <p className="text-[9px] font-medium text-slate-400">Analytics & PDFs</p>
          <p className="font-display text-sm font-bold text-slate-900">Site Reports</p>
        </div>
        <TrendingUp className="h-4 w-4 text-brand-orange" />
      </div>

      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-slate-100 text-center">
          <p className="text-[8px] text-slate-400">Profit Margin</p>
          <p className="font-display text-lg font-bold text-emerald-600">22.4%</p>
        </div>
        <div className="rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-slate-100 text-center">
          <p className="text-[8px] text-slate-400">On-Time Rate</p>
          <p className="font-display text-lg font-bold text-brand-blue">94%</p>
        </div>
      </div>

      <div className="space-y-1.5 flex-1">
        {['Weekly Progress PDF', 'Safety Audit Report', 'Material Cost Variance'].map((doc) => (
          <div key={doc} className="flex items-center justify-between rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-2">
              <FileText className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-[9px] font-medium text-slate-800">{doc}</span>
            </div>
            <Download className="h-3 w-3 text-brand-orange" />
          </div>
        ))}
      </div>

      <button className="w-full py-2 bg-slate-900 text-white text-[10px] font-bold rounded-xl mt-2 flex items-center justify-center gap-1">
        <Download className="h-3 w-3" /> Generate PDF Report
      </button>
    </div>
  );
}


/* =========================================================================
   CLIENT APP MOBILE SCREENS (10 Screens)
   ========================================================================= */

/** 1. Daily Progress Screen */
export function ClientDailyProgressScreen() {
  return (
    <div className="flex h-full flex-col bg-slate-50 p-3">
      <div className="flex items-center justify-between pb-2">
        <div>
          <p className="text-[9px] font-medium text-slate-400">Live Updates</p>
          <p className="font-display text-sm font-bold text-slate-900">Daily Progress</p>
        </div>
        <span className="rounded-full bg-brand-blue/10 px-2 py-0.5 text-[9px] font-bold text-brand-blue">
          Today
        </span>
      </div>

      {/* Featured Photo Preview */}
      <div className="relative rounded-2xl overflow-hidden h-28 mb-2 shadow-sm">
        <img src={IMAGES.hero.construction} alt="Site Photo" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent p-2 flex flex-col justify-end">
          <p className="text-[9px] font-bold text-white">Roofing Trusses Installed</p>
          <p className="text-[7px] text-slate-300">12 new photos uploaded today</p>
        </div>
      </div>

      <div className="space-y-1.5 flex-1">
        <div className="flex items-center justify-between rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-center gap-2">
            <Video className="h-4 w-4 text-brand-green" />
            <div>
              <p className="text-[9px] font-bold text-slate-800">Walkthrough Video</p>
              <p className="text-[8px] text-slate-400">1 new video added</p>
            </div>
          </div>
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
        </div>

        <div className="flex items-center justify-between rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-brand-orange" />
            <div>
              <p className="text-[9px] font-bold text-slate-800">Weekly Summary</p>
              <p className="text-[8px] text-slate-400">64 site updates</p>
            </div>
          </div>
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
        </div>
      </div>
    </div>
  );
}

/** 2. Photos Gallery Screen */
export function ClientPhotosScreen() {
  return (
    <div className="flex h-full flex-col bg-slate-50 p-3">
      <div className="flex items-center justify-between pb-2">
        <div>
          <p className="text-[9px] font-medium text-slate-400">Site Gallery</p>
          <p className="font-display text-sm font-bold text-slate-900">Photo Library</p>
        </div>
        <ImageIcon className="h-4 w-4 text-brand-blue" />
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-2">
        <span className="bg-brand-blue text-white text-[8px] font-bold px-2 py-0.5 rounded-full">All</span>
        <span className="bg-white text-slate-500 text-[8px] font-medium px-2 py-0.5 rounded-full">Foundation</span>
        <span className="bg-white text-slate-500 text-[8px] font-medium px-2 py-0.5 rounded-full">Roofing</span>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 gap-1.5 flex-1">
        {[
          { title: 'Foundation', count: '38 Photos' },
          { title: 'Framing Phase', count: '72 Photos' },
          { title: 'Roofing Structure', count: '45 Photos' },
          { title: 'Interior Walls', count: '19 Photos' },
        ].map((album, i) => (
          <div key={album.title} className="relative rounded-xl overflow-hidden bg-slate-200 aspect-[4/3] shadow-sm">
            <img src={IMAGES.hero.construction} alt="" className="h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent p-1.5 flex flex-col justify-end">
              <p className="text-[8px] font-bold text-white leading-tight">{album.title}</p>
              <p className="text-[7px] text-slate-300">{album.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** 3. Videos Screen */
export function ClientVideosScreen() {
  return (
    <div className="flex h-full flex-col bg-slate-50 p-3">
      <div className="flex items-center justify-between pb-2">
        <div>
          <p className="text-[9px] font-medium text-slate-400">Site Walkthroughs</p>
          <p className="font-display text-sm font-bold text-slate-900">Video Logs</p>
        </div>
        <Video className="h-4 w-4 text-brand-blue" />
      </div>

      {/* Video Player Card */}
      <div className="relative rounded-2xl overflow-hidden h-36 mb-2 shadow-sm bg-slate-900">
        <img src={IMAGES.hero.construction} alt="" className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white shadow-glow-blue">
            <Play className="h-5 w-5 fill-white ml-0.5" />
          </div>
        </div>
        <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-white">
          <span className="text-[8px] font-bold">Latest Site Walkthrough</span>
          <span className="text-[8px] bg-black/60 px-1.5 py-0.5 rounded">4:32 min</span>
        </div>
      </div>

      <div className="space-y-1.5 flex-1">
        {[
          { title: 'Timelapse · 8 Phases', sub: '4K Resolution' },
          { title: 'Drone Flyover Footage', sub: '3 Clips uploaded' },
        ].map((v) => (
          <div key={v.title} className="flex items-center justify-between rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                <Video className="h-3.5 w-3.5" />
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-800">{v.title}</p>
                <p className="text-[8px] text-slate-400">{v.sub}</p>
              </div>
            </div>
            <Play className="h-3 w-3 text-brand-blue" />
          </div>
        ))}
      </div>
    </div>
  );
}

/** 4. Timeline Screen */
export function ClientTimelineScreen() {
  return (
    <div className="flex h-full flex-col bg-slate-50 p-3">
      <div className="flex items-center justify-between pb-2">
        <div>
          <p className="text-[9px] font-medium text-slate-400">Milestones</p>
          <p className="font-display text-sm font-bold text-slate-900">Project Schedule</p>
        </div>
        <Calendar className="h-4 w-4 text-brand-blue" />
      </div>

      {/* Progress ring */}
      <div className="rounded-2xl bg-white p-2.5 shadow-sm ring-1 ring-slate-100 mb-2 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xs">
          65%
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate-900">Est. Handover: Mar 18</p>
          <p className="text-[8px] text-emerald-600 font-bold">On Schedule ✓</p>
        </div>
      </div>

      <div className="space-y-2 flex-1">
        {[
          { phase: 'Foundation', status: 'Completed', done: true },
          { phase: 'Interiors', status: 'In Progress', done: false, active: true },
          { phase: 'Final Handover', status: 'Est. Mar 18', done: false },
        ].map((step) => (
          <div key={step.phase} className="flex items-center gap-2.5 rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-100">
            <div className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
              step.done ? 'bg-emerald-500 text-white' : step.active ? 'bg-brand-blue text-white' : 'bg-slate-200 text-slate-400'
            }`}>
              {step.done ? <Check className="h-3 w-3" /> : '•'}
            </div>
            <div>
              <p className="text-[9px] font-bold text-slate-800">{step.phase}</p>
              <p className="text-[8px] text-slate-400">{step.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** 5. Payments Screen */
export function ClientPaymentsScreen() {
  return (
    <div className="flex h-full flex-col bg-slate-50 p-3">
      <div className="flex items-center justify-between pb-2">
        <div>
          <p className="text-[9px] font-medium text-slate-400">Financial Summary</p>
          <p className="font-display text-sm font-bold text-slate-900">Billing & Invoices</p>
        </div>
        <CreditCard className="h-4 w-4 text-emerald-600" />
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-3 text-white mb-2 shadow-sm">
        <p className="text-[8px] text-slate-400">Paid to Date</p>
        <p className="font-display text-xl font-bold text-emerald-400">$840,000.00</p>
        <p className="text-[8px] text-slate-300 mt-1">Total Contract: $960,000</p>
      </div>

      <div className="space-y-1.5 flex-1">
        <div className="rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-slate-100 flex items-center justify-between">
          <div>
            <p className="text-[9px] font-bold text-slate-800">Next Invoice (#04)</p>
            <p className="text-[8px] text-slate-400">Due in 4 days</p>
          </div>
          <span className="text-[10px] font-bold text-brand-blue">$120,000</span>
        </div>

        <div className="rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-slate-100 flex items-center justify-between">
          <div>
            <p className="text-[9px] font-bold text-slate-800">Variations</p>
            <p className="text-[8px] text-slate-400">2 pending review</p>
          </div>
          <span className="text-[9px] font-bold text-brand-orange bg-orange-50 px-2 py-0.5 rounded">Pending</span>
        </div>
      </div>

      <button className="w-full py-2 bg-brand-blue text-white text-[10px] font-bold rounded-xl shadow-glow-blue mt-2">
        Pay Next Installment
      </button>
    </div>
  );
}

/** 6. Documents Screen */
export function ClientDocumentsScreen() {
  return (
    <div className="flex h-full flex-col bg-slate-50 p-3">
      <div className="flex items-center justify-between pb-2">
        <div>
          <p className="text-[9px] font-medium text-slate-400">Vault & Permits</p>
          <p className="font-display text-sm font-bold text-slate-900">Documents</p>
        </div>
        <FileText className="h-4 w-4 text-brand-blue" />
      </div>

      <div className="space-y-1.5 flex-1">
        {[
          { title: 'Architectural Blueprints', count: '14 PDF files', icon: FileText },
          { title: 'City Permits & Approvals', count: '6 PDF files', icon: ShieldCheck },
          { title: 'Product Warranties', count: '9 PDF files', icon: FileText },
        ].map((doc) => (
          <div key={doc.title} className="flex items-center justify-between rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                <doc.icon className="h-3.5 w-3.5" />
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-800">{doc.title}</p>
                <p className="text-[8px] text-slate-400">{doc.count}</p>
              </div>
            </div>
            <Download className="h-3.5 w-3.5 text-slate-400" />
          </div>
        ))}
      </div>
    </div>
  );
}

/** 7. Approvals Screen */
export function ClientApprovalsScreen() {
  return (
    <div className="flex h-full flex-col bg-slate-50 p-3">
      <div className="flex items-center justify-between pb-2">
        <div>
          <p className="text-[9px] font-medium text-slate-400">Sign-Offs</p>
          <p className="font-display text-sm font-bold text-slate-900">Approvals</p>
        </div>
        <CheckCircle2 className="h-4 w-4 text-brand-orange" />
      </div>

      {/* Pending Approval Action Card */}
      <div className="rounded-2xl bg-white p-3 shadow-md border border-orange-100 mb-2">
        <span className="text-[8px] font-bold text-brand-orange bg-orange-50 px-2 py-0.5 rounded-full">Action Required</span>
        <p className="text-[10px] font-bold text-slate-900 mt-1.5">Italian Marble Tiles Selection</p>
        <p className="text-[8px] text-slate-500 mb-2">Variation cost: +$2,400</p>
        
        <div className="flex gap-2">
          <button className="flex-1 py-1.5 bg-emerald-500 text-white text-[9px] font-bold rounded-lg flex items-center justify-center gap-1">
            <Check className="h-3 w-3" /> Approve
          </button>
          <button className="flex-1 py-1.5 bg-slate-100 text-slate-600 text-[9px] font-bold rounded-lg flex items-center justify-center gap-1">
            <X className="h-3 w-3" /> Decline
          </button>
        </div>
      </div>

      <div className="space-y-1.5 flex-1">
        <div className="flex items-center justify-between rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-100">
          <span className="text-[9px] font-bold text-slate-800">Paint Colour (Dulux White)</span>
          <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">✓ Approved</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-100">
          <span className="text-[9px] font-bold text-slate-800">Cabinetry Layout</span>
          <span className="text-[8px] font-bold text-brand-orange bg-orange-50 px-2 py-0.5 rounded">Awaiting</span>
        </div>
      </div>
    </div>
  );
}

/** 8. Chat Screen */
export function ClientChatScreen() {
  return (
    <div className="flex h-full flex-col bg-slate-50 p-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-brand-blue text-white flex items-center justify-center text-[9px] font-bold">
            PM
          </div>
          <div>
            <p className="text-[9px] font-bold text-slate-900">Project Manager</p>
            <p className="text-[7px] text-emerald-600">Online</p>
          </div>
        </div>
        <MessageSquare className="h-3.5 w-3.5 text-brand-blue" />
      </div>

      {/* Chat Bubbles */}
      <div className="space-y-2 py-2 flex-1">
        <div className="rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-100 max-w-[85%]">
          <p className="text-[8px] text-slate-700">Hi Sarah! Framing on the 2nd floor is officially complete. 🏗️</p>
          <span className="text-[6px] text-slate-400">10:14 AM</span>
        </div>

        <div className="rounded-xl bg-brand-blue p-2 text-white max-w-[85%] ml-auto">
          <p className="text-[8px]">Looks fantastic! Can we stop by for a quick site visit tomorrow?</p>
          <span className="text-[6px] text-blue-200">10:16 AM</span>
        </div>

        <div className="rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-100 max-w-[85%]">
          <p className="text-[8px] text-slate-700">Absolutely! I'll have safety hardhats ready for you at 2 PM.</p>
          <span className="text-[6px] text-slate-400">10:18 AM</span>
        </div>
      </div>

      <div className="rounded-xl bg-white p-2 ring-1 ring-slate-200 flex items-center justify-between">
        <span className="text-[8px] text-slate-400">Type a message...</span>
        <span className="h-5 w-5 rounded-lg bg-brand-blue text-white flex items-center justify-center text-[9px]">→</span>
      </div>
    </div>
  );
}

/** 9. Notifications Screen */
export function ClientNotificationsScreen() {
  return (
    <div className="flex h-full flex-col bg-slate-50 p-3">
      <div className="flex items-center justify-between pb-2">
        <div>
          <p className="text-[9px] font-medium text-slate-400">Recent Activity</p>
          <p className="font-display text-sm font-bold text-slate-900">Notifications</p>
        </div>
        <Bell className="h-4 w-4 text-brand-blue" />
      </div>

      <div className="space-y-1.5 flex-1">
        {[
          { title: 'Milestone Reached', sub: 'Roofing completed ahead of time', time: '10m ago', icon: CheckCircle2, c: 'text-emerald-500' },
          { title: 'New Photo Album', sub: 'Interiors album updated (18 photos)', time: '2h ago', icon: ImageIcon, c: 'text-brand-blue' },
          { title: 'Invoice Ready', sub: 'Phase 4 installment invoice created', time: 'Yesterday', icon: FileText, c: 'text-brand-orange' },
        ].map((n) => (
          <div key={n.title} className="flex items-start gap-2.5 rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-slate-100">
            <n.icon className={`h-4 w-4 shrink-0 mt-0.5 ${n.c}`} />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <p className="text-[9px] font-bold text-slate-900">{n.title}</p>
                <span className="text-[7px] text-slate-400">{n.time}</span>
              </div>
              <p className="text-[8px] text-slate-500">{n.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** 10. Completion Report Screen */
export function ClientCompletionReportScreen() {
  return (
    <div className="flex h-full flex-col bg-slate-50 p-3 text-center">
      <div className="my-auto py-2">
        <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2 shadow-sm">
          <ShieldCheck className="h-7 w-7" />
        </div>
        <span className="bg-emerald-100 text-emerald-700 text-[8px] font-bold px-2 py-0.5 rounded-full">
          100% Completed
        </span>
        <h4 className="font-display text-sm font-extrabold text-slate-900 mt-2">
          Project Handover Package
        </h4>
        <p className="text-[8px] text-slate-500 mt-1 max-w-[180px] mx-auto">
          Full completion certificate, warranties, maintenance guides & 180 final photos.
        </p>
      </div>

      <button className="w-full py-2 bg-emerald-600 text-white text-[10px] font-bold rounded-xl shadow-sm flex items-center justify-center gap-1">
        <Download className="h-3.5 w-3.5" /> Download Handover Pack
      </button>
    </div>
  );
}

/* Generic icon list */
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
