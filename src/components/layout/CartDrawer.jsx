import { useState } from 'react'
import { X, Minus, Plus, Trash2, CheckCircle2 } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../ui/format'
import Button from '../ui/Button'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, setQty, subtotal, clearCart } = useCart()
  const [justOrdered, setJustOrdered] = useState(false)
  const [orderTotal, setOrderTotal] = useState(0)

  function handleCheckout() {
    setOrderTotal(subtotal)
    setJustOrdered(true)
    clearCart()
  }

  function handleClose() {
    setIsOpen(false)
    // reset the confirmation state after the drawer has slid away
    setTimeout(() => setJustOrdered(false), 400)
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-[70] bg-black/30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={handleClose}
      />
      <aside
        className={`fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col bg-paper shadow-2xl transition-transform duration-400 ease-demchada ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <h2 className="text-lg font-semibold">{justOrdered ? 'Order placed' : 'Bag'}</h2>
          <button onClick={handleClose} aria-label="Close bag">
            <X className="h-5 w-5" />
          </button>
        </div>

        {justOrdered ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <CheckCircle2 className="h-14 w-14 text-accent-mint" />
            <h3 className="mt-5 text-xl font-semibold">Thanks for your order!</h3>
            <p className="mt-2 text-steel">
              This is a demonstration checkout — no real payment was processed and nothing will
              ship. Your demo order total was <span className="font-medium text-graphite">{formatPrice(orderTotal)}</span>.
            </p>
            <Button variant="primary" size="lg" className="mt-7" onClick={handleClose}>
              Continue shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center text-steel">
                  <p className="text-lg">Your bag is empty.</p>
                  <p className="text-sm">Add a product to see it here.</p>
                </div>
              ) : (
                <ul className="divide-y divide-hairline">
                  {items.map((i) => (
                    <li key={i.lineId} className="flex gap-4 py-5">
                      <div
                        className="h-16 w-16 flex-shrink-0 rounded-xl"
                        style={{ backgroundColor: i.colorHex || '#e5e6e8' }}
                      />
                      <div className="flex-1">
                        <p className="font-medium">{i.name}</p>
                        <p className="text-sm text-steel">
                          {[i.colorName, i.configLabel].filter(Boolean).join(' · ')}
                        </p>
                        <div className="mt-2 flex items-center gap-3">
                          <button
                            onClick={() => setQty(i.lineId, i.qty - 1)}
                            className="rounded-full border border-hairline p-1 hover:border-graphite"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-4 text-center text-sm">{i.qty}</span>
                          <button
                            onClick={() => setQty(i.lineId, i.qty + 1)}
                            className="rounded-full border border-hairline p-1 hover:border-graphite"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => removeItem(i.lineId)}
                            className="ml-auto text-steel hover:text-accent-coral"
                            aria-label="Remove"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <span className="whitespace-nowrap font-medium">{formatPrice(i.price * i.qty)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-hairline px-6 py-5 space-y-4">
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <Button variant="primary" size="lg" className="w-full" onClick={handleCheckout}>
                  Checkout
                </Button>
                <p className="text-center text-xs text-steel">
                  Demonstration cart only — no real payment is processed.
                </p>
              </div>
            )}
          </>
        )}
      </aside>
    </>
  )
}
