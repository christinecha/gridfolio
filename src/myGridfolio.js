"use strict"

import React from 'react'
import * as style from './myGridfolioStyles'

export const FolioStyle = style.Default

// Notes + Best Practices
//
// 1. Try to use rows that are either even or divisible by three in length.
//    Otherwise, the collapsing-for-mobile function will not be happy.
//
// 2. It's best to limit the number of keywords to 5-6 (will display nicely
//    on almost all block sizes and screen sizes) OR adjust the keywords'
//    marginTop value in FolioStyle so it will have more space.

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
      title: "Jane Doe",
      link: null,
      image: null,
      backgroundColor: "#00aeef",
      titleFontSize: 30
    },
    {
      title: "Project #1",
      link: "https://github.com/christinecha/gridfolio",
      image: "url('http://facespayneuter.org/wp-content/uploads/2014/08/foundkittens.jpg')",
      keywords: ["skill", "thing", "language", "library"],
      isTinted: true,
    },
    {
      title: "Project #2",
      link: "https://github.com/christinecha/gridfolio",
      image: "url('https://www.washingtonpost.com/blogs/local/files/2014/10/4-kittens1.jpg')",
      keywords: ["skill", "thing", "language", "library"],
      isTinted: true,
    },
    {
      title: "Project #3",
      link: "https://github.com/christinecha/gridfolio",
      image: "url('https://s3.amazonaws.com/rapgenius/cats-animals-kittens-background.jpg')",
      keywords: ["skill", "thing", "language", "library"],
      isTinted: true,
    }
  ],
  [  // Row 2
    {
      title: "Project #4",
      link: "https://github.com/christinecha/gridfolio",
      image: "url('http://www.tshirtvortex.net/wp-content/uploads/Mister-Mittens-Big-Adventure.jpg')",
      keywords: ["skill", "thing", "language", "library"],
      isTinted: true,
    },
    {
      title: "Project #5",
      link: "https://github.com/christinecha/gridfolio",
      image: "url('http://data.whicdn.com/images/79011117/large.jpg')",
      keywords: ["skill", "thing", "language", "library"],
      isTinted: true,
    },
    {
      title: "Project #6",
      link: "https://github.com/christinecha/gridfolio",
      image: "url('https://s-media-cache-ak0.pinimg.com/736x/be/09/56/be09569e65ee1e58e1cdb954da4c6192.jpg')",
      keywords: ["skill", "thing", "language", "library"],
      isTinted: true,
    }
  ],
  [ // Row 4
    {
      // The <i></i> tags are FontAwesome icons.
      // Find more here: https://fortawesome.github.io/Font-Awesome/icons/
      // ! Remember -- if you're copying and pasting -- change "class"
      // to "className" since this is React-ified HTML.
      title: <i className="fa fa-twitter"></i>,
      brief: null,
      link: "https://twitter.com/christinechanyc",
      image: null,
      backgroundColor: '#9BD7E0',
      titleFontSize: 30
    },
    {
      title: "BLOG",
      brief: null,
      link: "https://twitter.com/christinechanyc",
      image: null,
      backgroundColor: '#9BD7E0',
      titleFontSize: 30
    },
    {
      title: <i className="fa fa-pinterest-p"></i>,
      brief: null,
      link: "https://twitter.com/christinechanyc",
      image: null,
      backgroundColor: '#9BD7E0',
      titleFontSize: 30
    },
    {
      title: <i className="fa fa-flickr"></i>,
      brief: null,
      link: "https://twitter.com/christinechanyc",
      image: null,
      backgroundColor: '#9BD7E0',
      titleFontSize: 30
    },
    {
      title: <i className="fa fa-product-hunt"></i>,
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
    }
  ]
]
