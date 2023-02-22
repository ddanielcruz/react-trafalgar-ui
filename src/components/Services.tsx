import { cloud, service1, service2, service3, service4, service5, service6 } from '../assets'
import Button from './Button'
import Separator from './Separator'

const SERVICES = [
  {
    title: 'Search doctor',
    description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals',
    icon: service1
  },
  {
    title: 'Online pharmacy',
    description: 'Buy  your medicines with our mobile application with a simple delivery system',
    icon: service2
  },
  {
    title: 'Consultation',
    description: 'Free consultation with our trusted doctors and get the best recommendations',
    icon: service3
  },
  {
    title: 'Details info',
    description: 'Free consultation with our trusted doctors and get the best recommendations',
    icon: service4
  },
  {
    title: 'Emergency care',
    description:
      'You can get 24/7 urgent care for yourself or your children and your lovely family',
    icon: service5
  },
  {
    title: 'Tracking',
    description: 'Track and save your medical history and health data',
    icon: service6
  }
]

export default function Services() {
  return (
    <section className="relative flex flex-col items-center mt-40">
      <h2 className="text-4xl font-bold">Our services</h2>
      <Separator />
      <p className="text-secondary text-center max-w-4xl z-10 font-light">
        We provide to you the best choices for you. Adjust it to your health needs and make sure
        your undergo treatment with our highly qualified doctors you can consult with us which type
        of service is suitable for your health
      </p>

      <img src={cloud} alt="cloud" className="absolute -left-1/4 top-[11.5rem]" />
      <div className="grid grid-cols-3 gap-8 mt-16 max-w-5xl">
        {SERVICES.map(({ title, description, icon }) => (
          <div key={title} className="rounded-2xl px-8 py-12 smooth-shadow bg-white z-10">
            <div className="h-24 flex items-center">
              <img src={icon} alt={title} />
            </div>
            <h3 className="text-2xl font-bold mt-8 mb-4">{title}</h3>
            <p className="text-secondary font-light">{description}</p>
          </div>
        ))}
      </div>

      <Button className="mt-16" variant="secondary">
        Learn more
      </Button>
    </section>
  )
}
