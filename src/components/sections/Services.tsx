'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { Plane, Globe, Map, FileText, ShieldCheck, Hotel, Landmark, CreditCard, ArrowRight, UserCheck, Car } from 'lucide-react'

const Services = () => {
  const services = [
    { title: 'International Tickets', desc: 'Global flight assistance with optimized routes and premium seating options.', icon: Plane },
    { title: 'Visitor Visa', desc: 'Expert guidance for documentation and hassle-free visa processing worldwide.', icon: ShieldCheck },
    { title: 'Tour Packages', desc: 'Bespoke domestic & international itineraries curated for the discerning traveler.', icon: Globe },
    { title: 'Hotel Bookings', desc: 'Exclusive access to handpicked luxury stays and five-star accommodations.', icon: Hotel },
    { title: 'Passport Services', desc: 'Streamlined assistance for new applications, renewals, and expedited processing.', icon: FileText },
    { title: 'Forex Services', desc: 'Secure currency exchange with competitive rates and global reliability.', icon: CreditCard },
    { title: 'Overseas Insurance', desc: 'Comprehensive medical and travel coverage for ultimate peace of mind.', icon: Landmark },
    { title: 'Car Rental', desc: 'Chauffeur-driven or self-drive luxury vehicles for seamless local travel.', icon: Car },
  ]

  return (
    <section id="services" className="py-16 md:py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/[0.02] rounded-bl-[200px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-primary/[0.01] rounded-tr-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <SectionHeader 
            title="Bespoke Travel Solutions for the Global Explorer" 
            subtitle="The Jade Portfolio" 
            align="left"
            className="mb-0 max-w-2xl"
          />
          <div className="hidden lg:block pb-2">
            <p className="text-body text-sm max-w-xs leading-relaxed italic opacity-70">
              &quot;Precision in every detail, care in every connection. We handle the complexity, you embrace the journey.&quot;
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: 'circOut' }}
              className="group cursor-default"
            >
              <div className="h-full flex flex-col relative p-8 rounded-[32px] transition-all duration-700 hover:bg-surface hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
                {/* Icon Container with subtle animation */}
                <div className="mb-8 relative inline-block">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-black/[0.03] flex items-center justify-center text-heading group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500 ease-spring relative z-10 shadow-sm group-hover:shadow-xl group-hover:shadow-primary/20">
                    <service.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="absolute -inset-2 bg-primary/5 rounded-3xl scale-0 group-hover:scale-100 transition-transform duration-700 -z-0" />
                </div>

                <h3 className="text-xl font-serif text-heading mb-4 tracking-tight group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </h3>
                
                <p className="text-sm text-body leading-relaxed mb-8 flex-grow opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                  {service.desc}
                </p>
                
                <div className="flex items-center gap-3 text-primary font-bold text-[10px] uppercase tracking-[0.2em] cursor-pointer group/link">
                  <span className="relative">
                    Inquire Details
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover/link:w-full transition-all duration-500" />
                  </span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Services }
