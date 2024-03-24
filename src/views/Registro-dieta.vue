<template>
  <div>
    <HeaderRegistro></HeaderRegistro>
    <InputsRegistro></InputsRegistro>
  </div>
</template>
<script>
export default{
  name: 'Registro',
  components: {
    // eslint-disable-next-line import/extensions
    HeaderRegistro: () => import('../components/Registro/Registro-header-dieta.vue'),
    // eslint-disable-next-line import/extensions
    InputsRegistro: () => import('../components/Registro/Registro-inputs.vue'),
  },
};
</script>
<style>

</style>
