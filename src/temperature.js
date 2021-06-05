import framebuffer from '@/framebuffer.js'
// import { drawNumber } from '@/numbers.js'

export default {
  /**
   * Draws a temperature widget.
   * 80 x 80 px
   * 80 = 20 x size
   *
   * @param      {number}  x         { parameter_description }
   * @param      {number}  y         { parameter_description }
   * @param      {<type>}  value     The value
   * @param      {number}  [size=4]  The size
   */
  drawTemperatureWidget (x, y, value, size = 4) {
    // framebuffer.plotQuadRationalBezierWidth(
    //   x - size * 10, y,
    //   x - size * 20, y - size * 10,
    //   x - size * 20, y - size * 20,
    //   1,
    //   3
    // )
    // framebuffer.plotQuadRationalBezierWidth(
    //   x - size * 20, y - size * 20,
    //   x - size * 20, y - size * 40,
    //   x, y - size * 40,
    //   1,
    //   3
    // )
    // framebuffer.plotQuadRationalBezierWidth(
    //   x, y - size * 40,
    //   x + size * 20, y - size * 40,
    //   x + size * 20, y - size * 20,
    //   1,
    //   3
    // )
    // framebuffer.plotQuadRationalBezierWidth(
    //   x + size * 20, y - size * 20,
    //   x + size * 20, y - size * 10,
    //   x + size * 10, y,
    //   1,
    //   3
    // )

    const app = 20 * size * Math.PI / 4
    framebuffer.plotCubicBezierWidth(
      x - size * 20, y - size * 20,
      x - size * 20, y - size * (20 + app),
      x - size * (app), y - size * 40,
      x, y - size * 40,
      3
    )

    framebuffer.plotEllipseRectWidth(
      x - size * 20, y + size * 0,
      x + size * 20, y - size * 40,
      1
    )
  }
}
