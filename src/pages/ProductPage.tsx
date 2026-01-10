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

  // Aktualizuj URL gdy zmienia się wariant
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
            className="inline-block rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Wróć do strony głównej
          </Link>
        </div>
      </div>
    );
  }

  const variant = product.variants[variantIndex];
  const isAvailable = variant.sellable;
  const canBuyExternally = isAvailable && product.sellableExternally && variant.shopUrl;
  const canAskAboutAvailability = isAvailable && product.sellableThroughMessages;

  const tabs = [
    { key: 'sklad', label: 'Skład' },
    { key: 'zastosowanie', label: 'Zastosowanie' },
    { key: 'dzialanie', label: 'Działanie' },
  ] as const;

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
      <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="relative overflow-hidden rounded-3xl bg-zinc-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover aspect-square"
          />
          {!isAvailable && (
            <div className="absolute top-4 right-4 rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
              Niedostępny
            </div>
          )}
        </div>

        {/* Content */}
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

          {/* Variant selector */}
          {product.variants.length > 1 && (
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-700">Wybierz rozmiar:</label>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v, i) => {
                  const isSelected = i === variantIndex;
                  return (
                    <button
                      key={i}
                      disabled={!v.sellable}
                      onClick={() => setVariantIndex(i)}
                      className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                        isSelected
                          ? 'bg-black text-white'
                          : v.sellable
                            ? 'bg-zinc-100 hover:bg-zinc-200'
                            : 'bg-zinc-100 text-zinc-400 cursor-not-allowed line-through'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-0.5">
                        <span>
                          {v.quantity}
                          {v.quantity_unit}
                        </span>
                        <span
                          className={`text-xs ${isSelected ? 'text-zinc-300' : 'text-zinc-500'}`}
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

          {/* Tabs */}
          <div className="rounded-3xl border border-zinc-200 overflow-hidden bg-white">
            <div className="flex border-b border-zinc-200">
              {tabs.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`flex-1 px-4 py-3 text-sm font-medium uppercase tracking-wide transition-colors ${
                    tab === key
                      ? 'bg-zinc-50 text-zinc-900 border-b-2 border-zinc-900'
                      : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="p-6 min-h-[200px]">
              <div className="whitespace-pre-line text-zinc-600 leading-relaxed">
                {product[tab]}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            {isAvailable ? (
              <>
                {canBuyExternally && (
                  <a
                    href={variant.shopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-black px-6 py-3.5 text-center text-sm font-medium text-white transition hover:bg-zinc-800 active:bg-zinc-900 shadow-sm hover:shadow-md"
                  >
                    Kup teraz
                  </a>
                )}
                {canAskAboutAvailability && (
                  <Link
                    to={`/contact?product=${product.id}&variant=${variantIndex}`}
                    className="rounded-xl border border-zinc-300 bg-white px-6 py-3.5 text-center text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 hover:border-zinc-400 active:bg-zinc-100"
                  >
                    📧 Zapytaj o dostępność
                  </Link>
                )}
              </>
            ) : (
              <div className="rounded-xl bg-red-50 border border-red-200 px-6 py-3.5">
                <p className="text-center text-sm font-medium text-red-700">
                  Produkt chwilowo niedostępny
                </p>
              </div>
            )}

            <Link
              to="/"
              className="rounded-xl border border-zinc-300 px-6 py-3.5 text-center text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 hover:border-zinc-400 active:bg-zinc-100"
            >
              ← Wróć do strony głównej
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
