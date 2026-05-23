import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/sections/Hero'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Destinations } from '@/components/sections/Destinations'
import { Packages } from '@/components/sections/Packages'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Testimonials } from '@/components/sections/Testimonials'
import { AirTicketing } from '@/components/sections/AirTicketing'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/Footer'
import { WhatsAppCTA } from '@/components/WhatsAppCTA'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <StatsStrip />
      <About />
      <Services />
      <Destinations />
      <Packages />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <AirTicketing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppCTA />
    </main>
  )
}
