'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const imageRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }
  }, [])

  return (
    <section ref={containerRef} id="about" className="bg-white section-padding overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Visual Heritage */}
            <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'circOut' }}
            className="lg:col-span-5 relative"
            >
            <div ref={imageRef} className="relative z-10">
                <div className="aspect-[3/4] bg-surface rounded-[48px] overflow-hidden shadow-2xl relative border border-black/[0.03]">
                <img 
                    src="/images/assets/generated-expert.png" 
                    alt="The Jade Concierge"
                    className="w-full h-full object-cover scale-105 transition-transform duration-1000"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/30 via-transparent to-transparent pointer-events-none" />
                </div>
                
                {/* Heritage Stamp */}
                <div className="absolute -bottom-10 -right-10 w-44 h-44 glass rounded-full flex items-center justify-center text-center p-6 shadow-2xl border-white/40 z-20 backdrop-blur-2xl">
                <div>
                    <div className="text-4xl font-serif text-primary leading-none mb-2">15+</div>
                    <div className="text-[9px] uppercase tracking-[0.3em] text-heading font-bold leading-tight">
                    Years of <br />Travel Expertise
                    </div>
                </div>
                </div>
            </div>

            {/* Abstract Decoration */}
            <div className="absolute -top-16 -left-16 w-80 h-80 bg-primary/[0.03] rounded-full blur-[120px] -z-10" />
            </motion.div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7">
            <SectionHeader 
                title="Expert Help for Your Perfect Trip" 
                subtitle="Our Heritage"
                align="left"
                className="mb-12"
            />
            
            <div className="space-y-10">
                <p className="text-2xl md:text-3xl font-serif text-heading leading-relaxed italic opacity-90 tracking-tight">
                &quot;We make luxury travel easy by taking care of every little detail for you.&quot;
                </p>
                
                <p className="text-body leading-loose text-lg font-light opacity-80">
                At Jade Tours & Travels, we do more than just book flights. With over 15 years of experience, our team handles everything—from simple local trips to complex international journeys.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-black/[0.05]">
                <div className="group">
                    <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-[1px] bg-primary/40 group-hover:w-16 group-hover:bg-primary transition-all duration-700" />
                    <h4 className="text-heading font-bold text-[10px] uppercase tracking-[0.3em]">Our Promise</h4>
                    </div>
                    <p className="text-base text-body font-light leading-relaxed">To provide reliable service and a smooth travel experience from the moment you contact us.</p>
                </div>
                <div className="group">
                    <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-[1px] bg-primary/40 group-hover:w-16 group-hover:bg-primary transition-all duration-700" />
                    <h4 className="text-heading font-bold text-[10px] uppercase tracking-[0.3em]">Our Expertise</h4>
                    </div>
                    <p className="text-base text-body font-light leading-relaxed">Combining 15 years of travel knowledge with personal care for every customer.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export { About }
