import { ImageWithFallback } from './figma/ImageWithFallback'
import meetingImage from '../assets/meeting.png'

export default function Committee() {
  const committeeMembers = [
    {
      name: '山田 太郎',
      expertise: 'フロントエンド開発',
      image: meetingImage,
    },
    {
      name: '佐藤 花子',
      expertise: 'バックエンド開発',
      image: meetingImage,
    },
    {
      name: '田中 一郎',
      expertise: 'インフラ・DevOps',
      image: meetingImage,
    },
    {
      name: '鈴木 美咲',
      expertise: 'UI/UXデザイン',
      image: meetingImage,
    },
  ]

  return (
    <section className="relative py-20 overflow-hidden bg-gray-900">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-6">幹事一覧</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            GLOBIS Tech Guildを運営する
            <span className="text-cyan-400">情熱あふれる幹事メンバー</span>
            をご紹介します。
          </p>
        </div>

        {/* Committee Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-700">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 text-sm mb-2">得意領域</p>
                <p className="text-gray-300 leading-relaxed">{member.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
