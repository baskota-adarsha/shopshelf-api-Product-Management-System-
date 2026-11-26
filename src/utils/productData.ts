import type { Product } from "../models/product";
import type { ProductData } from "../types/product";

export const toData = (p: Product): ProductData => {
  return {
    id: p.id,
    name: p.name,
    description: p.description,
    price: p.price,
    stock: p.stock,
    category: p.category,
    createdAt: p.createdAt.toISOString(),
    updatedAt: p.updatedAt.toISOString(),
  };
};
