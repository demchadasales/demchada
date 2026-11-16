import PhoneArt from './PhoneArt'
import LaptopArt from './LaptopArt'
import TabletArt from './TabletArt'
import WatchArt from './WatchArt'
import EarbudsArt from './EarbudsArt'
import HeadsetArt from './HeadsetArt'
import StreamArt from './StreamArt'
import OrbArt from './OrbArt'

const byCategory = {
  Phone: PhoneArt,
  Mac: LaptopArt,
  Tablet: TabletArt,
  Watch: WatchArt,
  Audio: EarbudsArt,
  Vista: HeadsetArt,
  Home: OrbArt,
}

/** Renders the right illustrative device art for a product's category. */
export default function DeviceArt({ product, color, className }) {
  if (product.id === 'stream') return <StreamArt color={color} className={className} />
  const Comp = byCategory[product.category] || PhoneArt
  return <Comp color={color} className={className} />
}
