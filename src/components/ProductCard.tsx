import { Link } from 'react-router-dom';

type ProductCardProps = {
  productId: string;
  variantIndex: number;
  name: string;
  price: number;
  quantity: number;
  quantity_unit: string;
  image: string;
  shopUrl?: string;
  sellableExternally: boolean;
  sellableThroughMessages: boolean;
  sellable: boolean;
};

export default function ProductCard({
  productId,
  variantIndex,
  name,
  price,
  quantity,
  quantity_unit,
  image,
  shopUrl,
  sellableExternally,
  sellableThroughMessages,
  sellable,
}: ProductCardProps) {
  const isAvailable = sellable;
  const canBuyExternally = isAvailable && sellableExternally && shopUrl;
  const canAskAboutAvailability = isAvailable && sellableThroughMessages;

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-56 w-full shrink-0 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Status badge */}
        {!isAvailable && (
          <div className="absolute top-3 right-3 rounded-full bg-red-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
            Niedostępny
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex-1">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-900 line-clamp-2">
            {name}
          </h2>
          <p className="mt-1.5 text-sm text-zinc-500">
            {quantity}
            {quantity_unit} · <span className="font-semibold text-zinc-900">{price} zł</span>
          </p>
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-col gap-2">
          {isAvailable ? (
            <>
              {/* Główne przyciski akcji */}
              <div className="flex gap-2">
                <Link
                  to={`/product/${productId}?variant=${variantIndex}`}
                  className="flex-1 rounded-xl border border-zinc-300 px-4 py-2.5 text-center text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 hover:border-zinc-400 active:bg-zinc-100"
                >
                  Szczegóły
                </Link>
                {canBuyExternally && (
                  <a
                    href={shopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-xl bg-black px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-zinc-800 active:bg-zinc-900 shadow-sm hover:shadow-md"
                  >
                    Kup teraz
                  </a>
                )}
              </div>

              {/* Dodatkowy przycisk kontaktu */}
              {canAskAboutAvailability && (
                <Link
                  to={`/contact?product=${productId}&variant=${variantIndex}`}
                  className="rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-center text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 hover:border-zinc-400 active:bg-zinc-100"
                >
                  📧 Zapytaj o dostępność
                </Link>
              )}
            </>
          ) : (
            <>
              {/* Gdy niedostępny - tylko szczegóły */}
              <Link
                to={`/product/${productId}?variant=${variantIndex}`}
                className="rounded-xl border border-zinc-300 px-4 py-2.5 text-center text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 hover:border-zinc-400 active:bg-zinc-100"
              >
                Zobacz szczegóły
              </Link>
              <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-2.5 text-center">
                <span className="text-sm font-medium text-red-700">
                  Produkt chwilowo niedostępny
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
