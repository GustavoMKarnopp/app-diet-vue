<template>
  <!-- POSSO ADICIONAR HOME GLOBAL -->
  <div>
    <template>
      <div>
        <Headers v-if="['Home'].includes(this.$route.name)"></Headers>
      </div>
      <div>
        <ModalExclusao></ModalExclusao>
      </div>
    </template>
    <div>
        <router-view/>
    </div>
  </div>
</template>
<script>
export default{
  name: 'Default',
  components: {
    // eslint-disable-next-line import/extensions
    Headers: () => import('./components/Header.vue'),
    // eslint-disable-next-line import/extensions, import/no-unresolved
    ModalExclusao: () => import('../components/Modal/Modal-global.vue'),
  },
};
</script>
