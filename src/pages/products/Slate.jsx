import { useState } from 'react'
import { getProductBySlug } from '../../data/products'
import TabletArt from '../../components/devices/TabletArt'
import BuyPanel from '../../components/ui/BuyPanel'
import FeatureGrid from '../../components/ui/FeatureGrid'
import SpecTable from '../../components/ui/SpecTable'
import GalleryStrip from '../../components/ui/GalleryStrip'
import { formatPrice } from '../../components/ui/format'
import { useReveal } from '../../hooks/useReveal'

const product = getProductBySlug('slate')

export default function Slate() {
  const [colorId, setColorId] = useState(product.colors[0].id)
  const color = product.colors.find((c) => c.id === colorId)
  const ref = useReveal()

  return (
    <div>
      {/* Hero: playful color-grid driven */}
      <section className="bg-gradient-to-b from-[#fff6e8] to-paper py-20 md:py-28">
        <div className="mx-auto max-w-shell px-6 text-center">
          <p className="mb-3 text-sm font-medium text-accent-amber">{product.category}</p>
          <h1 className="text-hero font-semibold tracking-tight">Slate</h1>
          <p className="mx-auto mt-4 max-w-lg text-2xl text-graphite/80">{product.tagline}</p>
          <p className="mt-2 text-steel">From {formatPrice(product.price)}</p>
        </div>

        <div ref={ref} className="reveal-stagger mx-auto mt-14 grid max-w-shell grid-cols-2 gap-5 px-6 md:grid-cols-4">
          {product.colors.map((c) => (
            <button
              key={c.id}
              onClick={() => setColorId(c.id)}
              className={`flex flex-col items-center gap-4 rounded-3xl p-6 transition-all duration-300 ${
                colorId === c.id ? 'bg-white shadow-lg scale-[1.02]' : 'hover:bg-white/60'
              }`}
            >
              <TabletArt color={c.hex} className="h-36 w-28" />
              <span className="text-sm font-medium">{c.name}</span>
            </button>
          ))}
        </div>
      </section>

      <FeatureGrid features={product.features} accent={product.accent} />
      <SpecTable specs={product.specs} />
      <GalleryStrip product={product} color={color.hex} labels={product.gallery} />

      <section className="border-t border-hairline bg-mist py-20">
        <BuyPanel product={product} colorId={colorId} onColorChange={setColorId} />
      </section>
    </div>
  )
}
