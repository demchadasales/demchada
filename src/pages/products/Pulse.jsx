import { useState } from 'react'
import { getProductBySlug } from '../../data/products'
import PhoneArt from '../../components/devices/PhoneArt'
import ColorPicker from '../../components/ui/ColorPicker'
import BuyPanel from '../../components/ui/BuyPanel'
import FeatureGrid from '../../components/ui/FeatureGrid'
import SpecTable from '../../components/ui/SpecTable'
import GalleryStrip from '../../components/ui/GalleryStrip'
import { useReveal } from '../../hooks/useReveal'

const product = getProductBySlug('pulse')

export default function Pulse() {
  const [colorId, setColorId] = useState(product.colors[0].id)
  const color = product.colors.find((c) => c.id === colorId)
  const textRef = useReveal()

  return (
    <div>
      {/* Hero: dark split, phone tilted on the right, color-synced */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="mx-auto grid max-w-shell grid-cols-1 items-center gap-8 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
          <div ref={textRef} className="reveal">
            <p className="mb-3 text-sm font-medium text-accent-blue">{product.category}</p>
            <h1 className="text-hero font-semibold tracking-tight">{product.name.replace('Demchada ', '')}</h1>
            <p className="mt-4 text-2xl text-white/80">{product.tagline}</p>
            <p className="mt-4 max-w-md text-white/60">{product.shortBlurb}</p>
            <div className="mt-6">
              <ColorPicker colors={product.colors} selected={colorId} onSelect={setColorId} />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="animate-floatSlow [transform:rotate(-6deg)]">
              <PhoneArt color={color.hex} className="h-[420px] w-[420px] drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <SpecTable specs={product.specs} />
      <FeatureGrid features={product.features} accent={product.accent} />
      <GalleryStrip product={product} color={color.hex} labels={product.gallery} />

      <section className="border-t border-hairline bg-mist py-20">
        <BuyPanel product={product} colorId={colorId} onColorChange={setColorId} />
      </section>
    </div>
  )
}
