import { getProductBySlug } from '../../data/products'
import StreamArt from '../../components/devices/StreamArt'
import BuyPanel from '../../components/ui/BuyPanel'
import FeatureGrid from '../../components/ui/FeatureGrid'
import SpecTable from '../../components/ui/SpecTable'
import GalleryStrip from '../../components/ui/GalleryStrip'
import { useReveal } from '../../hooks/useReveal'

const product = getProductBySlug('stream')

const fakeApps = [
  { name: 'Orbit+', hex: '#0a6cff' },
  { name: 'Nightfall', hex: '#1c1c1e' },
  { name: 'PlayLoop', hex: '#ff5a5f' },
  { name: 'Current', hex: '#00c7a0' },
  { name: 'Reel', hex: '#ff9f0a' },
  { name: 'Lantern', hex: '#7b5cff' },
]

export default function Stream() {
  const color = product.colors[0]
  const ref = useReveal()

  return (
    <div>
      {/* Hero: compact horizontal banner for a small device */}
      <section className="bg-gradient-to-b from-[#eaf2ff] to-paper py-20 text-center md:py-24">
        <p className="mb-3 text-sm font-medium text-accent-blue">{product.category}</p>
        <h1 className="text-hero-sm font-semibold tracking-tight md:text-hero">Stream 4K</h1>
        <p className="mx-auto mt-4 max-w-lg text-xl text-graphite/80 md:text-2xl">{product.tagline}</p>
        <div className="mx-auto mt-10 max-w-lg px-6">
          <StreamArt color={color.hex} className="w-full drop-shadow-2xl" />
        </div>
      </section>

      {/* App grid — unique to Stream */}
      <section ref={ref} className="reveal-stagger mx-auto max-w-shell px-6 py-16 md:py-24">
        <h2 className="mb-10 text-center text-headline font-semibold tracking-tight">
          Every app. One search.
        </h2>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
          {fakeApps.map((app) => (
            <div
              key={app.name}
              className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl text-xs font-medium text-white"
              style={{ backgroundColor: app.hex }}
            >
              {app.name}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-md text-center text-steel">
          Fictional app tiles shown for illustration — search spans every installed app at once.
        </p>
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
