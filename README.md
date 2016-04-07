**Gridfolio**
===============

**Gridfolio** is a super simple portfolio generator. [Live demo >>](http://christinecha.github.io/gridfolio/)

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
  imageURL: "https://image.com/image.png"
}
```

and you can add a variable number of styles, like this:

```
{
  style: {
    color: '#818182',
    fontSize: 16,
    borderRadius: '50%'
  }
}
```

These are essentially Block-specific styles that are overriding the default Style Guide. Which is a nice segue to the next section ---


#### Customizing the Design

All of your styles hang out in the `gf_styles` variable in `gridfolio.js`.

The structure is basically this:

```
var gf_styles = {
  squareMode: true,   // overall style options
  innerBlock: {},     // block styles
  blockTitle: {},     // block title styles
  keyword: {},        // individual keyword styles
  keywords: {},       // keyword container styles
}
```

And voila!
