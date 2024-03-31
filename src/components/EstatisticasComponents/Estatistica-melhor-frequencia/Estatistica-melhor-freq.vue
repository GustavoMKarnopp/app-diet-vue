<template>
  <div>
    <div class="background-sequencia">
      <div class="dados-sequencia">
        <h1>{{freqClea}}</h1>
        <span>melhor sequência de pratos dentro da dieta.</span>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'MelhorFreq',
  props: {
    // Define a prop 'name'
    freqClea: {
      type: String,
      required: true
    }
  }
}
</script>
<style>
.background-sequencia{
  background-color: #EFF0F0;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
}
.dados-sequencia{
  padding: 10px;
}
</style>
