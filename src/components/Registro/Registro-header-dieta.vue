<!-- eslint-disable max-len -->
<template>
  <div class="indice-icon-registro" :class="['Registro'].includes(this.$route.name) ? 'colorEstatisticasRegister' : ''">
    <div class="arrow-registro">
      <span class="mdi mdi-arrow-left"></span>
    </div>
    <div>
      <h3>Nova refeição</h3>
    </div>
    <div></div>
  </div>
</template>
<style>
.arrow-registro{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.indice-icon-registro{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  padding: 15px;

}
.colorEstatisticasRegister{
  background-color: #DDDEDF !important;
}

.mdi-arrow-left::before{
  font-size: 24px;
  color: #333638;
}
</style>
