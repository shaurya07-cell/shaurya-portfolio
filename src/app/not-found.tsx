import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-heading font-extrabold text-white mb-2">404</h1>
      <p className="text-sm font-mono text-slate-400 mb-6">Page Not Found</p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}

