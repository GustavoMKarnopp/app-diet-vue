<template>
  <div class="refeicao-geral">
    <div v-for="(value, key, index) in requestDiet_userParamsData" :key="index">
      <div class="dado-alimento">
        <h3>Sanduíche</h3>
        <div style="text-align: start;">
          <span>{{value.description}}</span>
        </div>
      </div>
      <div class="dthr">
        <h3>Data e hora</h3>
        <div>
          {{new Date(value.date).toLocaleString()}}
        </div>
      </div>
      <div class="btnbola">
        <div class="bolinha">
          <div :class="value.is_on_diet == 1 ? 'bola-bolean-green' : 'bola-bolean-red'"></div>
          <small v-if="value.is_on_diet == 1">dentro da dieta</small>
          <small v-else>fora da dieta</small>
        </div>
      </div>

      <div class="btns-dix">
        <div class="btn-cad">
          <button class="cadastrar-ref">
            Editar Refeição
          </button>
        </div>
        <div class="btn-cad">
          <button @click="modalGlobalExclusaoF()" class="excluir-ref">
            Excluir Refeição
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'RefeicaoDetalhe',
  props:{
    requestDiet_userParamsData: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      modalGlobal: 'modalGlobal',
    }),
  },
  methods: {
    ...mapActions({
      modalGlobalExclusao: 'modalGlobal/modalGlobalExclusao',
      deletarDieta: 'requestDiet/deletarDieta',
    }),
    modalGlobalExclusaoF() {
      this.modalGlobalExclusao(true);
      return 
    },
  },
};

</script>
<style>
.bola-bolean-green{
  width: 10px !important;
  height: 10px;
  border-radius: 50%;
  background-color: #639339;
  margin: 0 5px;
}
.bola-bolean-red{
  width: 10px !important;
  height: 10px;
  border-radius: 50%;
  background-color: #BF3B44;
  margin: 0 5px;
}
.refeicao-geral {
  padding: 15px;
  border-radius: 15px 15px 0px 0px;

  background-color: white;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  max-width: 992px;
}
.dado-alimento{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dthr{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.btnbola{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 15px 0;
}
.bolinha{
  display: flex;
  align-items: center;
  flex-direction: row;

  background-color: #EFF0F0;
  padding: 10px;
  border-radius: 8px;
}

.cadastrar-ref {
  background-color: #333638; /* Cor de fundo verde */
  color: white; /* Cor do texto */
  padding: 15px; /* Espaçamento interno */
  text-align: center; /* Alinhamento do texto */
  text-decoration: none; /* Remover sublinhados */
  display: inline-block; /* Tipo de exibição */
  font-size: 14px; /* Tamanho da fonte */
  cursor: pointer; /* Forma do cursor */
  border: none; /* Remover bordas */
  border-radius: 5px; /* Bordas arredondadas */

  width: 100%;
  margin-bottom: 15px;
}

.cadastrar-ref:hover {
  background-color: #333638; /* Cor de fundo ao passar o mouse */
}
.excluir-ref {
  color: rgb(0, 0, 0); /* Cor do texto */
  padding: 15px; /* Espaçamento interno */
  text-align: center; /* Alinhamento do texto */
  text-decoration: none; /* Remover sublinhados */
  display: inline-block; /* Tipo de exibição */
  font-size: 14px; /* Tamanho da fonte */
  cursor: pointer; /* Forma do cursor */
  border: 1px solid #1B1D1E; /* Remover bordas */
  border-radius: 5px; /* Bordas arredondadas */

  width: 100%;
}

@media (max-width: 600px) {
  .refeicao-geral {
    padding: 15px;
    border-radius: 15px 15px 0px 0px;
    margin: 15px;
    background-color: white;
    padding: 15px;
    max-width: 992px;
  }
}
@media (min-width: 601px) and (max-width: 1024px) {
  /*Tablets / Telefones de Tela Grande (Medium Devices): Estilos para telas entre 601px e 960px */
  .refeicao-geral {
    padding: 15px;
    border-radius: 15px 15px 0px 0px;
    margin: 15px;
    background-color: white;
    padding: 15px;
    max-width: 992px;
  }
}
@media (min-width: 961px) and (max-width: 1264px) {
  /*Desktops Pequenos (Large Devices): Estilos para telas entre 961px e 1264px */
}
@media (min-width: 1265px) {
  /*Desktops Grandes (Extra Large Devices): Estilos para telas maiores que 1264px */
}

</style>
