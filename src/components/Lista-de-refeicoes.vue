<template>
  <div>
    <div class="">
      <h3 class="data-list-dieta">22.03.2024</h3>
    </div>
    <div class="background-list">
      <div>
        <strong>20:00</strong>
      </div>
      <div class="divider-vertical"></div>
      <div>
        <span>Whey protein com leite</span>
      </div>
      <div class="bola-color-green"></div>
    </div>
    <div class="background-list">
      <div>
        <strong>20:00</strong>
      </div>
      <div class="divider-vertical"></div>
      <div>
        <span>Whey protein com leite</span>
      </div>
      <div class="bola-color-red"></div>
    </div>
  </div>
</template>
<style>
.data-list-dieta{
  text-align: start;
}
.background-list{
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
  background-color: #e0e0e0; /* Cor do divisor */
  margin: 16px 0; /* Espaçamento vertical antes e depois do divisor */
}
.bola-color-green{
  background-color: greenyellow;
  width: 20px;
  height: 20px;
  border-radius: 100%;
}
.bola-color-red{
  background-color: greenyellow;
  width: 20px;
  height: 20px;
  border-radius: 100%;
}
</style>
