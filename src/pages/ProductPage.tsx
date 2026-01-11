import { useParams, Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../data/products';

export default function ProductPage() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialVariant = Number(searchParams.get('variant') ?? 0);

  const product = products.find((p) => p.id === id);
  const [variantIndex, setVariantIndex] = useState(initialVariant);
  const [tab, setTab] = useState<'sklad' | 'zastosowanie' | 'dzialanie'>('sklad');

  useEffect(() => {
    setSearchParams({ variant: variantIndex.toString() });
  }, [variantIndex, setSearchParams]);

  if (!product) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <div className="rounded-3xl bg-red-50 border border-red-200 p-8">
          <h1 className="text-2xl font-bold text-red-900 mb-2">Produkt nie istnieje</h1>
          <p className="text-red-700 mb-6">Nie znaleziono produktu o podanym identyfikatorze.</p>
          <Link
            to="/"
            className="inline-block rounded-xl bg-black px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Wróć do strony głównej
          </Link>
        </div>
      </div>
    );
  }

  const variant = product.variants[variantIndex];

  const image = variant.image;
  const isAvailable = variant.sellable;
  const showBuy = isAvailable && product.sellableExternally && !!variant.shopUrl;
  const showMessage = !showBuy && product.sellableThroughMessages;
  const showUnavailable = !showBuy && !showMessage;

  const tabs = [
    { key: 'sklad', label: 'Skład' },
    { key: 'zastosowanie', label: 'Zastosowanie' },
    { key: 'dzialanie', label: 'Działanie' },
  ] as const;

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
      <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-3xl bg-zinc-100">
          <img
            src={image}
            alt={product.name}
            className="h-full w-full object-cover aspect-square"
          />
          {!isAvailable && (
            <div className="absolute top-4 right-4 rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
              Niedostępny
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
              {product.name}
            </h1>
            <p className="mt-3 text-2xl font-semibold text-zinc-900">{variant.price} zł</p>
            <p className="mt-1 text-sm text-zinc-500">
              {variant.quantity}
              {variant.quantity_unit}
            </p>
          </div>

          {/* VARIANTS */}
          {product.variants.length > 1 && (
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">Wybierz rozmiar:</label>
              <div className="flex flex-wrap gap-2">
                {product.variants
                  .slice() // kopiujemy tablicę, żeby nie modyfikować oryginału
                  .sort((a, b) => a.quantity - b.quantity) // sortowanie po quantity rosnąco
                  .map((v) => {
                    const originalIndex = product.variants.indexOf(v); // żeby wiedzieć, który indeks w stanie
                    const selected = originalIndex === variantIndex;
                    return (
                      <button
                        key={originalIndex}
                        type="button"
                        onClick={() => setVariantIndex(originalIndex)}
                        className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                          selected
                            ? 'bg-black text-white'
                            : v.sellable
                              ? 'bg-zinc-100 hover:bg-zinc-200'
                              : 'bg-zinc-100 text-zinc-400 line-through hover:bg-zinc-200'
                        }`}
                      >
                        <div className="flex flex-col items-center gap-0.5">
                          <span>
                            {v.quantity}
                            {v.quantity_unit}
                          </span>
                          <span
                            className={`text-xs ${
                              selected
                                ? 'text-zinc-300'
                                : v.sellable
                                  ? 'text-zinc-500'
                                  : 'text-zinc-400'
                            }`}
                          >
                            {v.price} zł
                          </span>
                        </div>
                      </button>
                    );
                  })}
              </div>
            </div>
          )}

          <p className="whitespace-pre-line text-zinc-600 leading-relaxed">{product.description}</p>

          {/* TABS */}
          <div className="rounded-3xl border border-zinc-200 overflow-hidden bg-white">
            <div className="flex border-b border-zinc-200">
              {tabs.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`flex-1 px-4 py-3 text-sm font-medium uppercase tracking-wide ${
                    tab === key
                      ? 'bg-zinc-50 text-zinc-900 border-b-2 border-zinc-900'
                      : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="p-6 min-h-50 whitespace-pre-line text-zinc-600">{product[tab]}</div>
          </div>

          {/* ACTIONS – JEDNO STAŁE MIEJSCE */}
          <div className="flex flex-col gap-3 mt-2">
            {showBuy && (
              <a
                href={variant.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-black px-6 py-3.5 text-center text-sm font-medium text-white hover:bg-zinc-800"
              >
                Kup teraz
              </a>
            )}

            {showMessage && (
              <a
                href="https://www.facebook.com/profile.php?id=61584802815205"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border  px-6 py-3.5 bg-blue-50 border-blue-200 text-blue-700 text-center text-sm font-medium"
              >
                Zapytaj o dostępność
              </a>
            )}

            {showUnavailable && (
              <div className="rounded-xl bg-red-50 border border-red-200 px-6 py-3.5 text-center text-sm font-medium text-red-700 cursor-not-allowed">
                Produkt chwilowo niedostępny
              </div>
            )}

            <Link
              to="/"
              className="rounded-xl border border-zinc-300 px-6 py-3.5 text-center text-sm font-medium hover:bg-zinc-50"
            >
              ← Wróć do strony głównej
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
