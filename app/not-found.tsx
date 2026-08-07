import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white px-4 text-center">
      <h1 className="text-6xl font-extrabold text-brand-teal">404</h1>
      <h2 className="mt-4 text-2xl font-bold">Page Not Found</h2>
      <p className="mt-2 text-slate-400 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-xl bg-brand-teal px-6 py-3 text-sm font-bold text-white shadow-glow-teal hover:bg-brand-tealDark transition"
      >
        Return Home
      </Link>
    </div>
  );
}
