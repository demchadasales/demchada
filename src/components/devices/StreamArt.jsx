export default function StreamArt({ color = '#1c1c1e', className = '' }) {
  return (
    <svg viewBox="0 0 260 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="streamShadow" x="-20%" y="-30%" width="140%" height="200%">
          <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#000" floodOpacity="0.28" />
        </filter>
      </defs>
      <rect x="40" y="30" width="180" height="60" rx="14" fill={color} filter="url(#streamShadow)" />
      <rect x="40" y="30" width="180" height="60" rx="14" fill="#fff" opacity="0.03" />
      <circle cx="195" cy="60" r="4" fill="#3ddc84" opacity="0.9" />
      <rect x="55" y="48" width="70" height="4" rx="2" fill="#fff" opacity="0.15" />
      <rect x="55" y="60" width="50" height="4" rx="2" fill="#fff" opacity="0.1" />
      <ellipse cx="130" cy="95" rx="70" ry="6" fill="#000" opacity="0.12" />
    </svg>
  )
}
