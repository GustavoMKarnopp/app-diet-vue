<template>
  <div>
    <RefeicaoHead></RefeicaoHead>
    <RefeicaoDetalhe></RefeicaoDetalhe>
  </div>
</template>
<script>
export default {
  name: 'Refeicao',
  components: {
    // eslint-disable-next-line import/extensions
    RefeicaoHead: () => import('../components/Refeicao/Refeicao-dentro-dieta.vue'),
    // eslint-disable-next-line import/extensions
    RefeicaoDetalhe: () => import('../components/Refeicao/Refeicao-detalhe.vue'),
  },
};
</script>
<style>

.tela-refeicao{
  width: 100vw; /* 100% da largura da viewport */
  height: 100vh; /* 100% da altura da viewport */
  position: absolute; /* ou 'fixed' se precisar que fique fixo na tela ao rolar */
  top: 0;
  left: 0;
}
</style>
