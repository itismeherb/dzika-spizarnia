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

  const showBuy = isAvailable && sellableExternally && !!shopUrl;
  const showMessage = isAvailable && !showBuy && sellableThroughMessages;
  const showUnavailable = !isAvailable;

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
      {/* IMAGE */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {showUnavailable && (
          <div className="absolute top-3 right-3 rounded-full bg-red-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
            Niedostępny
          </div>
        )}
      </div>

      {/* CONTENT */}
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

        {/* ACTIONS – ZAWSZE TEN SAM UKŁAD */}
        <div className="mt-auto">
          <div className="flex gap-2">
            {/* LEWY PRZYCISK – SZCZEGÓŁY */}
            <Link
              to={`/product/${productId}?variant=${variantIndex}`}
              className="flex-1 rounded-xl border border-zinc-300 px-4 py-2.5 text-center text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 hover:border-zinc-400"
            >
              Szczegóły
            </Link>

            {/* PRAWY PRZYCISK – JEDEN SLOT */}
            {showBuy && (
              <a
                href={shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl bg-black px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-zinc-800 shadow-sm hover:shadow-md"
              >
                Kup teraz
              </a>
            )}

            {showMessage && (
              <a
                href="https://www.facebook.com/profile.php?id=61584802815205"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl bg-blue-50 border border-blue-200 px-4 py-2.5 text-center text-sm font-medium text-blue-700 transition hover:bg-blue-100"
              >
                Zapytaj
              </a>
            )}

            {showUnavailable && (
              <div className="flex-1 rounded-xl bg-red-50 border border-red-200 px-4 py-2.5 text-center text-sm font-medium text-red-700 cursor-not-allowed">
                Niedostępny
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
