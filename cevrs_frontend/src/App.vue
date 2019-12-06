<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from './components/Foot.vue'
export default {
  components: {Foot},
  name: 'App'
}
</script>

<style>
html, body {
  margin:0px
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
