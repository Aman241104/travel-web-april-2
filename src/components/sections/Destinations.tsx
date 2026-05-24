'use client'

import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionHeader } from '../ui/SectionHeader'
import { ArrowRight, MapPin, Sparkles } from 'lucide-react'
import { Button } from '../ui/Button'

gsap.registerPlugin(ScrollTrigger)

const Destinations = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  const destinations = [
    { name: 'Dubai', price: '₹45,000', image: '/images/assets/insta-post-3.jpg', category: 'Modern Luxury' },
    { name: 'Bali', price: '₹55,000', image: '/images/assets/insta-post-2.jpg', category: 'Tropical Escape' },
    { name: 'Thailand', price: '₹35,000', image: '/images/assets/thailand.png', category: 'Cultural Heart' },
    { name: 'Singapore', price: '₹48,000', image: '/images/assets/singapore.png', category: 'Urban Odyssey' },
    { name: 'Maldives', price: '₹75,000', image: '/images/assets/insta-post-4.jpg', category: 'Island Retreat' },
    { name: 'Kashmir', price: '₹25,000', image: '/images/assets/insta-post-5.jpg', category: 'Alpine Beauty' },
  ]

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth > 1024)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)

    let ctx = gsap.context(() => {
      if (isDesktop && sectionRef.current && triggerRef.current) {
        gsap.to(sectionRef.current, {
          x: () => -(sectionRef.current!.scrollWidth - window.innerWidth + 100),
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: () => `+=${sectionRef.current!.scrollWidth}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        })
      }
    }, triggerRef)

    return () => {
      ctx.revert()
      window.removeEventListener('resize', checkDesktop)
    }
  }, [isDesktop])

  return (
    <section id="destinations" className="bg-white section-padding overflow-hidden">
      <div ref={triggerRef}>
        <div className="container-wide mb-4 md:mb-6">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
             <SectionHeader 
               title="Amazing Places to Visit" 
               subtitle="Our Best Destinations" 
               align="left" 
               className="mb-0 max-w-2xl" 
               description="We've chosen the best places around the world for your next holiday."
             />
             <div className="flex items-center gap-6">
                <Button variant="secondary" className="hidden md:flex">Explore All 50+ <ArrowRight size={14} /></Button>
             </div>
           </div>
        </div>

        {isDesktop ? (
          <div className="h-auto py-2 flex items-center">
            <div ref={sectionRef} className="flex gap-8 px-6 md:px-12 lg:px-16 pr-[15vw] will-change-transform">
                {destinations.map((dest, i) => (
                <div key={dest.name} className="relative h-[55vh] w-[380px] shrink-0 rounded-[40px] overflow-hidden group shadow-2xl transition-all duration-700 hover:shadow-primary/20">
                    <img 
                        src={dest.image} 
                        alt={dest.name} 
                        className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" 
                        loading="lazy" 
                    />
                    
                    {/* Architectural Overlay - Stronger for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-deep/95 via-deep/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
                    
                    {/* Top Meta */}
                    <div className="absolute top-8 left-8">
                        <div className="glass px-4 py-1.5 rounded-full inline-flex items-center gap-2 border-white/20 backdrop-blur-md">
                            <Sparkles size={8} className="text-primary" />
                            <span className="text-[7px] font-bold text-white uppercase tracking-[0.2em]">{dest.category}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-10 left-8 right-8">
                        <div className="flex items-end justify-between gap-4 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-premium">
                            <div>
                                <div className="text-white/70 text-[9px] uppercase tracking-[0.2em] mb-1 font-bold flex items-center gap-2">
                                    <MapPin size={8} className="text-primary" />
                                    Starting at
                                </div>
                                <div className="text-white text-2xl font-serif leading-none tracking-tight">{dest.price}</div>
                            </div>
                            <span className="text-5xl font-serif text-white/10 select-none leading-none">0{i + 1}</span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-serif !text-white mb-6 leading-tight drop-shadow-lg">
                            {dest.name}
                        </h3>

                        <button className="w-full py-4 rounded-xl glass border-white/20 text-white text-[9px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-700 hover:bg-white hover:text-deep translate-y-2 group-hover:translate-y-0">
                            Discover the Journey
                        </button>
                    </div>
                </div>
                ))}
                
                {/* Final Scroll CTA */}
                <div className="w-[350px] h-[55vh] shrink-0 flex flex-col items-center justify-center text-center px-10 rounded-[40px] bg-surface group hover:bg-primary transition-all duration-700 border border-black/[0.03]">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-700">
                        <ArrowRight size={24} />
                    </div>
                    <h3 className="text-3xl font-serif text-heading mb-4 group-hover:text-white transition-colors leading-tight">Your Next Trip <br />Starts Here</h3>
                    <p className="text-body text-sm mb-8 group-hover:text-white/70 transition-colors font-light">Check out all 150+ amazing <br />destinations we offer.</p>
                    <button className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary group-hover:text-white border-b border-primary/20 group-hover:border-white/40 pb-2 transition-all">
                        View Complete Catalog
                    </button>
                </div>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 px-6 pb-8">
              {destinations.map((dest, i) => (
                <div key={dest.name} className="relative w-[85vw] aspect-[4/5] shrink-0 rounded-[32px] overflow-hidden shadow-xl snap-center">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/20 to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="text-white/60 text-[9px] uppercase tracking-[0.3em] mb-2 font-bold">{dest.category}</div>
                    <div className="text-primary text-xl font-bold mb-1">{dest.price}</div>
                    <h3 className="text-3xl font-serif !text-white leading-tight">{dest.name}</h3>
                  </div>
                  <div className="absolute top-6 right-6">
                    <span className="text-white/20 font-serif text-4xl">0{i + 1}</span>
                  </div>
                </div>
              ))}
              {/* Final Carousel Card */}
              <div className="w-[85vw] aspect-[4/5] shrink-0 rounded-[32px] bg-primary flex flex-col items-center justify-center text-center p-10 snap-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary mb-6 shadow-xl">
                      <ArrowRight size={20} />
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-4 leading-tight">Explore Our <br />Entire Catalog</h3>
                  <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/40 pb-2">
                      View All 150+
                  </button>
              </div>
            </div>
            <div className="px-6 pt-4 flex justify-center">
                <Button variant="primary" className="w-full h-16">Explore All 50+ Places</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export { Destinations }
