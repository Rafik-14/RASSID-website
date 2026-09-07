import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import Intro from '../components/sections/Intro'
import Features from '../components/sections/Features'
import Platform from '../components/sections/Platform'
import Stats from '../components/sections/Stats'
import About from '../components/sections/About'
import Testimonial from '../components/sections/Testimonial'
import FAQ from '../components/sections/FAQ'
import CTA from '../components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Features />
        {/* the two surfaces: field app + office console, one operation */}
        <Platform />
        {/* dark chapter: proof flows into the operational story */}
        <Stats />
        <About />
        <Testimonial />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
