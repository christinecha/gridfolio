"use strict"

import React from 'react'
import { Keywords } from './Gridfolio__keywords.jsx'
import { Folio, FolioStyle } from '../myGridfolio.js'
import * as helper from '../helpers.js'

export class Block extends React.Component{

  constructor(props) {
    super(props)
    let newWidth = parseInt(window.innerWidth)
    if (newWidth >= FolioStyle.body.maxWidth) {
      newWidth = FolioStyle.body.maxWidth
    }
    this.state = {
      windowWidth: newWidth
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      let newWidth = parseInt(window.innerWidth)
      if (newWidth >= FolioStyle.body.maxWidth) {
        newWidth = FolioStyle.body.maxWidth
      }
      this.setState({
        windowWidth: newWidth
      })
    })
  }

  render() {
    const { block, row } = this.props

    let padding = block.outerPadding || FolioStyle.block.outerPadding
    let blockWidth = (this.state.windowWidth / row.length) - (padding * 2)
    let blockHeight = blockWidth * (block.customHeight || FolioStyle.block.heightRatio)

    if (block.customWidth) {
      blockWidth = this.state.windowWidth * (block.customWidth || 1) - (padding * 2)
    }

    let blockTitlePosition = (blockHeight / 2) - ((block.titleFontSize || FolioStyle.block.title.fontSize) / 2)
    let isLinked = block.link ? "linked" : null
    let blockDisplay = "inline-block"

    // breakpoints
    blockWidth = helper.fitToMobile(this.state.windowWidth, row.length, padding, blockWidth)

    if (blockHeight < (block.titleFontSize || FolioStyle.block.title.fontSize) * 2) {
      blockHeight = (block.titleFontSize || FolioStyle.block.title.fontSize) * 2
      blockTitlePosition = (blockHeight / 2) - ((block.titleFontSize || FolioStyle.block.title.fontSize) / 2)
    }

    let blockStyle = {
      outer: {
        width: blockWidth + 'px',
        height: blockHeight + (FolioStyle.block.keywords.marginTop || null) + (FolioStyle.block.keywords.marginBottom || null) + (FolioStyle.block.keyword.fontSize * 1.3 || null) + 'px',
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

    return (
      <div
        style={ blockStyle.outer }
        className={"folio-block " + isLinked}>
        <div style={ blockStyle.inner }>
          <a href={ block.link }>
            <div style={ blockStyle.title }>
              { block.title }
            </div>
          </a>
        </div>
        <Keywords keywords={block.keywords } />
      </div>
    )
  }
}
