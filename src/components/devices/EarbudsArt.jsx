export default function EarbudsArt({ color = '#f5f5f7', className = '', caseOpen = true }) {
  return (
    <svg viewBox="0 0 320 260" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="budShadow" x="-30%" y="-20%" width="160%" height="150%">
          <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#000" floodOpacity="0.22" />
        </filter>
      </defs>
      {/* case bottom */}
      <rect x="90" y="140" width="140" height="100" rx="30" fill={color} filter="url(#budShadow)" />
      {caseOpen && <rect x="90" y="110" width="140" height="36" rx="18" fill={color} opacity="0.9" transform="rotate(-8 160 128)" />}
      {/* buds */}
      <g filter="url(#budShadow)">
        <ellipse cx="135" cy="60" rx="20" ry="26" fill={color} />
        <rect x="150" y="52" width="26" height="10" rx="5" fill={color} />
        <ellipse cx="190" cy="80" rx="20" ry="26" fill={color} />
        <rect x="205" y="72" width="26" height="10" rx="5" fill={color} />
      </g>
      <circle cx="128" cy="54" r="5" fill="#000" opacity="0.15" />
      <circle cx="183" cy="74" r="5" fill="#000" opacity="0.15" />
    </svg>
  )
}
