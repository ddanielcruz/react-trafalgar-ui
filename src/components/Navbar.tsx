import { logo } from '../assets'

const LINKS = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'Find a doctor',
    href: '#doctors'
  },
  {
    label: 'Apps',
    href: '#apps'
  },
  {
    label: 'Testimonials',
    href: '#testimonials'
  },
  {
    label: 'About',
    href: '#about'
  }
]

export default function Navbar() {
  return (
    <nav id="home" className="flex justify-between py-14">
      <img src={logo} alt="logo" className="object-contain" />

      <ul className="flex gap-8">
        {LINKS.map(({ label, href }) => (
          <li key={href} className="text-secondary text-lg">
            <a href={href} className="hover:text-black">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
