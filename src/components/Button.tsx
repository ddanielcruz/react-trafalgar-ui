import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void | Promise<void>
  className?: string
  variant?: 'primary' | 'secondary'
}

export default function Button({ children, onClick, className, variant = 'primary' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} ${
        variant === 'primary' && 'bg-primary text-white hover:brightness-95 active:brightness-90'
      } ${
        variant === 'secondary' &&
        'text-primary border-primary border-[1px] hover:bg-primary/10 active:bg-primary/20'
      } text-lg font-bold rounded-full px-12 py-3.5`}
    >
      {children}
    </button>
  )
}
