'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '../ui/Button'
import { ArrowRight, Play } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Hero = () => {
  const trustChips = ['Personalized Trips', 'Exclusive Access', 'Custom Travel Plans', 'Help Anytime']
  const titleRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  useEffect(() => {
    if (titleRef.current) {
      // Create a copy of the current children to preserve their styling
      const children = Array.from(titleRef.current.childNodes);
      titleRef.current.innerHTML = '';
      
      children.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          const words = node.textContent?.trim().split(/\s+/) || [];
          words.forEach(word => {
            if (word) {
              const span = document.createElement('span');
              span.className = 'inline-block overflow-hidden mr-[0.2em] !text-white';
              span.innerHTML = `<span class="inline-block translate-y-full !text-white">${word}</span>`;
              titleRef.current?.appendChild(span);
            }
          });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node as HTMLElement;
          if (el.tagName === 'BR') {
            titleRef.current?.appendChild(document.createElement('br'));
          } else {
            const span = document.createElement('span');
            span.className = 'inline-block overflow-hidden mr-[0.2em]';
            // Clone the element to keep its classes and style
            const inner = el.cloneNode(true) as HTMLElement;
            inner.classList.add('inline-block', 'translate-y-full');
            span.appendChild(inner);
            titleRef.current?.appendChild(span);
          }
        }
      });

      gsap.to(titleRef.current.querySelectorAll('.translate-y-full'), {
        y: 0,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.1,
      })
    }
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* Cinematic Background Layer */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        {/* Localized Left Gradient: Anchors text with high contrast without muddying the whole frame */}
        <div 
          className="absolute inset-0 z-10" 
          style={{ 
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.45) 50%, transparent 100%)' 
          }} 
        />
        {/* Subtle Emerald Edge Tint - Adds luxury without the mud */}
        <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,rgba(5,150,103,0.15)_0%,transparent_15%,transparent_85%,rgba(5,150,103,0.1)_100%)]" />
        {/* Deep Vignette for focus */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_50%,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          poster="/images/assets/image.png"
        >
          <source src="/images/24541-343454486.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Main Content Area */}
      <div className="container-wide relative z-20 w-full pt-24 pb-8 flex-grow flex flex-col justify-center">
        <div className="max-w-4xl">
          <motion.div style={{ opacity }}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-primary"></div>
              <span className="text-primary font-bold text-[11px] uppercase tracking-[0.6em] drop-shadow-md">The Art of Living</span>
            </motion.div>

            <h1 
              ref={titleRef}
              className="text-6xl md:text-8xl lg:text-[110px] font-serif !text-white leading-[1.1] mb-8 tracking-tight drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)] opacity-100"
            >
              Luxury Travel. <br />
              <span className="text-primary italic font-light">Made</span> Simple.
            </h1>
            
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed mb-10 max-w-2xl font-light text-balance drop-shadow-md">
              We plan every detail of your trip so you can travel without any stress.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              <Button 
                isMagnetic 
                variant="primary" 
                className="w-full sm:w-auto h-16 px-12 text-[10px] group shadow-[0_20px_50px_-10px_rgba(5,150,105,0.4)] border border-primary/40 bg-[#059669] hover:bg-[#047857]"
              >
                Start Planning <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform duration-500" />
              </Button>
              
              <button className="group flex items-center gap-4 sm:gap-6 text-white hover:text-white transition-all py-3 relative">
                <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500 relative overflow-hidden backdrop-blur-md">
                  <Play size={20} fill="currentColor" className="ml-1 relative z-10 transition-transform group-hover:scale-110 duration-500 ease-spring" />
                  <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full ease-premium" />
                </div>
                <div className="flex items-center gap-4 text-left">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold leading-none">Explore Reel</span>
                    <div className="w-[1px] h-3 bg-white/30" />
                    <span className="text-[8px] text-white/60 uppercase tracking-[0.1em] font-bold leading-none">1:45 Experience</span>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Bar - Positioned relative at bottom of section */}
      <div className="relative z-20 w-full pb-16 mt-auto">
        <div className="container-wide flex flex-wrap items-center gap-x-12 gap-y-6">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold mr-4">Brand Promises</span>
            {trustChips.map((chip, i) => (
            <motion.div
                key={chip}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 1 }}
                className="flex items-center gap-6 group cursor-default"
            >
                <div className="w-[1px] h-4 bg-white/30 group-hover:bg-primary transition-colors duration-500" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/80 group-hover:text-white transition-colors duration-500 font-medium">{chip}</span>
            </motion.div>
            ))}
        </div>
      </div>

      {/* Aesthetic Scroll Indicator */}
      <div className="absolute bottom-16 right-6 md:right-12 lg:right-16 z-20 hidden md:flex flex-col items-center gap-8">
        <span className="[writing-mode:vertical-lr] text-[9px] uppercase tracking-[0.5em] text-white/30 font-bold">Scroll</span>
        <div className="h-24 w-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: [-100, 100] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-primary/50 to-transparent"
          />
        </div>
      </div>
    </section>
  )
}

export { Hero }
