export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  isNew?: boolean;
  inStock?: boolean;
  category: string;
  description?: string;
}