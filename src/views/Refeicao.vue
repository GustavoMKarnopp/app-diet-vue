<template>
  <div :class="requestDiet.userParamsData.data.is_on_diet == 1 ? 'tela-refeicao-green' : 'tela-refeicao-red' ">
    <RefeicaoHead></RefeicaoHead>
    <RefeicaoDetalhe :requestDiet_userParamsData="requestDiet.userParamsData"></RefeicaoDetalhe>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Refeicao',
  components: {
    RefeicaoHead: () => import('../components/Refeicao/Refeicao-dentro-dieta.vue'),
    RefeicaoDetalhe: () => import('../components/Refeicao/Refeicao-detalhe.vue'),
  },
  mounted(){
    this.setRouteParams()
  },
  computed: {
    ...mapState({
      requestDiet: 'requestDiet'
    }),
  },
  methods: {
    ...mapActions({
      setRouteParams: 'requestDiet/setRouteParams',
    }),

  },
};
</script>
<style>

.tela-refeicao-green{
  width: 100vw; /* 100% da largura da viewport */
  height: 100vh; /* 100% da altura da viewport */
  top: 0;
  left: 0;
  background-color: #E5F0DB !important;
}
.tela-refeicao-red{
  width: 100vw; /* 100% da largura da viewport */
  height: 100vh; /* 100% da altura da viewport */
  top: 0;
  left: 0;
  background-color: #F4E6E7 !important;
}
</style>
