<template>
  <div class="refeicao-geral">
    <div>
      <div class="dado-alimento">
        <h3>Sanduíche</h3>
        <div style="text-align: start;">
          <span>Sanduíche de pão integral com atum e salada de alface e tomate.</span>
        </div>
      </div>
      <div class="dthr">
        <h3>Data e hora</h3>
        <div>
          12/08/2022 às 16:00
        </div>
      </div>
      <div class="btnbola">
        <div class="bolinha">
          <div class="bola-bolean-red"></div>
          <small>dentro da dieta</small>
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
  computed: {
    ...mapState(['modalGlobal']),
  },
  methods: {
    ...mapActions({
      modalGlobalExclusao: 'modalGlobal/modalGlobalExclusao',
    }),

    modalGlobalExclusaoF() {
      return this.modalGlobalExclusao(true);
    },
  },
};

</script>
<style>
.bola-bolean-red{
  width: 10px !important;
  height: 10px;
  border-radius: 50%;
  background-color: #639339;
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
