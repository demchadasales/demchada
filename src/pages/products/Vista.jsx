import { useState } from 'react'
import { getProductBySlug } from '../../data/products'
import HeadsetArt from '../../components/devices/HeadsetArt'
import BuyPanel from '../../components/ui/BuyPanel'
import FeatureGrid from '../../components/ui/FeatureGrid'
import SpecTable from '../../components/ui/SpecTable'
import GalleryStrip from '../../components/ui/GalleryStrip'
import { useReveal } from '../../hooks/useReveal'

const product = getProductBySlug('vista')

export default function Vista() {
  const color = product.colors[0]
  const [mode, setMode] = useState('passthrough')
  const heroRef = useReveal()

  return (
    <div>
      {/* Hero: immersive full-bleed, violet-black gradient */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1a0f33] via-black to-black py-24 text-center text-white md:py-32">
        <div ref={heroRef} className="reveal relative mx-auto max-w-shell px-6">
          <p className="mb-3 text-sm font-medium text-accent-violet">{product.category}</p>
          <h1 className="text-hero font-semibold tracking-tight">Vista</h1>
          <p className="mx-auto mt-5 max-w-xl text-2xl text-white/70">{product.tagline}</p>
        </div>
        <div className="relative mx-auto mt-14 flex max-w-xl justify-center px-6">
          <div className="animate-floatSlow">
            <HeadsetArt color={color.hex} className="w-full drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Passthrough / digital mode toggle — unique to Vista */}
      <section className="mx-auto max-w-shell px-6 py-20 text-center md:py-28">
        <h2 className="text-headline font-semibold tracking-tight">One device, two worlds.</h2>
        <div className="mx-auto mt-8 flex max-w-xs justify-center rounded-full bg-mist p-1">
          {['passthrough', 'digital'].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`flex-1 rounded-full py-2.5 text-sm font-medium capitalize transition-all duration-300 ${
                mode === m ? 'bg-white shadow-sm' : 'text-steel'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
        <div
          className={`mx-auto mt-10 flex h-64 max-w-2xl items-center justify-center rounded-3xl text-lg transition-colors duration-500 ${
            mode === 'passthrough' ? 'bg-[#dfe9f5] text-graphite' : 'bg-[#0d0d12] text-white'
          }`}
        >
          {mode === 'passthrough'
            ? 'The room, exactly as it is — camera passthrough at sub-12ms latency.'
            : 'Fully digital environments, pinned windows, and spatial apps floating in space.'}
        </div>
      </section>

      <FeatureGrid features={product.features} accent={product.accent} />
      <GalleryStrip product={product} color={color.hex} labels={product.gallery} />
      <SpecTable specs={product.specs} />

      <section className="border-t border-hairline bg-mist py-20">
        <BuyPanel product={product} />
      </section>
    </div>
  )
}
