<!-- eslint-disable no-trailing-spaces -->
<template>
  <div class="refeicoes-layout">
    <div class="title-ref">
      <span>Refeições</span>
    </div>
    <div>
      <button class="button-nova-refeicao">
        <span width="50" class="mdi mdi-plus"></span>
        Nova Refeição
      </button>
    </div>
  </div>
</template>
<style>
.refeicoes-layout{
  margin-top: 20px;
  width: 100%;
}
.title-ref{
  width: 100%;
  display: flex;
  padding: 10px 0;
}
.button-nova-refeicao {
  background-color: #333638; /* Cor de fundo verde */
  color: white; /* Cor do texto */
  padding: 15px 32px; /* Espaçamento interno */
  text-align: center; /* Alinhamento do texto */
  text-decoration: none; /* Remover sublinhados */
  display: inline-block; /* Tipo de exibição */
  font-size: 14px; /* Tamanho da fonte */
  margin: 4px 2px; /* Margem externa */
  cursor: pointer; /* Forma do cursor */
  border: none; /* Remover bordas */
  border-radius: 8px; /* Bordas arredondadas */
  width: 100%;
}

.button-nova-refeicao:hover {
  background-color: #333638; /* Cor de fundo ao passar o mouse */
}
</style>
