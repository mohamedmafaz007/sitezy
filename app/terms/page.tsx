import Link from 'next/link';
import { Footer } from '@/components/site/Footer';

export const metadata = {
  title: 'Terms of Service | SITEZY',
  description: 'Terms of Service for SITEZY application',
};

export default function TermsOfService() {
  return (
    <>
      <main className="min-h-screen bg-brand-navyDeep text-white">
        {/* Simple Header */}
        <header className="fixed inset-x-0 top-0 z-50 shadow-premium border-b border-white/10 bg-brand-navyDeep/90 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3.5 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105 focus:outline-none">
              <img src="/logo-transparent.png" alt="SITEZY Logo" className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm" />
            </Link>
            <Link href="/" className="rounded-xl px-4 py-2 text-sm font-bold text-white transition-all hover:bg-white/10">
              Back to Home
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-white/10">
          <div className="absolute inset-0 bg-mesh-dark opacity-50" />
          <div className="absolute inset-0 grid-overlay opacity-10" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-white/60">
              Last Updated: July 2026
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="space-y-12 text-white/80 leading-relaxed">
            
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Sitezy Clients application, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the application.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white">2. Use of the Application</h2>
              <p>
                The application is provided to you to monitor your construction project, view invoices, sign documents, and communicate with your builder. You agree to use the app only for lawful purposes and not to engage in any activity that interferes with or disrupts the app's operation.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white">3. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your login credentials (OTP) and for all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white">4. Intellectual Property</h2>
              <p>
                All content, design, features, and software associated with the Sitezy Clients app are the intellectual property of Sitezy Builders or its licensors. You may not reproduce, distribute, or create derivative works without explicit written permission.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white">5. Invoicing and Payments</h2>
              <p>
                The application may display invoices and payment statuses provided by your builder. We do not process payments directly within the app, and any disputes regarding billing or construction work must be resolved directly with your builder.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white">6. Disclaimer of Warranties</h2>
              <p>
                The app is provided on an "as is" and "as available" basis. We make no warranties regarding the accuracy of the project data displayed, as it is populated and managed by your builder.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the application.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white">8. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to the app at any time, with or without cause or notice, if we believe you have violated these terms.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the app after changes constitutes your acceptance of the modified terms.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
