import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Activities from './components/Activities'
import Events from './components/Events'
import Committee from './components/Committee'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="activities">
          <Activities />
        </section>
        <section id="events">
          <Events />
        </section>
        <section id="committee">
          <Committee />
        </section>
      </main>
      <Footer />
    </div>
  )
}
