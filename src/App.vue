<template>
  <div id="app">
    <Screen :is-wide-screen="isWideScreen">
      <Canvas />
    </Screen>
    <input
      v-model="isWideScreen"
      type="checkbox"
    >
  </div>
</template>

<script>
import Canvas from './components/Canvas.vue'
import Screen from './components/Screen.vue'
export default {
  name: 'App',
  components: {
    Canvas,
    Screen
  },
  data: () => ({
    isWideScreen: false
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: dimgray;
}
</style>
