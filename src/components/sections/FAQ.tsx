'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { Plus, Minus, ArrowUpRight } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What documents are required for international visa assistance?',
      answer: 'Typically, you need a valid passport (minimum 6 months validity), photographs, bank statements, and income tax returns. However, requirements vary by country. Our team provides a specific checklist based on your destination.'
    },
    {
      question: 'Do you offer customized honeymoon packages?',
      answer: 'Yes, we specialize in creating romantic, personalized honeymoons. We handle everything from candle-light dinners and room decorations to private transfers and unique local experiences.'
    },
    {
      question: 'How early should I book my flight for the best rates?',
      answer: 'For international flights, booking 3-4 months in advance is recommended. For domestic travel, 3-4 weeks usually offers good pricing. We monitor fare trends to suggest the best time to book.'
    },
    {
      question: 'Can you help with corporate group travel?',
      answer: 'Absolutely. We manage end-to-end corporate travel including group ticketing, hotel room blocks, meeting space coordination, and local transfers for teams of all sizes.'
    },
    {
      question: 'Is overseas travel insurance mandatory?',
      answer: 'While not always mandatory by law, it is highly recommended for all international trips. Many countries (especially in Europe) require it for visa approval. We offer comprehensive plans covering medical, trip cancellation, and baggage loss.'
    }
  ]

  return (
    <section id="faq" className="py-16 md:py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Background Architectural Detail */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <SectionHeader 
            title="Essential Inquiries & Knowledge" 
            subtitle="Guidance" 
            align="left"
            className="mb-0"
          />
          <div className="hidden lg:block pb-2">
            <p className="text-body text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
              Technical Clarity <br />For Every Journey
            </p>
          </div>
        </div>
        
        <div className="divide-y divide-black/[0.05]">
          {faqs.map((faq, i) => (
            <div key={i} className="group">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex items-center justify-between text-left transition-all duration-500"
              >
                <div className="flex gap-8 items-start pr-8">
                    <span className="text-[10px] font-bold text-primary/40 mt-2 font-mono">0{i + 1}</span>
                    <span className="text-xl md:text-2xl font-serif text-heading group-hover:text-primary transition-colors duration-500 tracking-tight leading-snug">
                    {faq.question}
                    </span>
                </div>
                <div className="relative w-10 h-10 shrink-0 hidden md:block">
                  <motion.div 
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    className="w-full h-full rounded-full border border-black/[0.05] group-hover:border-primary/20 flex items-center justify-center text-heading group-hover:text-primary transition-all duration-500 bg-white shadow-sm group-hover:shadow-lg group-hover:shadow-primary/5"
                  >
                    <Plus size={18} strokeWidth={1.5} />
                  </motion.div>
                </div>
                {/* Mobile visible indicator */}
                <div className="md:hidden">
                    {openIndex === i ? <Minus size={18} className="text-primary" /> : <Plus size={18} className="text-heading" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-12 pl-[58px] pr-12">
                        <p className="text-body leading-relaxed text-base opacity-80 max-w-2xl">
                        {faq.answer}
                        </p>
                        <div className="mt-8 flex items-center gap-4 group/link cursor-pointer">
                            <span className="text-[9px] font-bold text-primary uppercase tracking-[0.2em]">Consult a Specialist</span>
                            <ArrowUpRight size={12} className="text-primary group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Contact CTA below FAQ */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[40px] bg-surface/50 border border-black/[0.03] text-center"
        >
            <h3 className="text-2xl font-serif text-heading mb-4 italic">Still have unanswered questions?</h3>
            <p className="text-body text-sm mb-8 opacity-70">Our dedicated concierge is available 24/7 for technical and luxury travel guidance.</p>
            <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary border-b border-primary/20 hover:border-primary pb-2 transition-all">
                Connect with an Expert
            </button>
        </motion.div>
      </div>
    </section>
  )
}

export { FAQ }
