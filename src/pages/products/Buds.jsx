import { useState } from 'react'
import { getProductBySlug } from '../../data/products'
import EarbudsArt from '../../components/devices/EarbudsArt'
import BuyPanel from '../../components/ui/BuyPanel'
import SpecTable from '../../components/ui/SpecTable'
import GalleryStrip from '../../components/ui/GalleryStrip'
import { useReveal } from '../../hooks/useReveal'

const product = getProductBySlug('buds')

const tabs = [
  {
    key: 'standard',
    label: 'Buds',
    copy: 'The essentials, done right: a custom driver, 6 hours of listening, and a case that tops up in your pocket.',
  },
  {
    key: 'pro',
    label: 'Buds Pro',
    copy: 'Everything in Buds, plus Adaptive ANC and Transparency mode that recalculates hundreds of times a second.',
  },
]

export default function Buds() {
  const [tab, setTab] = useState('standard')
  const color = product.colors[0]
  const ref = useReveal()

  return (
    <div>
      {/* Hero: exploded parts — case + buds floating apart */}
      <section className="bg-gradient-to-b from-[#e8fff8] to-paper py-20 text-center md:py-28">
        <p className="mb-3 text-sm font-medium text-accent-mint">{product.category}</p>
        <h1 className="text-hero font-semibold tracking-tight">Buds</h1>
        <p className="mx-auto mt-4 max-w-lg text-2xl text-graphite/80">{product.tagline}</p>

        <div ref={ref} className="reveal-scale mx-auto mt-12 flex max-w-md justify-center">
          <EarbudsArt color={color.hex} className="h-64 w-full drop-shadow-2xl" />
        </div>
      </section>

      {/* Interactive tabs — unique to Buds */}
      <section className="mx-auto max-w-shell px-6 py-16 md:py-20">
        <div className="mx-auto flex max-w-md justify-center rounded-full bg-mist p-1">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex-1 rounded-full py-2.5 text-sm font-medium transition-all duration-300 ${
                tab === t.key ? 'bg-white shadow-sm' : 'text-steel'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-lg text-center text-lg text-graphite/80">
          {tabs.find((t) => t.key === tab).copy}
        </p>
      </section>

      <section className="mx-auto max-w-shell px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {product.features.map((f, i) => (
            <div key={i} className="text-center md:text-left">
              <h3 className="text-xl font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-steel leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <GalleryStrip product={product} color={color.hex} labels={product.gallery} />
      <SpecTable specs={product.specs} />

      <section className="border-t border-hairline bg-mist py-20">
        <BuyPanel product={product} />
      </section>
    </div>
  )
}
