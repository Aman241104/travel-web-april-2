'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from './ui/Button'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Our Story', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-premium px-6 md:px-12',
          isScrolled ? 'py-4' : 'py-8'
        )}
      >
        <nav
          className={cn(
            'max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 px-8 py-4 rounded-2xl border border-transparent',
            isScrolled ? 'bg-white/95 backdrop-blur-2xl border-black/[0.05] shadow-2xl shadow-black/5' : 'bg-black/20 backdrop-blur-xl border-white/15'
          )}
        >
          <Link href="/" className="text-2xl font-serif font-bold text-heading flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-serif group-hover:scale-105 transition-transform duration-500 shadow-lg shadow-primary/20">J</div>
            <span className={cn(
              'transition-colors duration-500 tracking-tight leading-none pt-1', 
              isScrolled ? 'text-heading' : 'text-white drop-shadow-md'
            )}>
              Jade <span className="text-primary italic font-light">Tours</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:text-primary relative group/link',
                  isScrolled ? 'text-heading/80' : 'text-white hover:text-white drop-shadow-md'
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-primary group-hover/link:w-full group-hover/link:left-0 transition-all duration-500" />
              </Link>
            ))}
            
            <div className={cn(
                "w-px h-6 mx-2 hidden lg:block transition-colors duration-500",
                isScrolled ? "bg-black/10" : "bg-white/20"
            )} />

            <Button 
              variant={isScrolled ? 'primary' : 'primary'} 
              className={cn(
                "px-8 py-3 h-auto text-[9px] transition-all duration-500",
                !isScrolled && "bg-primary border-primary/20 text-white hover:bg-deep shadow-xl shadow-primary/20"
              )}
            >
              Contact Us <ArrowUpRight size={12} className="ml-1 opacity-60" />
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={cn(
              'md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors', 
              isScrolled ? 'text-heading bg-black/5' : 'text-white bg-white/20 backdrop-blur-lg'
            )} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-ivory z-[60] p-8 flex flex-col justify-center animate-in fade-in zoom-in-95 duration-500">
          <button 
            className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-black/5 text-heading"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-3xl font-serif text-heading hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-8 px-8">
                <Button variant="primary" className="w-full h-16 text-xs shadow-2xl">Contact Us</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export { Navbar }
