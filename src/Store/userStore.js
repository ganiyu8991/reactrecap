
import { create } from 'zustand';
import api from '../Api';

const userStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: !localStorage.getItem('user'),

    // checkAuth: async () => {
    //     try {
    //         if (!localStorage.getItem('user')) {
    //             set({ loading: true });
    //         }

    //         const response = await api.get('/auth/me');
    //         if (response.data.success) {
    //             set({ user: response.data.data, loading: false });
    //             localStorage.setItem('user', JSON.stringify(response.data.data));
    //         } else {
    //             set({ user: null, loading: false });
    //             localStorage.removeItem('user');
    //         }
    //     } catch (error) {
    //         console.error('Auth check failed:', error);
    //         set({ user: null, loading: false });
    //         localStorage.removeItem('user');
    //     }
    // },

    login: async (email, password) => {
        const response = await api.post('/login', { email, password });
        if (response.data.success) {
            set({ user: response.data.data });
            localStorage.setItem('user', JSON.stringify(response.data.data));
            return response.data;
        }
    },

    signup: async (username, email, password) => {
        const response = await api.post('/signup', { username, email, password });
        if (response.data.success) {
            set({ user: response.data.data });
            localStorage.setItem('user', JSON.stringify(response.data.data));
            return response.data;
        }
    },

    logout: async () => {
        try {
            await api.get('/logout');
            set({ user: null });
            localStorage.removeItem('user');
        } catch (error) {
            console.error('logout failed:', error);
        }
    },
}));

export default userStore;