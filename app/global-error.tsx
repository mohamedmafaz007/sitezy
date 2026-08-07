'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white font-sans">
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-extrabold text-brand-orange">Application Error</h1>
          <p className="mt-2 text-slate-400 max-w-md text-sm">
            A global error occurred. Click below to reset and reload.
          </p>
          <button
            onClick={() => reset()}
            className="mt-6 rounded-xl bg-brand-orange px-6 py-2.5 text-sm font-bold text-white shadow-glow-orange hover:bg-brand-orangeDark transition"
          >
            Reset Application
          </button>
        </div>
      </body>
    </html>
  );
}
