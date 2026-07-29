'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, CalendarCheck, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', company: '', date: '' });
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) {
      toast({ title: 'Please complete the form', variant: 'destructive' });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: 'Demo booked!', description: "We've sent a calendar invite to your email." });
      setForm({ name: '', email: '', company: '', date: '' });
      onClose();
    }, 1400);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-ink-950/70 p-4 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-premium"
          >
            <div className="relative bg-gradient-to-br from-brand-orange to-brand-orangeDark p-6 text-white">
              <button onClick={onClose} className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
              <CalendarCheck className="h-8 w-8" />
              <h3 className="mt-3 font-display text-2xl font-extrabold">Book a Live Demo</h3>
              <p className="text-sm text-white/80">See SITEZY in action with a personalised walkthrough.</p>
            </div>
            <form onSubmit={submit} className="space-y-4 p-6">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink-700">Full Name</span>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-11" placeholder="Jane Builder" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink-700">Work Email</span>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-11" placeholder="jane@company.com" />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink-700">Company</span>
                  <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="h-11" placeholder="Acme Co" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink-700">Preferred Date</span>
                  <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="h-11" />
                </label>
              </div>
              <Button type="submit" disabled={loading} className="h-11 w-full bg-ink-900 text-white hover:bg-ink-800">
                {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Booking…</> : 'Confirm Demo'}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-ink-950 shadow-premium"
          >
            <button onClick={onClose} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-ink-900 to-ink-950">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-orange/20">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
                <p className="mt-4 font-display text-xl font-bold text-white">SITEZY Product Demo</p>
                <p className="text-sm text-white/50">A 2-minute tour of the builder and client apps</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
