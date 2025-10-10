import { ImageWithFallback } from "./figma/ImageWithFallback";
import HeroSectionimg from "../assets/HeroSection.svg";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900">
      <ImageWithFallback
        src={HeroSectionimg}
        alt="Modern tech workspace"
        className="h-full w-full object-cover"
        loading="eager"
      />
    </section>
  )
}
