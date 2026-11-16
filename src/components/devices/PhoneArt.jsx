export default function PhoneArt({ color = '#1c1c1e', className = '' }) {
  return (
    <svg viewBox="0 0 240 480" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="phoneBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0.82" />
        </linearGradient>
        <linearGradient id="phoneGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.08" />
        </linearGradient>
        <filter id="phoneShadow" x="-40%" y="-20%" width="180%" height="150%">
          <feDropShadow dx="0" dy="24" stdDeviation="24" floodColor="#000" floodOpacity="0.28" />
        </filter>
      </defs>
      <rect x="20" y="10" width="200" height="460" rx="46" fill="url(#phoneBody)" filter="url(#phoneShadow)" />
      <rect x="28" y="18" width="184" height="444" rx="40" fill="#0a0a0c" />
      <rect x="28" y="18" width="184" height="444" rx="40" fill="url(#phoneGlass)" />
      {/* camera island */}
      <rect x="44" y="34" width="64" height="64" rx="20" fill="#000" opacity="0.55" />
      <circle cx="62" cy="52" r="12" fill="#111" stroke="#333" strokeWidth="1.5" />
      <circle cx="62" cy="52" r="6" fill="#1a1a1a" />
      <circle cx="90" cy="80" r="12" fill="#111" stroke="#333" strokeWidth="1.5" />
      <circle cx="90" cy="80" r="6" fill="#1a1a1a" />
      <circle cx="90" cy="52" r="7" fill="#161616" />
      {/* dynamic island */}
      <rect x="92" y="170" width="56" height="20" rx="10" fill="#000" />
      {/* subtle screen glow content */}
      <rect x="48" y="220" width="144" height="8" rx="4" fill="#ffffff" opacity="0.12" />
      <rect x="48" y="238" width="96" height="8" rx="4" fill="#ffffff" opacity="0.08" />
      {/* side buttons */}
      <rect x="14" y="120" width="6" height="40" rx="3" fill={color} opacity="0.9" />
      <rect x="220" y="150" width="6" height="64" rx="3" fill={color} opacity="0.9" />
    </svg>
  )
}
