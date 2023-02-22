import { logoWhite } from '../assets'

const LINKS = [
  {
    title: 'Company',
    items: ['About', 'Testimonials', 'Find a doctor', 'Apps']
  },
  {
    title: 'Region',
    items: ['Indonesia', 'Singapore', 'Hong Kong', 'Canada']
  },
  {
    title: 'Help',
    items: ['Help Center', 'Contact support', 'Instructions', 'How it works']
  }
]

export default function Footer() {
  return (
    <footer className="bg-linear-blue text-white mt-48">
      <div className="flex items-center justify-between max-w-7xl w-full mx-auto py-20">
        <div className="max-w-sm">
          <img src={logoWhite} alt="logo" />
          <p className="text-lg font-light mt-6">
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and
            online for everyone
          </p>
          <span className="block font-light mt-12">
            © Trafalgar PTY LTD {new Date().getFullYear()}. All rights reserved
          </span>
        </div>

        {LINKS.map(({ title, items }) => (
          <div key={title}>
            <h4 className="text-xl font-bold">{title}</h4>
            <ul className="flex flex-col gap-4 mt-4">
              {items.map(item => (
                <li key={item} className="font-light text-lg">
                  <a href="#" className="hover:brightness-95">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
