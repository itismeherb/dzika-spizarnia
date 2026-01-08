import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p className="p-8 text-center text-red-500">Produkt nie istnieje</p>;
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl bg-zinc-100 h-[500px] md:h-[600px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-start gap-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400">
            Produkt
          </p>

          <h1 className="text-4xl font-bold tracking-tight">{product.name}</h1>

          <p className="text-xl text-zinc-600">
            {product.quantity}
            {product.quantity_unit} · {product.price} zł
          </p>

          <p className="whitespace-pre-line text-zinc-700 leading-relaxed">
            {product.description}
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href={product.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-black px-8 py-4 text-center text-white transition hover:bg-zinc-800"
            >
              Kup teraz
            </a>

            <Link
              to="/"
              className="rounded-xl border border-zinc-300 px-8 py-4 text-center transition hover:bg-zinc-100"
            >
              Wróć
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
