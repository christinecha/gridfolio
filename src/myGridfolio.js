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
    fontSize: 22,
    fontFamily: 'Geo', // ! Remember to add any font resources to index.html in a link tag.
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  blockKeyword: {
    fontSize: 12,
    fontFamily: 'Geo', // ! Remember to add any font resources to index.html in a link tag.
    color: '#000',
    backgroundColor: 'rgba(255,255,255,0.75)',
    padding: '2px 4px',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
}

export const Folio = [
  [ // Row 1
    { // Row 1, Item 1
      title: "Circlematch",
      brief: "An in-browser and iOS native game written in React and React-Native.",
      link: "https://christinecha.github.io/circlematch",
      image: "url('./src/assets/CircleMatch.png')",
      keywords: ["ios", "react", "react-native", "javascript", "html", "css"],
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
      title: "HOMES (Gilad Hekselman)",
      brief: "Complete 6-panel album artwork.",
      link: "http://www.giladhekselman.com/discography/",
      image: "url('./src/assets/GiladHekselman.jpeg')",
      keywords: ["photoshop", "graphic design", "photo editing"],
      isTinted: true
    }
  ],
  [ // Row 2
    { // Row 1, Item 1
      title: "Mini Scoop Shop",
      brief: "A tiny eCommerce shop.",
      link: "https://icecreamaccessories.herokuapp.com/",
      image: "url('./src/assets/MiniScoopShop.png')",
      keywords: ["html", "css", "Jquery", "stripe", "node", "express"],
      isTinted: true
    },
    { // Row 1, Item 2
      title: "NYC Jazz Scraper",
      brief: "A Node + Cheerio web scraper for NYC jazz shows.",
      link: "https://github.com/christinecha/nyc-jazz-shows",
      image: "url('./src/assets/Jazz.jpeg')",
      keywords: ["node", "express", "cheerio"],
      isTinted: true
    },
    { // Row 1, Item 3
      title: "RC Thursday Presentations",
      brief: "A little web app to make Thursday Presentations at RC a bit more fun.",
      link: "https://presentations.recurse.com/",
      image: "url('./src/assets/RCPresentations.png')",
      keywords: ["react", "javascript", "html", "css", "firebase"],
      isTinted: true
    }
  ],
  [ // Row 3
    { // Row 3, Item 1
      title: "MPIA Festival Guide",
      brief: null,
      link: null,
      image: "url('./src/assets/MPIA_festivalguide.png')",
      keywords: ["photoshop", "graphic design", "illustrator", "indesign"],
      isTinted: true
    },
    { // Row 3, Item 2
      title: "Kebab King",
      brief: "An android cooking game.",
      link: "https://kebabking.io",
      image: "url('./src/assets/KebabKing.png')",
      keywords: ["game design", "illustrator", "ui design"],
      isTinted: true
    },
    { // Row 3, Item 3
      title: "Sponsorship Deck (Wellthily)",
      brief: "A little web app to make Thursday Presentations at RC a bit more fun.",
      link: "https://wellthily.com/",
      image: "url('./src/assets/Wellthily.png')",
      keywords: ["photoshop", "graphic design", "illustrator", "indesign"],
      isTinted: true
    }
  ],
  [ // Row 4
    {
      title: null,
      brief: null,
      link: null,
      image: null,
      backgroundColor: 'transparent'
    },
    {
      title: <i className="fa fa-twitter"></i>,
      brief: null,
      link: "https://twitter.com/christinechanyc",
      image: "https://image.com",
      backgroundColor: '#88DAE2',
      titleFontSize: 30
    },
    {
      title: <i className="fa fa-github"></i>,
      brief: null,
      link: "https://github.com/christinechanyc",
      image: "https://image.com",
      backgroundColor: '#B3E288',
      titleFontSize: 30
    },
    {
      title: <i className="fa fa-envelope"></i>,
      brief: null,
      link: "mailto:hello@christinecha.com",
      image: "https://image.com",
      backgroundColor: '#FFBF7C',
      titleFontSize: 30
    },
    {
      title: <i className="fa fa-instagram"></i>,
      brief: null,
      link: "https://instagram.com/christinechanyc",
      image: "https://image.com",
      backgroundColor: '#FFA8B8',
      titleFontSize: 30
    },
    {
      title: null,
      brief: null,
      link: null,
      image: null,
      backgroundColor: 'transparent'
    }
  ]
]
