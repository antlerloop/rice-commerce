import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeroBanner = () => {
  return (
    <div className="relative w-full aspect-[5/2] min-h-96">
      <Image
        src={"/home-banner.jpg"}
        alt="Rice varieties"
        fill
        className="object-cover"
        priority
      />
      <Link
        href={"/#featured"}
        className="absolute left-1/2 -translate-1/2 top-auto bottom-2 text-white"
      >
        <ChevronDown className="animate-bounce" width={32} height={32} />
      </Link>
    </div>
  );
};
