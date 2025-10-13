import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import GlobisTechGuildSVG from '../assets/globis_tech_guild.svg'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'コミュニティ', href: '#about' },
    { name: '活動内容', href: '#activities' },
    { name: 'イベント', href: '#events' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <img src={GlobisTechGuildSVG} alt="GLOBIS Tech Guild logo" className="h-8 w-auto" />
            <div className="flex items-center text-white ml-2">
              <span className="text-xl">GLOBIS</span>
              <span className="text-xl">Tech Guild</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* TODO: CTA Button */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
              参加する
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg mt-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-gray-300 hover:text-cyan-400 px-3 py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {/* TODO: CTA Button */}
              {/* <div className="px-3 py-2">
                <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-lg transition-all duration-300">
                  参加する
                </button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
