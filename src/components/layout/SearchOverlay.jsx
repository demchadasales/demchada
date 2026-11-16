import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../ui/format'

export default function SearchOverlay() {
  const { isSearchOpen, setIsSearchOpen } = useCart()
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!isSearchOpen) setQuery('')
  }, [isSearchOpen])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setIsSearchOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setIsSearchOpen])

  const results = useMemo(() => {
    if (!query.trim()) return products
    const q = query.toLowerCase()
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q)
    )
  }, [query])

  if (!isSearchOpen) return null

  return (
    <div className="fixed inset-0 z-[70] bg-paper/98 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-2xl flex-col px-6 pt-24">
        <div className="flex items-center gap-3 border-b border-hairline pb-4">
          <Search className="h-6 w-6 text-steel" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search demchada.com"
            className="w-full bg-transparent text-2xl font-light outline-none placeholder:text-steel"
          />
          <button onClick={() => setIsSearchOpen(false)} aria-label="Close search">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-6 flex-1 overflow-y-auto pb-16">
          {results.length === 0 ? (
            <p className="text-steel">No results for "{query}".</p>
          ) : (
            <ul className="space-y-1">
              {results.map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/products/${p.slug}`}
                    onClick={() => setIsSearchOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-4 hover:bg-mist transition-colors"
                  >
                    <div>
                      <p className="font-medium">{p.name}</p>
                      <p className="text-sm text-steel">{p.tagline}</p>
                    </div>
                    <span className="text-sm text-steel">{formatPrice(p.price)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
