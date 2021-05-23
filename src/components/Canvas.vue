<template>
  <canvas
    ref="canvas"
    width="768"
    height="480"
  />
</template>
<script>
import framebuffer from '@/framebuffer.js'
import numbers from '@/numbers.js'
import units from '@/units.js'

export default {
  name: 'Canvas',
  data: () => ({
    speed: 0
  }),
  computed: {
    speedDigits () {
      const a = Math.floor(this.speed / 100)
      const b = Math.floor(this.speed / 10) - a * 10
      const c = Math.floor(this.speed) - a * 100 - b * 10
      const d = Math.floor((this.speed - a * 100 - b * 10 - c) * 10)
      return [a, b, c, d]
    }
  },
  mounted () {
    framebuffer.init(this.$refs.canvas)
    this.animationFrame()
  },
  methods: {
    draw () {
      framebuffer.begin()
      framebuffer.clear()

      let i = 0.5
      const size = 12
      numbers.drawNumber(this.speedDigits[0], i++ * size * 10, 240, size, 3)
      numbers.drawNumber(this.speedDigits[1], i++ * size * 10, 240, size, 3)
      numbers.drawNumber(this.speedDigits[2], i++ * size * 10, 240, size, 3)
      numbers.drawNumber(this.speedDigits[3], i * size * 10, 240, size / 2, 3)
      units.kilometersPerHour(i++ * size * 10, 120, size / 2, 3)

      framebuffer.end()
    },
    animationFrame () {
      this.speed += 0.1
      this.speed %= 200
      this.draw()
      window.requestAnimationFrame(() => {
        this.animationFrame()
      })
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
