import {
  Articles,
  Footer,
  Hero,
  MobileApps,
  Navbar,
  Providers,
  Services,
  Testimonials
} from './components'

export default function App() {
  return (
    <main className="w-full">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <Services />
        <Providers />
        <MobileApps />
        <Testimonials />
        <Articles />
      </div>
      <Footer />
    </main>
  )
}
