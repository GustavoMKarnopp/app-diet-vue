<template>
  <div>
    <div>
      <Estatisticas></Estatisticas>
      <EstatisticasGeral></EstatisticasGeral>
    </div>
    <!-- <div>{{this.$route.name}}</div> -->
  </div>
</template>
<script>
export default{
  name: 'Indice',
  components: {
    // eslint-disable-next-line import/extensions
    Estatisticas: () => import('../components/EstatisticasComponents/Estatisticas-dieta.vue'),
    // eslint-disable-next-line import/extensions
    EstatisticasGeral: () => import('../components/EstatisticasComponents/Estatisticas-dieta-geral.vue'),
  },
};
</script>
<style>
.container{
  padding: 0px !important;
}
</style>
