import { useReveal } from '../../hooks/useReveal'
import { accentText } from './format'

export default function FeatureGrid({ features, accent = 'blue' }) {
  const ref = useReveal()
  return (
    <section className="mx-auto max-w-shell px-6 py-16 md:py-24">
      <div ref={ref} className="reveal-stagger grid grid-cols-1 gap-10 md:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="space-y-3">
            <div className={`h-1.5 w-10 rounded-full ${accentText[accent]} bg-current`} />
            <h3 className="text-xl font-semibold tracking-tight">{f.title}</h3>
            <p className="text-steel leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
