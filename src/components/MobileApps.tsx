import { landingApps, landingProviders } from '../assets'
import Button from './Button'
import Separator from './Separator'

export default function MobileApps() {
  return (
    <section className="flex items-center justify-between mt-48">
      <div className="max-w-md">
        <h3 className="text-4xl font-bold">
          Download our
          <br /> mobile apps
        </h3>
        <Separator />
        <p className="text-lg font-light text-secondary mb-12">
          Our dedicated patient engagement app and web portal allow you to access information
          instantaneously (no tedeous form, long calls, or administrative hassle) and securely
        </p>
        <Button variant="secondary">Download</Button>
      </div>
      <img src={landingApps} alt="providers" />
    </section>
  )
}
