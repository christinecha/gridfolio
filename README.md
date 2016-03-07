**Gridfolio**
===============

**Gridfolio** is a super simple React-based portfolio generator.

![alt text]("https://github.com/christinecha/gridfolio/tree/master/src/assets/Gridfolio_preview.png")

-------------

## Quickstart

First, install packages from the root directory:

```
$ npm install
```




Next, get the server up and running:

```
$ npm start
```


You should then be able to access Gridfolio at this URL:
<https://localhost:8080/webpack-dev-server>

-------------

## Customization (basic)

#### Adding/Updating Content

All of the content in your Gridfolio is contained in the `Folio` variable in `myGridfolio.js`. Everything follows this simple structure:

```
Folio = [
  [ {Block}, {Block}, {Block} ],     // Row of 3 Blocks
  [ {Block} ],                     // Row of 1 Block
  [ {Block}, {Block} ],             // Row of 2 Blocks
  ...                             // etc.
]
```

Each `Block` is just an object, filled with some basic info:

```
{
  title: "My Project",
  link: "https://github.com/christinecha/gridfolio",
  image: "https://image.com/image.png"
}
```

You'll see some extra stuff, like:

```
{
  ...
  titleColor: '#818182',
  titleFontSize: 16,
  customHeight: 0.03,
  borderRadius: '0'
}
```

These are essentially Block-specific styles that are overriding the default Style Guide. Which is a nice segue to the next section ---


#### Customizing the Design

Coming soon.
