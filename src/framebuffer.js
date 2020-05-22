import bresenham from '@/bresenham.js'

let canvasContext, imageData, width, height

window.setPixel = function (x, y) {
  x *= 3
  y *= 3
  for (let xx = -1; xx < 2; xx++) {
    for (let yy = -1; yy < 2; yy++) {
      let subpixel = 4 * (x + xx + (y + yy) * width)
      imageData.data[subpixel++] = 255
      imageData.data[subpixel++] = 255
      imageData.data[subpixel++] = 255
      imageData.data[subpixel] = 255
    }
  }
}

window.setPixelAA = function (x, y, alpha) {
  x *= 3
  y *= 3
  for (let xx = -1; xx < 2; xx++) {
    for (let yy = -1; yy < 2; yy++) {
      let subpixel = 4 * (x + xx + (y + yy) * width)
      const value = imageData.data[subpixel] + 255 - alpha
      imageData.data[subpixel++] = value
      imageData.data[subpixel++] = value
      imageData.data[subpixel++] = value
      imageData.data[subpixel] = 255
    }
  }
}

export default {
  init (canvasElement) {
    canvasContext = canvasElement.getContext('2d')
    width = canvasElement.width
    height = canvasElement.height
  },
  begin () {
    // Uint8ClampedArray
    imageData = canvasContext.getImageData(0, 0, width, height)
  },
  end () {
    canvasContext.putImageData(imageData, 0, 0)
  },
  setPixel: window.setPixel,
  setPixelAA: window.setPixelAA,
  ...bresenham
}
