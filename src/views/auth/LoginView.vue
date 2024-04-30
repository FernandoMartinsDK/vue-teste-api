<template>
  <div class="w-full h-full">
    <div class="rounded border border-gray-300 max-w-2x1 p-4">
      <form action="">
        <div class="w-full mb-6">
          <label for="login" class="block mb-2">Login</label>
          <input
            type="text"
            class="w-full rounded outline-none border border-gray-300 p-2 focus:border-gray-900 focus:ring transition duration-300 ease-in-out"
            id="login"
            placeholder="Login do usuario"
            v-model="credentials.login"
          />
        </div>

        <div class="w-full mb-6">
          <label for="password" class="block mb-2">Senha</label>
          <input
            type="password"
            class="w-full rounded outline-none border border-gray-300 p-2 focus:border-gray-900 focus:ring transition duration-300 ease-in-out"
            id="password"
            placeholder="Senha"
            v-model="credentials.password"
          />
        </div>

        <button
          class="px-4 py-2 rounded border border-green-900 bg-green-600 hover:bg-green-900 text-white font-bold transition duration-300 ease-in-out"
          v-on:click.prevent="authStore.login(credentials)"
        >
          Acessar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useAuth } from '@/stores/auth';

export default {
  data() {
    return {
      credentials: {
        login: null,
        password: null
      }
    };
  },
  computed: {
    ...mapStores(useAuth)
  }
};
</script>
