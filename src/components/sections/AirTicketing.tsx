'use client'

import { motion } from 'framer-motion'
import { Plane, Users, Building, Globe, ArrowRight, ShieldCheck, MapPin } from 'lucide-react'
import { Button } from '../ui/Button'

const AirTicketing = () => {
  const highlights = [
    { title: 'Local & Global Network', icon: Plane, detail: 'Flights Across India & The World' },
    { title: 'Luxury & Business Class', icon: Globe, detail: 'Exclusive Seat Access' },
    { title: 'Groups & Business', icon: Building, detail: 'Special Rates for Teams' },
    { title: 'Fast Connections', icon: MapPin, detail: 'Best Routes & Short Layovers' },
  ]

  return (
    <section className="relative py-16 md:py-24 px-6 md:px-12 bg-white overflow-hidden border-t border-black/[0.03]">
      {/* Background Architectural Textures */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface/30 -z-10 rounded-l-[100px] translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border border-black/[0.02] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left: Content (7 Columns) */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[1px] bg-primary" />
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">Flight Experts</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-heading mb-8 leading-[1.1] tracking-tight">
              Easy Flight <br />
              <span className="italic font-light opacity-80">Bookings Made Simple</span>
            </h2>
            
            <p className="text-body text-lg leading-relaxed mb-12 max-w-2xl font-light">
              We help you find the best flight routes and prices. Our experts use professional tools to get you the best seats and deals for your next journey.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 mb-16">
              {highlights.map((item, i) => (
                <motion.div 
                    key={item.title} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-primary border border-black/[0.03] group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                      <item.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="text-heading font-bold text-sm mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                        <span className="text-[10px] text-body/50 uppercase tracking-widest font-bold">{item.detail}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
                <Button variant="primary" className="h-16 px-12 shadow-2xl shadow-primary/20 group">
                    Check Flight Prices <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="flex items-center gap-3 text-body/60 text-[10px] font-bold uppercase tracking-[0.2em]">
                    <ShieldCheck size={16} className="text-primary" />
                    Professional Booking Tools
                </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Technical Visualization (5 Columns) */}
        <div className="lg:col-span-5 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-square bg-white rounded-[60px] border border-black/[0.05] p-16 flex items-center justify-center relative shadow-2xl overflow-hidden group"
          >
             {/* Dynamic Grid Overlay */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

             {/* Simple flight path visualization (Improved) */}
             <div className="w-full h-full relative border border-black/[0.02] rounded-full p-8">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary drop-shadow-[0_0_10px_rgba(5,150,105,0.4)]">
                        <Plane size={24} className="rotate-90" fill="currentColor" />
                    </div>
                </motion.div>
                
                <div className="w-full h-full rounded-full border border-black/[0.05] flex flex-col items-center justify-center text-center p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/[0.02] animate-pulse" />
                    <Globe size={100} strokeWidth={0.5} className="text-primary/20 mb-8" />
                    <h3 className="text-2xl font-serif text-heading mb-2 leading-none">Global Reach</h3>
                    <p className="text-body text-[8px] uppercase tracking-[0.4em] font-bold opacity-40">Direct Airline Access</p>
                </div>
             </div>

             {/* Corner Accents */}
             <div className="absolute top-8 right-8 w-12 h-[1px] bg-primary/20" />
             <div className="absolute top-8 right-8 w-[1px] h-12 bg-primary/20" />
          </motion.div>

          {/* Floating Data Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-8 -left-8 glass p-6 rounded-3xl border-black/[0.05] shadow-xl z-20"
          >
            <div className="flex items-center gap-4">
                <div className="text-3xl font-serif text-primary">500+</div>
                <div className="w-[1px] h-6 bg-black/5" />
                <div className="text-[9px] uppercase tracking-[0.2em] text-heading font-bold leading-none">
                    Partner Airlines
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { AirTicketing }
