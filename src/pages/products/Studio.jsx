import { useState } from 'react'
import { getProductBySlug } from '../../data/products'
import LaptopArt from '../../components/devices/LaptopArt'
import BuyPanel from '../../components/ui/BuyPanel'
import FeatureGrid from '../../components/ui/FeatureGrid'
import SpecTable from '../../components/ui/SpecTable'
import GalleryStrip from '../../components/ui/GalleryStrip'
import { useReveal } from '../../hooks/useReveal'
import { Check } from 'lucide-react'

const product = getProductBySlug('studio')

const chipTiers = [
  { name: 'Core-M Pro', cpu: '12-core CPU', gpu: '20-core GPU', mem: 'Up to 32GB', use: 'Dev work, video editing, 3D' },
  { name: 'Core-M Max', cpu: '16-core CPU', gpu: '40-core GPU', mem: 'Up to 64GB', use: 'Color grading, ML training, VFX' },
]

export default function Studio() {
  const [tier, setTier] = useState(0)
  const color = product.colors[0]
  const heroRef = useReveal()

  return (
    <div>
      {/* Hero: full-bleed cinematic dark */}
      <section className="relative overflow-hidden bg-black py-20 text-center text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div ref={heroRef} className="reveal relative mx-auto max-w-shell px-6">
          <p className="mb-3 text-sm font-medium text-white/50">{product.category}</p>
          <h1 className="text-hero font-semibold tracking-tight">Studio</h1>
          <p className="mx-auto mt-4 max-w-xl text-2xl text-white/70">{product.tagline}</p>
        </div>
        <div className="relative mx-auto mt-10 max-w-4xl px-6">
          <LaptopArt color={color.hex} className="w-full drop-shadow-2xl" />
        </div>
      </section>

      {/* Chip tier comparison — unique to Studio */}
      <section className="mx-auto max-w-shell px-6 py-20 md:py-28">
        <h2 className="text-headline mb-10 text-center font-semibold tracking-tight">Choose your chip.</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {chipTiers.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setTier(i)}
              className={`rounded-3xl border p-8 text-left transition-all duration-300 ${
                tier === i ? 'border-graphite bg-mist shadow-md scale-[1.01]' : 'border-hairline hover:border-graphite/40'
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-semibold">{t.name}</h3>
                {tier === i && <Check className="h-5 w-5 text-accent-graphite" />}
              </div>
              <ul className="space-y-1.5 text-steel">
                <li>{t.cpu}</li>
                <li>{t.gpu}</li>
                <li>Memory: {t.mem}</li>
              </ul>
              <p className="mt-4 text-sm text-graphite/70">Best for: {t.use}</p>
            </button>
          ))}
        </div>
      </section>

      <FeatureGrid features={product.features} accent={product.accent} />
      <SpecTable specs={product.specs} />
      <GalleryStrip product={product} color={color.hex} labels={product.gallery} />

      <section className="border-t border-hairline bg-mist py-20">
        <BuyPanel product={product} />
      </section>
    </div>
  )
}
