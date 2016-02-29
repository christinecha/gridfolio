"use strict"

import React from 'react'
import { Folio, FolioStyle } from '../myGridfolio.js'
import * as helper from '../helpers.js'

export class Keywords extends React.Component{

  getKeywords(keywords) {
    if (!keywords) {
      return null
    } else {
      return keywords.map((keyword, i) => {

        let keywordStyle = {
          fontSize: FolioStyle.block.keyword.fontSize + 'px',
          fontFamily: FolioStyle.block.keyword.fontFamily,
          textTransform: FolioStyle.block.keyword.textTransform,
          margin: '0 2px',
          color: FolioStyle.block.keyword.color,
          backgroundColor: FolioStyle.block.keyword.backgroundColor,
          padding: FolioStyle.block.keyword.padding,
          fontWeight: FolioStyle.block.keyword.fontWeight,
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

  render() {
    const { keywords } = this.props

    let keywordsStyle = {
      textAlign: FolioStyle.block.keywords.textAlign || 'center',
      marginTop: FolioStyle.block.keywords.marginTop || null + 'px',
      marginBottom: FolioStyle.block.keywords.marginBottom || null + 'px',
    }

    return (
      <div
        style={ keywordsStyle }
        className="folio-block--keywords">
        { this.getKeywords(keywords) }
      </div>
    )
  }
}
