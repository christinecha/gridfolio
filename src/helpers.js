"use strict"

export const isEven = (int) => {
  return int % 2 === 0
}

export const isDivisibleBy3 = (int) => {
  return int % 3 === 0
}

export const calculateBlockStyle = (windowWidth, block, row, FolioStyle) => {
  let padding = block.outerPadding || FolioStyle.block.outerPadding
  let blockWidth = (windowWidth / row.length) - (padding * 2)
  let blockHeight = blockWidth * (block.customHeight || FolioStyle.block.heightRatio)

  if (block.customWidth) {
    blockWidth = windowWidth * (block.customWidth || 1) - (padding * 2)
  }

  let blockTitlePosition = (blockHeight / 2) - ((block.titleFontSize || FolioStyle.block.title.fontSize) / 2)
  let blockDisplay = "inline-block"

  // breakpoints
  blockWidth = fitToMobile(windowWidth, row.length, padding, blockWidth)

  if (blockHeight < (block.titleFontSize || FolioStyle.block.title.fontSize) * 2) {
    blockHeight = (block.titleFontSize || FolioStyle.block.title.fontSize) * 2
    blockTitlePosition = (blockHeight / 2) - ((block.titleFontSize || FolioStyle.block.title.fontSize) / 2)
  }

  let blockHeightIncludingKeywords = blockHeight + parseInt(FolioStyle.block.keywords.marginTop || null) + parseInt(FolioStyle.block.keywords.marginBottom || null) + parseInt(FolioStyle.block.keyword.fontSize * 1.3 || null)

  if (blockHeightIncludingKeywords <= blockHeight) {
    blockHeightIncludingKeywords = blockHeight
  }

  let blockStyle = {
    outer: {
      width: blockWidth + 'px',
      height: blockHeightIncludingKeywords + 'px',
      padding: padding + 'px',
      display: blockDisplay
    },
    inner: {
      width: blockWidth + 'px',
      height: blockHeight + 'px',
      backgroundColor: block.backgroundColor || FolioStyle.block.backgroundColor,
      backgroundImage: block.image || null,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textAlign: FolioStyle.block.textAlign,
      borderRadius: block.borderRadius || FolioStyle.block.borderRadius
    },
    title: {
      color: block.titleColor || FolioStyle.block.title.color,
      height: blockHeight - blockTitlePosition + 'px',
      paddingTop: blockTitlePosition + 'px',
      fontSize: block.titleFontSize || FolioStyle.block.title.fontSize + 'px',
      fontFamily: FolioStyle.block.title.fontFamily,
      textTransform: FolioStyle.block.title.textTransform,
      fontWeight: FolioStyle.block.title.fontWeight,
      backgroundColor: block.isTinted ? FolioStyle.block.tint : null,
      borderRadius: block.borderRadius || FolioStyle.block.borderRadius
    }
  }

  return blockStyle
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
