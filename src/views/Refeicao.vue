<template>
  <div class="tela-refeicao">
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
  top: 0;
  left: 0;
}
</style>
