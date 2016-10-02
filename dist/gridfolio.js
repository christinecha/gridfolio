'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gridfolio = function () {
  function Gridfolio(config) {
    _classCallCheck(this, Gridfolio);

    // Store your configuration data.
    this.$container = document.querySelector(config.container);
    this.options = config.options;
    this.blocks = config.blocks;

    // Store the window size.
    this.vw = window.innerWidth;
    this.vh = window.innerHeight;

    // Bind and cache event handlers
    this.boundHandleResize = this.handleResize.bind(this);
    this.boundHandleScroll = this.handleScroll.bind(this);

    // Add event listeners
    window.addEventListener('resize', this.boundHandleResize);
    window.addEventListener('scroll', this.boundHandleScroll);

    // Store reusable data
    this.storePrototypeBlock();
    this.storeGridData();

    // Render!
    this.renderGrid();
    this.renderBlocks();

    // Optional render methods
    if (this.options.scaleFonts) this.scaleFonts();
    if (this.options.animateIntoView) this.animateIntoView();
  }

  /**~~~~~~~~~~~~ METHODS THAT STORE SHIT ~~~~~~~~~~~~**/

  _createClass(Gridfolio, [{
    key: 'generateElement',
    value: function generateElement(tag, classname) {
      var wrapperTag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var $element = document.createElement(tag);
      $element.classList.add(classname);

      if (wrapperTag) {
        var $wrapper = this.generateElement(wrapperTag, classname + '-wrapper');
        $wrapper.appendChild($element);
        return $wrapper;
      }

      return $element;
    }

    // Cache a block so you can just clone off of it later.

  }, {
    key: 'storePrototypeBlock',
    value: function storePrototypeBlock() {
      this.$_block = this.generateElement('div', 'gridfolio--block');
      this.$_blockLink = this.generateElement('a', 'gridfolio--block-link');
      this.$_blockContent = this.generateElement('div', 'gridfolio--block-content');

      this.$_title = this.generateElement('h2', 'gridfolio--block-title', 'div');
      this.$_description = this.generateElement('p', 'gridfolio--block-description', 'div');
      this.$_tags = this.generateElement('div', 'gridfolio--block-tags', 'div');

      this.$_blockContent.appendChild(this.$_title);
      this.$_blockContent.appendChild(this.$_description);
      this.$_blockContent.appendChild(this.$_tags);

      this.$_blockLink.appendChild(this.$_blockContent);
      this.$_block.appendChild(this.$_blockLink);
    }

    // Figure out which breakpoint you're at, and store that and the
    // relevant grid width (measured in blocks).

  }, {
    key: 'storeGridData',
    value: function storeGridData() {
      var _this = this;

      // Loop through the breakpoints you got and see which one you're at.
      this.options.breakpoints.forEach(function (b) {
        if (_this.vw >= b.minWidth) {
          _this.gridWidth = b.gridWidth;

          // If you offer up a breakpoint smaller than 0 (c'mon, that doesn't
          // make any sense!) we'll use 300 to avoid dividing by 0 later.
          if (b.minWidth <= 0) _this.breakpoint = 300;else _this.breakpoint = b.minWidth;
        }
      });
    }

    /**~~~~~~~~~~~~ METHODS THAT HANDLE EVENTS AND SHIT ~~~~~~~~~~~~**/

  }, {
    key: 'handleResize',
    value: function handleResize() {
      var _this2 = this;

      // store new data about the window + grid
      this.vw = window.innerWidth;
      this.vh = window.innerHeight;
      this.storeGridData();

      // update all the blocks' sizes
      this.blocks.forEach(function (block) {
        return _this2.renderBlockSize(block.$block);
      });

      // run optional render methods
      if (this.options.scaleFonts) this.scaleFonts();
      if (this.options.animateIntoView) this.animateIntoView();
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      if (this.options.animateIntoView) this.animateIntoView();
    }

    /**~~~~~~~~~~~~ METHODS THAT RENDER SHIT ~~~~~~~~~~~~**/

  }, {
    key: 'renderGrid',
    value: function renderGrid() {
      this.$grid = document.createElement('div');
      this.$grid.classList.add('gridfolio');

      this.$container.appendChild(this.$grid);

      if (this.options.theme) this.$grid.setAttribute('data-theme', this.options.theme);
      if (this.options.animateIntoView) this.$grid.classList.add('animates-into-view');
    }
  }, {
    key: 'renderBlocks',
    value: function renderBlocks() {
      var _this3 = this;

      this.blocks.forEach(function (block, i) {
        var $block = _this3.$_block.cloneNode(true);
        var $link = $block.querySelector('.gridfolio--block-link');
        var $title = $block.querySelector('.gridfolio--block-title');
        var $description = $block.querySelector('.gridfolio--block-description');
        var $tags = $block.querySelector('.gridfolio--block-tags');

        if (block.classname) $block.className += ' ' + block.classname;

        if (block.title) $title.innerHTML = block.title;
        if (block.description) $description.innerHTML = block.description;
        if (block.url) $link.href = block.url;

        if (block.tags) {
          block.tags.forEach(function (tag) {
            var $tag = document.createElement('span');
            $tag.innerHTML = tag;

            $tags.appendChild($tag);
          });
        }

        _this3.blocks[i].$block = $block;
        _this3.blocks[i].$title = $title;
        _this3.blocks[i].$description = $description;
        _this3.blocks[i].$tags = $tags;

        _this3.$grid.appendChild($block);

        _this3.renderBlockSize($block);
      });
    }
  }, {
    key: 'renderBlockSize',
    value: function renderBlockSize($block) {
      $block.style.width = 100 / this.gridWidth + '%';
      $block.style.height = $block.clientWidth + 'px';
    }

    /**~~~~~~~~~~~~ OPTIONAL METHODS THAT RENDER SHIT ~~~~~~~~~~~~**/

  }, {
    key: 'animateIntoView',
    value: function animateIntoView() {
      var _this4 = this;

      this.blocks.map(function (block) {
        var $block = block.$block;

        var isInView = $block.getBoundingClientRect().top < _this4.vh;

        $block.classList[isInView ? 'add' : 'remove']('is-animated');
      });
    }
  }, {
    key: 'scaleFonts',
    value: function scaleFonts() {
      var _this5 = this;

      this.blocks.forEach(function (block, i) {
        var $block = block.$block;
        var $title = block.$title;
        var $description = block.$description;
        var $tags = block.$tags;


        $title.style.fontSize = _this5.vw / _this5.breakpoint * 100 + '%';
        $description.style.fontSize = _this5.vw / _this5.breakpoint * 100 + '%';
        $tags.style.fontSize = _this5.vw / _this5.breakpoint * 100 + '%';
      });
    }
  }]);

  return Gridfolio;
}();

window.Gridfolio = Gridfolio;

module.exports = Gridfolio;
