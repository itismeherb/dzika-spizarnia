import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ProductCard from './components/ProductCard';
import ProductPage from './pages/ProductPage';
import { products } from './data/products';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const productCards = products.flatMap((product) =>
    product.variants.map((variant, variantIndex) => ({
      productId: product.id,
      variantIndex,
      name: product.name,
      image: product.image,
      price: variant.price,
      quantity: variant.quantity,
      quantity_unit: variant.quantity_unit,
      shopUrl: variant.shopUrl,
      sellable: variant.sellable, // ✅ TU
      sellableExternally: product.sellableExternally,
      sellableThroughMessages: product.sellableThroughMessages,
    })),
  );

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <ScrollToTop />
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="text-sm font-semibold tracking-wide text-zinc-800 transition hover:text-zinc-600"
          >
            DZIKA SPIŻARNIA
          </Link>
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
                  <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
                    DZIKA SPIŻARNIA
                  </h1>
                  <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
                    Tworzę naturalne octy, soki, syropy i maści z miłości do zdrowia i naturalnych
                    składników. Wszystkie produkty powstają ręcznie, w małych partiach, z owoców,
                    ziół i korzeni pochodzących prosto z natury.
                  </p>
                  <p className="mt-4 text-sm text-zinc-400 italic">
                    Naturalnie. Lokalnie. Z sercem.
                  </p>
                </section>

                {/* OFERTA */}
                <section
                  id="oferta"
                  className="scroll-mt-28 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {productCards.map((card) => (
                    <ProductCard key={`${card.productId}-${card.variantIndex}`} {...card} />
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
              className="transition hover:text-zinc-900 hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://www.olx.pl/oferty/uzytkownik/whIz/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-zinc-900 hover:underline"
            >
              OLX
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
