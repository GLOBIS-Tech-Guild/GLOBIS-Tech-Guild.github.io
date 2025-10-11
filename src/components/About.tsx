import { Wrench, BookOpen, TrendingUp, Users } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Wrench,
      title: '開発ツール',
      description:
        '最新の開発ツールやフレームワークの活用方法を学び、効率的な開発環境を構築します。',
    },
    {
      icon: BookOpen,
      title: '開発ノウハウ',
      description:
        '実践的なコーディング技術やベストプラクティスを共有し、開発スキルを向上させます。',
    },
    {
      icon: TrendingUp,
      title: 'グロースハック',
      description: 'プロダクトの成長戦略やユーザー獲得のための施策を学び、ビジネス視点を養います。',
    },
    {
      icon: Users,
      title: 'チームマネジメント',
      description:
        'アジャイル開発やチーム運営のノウハウを習得し、効果的なチームビルディングを実現します。',
    },
  ]

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-6">コミュニティ概要</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            GLOBIS Tech Guildは、技術者の成長とイノベーションを支援する
            <span className="text-cyan-400"> プロフェッショナルコミュニティ</span>です。
            共に学び、共に成長し、テクノロジーの未来を創造しましょう。
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* TODO: CTA Section */}
        {/* <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-8 rounded-2xl">
            <h3 className="text-3xl text-white mb-4">今すぐ参加しませんか？</h3>
            <p className="text-cyan-100 mb-6 text-lg">
              技術者としての次のステップを踏み出しましょう
            </p>
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              メンバー登録
            </button>
          </div>
        </div> */}
      </div>
    </section>
  )
}
