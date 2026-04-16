import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-9xl font-black text-[#2d4a3e]/10">404</h1>
      <h2 className="text-3xl font-bold text-slate-900 -mt-12">Page Not Found</h2>
      <p className="mt-4 text-slate-500 max-w-sm">The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/" className="mt-8 bg-[#2d4a3e] text-white px-8 py-3 rounded-xl font-bold shadow-lg">
        Back to Home
      </Link>
    </div>
  );
}