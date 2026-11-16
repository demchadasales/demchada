import { ChevronRight } from 'lucide-react'

const base =
  'inline-flex items-center justify-center gap-1.5 rounded-full font-medium transition-all duration-300 ease-demchada whitespace-nowrap'

const sizes = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
}

const variants = {
  primary: 'bg-graphite text-white hover:bg-black hover:scale-[1.02] active:scale-[0.98]',
  light: 'bg-white text-graphite hover:bg-mist hover:scale-[1.02] active:scale-[0.98] shadow-sm',
  outline: 'border border-graphite/30 text-graphite hover:border-graphite hover:scale-[1.02] active:scale-[0.98]',
  'outline-light': 'border border-white/40 text-white hover:border-white hover:scale-[1.02] active:scale-[0.98]',
  ghost: 'text-accent-blue hover:gap-2.5',
  'ghost-light': 'text-white hover:gap-2.5',
}

export default function Button({
  as: As = 'button',
  variant = 'primary',
  size = 'md',
  arrow = false,
  className = '',
  children,
  ...props
}) {
  return (
    <As className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
      {arrow && <ChevronRight className="h-4 w-4" />}
    </As>
  )
}
