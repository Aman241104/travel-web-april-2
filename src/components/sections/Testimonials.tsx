'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { Star, Quote, ArrowRight, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

const Testimonials = () => {
  const [active, setActive] = useState(0)

  const reviews = [
    {
      name: 'Rahul Sharma',
      location: 'Mumbai',
      persona: 'The Luxury Explorer',
      text: 'Jade Tours handled our Dubai trip perfectly. The flight connections were seamless and the hotel choice was exactly what we needed for our family. Their attention to seating and transfers made all the difference.',
      rating: 5,
      image: '/images/customer/image_copy_1.png'
    },
    {
      name: 'Priya Iyer',
      location: 'Bangalore',
      persona: 'The Heritage Seeker',
      text: 'Extremely reliable visa assistance. I was worried about my Europe visa documentation, but their team guided me through every step flawlessly. We had a stress-free honeymoon thanks to their meticulous planning.',
      rating: 5,
      image: '/images/customer/image_copy_2.png'
    },
    {
      name: 'Amit Patel',
      location: 'Ahmedabad',
      persona: 'The Business Traveler',
      text: 'Best rates for international flight bookings. Their route assistance saved us both time and money on our recent corporate trip to Singapore. Professionalism at its finest.',
      rating: 5,
      image: '/images/customer/image_copy_3.png'
    }
  ]

  const next = () => setActive((active + 1) % reviews.length)
  const prev = () => setActive((active - 1 + reviews.length) % reviews.length)

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white overflow-hidden relative">
      {/* Decorative Background Texture */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.02]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-black rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-black rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: The Visual & Navigation (5 Columns) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <motion.div 
                key={active}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'circOut' }}
                className="aspect-[4/5] bg-surface rounded-[40px] overflow-hidden shadow-2xl relative group"
              >
                <img 
                  src={reviews[active].image} 
                  alt={reviews[active].name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8">
                    <div className="glass px-4 py-2 rounded-full inline-flex items-center gap-2 border-white/10 mb-2">
                        <span className="text-[9px] font-bold text-white uppercase tracking-[0.2em]">{reviews[active].persona}</span>
                    </div>
                </div>
              </motion.div>

              {/* Navigation Controls */}
              <div className="flex gap-4 mt-8">
                <button 
                  onClick={prev}
                  className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-500"
                >
                  <ArrowLeft size={18} />
                </button>
                <button 
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-500"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: The Testimony (7 Columns) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionHeader 
              title="Voices of the Worldly & Refined" 
              subtitle="Testimonials" 
              align="left"
              className="mb-12"
            />
            
            <div className="relative h-[400px]">
              <motion.div 
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={14} fill="#059669" className="text-primary" />
                  ))}
                </div>

                <Quote className="text-primary/10 w-20 h-20 absolute -top-8 -left-8 -z-10" />
                
                <blockquote className="text-2xl md:text-3xl font-serif text-heading leading-[1.6] mb-12 italic">
                  &quot;{reviews[active].text}&quot;
                </blockquote>

                <div className="flex items-center gap-6">
                  <div className="w-px h-12 bg-primary/20" />
                  <div>
                    <h4 className="text-lg font-bold text-heading leading-none mb-1">{reviews[active].name}</h4>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-body/60 font-bold">{reviews[active].location} • Verified Journey</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Trusted indicators */}
            <div className="mt-20 pt-8 border-t border-black/[0.05] flex flex-wrap gap-8 items-center">
                <span className="text-[9px] font-bold text-body/40 uppercase tracking-[0.3em]">Highly Rated On</span>
                <div className="flex gap-6 opacity-30">
                    <span className="font-serif text-lg font-bold italic tracking-tighter">Google Reviews</span>
                    <span className="font-serif text-lg font-bold italic tracking-tighter">Trustpilot</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export { Testimonials }
