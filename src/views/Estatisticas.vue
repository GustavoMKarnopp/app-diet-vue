<template>
  <div>
    <div class="container-estatisticas">
      <Estatisticas></Estatisticas>
      <EstatisticasGeral></EstatisticasGeral>
    </div>
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
.container-estatisticas{
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
  max-width: 992px;
  width: 100vw;
  height: 100vh;
}
</style>
