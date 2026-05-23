import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'glass-dark'
  hover?: boolean
}

const Card = ({ className, variant = 'glass', hover = true, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'p-8 rounded-2xl transition-all duration-300',
        variant === 'glass' ? 'glass' : 'glass-dark',
        hover && 'hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Card }
