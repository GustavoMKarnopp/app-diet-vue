<template>
  <div class="registro-dieta-geral">
    <form class="fomulario" action="">
      <div>
        <div class="nome">
            <label for="Nome">Nome</label>
            <input id="Nome" class="input-register" type="text">
        </div>
        <div class="descricao">
          <div class="txt-dentro">
            <strong>Descrição</strong>
          </div>
            <!--eslint-disable-next-line max-len-->
            <textarea id="descricao" name="descricao" rows="4" cols="50"></textarea>
        </div>
        <div class="data-time">
          <div class="data">
            <label for="">Data</label>
            <input class="input-register" type="date">
          </div>
          <div class="hora">
            <label for="">Hora</label>
            <input class="input-register" type="time">
          </div>
        </div>
        <div class="question">
          <div class="txt-dentro">
            <strong>Esta dentro da dieta?</strong>
          </div>
          <div class="resp-question">
            <div class="btn-sim">
              <button class="button-registro-dieta">
                <div class="bola-bolean-greeam"></div>
                <span>Sim</span>
              </button>
            </div>
            <div class="btn-nao">
              <button class="button-registro-dieta">
                <div class="bola-bolean-red"></div>
                <span>Não</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-cad">
        <button class="cadastrar-refeicao">
          Cadastrar refeição
        </button>
      </div>
    </form>
  </div>
</template>
<style>
.fomulario{
  display: flex;
  flex-direction: column;
  padding: 15px;

  height: 100vh;
}
label{
  text-align: justify;
  font-weight: bold;
}

.nome{
  display: flex;
  flex-direction: column;

  margin-top: 30px;
}
.descricao{
  display: flex;
  flex-direction: column;

  margin-top: 30px;
}

#descricao {
  width: 100%; /* Faz com que o textarea ocupe a largura total do seu contêiner */
  padding: 12px 20px;
  box-sizing: border-box; /* Garante que o padding não aumente o tamanho definido */
  border: 1px solid #ccc; /* Define a cor da borda */
  border-radius: 4px; /* Arredonda as bordas do campo */
  background-color: #f8f8f8; /* Define a cor de fundo */
  resize: vertical; /* Permite ao usuário redimensionar o textarea verticalmente */
  font-size: 16px; /* Tamanho da fonte */
}

.input-description{
  height: 100px;
}
.data-time{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 30px;
}
.data{
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-right: 5px;
}
.hora{
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-left: 5px;
}

.question{
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

.resp-question{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.registro-dieta-geral {
  padding: 15px;
  border-radius: 15px 15px 0px 0px;

  background-color: white;
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
  max-width: 992px;


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 15px;
}
input {
  background-color: #f0f0f0; /* cor de fundo */
  color: #333; /* cor do texto */
}

input {
  border: 1px solid #ccc; /* borda */
  border-radius: 4px; /* cantos arredondados */
}

input {
  padding: 8px 12px; /* espaçamento interno */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* sombra */
}

input:focus {
  border-color: #4A90E2; /* cor da borda ao focar */
  outline: none; /* remove o contorno padrão */
}

input:hover {
  cursor: text; /* muda o cursor para indicar edição */
}


input[type="text"] {
  background-color: #f0f0f0;
}

input[type="submit"] {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.txt-dentro{
  text-align: justify;
}

.resp-question div{
  width: 100%;
}

.btn-sim{
  padding-right: 5px;
}
.bola-bolean-greeam{
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
.btn-nao{
  padding-left: 5px;
}

.button-registro-dieta {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #EFF0F0; /* Cor de fundo verde */
  color: #1B1D1E; /* Cor do texto */
  padding: 15px 32px; /* Espaçamento interno */
  text-align: center; /* Alinhamento do texto */
  text-decoration: none; /* Remover sublinhados */
  font-size: 14px; /* Tamanho da fonte */
  cursor: pointer; /* Forma do cursor */
  border: none; /* Remover bordas */
  border-radius: 5px; /* Bordas arredondadas */
  width: 100%;
}

.button-registro-dieta:hover {
  background-color: #EFF0F0; /* Cor de fundo ao passar o mouse */
}

.btn-cad{
  margin-top: 30px;
}
.cadastrar-refeicao {
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
}

.cadastrar-refeicao:hover {
  background-color: #333638; /* Cor de fundo ao passar o mouse */
}
</style>
