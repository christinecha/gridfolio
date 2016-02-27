"use strict"

import React from 'react'
import { Folio, FolioStyle } from '../myGridfolio.js'

export class Gridfolio extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      windowWidth: parseInt(window.innerWidth)
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        windowWidth: parseInt(window.innerWidth)
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

      let padding = FolioStyle.blockOuterPadding
      let blockWidth = (this.state.windowWidth / row.length) - (padding * 2)
      let blockHeight = blockWidth * (block.heightRatio || FolioStyle.blockHeightRatio)
      let blockTitlePosition = (blockHeight / 2) - ((block.titleFontSize || FolioStyle.blockTitleFont.fontSize) / 2)
      let isLinked = block.link ? "linked" : null

      let blockStyle = {
        outer: {
          width: blockWidth + 'px',
          height: blockHeight + 'px',
          padding: padding + 'px',
        },
        inner: {
          backgroundColor: block.backgroundColor || FolioStyle.blockBackgroundColor,
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
          className={"folio-block " + isLinked}>
          <div style={ blockStyle.inner }>
            <a href={ block.link }>
              <div style={ blockStyle.title }>
                { block.title }
              </div>
              <div className="folio-block--keywords">
                { this.getKeywords(block.keywords) }
              </div>
            </a>
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
    console.log('rendering')
    return (
      <div>
        { this.getRows() }
      </div>
    )
  }
}
