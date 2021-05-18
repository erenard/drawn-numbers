import framebuffer from '@/framebuffer.js'

export default {
  degreeCelcuis (x, y, size = 4) {
    /**
     * Draw a °C
     * positive width  20 =  5 * size
     * negative width  20 =  5 * size
     * positive height 80 = 20 * size
     * negative height 20 =  5 * size
     * total width 40
     * total height 100
     * margins in size:
     * top, left, right: 1
     */
    const left = x - size * 4
    const right = x + size * 4
    const top = y - size * 19
    const bottom = y - size
    // Elipsis
    framebuffer.plotEllipseRectWidth(
      left, top,
      right, bottom,
      size
    )
    // Center dot
    framebuffer.plotEllipseRectWidth(
      x - size, y - size * 11,
      x + size, y - size * 9,
      size
    )
  },

  kilometersPerHour (x, y, size = 4) {
    /**
     * Draw a km/h
     * positive width  20 =  5 * size
     * negative width  20 =  5 * size
     * positive height 80 = 20 * size
     * negative height 20 =  5 * size
     * total width 40
     * total height 100
     * margins in size:
     * top, left, right: 1
     */
    const left = x - size * 4
    // const right = x + size * 4
    const top = y - size * 19
    const bottom = y - size
    // k
    framebuffer.plotLineWidth(
      left, top,
      left, bottom,
      size
    )

    framebuffer.plotLineWidth(
      x - size * 3, y - size * 6,
      x, y - size * 12,
      size
    )

    framebuffer.plotLineWidth(
      x - size * 3, y - size * 6,
      x, bottom,
      size
    )
    // m -- first vert
    framebuffer.plotLineWidth(
      x + size * 2, y - size * 12,
      x + size * 2, bottom,
      size
    )

    framebuffer.plotQuadRationalBezierWidth(
      x + size * 2, y - size * 12,
      x + size * 6, y - size * 12,
      x + size * 6, y - size * 8,
      1,
      size
    )

    // m -- middle vert
    framebuffer.plotLineWidth(
      x + size * 6, y - size * 12,
      x + size * 6, bottom,
      size
    )

    framebuffer.plotQuadRationalBezierWidth(
      x + size * 6, y - size * 12,
      x + size * 10, y - size * 12,
      x + size * 10, y - size * 8,
      1,
      size
    )

    // m -- last vert
    framebuffer.plotLineWidth(
      x + size * 10, y - size * 8,
      x + size * 10, bottom,
      size
    )

    // /
    framebuffer.plotLineWidth(
      x + size * 13, top,
      x + size * 11, bottom,
      size
    )

    // h
    framebuffer.plotLineWidth(
      x + size * 14, top,
      x + size * 14, bottom,
      size
    )

    framebuffer.plotQuadRationalBezierWidth(
      x + size * 14, y - size * 12,
      x + size * 18, y - size * 12,
      x + size * 18, y - size * 8,
      1,
      size
    )

    framebuffer.plotLineWidth(
      x + size * 18, y - size * 8,
      x + size * 18, bottom,
      size
    )
  }
}
