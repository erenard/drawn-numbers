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
import widget from '@/temperature.js'
import units from '@/units.js'

export default {
  name: 'Canvas',
  props: {
    isRunning: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    speed: 0
  }),
  computed: {
    speedDigits () {
      const a = Math.floor(this.speed / 100)
      const b = Math.floor(this.speed / 10) - a * 10
      const c = Math.floor(this.speed) - a * 100 - b * 10
      return [a, b, c]
    }
  },
  watch: {
    isRunning (newValue) {
      if (newValue) {
        this.animationFrame()
      }
    }
  },
  mounted () {
    framebuffer.init(this.$refs.canvas)
    if (this.isRunning) this.animationFrame()
  },
  methods: {
    draw () {
      framebuffer.begin()
      framebuffer.clear()

      const size = 12
      if (this.speed > 99) numbers.drawNumber(this.speedDigits[0], 0.5 * size * 10, 240, size, 3)
      if (this.speed > 9) numbers.drawNumber(this.speedDigits[1], 1.5 * size * 10, 240, size, 3)
      numbers.drawNumber(this.speedDigits[2], 2.5 * size * 10, 240, size, 3)
      units.kilometersPerHour(3.5 * size * 10, 240, size / 2, 3)

      widget.drawTemperatureWidget(200, 400, 100)

      framebuffer.end()
    },
    animationFrame () {
      this.speed += 1
      this.speed %= 255
      this.draw()
      if (this.isRunning) {
        window.requestAnimationFrame(() => {
          this.animationFrame()
        })
      }
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
