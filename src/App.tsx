import { Routes, Route } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import ProductPage from './pages/ProductPage';
import { products } from './data/products';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold tracking-wide text-zinc-800">DZIKA SPIŻARNIA</span>

          <nav className="space-x-6 text-sm font-medium text-zinc-600">
            <a href="/#oferta" className="transition hover:text-zinc-900">
              Oferta
            </a>
            <a href="#kontakt" className="transition hover:text-zinc-900">
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1 px-6 py-12">
        <Routes>
          {/* STRONA GŁÓWNA */}
          <Route
            path="/"
            element={
              <div className="mx-auto max-w-6xl">
                {/* HERO */}
                <section className="mx-auto mb-16 max-w-3xl text-center">
                  <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900">
                    DZIKA SPIŻARNIA
                  </h1>
                  <p className="text-zinc-500 leading-relaxed">
                    Tworzę naturalne octy, soki i syropy z miłości do zdrowia i naturalnych
                    składników. Wszystkie produkty powstają ręcznie, w małych partiach, z owoców,
                    ziół i korzeni pochodzących prosto z natury.
                    <br />
                    <span className="mt-2 block text-zinc-400">
                      Naturalnie. Lokalnie. Z sercem.
                    </span>
                  </p>
                </section>

                {/* OFERTA */}
                <section
                  id="oferta"
                  className="scroll-mt-28 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </section>
              </div>
            }
          />

          {/* PODSTRONA PRODUKTU */}
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer id="kontakt" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-xs text-zinc-500">© {new Date().getFullYear()} DZIKA SPIŻARNIA</p>

          <div className="flex gap-4 text-xs text-zinc-500">
            <a
              href="https://www.facebook.com/profile.php?id=61584802815205"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-zinc-900"
            >
              Facebook
            </a>
            <a
              href="https://www.olx.pl/oferty/uzytkownik/whIz/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-zinc-900"
            >
              OLX
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
