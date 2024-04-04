<template>
  <div class="estatisticas-layout">
    <div class="indice-dietas">
      <div class="indice-icon" v-if="$route.name == 'Estatisticas'">
        <a @click="$router.go(-1)">
          <span class="mdi mdi-arrow-left"></span>
        </a>
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
import { getItem as getItemLocal } from '../../util/localStorage';
import { mapState } from 'vuex';
export default{
  name: 'IndiceMetrics',
  data(){
    return{
      metricasDietEstatisticPocento : '00',
      totalMelsWatch: getItemLocal('session_diet').melsMetricas
    }
  },
  mounted(){
    this.getMetrixEstatistic()
    console.log(this.totalMelsWatch,'totoal')
  },
  watch:{
    
  },
  computed: {
    ...mapState({
        requestDiet: 'requestDiet',
    }),
  },
  methods:{
    getMetrixEstatistic(){
      // let metricasDietEstatistic = getItemLocal('session_diet').melsMetricas;
      let porcent = (this.totalMelsWatch.totalDietClean/this.totalMelsWatch.totalMels)*100
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
