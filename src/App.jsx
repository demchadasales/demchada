import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import SearchOverlay from './components/layout/SearchOverlay'
import CartDrawer from './components/layout/CartDrawer'

import Home from './pages/Home'
import Pulse from './pages/products/Pulse'
import Air from './pages/products/Air'
import Studio from './pages/products/Studio'
import SlatePro from './pages/products/SlatePro'
import Slate from './pages/products/Slate'
import Loop from './pages/products/Loop'
import Buds from './pages/products/Buds'
import Vista from './pages/products/Vista'
import Stream from './pages/products/Stream'
import Orb from './pages/products/Orb'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <CartProvider>
      <Nav />
      <main className="pt-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/pulse" element={<Pulse />} />
          <Route path="/products/air" element={<Air />} />
          <Route path="/products/studio" element={<Studio />} />
          <Route path="/products/slate-pro" element={<SlatePro />} />
          <Route path="/products/slate" element={<Slate />} />
          <Route path="/products/loop" element={<Loop />} />
          <Route path="/products/buds" element={<Buds />} />
          <Route path="/products/vista" element={<Vista />} />
          <Route path="/products/stream" element={<Stream />} />
          <Route path="/products/orb" element={<Orb />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <SearchOverlay />
      <CartDrawer />
    </CartProvider>
  )
}
