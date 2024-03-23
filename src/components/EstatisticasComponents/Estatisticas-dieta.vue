<template>
  <div class="estatisticas-layout">
    <div class="indice-dietas">
      <div class="indice-icon">
        <span class="mdi mdi-arrow-left"></span>
      </div>
      <div>
        <h1>90,86%</h1>
        <span>das refeições dentro da dieta.</span>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
/* eslint-disable import/no-extraneous-dependencies */
export default{
  name: 'IndiceMetrics',
  data() {

  },

};
</script>
<style>
  .estatisticas-layout {
    width: 100%;
  }
  .indice-dietas {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    padding: 50px;
  }
  .indice-icon{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    color: #639339;
  }
  .mdi-arrow-left::before{
    font-size: 24px !important;
  }
</style>
