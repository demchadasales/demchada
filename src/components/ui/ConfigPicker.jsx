import { formatPrice } from './format'

export default function ConfigPicker({ configs, selected, onSelect, basePrice }) {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-3">
      {configs.map((c) => (
        <button
          key={c.id}
          onClick={() => onSelect(c.id)}
          className={`flex items-center justify-between rounded-2xl border px-5 py-3.5 text-left transition-all duration-200 ${
            selected === c.id
              ? 'border-graphite bg-mist shadow-sm'
              : 'border-hairline hover:border-graphite/40'
          }`}
        >
          <span className="font-medium">{c.label}</span>
          <span className="text-steel">{formatPrice(basePrice + c.priceDelta)}</span>
        </button>
      ))}
    </div>
  )
}
