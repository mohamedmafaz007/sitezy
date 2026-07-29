'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Twitter, Linkedin, Instagram, Youtube, ArrowUp, Send, CheckCircle2,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LINKS = {
  'For Builders': ['Pricing', 'Demo Booking', 'Partner Program', 'Features'],
  'For Homeowners': ['How it Works', 'FAQ', 'Support Center', 'Client App'],
  Company: ['About Us', 'Careers', 'Contact', 'Blog'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
};

const SOCIALS = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast({ title: 'Invalid email', description: 'Please enter a valid email address.', variant: 'destructive' });
      return;
    }
    setSubscribed(true);
    toast({ title: 'Subscribed', description: "You're on the list — welcome aboard!" });
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 bg-mesh-dark opacity-50" />
      <div className="absolute inset-0 grid-overlay opacity-10" />

      {/* Newsletter band */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-3xl font-extrabold leading-tight">
                Join the modern construction revolution.
              </h3>
              <p className="mt-2 text-white/60">
                Subscribe for the latest tips on construction management and home building.
              </p>
            </div>
            <form onSubmit={subscribe} className="flex w-full max-w-md gap-2 lg:ml-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="h-12 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-brand-orange focus:outline-none"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="flex h-12 items-center gap-2 rounded-xl bg-brand-orange px-5 font-bold text-white transition hover:bg-brand-orangeDark"
              >
                {subscribed ? <CheckCircle2 className="h-5 w-5" /> : <Send className="h-4 w-4" />}
                <span className="hidden sm:inline">{subscribed ? 'Done' : 'Subscribe'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-6">
          {/* brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-orangeDark shadow-glow-orange">
                <span className="font-display text-xl font-extrabold text-white">S</span>
              </div>
              <span className="font-display text-2xl font-extrabold tracking-tight">SITEZY</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              The future of construction management — one ecosystem connecting
              builders and homeowners with total transparency.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/70 transition hover:bg-brand-orange hover:text-white"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/40">
                {heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/70 transition-colors hover:text-brand-orange">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} SITEZY. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/40">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <BackToTop onClick={scrollTop} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function BackToTop({ onClick }: { onClick: () => void }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={onClick}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-white shadow-glow-orange transition hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
