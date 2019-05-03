<template>
  <div id="app">
    <p class="header">Un ejemplo de la problematica que resuelve Vuex</p>
    <nested-parent-a/>
    <br>
    <nested-parent-b/>
  </div>
</template>

<script>
import NestedParentA from './components/nestedA/NestedParentA'
import NestedParentB from './components/nestedB/NestedParentB'
export default {
  name: 'app',
  components: {
    NestedParentA,
    NestedParentB
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

.header{
  font-weight: bold;
  font-size: 40px;
  color: black;
}
</style>
