<template>
  <div id="app"
    v-if="requestUsers.userExist ? modalGlobalCadastro(true) : modalGlobalCadastro(false)"
    :class="['Estatisticas', 'Registro', 'Refeicao'].includes(this.$route.name) ? requestDiet.metricasDietas.porcentagemMetricas <= 60 ? 'colorEstatisticas-red' : 'colorEstatisticas-green' : 'container'" >
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'App',
  computed: {
    ...mapState({
      modalGlobal: 'modalGlobal',
      requestUsers: 'requestUsers',
      requestDiet: 'requestDiet'
    }),
  },
  mounted() {
    this.getUser();
    this.getListTotalDietas();
  },
  methods: {
    ...mapActions({
        createUser: 'requestUsers/createUser',
        getUser: 'requestUsers/getUser',
        getListTotalDietas: 'requestDiet/getListTotalDietas',
        modalGlobalCadastro: 'modalGlobal/modalGlobalCadastro',
    }),
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  /* overflow: hidden;*/
}
h1{
  margin: 0px;
  padding: 0px;
}
a {
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

.container {
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  max-width: 992px;
}

.colorEstatisticas-green {
  background-color: #E5F0DB;
}
.colorEstatisticas-red {
  background-color: #F4E6E7;
}
</style>
