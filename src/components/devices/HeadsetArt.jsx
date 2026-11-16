export default function HeadsetArt({ color = '#d9dadb', className = '' }) {
  return (
    <svg viewBox="0 0 400 240" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="visorGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2a2e" />
          <stop offset="100%" stopColor="#060607" />
        </linearGradient>
        <filter id="visorShadow" x="-20%" y="-30%" width="140%" height="180%">
          <feDropShadow dx="0" dy="20" stdDeviation="20" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>
      <path d="M60 120 Q60 50 200 50 Q340 50 340 120 Q340 170 280 170 L240 170 Q220 140 200 140 Q180 140 160 170 L120 170 Q60 170 60 120 Z"
        fill={color} filter="url(#visorShadow)" />
      <path d="M85 118 Q85 72 200 72 Q315 72 315 118 Q315 150 270 150 L245 150 Q228 122 200 122 Q172 122 155 150 L130 150 Q85 150 85 118 Z"
        fill="url(#visorGlass)" />
      <ellipse cx="150" cy="112" rx="22" ry="14" fill="#fff" opacity="0.05" />
      <ellipse cx="250" cy="112" rx="22" ry="14" fill="#fff" opacity="0.05" />
      {/* strap */}
      <path d="M60 110 Q20 110 20 150" stroke={color} strokeWidth="16" strokeLinecap="round" fill="none" />
      <path d="M340 110 Q380 110 380 150" stroke={color} strokeWidth="16" strokeLinecap="round" fill="none" />
    </svg>
  )
}
