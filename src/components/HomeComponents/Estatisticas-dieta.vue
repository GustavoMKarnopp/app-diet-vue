<template>
  <div class="estatisticas-layout">
    <div :class="requestDiet.metricasDietas.porcentagemMetricas <= 60 ? 'metricas-dietas-red' : 'metricas-dietas-green'">
      <div></div>
      <div v-if="requestDiet">
        <h1>{{requestDiet.metricasDietas.porcentagemMetricas}}%</h1>
        <span>das refeições dentro da dieta.</span>
      </div>
      <div v-else>
        <span>Cadastre Refeições!</span>
      </div>
      <div :class="requestDiet.metricasDietas.porcentagemMetricas <= 60 ? 'metricas-icon-red' : 'metricas-icon-gren'" >
        <a @click="$router.push({ name: 'Estatisticas'})">
          <span width="50" class="mdi mdi-arrow-top-right"></span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
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
  }

};
</script>
<style>
  .estatisticas-layout {
    width: 100%;
  }
  .metricas-dietas-green {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    background-color: #E5F0DB;
    padding: 20px;
    border-radius: 8px;
  }
  .metricas-dietas-red {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    background-color: #F4E6E7;
    padding: 20px;
    border-radius: 8px;
  }
  .metricas-icon-gren{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    color: #639339;
  }
  .metricas-icon-red{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    color: #BF3B44;
  }
  .mdi-arrow-top-right::before{
    font-size: 24px;
  }
</style>
