import { useState } from 'react'
import { getProductBySlug } from '../../data/products'
import OrbArt from '../../components/devices/OrbArt'
import ColorPicker from '../../components/ui/ColorPicker'
import BuyPanel from '../../components/ui/BuyPanel'
import FeatureGrid from '../../components/ui/FeatureGrid'
import SpecTable from '../../components/ui/SpecTable'
import GalleryStrip from '../../components/ui/GalleryStrip'
import { useReveal } from '../../hooks/useReveal'

const product = getProductBySlug('orb')

export default function Orb() {
  const [colorId, setColorId] = useState(product.colors[0].id)
  const color = product.colors.find((c) => c.id === colorId)
  const ref = useReveal()

  return (
    <div>
      {/* Hero: centered with pulsing concentric rings */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fff5e6] to-paper py-20 text-center md:py-28">
        <p className="mb-3 text-sm font-medium text-accent-amber">{product.category}</p>
        <h1 className="text-hero font-semibold tracking-tight">Orb</h1>
        <p className="mx-auto mt-4 max-w-lg text-2xl text-graphite/80">{product.tagline}</p>

        <div className="relative mx-auto mt-12 flex h-72 max-w-xs items-center justify-center">
          <span className="absolute h-40 w-40 rounded-full border border-accent-amber/30 animate-ping [animation-duration:3s]" />
          <span className="absolute h-56 w-56 rounded-full border border-accent-amber/20 animate-ping [animation-duration:3s] [animation-delay:0.5s]" />
          <OrbArt color={color.hex} className="relative h-56 w-56" />
        </div>

        <div className="mt-10 flex justify-center">
          <ColorPicker colors={product.colors} selected={colorId} onSelect={setColorId} />
        </div>
      </section>

      {/* Room-sensing radar — unique to Orb */}
      <section ref={ref} className="reveal mx-auto max-w-shell px-6 py-16 text-center md:py-24">
        <h2 className="text-headline font-semibold tracking-tight">It learns your room in seconds.</h2>
        <div className="relative mx-auto mt-10 h-48 w-48 overflow-hidden rounded-full bg-mist">
          <div
            className="absolute inset-0 origin-center animate-spin [animation-duration:3s]"
            style={{
              background: 'conic-gradient(from 0deg, rgba(255,159,10,0.35), transparent 40%)',
            }}
          />
          <div className="absolute inset-4 rounded-full bg-paper" />
        </div>
        <p className="mx-auto mt-6 max-w-sm text-steel">
          A short acoustic ping maps hard and soft surfaces, then tunes output automatically — no app required.
        </p>
      </section>

      <FeatureGrid features={product.features} accent={product.accent} />
      <SpecTable specs={product.specs} />
      <GalleryStrip product={product} color={color.hex} labels={product.gallery} />

      <section className="border-t border-hairline bg-white py-20">
        <BuyPanel product={product} colorId={colorId} onColorChange={setColorId} />
      </section>
    </div>
  )
}
