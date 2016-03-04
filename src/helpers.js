"use strict"

export const isEven = (int) => {
  return int % 2 === 0
}

export const fitToMobile = (windowWidth, rowLength, padding, blockWidth) => {
  if (windowWidth < 500) {
    return (windowWidth) - (padding * 2)
  } else if (windowWidth < 900 && rowLength <= 4) {
    if (isEven(rowLength)) {
      return (windowWidth / 2) - (padding * 2)
    } else {
      return (windowWidth) - (padding * 2)
    }
  } else {
    return blockWidth
  }
}
