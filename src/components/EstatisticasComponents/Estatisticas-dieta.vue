<template>
  <div class="estatisticas-layout">
    <div class="indice-dietas">
      <div class="indice-icon" v-if="$route.name == 'Estatisticas'">
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
