'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { Clock, Star, Check, ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'

const Packages = () => {
  const packages = [
    {
      title: 'Singapore City Explorer',
      duration: '5 Days / 4 Nights',
      price: '₹48,500',
      image: '/images/assets/singapore.png',
      inclusions: ['Flights', '4★ Hotel', 'City Tour'],
      rating: 4.8,
      tag: 'Best Seller'
    },
    {
      title: 'Bali Honeymoon Special',
      duration: '7 Days / 6 Nights',
      price: '₹62,500',
      image: '/images/assets/insta-post-2.jpg',
      inclusions: ['Private Villa', 'Luxury Spa', 'Island Tour'],
      rating: 4.9,
      tag: 'Romantic'
    },
    {
      title: 'Kashmir Heritage Tour',
      duration: '6 Days / 5 Nights',
      price: '₹28,900',
      image: '/images/assets/insta-post-5.jpg',
      inclusions: ['Houseboat Stay', 'Shikara Ride', 'Meals'],
      rating: 4.7,
      tag: 'Cultural'
    },
  ]

  return (
    <section id="packages" className="bg-ivory section-padding">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-10 md:mb-16">
            <SectionHeader 
                title="Signature Journeys Curated for You" 
                subtitle="Featured Collections" 
                align="left"
                className="mb-0"
                description="Experience the pinnacle of luxury with our exclusively designed signature tours."
            />
            <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-body opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                    <ArrowRight className="rotate-180" size={20} />
                </div>
                <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-primary cursor-pointer shadow-sm hover:shadow-lg transition-all">
                    <ArrowRight size={20} />
                </div>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              <div className="card-premium h-full flex flex-col group">
                {/* Image Section */}
                <div className="aspect-[16/11] relative overflow-hidden rounded-t-[31px]">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-premium group-hover:scale-105" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-6 left-6">
                    <div className="glass px-4 py-1.5 rounded-full border-white/20">
                        <span className="text-[8px] font-bold text-heading uppercase tracking-[0.2em]">{pkg.tag}</span>
                    </div>
                  </div>

                  {/* Rating Corner */}
                  <div className="absolute top-6 right-6 glass px-3 py-1.5 rounded-2xl flex items-center gap-1.5 shadow-xl border-white/20">
                    <Star size={10} fill="#059669" className="text-primary" />
                    <span className="text-[10px] font-bold text-heading">{pkg.rating}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock size={12} className="text-primary/60" />
                    <span className="text-[9px] font-bold text-body/60 uppercase tracking-[0.2em]">{pkg.duration}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif text-heading mb-6 leading-tight group-hover:text-primary transition-colors duration-500">
                    {pkg.title}
                  </h3>

                  {/* Inclusions */}
                  <div className="space-y-4 mb-10">
                    {pkg.inclusions.map(inc => (
                      <div key={inc} className="flex items-center gap-4 text-body/80 text-sm">
                        <div className="w-4 h-4 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                            <Check size={10} strokeWidth={3} />
                        </div>
                        <span className="font-light">{inc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & CTA */}
                  <div className="mt-auto pt-8 border-t border-black/[0.03] flex items-center justify-between gap-6">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-body/40 font-bold block mb-1">Starting from</span>
                      <div className="text-2xl font-serif text-heading tracking-tight">
                        {pkg.price}
                      </div>
                    </div>
                    <Button variant="secondary" className="h-12 w-12 p-0 flex items-center justify-center">
                        <ArrowRight size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-col items-center">
          <Button variant="primary" className="h-16 px-12">
            Explore Signature Collections
          </Button>
          <p className="mt-6 text-[9px] text-body/40 uppercase tracking-[0.2em] font-bold">150+ bespoke itineraries available</p>
        </div>
      </div>
    </section>
  )
}

export { Packages }
