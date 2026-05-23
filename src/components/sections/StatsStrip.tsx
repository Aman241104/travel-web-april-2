'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const StatsStrip = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const stats = [
    { value: 1000, suffix: '+', label: 'Global Travelers' },
    { value: 100, suffix: '%', label: 'Tailored Support' },
    { value: 15, suffix: '+', label: 'Years of Mastery' },
    { value: 50, suffix: '+', label: 'Elite Destinations' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = document.querySelectorAll('.stat-value')
      
      counters.forEach((counter: any) => {
        const targetValue = parseInt(counter.getAttribute('data-value') || '0')
        
        gsap.to(counter, {
          innerText: targetValue,
          duration: 2.5,
          snap: { innerText: 1 },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: counter,
            start: 'top 95%',
          }
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef}
      className="bg-ivory py-12 md:py-16 border-b border-black/[0.03] relative z-10"
    >
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12">
            {stats.map((stat, i) => (
            <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1, ease: 'circOut' }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left relative group"
            >
                {/* Subtle Vertical Divider for Desktop */}
                {i < stats.length - 1 && (
                <div className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 w-[1px] h-16 bg-black/[0.04] hidden lg:block" />
                )}
                
                <div className="mb-4 flex items-baseline gap-1">
                <span 
                    className="stat-value text-5xl md:text-6xl font-serif text-heading tracking-tighter"
                    data-value={stat.value}
                >
                    0
                </span>
                <span className="text-2xl font-serif text-primary opacity-80">{stat.suffix}</span>
                </div>
                
                <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-body font-bold whitespace-nowrap opacity-60 group-hover:opacity-100 transition-opacity">
                    {stat.label}
                </span>
                </div>
            </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}

export { StatsStrip }
