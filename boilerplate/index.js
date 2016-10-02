var gridfolio = new Gridfolio({

  container: '#gridfolio--container',

  options: {
    animateIntoView: true,  // OPTIONAL

    breakpoints: [          // REQUIRED (at least one!)

      { minWidth: 0, gridWidth: 1 },
      { minWidth: 500, gridWidth: 2 },
      { minWidth: 900, gridWidth: 3 },
      { minWidth: 1300, gridWidth: 4 }
    ],

    scaleFonts: true,       // OPTIONAL
    theme: 'warhol'         // OPTIONAL
  },

  blocks: [
    {
      title: 'Project Title',
      description: 'My project is awesome.',
      url: 'http://christinecha.github.io/gridfolio/',
      tags: ['html', 'css', 'javascript'],

      // these classes correspond to CSS selectors in themes/gridfolio-textures.css.
      classname: 'class-one solid-blue dark-bg'
    },
    {
      title: 'Project Title',
      description: 'My project is awesome.',
      tags: ['html', 'css', 'javascript'],
      url: 'http://christinecha.github.io/gridfolio/',

      // these classes correspond to CSS selectors in themes/gridfolio-textures.css.
      classname: 'class-two solid-pink dark-bg'
    },
    {
      title: 'Project Title',
      description: 'My project is awesome.',
      tags: ['html', 'css', 'javascript'],
      url: 'http://christinecha.github.io/gridfolio/',

      // these classes correspond to CSS selectors in themes/gridfolio-textures.css.
      classname: 'class-three solid-yellow dark-bg'
    }
  ]
})
