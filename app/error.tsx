'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white px-4 text-center">
      <h2 className="text-3xl font-extrabold text-brand-orange">Something went wrong!</h2>
      <p className="mt-2 text-slate-400 max-w-md text-sm">
        An unexpected error occurred while loading page resources.
      </p>
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => reset()}
          className="rounded-xl bg-brand-orange px-6 py-2.5 text-sm font-bold text-white shadow-glow-orange hover:bg-brand-orangeDark transition"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="rounded-xl bg-slate-800 px-6 py-2.5 text-sm font-bold text-slate-200 hover:bg-slate-700 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
