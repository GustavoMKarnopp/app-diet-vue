<template>
  <div class="estatisticas-layout">
    <div class="indice-dietas">
      <div class="indice-icon">
        <span class="mdi mdi-arrow-left"></span>
      </div>
      <div>
        <h1>{{ metricasDietEstatisticPocento }}%</h1>
        <span>das refeições dentro da dieta.</span>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
import {
  getItem as getItemLocal
} from '../../util/localStorage';
export default{
  name: 'IndiceMetrics',
  data(){
    return{
      metricasDietEstatisticPocento : '00',
    }
  },
  mounted(){
    this.getMetrixEstatistic()
  },
  methods:{
    getMetrixEstatistic(){
      let metricasDietEstatistic = getItemLocal('session_diet').melsMetricas;
      let porcent = (metricasDietEstatistic.totalDietClean/metricasDietEstatistic.totalMels)*100
      this.metricasDietEstatisticPocento = porcent.toFixed(2)
    }
  }
};
</script>
<style>
  .estatisticas-layout {
    width: 100%;
  }
  .indice-dietas {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    padding: 50px;
  }
  .indice-icon{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    color: #639339;
  }
  .mdi-arrow-left::before{
    font-size: 24px !important;
  }
</style>
