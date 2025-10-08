import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Cpu, Rocket, ShieldCheck } from "lucide-react";
import HeroSectionimg from "../assets/HeroSection.svg";

const highlights = [
  {
    icon: Cpu,
    title: "プロダクト設計",
    description: "実践的な開発知見を交換"
  },
  {
    icon: ShieldCheck,
    title: "MBA視点の戦略",
    description: "事業づくりに効く意思決定"
  },
  {
    icon: Rocket,
    title: "共同プロジェクト",
    description: "一歩先のプロダクトを共創"
  }
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <ImageWithFallback
        src={HeroSectionimg}
        alt="Modern tech workspace"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#05060f]/95 via-[#05060f]/85 to-[#0a1f33]/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.25),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,_rgba(59,130,246,0.35),transparent_60%)]" />

      <div className="container relative z-10 mx-auto flex flex-col gap-14 px-4 py-24 sm:px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8">
        <div className="max-w-2xl space-y-8">
          <Badge className="border-0 bg-white/10 text-cyan-200 backdrop-blur">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase">GLOBIS TECH GUILD</span>
          </Badge>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              MBA視点で未来を描く
              <span className="block bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
                "いけてる"プロダクトを共創するコミュニティ
              </span>
            </h1>
            <p className="text-lg text-slate-200/90 sm:text-xl">
              ビジネスとテクノロジーが交差する最前線で、戦略設計から開発実装までを横断的に磨き合うギルドです。
              洗練されたアウトプットを追求する仲間と共に、次のプロダクト体験をデザインしませんか？
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button
              className="rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-8 py-6 text-base font-semibold text-slate-900 shadow-[0_20px_45px_-20px_rgba(56,189,248,0.9)] transition-transform hover:-translate-y-0.5"
              onClick={() => document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })}
            >
              コミュニティに参加する
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white/40 bg-white/5 px-8 py-6 text-base text-white backdrop-blur hover:bg-white/10"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              活動内容を見る
            </Button>
          </div>

          <div className="grid gap-4 pt-6 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-colors hover:border-cyan-300/60 hover:bg-white/10"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-500/20 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-white/90">{title}</h3>
                <p className="mt-2 text-sm text-slate-200/70">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden w-full max-w-md self-stretch lg:block">
          <div className="absolute -left-10 top-12 h-28 w-28 rounded-3xl bg-gradient-to-br from-cyan-400/60 to-blue-500/40 blur-2xl" />
          <div className="absolute -right-8 bottom-10 h-24 w-24 rounded-full bg-gradient-to-br from-purple-400/50 to-pink-500/40 blur-3xl" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">Insights</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">最新のナレッジが集まる</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-200/80">
                SaaS開発、AI活用、事業グロースなど、先端領域の議論が日常的に生まれています。ビジュアル・UI観点のフィードバックも手厚く、質の高いアウトプットを目指す人に最適です。
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-slate-200/70">
                <span className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1">Design Review</span>
                <span className="rounded-full border border-blue-400/40 bg-blue-400/10 px-3 py-1">Tech Strategy</span>
                <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-3 py-1">Growth Hack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
