<template>
  <!-- POSSO ADICIONAR HOME GLOBAL -->
  <div>
    <template>
      <div>
        <Headers v-if="['Home'].includes(this.$route.name)"></Headers>
      </div>
      <div>
        <ModalExclusao></ModalExclusao>
        <ModalCadastro></ModalCadastro>
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
    Headers: () => import('./components/Header.vue'),
    ModalExclusao: () => import('../components/Modal/Modal-global.vue'),
    ModalCadastro: () => import('../components/Modal/Modal-cadastro-user.vue'),
  },
};
</script>
