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

  // this is a unique built-in property
  customHeight: true         // only include if you want this block to
                             // use a unique height, which you'll declare
                             // in its styles (below)
}
```

and you can add a variable number of styles, like this:

```
{
  style: {
    color: "#818182",
    fontSize: "16px",
    borderRadius: "50%",
    height: "50px"
  }
}
```

These are essentially Block-specific styles that are overriding the default Style Guide. Which is a nice segue to the next section ---


#### Customizing the Design

All of your styles hang out in the `gf_styles` variable in `gridfolio.js`.

The structure is basically this:

```
var gf_styles = {
  squareMode: true,   // if false, each block will try to default to the
                      // innerBlock.height set below, UNLESS the individual   // block.customHeight is set to true.

  innerBlock: {},     // block styles
  blockTitle: {},     // block title styles
  keyword: {},        // individual keyword styles
  keywords: {},       // keyword container styles
}
```

And voila!
