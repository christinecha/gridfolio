"use strict"

import React from 'react'
import * as style from './myGridfolioStyles'

export const FolioStyle = style.Default

export const Folio = [
  [ // Row 0
    {
      title: "Gridfolio: a simple layout for developers >>",
      brief: "An in-browser and iOS native game written in React and React-Native.",
      link: "https://github.com/christinecha/gridfolio",
      image: null,
      titleColor: '#818182',
      titleFontSize: 16,
      customHeight: 0.03,
      borderRadius: '0'
    },
  ],
  [ // Row 1
    {
      title: "Christine Cha",
      brief: null,
      link: null,
      image: null,
      backgroundColor: "#9BD7E0",
      titleFontSize: 40
    },
    {
      title: "Circlematch",
      brief: "An in-browser and iOS native game written in React and React-Native.",
      link: "https://christinecha.github.io/circlematch",
      image: "url('./src/assets/CircleMatch.png')",
      keywords: ["ios", "react", "react-native", "javascript", "html", "css"],
      isTinted: true,
    },
    {
      title: "Mini Scoop Shop",
      brief: "A tiny eCommerce shop.",
      link: "https://icecreamaccessories.herokuapp.com/",
      image: "url('./src/assets/MiniScoopShop.png')",
      keywords: ["html", "css", "Jquery", "stripe", "node", "express"],
      isTinted: true
    }
  ],
  // [
  //   {
  //     title: "NYC Jazz Bot",
  //     brief: "A twitter bot.",
  //     link: "https://twitter.com/nycjazzapp",
  //     image: null,
  //     keywords: ["python", "twitter api"],
  //     isTinted: true,
  //     customWidth: 0.2,
  //     customHeight: 0.5
  //   },
  //   {
  //     title: "Mini Scoop Shop",
  //     brief: "A tiny eCommerce shop.",
  //     link: "https://icecreamaccessories.herokuapp.com/",
  //     image: "url('./src/assets/MiniScoopShop.png')",
  //     keywords: ["html", "css", "Jquery", "stripe", "node", "express"],
  //     isTinted: true,
  //     customWidth: 0.5,
  //     customHeight: 0.5
  //   }
  // ],
  [ // Row 2
    {
      title: "HOMES (Gilad Hekselman)",
      brief: "Complete 6-panel album artwork.",
      link: "http://www.giladhekselman.com/discography/",
      image: "url('./src/assets/GiladHekselman.jpeg')",
      keywords: ["photoshop", "graphic design", "photo editing"],
      isTinted: true
    },
    {
      title: "NYC Jazz Scraper",
      brief: "A Node + Cheerio web scraper for NYC jazz shows.",
      link: "https://github.com/christinecha/nyc-jazz-shows",
      image: "url('./src/assets/Jazz.jpeg')",
      keywords: ["node", "express", "cheerio"],
      isTinted: true
    },
    {
      title: "RC Thursday Presentations",
      brief: "A little web app to make Thursday Presentations at RC a bit more fun.",
      link: "https://presentations.recurse.com/",
      image: "url('./src/assets/RCPresentations.png')",
      keywords: ["react", "javascript", "html", "css", "firebase"],
      isTinted: true
    }
  ],
  [ // Row 3
    {
      title: "MPIA Festival Guide",
      brief: null,
      link: null,
      image: "url('./src/assets/MPIA_festivalguide.png')",
      keywords: ["photoshop", "graphic design", "illustrator", "indesign"],
      isTinted: true
    },
    {
      title: "Kebab King",
      brief: "An android cooking game.",
      link: "https://kebabking.io",
      image: "url('./src/assets/KebabKing.png')",
      keywords: ["game design", "illustrator", "ui design"],
      isTinted: true
    },
    {
      title: "Sponsorship Deck (Wellthily)",
      brief: "A little web app to make Thursday Presentations at RC a bit more fun.",
      link: "http://wellthily.com/",
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
      backgroundColor: 'transparent',
    },
    {
      title: <i className="fa fa-twitter"></i>,
      brief: null,
      link: "https://twitter.com/christinechanyc",
      image: null,
      backgroundColor: '#9BD7E0',
      titleFontSize: 30
    },
    {
      title: <i className="fa fa-github"></i>,
      brief: null,
      link: "https://github.com/christinechanyc",
      image: null,
      backgroundColor: '#9BD7E0',
      titleFontSize: 30
    },
    {
      title: <i className="fa fa-envelope"></i>,
      brief: null,
      link: "mailto:hello@christinecha.com",
      image: null,
      backgroundColor: '#9BD7E0',
      titleFontSize: 30
    },
    {
      title: <i className="fa fa-instagram"></i>,
      brief: null,
      link: "https://instagram.com/christinechanyc",
      image: null,
      backgroundColor: '#9BD7E0',
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
