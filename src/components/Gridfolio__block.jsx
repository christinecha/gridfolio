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

    let blockStyle = helper.calculateBlockStyle(this.state.windowWidth, block, row, FolioStyle)
    let isLinked = block.link ? "linked" : null

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
