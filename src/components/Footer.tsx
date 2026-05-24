import Link from 'next/link'
import { Camera, Globe, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import WhatsAppIcon from './ui/WhatsAppIcon'

const Footer = () => {
  return (
    <footer className="bg-ivory pt-24 pb-12 md:pt-32 md:pb-16 px-6 md:px-12 relative overflow-hidden border-t border-black/[0.03]">
      {/* Decorative Brand Background - subtle and huge */}
      <div className="absolute top-20 right-[-10%] text-[30vw] font-serif font-bold text-black/[0.02] leading-none pointer-events-none select-none">
        JADE
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-16">
          
          {/* Column 1: Essence */}
          <div className="lg:col-span-4">
            <Link href="/" className="text-3xl font-serif font-bold text-heading flex items-center gap-4 mb-10 group">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white font-serif group-hover:scale-105 transition-all duration-700 shadow-2xl shadow-primary/20">J</div>
              <span className="tracking-tight leading-none pt-1 text-heading">Jade <span className="text-primary italic font-light">Tours</span></span>
            </Link>
            <p className="text-body text-base leading-loose mb-12 max-w-sm font-light">
              We create perfect luxury trips and handle all your travel needs. Since 2011, we&apos;ve helped thousands of travelers enjoy stress-free journeys.
            </p>
            
            <div className="flex gap-6">
                {[
                    { icon: Camera, href: '#' },
                    { icon: WhatsAppIcon, href: '#' },
                    { icon: Globe, href: '#' }
                ].map((social, i) => (
                    <a 
                        key={i} 
                        href={social.href} 
                        className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-heading/40 hover:text-primary hover:border-primary/40 transition-all duration-500 group/social"
                    >
                        {i === 1 ? (
                            <social.icon size={20} className="group-hover/social:scale-110 transition-transform fill-current" />
                        ) : (
                            // @ts-ignore - Lucide icon has specific props
                            <social.icon size={20} strokeWidth={1} className="group-hover/social:scale-110 transition-transform" />
                        )}
                    </a>
                ))}
            </div>
          </div>

          {/* Column 2: Experiences */}
          <div className="lg:col-span-2">
            <h4 className="text-heading font-bold text-[9px] uppercase tracking-[0.4em] mb-12 opacity-90">Travel</h4>
            <ul className="space-y-6">
              {[
                { name: 'Our Story', href: '#about' },
                { name: 'Our Services', href: '#services' },
                { name: 'Destinations', href: '#destinations' },
                { name: 'Holiday Packages', href: '#packages' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[13px] text-body hover:text-primary transition-colors duration-500 flex items-center group/nav font-light tracking-wide">
                    <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover/nav:w-full transition-all duration-500" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Logistics */}
          <div className="lg:col-span-2">
            <h4 className="text-heading font-bold text-[9px] uppercase tracking-[0.4em] mb-12 opacity-90">Services</h4>
            <ul className="space-y-6">
              {[
                { name: 'Flight Booking', href: '#' },
                { name: 'Visa Help', href: '#' },
                { name: 'Corporate Travel', href: '#' },
                { name: 'Money Exchange', href: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[13px] text-body hover:text-primary transition-colors duration-500 flex items-center group/nav font-light tracking-wide">
                    <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover/nav:w-full transition-all duration-500" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Atelier */}
          <div className="lg:col-span-4 lg:pl-16">
            <h4 className="text-heading font-bold text-[9px] uppercase tracking-[0.4em] mb-12 opacity-90">Contact Us</h4>
            <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary border border-black/5 group-hover:border-primary/40 transition-all duration-700 shadow-sm">
                        <MapPin size={18} strokeWidth={1} />
                    </div>
                    <div className="text-sm text-body leading-relaxed font-light">
                        123 Emerald Avenue, Suite 456, <br />
                        <span className="text-heading font-medium">Mumbai, MH 400001, India</span>
                    </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary border border-black/5 group-hover:border-primary/40 transition-all duration-700 shadow-sm">
                        <Mail size={18} strokeWidth={1} />
                    </div>
                    <div className="text-sm text-heading font-medium group-hover:text-primary transition-colors duration-500">
                        hello@jadetours.com
                    </div>
                </div>

                <div className="pt-8">
                    <Link href="#" className="block p-8 rounded-[32px] bg-white border border-black/5 hover:border-primary/30 transition-all duration-700 group/circle shadow-sm hover:shadow-xl hover:shadow-primary/5">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-heading uppercase tracking-[0.3em] italic">Join Our Newsletter</span>
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover/circle:scale-110 transition-transform duration-700 shadow-lg shadow-primary/10">
                                <ArrowUpRight size={18} />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="pt-12 border-t border-black/[0.05] flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] uppercase tracking-[0.3em] font-bold text-body/40">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            <span className="opacity-60">© 2026 Jade Tours & Travels</span>
            <Link href="#" className="text-body/60 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-body/60 hover:text-primary transition-colors">Terms of Service</Link>
          </div>
          <div className="flex items-center gap-4 text-body/60 font-light">
            <Globe size={14} className="text-primary/40" />
            Global HQ • Mumbai
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
