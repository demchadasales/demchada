import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import DeviceArt from '../devices/DeviceArt'
import Button from '../ui/Button'
import { formatPrice, accentGradient } from '../ui/format'

export default function ProductShowcase({ product, dark = false }) {
  const textRef = useReveal()
  const artRef = useReveal()
  const color = product.colors[0]?.hex

  return (
    <section
      className={`relative overflow-hidden ${dark ? 'bg-ink text-white' : 'bg-paper text-graphite'}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-[0.08] ${accentGradient[product.accent]}`}
      />
      <div className="relative mx-auto grid max-w-shell grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 md:py-32">
        <div ref={textRef} className="reveal order-2 md:order-1">
          <p className={`mb-3 text-sm font-medium ${dark ? 'text-white/60' : 'text-steel'}`}>
            {product.category}
          </p>
          <h2 className="text-hero-sm font-semibold tracking-tight">{product.name}</h2>
          <p className={`mt-4 text-xl md:text-2xl ${dark ? 'text-white/80' : 'text-graphite/80'}`}>
            {product.tagline}
          </p>
          <p className={`mt-4 max-w-md text-base leading-relaxed ${dark ? 'text-white/60' : 'text-steel'}`}>
            {product.shortBlurb}
          </p>
          <p className="mt-5 text-lg font-medium">From {formatPrice(product.price)}</p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <Button as={Link} to={`/products/${product.slug}`} variant={dark ? 'light' : 'primary'}>
              Buy
            </Button>
            <Button
              as={Link}
              to={`/products/${product.slug}`}
              variant="ghost"
              className={dark ? 'text-white' : ''}
              arrow
            >
              Learn more
            </Button>
          </div>
        </div>

        <div className="reveal-scale order-1 flex items-center justify-center md:order-2" ref={artRef}>
          <div className="animate-floatSlow">
            <DeviceArt product={product} color={color} className="h-64 w-64 md:h-80 md:w-80" />
          </div>
        </div>
      </div>
    </section>
  )
}
