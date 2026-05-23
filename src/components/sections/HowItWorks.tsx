'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionHeader } from '../ui/SectionHeader'
import { Mail, Search, CheckCircle2, PlaneLanding } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const HowItWorks = () => {
  const lineRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const steps = [
    { 
      title: 'Contact Us', 
      desc: 'Tell us where you want to go and what your budget is.',
      icon: Mail,
      detail: 'Step 1'
    },
    { 
      title: 'Get Your Plan', 
      desc: 'Get custom travel plans and the best flight options to choose from.',
      icon: Search,
      detail: 'Step 2'
    },
    { 
      title: 'Easy Booking', 
      desc: 'We handle all the bookings and paperwork for your trip.',
      icon: CheckCircle2,
      detail: 'Step 3'
    },
    { 
      title: 'Travel & Enjoy', 
      desc: 'Enjoy your trip with 24/7 support from our team.',
      icon: PlaneLanding,
      detail: 'Step 4'
    },
  ]

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (lineRef.current && containerRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
              end: "bottom 80%",
              scrub: 1.5,
            },
          }
        )
      }
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 md:px-12 bg-white overflow-hidden relative">
      {/* Decorative vertical lines for background depth */}
      <div className="absolute inset-0 flex justify-around pointer-events-none opacity-[0.02]">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-black" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          title="How to Book Your Trip" 
          subtitle="Easy Steps" 
          className="mb-16"
        />
        
        <div className="relative mt-20">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-10 left-0 right-0 h-[1px] bg-black/[0.05] hidden lg:block" />
          <div 
            ref={lineRef}
            className="absolute top-10 left-0 right-0 h-[1px] bg-primary origin-left hidden lg:block" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="relative group flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                {/* Step Marker */}
                <div className="relative mb-12">
                  <div className="w-20 h-20 rounded-[24px] bg-white border border-black/[0.05] shadow-sm flex items-center justify-center group-hover:border-primary/20 group-hover:shadow-xl group-hover:shadow-primary/5 transition-all duration-700 relative z-20 overflow-hidden">
                    <step.icon size={28} strokeWidth={1} className="text-heading group-hover:text-primary transition-colors duration-500" />
                    {/* Hover reveal bg */}
                    <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-heading text-white flex items-center justify-center text-[10px] font-bold z-30 border-4 border-white">
                    0{i + 1}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] font-bold text-primary uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {step.detail}
                    </span>
                    <h3 className="text-2xl font-serif text-heading tracking-tight leading-tight group-hover:text-primary transition-colors duration-500">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-body leading-relaxed max-w-[240px]">
                    {step.desc}
                  </p>
                </div>

                {/* Mobile specific line (vertical) */}
                {i < steps.length - 1 && (
                    <div className="w-[1px] h-12 bg-black/[0.05] mt-12 lg:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical footnote */}
        <div className="mt-32 flex justify-center">
            <div className="glass px-6 py-3 rounded-full flex items-center gap-4 border-black/[0.03]">
                <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full bg-surface border border-white flex items-center justify-center overflow-hidden">
                            <img src={`/images/customer/image_copy_${i+1}.png`} alt="" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
                <span className="text-[9px] font-bold text-body/60 uppercase tracking-[0.2em]">Join 10,000+ stress-free travelers</span>
            </div>
        </div>
      </div>
    </section>
  )
}

export { HowItWorks }
