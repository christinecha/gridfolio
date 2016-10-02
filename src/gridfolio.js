class Gridfolio {

  constructor(config) {

    // Store your configuration data.
    this.$container = document.querySelector(config.container)
    this.options = config.options
    this.blocks = config.blocks

    // Store the window size.
    this.vw = window.innerWidth
    this.vh = window.innerHeight

    // Bind and cache event handlers
    this.boundHandleResize = this.handleResize.bind(this)
    this.boundHandleScroll = this.handleScroll.bind(this)

    // Add event listeners
    window.addEventListener('resize', this.boundHandleResize)
    window.addEventListener('scroll', this.boundHandleScroll)

    // Store reusable data
    this.storePrototypeBlock()
    this.storeGridData()

    // Render!
    this.renderGrid()
    this.renderBlocks()

    // Optional render methods
    if (this.options.scaleFonts) this.scaleFonts()
    if (this.options.animateIntoView) this.animateIntoView()
  }

  /**~~~~~~~~~~~~ METHODS THAT STORE SHIT ~~~~~~~~~~~~**/

  generateElement(tag, classname, wrapperTag = null) {
    const $element = document.createElement(tag)
    $element.classList.add(classname)

    if (wrapperTag) {
      const $wrapper = this.generateElement(wrapperTag, classname + '-wrapper')
      $wrapper.appendChild($element)
      return $wrapper
    }

    return $element
  }

  // Cache a block so you can just clone off of it later.
  storePrototypeBlock() {
    this.$_block        = this.generateElement('div', 'gridfolio--block')
    this.$_blockLink    = this.generateElement('a', 'gridfolio--block-link')
    this.$_blockContent = this.generateElement('div', 'gridfolio--block-content')

    this.$_title        = this.generateElement('h2', 'gridfolio--block-title', 'div')
    this.$_description  = this.generateElement('p', 'gridfolio--block-description', 'div')
    this.$_tags         = this.generateElement('div', 'gridfolio--block-tags', 'div')

    this.$_blockContent.appendChild(this.$_title)
    this.$_blockContent.appendChild(this.$_description)
    this.$_blockContent.appendChild(this.$_tags)

    this.$_blockLink.appendChild(this.$_blockContent)
    this.$_block.appendChild(this.$_blockLink)
  }

  // Figure out which breakpoint you're at, and store that and the
  // relevant grid width (measured in blocks).
  storeGridData() {

    // Loop through the breakpoints you got and see which one you're at.
    this.options.breakpoints.forEach(b => {
      if (this.vw >= b.minWidth) {
        this.gridWidth = b.gridWidth

        // If you offer up a breakpoint smaller than 0 (c'mon, that doesn't
        // make any sense!) we'll use 300 to avoid dividing by 0 later.
        if (b.minWidth <= 0) this.breakpoint = 300
        else this.breakpoint = b.minWidth
      }
    })
  }

  /**~~~~~~~~~~~~ METHODS THAT HANDLE EVENTS AND SHIT ~~~~~~~~~~~~**/

  handleResize() {

    // store new data about the window + grid
    this.vw = window.innerWidth
    this.vh = window.innerHeight
    this.storeGridData()

    // update all the blocks' sizes
    this.blocks.forEach(block => this.renderBlockSize(block.$block))

    // run optional render methods
    if (this.options.scaleFonts) this.scaleFonts()
    if (this.options.animateIntoView) this.animateIntoView()
  }

  handleScroll() {
    if (this.options.animateIntoView) this.animateIntoView()
  }

  /**~~~~~~~~~~~~ METHODS THAT RENDER SHIT ~~~~~~~~~~~~**/

  renderGrid() {
    this.$grid = document.createElement('div')
    this.$grid.classList.add('gridfolio')

    this.$container.appendChild(this.$grid)

    if (this.options.theme) this.$grid.setAttribute('data-theme', this.options.theme)
    if (this.options.animateIntoView) this.$grid.classList.add('animates-into-view')
  }

  renderBlocks() {
    this.blocks.forEach((block, i) => {
      const $block = this.$_block.cloneNode(true)
      const $link = $block.querySelector('.gridfolio--block-link')
      const $title = $block.querySelector('.gridfolio--block-title')
      const $description = $block.querySelector('.gridfolio--block-description')
      const $tags = $block.querySelector('.gridfolio--block-tags')

      if (block.classname) $block.className += ' ' + block.classname

      if (block.title) $title.innerHTML = block.title
      if (block.description) $description.innerHTML = block.description
      if (block.url) $link.href = block.url

      if (block.tags) {
        block.tags.forEach(tag => {
          const $tag = document.createElement('span')
          $tag.innerHTML = tag

          $tags.appendChild($tag)
        })
      }

      this.blocks[i].$block = $block
      this.blocks[i].$title = $title
      this.blocks[i].$description = $description
      this.blocks[i].$tags = $tags

      this.$grid.appendChild($block)

      this.renderBlockSize($block)
    })
  }

  renderBlockSize($block) {
    $block.style.width = 100 / this.gridWidth + '%'
    $block.style.height = $block.clientWidth + 'px'
  }

  /**~~~~~~~~~~~~ OPTIONAL METHODS THAT RENDER SHIT ~~~~~~~~~~~~**/

  animateIntoView() {
    this.blocks.map(block => {

      const { $block } = block
      const isInView = $block.getBoundingClientRect().top < this.vh

      $block.classList[isInView ? 'add' : 'remove']('is-animated')
    })
  }

  scaleFonts() {
    this.blocks.forEach((block, i) => {

      const { $block, $title, $description, $tags } = block

      $title.style.fontSize = (this.vw / this.breakpoint) * 100 + '%'
      $description.style.fontSize = (this.vw / this.breakpoint) * 100 + '%'
      $tags.style.fontSize = (this.vw / this.breakpoint) * 100 + '%'
    })
  }

}

window.Gridfolio = Gridfolio

module.exports = Gridfolio
