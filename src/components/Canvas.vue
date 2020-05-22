<template>
  <canvas
    ref="canvas"
    width="960"
    height="720"
    @click="handleClick"
  />
</template>
<script>
import framebuffer from '@/framebuffer.js'
import numbers from '@/numbers.js'

export default {
  name: 'Canvas',
  mounted () {
    framebuffer.init(this.$refs.canvas)
  },
  methods: {
    handleClick () {
      framebuffer.begin()
      numbers.drawNumberOne(100, 100, 32)
      numbers.drawNumberOne(150, 100, 64)
      framebuffer.end()
    }
  }
}
</script>
<style type="text/css">
canvas {
  background-color: black;
  border: solid 1px white;
}
</style>
