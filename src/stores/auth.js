import { defineStore } from 'pinia';
import httpClient from '@/services/http-client';
import router from '@/router/index';

export const useAuth = defineStore('auth', {
  state: () => ({ token: null }),
  getters: {},
  actions: {
    login(credentials) {
      httpClient.post('/auth', credentials).then((response) => {
        const token = response.data.token;
        httpClient.setAuthToken(token);
        this.token = token;
        router.push({ name: 'admin.equipamentos' });
      });
    }
  },
  persist: true
});
