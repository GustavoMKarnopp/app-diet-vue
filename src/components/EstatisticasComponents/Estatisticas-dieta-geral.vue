<template>
  <div class="estatisticas-dieta-geral">
    <div>
      <strong>Estatisticas gerais</strong>
    </div>
    <MelhorFrequencia :freqClea="dadosMetricas.dietClean"></MelhorFrequencia>
    <RefeicoesRegistradas :refeicoesRegist="dadosMetricas.totalMels"></RefeicoesRegistradas>
    <RefeicoesBalanco :refeicoesDentro="dadosMetricas.totalDietClean" :refeicoesFora="dadosMetricas.totalDietDirty"></RefeicoesBalanco>

  </div>
</template>
<script>
import { getItem as getItemLocal } from '../../util/localStorage';
export default{
  name: 'IndiceMetrics',
  data(){
    return{
      dadosMetricas: ''
    }
  },
  components: {
    MelhorFrequencia: () => import('../../components/EstatisticasComponents/Estatistica-melhor-frequencia/Estatistica-melhor-freq.vue'),
    RefeicoesRegistradas: () => import('../../components/EstatisticasComponents/Estatisitcas-refeicoes/Estatisticas-refeicoes-registradas.vue'),
    RefeicoesBalanco: () => import('../../components/EstatisticasComponents/Estatisticas-balanco/Estatistica-balanco-refeicoes.vue'),
  },
  mounted(){
    this.getMetrix()
  },
  methods:{
    getMetrix(){
      let metricasDiet = getItemLocal('session_diet').melsMetricas;
      this.dadosMetricas = metricasDiet
    }
  }
};
</script>
<style>
  .estatisticas-dieta-geral {
    padding: 15px;
    border-radius: 15px 15px 0px 0px;

    background-color: white;
  }

</style>
