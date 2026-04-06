import { create } from 'zustand';
import { authService } from '../services/api';

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  loading: true,

  // Inicializar desde localStorage
  initAuth: () => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      set({
        user: JSON.parse(storedUser),
        isAuthenticated: true,
        loading: false,
      });
    } else {
      set({ loading: false });
    }
  },

  // Login
  login: async (email, password) => {
    const data = await authService.login(email, password);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    set({
      user: data.user,
      isAuthenticated: true,
    });
    return data;
  },

  // Logout
  logout: () => {
    authService.logout();
    set({
      user: null,
      isAuthenticated: false,
    });
  },
}));
