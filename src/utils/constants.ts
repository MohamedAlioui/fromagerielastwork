// Authentication
export const AUTH_TOKEN_KEY = 'auth_token';
export const AUTH_USER_KEY = 'auth_user';
export const JWT_EXPIRES_IN = '7d';

// API Configuration
export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
};

// Product Categories
export const PRODUCT_CATEGORIES = [
  { id: 'all', name: 'Tous les produits' },
  { id: 'semi-cure', name: 'Semi-curé' },
  { id: 'mozzarella', name: 'Mozzarella' },
  { id: 'gouda', name: 'Gouda' },
  { id: 'nouveau', name: 'Nouveautés' }
] as const;

// Recipe Categories
export const RECIPE_CATEGORIES = [
  { id: 'all', name: 'Toutes les recettes' },
  { id: 'entrees', name: 'Entrées' },
  { id: 'plats-principaux', name: 'Plats principaux' },
  { id: 'desserts', name: 'Desserts' }
] as const;

// Recipe Difficulties
export const RECIPE_DIFFICULTIES = [
  { id: 'facile', name: 'Facile' },
  { id: 'moyen', name: 'Moyen' },
  { id: 'difficile', name: 'Difficile' }
] as const;

// Sort Options
export const SORT_OPTIONS = {
  products: [
    { value: 'featured', label: 'En vedette' },
    { value: 'newest', label: 'Nouveautés' },
    { value: 'price-asc', label: 'Prix: Croissant' },
    { value: 'price-desc', label: 'Prix: Décroissant' }
  ],
  recipes: [
    { value: 'featured', label: 'En vedette' },
    { value: 'prep-asc', label: 'Temps de préparation ↑' },
    { value: 'prep-desc', label: 'Temps de préparation ↓' },
    { value: 'difficulty-asc', label: 'Difficulté ↑' },
    { value: 'difficulty-desc', label: 'Difficulté ↓' }
  ]
} as const;

// Weight Options
export const WEIGHT_OPTIONS = [
  { value: 0.5, label: '500g' },
  { value: 1, label: '1 kg' },
  { value: 2, label: '2 kg' },
  { value: 5, label: '5 kg' }
] as const;

// Error Messages
export const ERROR_MESSAGES = {
  auth: {
    invalidCredentials: 'Email ou mot de passe incorrect',
    unauthorized: 'Non autorisé à accéder à cette ressource',
    sessionExpired: 'Votre session a expiré, veuillez vous reconnecter'
  },
  validation: {
    required: 'Ce champ est requis',
    invalidEmail: 'Email invalide',
    passwordLength: 'Le mot de passe doit contenir au moins 6 caractères',
    passwordMatch: 'Les mots de passe ne correspondent pas'
  }
} as const;