import { hero, squareDots } from '../assets'
import Button from './Button'

export default function Hero() {
  return (
    <section className="flex items-center justify-between mt-4">
      <div className="flex flex-col gap-8 items-start">
        <h1 className="font-bold text-5xl">
          Virtual healthcare
          <br /> for you
        </h1>
        <p className="font-light text-xl text-secondary">
          Trafalgar provides progressive, and affordable
          <br /> healthcare, accessible on mobile and online
          <br /> for everyone
        </p>
        <Button className="mt-8">Consult today</Button>
      </div>
      <img src={hero} alt="hero" />
    </section>
  )
}
