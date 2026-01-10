import { Link } from 'react-router-dom';

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  quantity_unit: string;
  image: string;
  shopUrl: string;
};

export default function ProductCard({
  id,
  name,
  price,
  quantity,
  quantity_unit,
  image,
  shopUrl,
}: ProductCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-56 w-full shrink-0 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5 flex-1">
        <h2 className="text-lg font-semibold tracking-tight">{name}</h2>

        <p className="text-sm text-zinc-500">
          {quantity}
          {quantity_unit} · {price} zł
        </p>

        {/* Actions */}
        <div className="mt-auto flex gap-2">
          <Link
            to={`/product/${id}`}
            className="flex-1 rounded-xl border border-zinc-300 px-4 py-2 text-center text-sm font-medium transition hover:bg-zinc-100"
          >
            Szczegóły
          </Link>

          <a
            href={shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-xl bg-black px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Kup
          </a>
        </div>
      </div>
    </div>
  );
}
