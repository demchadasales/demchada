import { getProductBySlug } from '../../data/products'
import TabletArt from '../../components/devices/TabletArt'
import BuyPanel from '../../components/ui/BuyPanel'
import FeatureGrid from '../../components/ui/FeatureGrid'
import SpecTable from '../../components/ui/SpecTable'
import GalleryStrip from '../../components/ui/GalleryStrip'
import { useReveal } from '../../hooks/useReveal'

const product = getProductBySlug('slate-pro')

export default function SlatePro() {
  const color = product.colors[0]
  const textRef = useReveal()
  const barsRef = useReveal()

  return (
    <div>
      {/* Hero: diagonal split, mint wash, tablet + stylus */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 bg-gradient-to-br from-accent-mint/10 to-transparent"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0% 100%)' }}
        />
        <div className="relative mx-auto grid max-w-shell grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div ref={textRef} className="reveal order-2 text-center md:order-1 md:text-left">
            <p className="mb-3 text-sm font-medium text-accent-mint">{product.category}</p>
            <h1 className="text-hero-sm font-semibold tracking-tight md:text-hero">Slate Pro</h1>
            <p className="mt-4 text-xl text-graphite/80 md:text-2xl">{product.tagline}</p>
            <p className="mx-auto mt-4 max-w-sm text-steel md:mx-0">{product.shortBlurb}</p>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <div className="animate-floatSlow">
              <TabletArt color={color.hex} withPencil className="h-[420px] w-[340px] drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Latency comparison — unique to Slate Pro */}
      <section ref={barsRef} className="reveal mx-auto max-w-shell px-6 py-20 md:py-28">
        <h2 className="mb-10 text-center text-headline font-semibold tracking-tight">
          Feels like pen on paper.
        </h2>
        <div className="mx-auto max-w-md space-y-6">
          <div>
            <div className="mb-1.5 flex justify-between text-sm text-steel">
              <span>StylusTouch</span>
              <span>~0ms perceived</span>
            </div>
            <div className="h-3 w-full rounded-full bg-mist">
              <div className="h-3 w-[4%] rounded-full bg-accent-mint" />
            </div>
          </div>
          <div>
            <div className="mb-1.5 flex justify-between text-sm text-steel">
              <span>Typical capacitive stylus</span>
              <span>~20ms</span>
            </div>
            <div className="h-3 w-full rounded-full bg-mist">
              <div className="h-3 w-[70%] rounded-full bg-hairline" />
            </div>
          </div>
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
