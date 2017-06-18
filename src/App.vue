<template>
  <div id="app">
    <navtop></navtop>
    <img src="./assets/logo.png">
    <router-view></router-view>
    
    
  </div>
  
</template>

<script>
import hello from './components/Hello'
import navtop from './components/nav-top'


export default {
  name: 'app',
  components: {
    hello,
    navtop
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
