import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { navGroups } from '../../data/products'
import { useCart } from '../../context/CartContext'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [openGroup, setOpenGroup] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, setIsOpen, setIsSearchOpen } = useCart()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-paper/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]' : 'bg-paper/0'
        }`}
        onMouseLeave={() => setOpenGroup(null)}
      >
        <nav className="mx-auto flex h-12 max-w-shell items-center justify-between px-6">
          <Link to="/" className="text-[17px] font-semibold tracking-tight">
            DEMCHADA<span className="align-super text-[10px]">®</span>
          </Link>

          <ul className="hidden items-center gap-7 text-[13px] font-medium text-graphite md:flex">
            {navGroups.map((g) => (
              <li key={g.label} onMouseEnter={() => setOpenGroup(g.label)}>
                <span className="cursor-default py-4">{g.label}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
              className="text-graphite/80 hover:text-graphite transition-colors"
            >
              <Search className="h-[17px] w-[17px]" />
            </button>
            <button
              aria-label="Shopping bag"
              onClick={() => setIsOpen(true)}
              className="relative text-graphite/80 hover:text-graphite transition-colors"
            >
              <ShoppingBag className="h-[17px] w-[17px]" />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent-blue text-[10px] text-white">
                  {count}
                </span>
              )}
            </button>
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
              className="text-graphite/80 hover:text-graphite transition-colors md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>

        {/* dropdown mega-panel */}
        <div
          className={`overflow-hidden border-t border-hairline bg-paper/95 backdrop-blur-xl transition-all duration-300 ease-demchada ${
            openGroup ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {navGroups.map(
            (g) =>
              g.label === openGroup && (
                <div key={g.label} className="mx-auto max-w-shell px-6 py-8">
                  <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {g.items.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/products/${item.slug}`}
                        onClick={() => setOpenGroup(null)}
                        className="text-[15px] text-graphite hover:text-accent-blue transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-paper transition-transform duration-300 ease-demchada md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-12 items-center justify-end px-6">
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-8 px-6 py-6">
          {navGroups.map((g) => (
            <div key={g.label}>
              <h3 className="mb-3 text-sm font-semibold text-steel">{g.label}</h3>
              <ul className="space-y-3">
                {g.items.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={`/products/${item.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="text-xl font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
