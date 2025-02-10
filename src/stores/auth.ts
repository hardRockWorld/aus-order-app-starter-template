import { defineStore } from 'pinia';
import { ref } from 'vue';
import PocketBase from 'pocketbase';

export const useAuthStore = defineStore('auth', () => {
  const pb = new PocketBase('http://127.0.0.1:8090');
  const currentUser = ref(pb.authStore.model);
  const isAuthenticated = ref(pb.authStore.isValid);

  async function login(email: string, password: string) {
    try {
      const authData = await pb.collection('users').authWithPassword(email, password);
      currentUser.value = authData.record;
      isAuthenticated.value = true;
      return authData;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  async function logout() {
    pb.authStore.clear();
    currentUser.value = null;
    isAuthenticated.value = false;
  }

  return {
    currentUser,
    isAuthenticated,
    login,
    logout,
    pb,
  };
});
