<template>
  <canvas
    ref="canvas"
    width="640"
    height="480"
    @click="handleClick"
  />
</template>
<script>
import framebuffer from '@/framebuffer.js'

export default {
  name: 'Canvas',
  data: () => ({
  }),
  mounted () {
    framebuffer.init(this.$refs.canvas)
  },
  methods: {
    handleClick () {
      framebuffer.begin()
      framebuffer.setPixel(10, 10)
      framebuffer.plotCircle(100, 100, 75)
      framebuffer.end()
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
