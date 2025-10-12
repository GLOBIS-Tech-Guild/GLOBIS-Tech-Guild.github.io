import { ImageWithFallback } from './figma/ImageWithFallback'
import { Calendar, Users, Presentation, BookOpen, Coffee, Rocket } from 'lucide-react'
import techBackground from '../assets/tech.png'

export default function Activities() {
  const activities = [
    {
      icon: Presentation,
      title: 'LTイベント',
      description:
        '知見や技術ネタを5~10分でシェアするライトニングトークイベント。多様なトピックに触れ新たな発見を促す発表会です。',
      image:
        'https://images.unsplash.com/photo-1733412505442-36cfa59a4240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBkYXJrJTIwc2NyZWVufGVufDF8fHx8MTc1OTkxNDcyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '毎月第2金曜日',
      participants: '30-50名',
    },
    {
      icon: BookOpen,
      title: '技術勉強会',
      description:
        '一つのテーマを深く探求する参加型の勉強会。最新技術の動向や理論を、議論を交えながら学び合います。',
      image:
        'https://images.unsplash.com/photo-1758523669926-048be897285e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29tbXVuaXR5JTIwbWVldGluZ3xlbnwxfHx8fDE3NTk5MTQ3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '毎月第3土曜日',
      participants: '20-40名',
    },
    {
      icon: Coffee,
      title: '交流会',
      description:
        'コーヒーを片手に、技術やキャリアについて語り合う場。偶然の出会いや新しいアイデアを生み出します。',
      image:
        'https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3Nob3AlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1OTkxNDcyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '随時開催',
      participants: '15-30名',
    },
    {
      icon: Rocket,
      title: 'プロダクト開発',
      description:
        'アイデアを形にする、チームでの実践開発プロジェクト。企画からリリースまで、一連の流れを一気通貫で実施します。',
      image:
        'https://images.unsplash.com/photo-1733412505442-36cfa59a4240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBkYXJrJTIwc2NyZWVufGVufDF8fHx8MTc1OTkxNDcyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '3ヶ月プロジェクト',
      participants: '5-10名',
    },
  ]

  return (
    <section className="relative py-20 overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src={techBackground}
          alt=""
          className="w-full h-full object-cover blur-3xl opacity-10"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/80" aria-hidden="true" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-6">活動内容</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            開発・グロース・チーム運営を軸に、
            <span className="text-cyan-400">参加者同士が実践的な知見を交換し</span>
            <br />
            共に成長を目指す活動を行います。
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <activity.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl text-white mb-3">{activity.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{activity.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{activity.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{activity.participants}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TODO: Stats */}
        {/* <div className="mt-20 grid md:grid-cols-4 gap-8">
          {[
            { label: "アクティブメンバー", value: "200+", color: "text-cyan-400" },
            { label: "開催イベント数", value: "50+", color: "text-blue-400" },
            { label: "プロジェクト", value: "30+", color: "text-purple-400" },
            { label: "企業パートナー", value: "15+", color: "text-green-400" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-5xl mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
