import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  description?: string
}

const SectionHeader = ({ title, subtitle, align = 'center', className, description }: SectionHeaderProps) => {
  return (
    <div className={cn('mb-10 md:mb-16', align === 'center' ? 'text-center' : 'text-left', className)}>
      {subtitle && (
        <div className={cn("flex items-center gap-4 mb-6", align === 'center' ? "justify-center" : "justify-start")}>
            <div className="w-10 h-[1px] bg-primary" />
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[9px]">
                {subtitle}
            </span>
            <div className="w-10 h-[1px] bg-primary" />
        </div>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-heading leading-[1.1] mb-8 tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className={cn("text-body text-base md:text-lg max-w-2xl font-light leading-relaxed opacity-80", align === 'center' ? "mx-auto" : "")}>
            {description}
        </p>
      )}
    </div>
  )
}

export { SectionHeader }
