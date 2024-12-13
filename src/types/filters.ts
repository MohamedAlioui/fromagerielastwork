export interface ProductFilters {
  category: string;
  priceRange?: [number, number];
  inStock?: boolean;
  isNew?: boolean;
  sortBy?: string;
}

export interface RecipeFilters {
  category: string;
  difficulty?: 'facile' | 'moyen' | 'difficile';
  prepTime?: number;
  servings?: number;
  sortBy?: string;
}

export interface OrderFilters {
  status?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  dateRange?: [Date, Date];
  minAmount?: number;
  maxAmount?: number;
  sortBy?: string;
}