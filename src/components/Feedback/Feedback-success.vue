<!-- eslint-disable max-len -->
<template>
  <div style="justify-content:center; display:flex; align-items:center; flex-direction: column; height: 100vh;">
    <div>
      <h2 style="color:#639339; margin-bottom:0px">Continue assim!</h2>
      <span>Você continua <b>dentro da dieta</b>. Muito bem!</span>
    </div>
    <!-- <div>
      <h2 style="color:#BF3B44; margin-bottom:0px">Que pena!</h2>
      <span>Você <b>saiu da dieta</b> dessa vez, mas continue se esforçando e não  desista!</span>
    </div> -->
    <div class="img-feedback">
      <img width="300" src="../../assets/img-feedback/feliz.png" alt="">
    </div>
    <!-- <div class="img-feedback">
      <img src="../../assets/img-feedback/triste.png" alt="">
    </div> -->
    <div>
      <button class="button-feedback">
        Ir para a página inicial
      </button>
    </div>
  </div>
</template>
<style>
.img-feedback{
  display: flex;
  align-items: center;
  justify-content: center;
}
.button-feedback {
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
}

.button-feedback:hover {
  background-color: #333638; /* Cor de fundo ao passar o mouse */
}
</style>
