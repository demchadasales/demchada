export default function TabletArt({ color = '#e5e6e8', className = '', withPencil = false }) {
  return (
    <svg viewBox="0 0 320 420" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tabScreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141416" />
          <stop offset="100%" stopColor="#000" />
        </linearGradient>
        <filter id="tabShadow" x="-30%" y="-20%" width="160%" height="150%">
          <feDropShadow dx="0" dy="22" stdDeviation="22" floodColor="#000" floodOpacity="0.26" />
        </filter>
      </defs>
      <rect x="20" y="10" width="280" height="400" rx="26" fill={color} filter="url(#tabShadow)" />
      <rect x="32" y="22" width="256" height="376" rx="16" fill="url(#tabScreen)" />
      <circle cx="160" cy="14" r="3" fill="#333" />
      <rect x="56" y="60" width="150" height="9" rx="4.5" fill="#fff" opacity="0.12" />
      <rect x="56" y="82" width="110" height="9" rx="4.5" fill="#fff" opacity="0.08" />
      <rect x="56" y="300" width="208" height="70" rx="10" fill="#fff" opacity="0.05" />
      {withPencil && (
        <g transform="rotate(32 260 340)">
          <rect x="250" y="120" width="14" height="220" rx="7" fill="#f2f2f2" stroke="#d6d6d6" />
          <path d="M250 120 L264 120 L257 100 Z" fill="#e3e3e3" />
          <rect x="250" y="300" width="14" height="40" rx="2" fill="#dadada" />
        </g>
      )}
    </svg>
  )
}
