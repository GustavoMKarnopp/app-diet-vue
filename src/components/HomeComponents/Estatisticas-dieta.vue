<template>
  <div class="estatisticas-layout">
    <div class="metricas-dietas">
      <div></div>
      <div>
        <h1>90,86%</h1>
        <span>das refeições dentro da dieta.</span>
      </div>
      <div class="metricas-icon">
        <span width="50" class="mdi mdi-arrow-top-right-thick"></span>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable import/no-extraneous-dependencies */
export default{
  name: 'Home',


};
</script>
<style>
  .estatisticas-layout {
    width: 100%;
  }
  .metricas-dietas {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    background-color: #d1e9ad;
    padding: 20px;
    border-radius: 25px;
  }
  .metricas-icon{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
</style>
