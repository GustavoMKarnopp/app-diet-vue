<template>
  <div class="tela-register ">
    <HeaderRegistro></HeaderRegistro>
    <InputsRegistro></InputsRegistro>
  </div>
</template>
<script>
export default{
  name: 'Registro',
  components: {
    HeaderRegistro: () => import('../components/Registro/Registro-header-dieta.vue'),
    InputsRegistro: () => import('../components/Registro/Registro-inputs.vue'),
  },
};
</script>
<style>
.tela-register{
  width: 100vw; /* 100% da largura da viewport */
  height: 100vh; /* 100% da altura da viewport */
  position: absolute; /* ou 'fixed' se precisar que fique fixo na tela ao rolar */
  top: 0;
  left: 0;
}
.container-estatisticas{
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
  max-width: 992px;
}
</style>
