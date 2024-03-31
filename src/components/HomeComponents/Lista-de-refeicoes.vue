<template>
  <div>
    <div v-for="(refeicoes, data) in objetosAgrupados[0]" :key="data">
      <div class="">
        <!--TEM QUE  AJUSTAR PARA PEGAR A DATA ATUAL-->
        <h2 class="data-list-dieta">{{ refeicoes ? $moment(data).format('DD.MM.YYYY') : 'Data não listada' }}</h2>
      </div>
      <div v-for="refeicao in refeicoes" :key="refeicao">
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
      </div>
    </div>
  </div>
</template>
<script>
import { getItem as getItemLocal, setItemLocalSession as setItemSession } from '../../util/localStorage';
export default {
  name: 'ListDieta',
  data() {
    return {
      dietas: [],
      objetosAgrupados: [],
    }
  },
  mounted() {
    this.getStorageMels();
  },
  methods: {
    getStorageMels() {
      let mels = getItemLocal('session_diet').melsTotals;

      // Verifica se mels é um array antes de prosseguir
      if (Array.isArray(mels.meals)) {
        this.dietas = mels.meals; // Atribui diretamente se já for um array
        this.objetosAgrupados.push(this.agruparPorData(this.dietas));
      } else {
        console.error('mels não é um array');
      }
    },

    agruparPorData(objetos) {

      const grupos = {};
      console.log(objetos, 'dietas');

      // Corrige o nome do método para forEach
      objetos.forEach(obj => {
        // Extraia a data (sem o tempo) para agrupar por ela
        const data = obj.created_at.split(' ')[0]; // Isso pega apenas a parte da data da string 'created_at'

        // Se o grupo para essa data ainda não existe, crie-o
        if (!grupos[data]) {
          // grupos['data'] = data
          grupos[data] = []
        }

        // Adicione o objeto ao grupo correspondente
        grupos[data].push(obj);
      });

      return grupos;
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
