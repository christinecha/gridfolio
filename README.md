**Gridfolio**
===============

**Gridfolio** is a super simple portfolio generator.

[Example 1 >>](http://christinecha.com/)   
[Example 2 >>](http://christinecha.github.io/gridfolio/)

![alt text](http://christinecha.github.io/gridfolio/assets/demo.png)

-------------

## Quickstart

First, clone the repo:

```
$ git clone https://github.com/christinecha/gridfolio.git
```

-------------

## Customization

#### Adding/Updating Content

All of the content in your Gridfolio is contained in the `gf_content` variable in `gridfolio.js`. Everything follows this simple structure:

```
var gf_content = [
  [ {Block}, {Block}, {Block} ],     // Row of 3 Blocks
  [ {Block} ],                       // Row of 1 Block
  [ {Block}, {Block} ],              // Row of 2 Blocks
  ...                                // etc.
]
```

Each `Block` is just an object, filled with some basic info:

```
{
  title: "My Project",
  link: "https://github.com/christinecha/gridfolio",
  imageURL: "https://image.com/image.png",
  customHeight: true,        // only include this if you want this block to
                             // use a unique height, which you'll declare
                             // in its styles (below)
  style: { ... }
}
```

and you can add [any CSS style properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) into the style object, like this:

```
style: {
  color: "#818182",
  fontSize: "16px",
  borderRadius: "50%",
  height: "50px"           // you'd either need to set customHeight to true OR the
                           // global squareMode to false or else this would get ignored
}
```

These are essentially Block-specific styles that are overriding the default Style Guide (a.k.a. ```gf_styles```). Which is a nice segue to the next section ---



#### Customizing the Design

All of your styles hang out in the `gf_styles` variable in `gridfolio.js`.

The structure is basically this:

```
var gf_styles = {
  squareMode: true,   /* If false, each block will try to default to the
                      innerBlock.height set below, UNLESS the individual
                      block.customHeight is set to true. */

  innerBlock: {},     // block styles
  blockTitle: {},     // block title styles
  keyword: {},        // individual keyword styles
  keywords: {},       // keyword container styles
}
```

Et voila!

:heart_eyes: :heart_eyes: :heart_eyes: :heart_eyes: :heart_eyes:

Feel free to steal [my personal portfolio styles](http://github.com/christinecha/portfolio) to start, if you want. It looks like this right now:

![alt text](http://christinecha.github.io/gridfolio/assets/demo_2.png)


----------

The MIT License

Copyright (c) 2016 Christine Cha.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
