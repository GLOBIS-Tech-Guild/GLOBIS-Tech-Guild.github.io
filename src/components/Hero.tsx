import { useState, useEffect } from 'react'
import heroGif from '../assets/globis_tech_guild.gif'
import heroPng from '../assets/globis_tech_guild.png'
import heroSPGif from '../assets/globis_tech_guild_sp.gif'
import heroSPPng from '../assets/globis_tech_guild_sp.png'

export default function Hero() {
  const [showGif, setShowGif] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-screen">
      {/* PC用 */}
      <img
        src={showGif ? heroGif : heroPng}
        alt="GLOBIS Tech Guild"
        className="absolute w-full h-full object-cover"
      />
      {/* SP用 */}
      <img
        src={showGif ? heroSPGif : heroSPPng}
        alt="GLOBIS Tech Guild"
        className="block md:hidden absolute w-full min-h-full object-cover"
      />
    </section>
  )
}
