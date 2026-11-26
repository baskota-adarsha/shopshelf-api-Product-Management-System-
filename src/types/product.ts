export interface ProductInput {
  name: string;
  description?: string | null;
  price: number;
  stock?: number;
  category?: string | null;
}

export interface ProductData {
  id: number;
  name: string;
  description?: string | null;
  price: number;
  stock: number;
  category: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ListParams {
  page: number;
  limit: number;
  category?: string;
}
export interface ProductsPage {
  data: ProductData[];
  meta: { total: number; page: number; limit: number; totalPages: number };
}
