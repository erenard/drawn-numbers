let canvasContext, imageData, width, height

window.setPixel = function (x, y) {
  let subpixel = 4 * (x + y * width)
  imageData.data[subpixel++] = 0
  imageData.data[subpixel++] = 0
  imageData.data[subpixel++] = 0
  imageData.data[subpixel++] = 255
}

window.setPixelAA = function (x, y, alpha) {
  let subpixel = 4 * (x + y * width)
  imageData.data[subpixel++] = 0
  imageData.data[subpixel++] = 0
  imageData.data[subpixel++] = 0
  imageData.data[subpixel++] = alpha
}

export default {
  init (canvasElement) {
    canvasContext = canvasElement.getContext('2d')
    width = canvasElement.width
    height = canvasElement.height
  },
  getImageData () {
    // Uint8ClampedArray
    imageData = canvasContext.getImageData(0, 0, width, height)
  },
  putImageData () {
    // Uint8ClampedArray
    canvasContext.putImageData(imageData, 0, 0)
  },
  setPixel: window.setPixel,
  setPixelAA: window.setPixelAA
}
