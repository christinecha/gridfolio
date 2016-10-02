Gridfolio
=====
**New and (seriously) improved.**

A library to generate simple, stylish, responsive, and easily customizable grid-based portfolios.

#### DEMO: https://christinecha.github.io/gridfolio/
![Gridfolio Demo Gif](https://christinecha.github.io/gridfolio/assets/demo.gif "Gridfolio Demo Gif")


1. [Get Started](#get-started)
2. [Usage](#usage)
3. [Special Features](#special-features)
4. [License](#license)




----

## Get Started

The easiest way to start is to just clone the repo. Then, of course, you can pick and choose which files you want to use.
```
$ git clone https://github.com/christinecha/gridfolio.git
```

Next, let's see how to use this in your own project. First, include the script and the base CSS in your HTML.

````html
  <link href="/your_path/base/gridfolio.css" rel="stylesheet" type="text/css">
````
````html
  <script src="/your_path/base/gridfolio.js"></script>
````

## Usage

Now you'll have access to the `Gridfolio` class, which can be used thusly:

````js
var gridfolio = new Gridfolio({

  // This is the selector string of the DOM element you want to dump
  // Gridfolio into. You can also just use 'body'.
  container: '#gridfolio--container',

  // Here are all your configurable options
  options: {

    // Fancy! Adds an 'is-animated' class to blocks as they come into view.
    // I've given you a basic fade/slide-in effect, but this is set up so
    // you can add whatever CSS craziness you want.
    animateIntoView: true,

    // Breakpoints are mobile first.
    breakpoints: [

      // That means the grid is 1 block wide when the broswer's width
      // ranges from 0px wide to 500px wide
      { minWidth: 0, gridWidth: 1 },
      // 3 blocks wide from 500px to 900px browser width
      { minWidth: 500, gridWidth: 2 },
      // and so on
      { minWidth: 900, gridWidth: 3 },
      // and so forth.
      { minWidth: 1300, gridWidth: 4 }
    ],

    // Want the font sizes to scale with the browser? Yeah, we fabulous.
    scaleFonts: true,

    // Pop in a theme! All this does is add [data-themee='warhol'] to
    // your .gridfolio element, so it WON'T HAVE AN EFFECT unless you also
    // include the corresponding CSS file. See the 'Special Features' section.
    theme: 'warhol'
  },

  // Okay, this is where your actual data lives. All fields are optional.
  blocks: [
    {
      title: 'Project Title',
      description: 'My project is awesome.',
      tags: ['html', 'css', 'javascript'],
      classname: 'any-additional-classes-this-block-should-have'
    },
    {
      title: 'Second Project'
      // etc., etc.
    }
  ]
})
````

Isn't that easy?

... well, if it isn't, let me know. :) Have fun!!!


## Special Features

Let's talk about some more fancy shit. THEMES! That's right, I built some simple CSS themes for y'all, and it's **so easy** to implement (or make your own).


Import whatever CSS theme file you want (after the base one, of course), and then just tack on the theme in your Gridfolio config.
````
<head>
  <link href="/your_path/base/gridfolio.css" rel="stylesheet" type="text/css">
  <link href="/your_path/themes/gridfolio-warhol.css" rel="stylesheet" type="text/css">
</head>

<body>
  // Your HTML stuff
  <script src="/your_path/base/gridfolio.js"></script>

  <script>
    var gridfolio = new Gridfolio({
      container: 'body',
      options: {
        animateIntoView: true,
        breakpoints: [],
        scaleFonts: true,
        theme: 'warhol'
      },
      blocks: [ /* your data */ ]
    })
  </script>
</body>
````

The config finds the DOM Element `.gridfolio` and sets attribute `'data-theme'` to `'warhol'`. And then, if you look in `gridfolio-warhol.css`, you'll see we're using that tag to set styles.

**Which means that you can actually set 'theme' to whatever name you want, and then implement your own theme with custom CSS suuuuuper easily.**

<3 - CHA

----

## License

The MIT License (MIT) Copyright (c) 2016 Christine Cha

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
