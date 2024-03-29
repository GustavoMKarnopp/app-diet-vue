<!-- eslint-disable max-len -->
<template>
  <div class="name">
    <img src="../../assets/logo-dietrocketvue.png" alt="Diet Rocket Vue" width="150" class="logoImage">
    <div class="divIcon">
      <h3 class="h3-nome">{{nameComplete}}</h3>
      <div class="indice-icon-use">
        <span class="mdi mdi-account "></span>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getItem as getItemLocal,
} from '../../util/localStorage';
export default{
  name: 'Header',
  data(){
    return{
      nameComplete: '',
    }
  },
  mounted(){
    this.montaName()
  },
  methods:{
    montaName(){
      let dataStorage = getItemLocal('dataUser').user[0];
      this.nameComplete = dataStorage.first_name.toUpperCase()  + ' ' + dataStorage.last_name.toUpperCase();
    }
  }
}
</script>
<style>
.logoImage{
  border-radius: 50%;
}
.name{
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
}
.divIcon{
  display: flex;
  align-items: center;
  justify-content: center;
}
.indice-icon-use{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: #639339;
}
.h3-nome{
  margin: 0px 10px;
  color: #639339;
}
</style>
