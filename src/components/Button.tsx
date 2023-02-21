import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void | Promise<void>
  className?: string
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-primary text-white text-lg font-bold rounded-full px-8 py-3.5 hover:brightness-95 active:brightness-90`}
    >
      {children}
    </button>
  )
}
