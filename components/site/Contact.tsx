'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Building2, Send, CheckCircle2, Loader2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Reveal } from '@/lib/anim';
import { useToast } from '@/hooks/use-toast';

const PROJECT_TYPES = ['Custom Home', 'Multi-Unit Build', 'Renovation', 'Commercial', 'Other'];

export function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '', phone: '', company: '', email: '', type: '', message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    if (!form.type) e.type = 'Select a project type';
    if (!form.message.trim()) e.message = 'Tell us a bit about your project';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      toast({
        title: 'Message sent',
        description: "We'll be in touch within one business day.",
      });
      setForm({ name: '', phone: '', company: '', email: '', type: '', message: '' });
      setTimeout(() => setDone(false), 4000);
    }, 1400);
  };

  const set = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: '' }));
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-mesh-light opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* LEFT — info & map */}
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
              Contact
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
              Let's build something together.
            </h2>
            <p className="mt-5 text-lg text-ink-500">
              Whether you are a builder looking to modernise your operation or a
              homeowner wanting visibility on your project, we would love to hear
              from you.
            </p>

            <div className="mt-8 space-y-4">
              <ContactRow icon={Mail} label="Email" value="hello@sitezy.com" />
              <ContactRow icon={Phone} label="Phone" value="+1 (555) 012-3456" />
              <ContactRow icon={Building2} label="Office" value="123 Builder Street, San Francisco, CA" />
            </div>

            {/* Interactive Location Map Container */}
            <div className="relative mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-premium">
              <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-full bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-white backdrop-blur shadow-md">
                <MapPin className="h-3.5 w-3.5 text-brand-orange animate-bounce" />
                <span>SITEZY HQ · San Francisco</span>
              </div>
              <iframe
                title="SITEZY Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0864887372274!2d-122.39997268468202!3d37.78793097975691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807ed78082a5%3A0xe54e604f323a9d9e!2sMarket%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1689000000000!5m2!1sen!2sus"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale filter transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </Reveal>

          {/* RIGHT — form */}
          <Reveal delay={0.15}>
            <form onSubmit={submit} className="rounded-3xl glass p-6 shadow-premium sm:p-8" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" error={errors.name}>
                  <Input
                    value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                    placeholder="Jane Builder"
                    className="h-11"
                  />
                </Field>
                <Field label="Phone" error={errors.phone}>
                  <Input
                    value={form.phone}
                    onChange={(e) => set('phone', e.target.value)}
                    placeholder="+1 555 000 1234"
                    className="h-11"
                  />
                </Field>
                <Field label="Company">
                  <Input
                    value={form.company}
                    onChange={(e) => set('company', e.target.value)}
                    placeholder="Acme Construction"
                    className="h-11"
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                    placeholder="jane@acme.com"
                    className="h-11"
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Project Type" error={errors.type}>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((p) => (
                      <button
                        type="button"
                        key={p}
                        onClick={() => set('type', p)}
                        className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                          form.type === p
                            ? 'bg-ink-900 text-white'
                            : 'bg-ink-50 text-ink-600 hover:bg-ink-100'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Message" error={errors.message}>
                  <Textarea
                    value={form.message}
                    onChange={(e) => set('message', e.target.value)}
                    placeholder="Tell us about your project…"
                    className="min-h-[110px]"
                  />
                </Field>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="mt-6 h-12 w-full rounded-xl bg-brand-orange text-white hover:bg-brand-orangeDark font-bold shadow-glow-orange"
              >
                {loading ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</>
                ) : done ? (
                  <><CheckCircle2 className="mr-2 h-4 w-4" /> Sent!</>
                ) : (
                  <>Send Message <Send className="ml-2 h-4 w-4" /></>
                )}
              </Button>

              <AnimatePresence>
                {done && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-3 text-center text-sm font-medium text-brand-green"
                  >
                    Thank you — we'll reply within one business day.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink-700">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs font-medium text-red-500">{error}</span>}
    </label>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-ink-100">
        <Icon className="h-5 w-5 text-brand-orange" />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-ink-400">{label}</p>
        <p className="font-display font-bold text-ink-900">{value}</p>
      </div>
    </div>
  );
}
