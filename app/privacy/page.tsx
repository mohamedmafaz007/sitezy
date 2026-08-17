import Link from 'next/link';
import { Footer } from '@/components/site/Footer';

export const metadata = {
  title: 'Privacy Policy | SITEZY',
  description: 'Privacy Policy for SITEZY application',
};

export default function PrivacyPolicy() {
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
              Privacy Policy
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
              <h2 className="font-display text-2xl font-bold text-white">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as your name, phone number, and any communications you have through the app regarding your construction project. We also collect usage data and device information to improve the app experience.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To authenticate your account using your phone number via OTP verification.</li>
                <li>To display your project's progress, invoices, contracts, and documents.</li>
                <li>To facilitate secure communication between you and your builder.</li>
                <li>To send important notifications regarding your account or project updates.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white">3. Data Security</h2>
              <p>
                We implement industry-standard encryption and security measures to protect your personal and financial information. Your connection is secured using HTTPS. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white">4. Data Sharing</h2>
              <p>
                We do not sell or rent your personal data to third parties. We may share information with trusted third-party service providers (like SMS gateway providers for OTP delivery or cloud hosting providers) strictly for the purpose of operating this application on our behalf.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white">5. Data Retention</h2>
              <p>
                We retain your data for as long as your account is active or as needed to provide you services, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white">6. Your Rights</h2>
              <p>
                You have the right to request access to, correction of, or deletion of your personal data. If you wish to delete your account, please contact your builder or administrator to have your profile and associated data removed from the platform.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-white">7. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="font-medium text-white">
                By using the Sitezy Clients application, you consent to this Privacy Policy.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
