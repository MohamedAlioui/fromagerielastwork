import { create } from 'zustand';
import { authService } from '../services/auth.service';
import { auth } from '../utils/auth';
import { AuthUser, LoginCredentials } from '../types/auth';

interface AuthStore {
  user: AuthUser | null;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: { name: string; email: string; password: string }) => Promise<void>;
  logout: () => void;
  clearError: () => void;
  initializeAuth: () => void;
}

export const useAuth = create<AuthStore>((set) => ({
  user: auth.getUser(),
  isLoading: false,
  error: null,

  initializeAuth: () => {
    const user = auth.getUser();
    if (user) {
      set({ user });
    }
  },

  login: async (credentials: LoginCredentials) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authService.login(credentials);
      auth.setSession(response.token, response.user);
      set({ user: response.user, isLoading: false });
    } catch (error) {
      auth.clearSession();
      set({ 
        error: error instanceof Error ? error.message : 'Une erreur est survenue lors de la connexion',
        isLoading: false,
        user: null
      });
      throw error;
    }
  },

  register: async (data) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authService.register(data);
      auth.setSession(response.token, response.user);
      set({ user: response.user, isLoading: false });
    } catch (error) {
      auth.clearSession();
      set({ 
        error: error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'inscription',
        isLoading: false,
        user: null
      });
      throw error;
    }
  },

  logout: () => {
    auth.clearSession();
    set({ user: null, error: null });
    window.location.href = '/login';
  },

  clearError: () => set({ error: null })
}));