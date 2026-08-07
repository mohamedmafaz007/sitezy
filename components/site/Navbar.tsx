'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Smartphone, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrolledPast } from '@/lib/anim';
import { cn } from '@/lib/utils';

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Builders', href: '#builders' },
  { label: 'Clients', href: '#clients' },
  { label: 'Apps', href: '#download' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ onBookDemo }: { onBookDemo: () => void }) {
  const scrolled = useScrolledPast(80);
  const [open, setOpen] = useState(false);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'py-2' : 'py-3.5'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={cn(
            'flex items-center justify-between rounded-2xl px-5 py-2.5 transition-all duration-500',
            scrolled
              ? 'glass shadow-premium border border-slate-200/80 bg-white/90 backdrop-blur-xl'
              : 'border border-slate-200/80 bg-white/95 shadow-md backdrop-blur-lg'
          )}
        >
          {/* Brand Logo */}
          <button
            onClick={() => go('#home')}
            className="flex items-center gap-2 transition-transform hover:scale-105 focus:outline-none shrink-0"
            aria-label="SITEZY home"
          >
            <img
              src="/logo-transparent.png"
              alt="SITEZY Logo"
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain drop-shadow-sm"
            />
          </button>

          {/* Navigation Links */}
          <ul className="hidden items-center gap-1.5 xl:gap-2 lg:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => go(item.href)}
                  className="rounded-xl px-3 py-1.5 text-xs font-bold text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-900 sm:text-sm"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Action Buttons */}
          <div className="hidden items-center gap-2.5 lg:flex shrink-0">
            <Button
              onClick={onBookDemo}
              variant="ghost"
              size="sm"
              className="text-brand-navy hover:bg-brand-navy/10 font-bold px-3.5"
            >
              <CalendarCheck className="mr-1.5 h-4 w-4" /> Book Demo
            </Button>
            <Button
              onClick={() => go('#download')}
              size="sm"
              className="bg-brand-navy text-white hover:bg-brand-navyLight shadow-md font-bold px-4 py-2"
            >
              <Smartphone className="mr-1.5 h-4 w-4" /> Download Apps
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800 lg:hidden hover:bg-slate-200 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-3 sm:mx-6 mt-2 overflow-hidden rounded-2xl glass shadow-premium lg:hidden"
          >
            <ul className="flex flex-col p-3">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <button
                    onClick={() => go(item.href)}
                    className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-ink-700 hover:bg-ink-50"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
              <div className="mt-2 flex flex-col gap-2 p-2">
                <Button
                  onClick={() => {
                    setOpen(false);
                    onBookDemo();
                  }}
                  variant="outline"
                  className="w-full border-brand-navy/30 text-brand-navy"
                >
                  <CalendarCheck className="mr-1.5 h-4 w-4" /> Book Demo
                </Button>
                <Button
                  onClick={() => go('#download')}
                  className="w-full bg-brand-navy text-white hover:bg-brand-navyLight font-bold"
                >
                  <Smartphone className="mr-1.5 h-4 w-4" /> Download Apps
                </Button>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
