<template>
  <div class="estatisticas-layout">
    <div class="metricas-dietas">
      <div></div>
      <div>
        <h1>{{metricasDietEstatisticPocento}}%</h1>
        <span>das refeições dentro da dieta.</span>
      </div>
      <div class="metricas-icon">
        <a @click="$router.push({ name: 'Estatisticas'})">
          <span width="50" class="mdi mdi-arrow-top-right"></span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getItem as getItemLocal
} from '../../util/localStorage';
import { mapState, mapActions } from 'vuex';
export default{
  name: 'Home',
  data(){
    return{
      metricasDietEstatisticPocento : '00',
    }
  },
  watch:{
    
  },
  mounted() {
    this.getMetriacas();
    this.getMetrixEstatistic()
  },
  computed: {
    ...mapState({
      requestDiet: 'requestDiet'
    }),
  },
  methods: {
    ...mapActions({
      getMetriacas: 'requestDiet/getMetriacas',
    }),
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
  .metricas-dietas {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    background-color: #E5F0DB;
    padding: 20px;
    border-radius: 8px;
  }
  .metricas-icon{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    color: #639339;
  }
  .mdi-arrow-top-right::before{
    font-size: 24px;
  }
</style>
