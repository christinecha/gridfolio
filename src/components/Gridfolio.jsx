"use strict"

import React from 'react'
import { Block } from './Gridfolio__block.jsx'
import { Folio, FolioStyle } from '../myGridfolio.js'
import * as helper from '../helpers.js'

export class Gridfolio extends React.Component{

  getBlocks(row) {
    return row.map((block, i) => {
      return (
        <Block
          key={ i }
          block={ block }
          row={ row } />
      )
    })
  }

  getRows() {
    return Folio.map((row, i) => {

      let rowStyle = {
        maxWidth: FolioStyle.body.maxWidth
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
