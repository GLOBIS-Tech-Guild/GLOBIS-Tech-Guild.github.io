import { Twitter, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-xl text-white mb-4">GLOBIS Tech Guild</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              技術者のためのコミュニティプラットフォーム。
              <br />
              学び、共有し、共に成長する場所です。
            </p>
            {/* TODO: SHS Icon */}
            {/* <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">クイックリンク</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  コミュニティ
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  活動内容
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  イベント
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">© 2025 GLOBIS Tech Guild. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
