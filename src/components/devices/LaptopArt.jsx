export default function LaptopArt({ color = '#e5e6e8', className = '', open = true }) {
  if (!open) {
    return (
      <svg viewBox="0 0 480 60" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="lidShadow" x="-20%" y="-50%" width="140%" height="300%">
            <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#000" floodOpacity="0.25" />
          </filter>
        </defs>
        <rect x="20" y="6" width="440" height="20" rx="6" fill={color} filter="url(#lidShadow)" />
        <ellipse cx="240" cy="16" rx="6" ry="2" fill="#000" opacity="0.15" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 520 360" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lapScreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a1c" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <linearGradient id="lapBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.88" />
        </linearGradient>
        <filter id="lapShadow" x="-20%" y="-10%" width="140%" height="140%">
          <feDropShadow dx="0" dy="28" stdDeviation="26" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* screen */}
      <rect x="110" y="8" width="300" height="200" rx="14" fill={color} filter="url(#lapShadow)" />
      <rect x="120" y="18" width="280" height="180" rx="8" fill="url(#lapScreen)" />
      <rect x="140" y="40" width="160" height="7" rx="3.5" fill="#fff" opacity="0.14" />
      <rect x="140" y="58" width="110" height="7" rx="3.5" fill="#fff" opacity="0.09" />
      <circle cx="260" cy="12" r="2" fill="#333" />
      {/* base */}
      <path d="M40 212 H480 L460 240 H60 Z" fill="url(#lapBody)" />
      <rect x="40" y="208" width="440" height="8" rx="4" fill={color} />
      {/* keyboard deck hint */}
      <rect x="150" y="214" width="220" height="18" rx="3" fill="#000" opacity="0.12" />
      {/* trackpad */}
      <rect x="235" y="236" width="50" height="4" rx="2" fill="#000" opacity="0.18" />
    </svg>
  )
}
