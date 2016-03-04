"use strict"

import React from 'react'

export const Default = {
  body: {
    maxWidth: 1200,
  },
  block: {
    heightRatio: 1,
    outerPadding: 10,
    innerPadding: 10,
    borderRadius: '0',
    backgroundColor: '#f1f1f2',
    tint: 'rgba(0,0,0,0.4)',
    textAlign: 'center',
    title: {
      color: '#fff',
      fontSize: 22,
      fontFamily: 'Geo', // ! Remember to add any font resources to index.html in a link tag.
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },
    keywords: {
      marginTop: -25,
      marginBottom: 10,
      textAlign: 'center'
    },
    keyword: {
      fontSize: 12,
      fontFamily: 'Geo', // ! Remember to add any font resources to index.html in a link tag.
      color: '#666',
      backgroundColor: 'rgba(240,240,240,0.75)',
      padding: '2px 4px',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }
  }
}

export const Playground = {
  body: {
    maxWidth: 1400,
  },
  block: {
    heightRatio: 1,
    outerPadding: 20,
    innerPadding: 20,
    borderRadius: '50%',
    backgroundColor: '#f1f1f2',
    tint: 'rgba(0,0,0,0.4)',
    textAlign: 'center',
    title: {
      color: '#fff',
      fontSize: 22,
      fontFamily: 'Geo', // ! Remember to add any font resources to index.html in a link tag.
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },
    keywords: {
      marginTop: -180,
      marginBottom: 180,
      textAlign: 'center'
    },
    keyword: {
      fontSize: 12,
      fontFamily: 'Geo', // ! Remember to add any font resources to index.html in a link tag.
      color: '#666',
      backgroundColor: 'rgba(240,240,240,0.75)',
      padding: '2px 4px',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }
  }
}
