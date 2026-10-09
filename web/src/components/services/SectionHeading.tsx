interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      {badge && (
        <span
          className={`inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 border ${
            light
              ? "bg-white/10 text-amber-300 border-white/10"
              : "bg-amber-50 text-amber-800 border-amber-200"
          }`}
        >
          {badge}
        </span>
      )}

      <h2
        className={`text-2xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-tight mb-4 ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative Accent Divider */}
      <div className={`flex items-center gap-1.5 mt-4 ${align === "center" ? "justify-center" : "justify-start"}`}>
        <span className="w-12 h-1 bg-amber-500 rounded-full"></span>
        <span className="w-2.5 h-1 bg-amber-400 rounded-full"></span>
        <span className="w-1.5 h-1 bg-amber-300 rounded-full"></span>
      </div>
    </div>
  );
}
