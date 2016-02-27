"use strict"

import React from 'react'

export const FolioStyle = {
  blockOuterPadding: 20,
  blockInnerPadding: 10,
  blockBackgroundColor: '#f1f1f2',
  blockTint: 'rgba(0,0,0,0.4)',
  blockTitleTextAlign: 'center',
  blockTitleFont: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Geo', // ! Remember to add any font resources to index.html in a link tag.
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
}

export const Folio = [
  [ // Row 1
    { // Row 1, Item 1
      title: "Circlematch",
      brief: "An in-browser and iOS native game written in React and React-Native.",
      link: "https://christinecha.github.io/circlematch",
      image: "url('./src/assets/CircleMatch.png')",
      isTinted: true
    },
    { // Row 1, Item 2
      title: "Christine Cha",
      brief: null,
      link: null,
      image: "https://image.com",
      titleColor: "#b1b1b2",
      titleFontSize: 40,
    },
    { // Row 1, Item 3
      title: "NYC Jazz App",
      brief: "Data scraped with NodeJS + Cheerio, built into a React web app and Python Twitter bot.",
      link: "https://google.com",
      image: "https://image.com",
      whRatio: 1
    }
  ],
  [ // Row 2
    { // Row 2, Item 1
      title: null,
      brief: null,
      link: null,
      image: null
    },
    { // Row 2, Item 2
      title: <i className="fa fa-twitter"></i>,
      brief: null,
      link: "https://twitter.com/christinechanyc",
      image: "https://image.com"
    },
    { // Row 2, Item 2
      title: <i className="fa fa-github"></i>,
      brief: null,
      link: "https://github.com/christinechanyc",
      image: "https://image.com"
    },
    { // Row 2, Item 2
      title: <i className="fa fa-instagram"></i>,
      brief: null,
      link: "https://instagram.com/christinechanyc",
      image: "https://image.com"
    },
    { // Row 2, Item 1
      title: null,
      brief: null,
      link: null,
      image: null
    }
  ]
]
