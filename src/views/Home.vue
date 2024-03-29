<template>
  <div>
    <div class="flex-diet-desktop">
      <Estatisticas></Estatisticas>
      <Refeicoes></Refeicoes>
    </div>
    <div class="divider"></div>
    <div>
      <ListaRefeicoes></ListaRefeicoes>
    </div>
  </div>
</template>
<script>
export default{
  name: 'Home',
  components: {

    Estatisticas: () => import('../components/HomeComponents/Estatisticas-dieta.vue'),
    Refeicoes: () => import('../components/HomeComponents/Refeicoes-dieta.vue'),
    ListaRefeicoes: () => import('../components/HomeComponents/Lista-de-refeicoes.vue'),
  },

};
</script>
<style>
.flex-diet-desktop{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.divider {
  height: 1px;
  width: 100%;
  background-color: #e0e0e0; /* Cor do divisor */
  margin: 16px 0; /* Espaçamento vertical antes e depois do divisor */
}

/*Telefones Celulares (Small Devices): Estilos para telas menores que 600px */
@media (max-width: 600px) {
  .flex-diet-desktop{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
}
@media (min-width: 601px) and (max-width: 960px) {
  /*Tablets / Telefones de Tela Grande (Medium Devices): Estilos para telas entre 601px e 960px */
}
@media (min-width: 961px) and (max-width: 1264px) {
  /*Desktops Pequenos (Large Devices): Estilos para telas entre 961px e 1264px */
}
@media (min-width: 1265px) {
  /*Desktops Grandes (Extra Large Devices): Estilos para telas maiores que 1264px */
}
</style>
