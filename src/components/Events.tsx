import { MapPin } from 'lucide-react'

export default function Events() {
  const upcomingEvents = [
    {
      date: '2025.11.※※',
      time: '※※:※※-※※:※※',
      title: '※ 企画中',
      description: '※ 企画中',
      location: '※ 企画中',
      attendees: 45,
      status: '企画中',
      tags: ['AI', 'エンジニアリング', '生存戦略'],
    },
  ]

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-6">イベント情報</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            技術の最前線を学び、仲間と切磋琢磨できる
            <span className="text-cyan-400"> 充実したイベント</span>をご用意しています。
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Date & Time */}
                <div className="flex-shrink-0">
                  <div className="bg-cyan-500/20 rounded-lg p-4 text-center min-w-[120px]">
                    <div className="text-cyan-400 text-sm">DATE</div>
                    <div className="text-white text-lg">{event.date}</div>
                    <div className="text-gray-300 text-sm">{event.time}</div>
                  </div>
                </div>

                {/* Event Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        event.status === '募集中'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : event.status === '企画中'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>

                  <h3 className="text-2xl text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    {/* TODO: 参加予定人数 */}
                    {/* <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees}名参加予定</span>
                    </div> */}
                  </div>
                </div>

                {/* TODO: CTA */}
                {/* <div className="flex-shrink-0">
                  <button
                    className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                      event.status === '募集中'
                        ? 'bg-cyan-500 hover:bg-cyan-600 text-white transform hover:scale-105'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={event.status === '満員'}
                  >
                    {event.status === '募集中' ? '参加申込' : '満員御礼'}
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* TODO: Calendar Link */}
        {/* <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg border border-gray-600 hover:border-cyan-500 transition-all duration-300">
            <Calendar className="w-5 h-5" />
            すべてのイベントを見る
          </button>
        </div> */}
      </div>
    </section>
  )
}
