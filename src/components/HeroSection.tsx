import { Badge } from "./ui/badge";
import { Users, Rocket, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import HeroSectionimg from "../assets/HeroSection.svg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <ImageWithFallback
        src={HeroSectionimg}
        alt="Modern tech workspace"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />

      {/* Color overlays to match the hero tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#021619]/60 via-[#032126]/75 to-[#052b31]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(83,211,165,0.35),_transparent_55%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(31,61,143,0.35),_transparent_60%)]"></div>

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto flex flex-col gap-12 px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-8 text-primary-foreground">
            <Badge className="w-fit bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary-foreground/80 backdrop-blur border border-white/30">
              GLOBIS TECH GUILD
            </Badge>
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                MBA視点とテクノロジーで未来を形にするコミュニティ
              </h1>
              <p className="max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
                GLOBIS Tech Guildは、経営感覚を持つエンジニアが集い、プロダクトの価値を最大化するための知見を共有する場です。ビジネスとテクノロジーの融合を志す仲間とともに、一歩先の未来を描きましょう。
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {[{
                icon: Users,
                title: "コミュニティ",
                description: "MBA × エンジニアの知見"
              }, {
                icon: Rocket,
                title: "成長",
                description: "実践的なアウトプット"
              }, {
                icon: Sparkles,
                title: "共創",
                description: "プロダクトで未来を描く"
              }].map(({ icon: Icon, title, description }) => (
                <div key={title} className="group flex items-start gap-4 rounded-2xl border border-white/20 bg-white/5 p-5 backdrop-blur">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/40 bg-gradient-to-br from-white/40 to-transparent text-primary shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-white">{title}</p>
                    <p className="text-sm text-primary-foreground/80">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}