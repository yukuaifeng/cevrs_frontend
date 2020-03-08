<template>
  <div id="app">
    <Navi></Navi>
    <div class="container" v-bind:style="{minHeight: Height+'px'}">
      <router-view></router-view>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from './components/Foot.vue'
import Navi from './components/Navi.vue'
export default {
  components: {Foot, Navi},
  name: 'App',
  data() {
     return {
       Height: 0
     }
  },
  mounted(){
    //动态设置内容高度 让footer始终居底   header+footer的高度是100
    this.Height = document.documentElement.clientHeight - 100;  
　　//监听浏览器窗口变化　
    window.onresize = ()=> {this.Height = document.documentElement.clientHeight -100}
  }
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
