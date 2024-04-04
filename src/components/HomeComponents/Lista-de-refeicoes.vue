<template>
  <div>
    <div v-for="(refeicoes, data) in requestDiet.dadosStorage" :key="data">
      <div class="">
        <!--TEM QUE  AJUSTAR PARA PEGAR A DATA ATUAL-->
        <h2 class="data-list-dieta">{{ refeicoes ? $moment(data).format('DD.MM.YYYY') : 'Data não listada' }}</h2>
      </div>
      <div v-for="refeicao in refeicoes" :key="refeicao">
        <a @click="pegaId(refeicao)">
          <div class="background-list">
            <div style="width: 100%;">
              <!-- <strong>{{ new Date(refeicao.date) }}</strong> -->
              <strong>{{ $moment(refeicao.date).format('h:mm') }}</strong>
            </div>
            <div class="divider-vertical"></div>
            <div style="width: 100%;">
              <span>{{ refeicao.description }}</span>
            </div>
            <div style="width: 100%; display:flex; align-items: center; justify-content: center;" >
              <div :class="refeicao.is_on_diet === 1 ? 'bola-color-green' : 'bola-color-red'"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'ListDieta',
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      requestDiet: 'requestDiet'
    }),
  },
  mounted() {
    this.getListTotalDietas()
  },
  methods: {
    ...mapActions({
      getListTotalDietas: 'requestDiet/getListTotalDietas',
      setRouteParams: 'requestDiet/setRouteParams',
    }),
    pegaId(data){
      this.setRouteParams({data})
      this.$router.push({ name: 'Refeicao', params: { id: data.id }})
    }
  }
}
</script>
<style>
.data-list-dieta {
  text-align: start;
}

.background-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin: 5px 0 5px 0;
}

.divider-vertical {
  height: 30px;
  width: 2px;
  background-color: #e0e0e0;
  /* Cor do divisor */
  margin: 16px 0;
  /* Espaçamento vertical antes e depois do divisor */
}

.bola-color-green {
  background-color: #d1e9ad;
  width: 20px;
  height: 20px;
  border-radius: 100%;
}

.bola-color-red {
  background-color: #F3BABD;
  width: 20px;
  height: 20px;
  border-radius: 100%;
}
</style>
