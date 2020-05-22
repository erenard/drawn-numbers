import framebuffer from '@/framebuffer.js'

// https://fonts.google.com/specimen/Share+Tech+Mono?category=Monospace&preview.text=0123456789&preview.text_type=custom

export default {
  drawNumberOne (x, y, size) {
    const left = x - size / 4
    const right = x + size / 4
    const top = y - size
    framebuffer.plotLineWidth(left, y, right, y, 2)
    framebuffer.plotLineWidth(x, y, x, top, 2)
    framebuffer.plotLineWidth(x, top, left, y - size / 2, 2)
  }
}
