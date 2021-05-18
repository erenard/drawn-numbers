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
import units from '@/units.js'

export default {
  name: 'Canvas',
  mounted () {
    framebuffer.init(this.$refs.canvas)
    this.draw()
  },
  methods: {
    clear () {
      framebuffer.begin()
      framebuffer.clear()
      framebuffer.end()
    },
    draw () {
      framebuffer.begin()

      numbers.drawNumber(1, 20, 80)
      numbers.drawNumber(2, 60, 80)
      numbers.drawNumber(3, 100, 80)
      units.kilometersPerHour(140, 80)

      numbers.drawNumber(1, 20, 120, 2)
      numbers.drawNumber(2, 40, 120, 2)
      numbers.drawNumber(3, 60, 120, 2)
      units.kilometersPerHour(80, 120, 2)

      numbers.drawNumber(1, 20, 200)
      numbers.drawNumber(2, 60, 200)
      numbers.drawNumber(3, 100, 200)
      units.kilometersPerHour(130, 150, 1)
      numbers.drawNumber(5, 140, 200, 2)

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
