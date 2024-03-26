<!-- eslint-disable max-len -->
<template>
  <div id="app" :class="['Estatisticas','Registro', 'Refeicao'].includes(this.$route.name) ? 'colorEstatisticas' : 'container'" >
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
a{
  text-decoration: none;
  cursor: pointer;
}
#app {
  font-family: 'Teko';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.container{
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  max-width: 992px;
}
.colorEstatisticas{
  background-color: #E5F0DB;
}
</style>
