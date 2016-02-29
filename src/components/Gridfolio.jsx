"use strict"

import React from 'react'
import { Folio, FolioStyle } from '../myGridfolio.js'
import * as helper from '../helpers.js'

export class Gridfolio extends React.Component{

  constructor(props) {
    super(props)
    let newWidth = parseInt(window.innerWidth)
    if (newWidth >= FolioStyle.bodyMaxWidth) {
      newWidth = FolioStyle.bodyMaxWidth
    }
    this.state = {
      windowWidth: newWidth
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      let newWidth = parseInt(window.innerWidth)
      if (newWidth >= FolioStyle.bodyMaxWidth) {
        newWidth = FolioStyle.bodyMaxWidth
      }
      this.setState({
        windowWidth: newWidth
      })
    })
  }

  getKeywords(keywords) {
    if (!keywords) {
      return null
    } else {
      return keywords.map((keyword, i) => {

        let keywordStyle = {
          fontSize: FolioStyle.blockKeyword.fontSize + 'px',
          fontFamily: FolioStyle.blockKeyword.fontFamily,
          textTransform: FolioStyle.blockKeyword.textTransform,
          margin: '0 2px',
          color: FolioStyle.blockKeyword.color,
          backgroundColor: FolioStyle.blockKeyword.backgroundColor,
          padding: FolioStyle.blockKeyword.padding,
          fontWeight: FolioStyle.blockKeyword.fontWeight,
        }

        return (
          <div
            style={ keywordStyle }
            className="folio-block--keyword"
            key={ i }>
            { keyword }
          </div>
        )
      })
    }
  }

  getBlocks(row) {
    return row.map((block, i) => {

      let padding = block.outerPadding || FolioStyle.blockOuterPadding
      let blockWidth = (this.state.windowWidth / row.length) - (padding * 2)
      let blockHeight = blockWidth * (block.heightRatio || FolioStyle.blockHeightRatio)
      let blockTitlePosition = (blockHeight / 2) - ((block.titleFontSize || FolioStyle.blockTitleFont.fontSize) / 2)
      let isLinked = block.link ? "linked" : null
      let blockDisplay = "inline-block"

      if (this.state.windowWidth < 900 && row.length <= 4) {
        padding *= 0.5
        if (helper.isEven(row.length)) {
          blockWidth = (this.state.windowWidth / 2) - (padding * 2)
        } else {
          blockWidth = (this.state.windowWidth) - (padding * 2)
        }
      }

      if (blockHeight < (block.titleFontSize || FolioStyle.blockTitleFont.fontSize) * 2) {
        blockHeight = (block.titleFontSize || FolioStyle.blockTitleFont.fontSize) * 2
        blockTitlePosition = (blockHeight / 2) - ((block.titleFontSize || FolioStyle.blockTitleFont.fontSize) / 2)
      }

      let blockStyle = {
        outer: {
          width: blockWidth + 'px',
          height: blockHeight + (FolioStyle.blockKeyword.marginTop || null) + (FolioStyle.blockKeyword.marginBottom || null) + (FolioStyle.blockKeyword.fontSize || null) + 'px',
          padding: padding + 'px',
          display: blockDisplay
        },
        inner: {
          width: blockWidth + 'px',
          height: blockHeight + 'px',
          backgroundColor: block.backgroundColor || FolioStyle.blockBackgroundColor,
          backgroundImage: block.image,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: FolioStyle.blockTitleTextAlign,
          borderRadius: block.borderRadius || FolioStyle.blockBorderRadius
        },
        title: {
          color: block.titleColor || FolioStyle.blockTitleFont.color,
          height: blockHeight - blockTitlePosition + 'px',
          paddingTop: blockTitlePosition + 'px',
          fontSize: block.titleFontSize || FolioStyle.blockTitleFont.fontSize + 'px',
          fontFamily: FolioStyle.blockTitleFont.fontFamily,
          textTransform: FolioStyle.blockTitleFont.textTransform,
          fontWeight: FolioStyle.blockTitleFont.fontWeight,
          backgroundColor: block.isTinted ? FolioStyle.blockTint : null,
          borderRadius: block.borderRadius || FolioStyle.blockBorderRadius
        },
        keywords: {
          textAlign: FolioStyle.blockKeyword.textAlign || 'center',
          marginTop: FolioStyle.blockKeyword.marginTop || null + 'px',
          marginBottom: FolioStyle.blockKeyword.marginBottom || null + 'px',
        }
      }

      return (
        <div
          key={ i }
          style={ blockStyle.outer }
          className={"folio-block " + isLinked}>
          <div style={ blockStyle.inner }>
            <a href={ block.link }>
              <div style={ blockStyle.title }>
                { block.title }
              </div>
            </a>
          </div>
          <div
            style={ blockStyle.keywords }
            className="folio-block--keywords">
            { this.getKeywords(block.keywords) }
          </div>
        </div>
      )
    })
  }

  getRows() {
    return Folio.map((row, i) => {

      let rowStyle = {
        maxWidth: FolioStyle.bodyMaxWidth
      }

      return (
        <div
          className="folio-row"
          style={ rowStyle }
          key={ i }>
          { this.getBlocks(row) }
        </div>
      )
    })
  }

  render() {
    console.log('rendering')
    return (
      <div>
        { this.getRows() }
      </div>
    )
  }
}
