import { Featured } from "@/components/Featured";
import { HeroBanner } from "@/components/HeroBanner";
import { Location } from "@/components/Location";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col">
      <HeroBanner />
      <div className="max-w-5xl mx-auto w-full">
        <Featured />
        <Location />
      </div>
    </div>
  );
}
