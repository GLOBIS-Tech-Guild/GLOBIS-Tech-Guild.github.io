import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Target, Rocket, Users, MessageSquare } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import HeroSectionimg from "../assets/HeroSection.svg";

export function AboutSection() {
  const goals = [
    {
      icon: Target,
      title: "コミュニティの価値",
      subtitle: "MBA × エンジニアの知見共有",
      items: ["経営×創造者の情報交換", "最新情報が飛び交う場"],
      accent: "from-sky-400/60 via-sky-300/40 to-transparent"
    },
    {
      icon: Rocket,
      title: "目指すもの",
      subtitle: "継続的な成長とイノベーション",
      items: ["プロダクト開発スキルの向上", "持続可能な開発体制"],
      accent: "from-emerald-400/60 via-emerald-300/40 to-transparent"
    }
  ];

  return (
    <section id="about" className="relative py-24 text-slate-100 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <ImageWithFallback
          src={HeroSectionimg}
          alt="Ambient workspace texture"
          className="h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md" />
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="lg:w-2/5 space-y-6">
            <Badge className="w-fit bg-white/10 text-slate-100 border-white/20 backdrop-blur">
              <Users className="w-4 h-4 mr-2 text-sky-300" />
              About Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              コミュニティの目的
            </h2>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              経営と技術の両面を理解するエンジニアが集まり、持続可能な成長戦略を共に考えるコミュニティです。
              ビジュアルのトーンを揃えた落ち着いた空間で、深いインサイトと実践知を共有します。
            </p>
          </div>

          <div className="lg:w-3/5 grid gap-6 md:grid-cols-2">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <Card
                  key={index}
                  className="relative overflow-hidden border border-white/10 bg-white/5 text-slate-100 backdrop-blur-xl"
                >
                  <div className={`absolute inset-x-6 top-0 h-px bg-gradient-to-r ${goal.accent}`} />
                  <CardHeader className="space-y-4 pb-0">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <Icon className="h-6 w-6 text-white" />
                      </span>
                      <div>
                        <CardTitle className="text-lg font-medium">{goal.title}</CardTitle>
                        <CardDescription className="text-slate-300 text-sm">
                          {goal.subtitle}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      {goal.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-sm text-slate-200">
                          <div className="mt-1 h-2 w-2 rounded-full bg-white/60" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <Card className="relative overflow-hidden border border-white/10 bg-white/5 text-slate-100 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/0 to-white/5" />
            <div className="absolute -top-20 right-16 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />

            <CardContent className="relative z-10 flex flex-col items-center gap-6 py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-3 max-w-3xl">
                <h3 className="text-2xl font-semibold">情報交換のハブ</h3>
                <p className="text-slate-300 leading-relaxed">
                  技術トレンド、ビジネス戦略、プロダクト開発など、エンジニアとして必要な情報を共有し、
                  共に成長していく場所です。知見が交差する瞬間を大切にしながら、価値の高いコラボレーションを生み出します。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
