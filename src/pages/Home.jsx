import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductShowcase from '../components/home/ProductShowcase'
import Button from '../components/ui/Button'
import DeviceArt from '../components/devices/DeviceArt'
import { useReveal } from '../hooks/useReveal'

const pulse = products.find((p) => p.id === 'pulse')
const vista = products.find((p) => p.id === 'vista')

export default function Home() {
  const heroRef = useReveal()

  return (
    <div>
      {/* ===== Hero / announcement banner ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eef3ff] to-paper">
        <div className="mx-auto max-w-shell px-6 pb-20 pt-24 text-center md:pt-32">
          <p className="mb-4 text-sm font-medium text-accent-blue">New. Demchada Pulse.</p>
          <h1 ref={heroRef} className="reveal text-hero font-semibold tracking-tight">
            Fast forward.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl text-graphite/70 md:text-2xl">
            The whole Pulse lineup, redesigned around a chip that doesn’t know how to slow down.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <Button as={Link} to="/products/pulse" size="lg">
              Learn more
            </Button>
            <Button as={Link} to="/products/pulse" variant="ghost" size="lg" arrow>
              Buy
            </Button>
          </div>
        </div>
        <div className="mx-auto flex max-w-shell justify-center px-6 pb-10">
          <div className="animate-floatSlow">
            <DeviceArt product={pulse} color={pulse.colors[2].hex} className="h-72 w-72 md:h-96 md:w-96" />
          </div>
        </div>
      </section>

      {/* ===== Secondary banner: Vista ===== */}
      <section className="bg-ink py-20 text-center text-white md:py-28">
        <p className="mb-3 text-sm font-medium text-white/60">Introducing</p>
        <h2 className="text-hero-sm font-semibold tracking-tight">Demchada Vista</h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">{vista.tagline}</p>
        <div className="mt-8 flex justify-center gap-5">
          <Button as={Link} to="/products/vista" variant="light">
            Learn more
          </Button>
          <Button as={Link} to="/products/vista" variant="ghost-light" arrow>
            Buy
          </Button>
        </div>
        <div className="mt-10 flex justify-center">
          <DeviceArt product={vista} color={vista.colors[0].hex} className="h-48 w-full max-w-xl" />
        </div>
      </section>

      {/* ===== Full product lineup ===== */}
      {products
        .filter((p) => p.id !== 'pulse')
        .map((p, i) => (
          <ProductShowcase key={p.id} product={p} dark={i % 3 === 1} />
        ))}

      {/* ===== Closing CTA strip ===== */}
      <section className="bg-mist py-20 text-center">
        <h2 className="text-headline font-semibold tracking-tight">Find your perfect Demchada.</h2>
        <p className="mx-auto mt-3 max-w-md text-steel">
          Compare the full lineup and get help choosing, powered by nothing but this page.
        </p>
        <div className="mt-7">
          <Button as={Link} to="/products/pulse" arrow>
            Shop all products
          </Button>
        </div>
      </section>
    </div>
  )
}
