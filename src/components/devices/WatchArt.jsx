export default function WatchArt({ color = '#2b2d33', band = '#1c1c1e', className = '' }) {
  return (
    <svg viewBox="0 0 240 360" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="watchFace" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#000" />
        </radialGradient>
        <filter id="watchShadow" x="-40%" y="-20%" width="180%" height="150%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#000" floodOpacity="0.28" />
        </filter>
      </defs>
      <rect x="70" y="0" width="100" height="90" rx="18" fill={band} />
      <rect x="70" y="270" width="100" height="90" rx="18" fill={band} />
      <rect x="55" y="80" width="130" height="200" rx="38" fill={color} filter="url(#watchShadow)" />
      <rect x="66" y="91" width="108" height="178" rx="28" fill="url(#watchFace)" />
      <circle cx="120" cy="180" r="46" fill="none" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="2" />
      <circle cx="120" cy="180" r="3" fill="#fff" opacity="0.5" />
      <rect x="112" y="140" width="4" height="36" rx="2" fill="#fff" opacity="0.5" />
      <rect x="120" y="180" width="30" height="3" rx="1.5" fill="#fff" opacity="0.35" />
      <rect x="186" y="150" width="8" height="24" rx="3" fill={color} />
      <rect x="186" y="186" width="8" height="14" rx="3" fill={color} />
    </svg>
  )
}
