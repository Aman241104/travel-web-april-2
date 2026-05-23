'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react'
import WhatsAppIcon from '../ui/WhatsAppIcon'

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Background Architectural Texture (Matching Section 10) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-6xl mx-auto">
        <div className="bg-primary rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(5,150,105,0.3)]">
          
          {/* Internal Decorative Gradients */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.1),transparent_60%)] pointer-events-none" />
          
          {/* Subtle SVG Path Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-100 200C100 100 300 300 500 200C700 100 900 300 1100 200" stroke="white" strokeWidth="0.5" strokeDasharray="10 10" />
                <path d="M-100 250C100 150 300 350 500 250C700 150 900 350 1100 250" stroke="white" strokeWidth="0.5" opacity="0.5" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'circOut' }}
            className="relative z-10"
          >
            <div className="flex items-center justify-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-white/40" />
                <span className="text-white font-bold tracking-[0.5em] uppercase text-[11px] drop-shadow-sm">Your Next Chapter</span>
                <div className="w-12 h-[1px] bg-white/40" />
            </div>

            <h2 className="text-5xl md:text-8xl font-serif text-white mb-10 leading-[1.1] tracking-tight drop-shadow-2xl">
              Begin Your Bespoke <br />
              <span className="italic font-light text-white/90">Odyssey Today</span>
            </h2>
            
            <p className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md">
              Whether you envision a tranquil retreat, a cultural immersion, or a high-stakes business journey — we orchestrate every detail with unparalleled precision.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
              <div className="relative group">
                {/* Online Pulse Indicator */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 w-max">
                    <div className="glass px-4 py-1.5 rounded-full border-white/30 flex items-center gap-2 shadow-2xl backdrop-blur-2xl">
                        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                        <span className="text-[9px] font-bold text-heading uppercase tracking-widest">Active Now</span>
                    </div>
                </div>
                
                <Button isMagnetic className="h-20 px-14 gap-5 text-[10px] bg-white text-[#25D366] hover:bg-[#F0FDF4] font-bold tracking-[0.2em] shadow-2xl group transition-all duration-500">
                  <WhatsAppIcon size={24} /> Speak with our Concierge
                </Button>
              </div>

              <button className="flex items-center gap-5 text-white hover:text-white transition-all py-3 group/btn">
                <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-primary group-hover/btn:border-white transition-all duration-700 shadow-xl">
                  <PhoneCall size={22} />
                </div>
                <div className="text-left flex items-center gap-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.3em] leading-none">Request Callback</span>
                    <div className="w-[1px] h-3 bg-white/20" />
                    <span className="text-[9px] text-white/60 uppercase tracking-[0.1em] font-bold leading-none">Responds in &lt; 15 mins</span>
                </div>
              </button>
            </div>

            {/* Security/Trust Footer */}
            <div className="mt-24 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-16">
                <div className="flex items-center gap-4 text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] group cursor-default">
                    <ShieldCheck size={20} className="text-white/40 group-hover:text-white transition-colors duration-500" />
                    Encrypted Communications
                </div>
                <div className="flex items-center gap-4 text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] group cursor-default">
                    <ArrowRight size={20} className="text-white/40 group-hover:text-white transition-colors duration-500" />
                    No Commitment Required
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { FinalCTA }
