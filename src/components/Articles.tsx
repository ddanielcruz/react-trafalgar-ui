import { HiArrowRight } from 'react-icons/hi'

import { article1, article2, article3 } from '../assets'
import Button from './Button'
import Separator from './Separator'

const ARTICLES = [
  {
    title: 'Disease detection, check up in the laboratory',
    description:
      'In this case, the role of the health laboratory is very important to do a disease detection...',
    image: article1
  },
  {
    title: 'Herbal medicines that are safe for consumption',
    description:
      'Herbal medicine is very widely used at this time because of its very good for your health...',
    image: article2
  },
  {
    title: 'Natural care for healthy facial skin',
    description:
      'A healthy lifestyle should start from now and also for your skin health. There are some...',
    image: article3
  }
]

export default function Articles() {
  return (
    <section className="flex flex-col items-center">
      <h3 className="text-4xl font-bold mt-48">Check out our latest article</h3>
      <Separator />
      <div className="flex justify-center gap-8 mt-16">
        {ARTICLES.map(({ title, description, image }) => (
          <div key={title} className="flex flex-col smooth-shadow bg-white w-[350px] rounded-2xl">
            <img src={image} alt={title} className="w-full object-contain rounded-t-2xl" />
            <h4 className="text-xl font-bold mx-8 mt-8">{title}</h4>
            <p className="text-secondary font-light mx-8 mt-4">{description}</p>
            <a href="#" className="flex items-center gap-4 m-8 text-primary font-semibold">
              Read more
              <HiArrowRight size={15} />
            </a>
          </div>
        ))}
      </div>

      <Button variant="secondary" className="mt-16">
        View all
      </Button>
    </section>
  )
}
