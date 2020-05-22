<template>
  <div id="app">
    <Canvas />
  </div>
</template>

<script>
import Canvas from './components/Canvas.vue'
export default {
  name: 'App',
  components: {
    Canvas
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: dimgray;
}
</style>
