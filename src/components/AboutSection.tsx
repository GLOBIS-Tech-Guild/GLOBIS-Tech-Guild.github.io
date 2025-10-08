import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Target, Rocket, Users, MessageSquare } from "lucide-react";

export function AboutSection() {
  const goals = [
    {
      icon: Target,
      title: "コミュニティの価値",
      subtitle: "MBA × エンジニアの知見共有",
      items: [
        "経営×創造者の情報交換",
        "最新情報が飛び交う場"
      ],
      color: "text-blue-600",
      gradient: "from-blue-500/10 to-blue-600/5",
      bg: "bg-blue-500/5"
    },
    {
      icon: Rocket,
      title: "目指すもの",
      subtitle: "継続的な成長とイノベーション",
      items: [
        "プロダクト開発スキルの向上",
        "持続可能な開発体制"
      ],
      color: "text-emerald-600",
      gradient: "from-emerald-500/10 to-emerald-600/5",
      bg: "bg-emerald-500/5"
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        <div className="absolute -left-20 top-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-[22rem] w-[22rem] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <Badge className="mx-auto w-fit border-0 bg-white/10 px-4 py-2 text-cyan-200 backdrop-blur">
            <Users className="mr-2 h-4 w-4 text-cyan-300" />
            About Us
          </Badge>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            コミュニティの目的
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-200/80">
            経営と技術の両面を理解するエンジニアが集まり、持続可能な成長戦略を共に考えるコミュニティです。
            UI/UXの洗練と事業インパクトを両立させるための知見がここに集まります。
          </p>
        </div>

        <div className="mb-20 grid gap-8 md:grid-cols-2">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <Card
                key={index}
                className="group border border-white/10 bg-white/[0.04] shadow-[0_25px_45px_-30px_rgba(15,118,230,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/[0.06]"
              >
                <CardHeader className="space-y-6 pb-6 text-center">
                  <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br ${goal.gradient} shadow-lg transition-transform duration-300 group-hover:scale-105`}>
                    <Icon className={`h-10 w-10 ${goal.color}`} />
                  </div>
                  <div>
                    <CardTitle className="mb-2 text-xl font-semibold text-white">{goal.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-slate-200/70">
                      {goal.subtitle}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 px-8 pb-8">
                  <ul className="space-y-4">
                    {goal.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-4 group">
                        <div className={`mt-1.5 h-3 w-3 flex-shrink-0 rounded-full border-2 border-current ${goal.bg} ${goal.color}`} />
                        <span className="leading-relaxed text-slate-200/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="relative overflow-hidden border border-cyan-300/20 bg-gradient-to-r from-cyan-500/20 via-blue-600/25 to-purple-600/20 text-white shadow-[0_30px_60px_-35px_rgba(6,182,212,0.65)]">
            {/* Background pattern */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),transparent_65%)]" />
            <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-purple-400/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-cyan-300/25 blur-3xl" />

            <CardContent className="relative z-10 px-8 py-12 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">情報交換のハブ</h3>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-100">
                技術トレンド、ビジネス戦略、プロダクト開発など、エンジニアとして必要な情報を共有し、共に成長していく場所です。
                オンライン・オフライン双方でのコラボレーションを通じて、インサイトをすぐにプロダクトへ落とし込みます。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}