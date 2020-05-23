<template>
  <canvas
    ref="canvas"
    width="960"
    height="720"
  />
</template>
<script>
import framebuffer from '@/framebuffer.js'
import numbers from '@/numbers.js'

export default {
  name: 'Canvas',
  mounted () {
    framebuffer.init(this.$refs.canvas)
    this.drawNumbers()
  },
  methods: {
    drawNumbers () {
      framebuffer.begin()

      for (let i = 0; i < 8; i++) {
        numbers.drawNumber(i, 20 + i * 40, 80)
      }
      for (let i = 8; i < 10; i++) {
        numbers.drawNumber(i, 20 + i * 40, 180)
      }

      for (let i = 0; i < 10; i++) {
        numbers.drawNumber(i, 15 + i * 30, 240, 3)
      }

      for (let i = 0; i < 10; i++) {
        numbers.drawNumber(i, 100 + i * 20, 180, 2)
      }

      for (let i = 0; i < 10; i++) {
        numbers.drawNumber(i, 100 + i * 10, 120, 1)
      }

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
