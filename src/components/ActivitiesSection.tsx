import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Mic, Users, Wrench, Code, Share2, TrendingUp, UserCheck, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import HeroSectionimg from "../assets/HeroSection.svg";

export function ActivitiesSection() {
  const activities = [
    {
      icon: Mic,
      title: "LT（ライトニングトーク）イベント",
      description: "5分間の短時間で技術的な発見や学びを共有",
      image:
        "https://images.unsplash.com/photo-1559146820-a75deba24b58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzZW50YXRpb24lMjBzbGlkZXMlMjBzY3JlZW4lMjB0ZWNofGVufDF8fHx8MTc1OTI1NDA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tint: "from-orange-500/20 via-rose-500/20 to-transparent"
    },
    {
      icon: Users,
      title: "パネルディスカッション",
      description: "業界のエキスパートによる深い議論と知識共有",
      image:
        "https://images.unsplash.com/photo-1697059361461-b81d0e98c3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcm9vbSUyMGRpc2N1c3Npb24lMjBzZXR1cHxlbnwxfHx8fDE3NTkyNTQwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tint: "from-blue-500/20 via-indigo-500/20 to-transparent"
    },
    {
      icon: Wrench,
      title: "ワークイベント",
      description: "実践的なスキル向上のためのハンズオンワークショップ",
      image:
        "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc2hvcCUyMHByb2dyYW1taW5nJTIwc2V0dXB8ZW58MXx8fHwxNzU5MjU0MTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tint: "from-emerald-500/20 via-teal-500/20 to-transparent"
    },
    {
      icon: Code,
      title: "プロダクト開発（予定）",
      description: "コミュニティメンバーによる共同プロダクト開発",
      image:
        "https://images.unsplash.com/photo-1625459201773-9b2386f53ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29tcHV0ZXIlMjBjb2RlfGVufDF8fHx8MTc1OTI1NDE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tint: "from-purple-500/20 via-fuchsia-500/20 to-transparent"
    }
  ];

  const sharingTopics = [
    {
      icon: Share2,
      title: "ツールシェア",
      description: "開発効率を上げるツールの共有"
    },
    {
      icon: Code,
      title: "プロダクト開発ノウハウ",
      description: "実践的な開発手法の共有"
    },
    {
      icon: TrendingUp,
      title: "グロースハック",
      description: "プロダクト成長のための戦略"
    },
    {
      icon: UserCheck,
      title: "チームマネジメント",
      description: "効果的なチーム運営手法"
    }
  ];

  return (
    <section id="activities" className="relative py-24 text-slate-100 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <ImageWithFallback
          src={HeroSectionimg}
          alt="Workspace backdrop"
          className="h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" />
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative">
        <div className="text-center space-y-6 mb-16">
          <Badge className="w-fit mx-auto bg-white/10 text-slate-100 border-white/20 backdrop-blur">
            <Calendar className="w-4 h-4 mr-2 text-sky-300" />
            Activities
          </Badge>
          <h2 className="text-3xl md:text-4xl font-semibold">活動内容</h2>
          <p className="mx-auto max-w-3xl text-base md:text-lg text-slate-300 leading-relaxed">
            多様なイベントと情報共有を通じて、エンジニアのスキルアップとネットワーク構築をサポートします。
            スタジオライティングのような落ち着いたトーンで、集中した学びと交流を実現します。
          </p>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">エンジニア同士の情報共有</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              日々の開発で得た知見やツールを共有し、コミュニティ全体のスキル向上を図ります。
              シックなビジュアルで落ち着いてインサイトを交換できるスペースです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sharingTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <Card
                  key={index}
                  className="border border-white/10 bg-white/5 text-slate-100 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="space-y-4 text-center">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                      <Icon className="h-7 w-7 text-white" />
                    </span>
                    <CardTitle className="text-base md:text-lg font-medium">{topic.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300 leading-relaxed">
                      {topic.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="space-y-10">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">イベント活動</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              定期的なイベントを通じて、学習と交流の機会を提供します。写真の光と影のコントラストが、
              HeroSectionの世界観と連続性を持たせています。
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card
                  key={index}
                  className="overflow-hidden border border-white/10 bg-white/5 text-slate-100 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={activity.image}
                      alt={activity.title}
                      className="h-full w-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${activity.tint}`} />
                    <div className="absolute inset-0 bg-slate-950/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                    <div className="absolute top-6 left-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {activity.title.includes("予定") && (
                      <div className="absolute top-6 right-6">
                        <Badge className="bg-white/15 text-white border border-white/30 backdrop-blur">
                          Coming Soon
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardHeader className="space-y-3">
                    <CardTitle className="text-lg font-medium leading-tight">
                      {activity.title}
                    </CardTitle>
                    <CardDescription className="text-slate-300 leading-relaxed">
                      {activity.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="group flex items-center text-sky-300 hover:text-sky-200 transition-colors cursor-pointer">
                      <span className="text-sm font-medium">詳細を見る</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
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
