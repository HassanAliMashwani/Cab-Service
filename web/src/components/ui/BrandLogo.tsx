"use client";

import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  scrolled?: boolean;
}

export default function BrandLogo({
  className = "",
  size = "md",
  showText = true,
  scrolled = false,
}: BrandLogoProps) {
  // Explicit width & height maintaining the exact 793:582 (1.362:1) aspect ratio
  // Desktop: 76px height x 104px width (shrinks to 58px x 79px when scrolled)
  // Tablet:  62px height x 84px width  (shrinks to 52px x 71px when scrolled)
  // Mobile:  46px height x 63px width  (shrinks to 40px x 54px when scrolled)
  const imageDimensions = {
    sm: "w-[49px] h-[36px] sm:w-[60px] sm:h-[44px]",
    md: scrolled
      ? "w-[54px] h-[40px] sm:w-[71px] sm:h-[52px] lg:w-[79px] lg:h-[58px]"
      : "w-[63px] h-[46px] sm:w-[84px] sm:h-[62px] lg:w-[104px] lg:h-[76px]",
    lg: "w-[76px] h-[56px] sm:w-[93px] sm:h-[68px] lg:w-[109px] lg:h-[80px]",
    xl: "w-[98px] h-[72px] sm:w-[123px] sm:h-[90px] lg:w-[150px] lg:h-[110px]",
  }[size];

  // Font typography for horizontal brand text lockup
  const titleClasses = {
    sm: "text-xs sm:text-sm",
    md: "text-[0.875rem] sm:text-[1.05rem] lg:text-[1.25rem]",
    lg: "text-base sm:text-xl lg:text-2xl",
    xl: "text-xl sm:text-2xl lg:text-3xl",
  }[size];

  const subtitleClasses = {
    sm: "text-[9px] sm:text-[10px]",
    md: "text-[0.68rem] sm:text-[0.825rem] lg:text-[0.98rem]",
    lg: "text-xs sm:text-sm lg:text-base",
    xl: "text-sm sm:text-base lg:text-lg",
  }[size];

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 lg:gap-3.5 transition-all duration-200 ${className}`}>
      {/* High-Resolution Vehicle & P-Badge Emblem (793x582, Aspect Ratio ~1.36:1) */}
      <div
        className={`relative ${imageDimensions} shrink-0 transition-all duration-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] group-hover:scale-105`}
      >
        <Image
          src="/images/logo.png"
          alt="Perth Wheelchair Taxi Van logo"
          fill
          sizes="(max-width: 640px) 63px, (max-width: 1024px) 84px, 104px"
          priority
          className="object-contain"
        />
      </div>

      {/* Real HTML Brand Typography to the Right */}
      {showText && (
        <div className="flex flex-col justify-center leading-[1.12] tracking-tight whitespace-nowrap select-none text-left">
          <span className={`font-black text-white ${titleClasses} uppercase tracking-tight drop-shadow-sm`}>
            Perth
          </span>
          <span
            className={`font-black text-amber-400 ${subtitleClasses} uppercase tracking-wider drop-shadow-sm hidden sm:block`}
          >
            Wheelchair Taxi Van
          </span>
        </div>
      )}
    </div>
  );
}
