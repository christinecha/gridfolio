"use strict"

export const isEven = (int) => {
  return int % 2 === 0
}

export const isDivisibleBy3 = (int) => {
  return int % 3 === 0
}

export const fitToMobile = (windowWidth, rowLength, padding, blockWidth) => {
  if (windowWidth < 500) {
    if (isEven(rowLength / 2)) {
      return (windowWidth / (rowLength / 4)) - (padding * 2)
    } else if (isDivisibleBy3(rowLength / 2)) {
      return (windowWidth / (rowLength / 6)) - (padding * 2)
    } else {
      return (windowWidth) - (padding * 2)
    }
  } else if (windowWidth < 900) {
    if (isEven(rowLength)) {
      return (windowWidth / (rowLength / 2)) - (padding * 2)
    } else if (isDivisibleBy3(rowLength)) {
      return (windowWidth / (rowLength / 3)) - (padding * 2)
    } else {
      return (windowWidth) - (padding * 2)
    }
  } else {
    return blockWidth
  }
}
