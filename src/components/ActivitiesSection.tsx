import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Mic, Users, Wrench, Code, Share2, TrendingUp, UserCheck, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ActivitiesSection() {
  const activities = [
    {
      icon: Mic,
      title: "LT（ライトニングトーク）イベント",
      description: "5分間の短時間で技術的な発見や学びを共有",
      image: "https://images.unsplash.com/photo-1559146820-a75deba24b58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzZW50YXRpb24lMjBzbGlkZXMlMjBzY3JlZW4lMjB0ZWNofGVufDF8fHx8MTc1OTI1NDA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-orange-500/10 to-red-500/10"
    },
    {
      icon: Users,
      title: "パネルディスカッション",
      description: "業界のエキスパートによる深い議論と知識共有",
      image: "https://images.unsplash.com/photo-1697059361461-b81d0e98c3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcm9vbSUyMGRpc2N1c3Npb24lMjBzZXR1cHxlbnwxfHx8fDE3NTkyNTQwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      icon: Wrench,
      title: "ワークイベント",
      description: "実践的なスキル向上のためのハンズオンワークショップ",
      image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc2hvcCUyMHByb2dyYW1taW5nJTIwc2V0dXB8ZW58MXx8fHwxNzU5MjU0MTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: Code,
      title: "プロダクト開発（予定）",
      description: "コミュニティメンバーによる共同プロダクト開発",
      image: "https://images.unsplash.com/photo-1625459201773-9b2386f53ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29tcHV0ZXIlMjBjb2RlfGVufDF8fHx8MTc1OTI1NDE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-purple-500/10 to-pink-500/10"
    }
  ];

  const sharingTopics = [
    { 
      icon: Share2, 
      title: "ツールシェア", 
      description: "開発効率を上げるツールの共有",
      color: "text-blue-600",
      bg: "bg-blue-500/10"
    },
    { 
      icon: Code, 
      title: "プロダクト開発ノウハウ", 
      description: "実践的な開発手法の共有",
      color: "text-green-600",
      bg: "bg-green-500/10"
    },
    { 
      icon: TrendingUp, 
      title: "グロースハック", 
      description: "プロダクト成長のための戦略",
      color: "text-purple-600",
      bg: "bg-purple-500/10"
    },
    { 
      icon: UserCheck, 
      title: "チームマネジメント", 
      description: "効果的なチーム運営手法",
      color: "text-orange-600",
      bg: "bg-orange-500/10"
    }
  ];

  return (
    <section id="activities" className="relative overflow-hidden py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(12,74,110,0.35)_0%,rgba(76,29,149,0.25)_45%,transparent_95%)]" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <Badge className="mx-auto w-fit border-0 bg-white/10 px-4 py-2 text-cyan-200 backdrop-blur">
            <Calendar className="mr-2 h-4 w-4 text-cyan-300" />
            Activities
          </Badge>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            活動内容
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-200/80">
            多様なイベントと情報共有を通じて、エンジニアのスキルアップとネットワーク構築をサポートします。
            深い洞察とスマートなアウトプットを引き出すプログラムが揃っています。
          </p>
        </div>

        {/* Information Sharing Section */}
        <div className="mb-24">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-semibold text-white">
              エンジニア同士の情報共有
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-200/70">
              日々の開発で得た知見やツールを共有し、コミュニティ全体のスキル向上を図ります
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sharingTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <Card
                  key={index}
                  className="group border border-white/10 bg-white/[0.04] text-center shadow-[0_25px_45px_-30px_rgba(14,165,233,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/[0.07]"
                >
                  <CardHeader className="pb-4">
                    <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 ${topic.bg} transition-transform duration-300 group-hover:scale-105`}>
                      <Icon className={`h-8 w-8 ${topic.color}`} />
                    </div>
                    <CardTitle className="text-lg text-white">{topic.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed text-slate-200/70">{topic.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Events Section */}
        <div>
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-semibold text-white">
              イベント活動
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-200/70">
              定期的なイベントを通じて、学習と交流の機会を提供します
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card
                  key={index}
                  className="group overflow-hidden border border-white/10 bg-white/[0.05] shadow-[0_30px_55px_-35px_rgba(76,29,149,0.55)] transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-300/60 hover:bg-white/[0.08]"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <ImageWithFallback
                      src={activity.image}
                      alt={activity.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Floating icon */}
                    <div className="absolute top-6 left-6">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-gradient-to-br ${activity.gradient} backdrop-blur-xl shadow-xl`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Coming soon badge for future events */}
                    {activity.title.includes("予定") && (
                      <div className="absolute top-6 right-6">
                        <Badge className="border-0 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                          Coming Soon
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardHeader className="space-y-3">
                    <CardTitle className="text-lg leading-tight text-white transition-colors group-hover:text-cyan-200">
                      {activity.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed text-slate-200/70">
                      {activity.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center cursor-pointer text-cyan-300 transition-colors hover:text-cyan-200">
                      <span className="text-sm font-medium">詳細を見る</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}