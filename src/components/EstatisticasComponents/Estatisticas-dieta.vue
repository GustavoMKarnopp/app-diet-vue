<template>
  <div class="estatisticas-layout">
    <div :class="requestDiet.metricasDietas.porcentagemMetricas <= 60 ? 'indice-dietas-red' : 'indice-dietas-green'">
      <div :class="requestDiet.metricasDietas.porcentagemMetricas <= 60 ? 'indice-icon-red' : 'indice-icon-green'" v-if="$route.name == 'Estatisticas'">
        <a @click="$router.go(-1)">
          <span class="mdi mdi-arrow-left"></span>
        </a>
      </div>
      <div>
        <h1>{{ requestDiet.metricasDietas.porcentagemMetricas }}%</h1>
        <span>das refeições dentro da dieta.</span>
      </div>
      <div></div>
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
  .indice-dietas-green {
    display: flex;
    flex-direction: row;
    background-color: #E5F0DB;
    justify-content: space-between;
    padding: 50px;
  }
  .indice-dietas-red {
    display: flex;
    flex-direction: row;
    background-color: #F4E6E7;
    justify-content: space-between;
    padding: 50px;
  }
  .indice-icon-green{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    color: #639339;
  }
  .indice-icon-red{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    color: #BF3B44;
  }
  .mdi-arrow-left::before{
    font-size: 24px !important;
  }
</style>
