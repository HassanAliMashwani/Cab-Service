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
  scrolled = false,
}: BrandLogoProps) {
  // Ultra-crisp aspect ratio (~2.92:1) based on cropped logo dimensions (1445x495)
  // Perfectly fits navbar heights across mobile, tablet and desktop
  const imageDimensions = {
    sm: "w-[96px] h-[33px] sm:w-[110px] sm:h-[38px]",
    md: scrolled
      ? "w-[110px] h-[38px] sm:w-[126px] sm:h-[43px] lg:w-[140px] lg:h-[48px]"
      : "w-[122px] h-[42px] sm:w-[142px] sm:h-[49px] lg:w-[165px] lg:h-[56px]",
    lg: "w-[148px] h-[51px] sm:w-[175px] sm:h-[60px] lg:w-[200px] lg:h-[68px]",
    xl: "w-[180px] h-[62px] sm:w-[215px] sm:h-[74px] lg:w-[250px] lg:h-[86px]",
  }[size];

  return (
    <div className={`flex items-center transition-all duration-300 ${className}`}>
      {/* Seamless Floating Logo (Transparent with bold Gold & Crisp White Typography) */}
      <div
        className={`relative ${imageDimensions} shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] filter brightness-105`}
      >
        <Image
          src="/images/logo-transparent.png"
          alt="Perth Wheelchair Taxi Van"
          fill
          sizes="(max-width: 640px) 122px, (max-width: 1024px) 142px, 165px"
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
