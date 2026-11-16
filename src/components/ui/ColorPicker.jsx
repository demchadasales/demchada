export default function ColorPicker({ colors, selected, onSelect }) {
  const current = colors.find((c) => c.id === selected) || colors[0]
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-3">
        {colors.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            aria-label={c.name}
            className={`h-8 w-8 rounded-full ring-offset-2 transition-all duration-300 ease-demchada ${
              selected === c.id ? 'ring-2 ring-graphite scale-110' : 'ring-1 ring-hairline hover:scale-105'
            }`}
            style={{ backgroundColor: c.hex }}
          />
        ))}
      </div>
      <span className="text-sm text-steel">{current?.name}</span>
    </div>
  )
}
