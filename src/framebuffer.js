import bresenham from '@/bresenham.js'

let canvasContext, imageData, width, height

const zoom = 3

window.setPixel = function (x, y) {
  x *= zoom
  y *= zoom
  for (let xx = 0; xx < zoom; xx++) {
    for (let yy = 0; yy < zoom; yy++) {
      let subpixel = 4 * (x + xx + (y + yy) * width)
      imageData.data[subpixel++] = 255
      imageData.data[subpixel++] = 255
      imageData.data[subpixel++] = 255
      imageData.data[subpixel] = 255
    }
  }
}

window.setPixelAA = function (x, y, alpha) {
  x *= zoom
  y *= zoom
  for (let xx = 0; xx < zoom; xx++) {
    for (let yy = 0; yy < zoom; yy++) {
      let subpixel = 4 * (x + xx + (y + yy) * width)
      const value = Math.max(imageData.data[subpixel], 255 - alpha)
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
