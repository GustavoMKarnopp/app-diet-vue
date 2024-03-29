<template>
  <div class="estatisticas-dieta-geral">
    <div>
      <strong>Estatisticas gerais</strong>
    </div>
    <MelhorFrequencia></MelhorFrequencia>
    <RefeicoesRegistradas></RefeicoesRegistradas>
    <RefeicoesBalanco></RefeicoesBalanco>
  </div>
</template>
<script>
/* eslint-disable import/no-extraneous-dependencies */
export default{
  name: 'IndiceMetrics',
  components: {
    // eslint-disable-next-line import/extensions
    MelhorFrequencia: () => import('../../components/EstatisticasComponents/Estatistica-melhor-frequencia/Estatistica-melhor-freq.vue'),
    // eslint-disable-next-line import/extensions
    RefeicoesRegistradas: () => import('../../components/EstatisticasComponents/Estatisitcas-refeicoes/Estatisticas-refeicoes-registradas.vue'),
    // eslint-disable-next-line import/extensions
    RefeicoesBalanco: () => import('../../components/EstatisticasComponents/Estatisticas-balanco/Estatistica-balanco-refeicoes.vue'),
  },
  
};
</script>
<style>
  .estatisticas-dieta-geral {
    padding: 15px;
    border-radius: 15px 15px 0px 0px;

    background-color: white;
  }

</style>
