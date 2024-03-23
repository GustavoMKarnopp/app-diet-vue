<!-- eslint-disable import/extensions -->
<template>
  <div class="flex-diet-desktop">
    <div>
      <Estatisticas></Estatisticas>
    </div>
    <div>
      <Refeicoes></Refeicoes>
    </div>
  </div>
</template>
<script>
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
export default{
  name: 'Home',
  data() {

  },
  components: {

    Estatisticas: () => import('./../components/Estatisticas-dieta.vue'),
    Refeicoes: () => import('./../components/Refeicoes-dieta.vue'),
  },

};
</script>
<style>
.flex-diet-desktop{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
