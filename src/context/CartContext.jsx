import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'demchada_cart_v1'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* storage unavailable — ignore */
    }
  }, [items])

  function addItem(product, variant) {
    setIsOpen(true)
    setItems((prev) => {
      const lineId = `${product.id}__${variant?.colorId || 'default'}__${variant?.configId || 'base'}`
      const existing = prev.find((i) => i.lineId === lineId)
      if (existing) {
        return prev.map((i) => (i.lineId === lineId ? { ...i, qty: i.qty + 1 } : i))
      }
      return [
        ...prev,
        {
          lineId,
          productId: product.id,
          name: product.name,
          tagline: product.tagline,
          price: variant?.price ?? product.price,
          colorName: variant?.colorName,
          colorHex: variant?.colorHex,
          configLabel: variant?.configLabel,
          qty: 1,
          accent: product.accent,
        },
      ]
    })
  }

  function removeItem(lineId) {
    setItems((prev) => prev.filter((i) => i.lineId !== lineId))
  }

  function clearCart() {
    setItems([])
  }

  function setQty(lineId, qty) {
    setItems((prev) =>
      prev
        .map((i) => (i.lineId === lineId ? { ...i, qty: Math.max(1, qty) } : i))
        .filter((i) => i.qty > 0)
    )
  }

  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.price * i.qty, 0), [items])
  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items])

  const value = {
    items,
    addItem,
    removeItem,
    clearCart,
    setQty,
    subtotal,
    count,
    isOpen,
    setIsOpen,
    isSearchOpen,
    setIsSearchOpen,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
