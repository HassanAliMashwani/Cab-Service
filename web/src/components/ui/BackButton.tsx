"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ className = "" }: { className?: string }) {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border-2 border-zinc-700 hover:border-amber-400 text-xs font-black uppercase tracking-wider transition-all shadow-sm cursor-pointer active:scale-95 ${className}`}
      aria-label="Go back to previous page"
    >
      <ArrowLeft className="w-4 h-4 text-amber-400" />
      <span>Back</span>
    </button>
  );
}
