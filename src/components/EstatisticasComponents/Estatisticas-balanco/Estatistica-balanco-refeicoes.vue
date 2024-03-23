<template>
  <div class="balanco">
    <div class="background-sequencia-balanco-dentro">
      <div class="dados-sequencia-balanco">
        <h1>99</h1>
        <span>refeições dentro da dieta.</span>
      </div>
    </div>
    <div class="background-sequencia-balanco-fora">
      <div class="dados-sequencia-balanco">
        <h1>10</h1>
        <span>refeições fora da dieta.</span>
      </div>
    </div>
  </div>
</template>
<style>
.balanco{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.background-sequencia-balanco-dentro{
  background-color: #E5F0DB;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 100%
}
.background-sequencia-balanco-fora{
  background-color: #F4E6E7;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 100%
}
.dados-sequencia-balanco{
  padding: 10px;
}
</style>
