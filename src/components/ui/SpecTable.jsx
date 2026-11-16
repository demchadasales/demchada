import { useReveal } from '../../hooks/useReveal'

export default function SpecTable({ specs, title = 'Tech specs' }) {
  const ref = useReveal()
  return (
    <section className="mx-auto max-w-shell px-6 py-20 md:py-28">
      <h2 ref={ref} className="reveal text-headline font-semibold tracking-tight mb-10">
        {title}
      </h2>
      <div className="divide-y divide-hairline border-t border-hairline">
        {specs.map((s, i) => (
          <div key={i} className="grid grid-cols-1 gap-1 py-5 md:grid-cols-[220px_1fr] md:gap-6">
            <dt className="text-sm font-medium text-steel">{s.label}</dt>
            <dd className="text-base text-graphite">{s.value}</dd>
          </div>
        ))}
      </div>
    </section>
  )
}
