interface SeparatorProps {
  className?: string
}

export default function Separator({ className }: SeparatorProps) {
  return <div className={`border-b-2 border-black w-14 my-8 ${className}`} />
}
