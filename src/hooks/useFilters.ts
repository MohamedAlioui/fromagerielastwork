import { useState } from 'react';

interface UseFiltersProps<T> {
  initialFilters: T;
  onFilterChange?: (filters: T) => void;
}

export function useFilters<T>({ initialFilters, onFilterChange }: UseFiltersProps<T>) {
  const [filters, setFilters] = useState<T>(initialFilters);

  const updateFilter = <K extends keyof T>(key: K, value: T[K]) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    onFilterChange?.(initialFilters);
  };

  return {
    filters,
    updateFilter,
    resetFilters
  };
}