<template>
  <canvas
    ref="canvas"
    width="640"
    height="480"
    @click="handleClick"
  />
</template>
<script>
import canvas from '@/canvas.js'
import '@/bresenham.js'

export default {
  name: 'Canvas',
  data: () => ({
  }),
  mounted () {
    canvas.init(this.$refs.canvas)
  },
  methods: {
    handleClick () {
      canvas.getImageData()
      canvas.setPixel(10, 10)
      canvas.putImageData()
    }
  }
}
</script>
<style type="text/css">
canvas {
  background-color: white;
  border: solid 1px black;
}
</style>
