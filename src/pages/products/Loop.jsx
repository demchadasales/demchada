import { useState } from 'react'
import { getProductBySlug } from '../../data/products'
import WatchArt from '../../components/devices/WatchArt'
import ColorPicker from '../../components/ui/ColorPicker'
import BuyPanel from '../../components/ui/BuyPanel'
import SpecTable from '../../components/ui/SpecTable'
import GalleryStrip from '../../components/ui/GalleryStrip'
import { useReveal } from '../../hooks/useReveal'

const product = getProductBySlug('loop')

const orbitSensors = [
  { label: 'Blood oxygen', pos: 'md:top-6 md:left-6' },
  { label: 'ECG', pos: 'md:top-6 md:right-6' },
  { label: 'Depth gauge', pos: 'md:bottom-6 md:left-6' },
  { label: 'Skin temperature', pos: 'md:bottom-6 md:right-6' },
]

export default function Loop() {
  const [colorId, setColorId] = useState(product.colors[0].id)
  const color = product.colors.find((c) => c.id === colorId)
  const ref = useReveal()

  return (
    <div>
      {/* Hero: sensors in orbit around the watch face */}
      <section className="bg-gradient-to-b from-[#fff0ef] to-paper py-20 md:py-28">
        <div className="mx-auto max-w-shell px-6 text-center">
          <p className="mb-3 text-sm font-medium text-accent-coral">{product.category}</p>
          <h1 className="text-hero font-semibold tracking-tight">Loop</h1>
          <p className="mx-auto mt-4 max-w-lg text-2xl text-graphite/80">{product.tagline}</p>
        </div>

        <div ref={ref} className="reveal-stagger relative mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-4 px-6 md:block md:h-[440px]">
          <div className="col-span-2 flex justify-center md:absolute md:inset-0 md:items-center md:justify-center">
            <WatchArt color={color.hex} className="h-72 w-48 drop-shadow-2xl" />
          </div>
          {orbitSensors.map((s) => (
            <div
              key={s.label}
              className={`rounded-2xl bg-white px-4 py-3 text-center text-sm font-medium shadow-sm md:absolute md:w-40 ${s.pos}`}
            >
              {s.label}
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <ColorPicker colors={product.colors} selected={colorId} onSelect={setColorId} />
        </div>
      </section>

      <SpecTable specs={product.specs} />

      <section className="mx-auto max-w-shell px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {product.features.map((f, i) => (
            <div key={i} className="rounded-3xl bg-mist p-7">
              <h3 className="text-xl font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-steel leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <GalleryStrip product={product} color={color.hex} labels={product.gallery} />

      <section className="border-t border-hairline bg-white py-20">
        <BuyPanel product={product} colorId={colorId} onColorChange={setColorId} />
      </section>
    </div>
  )
}
