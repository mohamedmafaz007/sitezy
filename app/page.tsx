'use client';

import { useState } from 'react';
import { Navbar } from '@/components/site/Navbar';
import { Hero } from '@/components/site/Hero';
import { WhySitezy } from '@/components/site/WhySitezy';
import { BuildersSection } from '@/components/site/BuildersSection';
import { ClientSection } from '@/components/site/ClientSection';
import { HowItWorks } from '@/components/site/HowItWorks';
import { FeaturesGrid } from '@/components/site/FeaturesGrid';
import { Screenshots } from '@/components/site/Screenshots';
import { Trust } from '@/components/site/Trust';
import { Testimonials } from '@/components/site/Testimonials';
import { FAQ } from '@/components/site/FAQ';
import { Download } from '@/components/site/Download';
import { CTA } from '@/components/site/CTA';
import { Contact } from '@/components/site/Contact';
import { Footer } from '@/components/site/Footer';
import { ScrollProgress } from '@/components/site/ScrollProgress';
import { DemoModal, VideoModal } from '@/components/site/Modals';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <ScrollProgress />
      <Navbar onBookDemo={() => setDemoOpen(true)} />
      <main className="w-full max-w-full relative">
        <Hero onWatchDemo={() => setVideoOpen(true)} />
        <WhySitezy />
        <BuildersSection onDownload={() => document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' })} />
        <ClientSection onDownload={() => document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' })} />
        <HowItWorks />
        <FeaturesGrid />
        <Screenshots />
        <Trust />
        <Testimonials />
        <Download />
        <FAQ />
        <CTA onBookDemo={() => setDemoOpen(true)} />
        <Contact />
      </main>
      <Footer />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
      <Toaster />
    </>
  );
}
