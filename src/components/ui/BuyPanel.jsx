import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import ColorPicker from './ColorPicker'
import ConfigPicker from './ConfigPicker'
import Button from './Button'
import { formatPrice, accentBg } from './format'
import { Check } from 'lucide-react'

/**
 * Optionally controlled: pass colorId + onColorChange to sync the selection
 * with something else on the page (e.g. the hero illustration's color).
 * Falls back to its own internal state when not controlled.
 */
export default function BuyPanel({ product, colorId: controlledColorId, onColorChange }) {
  const { addItem } = useCart()
  const [internalColorId, setInternalColorId] = useState(product.colors[0]?.id)
  const [configId, setConfigId] = useState(product.configs[0]?.id)
  const [justAdded, setJustAdded] = useState(false)

  const colorId = controlledColorId ?? internalColorId
  const setColorId = onColorChange ?? setInternalColorId

  const color = product.colors.find((c) => c.id === colorId)
  const config = product.configs.find((c) => c.id === configId)
  const price = product.price + (config?.priceDelta || 0)

  function handleAdd() {
    addItem(product, {
      colorId,
      colorName: color?.name,
      colorHex: color?.hex,
      configId,
      configLabel: config?.label,
      price,
    })
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1600)
  }

  return (
    <div className="mx-auto flex max-w-sm flex-col items-center gap-8 text-center">
      {product.colors.length > 1 && (
        <ColorPicker colors={product.colors} selected={colorId} onSelect={setColorId} />
      )}
      {product.configs.length > 1 && (
        <ConfigPicker
          configs={product.configs}
          selected={configId}
          onSelect={setConfigId}
          basePrice={product.price}
        />
      )}
      <div className="w-full space-y-3">
        <div className="text-2xl font-semibold">{formatPrice(price)}</div>
        <Button onClick={handleAdd} size="lg" variant="primary" className="w-full">
          {justAdded ? (
            <>
              <Check className="h-5 w-5" /> Added to Bag
            </>
          ) : (
            'Add to Bag'
          )}
        </Button>
        <p className="text-xs text-steel">Free delivery. 14-day returns. Demo checkout only.</p>
      </div>
      <span className={`h-1 w-16 rounded-full ${accentBg[product.accent]}`} />
    </div>
  )
}
