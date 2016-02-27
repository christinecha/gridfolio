"use strict"

import React from 'react'
import { Folio, FolioStyle } from '../myGridfolio.js'

export class Gridfolio extends React.Component{

  getBlocks(row) {
    return row.map((block, i) => {

      let padding = FolioStyle.blockOuterPadding
      let blockWidth = (parseInt(window.innerWidth) / row.length) - (padding * 2)
      let blockHeight = blockWidth
      let blockTitlePosition = (blockHeight / 2) - ((block.titleFontSize || FolioStyle.blockTitleFont.fontSize) / 2)

      let blockStyle = {
        outer: {
          width: blockWidth + 'px',
          height: blockHeight + 'px',
          padding: padding + 'px',
        },
        inner: {
          backgroundColor: FolioStyle.blockBackgroundColor,
          backgroundImage: block.image,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
          textAlign: FolioStyle.blockTitleTextAlign
        },
        title: {
          color: block.titleColor || FolioStyle.blockTitleFont.color,
          height: blockHeight - blockTitlePosition + 'px',
          paddingTop: blockTitlePosition + 'px',
          fontSize: block.titleFontSize || FolioStyle.blockTitleFont.fontSize + 'px',
          fontFamily: FolioStyle.blockTitleFont.fontFamily,
          textTransform: FolioStyle.blockTitleFont.textTransform,
          fontWeight: FolioStyle.blockTitleFont.fontWeight,
          backgroundColor: block.isTinted ? FolioStyle.blockTint : null
        }
      }

      return (
        <div
          style={ blockStyle.outer }
          className="folio-block">
          <div style={ blockStyle.inner }>
            <div style={ blockStyle.title }>
              {block.title}
            </div>
          </div>
        </div>
      )
    })
  }

  getRows() {
    return Folio.map((row, i) => {
      return this.getBlocks(row)
    })
  }

  render() {
    return (
      <div>
        { this.getRows() }
      </div>
    )
  }
}
