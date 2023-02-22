import { landingProviders } from '../assets'
import Button from './Button'
import Separator from './Separator'

export default function Providers() {
  return (
    <section className="flex items-center justify-between mt-48">
      <img src={landingProviders} alt="providers" />
      <div className="max-w-md">
        <h3 className="text-4xl font-bold">Leading healthcare providers</h3>
        <Separator />
        <p className="text-lg font-light text-secondary mb-12">
          Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online
          for everyone. To us, it’s not just work. We take pride in the solutions we deliver
        </p>
        <Button variant="secondary">Learn more</Button>
      </div>
    </section>
  )
}
