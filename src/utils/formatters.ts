export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('fr-TN', {
    style: 'currency',
    currency: 'TND'
  }).format(amount);
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('fr-TN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date);
};

export const formatWeight = (weight: number): string => {
  return weight >= 1 ? `${weight} kg` : `${weight * 1000} g`;
};