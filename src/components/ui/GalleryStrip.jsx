import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import DeviceArt from '../devices/DeviceArt'

export default function GalleryStrip({ product, color, labels }) {
  const scrollerRef = useRef(null)
  const ref = useReveal()

  function scrollBy(dx) {
    scrollerRef.current?.scrollBy({ left: dx, behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="reveal mx-auto max-w-shell px-6 py-16 md:py-24">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-headline font-semibold tracking-tight">Gallery</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scrollBy(-320)}
            className="rounded-full border border-hairline p-2 hover:border-graphite transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollBy(320)}
            className="rounded-full border border-hairline p-2 hover:border-graphite transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div ref={scrollerRef} className="hide-scrollbar flex gap-5 overflow-x-auto scroll-smooth pb-2">
        {labels.map((label, i) => (
          <div
            key={label}
            className="flex h-80 w-72 flex-shrink-0 flex-col items-center justify-center rounded-3xl bg-mist"
          >
            <DeviceArt product={product} color={color} className="h-48 w-48" />
            <span className="mt-4 text-sm text-steel">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
