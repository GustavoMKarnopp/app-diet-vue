<template>
  <div class="estatisticas-layout">
    <div class="metricas-dietas">
      <div></div>
      <div>
        <h1>90,86%</h1>
        <span>das refeições dentro da dieta.</span>
      </div>
      <div class="metricas-icon">
        <a @click="$router.push({ name: 'Estatisticas'})">
        <!-- <a @click="this.router.navigate(['/estatisticas'])"> -->
          <span width="50" class="mdi mdi-arrow-top-right"></span>
        </a>
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
    background-color: #E5F0DB;
    padding: 20px;
    border-radius: 8px;
  }
  .metricas-icon{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    color: #639339;
  }
  .mdi-arrow-top-right::before{
    font-size: 24px;
  }
</style>
