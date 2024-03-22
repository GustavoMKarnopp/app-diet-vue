<template>
  <!-- POSSO ADICIONAR HOME GLOBAL -->
  <v-main class="container">
    <template>
      <div><Headers></Headers></div>
    </template>
    <div>
        <router-view/>
    </div>
  </v-main>
</template>
<script>
export default{
  name: 'Default',
  data() {

  },
  components: {
    // eslint-disable-next-line import/extensions
    Headers: () => import('./components/Header.vue'),
  },
};
</script>
