<template>
  <transition class="transition" name="modal" v-if="modalGlobal.showModalExclusao">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div>
            <h3>Deseja realmente excluir o registro da refeição?</h3>
          </div>
          <div class="modal-footer">
            <button @click="modalGlobalExclusao(false)" class="nao-excluir-ref">
              Cancelar
            </button>

            <button @click="modalGlobalExclusaoF()" class="excluir-ref">
              Sim, excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['modalGlobal']),
  },
  methods: {
    ...mapActions({
      modalGlobalExclusao: 'modalGlobal/modalGlobalExclusao',
    }),
  },
};
</script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;

}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-footer{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
}
.excluir-ref {
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
  margin: 5px;
}

.excluir-ref:hover {
  background-color: #333638; /* Cor de fundo ao passar o mouse */
}
.nao-excluir-ref {
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
  margin: 5px;
}
</style>
