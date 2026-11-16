export function formatPrice(n) {
  return `$${n.toLocaleString('en-US')}`
}

export const accentText = {
  blue: 'text-accent-blue',
  violet: 'text-accent-violet',
  coral: 'text-accent-coral',
  mint: 'text-accent-mint',
  amber: 'text-accent-amber',
  graphite: 'text-graphite',
}

export const accentBg = {
  blue: 'bg-accent-blue',
  violet: 'bg-accent-violet',
  coral: 'bg-accent-coral',
  mint: 'bg-accent-mint',
  amber: 'bg-accent-amber',
  graphite: 'bg-graphite',
}

export const accentGradient = {
  blue: 'from-[#0a6cff] to-[#49c3ff]',
  violet: 'from-[#7b5cff] to-[#c6a9ff]',
  coral: 'from-[#ff5a5f] to-[#ffab91]',
  mint: 'from-[#00c7a0] to-[#8ff2d8]',
  amber: 'from-[#ff9f0a] to-[#ffd36e]',
  graphite: 'from-[#3a3a3c] to-[#6e6e73]',
}
