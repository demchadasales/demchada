export default function OrbArt({ color = '#f5f5f7', className = '', pulse = false }) {
  return (
    <svg viewBox="0 0 220 260" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="orbBody" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0.78" />
        </radialGradient>
        <filter id="orbShadow" x="-30%" y="-10%" width="160%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>
      {pulse && (
        <>
          <circle cx="110" cy="130" r="95" fill="none" stroke="currentColor" strokeOpacity="0.15" className="animate-ping" />
        </>
      )}
      <path d="M30 130 Q30 30 110 30 Q190 30 190 130 L190 220 Q190 240 170 240 L50 240 Q30 240 30 220 Z"
        fill="url(#orbBody)" filter="url(#orbShadow)" />
      {Array.from({ length: 24 }).map((_, i) => {
        const row = Math.floor(i / 6)
        const col = i % 6
        return (
          <circle
            key={i}
            cx={62 + col * 20}
            cy={90 + row * 20}
            r="3.2"
            fill="#000"
            opacity="0.12"
          />
        )
      })}
      <circle cx="110" cy="55" r="5" fill="#000" opacity="0.2" />
    </svg>
  )
}
