<template>
  <a href="#" @click.prevent="logout" class="block mb-10 text-red-800 hover:underline">Sair</a>
  {{ equipamentos }}
</template>

<script>
import httpClient from '@/services/HttpClient.js';
import storage from '@/services/Storage.js';

export default {
  data() {
    return {
      equipamentos: []
    };
  },
  beforeRouteEnter(to, from, next) {
    httpClient
      .get('/tipoEquipamento')
      .then((response) => next((vm) => (vm.equipamentos = response.data)))
      .catch((err) => {
        console.log(err.response);
      });
  },
  methods: {
    logout() {
      httpClient.post('/auth-refresh').then((response) => {
        storage.remove('token');
        location.href('/auth/login');
      });
    }
  }
};
</script>
