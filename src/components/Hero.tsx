import heroGif from '../assets/globis_tech_guild.gif'

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-screen">
      <img
        src={heroGif}
        alt="GLOBIS Tech Guild"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  )
}
