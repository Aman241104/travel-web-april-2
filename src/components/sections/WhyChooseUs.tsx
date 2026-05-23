'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { CheckCircle, Shield, Zap, Heart, Map, Clock, ArrowRight } from 'lucide-react'

const WhyChooseUs = () => {
  const reasons = [
    { title: 'Personalized Planning', desc: 'We create custom travel plans based on what you like and your budget.', icon: Heart },
    { title: 'Transparent Pricing', desc: 'Clear prices with no hidden costs. You know exactly what you are paying for.', icon: Shield },
    { title: 'Quick Support', desc: 'Our team is here to help you 24/7 before, during, and after your trip.', icon: Zap },
    { title: 'End-to-End Assistance', desc: 'We handle everything, from your visa to your hotel, for a stress-free trip.', icon: CheckCircle },
    { title: 'Reliable Bookings', desc: 'We work directly with top airlines and luxury hotels to get you the best.', icon: Map },
    { title: 'Smooth Coordination', desc: 'Our local experts make sure your transfers and tours are always on time.', icon: Clock },
  ]

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.1" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 mb-16">
          <div className="max-w-2xl">
            <SectionHeader 
              title="Why Choose Jade Tours" 
              subtitle="The Jade Advantage" 
              align="left"
              className="mb-6"
            />
            <p className="text-body text-lg font-light leading-relaxed">
              We provide high-quality service by taking care of every detail and focusing on your needs.
            </p>
          </div>
          <div className="hidden lg:block pt-12">
            <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              className="group relative"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center text-heading group-hover:bg-primary group-hover:text-white transition-all duration-500 ease-spring z-10 relative">
                      <reason.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div className="absolute -inset-2 bg-primary/5 rounded-[24px] scale-0 group-hover:scale-100 transition-transform duration-500 -z-0" />
                  </div>
                  <div className="h-px flex-grow bg-black/[0.03] group-hover:bg-primary/10 transition-colors duration-500" />
                </div>
                
                <h3 className="text-xl font-serif text-heading mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-sm text-body leading-loose opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {reason.desc}
                </p>

                {/* Aesthetic Detail */}
                <div className="mt-8 flex items-center gap-2 text-primary font-bold text-[8px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                  Reliability Guaranteed <ArrowRight size={10} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing trust line */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-32 pt-12 border-t border-black/[0.03] text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-body/40 font-bold">
            Trusted by over 10,000 travelers since 2011
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export { WhyChooseUs }
