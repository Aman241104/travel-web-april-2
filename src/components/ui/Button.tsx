'use client'

import React, { useRef, useState } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost'
  isMagnetic?: boolean
  children?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', isMagnetic = false, children, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isMagnetic || !buttonRef.current) return
      const { clientX, clientY } = e
      const { height, width, left, top } = buttonRef.current.getBoundingClientRect()
      const middleX = clientX - (left + width / 2)
      const middleY = clientY - (top + height / 2)
      setPosition({ x: middleX * 0.3, y: middleY * 0.3 })
    }

    const reset = () => {
      setPosition({ x: 0, y: 0 })
    }

    const variants = {
      primary: 'bg-primary text-white hover:bg-deep shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-95',
      secondary: 'bg-white text-heading border border-black/5 hover:border-primary/20 hover:text-primary shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-95',
      glass: 'glass text-heading hover:bg-white/90 hover:-translate-y-0.5 active:scale-95',
      ghost: 'bg-transparent text-heading hover:bg-black/5 px-4 hover:-translate-y-0.5 active:scale-95',
    }

    return (
      <motion.button
        {...props}
        ref={(node) => {
          buttonRef.current = node
          if (typeof ref === 'function') ref(node)
          else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node
        }}
        onMouseMove={(e) => {
          handleMouse(e)
          if (props.onMouseMove) props.onMouseMove(e as any)
        }}
        onMouseLeave={(e) => {
          reset()
          if (props.onMouseLeave) props.onMouseLeave(e as any)
        }}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        className={cn(
          'relative px-10 py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] overflow-hidden group transition-all duration-500 whitespace-nowrap',
          variants[variant],
          className
        )}
      >
        <span className="relative z-10 flex items-center justify-center gap-3">{children}</span>
        {variant === 'primary' && (
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}
        <div className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/10 transition-colors duration-500 pointer-events-none" />
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
