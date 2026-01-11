export type ProductVariant = {
  quantity: number;
  quantity_unit: string;
  price: number;
  shopUrl?: string;
  image: string;
  sellable: boolean; // ✅ DOSTĘPNOŚĆ WARIANTU
};

export type Product = {
  id: string;
  name: string;
  description: string;
  sklad: string;
  zastosowanie: string;
  dzialanie: string;

  variants: ProductVariant[];

  sellableExternally: boolean;
  sellableThroughMessages: boolean;
};
