import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [tab, setTab] = useState<"sklad" | "zastosowanie" | "dzialanie">(
    "sklad",
  );

  if (!product) {
    return <p className="p-8 text-center text-red-500">Produkt nie istnieje</p>;
  }

  const tabs = [
    { key: "sklad", label: "Skład" },
    { key: "zastosowanie", label: "Zastosowanie" },
    { key: "dzialanie", label: "Działanie" },
  ] as const;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl bg-zinc-100 h-[500px]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
            {product.name}
          </h1>

          <p className="text-xl text-zinc-500">
            {product.quantity}
            {product.quantity_unit} · {product.price} zł
          </p>

          <p className="text-zinc-500 leading-relaxed">{product.description}</p>

          {/* Tabs */}
          <div className="rounded-3xl border border-zinc-200 overflow-hidden bg-white">
            {/* Tab headers */}
            <div className="flex border-b border-zinc-200">
              {tabs.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`flex-1 px-6 py-4 text-sm font-medium uppercase tracking-wide transition-colors ${
                    tab === key
                      ? "bg-zinc-50 text-zinc-900 border-b-2 border-zinc-900"
                      : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="p-6 min-h-[200px]">
              <div className="whitespace-pre-line text-zinc-500 leading-relaxed">
                {product[tab]}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-4">
            <a
              href={product.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl bg-black px-8 py-4 text-center text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Kup teraz
            </a>
            <Link
              to="/"
              className="rounded-xl border border-zinc-300 px-8 py-4 text-center text-sm font-medium transition hover:bg-zinc-100"
            >
              Wróć
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
