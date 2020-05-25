import framebuffer from '@/framebuffer.js'

export default {
  drawNumber (number, x, y, size = 4) {
    /**
     * Draw a number
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
    switch (number) {
      case 0:
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
        break
      case 1:
        // Diagonal
        framebuffer.plotQuadRationalBezierWidth(
          x, top,
          x, y - size * 15,
          x - size * 3, y - size * 15,
          1,
          size
        )
        // Vertical
        framebuffer.plotLineWidth(
          x, top,
          x, bottom,
          size
        )
        // Horizontal
        framebuffer.plotLineWidth(
          x - size * 3, bottom,
          x + size * 3, bottom,
          size
        )
        break
      case 2:
        // Top part, top right
        framebuffer.plotQuadRationalBezierWidth(
          right, y - size * 15,
          right, top,
          x, top,
          1,
          size
        )
        // Top part, top left
        framebuffer.plotQuadRationalBezierWidth(
          x, top,
          left, top,
          left, y - size * 15,
          1,
          size
        )
        // Top part, bottom right
        framebuffer.plotQuadRationalBezierWidth(
          x, y - size * 8,
          right, y - size * 12,
          right, y - size * 15,
          1,
          size
        )
        // Bottom part, bottom left
        framebuffer.plotQuadRationalBezierWidth(
          x, y - size * 8,
          left, y - size * 4,
          left, bottom,
          1,
          size
        )
        // Horizontal
        framebuffer.plotLineWidth(
          left, bottom,
          right, bottom,
          size
        )
        break
      case 3:
        // Bottom part, bottom left
        framebuffer.plotQuadRationalBezierWidth(
          left, y - size * 6,
          left, bottom,
          x, bottom,
          1,
          size
        )
        // Bottom part, bottom right
        framebuffer.plotQuadRationalBezierWidth(
          x, bottom,
          right, bottom,
          right, y - size * 6,
          1,
          size
        )
        // Bottom part, top right
        framebuffer.plotQuadRationalBezierWidth(
          right, y - size * 6,
          right, y - size * 11,
          x, y - size * 11,
          1,
          size
        )
        // Top part, bottom right
        framebuffer.plotQuadRationalBezierWidth(
          x, y - size * 11,
          right, y - size * 11,
          right, y - size * 15,
          1,
          size
        )
        // Top part, top right
        framebuffer.plotQuadRationalBezierWidth(
          right, y - size * 15,
          right, top,
          x, top,
          1,
          size
        )
        // Top part, top left
        framebuffer.plotQuadRationalBezierWidth(
          x, top,
          left, top,
          left, y - size * 15,
          1,
          size
        )
        break
      case 4:
        // Vertical
        framebuffer.plotLineWidth(
          x + size * 2, top,
          x + size * 2, bottom,
          size
        )
        // Diagonal
        framebuffer.plotLineWidth(
          x + size * 2, top,
          left, y - size * 6,
          size
        )
        // Horizontal
        framebuffer.plotLineWidth(
          left, y - size * 6,
          right, y - size * 6,
          size
        )
        break
      case 5:
        // Bottom left
        framebuffer.plotQuadRationalBezierWidth(
          left, y - size * 6,
          left, bottom,
          x, bottom,
          1,
          size
        )
        // Bottom right
        framebuffer.plotQuadRationalBezierWidth(
          x, bottom,
          right, bottom,
          right, y - size * 6,
          1,
          size
        )
        // Middle right
        framebuffer.plotQuadRationalBezierWidth(
          right, y - size * 6,
          right, y - size * 12,
          x, y - size * 12,
          1,
          size
        )
        // Middle left
        framebuffer.plotQuadRationalBezierWidth(
          x, y - size * 12,
          x - size * 3, y - size * 12,
          left, y - size * 10,
          1,
          size
        )
        // Vertical left
        framebuffer.plotLineWidth(
          left, top,
          left, y - size * 10,
          size
        )
        // Horizontal top
        framebuffer.plotLineWidth(
          left, top,
          right, top,
          size
        )
        break
      case 6:
        // Bottom left
        framebuffer.plotQuadRationalBezierWidth(
          left, y - size * 6,
          left, bottom,
          x, bottom,
          1,
          size
        )
        // Bottom right
        framebuffer.plotQuadRationalBezierWidth(
          x, bottom,
          right, bottom,
          right, y - size * 6,
          1,
          size
        )
        // Middle right
        framebuffer.plotQuadRationalBezierWidth(
          right, y - size * 6,
          right, y - size * 12,
          x, y - size * 12,
          1,
          size
        )
        // Middle left
        framebuffer.plotQuadRationalBezierWidth(
          x, y - size * 12,
          left, y - size * 12,
          left, y - size * 6,
          1,
          size
        )
        // Vertical left
        framebuffer.plotLineWidth(
          left, y - size * 15,
          left, y - size * 6,
          size
        )
        // Top left
        framebuffer.plotQuadRationalBezierWidth(
          x, top,
          left, top,
          left, y - size * 15,
          1,
          size
        )
        // Top right
        framebuffer.plotQuadRationalBezierWidth(
          right, y - size * 15,
          right, top,
          x, top,
          1,
          size
        )
        break
      case 7:
        // Horizontal top
        framebuffer.plotLineWidth(
          left, top,
          right, top,
          size
        )
        // Diagonal
        framebuffer.plotQuadRationalBezierWidth(
          right, top,
          x, y - size * 10,
          x - size * 2, bottom,
          1,
          size
        )
        break
      case 8:
        // Bottom part, bottom left
        framebuffer.plotQuadRationalBezierWidth(
          left, y - size * 6,
          left, bottom,
          x, bottom,
          1,
          size
        )
        // Bottom part, bottom right
        framebuffer.plotQuadRationalBezierWidth(
          x, bottom,
          right, bottom,
          right, y - size * 6,
          1,
          size
        )
        // Bottom part, top right
        framebuffer.plotQuadRationalBezierWidth(
          right, y - size * 6,
          right, y - size * 11,
          x, y - size * 11,
          1,
          size
        )
        // Bottom part, top left
        framebuffer.plotQuadRationalBezierWidth(
          x, y - size * 11,
          left, y - size * 11,
          left, y - size * 6,
          1,
          size
        )
        // Top part, bottom right
        framebuffer.plotQuadRationalBezierWidth(
          x, y - size * 11,
          right, y - size * 11,
          right, y - size * 15,
          1,
          size
        )
        // Top part, top right
        framebuffer.plotQuadRationalBezierWidth(
          right, y - size * 15,
          right, top,
          x, top,
          1,
          size
        )
        // Top part, top left
        framebuffer.plotQuadRationalBezierWidth(
          x, top,
          left, top,
          left, y - size * 15,
          1,
          size
        )
        // Top part, bottom left
        framebuffer.plotQuadRationalBezierWidth(
          left, y - size * 15,
          left, y - size * 11,
          x, y - size * 11,
          1,
          size
        )
        break
      case 9:
        // Bottom left
        framebuffer.plotQuadRationalBezierWidth(
          left, y - size * 5,
          left, bottom,
          x, bottom,
          1,
          size
        )
        // Bottom right
        framebuffer.plotQuadRationalBezierWidth(
          x, bottom,
          right, bottom,
          right, y - size * 5,
          1,
          size
        )
        // Vertical right
        framebuffer.plotLineWidth(
          right, y - size * 14,
          right, y - size * 5,
          size
        )
        // Top right
        framebuffer.plotQuadRationalBezierWidth(
          right, y - size * 14,
          right, top,
          x, top,
          1,
          size
        )
        // Top left
        framebuffer.plotQuadRationalBezierWidth(
          x, top,
          left, top,
          left, y - size * 14,
          1,
          size
        )
        // Middle left
        framebuffer.plotQuadRationalBezierWidth(
          left, y - size * 14,
          left, y - size * 8,
          x, y - size * 8,
          1,
          size
        )
        // Middle right
        framebuffer.plotQuadRationalBezierWidth(
          x, y - size * 8,
          right, y - size * 8,
          right, y - size * 14,
          1,
          size
        )
        break
      default:
        framebuffer.plotLine(left, bottom, right, bottom)
        framebuffer.plotLine(x, y, x, top)
    }
  }
}
