import { useState } from 'react'
import { getProductBySlug } from '../../data/products'
import LaptopArt from '../../components/devices/LaptopArt'
import ColorPicker from '../../components/ui/ColorPicker'
import BuyPanel from '../../components/ui/BuyPanel'
import FeatureGrid from '../../components/ui/FeatureGrid'
import SpecTable from '../../components/ui/SpecTable'
import GalleryStrip from '../../components/ui/GalleryStrip'
import { useReveal } from '../../hooks/useReveal'

const product = getProductBySlug('air')

export default function Air() {
  const [colorId, setColorId] = useState(product.colors[0].id)
  const color = product.colors.find((c) => c.id === colorId)
  const headingRef = useReveal()
  const statRef = useReveal()

  return (
    <div>
      {/* Hero: centered, airy, headline above a floating laptop */}
      <section className="bg-gradient-to-b from-[#f3edff] to-paper">
        <div className="mx-auto max-w-shell px-6 py-20 text-center md:py-28">
          <p className="mb-3 text-sm font-medium text-accent-violet">{product.category}</p>
          <h1 ref={headingRef} className="reveal text-hero font-semibold tracking-tight">
            Air
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-2xl text-graphite/80">{product.tagline}</p>
          <p className="mx-auto mt-4 max-w-md text-steel">{product.shortBlurb}</p>
          <div className="mt-8 flex justify-center">
            <ColorPicker colors={product.colors} selected={colorId} onSelect={setColorId} />
          </div>
        </div>
        <div className="mx-auto flex max-w-shell justify-center px-6 pb-16">
          <div className="animate-floatSlow">
            <LaptopArt color={color.hex} className="h-72 w-full max-w-2xl drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Weight stat callout — unique to Air */}
      <section ref={statRef} className="reveal border-y border-hairline bg-white py-16 text-center">
        <p className="text-6xl font-semibold tracking-tight text-accent-violet md:text-8xl">2.1 lbs</p>
        <p className="mt-3 text-lg text-steel">Lighter than a paperback. Faster than it looks.</p>
      </section>

      <FeatureGrid features={product.features} accent={product.accent} />
      <GalleryStrip product={product} color={color.hex} labels={product.gallery} />
      <SpecTable specs={product.specs} />

      <section className="border-t border-hairline bg-mist py-20">
        <BuyPanel product={product} colorId={colorId} onColorChange={setColorId} />
      </section>
    </div>
  )
}
