(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const IMAGE_SIZE = 128,
      IMAGE_MAP_PATH = '/imageMap',
      INDEX_PAGE_PATH = '/',
      SHAPES_PAGE_PATH = '/shapes',
      CONTAINER_HOUSE_PAGE_PATH = '/containerHouse';

module.exports = {
  IMAGE_SIZE: IMAGE_SIZE,
  IMAGE_MAP_PATH: IMAGE_MAP_PATH,
  INDEX_PAGE_PATH: INDEX_PAGE_PATH,
  SHAPES_PAGE_PATH: SHAPES_PAGE_PATH,
  CONTAINER_HOUSE_PAGE_PATH: CONTAINER_HOUSE_PAGE_PATH
};

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var programMixin = require('./canvas/mixin/program'),
    textureMixin = require('./canvas/mixin/texture'),
    colourMixin = require('./canvas/mixin/colour'),
    shaderMixin = require('./canvas/mixin/shader'),
    bufferMixin = require('./canvas/mixin/buffer'),
    matrixMixin = require('./canvas/mixin/matrix'),
    depthMixin = require('./canvas/mixin/depth'),
    domUtilities = require('./utilities/dom');

var domElementFromSelector = domUtilities.domElementFromSelector;


var defaultOffset = 0;

var Canvas = function () {
  function Canvas() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'canvas';

    _classCallCheck(this, Canvas);

    var domElement = domElementFromSelector(selector),
        context = domElement.getContext('webgl');

    if (!context) {
      throw new Error('Unable to initialise the context.');
    }

    this.context = context;

    this.domElement = domElement;
  }

  _createClass(Canvas, [{
    key: 'getContext',
    value: function getContext() {
      return this.context;
    }
  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.domElement.width;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.domElement.height;
    }
  }, {
    key: 'getClientWidth',
    value: function getClientWidth() {
      return this.domElement.clientWidth;
    }
  }, {
    key: 'getClientHeight',
    value: function getClientHeight() {
      return this.domElement.clientHeight;
    }
  }, {
    key: 'getUniformLocation',
    value: function getUniformLocation(program, name) {
      return this.context.getUniformLocation(program, name);
    }
  }, {
    key: 'getAttributeLocation',
    value: function getAttributeLocation(program, name) {
      return this.context.getAttribLocation(program, name);
    }
  }, {
    key: 'setWidth',
    value: function setWidth(width) {
      this.domElement.setAttribute('width', width);
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      this.domElement.setAttribute('height', height);
    }
  }, {
    key: 'setViewport',
    value: function setViewport(x, y, width, height) {
      this.context.viewport(x, y, width, height);
    }
  }, {
    key: 'setUniformLocationIntegerValue',
    value: function setUniformLocationIntegerValue(uniformLocation, integerValue) {
      this.context.uniform1i(uniformLocation, integerValue);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.clearDepth();
      this.clearColour();
      this.clearDepthBuffer();
      this.clearColourBuffer();
    }
  }, {
    key: 'resize',
    value: function resize(width, height) {
      this.setWidth(width);
      this.setHeight(height);
      this.setViewport(0, 0, width, height);
    }
  }, {
    key: 'render',
    value: function render(shader, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var offsetMatrixUniformLocation = shader.getOffsetMatrixUniformLocation(),
          rotationMatrixUniformLocation = shader.getRotationMatrixUniformLocation(),
          positionMatrixUniformLocation = shader.getPositionMatrixUniformLocation(),
          projectionMatrixUniformLocation = shader.getProjectionMatrixUniformLocation(),
          normalMatrixUniformLocation = shader.getNormalMatrixUniformLocation(),
          canvas = this; ///

      offsetMatrix.apply(offsetMatrixUniformLocation, canvas);
      rotationMatrix.apply(rotationMatrixUniformLocation, canvas);
      positionMatrix.apply(positionMatrixUniformLocation, canvas);
      projectionMatrix.apply(projectionMatrixUniformLocation, canvas);
      normalMatrix.apply(normalMatrixUniformLocation, canvas);

      var count = shader.getCount();

      this.drawElements(count);
    }
  }, {
    key: 'drawElements',
    value: function drawElements(count) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
      var _context = this.context,
          TRIANGLES = _context.TRIANGLES,
          UNSIGNED_SHORT = _context.UNSIGNED_SHORT,
          mode = TRIANGLES,
          type = UNSIGNED_SHORT;


      this.context.drawElements(mode, count, type, offset);
    }
  }]);

  return Canvas;
}();

Object.assign(Canvas.prototype, programMixin);
Object.assign(Canvas.prototype, textureMixin);
Object.assign(Canvas.prototype, colourMixin);
Object.assign(Canvas.prototype, shaderMixin);
Object.assign(Canvas.prototype, bufferMixin);
Object.assign(Canvas.prototype, matrixMixin);
Object.assign(Canvas.prototype, depthMixin);

module.exports = Canvas;

},{"./canvas/mixin/buffer":3,"./canvas/mixin/colour":4,"./canvas/mixin/depth":5,"./canvas/mixin/matrix":6,"./canvas/mixin/program":7,"./canvas/mixin/shader":8,"./canvas/mixin/texture":9,"./utilities/dom":92}],3:[function(require,module,exports){
'use strict';

function createElementBuffer(data) {
  var _context = this.context,
      ELEMENT_ARRAY_BUFFER = _context.ELEMENT_ARRAY_BUFFER,
      STATIC_DRAW = _context.STATIC_DRAW,
      target = ELEMENT_ARRAY_BUFFER,
      usage = STATIC_DRAW,
      uint16Array = new Uint16Array(data),
      elementBuffer = this.context.createBuffer();


  this.context.bindBuffer(target, elementBuffer);

  this.context.bufferData(target, uint16Array, usage);

  return elementBuffer;
}

function bindElementBuffer(elementBuffer) {
  var ELEMENT_ARRAY_BUFFER = this.context.ELEMENT_ARRAY_BUFFER,
      target = ELEMENT_ARRAY_BUFFER;


  this.context.bindBuffer(target, elementBuffer);
}

function createBuffer(data) {
  var _context2 = this.context,
      ARRAY_BUFFER = _context2.ARRAY_BUFFER,
      STATIC_DRAW = _context2.STATIC_DRAW,
      target = ARRAY_BUFFER,
      usage = STATIC_DRAW,
      buffer = this.context.createBuffer(),
      float32Array = new Float32Array(data);


  this.context.bindBuffer(target, buffer);

  this.context.bufferData(target, float32Array, usage);

  return buffer;
}

function bindBuffer(buffer, attributeLocation, components) {
  var _context3 = this.context,
      ARRAY_BUFFER = _context3.ARRAY_BUFFER,
      FLOAT = _context3.FLOAT,
      target = ARRAY_BUFFER,
      type = FLOAT,
      normalize = false,
      stride = 0,
      offset = 0;


  this.context.bindBuffer(target, buffer);

  this.context.vertexAttribPointer(attributeLocation, components, type, normalize, stride, offset);

  this.context.enableVertexAttribArray(attributeLocation);
}

module.exports = {
  createElementBuffer: createElementBuffer,
  bindElementBuffer: bindElementBuffer,
  createBuffer: createBuffer,
  bindBuffer: bindBuffer
};

},{}],4:[function(require,module,exports){
'use strict';

var defaultR = 0.0,
    defaultG = 0.0,
    defaultB = 0.0,
    defaultA = 1.0;

function clearColour() {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultR;
      var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultG;
      var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultB;
      var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultA;
      this.context.clearColor(r, g, b, a);
}

function clearColourBuffer() {
      var COLOR_BUFFER_BIT = this.context.COLOR_BUFFER_BIT,
          mask = COLOR_BUFFER_BIT;


      this.context.clear(mask);
}

module.exports = {
      clearColour: clearColour,
      clearColourBuffer: clearColourBuffer
};

},{}],5:[function(require,module,exports){
'use strict';

var defaultDepth = 1.0;

function clearDepth() {
  var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultDepth;
  this.context.clearDepth(depth);
}

function clearDepthBuffer() {
  var DEPTH_BUFFER_BIT = this.context.DEPTH_BUFFER_BIT,
      mask = DEPTH_BUFFER_BIT;


  this.context.clear(mask);
}

function enableDepthTesting() {
  var DEPTH_TEST = this.context.DEPTH_TEST,
      cap = DEPTH_TEST;


  this.context.enable(cap);
}

function enableDepthFunction() {
  var LEQUAL = this.context.LEQUAL,
      func = LEQUAL;


  this.context.depthFunc(func);
}

module.exports = {
  clearDepth: clearDepth,
  clearDepthBuffer: clearDepthBuffer,
  enableDepthTesting: enableDepthTesting,
  enableDepthFunction: enableDepthFunction
};

},{}],6:[function(require,module,exports){
'use strict';

function applyMatrix(uniformLocation, matrix) {
  var transpose = false; ///

  this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
}

module.exports = {
  applyMatrix: applyMatrix
};

},{}],7:[function(require,module,exports){
'use strict';

function createProgram(vertexShader, fragmentShader) {
  var program = this.context.createProgram();

  this.context.attachShader(program, vertexShader);
  this.context.attachShader(program, fragmentShader);

  this.context.linkProgram(program);

  return program;
}

function useProgram(program) {
  this.context.useProgram(program);
}

module.exports = {
  createProgram: createProgram,
  useProgram: useProgram
};

},{}],8:[function(require,module,exports){
'use strict';

function createShader(type, shaderSource) {
  var COMPILE_STATUS = this.context.COMPILE_STATUS,
      pname = COMPILE_STATUS,
      shader = this.context.createShader(type);


  this.context.shaderSource(shader, shaderSource);

  this.context.compileShader(shader);

  var compileStatus = this.context.getShaderParameter(shader, pname);

  if (!compileStatus) {
    throw new Error('Unable to create the shader.');
  }

  return shader;
}

function createVertexShader(vertexShaderSource, canvas) {
  var VERTEX_SHADER = this.context.VERTEX_SHADER,
      type = VERTEX_SHADER,
      vertexShader = this.createShader(type, vertexShaderSource);


  return vertexShader;
}

function createFragmentShader(fragmentShaderSource, canvas) {
  var FRAGMENT_SHADER = this.context.FRAGMENT_SHADER,
      type = FRAGMENT_SHADER,
      vertexShader = this.createShader(type, fragmentShaderSource);


  return vertexShader;
}

module.exports = {
  createShader: createShader,
  createVertexShader: createVertexShader,
  createFragmentShader: createFragmentShader
};

},{}],9:[function(require,module,exports){
'use strict';

function createTexture(image) {
  var _context = this.context,
      TEXTURE_2D = _context.TEXTURE_2D,
      RGBA = _context.RGBA,
      UNSIGNED_BYTE = _context.UNSIGNED_BYTE,
      level = 0,
      internalFormat = RGBA,
      format = RGBA,
      type = UNSIGNED_BYTE,
      texture = this.context.createTexture();


  this.context.bindTexture(TEXTURE_2D, texture);

  this.context.texImage2D(TEXTURE_2D, level, internalFormat, format, type, image);

  this.context.generateMipmap(TEXTURE_2D);
}

function activateTexture(target) {
  this.context.activeTexture(target);
}

module.exports = {
  createTexture: createTexture,
  activateTexture: activateTexture
};

},{}],10:[function(require,module,exports){
'use strict';

var CYLINDER_FACES = 16,
    MINIMUM_DISTANCE = 10,
    DEGREES_TO_RADIANS = Math.PI / 180,
    FIELD_OF_VIEW = 45 * DEGREES_TO_RADIANS,
    Z_NEAR = 1,
    Z_FAR = 1000,
    MOUSE_UP = 'MOUSE_UP',
    MOUSE_DOWN = 'MOUSE_DOWN',
    MOUSE_MOVE = 'MOUSE_MOVE',
    MOUSE_WHEEL = 'MOUSE_WHEEL',
    CTRL_KEY_CODE = 17,
    SHIFT_KEY_CODE = 16,
    OFFSET_SCALAR = 0.25,
    DISTANCE_SCALAR = 1.25,
    ANGLE_COORDINATES_SCALAR = 0.01,
    INITIAL_MOUSE_COORDINATES = [0, 0],
    INITIAL_ANGLE_COORDINATES = [0, 0];

module.exports = {
  Z_FAR: Z_FAR,
  Z_NEAR: Z_NEAR,
  MOUSE_UP: MOUSE_UP,
  MOUSE_DOWN: MOUSE_DOWN,
  MOUSE_MOVE: MOUSE_MOVE,
  MOUSE_WHEEL: MOUSE_WHEEL,
  CTRL_KEY_CODE: CTRL_KEY_CODE,
  SHIFT_KEY_CODE: SHIFT_KEY_CODE,
  FIELD_OF_VIEW: FIELD_OF_VIEW,
  CYLINDER_FACES: CYLINDER_FACES,
  MINIMUM_DISTANCE: MINIMUM_DISTANCE,
  DEGREES_TO_RADIANS: DEGREES_TO_RADIANS,
  OFFSET_SCALAR: OFFSET_SCALAR,
  DISTANCE_SCALAR: DISTANCE_SCALAR,
  ANGLE_COORDINATES_SCALAR: ANGLE_COORDINATES_SCALAR,
  INITIAL_MOUSE_COORDINATES: INITIAL_MOUSE_COORDINATES,
  INITIAL_ANGLE_COORDINATES: INITIAL_ANGLE_COORDINATES
};

},{}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element() {
    _classCallCheck(this, Element);
  }

  _createClass(Element, [{
    key: 'getChildElements',
    value: function getChildElements() {
      return this.childElements;
    }
  }, {
    key: 'setChildElements',
    value: function setChildElements(childElements) {
      this.childElements = childElements;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {}
  }, {
    key: 'assignContext',
    value: function assignContext(names, thenDelete) {
      var argumentsLength = arguments.length;

      if (argumentsLength === 1) {
        var firstArgument = first(arguments);

        if (typeof firstArgument === 'boolean') {
          names = Object.keys(this.context);

          thenDelete = firstArgument;
        } else {
          thenDelete = true;
        }
      }

      if (argumentsLength === 0) {
        names = Object.keys(this.context);

        thenDelete = true;
      }

      names.forEach(function (name) {
        var value = this.context[name],
            propertyName = name,
            ///
        descriptor = {
          value: value
        };

        Object.defineProperty(this, propertyName, descriptor);

        if (thenDelete) {
          delete this.context[name];
        }
      }.bind(this), []);
    }
  }, {
    key: 'updateContext',
    value: function updateContext(childElement) {
      var context = typeof childElement.parentContext === 'function' ? childElement.parentContext() : childElement.context;

      this.context = Object.assign({}, this.context, context);

      delete childElement.context;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var element = new (Function.prototype.bind.apply(Class, [null].concat(remainingArguments)))(),
          childElements = childElementsFromElementOrProperties(element, properties);

      element.setChildElements(childElements);

      childElements.forEach(function (childElement) {
        element.updateContext(childElement);
      });

      return element;
    }
  }]);

  return Element;
}();

module.exports = Element;

function childElementsFromElementOrProperties(element, properties) {
  var childElements = typeof element.childElements === 'function' ? element.childElements(properties) : properties.childElements || [];

  return childElements;
}

},{}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    Pan = require('./camera/pan'),
    Zoom = require('./camera/zoom'),
    tilt = require('./camera/tilt'),
    keyEvents = require('./camera/keyEvents'),
    MouseEvents = require('./camera/mouseEvents'),
    OffsetMatrix = require('../matrix/offset'),
    NormalMatrix = require('../matrix/normal'),
    RotationMatrix = require('../matrix/rotation'),
    PositionMatrix = require('../matrix/position'),
    ProjectionMatrix = require('../matrix/projection');

var Camera = function (_Element) {
  _inherits(Camera, _Element);

  function Camera(pan, zoom, handler, mouseDown, canvas) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

    _this.pan = pan;
    _this.zoom = zoom;
    _this.handler = handler;
    _this.mouseDown = mouseDown;
    _this.canvas = canvas;
    return _this;
  }

  _createClass(Camera, [{
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates) {
      this.mouseDown = false;

      tilt.mouseUpHandler();

      this.pan.mouseUpHandler();
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates) {
      this.mouseDown = true;

      tilt.mouseDownHandler();

      this.pan.mouseDownHandler();
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates) {
      tilt.mouseMoveHandler(mouseCoordinates);

      this.pan.mouseMoveHandler(mouseCoordinates, tilt);

      if (this.mouseDown) {
        this.update();
      }
    }
  }, {
    key: 'mouseWheelHandler',
    value: function mouseWheelHandler(delta) {
      this.zoom.mouseWheelEventHandler(delta);

      this.update();
    }
  }, {
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      tilt.shiftKeyHandler(shiftKeyDown);

      this.pan.shiftKeyHandler(shiftKeyDown);
    }
  }, {
    key: 'addKeyEventHandlers',
    value: function addKeyEventHandlers() {
      var shiftKeyHandler = this.shiftKeyHandler.bind(this);

      keyEvents.addShiftKeyHandler(shiftKeyHandler);
    }
  }, {
    key: 'addMouseEventHandlers',
    value: function addMouseEventHandlers() {
      var mouseEvents = MouseEvents.fromNothing(this.canvas),
          mouseUpHandler = this.mouseUpHandler.bind(this),
          mouseDownHandler = this.mouseDownHandler.bind(this),
          mouseMoveHandler = this.mouseMoveHandler.bind(this),
          mouseWheelHandler = this.mouseWheelHandler.bind(this);

      mouseEvents.addMouseUpHandler(mouseUpHandler);
      mouseEvents.addMouseDownHandler(mouseDownHandler);
      mouseEvents.addMouseMoveHandler(mouseMoveHandler);
      mouseEvents.addMouseWheelHandler(mouseWheelHandler);
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate(handler) {
      this.handler = handler;
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      this.update();
    }
  }, {
    key: 'update',
    value: function update() {
      var width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          offset = this.pan.getOffset(),
          distance = this.zoom.getDistance(),
          offsetMatrix = OffsetMatrix.fromOffset(offset),
          rotationMatrix = RotationMatrix.fromAngles(tilt),
          positionMatrix = PositionMatrix.fromDistance(distance),
          projectionMatrix = ProjectionMatrix.fromWidthAndHeight(width, height),
          normalMatrix = NormalMatrix.fromRotationMatrix(rotationMatrix);

      if (this.handler) {
        ///
        this.handler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
      }
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      return {
        onUpdate: this.onUpdate.bind(this),
        forceUpdate: this.forceUpdate.bind(this)
      };
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      this.addKeyEventHandlers();
      this.addMouseEventHandlers();
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var initialDistance = properties.initialDistance,
          initialOffset = properties.initialOffset,
          canvas = properties.canvas,
          pan = Pan.fromInitialOffset(initialOffset),
          zoom = Zoom.fromInitialDistance(initialDistance),
          handler = null,
          mouseDown = false,
          camera = new Camera(pan, zoom, handler, mouseDown, canvas);


      camera.initialise();

      return camera;
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;

},{"../element":11,"../matrix/normal":70,"../matrix/offset":71,"../matrix/position":72,"../matrix/projection":73,"../matrix/rotation":74,"./camera/keyEvents":13,"./camera/mouseEvents":14,"./camera/pan":15,"./camera/tilt":16,"./camera/zoom":17}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../../constants');

var CTRL_KEY_CODE = constants.CTRL_KEY_CODE,
    SHIFT_KEY_CODE = constants.SHIFT_KEY_CODE;

var KeyEvents = function () {
  function KeyEvents(handlers) {
    _classCallCheck(this, KeyEvents);

    this.handlers = handlers;
  }

  _createClass(KeyEvents, [{
    key: 'onCtrlKeyUp',
    value: function onCtrlKeyUp() {
      var ctrlKeyDown = false,
          ctrlKeyHandlers = this.handlers[CTRL_KEY_CODE];

      ctrlKeyHandlers.forEach(function (ctrlKeyHandler) {
        ctrlKeyHandler(ctrlKeyDown);
      });
    }
  }, {
    key: 'onShiftKeyUp',
    value: function onShiftKeyUp() {
      var shiftKeyDown = false,
          shiftKeyHandlers = this.handlers[SHIFT_KEY_CODE];

      shiftKeyHandlers.forEach(function (shiftKeyHandler) {
        shiftKeyHandler(shiftKeyDown);
      });
    }
  }, {
    key: 'onCtrlKeyDown',
    value: function onCtrlKeyDown() {
      var ctrlKeyDown = true,
          ctrlKeyHandlers = this.handlers[CTRL_KEY_CODE];

      ctrlKeyHandlers.forEach(function (ctrlKeyHandler) {
        ctrlKeyHandler(ctrlKeyDown);
      });
    }
  }, {
    key: 'onShiftKeyDown',
    value: function onShiftKeyDown() {
      var shiftKeyDown = true,
          shiftKeyHandlers = this.handlers[SHIFT_KEY_CODE];

      shiftKeyHandlers.forEach(function (shiftKeyHandler) {
        shiftKeyHandler(shiftKeyDown);
      });
    }
  }, {
    key: 'addCtrlKeyHandler',
    value: function addCtrlKeyHandler(ctrlKeyHandler) {
      var ctrlKeyHandlers = this.handlers[CTRL_KEY_CODE];

      ctrlKeyHandlers.push(ctrlKeyHandler);
    }
  }, {
    key: 'addShiftKeyHandler',
    value: function addShiftKeyHandler(shiftKeyHandler) {
      var shiftKeyHandlers = this.handlers[SHIFT_KEY_CODE];

      shiftKeyHandlers.push(shiftKeyHandler);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var handlers = {},
          keyEvents = new KeyEvents(handlers);

      handlers[CTRL_KEY_CODE] = [];
      handlers[SHIFT_KEY_CODE] = [];

      return keyEvents;
    }
  }]);

  return KeyEvents;
}();

var keyEvents = KeyEvents.fromNothing();

module.exports = keyEvents;

var documentDOMElement = document.documentElement;

documentDOMElement.onkeyup = function (event) {
  var keyCode = event.keyCode;

  if (false) {} else if (keyCode === CTRL_KEY_CODE) {
    keyEvents.onCtrlKeyUp();
  } else if (keyCode === SHIFT_KEY_CODE) {
    keyEvents.onShiftKeyUp();
  }
};

documentDOMElement.onkeydown = function (event) {
  var keyCode = event.keyCode;

  if (false) {} else if (keyCode === CTRL_KEY_CODE) {
    keyEvents.onCtrlKeyDown();
  } else if (keyCode === SHIFT_KEY_CODE) {
    keyEvents.onShiftKeyDown();
  }
};

},{"../../constants":10}],14:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../../constants');

var MOUSE_UP = constants.MOUSE_UP,
    MOUSE_DOWN = constants.MOUSE_DOWN,
    MOUSE_MOVE = constants.MOUSE_MOVE,
    MOUSE_WHEEL = constants.MOUSE_WHEEL;

var MouseEvents = function () {
  function MouseEvents(handlersMap) {
    _classCallCheck(this, MouseEvents);

    this.handlersMap = handlersMap;
  }

  _createClass(MouseEvents, [{
    key: 'addMouseUpHandler',
    value: function addMouseUpHandler(mouseUpHandler) {
      this.addHandler(MOUSE_UP, mouseUpHandler);
    }
  }, {
    key: 'addMouseDownHandler',
    value: function addMouseDownHandler(mouseDownHandler) {
      this.addHandler(MOUSE_DOWN, mouseDownHandler);
    }
  }, {
    key: 'addMouseMoveHandler',
    value: function addMouseMoveHandler(mouseMoveHandler) {
      this.addHandler(MOUSE_MOVE, mouseMoveHandler);
    }
  }, {
    key: 'addMouseWheelHandler',
    value: function addMouseWheelHandler(mouseWheelHandler) {
      this.addHandler(MOUSE_WHEEL, mouseWheelHandler);
    }
  }, {
    key: 'addHandler',
    value: function addHandler(eventType, handler) {
      var handlers = this.handlersMap[eventType];

      handlers.push(handler);
    }
  }, {
    key: 'onMouseEvent',
    value: function onMouseEvent(eventType, event) {
      var handlers = this.handlersMap[eventType],
          mouseCoordinates = mouseCoordinatesFromEvent(event, this.canvas);

      handlers.forEach(function (handler) {
        handler(mouseCoordinates);
      });
    }
  }, {
    key: 'onMouseWheelEvent',
    value: function onMouseWheelEvent(event) {
      var handlers = this.handlersMap[MOUSE_WHEEL],
          delta = deltaFromEvent(event);

      handlers.forEach(function (handler) {
        handler(delta);
      });
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var handlersMap = {
        MOUSE_UP: [],
        MOUSE_DOWN: [],
        MOUSE_MOVE: [],
        MOUSE_WHEEL: []
      },
          mouseEvents = new MouseEvents(handlersMap),
          domElement = canvas.getDOMElement();

      addMouseEventHandler(domElement, 'mouseup', function (event) {
        mouseEvents.onMouseEvent(MOUSE_UP, event);
      });
      addMouseEventHandler(domElement, 'mousedown', function (event) {
        mouseEvents.onMouseEvent(MOUSE_DOWN, event);
      });
      addMouseEventHandler(domElement, 'mousemove', function (event) {
        mouseEvents.onMouseEvent(MOUSE_MOVE, event);
      });
      addMouseEventHandler(domElement, 'mousewheel', function (event) {
        mouseEvents.onMouseWheelEvent(event);
      });

      return mouseEvents;
    }
  }]);

  return MouseEvents;
}();

module.exports = MouseEvents;

function deltaFromEvent(event) {
  var delta = Math.max(-1, Math.min(1, event.wheelDelta)); ///

  return delta;
}

function mouseCoordinatesFromEvent(event) {
  var domElement = event.target,
      ///
  domElementBoundingClientRect = domElement.getBoundingClientRect(),
      mouseCoordinates = [+(event.clientX - domElementBoundingClientRect.left), -(event.clientY - domElementBoundingClientRect.top)];

  return mouseCoordinates;
}

function addMouseEventHandler(domElement, type, handler) {
  domElement.addEventListener(type, function (event) {
    handler(event);

    event.preventDefault();
  });
}

},{"../../constants":10}],15:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var vec2 = require('../../maths/vec2'),
    vec3 = require('../../maths/vec3'),
    constants = require('../../constants');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    add = vec3.add,
    subtract = vec2.subtract,
    scale = vec2.scale,
    OFFSET_SCALAR = constants.OFFSET_SCALAR,
    INITIAL_MOUSE_COORDINATES = constants.INITIAL_MOUSE_COORDINATES;

var Pan = function () {
  function Pan(mouseDown, shiftKeyDown, offset, previousOffset, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, Pan);

    this.mouseDown = mouseDown;
    this.shiftKeyDown = shiftKeyDown;
    this.offset = offset;
    this.previousOffset = previousOffset;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  _createClass(Pan, [{
    key: 'getOffset',
    value: function getOffset() {
      return this.offset;
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler() {
      this.mouseDown = false;
      this.previousMouseCoordinates = this.mouseCoordinates;
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler() {
      this.mouseDown = true;
      this.previousOffset = this.offset;

      if (this.shiftKeyDown) {
        this.previousMouseCoordinates = this.mouseCoordinates;
        this.previousOffset = this.offset;
      }
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates, angles) {
      this.mouseCoordinates = mouseCoordinates;

      if (this.mouseDown && this.shiftKeyDown) {
        this.updateOffset(angles);
      }
    }
  }, {
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      this.shiftKeyDown = shiftKeyDown;

      if (this.shiftKeyDown) {
        this.previousMouseCoordinates = this.mouseCoordinates;
        this.previousOffset = this.offset;
      }
    }
  }, {
    key: 'updateOffset',
    value: function updateOffset(angles) {
      var xAngle = angles.getXAngle(),
          yAngle = angles.getYAngle(),
          scalar = OFFSET_SCALAR,
          relativeMouseCoordinates = subtract(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeOffset = scale(relativeMouseCoordinates, scalar),
          firstRelativeOffset = first(relativeOffset),
          secondRelativeOffset = second(relativeOffset);

      var offset = this.previousOffset.slice();

      (function () {
        var x = -Math.cos(yAngle) * firstRelativeOffset,
            y = 0,
            z = -Math.sin(yAngle) * firstRelativeOffset;

        offset = add(offset, [x, y, z]);
      })();

      (function () {
        var x = -Math.sin(xAngle) * Math.sin(yAngle) * secondRelativeOffset,
            y = -Math.cos(xAngle) * secondRelativeOffset,
            z = +Math.sin(xAngle) * Math.cos(yAngle) * secondRelativeOffset;

        offset = add(offset, [x, y, z]);
      })();

      this.offset = offset;
    }
  }], [{
    key: 'fromInitialOffset',
    value: function fromInitialOffset(initialOffset) {
      var offset = initialOffset,
          mouseDown = false,
          shiftKeyDown = false,
          previousOffset = offset,
          ///
      mouseCoordinates = INITIAL_MOUSE_COORDINATES,
          previousMouseCoordinates = mouseCoordinates,
          pan = new Pan(mouseDown, shiftKeyDown, offset, previousOffset, mouseCoordinates, previousMouseCoordinates);

      return pan;
    }
  }]);

  return Pan;
}();

module.exports = Pan;

},{"../../constants":10,"../../maths/vec2":66,"../../maths/vec3":67,"necessary":209}],16:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var vec2 = require('../../maths/vec2'),
    constants = require('../../constants');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    add = vec2.add,
    subtract = vec2.subtract,
    scale = vec2.scale,
    ANGLE_COORDINATES_SCALAR = constants.ANGLE_COORDINATES_SCALAR,
    INITIAL_MOUSE_COORDINATES = constants.INITIAL_MOUSE_COORDINATES,
    INITIAL_ANGLE_COORDINATES = constants.INITIAL_ANGLE_COORDINATES;

var Tilt = function () {
  function Tilt(mouseDown, shiftKeyDown, mouseCoordinates, angleCoordinates, previousMouseCoordinates, previousAngleCoordinates) {
    _classCallCheck(this, Tilt);

    this.mouseDown = mouseDown;
    this.shiftKeyDown = shiftKeyDown;
    this.mouseCoordinates = mouseCoordinates;
    this.angleCoordinates = angleCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
    this.previousAngleCoordinates = previousAngleCoordinates;
  }

  _createClass(Tilt, [{
    key: 'getXAngle',
    value: function getXAngle() {
      var secondAngleCoordinate = second(this.angleCoordinates),
          xAngle = secondAngleCoordinate; ///

      return xAngle;
    }
  }, {
    key: 'getYAngle',
    value: function getYAngle() {
      var firstAngleCoordinate = first(this.angleCoordinates),
          yAngle = -firstAngleCoordinate; ///

      return yAngle;
    }
  }, {
    key: 'getZAngle',
    value: function getZAngle() {
      var zAngle = 0;

      return zAngle;
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler() {
      this.mouseDown = false;
      this.previousAngleCoordinates = this.angleCoordinates;
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler() {
      this.mouseDown = true;
      this.previousMouseCoordinates = this.mouseCoordinates;
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates) {
      this.mouseCoordinates = mouseCoordinates;

      if (this.mouseDown && !this.shiftKeyDown) {
        this.updateAngleCoordinates();
      }
    }
  }, {
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      this.shiftKeyDown = shiftKeyDown;

      if (!shiftKeyDown) {
        this.previousMouseCoordinates = this.mouseCoordinates;
        this.previousAngleCoordinates = this.angleCoordinates;
      }
    }
  }, {
    key: 'updateAngleCoordinates',
    value: function updateAngleCoordinates() {
      var scalar = ANGLE_COORDINATES_SCALAR,
          relativeMouseCoordinates = subtract(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeAngleCoordinates = scale(relativeMouseCoordinates, scalar);

      this.angleCoordinates = add(this.previousAngleCoordinates, relativeAngleCoordinates);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var mouseDown = false,
          shiftKeyDown = false,
          mouseCoordinates = INITIAL_MOUSE_COORDINATES,
          angleCoordinates = INITIAL_ANGLE_COORDINATES,
          previousAngleCoordinates = angleCoordinates,
          ///
      previousMouseCoordinates = mouseCoordinates,
          ///
      tilt = new Tilt(mouseDown, shiftKeyDown, mouseCoordinates, angleCoordinates, previousMouseCoordinates, previousAngleCoordinates);

      return tilt;
    }
  }]);

  return Tilt;
}();

var tilt = Tilt.fromNothing();

module.exports = tilt;

},{"../../constants":10,"../../maths/vec2":66,"necessary":209}],17:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../../constants');

var DISTANCE_SCALAR = constants.DISTANCE_SCALAR,
    MINIMUM_DISTANCE = constants.MINIMUM_DISTANCE;

var Zoom = function () {
  function Zoom(distance) {
    _classCallCheck(this, Zoom);

    this.distance = distance;
  }

  _createClass(Zoom, [{
    key: 'getDistance',
    value: function getDistance() {
      return this.distance;
    }
  }, {
    key: 'mouseWheelEventHandler',
    value: function mouseWheelEventHandler(delta) {
      var scalar = DISTANCE_SCALAR;

      this.distance -= delta * scalar;

      this.distance = Math.max(MINIMUM_DISTANCE, this.distance);
    }
  }], [{
    key: 'fromInitialDistance',
    value: function fromInitialDistance(initialDistance) {
      var distance = initialDistance,
          zoom = new Zoom(distance);

      return zoom;
    }
  }]);

  return Zoom;
}();

module.exports = Zoom;

},{"../../constants":10}],18:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    vec3 = require('../maths/vec3'),
    arrayUtilities = require('../utilities/array'),
    transformUtilities = require('../utilities/transform');

var chop = arrayUtilities.chop,
    flatten = arrayUtilities.flatten,
    composeTransform = transformUtilities.composeTransform,
    subtract = vec3.subtract,
    cross = vec3.cross,
    normalise = vec3.normalise;

var CanvasElement = function (_Element) {
  _inherits(CanvasElement, _Element);

  function CanvasElement(transform) {
    _classCallCheck(this, CanvasElement);

    var _this = _possibleConstructorReturn(this, (CanvasElement.__proto__ || Object.getPrototypeOf(CanvasElement)).call(this));

    _this.transform = transform;
    return _this;
  }

  _createClass(CanvasElement, [{
    key: 'getTransform',
    value: function getTransform() {
      return this.transform;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer, transforms);
      });
    }
  }, {
    key: 'calculateVertexPositionData',
    value: function calculateVertexPositionData(transforms) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      var initialVertexPositionData = this.getInitialVertexPositionData(),
          initialVertexPositions = chop(initialVertexPositionData, 3),
          ///
      vertexPositions = initialVertexPositions.map(function (initialVertexPosition) {
        var vertexPosition = initialVertexPosition;

        transforms.forEach(function (transform) {
          vertexPosition = transform(vertexPosition);
        });

        return vertexPosition;
      }),
          vertexPositionData = flatten(vertexPositions);

      return vertexPositionData;
    }
  }, {
    key: 'calculateVertexNormalData',
    value: function calculateVertexNormalData(vertexPositionData) {
      var faces = chop(vertexPositionData, 12),
          ///
      vertexNormals = faces.reduce(function (vertexNormals, face) {
        var vertexPositions = chop(face, 3);

        for (var index = 0; index < 4; index++) {
          var firstVertexIndex = index,
              secondVertexIndex = (index + 1) % 4,
              thirdVertexIndex = (index + 3) % 4,
              firstVertexPosition = vertexPositions[firstVertexIndex],
              secondVertexPosition = vertexPositions[secondVertexIndex],
              thirdVertexPosition = vertexPositions[thirdVertexIndex],
              firstVector = subtract(secondVertexPosition, firstVertexPosition),
              secondVector = subtract(thirdVertexPosition, firstVertexPosition),
              vertexNormal = normalise(cross(firstVector, secondVector));

          vertexNormals.push(vertexNormal);
        }

        return vertexNormals;
      }, []),
          vertexNormalData = flatten(vertexNormals); ///

      return vertexNormalData;
    }
  }, {
    key: 'calculateVertexIndexData',
    value: function calculateVertexIndexData(vertexPositionData) {
      var vertexIndexData = [],
          vertexPositionDataLength = vertexPositionData.length,
          facesLength = vertexPositionDataLength / 12; ///

      for (var index = 0; index < facesLength; index++) {
        var offset = index * 4;

        vertexIndexData.push(offset + 0);
        vertexIndexData.push(offset + 1);
        vertexIndexData.push(offset + 2);
        vertexIndexData.push(offset + 0);
        vertexIndexData.push(offset + 2);
        vertexIndexData.push(offset + 3);
      }

      return vertexIndexData;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var width = properties.width,
          height = properties.height,
          depth = properties.depth,
          position = properties.position,
          rotations = properties.rotations,
          transform = composeTransform(width, height, depth, position, rotations),
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, transform].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;

},{"../element":11,"../maths/vec3":67,"../utilities/array":91,"../utilities/transform":95}],19:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    arrayUtilities = require('../../utilities/array');

var flatten = arrayUtilities.flatten;

var ColouredCanvasElement = function (_CanvasElement) {
  _inherits(ColouredCanvasElement, _CanvasElement);

  function ColouredCanvasElement(transform, colour) {
    _classCallCheck(this, ColouredCanvasElement);

    var _this = _possibleConstructorReturn(this, (ColouredCanvasElement.__proto__ || Object.getPrototypeOf(ColouredCanvasElement)).call(this, transform));

    _this.colour = colour;
    return _this;
  }

  _createClass(ColouredCanvasElement, [{
    key: 'calculateVertexColourData',
    value: function calculateVertexColourData(vertexPositionData) {
      var vertexPositionDataLength = vertexPositionData.length,
          vertexColoursLength = vertexPositionDataLength / 3,
          ///
      vertexColour = this.colour,
          vertexColours = [];

      for (var index = 0; index < vertexColoursLength; index++) {
        vertexColours.push(vertexColour);
      }

      var vertexColourData = flatten(vertexColours); ///

      return vertexColourData;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      var vertexPositionData = this.calculateVertexPositionData(transforms),
          vertexIndexData = this.calculateVertexIndexData(vertexPositionData),
          vertexNormalData = this.calculateVertexNormalData(vertexPositionData),
          vertexColourData = this.calculateVertexColourData(vertexPositionData);

      colourRenderer.addVertexPositionData(vertexPositionData);
      colourRenderer.addVertexIndexData(vertexIndexData);
      colourRenderer.addVertexNormalData(vertexNormalData);
      colourRenderer.addVertexColourData(vertexColourData);

      _get(ColouredCanvasElement.prototype.__proto__ || Object.getPrototypeOf(ColouredCanvasElement.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var colour = properties.colour,
          colouredCanvasElement = CanvasElement.fromProperties(Class, properties, colour);


      return colouredCanvasElement;
    }
  }]);

  return ColouredCanvasElement;
}(CanvasElement);

module.exports = ColouredCanvasElement;

},{"../../element/canvas":18,"../../utilities/array":91}],20:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    arrayUtilities = require('../../utilities/array'),
    imageMapUtilities = require('../../utilities/imageMap');

var flatten = arrayUtilities.flatten,
    textureCoordinatesFromImageNames = imageMapUtilities.textureCoordinatesFromImageNames;

var TexturedCanvasElement = function (_CanvasElement) {
      _inherits(TexturedCanvasElement, _CanvasElement);

      function TexturedCanvasElement(transform, imageName) {
            _classCallCheck(this, TexturedCanvasElement);

            var _this = _possibleConstructorReturn(this, (TexturedCanvasElement.__proto__ || Object.getPrototypeOf(TexturedCanvasElement)).call(this, transform));

            _this.imageName = imageName;
            return _this;
      }

      _createClass(TexturedCanvasElement, [{
            key: 'calculateTextureCoordinateData',
            value: function calculateTextureCoordinateData(vertexPositionData) {
                  var vertexPositionDataLength = vertexPositionData.length,
                      imageNamesLength = vertexPositionDataLength / 12,
                      ///
                  imageNames = [];

                  for (var index = 0; index < imageNamesLength; index++) {
                        imageNames.push(this.imageName);
                  }

                  var textureCoordinates = textureCoordinatesFromImageNames(imageNames),
                      textureCoordinateData = flatten(textureCoordinates);

                  return textureCoordinateData;
            }
      }, {
            key: 'create',
            value: function create(colourRenderer, textureRenderer, transforms) {
                  var vertexPositionData = this.calculateVertexPositionData(transforms),
                      vertexIndexData = this.calculateVertexIndexData(vertexPositionData),
                      vertexNormalData = this.calculateVertexNormalData(vertexPositionData),
                      textureCoordinateData = this.calculateTextureCoordinateData(vertexPositionData);

                  textureRenderer.addVertexPositionData(vertexPositionData);
                  textureRenderer.addVertexIndexData(vertexIndexData);
                  textureRenderer.addVertexNormalData(vertexNormalData);
                  textureRenderer.addTextureCoordinateData(textureCoordinateData);

                  _get(TexturedCanvasElement.prototype.__proto__ || Object.getPrototypeOf(TexturedCanvasElement.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);
            }
      }], [{
            key: 'fromProperties',
            value: function fromProperties(Class, properties) {
                  var imageName = properties.imageName,
                      texturedCanvasElement = CanvasElement.fromProperties(Class, properties, imageName);


                  return texturedCanvasElement;
            }
      }]);

      return TexturedCanvasElement;
}(CanvasElement);

module.exports = TexturedCanvasElement;

},{"../../element/canvas":18,"../../utilities/array":91,"../../utilities/imageMap":94}],21:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    ColourRenderer = require('../renderer/colour'),
    TextureRenderer = require('../renderer/texture');

var Scene = function (_Element) {
  _inherits(Scene, _Element);

  function Scene(colourRenderer, textureRenderer, canvas) {
    _classCallCheck(this, Scene);

    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

    _this.colourRenderer = colourRenderer;
    _this.textureRenderer = textureRenderer;

    _this.canvas = canvas;
    return _this;
  }

  _createClass(Scene, [{
    key: 'getCanvas',
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: 'getColourRenderer',
    value: function getColourRenderer() {
      return this.colourRenderer;
    }
  }, {
    key: 'getTextureRenderer',
    value: function getTextureRenderer() {
      return this.textureRenderer;
    }
  }, {
    key: 'resize',
    value: function resize() {
      var clientWidth = this.canvas.getClientWidth(),
          clientHeight = this.canvas.getClientHeight(),
          width = clientWidth,
          ///
      height = clientHeight; ///

      this.canvas.resize(width, height);
    }
  }, {
    key: 'render',
    value: function render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var colourRendererProgram = this.colourRenderer.getProgram(),
          textureRendererProgram = this.textureRenderer.getProgram();

      this.canvas.clear();

      this.canvas.useProgram(colourRendererProgram);

      this.colourRenderer.bindBuffers(this.canvas);

      this.canvas.render(this.colourRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

      this.canvas.useProgram(textureRendererProgram);

      this.textureRenderer.bindBuffers(this.canvas);

      this.textureRenderer.activateTexture(this.canvas);

      this.canvas.render(this.textureRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }, {
    key: 'updateHandler',
    value: function updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      this.render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      this.assignContext();

      this.onUpdate(this.updateHandler.bind(this));

      window.onresize = function () {
        this.resize();

        this.forceUpdate();
      }.bind(this);

      this.resize();

      this.forceUpdate();
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var childElements = properties.childElements,
          imageMap = properties.imageMap,
          canvas = properties.canvas,
          colourRenderer = ColourRenderer.fromNothing(canvas),
          textureRenderer = TextureRenderer.fromNothing(canvas),
          scene = Element.fromProperties(Scene, properties, colourRenderer, textureRenderer, canvas),
          transforms = [];


      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer, transforms);
      });

      if (imageMap) {
        textureRenderer.createTexture(imageMap, canvas);
      }

      colourRenderer.createBuffers(canvas);
      textureRenderer.createBuffers(canvas);

      canvas.enableDepthTesting();
      canvas.enableDepthFunction();

      scene.initialise();

      return scene;
    }
  }]);

  return Scene;
}(Element);

module.exports = Scene;

},{"../element":11,"../renderer/colour":77,"../renderer/texture":90}],22:[function(require,module,exports){
'use strict';

module.exports = {
  shapes: require('./examples/shapes'),
  containerHouse: require('./examples/containerHouse')
};

},{"./examples/containerHouse":32,"./examples/shapes":62}],23:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    ColouredCanvasElement = require('../../../element/canvas/coloured');

var initialVertexPositionData = cuboid.initialVertexPositionData;

var ColouredCuboid = function (_ColouredCanvasElemen) {
  _inherits(ColouredCuboid, _ColouredCanvasElemen);

  function ColouredCuboid() {
    _classCallCheck(this, ColouredCuboid);

    return _possibleConstructorReturn(this, (ColouredCuboid.__proto__ || Object.getPrototypeOf(ColouredCuboid)).apply(this, arguments));
  }

  _createClass(ColouredCuboid, [{
    key: 'getInitialVertexPositionData',
    value: function getInitialVertexPositionData() {
      return initialVertexPositionData;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ColouredCanvasElement.fromProperties(ColouredCuboid, properties);
    }
  }]);

  return ColouredCuboid;
}(ColouredCanvasElement);

module.exports = ColouredCuboid;

},{"../../../element/canvas/coloured":19,"../cuboid":26}],24:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cylinder = require('../cylinder'),
    ColouredCanvasElement = require('../../../element/canvas/coloured');

var initialVertexPositionData = cylinder.initialVertexPositionData;

var ColouredCylinder = function (_ColouredCanvasElemen) {
  _inherits(ColouredCylinder, _ColouredCanvasElemen);

  function ColouredCylinder() {
    _classCallCheck(this, ColouredCylinder);

    return _possibleConstructorReturn(this, (ColouredCylinder.__proto__ || Object.getPrototypeOf(ColouredCylinder)).apply(this, arguments));
  }

  _createClass(ColouredCylinder, [{
    key: 'getInitialVertexPositionData',
    value: function getInitialVertexPositionData() {
      return initialVertexPositionData;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ColouredCanvasElement.fromProperties(ColouredCylinder, properties);
    }
  }]);

  return ColouredCylinder;
}(ColouredCanvasElement);

module.exports = ColouredCylinder;

},{"../../../element/canvas/coloured":19,"../cylinder":27}],25:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var plane = require('../plane'),
    ColouredCanvasElement = require('../../../element/canvas/coloured');

var initialVertexPositionData = plane.initialVertexPositionData;

var ColouredPlane = function (_ColouredCanvasElemen) {
  _inherits(ColouredPlane, _ColouredCanvasElemen);

  function ColouredPlane() {
    _classCallCheck(this, ColouredPlane);

    return _possibleConstructorReturn(this, (ColouredPlane.__proto__ || Object.getPrototypeOf(ColouredPlane)).apply(this, arguments));
  }

  _createClass(ColouredPlane, [{
    key: 'getInitialVertexPositionData',
    value: function getInitialVertexPositionData() {
      return initialVertexPositionData;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ColouredCanvasElement.fromProperties(ColouredPlane, properties);
    }
  }]);

  return ColouredPlane;
}(ColouredCanvasElement);

module.exports = ColouredPlane;

},{"../../../element/canvas/coloured":19,"../plane":28}],26:[function(require,module,exports){
'use strict';

var initialVertexPositionData = [0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0];

module.exports = {
  initialVertexPositionData: initialVertexPositionData
};

},{}],27:[function(require,module,exports){
'use strict';

var constants = require('../../constants'),
    arrayUtilities = require('../../utilities/array');

var CYLINDER_FACES = constants.CYLINDER_FACES,
    flatten = arrayUtilities.flatten;


var initialVertexPositionData = calculateInitialVertexPositionData();

module.exports = {
      initialVertexPositionData: initialVertexPositionData
};

function calculateInitialVertexPositionData() {
      var initialVertexPositionVectors = [],
          faces = CYLINDER_FACES,
          step = 2 * Math.PI / faces;

      for (var count = 0; count < faces; count++) {
            var angle = step * count,
                firstX = (Math.cos(angle) + 1) / 2,
                firstY = (Math.sin(angle) + 1) / 2,
                secondX = (Math.cos(angle + step) + 1) / 2,
                secondY = (Math.sin(angle + step) + 1) / 2,
                firstZ = 0,
                secondZ = 1;

            initialVertexPositionVectors.push([firstX, firstY, firstZ]);
            initialVertexPositionVectors.push([secondX, secondY, firstZ]);
            initialVertexPositionVectors.push([secondX, secondY, secondZ]);
            initialVertexPositionVectors.push([firstX, firstY, secondZ]);
      }

      var initialVertexPositionData = flatten(initialVertexPositionVectors); ///

      return initialVertexPositionData;
}

},{"../../constants":10,"../../utilities/array":91}],28:[function(require,module,exports){
'use strict';

var initialVertexPositionData = [0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0];

module.exports = {
  initialVertexPositionData: initialVertexPositionData
};

},{}],29:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    TexturedCanvasElement = require('../../../element/canvas/textured');

var initialVertexPositionData = cuboid.initialVertexPositionData;

var TexturedCuboid = function (_TexturedCanvasElemen) {
  _inherits(TexturedCuboid, _TexturedCanvasElemen);

  function TexturedCuboid() {
    _classCallCheck(this, TexturedCuboid);

    return _possibleConstructorReturn(this, (TexturedCuboid.__proto__ || Object.getPrototypeOf(TexturedCuboid)).apply(this, arguments));
  }

  _createClass(TexturedCuboid, [{
    key: 'getInitialVertexPositionData',
    value: function getInitialVertexPositionData() {
      return initialVertexPositionData;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return TexturedCanvasElement.fromProperties(TexturedCuboid, properties);
    }
  }]);

  return TexturedCuboid;
}(TexturedCanvasElement);

module.exports = TexturedCuboid;

},{"../../../element/canvas/textured":20,"../cuboid":26}],30:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cylinder = require('../cylinder'),
    TexturedCanvasElement = require('../../../element/canvas/textured');

var initialVertexPositionData = cylinder.initialVertexPositionData;

var TexturedCylinder = function (_TexturedCanvasElemen) {
  _inherits(TexturedCylinder, _TexturedCanvasElemen);

  function TexturedCylinder() {
    _classCallCheck(this, TexturedCylinder);

    return _possibleConstructorReturn(this, (TexturedCylinder.__proto__ || Object.getPrototypeOf(TexturedCylinder)).apply(this, arguments));
  }

  _createClass(TexturedCylinder, [{
    key: 'getInitialVertexPositionData',
    value: function getInitialVertexPositionData() {
      return initialVertexPositionData;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return TexturedCanvasElement.fromProperties(TexturedCylinder, properties);
    }
  }]);

  return TexturedCylinder;
}(TexturedCanvasElement);

module.exports = TexturedCylinder;

},{"../../../element/canvas/textured":20,"../cylinder":27}],31:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var plane = require('../plane'),
    TexturedCanvasElement = require('../../../element/canvas/textured');

var initialVertexPositionData = plane.initialVertexPositionData;

var TexturedPlane = function (_TexturedCanvasElemen) {
  _inherits(TexturedPlane, _TexturedCanvasElemen);

  function TexturedPlane() {
    _classCallCheck(this, TexturedPlane);

    return _possibleConstructorReturn(this, (TexturedPlane.__proto__ || Object.getPrototypeOf(TexturedPlane)).apply(this, arguments));
  }

  _createClass(TexturedPlane, [{
    key: 'getInitialVertexPositionData',
    value: function getInitialVertexPositionData() {
      return initialVertexPositionData;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return TexturedCanvasElement.fromProperties(TexturedPlane, properties);
    }
  }]);

  return TexturedPlane;
}(TexturedCanvasElement);

module.exports = TexturedPlane;

},{"../../../element/canvas/textured":20,"../plane":28}],32:[function(require,module,exports){
'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
    Frame = require('./containerHouse/frame'),
    RoofGarden = require('./containerHouse/roofGarden'),
    FirstFloor = require('./containerHouse/floor/first'),
    ThirdFloor = require('./containerHouse/floor/third'),
    SecondFloor = require('./containerHouse/floor/second'),
    Foundations = require('./containerHouse/foundations'),
    MainBalcony = require('./containerHouse/balcony/main'),
    LowerBalcony = require('./containerHouse/balcony/lower'),
    BedroomBalcony = require('./containerHouse/balcony/bedroom'),
    imageMapUtilities = require('../utilities/imageMap');

var preloadImageMap = imageMapUtilities.preloadImageMap;


var containerHouse = function containerHouse() {

  var canvas = new Canvas();

  preloadImageMap(function (imageMap) {
    return React.createElement(
      Scene,
      { imageMap: imageMap, canvas: canvas },
      React.createElement(Camera, { initialDistance: 150, initialOffset: [-18, 0, -16], canvas: canvas }),
      React.createElement(Foundations, null),
      React.createElement(FirstFloor, null),
      React.createElement(SecondFloor, null),
      React.createElement(ThirdFloor, null),
      React.createElement(RoofGarden, null),
      React.createElement(MainBalcony, null),
      React.createElement(LowerBalcony, null),
      React.createElement(BedroomBalcony, null),
      React.createElement(Frame, null)
    );
  });
};

module.exports = containerHouse;

},{"../canvas":2,"../element/camera":12,"../element/scene":21,"../jiggle":64,"../utilities/imageMap":94,"./containerHouse/balcony/bedroom":33,"./containerHouse/balcony/lower":34,"./containerHouse/balcony/main":35,"./containerHouse/floor/first":54,"./containerHouse/floor/second":55,"./containerHouse/floor/third":56,"./containerHouse/foundations":57,"./containerHouse/frame":59,"./containerHouse/roofGarden":61}],33:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    BalconySection = require('../balcony/section'),
    Railing = require('../balcony/railing');

var thickness = Railing.thickness;

var BedroomBalcony = function (_CanvasElement) {
  _inherits(BedroomBalcony, _CanvasElement);

  function BedroomBalcony() {
    _classCallCheck(this, BedroomBalcony);

    return _possibleConstructorReturn(this, (BedroomBalcony.__proto__ || Object.getPrototypeOf(BedroomBalcony)).apply(this, arguments));
  }

  _createClass(BedroomBalcony, [{
    key: 'childElements',
    value: function childElements() {
      return [React.createElement(BalconySection, { position: [0, 19, 0] }), React.createElement(BalconySection, { position: [4, 19, 0] }), React.createElement(Railing, { position: [0, 19, 0], length: 8 }), React.createElement(Railing, { position: [thickness, 19, 0], length: 16, rotations: [0, -90, 0] })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(BedroomBalcony, properties);
    }
  }]);

  return BedroomBalcony;
}(CanvasElement);

module.exports = BedroomBalcony;

},{"../../../element/canvas":18,"../balcony/railing":36,"../balcony/section":40}],34:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    Railing = require('../balcony/railing');

var thickness = Railing.thickness;

var LowerBalcony = function (_CanvasElement) {
  _inherits(LowerBalcony, _CanvasElement);

  function LowerBalcony() {
    _classCallCheck(this, LowerBalcony);

    return _possibleConstructorReturn(this, (LowerBalcony.__proto__ || Object.getPrototypeOf(LowerBalcony)).apply(this, arguments));
  }

  _createClass(LowerBalcony, [{
    key: 'childElements',
    value: function childElements() {
      return [React.createElement(Railing, { position: [40, 9.5, 16], length: 8 }), React.createElement(Railing, { position: [40, 9.5, 32 - thickness], length: 8 }), React.createElement(Railing, { position: [48, 9.5, 16], rotations: [0, -90, 0], length: 16 })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(LowerBalcony, properties);
    }
  }]);

  return LowerBalcony;
}(CanvasElement);

module.exports = LowerBalcony;

},{"../../../element/canvas":18,"../balcony/railing":36}],35:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    BalconySection = require('../balcony/section'),
    Railing = require('../balcony/railing');

var thickness = Railing.thickness;

var MainBalcony = function (_CanvasElement) {
  _inherits(MainBalcony, _CanvasElement);

  function MainBalcony() {
    _classCallCheck(this, MainBalcony);

    return _possibleConstructorReturn(this, (MainBalcony.__proto__ || Object.getPrototypeOf(MainBalcony)).apply(this, arguments));
  }

  _createClass(MainBalcony, [{
    key: 'childElements',
    value: function childElements() {
      return [React.createElement(BalconySection, { position: [40, 19, 0] }), React.createElement(BalconySection, { position: [44, 19, 0] }), React.createElement(BalconySection, { position: [36, 19, 0] }), React.createElement(BalconySection, { position: [32, 19, 0] }), React.createElement(BalconySection, { position: [28, 19, 0] }), React.createElement(BalconySection, { position: [40, 19, 16] }), React.createElement(BalconySection, { position: [44, 19, 16] }), React.createElement(Railing, { position: [28, 19, 0], length: 20 }), React.createElement(Railing, { position: [20, 19, 32 - thickness], length: 28 }), React.createElement(Railing, { position: [48, 19, 0], rotations: [0, -90, 0], length: 32 })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(MainBalcony, properties);
    }
  }]);

  return MainBalcony;
}(CanvasElement);

module.exports = MainBalcony;

},{"../../../element/canvas":18,"../balcony/railing":36,"../balcony/section":40}],36:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopRail = require('./railing/topRail'),
    Uprights = require('./railing/uprights'),
    CanvasElement = require('../../../element/canvas');

var thickness = TopRail.thickness,
    overallHeight = 3;

var Railing = function (_CanvasElement) {
  _inherits(Railing, _CanvasElement);

  function Railing() {
    _classCallCheck(this, Railing);

    return _possibleConstructorReturn(this, (Railing.__proto__ || Object.getPrototypeOf(Railing)).apply(this, arguments));
  }

  _createClass(Railing, [{
    key: 'childElements',
    value: function childElements(properties) {
      var length = properties.length;


      return [React.createElement(TopRail, { overallHeight: overallHeight, length: length }), React.createElement(Uprights, { overallHeight: overallHeight, length: length, thickness: thickness })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Railing, properties);
    }
  }]);

  return Railing;
}(CanvasElement);

Object.assign(Railing, {
  thickness: thickness
});

module.exports = Railing;

},{"../../../element/canvas":18,"./railing/topRail":37,"./railing/uprights":39}],37:[function(require,module,exports){
'use strict';

var ColouredCuboid = require('../../../common/coloured/cuboid');

var height = 0.1,
    thickness = 0.4,
    colour = [0.5, 0.5, 0.5, 1];

var TopRail = function TopRail(properties) {
  var length = properties.length,
      overallHeight = properties.overallHeight,
      width = length,
      depth = thickness,
      position = [0, overallHeight, 0];


  return React.createElement(ColouredCuboid, { colour: colour, width: width, height: height, depth: depth, position: position });
};

Object.assign(TopRail, {
  thickness: thickness
});

module.exports = TopRail;

},{"../../../common/coloured/cuboid":23}],38:[function(require,module,exports){
'use strict';

var ColouredCylinder = require('../../../common/coloured/cylinder');

var diameter = 0.125,
    radius = diameter / 2,
    colour = [0.5, 0.5, 0.5, 1];

var Upright = function Upright(properties) {
  var position = properties.position,
      overallHeight = properties.overallHeight,
      width = diameter,
      height = diameter,
      depth = overallHeight; ///

  return React.createElement(ColouredCylinder, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: [-90, 0, 0] });
};

Object.assign(Upright, {
  radius: radius
});

module.exports = Upright;

},{"../../../common/coloured/cylinder":24}],39:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Upright = require('./upright'),
    CanvasElement = require('../../../../element/canvas');

var radius = Upright.radius;

var Uprights = function (_CanvasElement) {
  _inherits(Uprights, _CanvasElement);

  function Uprights() {
    _classCallCheck(this, Uprights);

    return _possibleConstructorReturn(this, (Uprights.__proto__ || Object.getPrototypeOf(Uprights)).apply(this, arguments));
  }

  _createClass(Uprights, [{
    key: 'childElements',
    value: function childElements(properties) {
      var overallHeight = properties.overallHeight,
          length = properties.length,
          thickness = properties.thickness,
          elements = [],
          step = 0.5,
          count = length / step;


      for (var index = 1; index < count; index++) {
        var position = [step * index - radius, 0, thickness / 2 + radius, 1];

        elements.push(React.createElement(Upright, { position: position, overallHeight: overallHeight }));
      }

      return elements;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Uprights, properties);
    }
  }]);

  return Uprights;
}(CanvasElement);

module.exports = Uprights;

},{"../../../../element/canvas":18,"./upright":38}],40:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('./section/edge'),
    OpenMesh = require('./section/openMesh'),
    LongEdge = require('./section/edge/long'),
    ShortEdge = require('./section/edge/short'),
    CanvasElement = require('../../../element/canvas');

var height = Edge.height,
    thickness = Edge.thickness,
    width = 4,
    depth = 16;

var BalconySection = function (_CanvasElement) {
  _inherits(BalconySection, _CanvasElement);

  function BalconySection() {
    _classCallCheck(this, BalconySection);

    return _possibleConstructorReturn(this, (BalconySection.__proto__ || Object.getPrototypeOf(BalconySection)).apply(this, arguments));
  }

  _createClass(BalconySection, [{
    key: 'childElements',
    value: function childElements(properties) {
      return [React.createElement(LongEdge, { position: [0, -height, 0], depth: depth }), React.createElement(LongEdge, { position: [width - thickness, -height, 0], depth: depth }), React.createElement(ShortEdge, { position: [0, -height, 0], width: width }), React.createElement(ShortEdge, { position: [0, -height, 16 - thickness], width: width }), React.createElement(OpenMesh, { position: [thickness, 0, thickness], overallWidth: width - 2 * thickness, overallDepth: depth - 2 * thickness })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(BalconySection, properties);
    }
  }]);

  return BalconySection;
}(CanvasElement);

module.exports = BalconySection;

},{"../../../element/canvas":18,"./section/edge":41,"./section/edge/long":42,"./section/edge/short":43,"./section/openMesh":44}],41:[function(require,module,exports){
'use strict';

var TexturedCuboid = require('../../../common/textured/cuboid');

var height = 0.25,
    thickness = 0.1;

var Edge = function Edge(properties) {
  var position = properties.position,
      width = properties.width,
      depth = properties.depth;


  return React.createElement(TexturedCuboid, { imageName: 'rustySteel.jpg', position: position, width: width, depth: depth, height: height });
};

Object.assign(Edge, {
  height: height,
  thickness: thickness
});

module.exports = Edge;

},{"../../../common/textured/cuboid":29}],42:[function(require,module,exports){
'use strict';

var Edge = require('../edge');

var thickness = Edge.thickness;


var LongEdge = function LongEdge(properties) {
  var position = properties.position,
      depth = properties.depth,
      width = thickness; ///

  return React.createElement(Edge, { position: position, width: width, depth: depth });
};

module.exports = LongEdge;

},{"../edge":41}],43:[function(require,module,exports){
'use strict';

var Edge = require('../edge');

var thickness = Edge.thickness;


var ShortEdge = function ShortEdge(properties) {
  var position = properties.position,
      width = properties.width,
      depth = thickness; ///

  return React.createElement(Edge, { position: position, width: width, depth: depth });
};

module.exports = ShortEdge;

},{"../edge":41}],44:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../../element/canvas'),
    ColouredCuboid = require('../../../common/coloured/cuboid'),
    ColouredCylinder = require('../../../common/coloured/cylinder');

var overallHeight = 0.25,
    overallThickness = 0.025,
    widthwiseCount = 10,
    depthwiseCount = 5,
    colour = [0.6, 0.6, 0.6, 10];

var OpenMesh = function (_CanvasElement) {
  _inherits(OpenMesh, _CanvasElement);

  function OpenMesh() {
    _classCallCheck(this, OpenMesh);

    return _possibleConstructorReturn(this, (OpenMesh.__proto__ || Object.getPrototypeOf(OpenMesh)).apply(this, arguments));
  }

  _createClass(OpenMesh, [{
    key: 'childElements',
    value: function childElements(properties) {
      var overallWidth = properties.overallWidth,
          overallDepth = properties.overallDepth,
          elements = [];


      for (var index = 1; index < widthwiseCount; index++) {
        var step = overallWidth / widthwiseCount,
            width = overallThickness,
            ///
        height = overallHeight,
            depth = overallDepth;

        elements.push(React.createElement(ColouredCuboid, { colour: colour, position: [step * index, -height, 0], width: width, height: height, depth: depth }));
      }

      for (var _index = 1; _index < depthwiseCount; _index++) {
        var _step = overallDepth / depthwiseCount,
            diameter = overallHeight / 2,
            ///
        _width = diameter,
            ///
        _height = diameter,
            ///
        _depth = overallWidth; ///

        elements.push(React.createElement(ColouredCylinder, { colour: colour, position: [0, -3 * diameter / 2, _step * _index], width: _width, height: _height, depth: _depth, rotations: [0, 90, 0] }));
      }

      return elements;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(OpenMesh, properties);
    }
  }]);

  return OpenMesh;
}(CanvasElement);

module.exports = OpenMesh;

},{"../../../../element/canvas":18,"../../../common/coloured/cuboid":23,"../../../common/coloured/cylinder":24}],45:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    Roof = require('./container/roof'),
    BackWall = require('./container/backWall'),
    Underside = require('./container/underside'),
    FrontWall = require('./container/frontWall'),
    SideWallA = require('./container/sideWallA'),
    SideWallB = require('./container/sideWallB');

var overallHeight = 9.5,
    overallWidth = 8,
    colour = [1, 1, 1, 1];

var Container = function (_CanvasElement) {
  _inherits(Container, _CanvasElement);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'childElements',
    value: function childElements(properties) {
      var length = properties.length;


      return [React.createElement(Roof, { length: length, overallWidth: overallWidth, overallHeight: overallHeight, colour: colour }), React.createElement(Underside, { length: length, overallWidth: overallWidth, overallHeight: overallHeight, colour: colour }), React.createElement(FrontWall, { length: length, overallWidth: overallWidth, overallHeight: overallHeight, colour: colour }), React.createElement(BackWall, { length: length, overallWidth: overallWidth, overallHeight: overallHeight, colour: colour }), React.createElement(SideWallA, { length: length, overallWidth: overallWidth, overallHeight: overallHeight, colour: colour }), React.createElement(SideWallB, { length: length, overallWidth: overallWidth, overallHeight: overallHeight, colour: colour })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Container, properties);
    }
  }]);

  return Container;
}(CanvasElement);

module.exports = Container;

},{"../../element/canvas":18,"./container/backWall":46,"./container/frontWall":48,"./container/roof":49,"./container/sideWallA":50,"./container/sideWallB":51,"./container/underside":53}],46:[function(require,module,exports){
'use strict';

var ColouredPlane = require('../../common/coloured/plane');

var BackWall = function BackWall(properties) {
  var length = properties.length,
      overallWidth = properties.overallWidth,
      overallHeight = properties.overallHeight,
      colour = properties.colour,
      width = overallWidth,
      height = overallHeight,
      depth = 0,
      position = [overallWidth, 0, 0],
      rotations = [0, -180, 0];


  return React.createElement(ColouredPlane, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations });
};

module.exports = BackWall;

},{"../../common/coloured/plane":25}],47:[function(require,module,exports){
'use strict';

var Container = require('../container');

var FortyFootContainer = function FortyFootContainer(properties) {
  var position = properties.position,
      rotations = properties.rotations;


  return React.createElement(Container, { position: position, rotations: rotations, length: 40 });
};

module.exports = FortyFootContainer;

},{"../container":45}],48:[function(require,module,exports){
'use strict';

var ColouredPlane = require('../../common/coloured/plane');

var FrontWall = function FrontWall(properties) {
  var length = properties.length,
      overallWidth = properties.overallWidth,
      overallHeight = properties.overallHeight,
      colour = properties.colour,
      width = overallWidth,
      height = overallHeight,
      depth = 0,
      position = [0, 0, length],
      rotations = [0, 0, 0];


  return React.createElement(ColouredPlane, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations });
};

module.exports = FrontWall;

},{"../../common/coloured/plane":25}],49:[function(require,module,exports){
'use strict';

var ColouredPlane = require('../../common/coloured/plane');

var Roof = function Roof(properties) {
  var length = properties.length,
      overallWidth = properties.overallWidth,
      overallHeight = properties.overallHeight,
      colour = properties.colour,
      width = overallWidth,
      height = length,
      depth = overallHeight,
      position = [0, overallHeight, length],
      rotations = [-90, 0, 0];

  ;

  return React.createElement(ColouredPlane, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations });
};

module.exports = Roof;

},{"../../common/coloured/plane":25}],50:[function(require,module,exports){
'use strict';

var ColouredPlane = require('../../common/coloured/plane');

var SideWallA = function SideWallA(properties) {
  var length = properties.length,
      overallWidth = properties.overallWidth,
      overallHeight = properties.overallHeight,
      colour = properties.colour,
      width = length,
      height = overallHeight,
      depth = 0,
      position = [0, 0, 0],
      rotations = [0, -90, 0];


  return React.createElement(ColouredPlane, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations });
};

module.exports = SideWallA;

},{"../../common/coloured/plane":25}],51:[function(require,module,exports){
'use strict';

var ColouredPlane = require('../../common/coloured/plane');

var SideWallB = function SideWallB(properties) {
  var length = properties.length,
      overallWidth = properties.overallWidth,
      overallHeight = properties.overallHeight,
      colour = properties.colour,
      width = length,
      height = overallHeight,
      depth = 0,
      position = [overallWidth, 0, length],
      rotations = [0, +90, 0];


  return React.createElement(ColouredPlane, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations });
};

module.exports = SideWallB;

},{"../../common/coloured/plane":25}],52:[function(require,module,exports){
'use strict';

var Container = require('../container');

var TwentyFootContainer = function TwentyFootContainer(properties) {
  var position = properties.position,
      rotations = properties.rotations;


  return React.createElement(Container, { position: position, rotations: rotations, length: 20 });
};

module.exports = TwentyFootContainer;

},{"../container":45}],53:[function(require,module,exports){
'use strict';

var ColouredPlane = require('../../common/coloured/plane');

var Underside = function Underside(properties) {
  var length = properties.length,
      overallWidth = properties.overallWidth,
      overallHeight = properties.overallHeight,
      colour = properties.colour,
      width = overallWidth,
      height = length,
      depth = 0,
      position = [0, 0, 0],
      rotations = [+90, 0, 0];


  return React.createElement(ColouredPlane, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations });
};

module.exports = Underside;

},{"../../common/coloured/plane":25}],54:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    FortyFootContainer = require('../container/fortyFoot'),
    TwentyFootContainer = require('../container/twentyFoot');

var FirstFloor = function (_CanvasElement) {
  _inherits(FirstFloor, _CanvasElement);

  function FirstFloor() {
    _classCallCheck(this, FirstFloor);

    return _possibleConstructorReturn(this, (FirstFloor.__proto__ || Object.getPrototypeOf(FirstFloor)).apply(this, arguments));
  }

  _createClass(FirstFloor, [{
    key: 'childElements',
    value: function childElements() {
      return [React.createElement(FortyFootContainer, { position: [8, 0, 32], rotations: [0, 90, 0] }), React.createElement(FortyFootContainer, { position: [8, 0, 24], rotations: [0, 90, 0] }), React.createElement(TwentyFootContainer, { position: [8, 0, 16], rotations: [0, 90, 0] }), React.createElement(TwentyFootContainer, { position: [8, 0, 8], rotations: [0, 90, 0] })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(FirstFloor, properties);
    }
  }]);

  return FirstFloor;
}(CanvasElement);

module.exports = FirstFloor;

},{"../../../element/canvas":18,"../container/fortyFoot":47,"../container/twentyFoot":52}],55:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    FortyFootContainer = require('../container/fortyFoot'),
    TwentyFootContainer = require('../container/twentyFoot');

var SecondFloor = function (_CanvasElement) {
  _inherits(SecondFloor, _CanvasElement);

  function SecondFloor() {
    _classCallCheck(this, SecondFloor);

    return _possibleConstructorReturn(this, (SecondFloor.__proto__ || Object.getPrototypeOf(SecondFloor)).apply(this, arguments));
  }

  _createClass(SecondFloor, [{
    key: 'childElements',
    value: function childElements() {
      return [React.createElement(FortyFootContainer, { position: [0, 9.5, 32], rotations: [0, 90, 0] }), React.createElement(FortyFootContainer, { position: [0, 9.5, 24], rotations: [0, 90, 0] }), React.createElement(TwentyFootContainer, { position: [8, 9.5, 16], rotations: [0, 90, 0] }), React.createElement(TwentyFootContainer, { position: [8, 9.5, 8], rotations: [0, 90, 0] })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(SecondFloor, properties);
    }
  }]);

  return SecondFloor;
}(CanvasElement);

module.exports = SecondFloor;

},{"../../../element/canvas":18,"../container/fortyFoot":47,"../container/twentyFoot":52}],56:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    TwentyFootContainer = require('../container/twentyFoot');

var ThirdFloor = function (_CanvasElement) {
  _inherits(ThirdFloor, _CanvasElement);

  function ThirdFloor() {
    _classCallCheck(this, ThirdFloor);

    return _possibleConstructorReturn(this, (ThirdFloor.__proto__ || Object.getPrototypeOf(ThirdFloor)).apply(this, arguments));
  }

  _createClass(ThirdFloor, [{
    key: 'childElements',
    value: function childElements() {
      return [React.createElement(TwentyFootContainer, { position: [0, 19, 32], rotations: [0, 90, 0] }), React.createElement(TwentyFootContainer, { position: [0, 19, 24], rotations: [0, 90, 0] }), React.createElement(TwentyFootContainer, { position: [8, 19, 16], rotations: [0, 90, 0] }), React.createElement(TwentyFootContainer, { position: [8, 19, 8], rotations: [0, 90, 0] })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(ThirdFloor, properties);
    }
  }]);

  return ThirdFloor;
}(CanvasElement);

module.exports = ThirdFloor;

},{"../../../element/canvas":18,"../container/twentyFoot":52}],57:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    ConcreteSlab = require('./foundations/concreteSlab');

var Foundations = function (_CanvasElement) {
  _inherits(Foundations, _CanvasElement);

  function Foundations() {
    _classCallCheck(this, Foundations);

    return _possibleConstructorReturn(this, (Foundations.__proto__ || Object.getPrototypeOf(Foundations)).apply(this, arguments));
  }

  _createClass(Foundations, [{
    key: 'getChildElements',
    value: function getChildElements() {
      return [React.createElement(ConcreteSlab, { position: [-0.5, -1, -0.5], width: 12.5, height: 1, depth: 33 }), React.createElement(ConcreteSlab, { position: [24, -1, -0.5], width: 24.4, height: 1, depth: 33 })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Foundations, properties);
    }
  }]);

  return Foundations;
}(CanvasElement);

module.exports = Foundations;

},{"../../element/canvas":18,"./foundations/concreteSlab":58}],58:[function(require,module,exports){
'use strict';

var TexturedCuboid = require('../../common/textured/cuboid');

var ConcreteSlab = function ConcreteSlab(properties) {
  var position = properties.position,
      width = properties.width,
      height = properties.height,
      depth = properties.depth;


  return React.createElement(TexturedCuboid, { imageName: 'concrete.jpg', position: position, width: width, height: height, depth: depth });
};

module.exports = ConcreteSlab;

},{"../../common/textured/cuboid":29}],59:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SteelSection = require('./frame/steelSection'),
    CanvasElement = require('../../element/canvas');

var Frame = function (_CanvasElement) {
  _inherits(Frame, _CanvasElement);

  function Frame() {
    _classCallCheck(this, Frame);

    return _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).apply(this, arguments));
  }

  _createClass(Frame, [{
    key: 'childElements',
    value: function childElements() {
      var width = 48,
          height = 29,
          depth = 32;

      return [React.createElement(SteelSection, { position: [-0.5, 0, -0.5], width: 1, height: height, depth: 1 }), React.createElement(SteelSection, { position: [-0.5, 0, depth - 0.5], width: 1, height: height, depth: 1 }), React.createElement(SteelSection, { position: [width - 0.5, 0, depth - 0.5], width: 1, height: height, depth: 1 }), React.createElement(SteelSection, { position: [width - 0.5, 0, -0.5], width: 1, height: height, depth: 1 }), React.createElement(SteelSection, { position: [-0.5, height - 1, -0.5], width: 1, height: 1, depth: depth }), React.createElement(SteelSection, { position: [width - 0.5, height - 1, -0.5], width: 1, height: 1, depth: depth }), React.createElement(SteelSection, { position: [-0.5, height - 1, -0.5], width: width, height: 1, depth: 1 }), React.createElement(SteelSection, { position: [-0.5, height - 1, depth - 0.5], width: width, height: 1, depth: 1 })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Frame, properties);
    }
  }]);

  return Frame;
}(CanvasElement);

module.exports = Frame;

},{"../../element/canvas":18,"./frame/steelSection":60}],60:[function(require,module,exports){
'use strict';

var TexturedCuboid = require('../../common/textured/cuboid');

var SteelSection = function SteelSection(properties) {
  var position = properties.position,
      width = properties.width,
      height = properties.height,
      depth = properties.depth;


  return React.createElement(TexturedCuboid, { imageName: 'rustySteel.jpg', position: position, width: width, height: height, depth: depth });
};

module.exports = SteelSection;

},{"../../common/textured/cuboid":29}],61:[function(require,module,exports){
'use strict';

var TexturedPlane = require('../common/textured/plane');

var RoofGarden = function RoofGarden(properties) {
  return React.createElement(TexturedPlane, { width: 20, height: 16, depth: 0, position: [20, 19.01, 32], rotations: [-90, 0, 0], imageName: 'gravel.jpg' });
};

module.exports = RoofGarden;

},{"../common/textured/plane":31}],62:[function(require,module,exports){
'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
    CompoundedShapes = require('./shapes/compounded'),
    TexturedPlane = require('./common/textured/plane'),
    TexturedCuboid = require('./common/textured/cuboid'),
    ColouredCylinder = require('./common/coloured/cylinder'),
    TexturedCylinder = require('./common/textured/cylinder'),
    imageMapUtilities = require('../utilities/imageMap');

var preloadImageMap = imageMapUtilities.preloadImageMap;


var shapes = function shapes() {

  var canvas = new Canvas();

  preloadImageMap(function (imageMap) {
    return React.createElement(
      Scene,
      { imageMap: imageMap, canvas: canvas },
      React.createElement(Camera, { initialDistance: 10, initialOffset: [0, 0, 0], canvas: canvas }),
      React.createElement(TexturedCuboid, { width: 1, height: 1, depth: 1, position: [0, 2, 0], imageName: 'bricks.jpg' }),
      React.createElement(TexturedPlane, { width: 1, height: 1, position: [-1, -1, -1], imageName: 'gravel.jpg' }),
      React.createElement(ColouredCylinder, { width: 1, height: 1, depth: 1, position: [0, -1, 1], rotations: [0, 0, 0], colour: [1, 0, 0, 1] }),
      React.createElement(TexturedCylinder, { width: 1, height: 1, depth: 1, position: [0, 1, -1], rotations: [0, 90, 90], imageName: 'grass.jpg' }),
      React.createElement(CompoundedShapes, { width: 0.1, height: 0.1, depth: 0.1, rotations: [45, 45, 45], position: [0, 0, 10] })
    );
  });
};

module.exports = shapes;

},{"../canvas":2,"../element/camera":12,"../element/scene":21,"../jiggle":64,"../utilities/imageMap":94,"./common/coloured/cylinder":24,"./common/textured/cuboid":29,"./common/textured/cylinder":30,"./common/textured/plane":31,"./shapes/compounded":63}],63:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    ColouredCylinder = require('../common/coloured/cylinder'),
    TexturedCylinder = require('../common/textured/cylinder');

var CompoundedShapes = function (_CanvasElement) {
  _inherits(CompoundedShapes, _CanvasElement);

  function CompoundedShapes() {
    _classCallCheck(this, CompoundedShapes);

    return _possibleConstructorReturn(this, (CompoundedShapes.__proto__ || Object.getPrototypeOf(CompoundedShapes)).apply(this, arguments));
  }

  _createClass(CompoundedShapes, [{
    key: 'childElements',
    value: function childElements() {
      return [React.createElement(ColouredCylinder, { width: 1, height: 1, depth: 1, position: [3, -1, 1], rotations: [0, 0, 0], colour: [1, 0, 1, 1] }), React.createElement(TexturedCylinder, { width: 1, height: 1, depth: 1, position: [0, 1, -3], rotations: [0, 90, 90], imageName: 'gravel.jpg' })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(CompoundedShapes, properties);
    }
  }]);

  return CompoundedShapes;
}(CanvasElement);

module.exports = CompoundedShapes;

},{"../../element/canvas":18,"../common/coloured/cylinder":24,"../common/textured/cylinder":30}],64:[function(require,module,exports){
'use strict';

var React = require('./react');

Object.defineProperty(window, 'React', {
  get: function get() {
    return React;
  }
});

module.exports = React;

},{"./react":75}],65:[function(require,module,exports){
'use strict';

var mat4 = require('gl-mat4');

module.exports = mat4;

},{"gl-mat4":106}],66:[function(require,module,exports){
'use strict';

var vec2 = require('gl-vec2');

function add(vecA, vecB) {
  var out = [];

  vec2.add(out, vecA, vecB);

  return out;
}

function subtract(vecA, vecB) {
  var out = [];

  vec2.subtract(out, vecA, vecB);

  return out;
}

function scale(vecA, scalar) {
  var out = [];

  vec2.scale(out, vecA, scalar);

  return out;
}

module.exports = {
  add: add,
  subtract: subtract,
  scale: scale
};

},{"gl-vec2":131}],67:[function(require,module,exports){
'use strict';

var vec3 = require('gl-vec3');

function add(vecA, vecB) {
  var out = [];

  vec3.add(out, vecA, vecB);

  return out;
}

function subtract(vecA, vecB) {
  var out = [];

  vec3.subtract(out, vecA, vecB);

  return out;
}

function cross(vecA, vecB) {
  var out = [];

  vec3.cross(out, vecA, vecB);

  return out;
}

function normalise(vec) {
  var out = [];

  vec3.normalize(out, vec);

  return out;
}

module.exports = {
  add: add,
  subtract: subtract,
  cross: cross,
  normalise: normalise
};

},{"gl-vec3":161}],68:[function(require,module,exports){
'use strict';

var vec4 = require('gl-vec4');

function transform(vec, mat4) {
  var out = [];

  vec4.transformMat4(out, vec, mat4);

  return out;
}

module.exports = {
  transform: transform
};

},{"gl-vec4":191}],69:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Matrix = function () {
  function Matrix(mat4) {
    _classCallCheck(this, Matrix);

    this.mat4 = mat4;
  }

  _createClass(Matrix, [{
    key: 'getMat4',
    value: function getMat4() {
      return this.mat4;
    }
  }, {
    key: 'apply',
    value: function apply(uniformLocation, canvas) {
      canvas.applyMatrix(uniformLocation, this.mat4);
    }
  }]);

  return Matrix;
}();

module.exports = Matrix;

},{}],70:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mat4 = require('../maths/mat4'),
    Matrix = require('../matrix');

var create = mat4.create,
    invert = mat4.invert,
    transpose = mat4.transpose;

var NormalMatrix = function (_Matrix) {
      _inherits(NormalMatrix, _Matrix);

      function NormalMatrix() {
            _classCallCheck(this, NormalMatrix);

            return _possibleConstructorReturn(this, (NormalMatrix.__proto__ || Object.getPrototypeOf(NormalMatrix)).apply(this, arguments));
      }

      _createClass(NormalMatrix, null, [{
            key: 'fromRotationMatrix',
            value: function fromRotationMatrix(rotationMatrix) {
                  var mat4 = create(),
                      rotationMat4 = rotationMatrix.getMat4(),
                      normalMatrix = new NormalMatrix(mat4);

                  invert(mat4, rotationMat4);

                  transpose(mat4, mat4);

                  return normalMatrix;
            }
      }]);

      return NormalMatrix;
}(Matrix);

module.exports = NormalMatrix;

},{"../maths/mat4":65,"../matrix":69}],71:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mat4 = require('../maths/mat4'),
    Matrix = require('../matrix');

var create = mat4.create,
    translate = mat4.translate;

var OffsetMatrix = function (_Matrix) {
  _inherits(OffsetMatrix, _Matrix);

  function OffsetMatrix() {
    _classCallCheck(this, OffsetMatrix);

    return _possibleConstructorReturn(this, (OffsetMatrix.__proto__ || Object.getPrototypeOf(OffsetMatrix)).apply(this, arguments));
  }

  _createClass(OffsetMatrix, null, [{
    key: 'fromOffset',
    value: function fromOffset(offset) {
      var mat4 = create(),
          offsetMatrix = new OffsetMatrix(mat4);

      translate(mat4, mat4, offset);

      return offsetMatrix;
    }
  }]);

  return OffsetMatrix;
}(Matrix);

module.exports = OffsetMatrix;

},{"../maths/mat4":65,"../matrix":69}],72:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mat4 = require('../maths/mat4'),
    Matrix = require('../matrix');

var create = mat4.create,
    translate = mat4.translate;

var PositionMatrix = function (_Matrix) {
      _inherits(PositionMatrix, _Matrix);

      function PositionMatrix() {
            _classCallCheck(this, PositionMatrix);

            return _possibleConstructorReturn(this, (PositionMatrix.__proto__ || Object.getPrototypeOf(PositionMatrix)).apply(this, arguments));
      }

      _createClass(PositionMatrix, null, [{
            key: 'fromDistance',
            value: function fromDistance(distance) {
                  var x = 0,
                      y = 0,
                      z = -distance,
                      ///
                  positionMatrix = PositionMatrix.fromCoordinates(x, y, z);

                  return positionMatrix;
            }
      }, {
            key: 'fromCoordinates',
            value: function fromCoordinates(x, y, z) {
                  var mat4 = create(),
                      positionMatrix = new PositionMatrix(mat4);

                  translate(mat4, mat4, [x, y, z]);

                  return positionMatrix;
            }
      }]);

      return PositionMatrix;
}(Matrix);

module.exports = PositionMatrix;

},{"../maths/mat4":65,"../matrix":69}],73:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mat4 = require('../maths/mat4'),
    Matrix = require('../matrix'),
    constants = require('../constants');

var create = mat4.create,
    perspective = mat4.perspective,
    FIELD_OF_VIEW = constants.FIELD_OF_VIEW,
    Z_NEAR = constants.Z_NEAR,
    Z_FAR = constants.Z_FAR;

var ProjectionMatrix = function (_Matrix) {
      _inherits(ProjectionMatrix, _Matrix);

      function ProjectionMatrix() {
            _classCallCheck(this, ProjectionMatrix);

            return _possibleConstructorReturn(this, (ProjectionMatrix.__proto__ || Object.getPrototypeOf(ProjectionMatrix)).apply(this, arguments));
      }

      _createClass(ProjectionMatrix, null, [{
            key: 'fromWidthAndHeight',
            value: function fromWidthAndHeight(width, height) {
                  var mat4 = create(),
                      fieldOfView = FIELD_OF_VIEW,
                      aspectRatio = width / height,
                      zNear = Z_NEAR,
                      zFar = Z_FAR,
                      projectionMatrix = new ProjectionMatrix(mat4);

                  perspective(mat4, fieldOfView, aspectRatio, zNear, zFar);

                  return projectionMatrix;
            }
      }]);

      return ProjectionMatrix;
}(Matrix);

module.exports = ProjectionMatrix;

},{"../constants":10,"../maths/mat4":65,"../matrix":69}],74:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mat4 = require('../maths/mat4'),
    Matrix = require('../matrix');

var create = mat4.create,
    rotate = mat4.rotate;

var RotationMatrix = function (_Matrix) {
      _inherits(RotationMatrix, _Matrix);

      function RotationMatrix() {
            _classCallCheck(this, RotationMatrix);

            return _possibleConstructorReturn(this, (RotationMatrix.__proto__ || Object.getPrototypeOf(RotationMatrix)).apply(this, arguments));
      }

      _createClass(RotationMatrix, null, [{
            key: 'fromAngles',
            value: function fromAngles(angles) {
                  var xAngle = angles.getXAngle(),
                      yAngle = angles.getYAngle(),
                      zAngle = angles.getZAngle(),
                      rotationMatrix = RotationMatrix.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle);

                  return rotationMatrix;
            }
      }, {
            key: 'fromXAngleYAngleAndZAngle',
            value: function fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle) {
                  var mat4 = create(),
                      rotationMatrix = new RotationMatrix(mat4);

                  rotate(mat4, mat4, xAngle, [1, 0, 0]);
                  rotate(mat4, mat4, yAngle, [0, 1, 0]);
                  rotate(mat4, mat4, zAngle, [0, 0, 1]);

                  return rotationMatrix;
            }
      }]);

      return RotationMatrix;
}(Matrix);

module.exports = RotationMatrix;

},{"../maths/mat4":65,"../matrix":69}],75:[function(require,module,exports){
'use strict';

var Element = require('./element');

function createElement(firstArgument, properties) {
  for (var _len = arguments.length, childElements = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    childElements[_key - 2] = arguments[_key];
  }

  var element = void 0;

  properties = Object.assign({
    childElements: childElements
  }, properties);

  if (false) {} else if (isSubclassOf(firstArgument, Element)) {
    var Class = firstArgument; ///

    element = Class.fromProperties(properties);
  } else if (typeof firstArgument === 'function') {
    var func = firstArgument; ///

    element = func(properties);
  }

  return element;
}

var React = {
  createElement: createElement
};

module.exports = React;

function isSubclassOf(argument, Class) {
  var typeOf = false;

  if (argument.name === Class.name) {
    ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument) {
      typeOf = isSubclassOf(argument, Class);
    }
  }

  return typeOf;
}

},{"./element":11}],76:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var Renderer = function () {
  function Renderer(program, uniformLocations, attributeLocations) {
    _classCallCheck(this, Renderer);

    this.program = program;
    this.uniformLocations = uniformLocations;
    this.attributeLocations = attributeLocations;

    this.vertexPositionData = [];
    this.vertexNormalData = [];
    this.vertexIndexData = [];

    this.vertexPositionBuffer = null; ///
    this.vertexNormalBuffer = null; ///
    this.vertexIndexElementBuffer = null; ///

    this.maximumVertexIndex = -1; ///
  }

  _createClass(Renderer, [{
    key: 'getCount',
    value: function getCount() {
      var vertexIndexDataLength = this.vertexIndexData.length,
          count = vertexIndexDataLength; ///

      return count;
    }
  }, {
    key: 'getProgram',
    value: function getProgram() {
      return this.program;
    }
  }, {
    key: 'getUniformLocations',
    value: function getUniformLocations() {
      return this.uniformLocations;
    }
  }, {
    key: 'getAttributeLocations',
    value: function getAttributeLocations() {
      return this.attributeLocations;
    }
  }, {
    key: 'getOffsetMatrixUniformLocation',
    value: function getOffsetMatrixUniformLocation() {
      return this.uniformLocations.getOffsetMatrixUniformLocation();
    }
  }, {
    key: 'getRotationMatrixUniformLocation',
    value: function getRotationMatrixUniformLocation() {
      return this.uniformLocations.getRotationMatrixUniformLocation();
    }
  }, {
    key: 'getPositionMatrixUniformLocation',
    value: function getPositionMatrixUniformLocation() {
      return this.uniformLocations.getPositionMatrixUniformLocation();
    }
  }, {
    key: 'getProjectionMatrixUniformLocation',
    value: function getProjectionMatrixUniformLocation() {
      return this.uniformLocations.getProjectionMatrixUniformLocation();
    }
  }, {
    key: 'getNormalMatrixUniformLocation',
    value: function getNormalMatrixUniformLocation() {
      return this.uniformLocations.getNormalMatrixUniformLocation();
    }
  }, {
    key: 'getVertexPositionAttributeLocation',
    value: function getVertexPositionAttributeLocation() {
      return this.attributeLocations.getVertexPositionAttributeLocation();
    }
  }, {
    key: 'getVertexNormalAttributeLocation',
    value: function getVertexNormalAttributeLocation() {
      return this.attributeLocations.getVertexNormalAttributeLocation();
    }
  }, {
    key: 'addVertexPositionData',
    value: function addVertexPositionData(vertexPositionData) {
      add(this.vertexPositionData, vertexPositionData);
    }
  }, {
    key: 'addVertexNormalData',
    value: function addVertexNormalData(vertexNormalData) {
      add(this.vertexNormalData, vertexNormalData);
    }
  }, {
    key: 'addVertexIndexData',
    value: function addVertexIndexData(vertexIndexData) {
      var offset = this.maximumVertexIndex + 1;

      vertexIndexData = vertexIndexData.map(function (vertexIndex) {
        return vertexIndex + offset;
      });

      add(this.vertexIndexData, vertexIndexData);

      this.maximumVertexIndex = Math.max.apply(Math, [this.maximumVertexIndex].concat(_toConsumableArray(vertexIndexData)));
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.createVertexPositionBuffer(canvas);
      this.createVertexNormalBuffer(canvas);
      this.createVertexIndexElementBuffer(canvas);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(canvas) {
      this.bindVertexNormalBuffer(canvas);
      this.bindVertexPositionBuffer(canvas);
      this.bindVertexIndexElementBuffer(canvas);
    }
  }, {
    key: 'createVertexPositionBuffer',
    value: function createVertexPositionBuffer(canvas) {
      this.vertexPositionBuffer = canvas.createBuffer(this.vertexPositionData);
    }
  }, {
    key: 'createVertexNormalBuffer',
    value: function createVertexNormalBuffer(canvas) {
      this.vertexNormalBuffer = canvas.createBuffer(this.vertexNormalData);
    }
  }, {
    key: 'createVertexIndexElementBuffer',
    value: function createVertexIndexElementBuffer(canvas) {
      this.vertexIndexElementBuffer = canvas.createElementBuffer(this.vertexIndexData);
    }
  }, {
    key: 'bindVertexPositionBuffer',
    value: function bindVertexPositionBuffer(canvas) {
      var vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
          vertexPositionComponents = 3;

      canvas.bindBuffer(this.vertexPositionBuffer, vertexPositionAttributeLocation, vertexPositionComponents);
    }
  }, {
    key: 'bindVertexNormalBuffer',
    value: function bindVertexNormalBuffer(canvas) {
      var vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
          vertexNormalComponents = 3;

      canvas.bindBuffer(this.vertexNormalBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
    }
  }, {
    key: 'bindVertexIndexElementBuffer',
    value: function bindVertexIndexElementBuffer(canvas) {
      canvas.bindElementBuffer(this.vertexIndexElementBuffer);
    }
  }]);

  return Renderer;
}();

function createProgram(vertexShaderSource, fragmentShaderSource, canvas) {
  var vertexShader = canvas.createVertexShader(vertexShaderSource),
      fragmentShader = canvas.createFragmentShader(fragmentShaderSource),
      program = canvas.createProgram(vertexShader, fragmentShader);

  return program;
}

Object.assign(Renderer, {
  createProgram: createProgram
});

module.exports = Renderer;

},{"necessary":209}],77:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Renderer = require('../renderer'),
    vertexShaderSource = require('./source/colour/vertexShader'),
    fragmentShaderSource = require('./source/colour/fragmentShader'),
    ColourUniformLocations = require('./locations/colour/uniform'),
    ColourAttributeLocations = require('./locations/colour/attribute');

var createProgram = Renderer.createProgram,
    arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var ColourRenderer = function (_Renderer) {
  _inherits(ColourRenderer, _Renderer);

  function ColourRenderer(program, uniformLocations, attributeLocations) {
    _classCallCheck(this, ColourRenderer);

    var _this = _possibleConstructorReturn(this, (ColourRenderer.__proto__ || Object.getPrototypeOf(ColourRenderer)).call(this, program, uniformLocations, attributeLocations));

    _this.vertexColourData = [];

    _this.vertexColourBuffer = null; ///
    return _this;
  }

  _createClass(ColourRenderer, [{
    key: 'getVertexColourAttributeLocation',
    value: function getVertexColourAttributeLocation() {
      var attributeLocations = this.getAttributeLocations(),
          vertexColourAttributeLocation = attributeLocations.getVertexColourAttributeLocation();

      return vertexColourAttributeLocation;
    }
  }, {
    key: 'addVertexColourData',
    value: function addVertexColourData(vertexColourData) {
      add(this.vertexColourData, vertexColourData);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.vertexColourBuffer = canvas.createBuffer(this.vertexColourData);

      _get(ColourRenderer.prototype.__proto__ || Object.getPrototypeOf(ColourRenderer.prototype), 'createBuffers', this).call(this, canvas);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(canvas) {
      var vertexColourAttributeLocation = this.getVertexColourAttributeLocation(),
          vertexColourComponents = 4;

      canvas.bindBuffer(this.vertexColourBuffer, vertexColourAttributeLocation, vertexColourComponents);

      _get(ColourRenderer.prototype.__proto__ || Object.getPrototypeOf(ColourRenderer.prototype), 'bindBuffers', this).call(this, canvas);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
          uniformLocations = ColourUniformLocations.fromProgram(program, canvas),
          attributeLocations = ColourAttributeLocations.fromProgram(program, canvas),
          colourRenderer = new ColourRenderer(program, uniformLocations, attributeLocations);

      return colourRenderer;
    }
  }]);

  return ColourRenderer;
}(Renderer);

module.exports = ColourRenderer;

},{"../renderer":76,"./locations/colour/attribute":79,"./locations/colour/uniform":80,"./source/colour/fragmentShader":84,"./source/colour/vertexShader":85,"necessary":209}],78:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lightingSource = require('../source/lighting'),
    positionSource = require('../source/position');

var vertexNormalAttributeName = lightingSource.vertexNormalAttributeName,
    vertexPositionAttributeName = positionSource.vertexPositionAttributeName;

var AttributeLocations = function () {
  function AttributeLocations(vertexPositionAttributeLocation, vertexNormalAttributeLocation) {
    _classCallCheck(this, AttributeLocations);

    this.vertexPositionAttributeLocation = vertexPositionAttributeLocation;
    this.vertexNormalAttributeLocation = vertexNormalAttributeLocation;
  }

  _createClass(AttributeLocations, [{
    key: 'getVertexPositionAttributeLocation',
    value: function getVertexPositionAttributeLocation() {
      return this.vertexPositionAttributeLocation;
    }
  }, {
    key: 'getVertexNormalAttributeLocation',
    value: function getVertexNormalAttributeLocation() {
      return this.vertexNormalAttributeLocation;
    }
  }], [{
    key: 'fromProgram',
    value: function fromProgram(Class, program, canvas) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        remainingArguments[_key - 3] = arguments[_key];
      }

      var vertexPositionAttributeLocation = canvas.getAttributeLocation(program, vertexPositionAttributeName),
          vertexNormalAttributeLocation = canvas.getAttributeLocation(program, vertexNormalAttributeName),
          attributeLocations = new (Function.prototype.bind.apply(Class, [null].concat([vertexPositionAttributeLocation, vertexNormalAttributeLocation], remainingArguments)))();

      return attributeLocations;
    }
  }]);

  return AttributeLocations;
}();

module.exports = AttributeLocations;

},{"../source/lighting":86,"../source/position":87}],79:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AttributeLocations = require('../../locations/attribute'),
    vertexShaderSource = require('../../source/colour/vertexShader');

var vertexColourAttributeName = vertexShaderSource.vertexColourAttributeName;

var ColourAttributeLocations = function (_AttributeLocations) {
  _inherits(ColourAttributeLocations, _AttributeLocations);

  function ColourAttributeLocations(vertexPositionAttributeLocation, vertexNormalAttributeLocation, vertexColourAttributeLocation) {
    _classCallCheck(this, ColourAttributeLocations);

    var _this = _possibleConstructorReturn(this, (ColourAttributeLocations.__proto__ || Object.getPrototypeOf(ColourAttributeLocations)).call(this, vertexPositionAttributeLocation, vertexNormalAttributeLocation));

    _this.vertexColourAttributeLocation = vertexColourAttributeLocation;
    return _this;
  }

  _createClass(ColourAttributeLocations, [{
    key: 'getVertexColourAttributeLocation',
    value: function getVertexColourAttributeLocation() {
      return this.vertexColourAttributeLocation;
    }
  }], [{
    key: 'fromProgram',
    value: function fromProgram(program, canvas) {
      var vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName),
          colourAttributeLocations = AttributeLocations.fromProgram(ColourAttributeLocations, program, canvas, vertexColourAttributeLocation);

      return colourAttributeLocations;
    }
  }]);

  return ColourAttributeLocations;
}(AttributeLocations);

module.exports = ColourAttributeLocations;

},{"../../locations/attribute":78,"../../source/colour/vertexShader":85}],80:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UniformLocations = require('../../locations/uniform');

var ColourUniformLocations = function (_UniformLocations) {
  _inherits(ColourUniformLocations, _UniformLocations);

  function ColourUniformLocations() {
    _classCallCheck(this, ColourUniformLocations);

    return _possibleConstructorReturn(this, (ColourUniformLocations.__proto__ || Object.getPrototypeOf(ColourUniformLocations)).apply(this, arguments));
  }

  _createClass(ColourUniformLocations, null, [{
    key: 'fromProgram',
    value: function fromProgram(program, canvas) {
      return UniformLocations.fromProgram(ColourUniformLocations, program, canvas);
    }
  }]);

  return ColourUniformLocations;
}(UniformLocations);

module.exports = ColourUniformLocations;

},{"../../locations/uniform":83}],81:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AttributeLocations = require('../../locations/attribute'),
    vertexShaderSource = require('../../source/texture/vertexShader');

var textureCoordinateAttributeName = vertexShaderSource.textureCoordinateAttributeName;

var TextureAttributeLocations = function (_AttributeLocations) {
  _inherits(TextureAttributeLocations, _AttributeLocations);

  function TextureAttributeLocations(vertexPositionAttributeLocation, vertexNormalAttributeLocation, textureCoordinateAttributeLocation) {
    _classCallCheck(this, TextureAttributeLocations);

    var _this = _possibleConstructorReturn(this, (TextureAttributeLocations.__proto__ || Object.getPrototypeOf(TextureAttributeLocations)).call(this, vertexPositionAttributeLocation, vertexNormalAttributeLocation));

    _this.textureCoordinateAttributeLocation = textureCoordinateAttributeLocation;
    return _this;
  }

  _createClass(TextureAttributeLocations, [{
    key: 'getTextureCoordinateAttributeLocation',
    value: function getTextureCoordinateAttributeLocation() {
      return this.textureCoordinateAttributeLocation;
    }
  }], [{
    key: 'fromProgram',
    value: function fromProgram(program, canvas) {
      var textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, textureCoordinateAttributeName),
          textureAttributeLocations = AttributeLocations.fromProgram(TextureAttributeLocations, program, canvas, textureCoordinateAttributeLocation);

      return textureAttributeLocations;
    }
  }]);

  return TextureAttributeLocations;
}(AttributeLocations);

module.exports = TextureAttributeLocations;

},{"../../locations/attribute":78,"../../source/texture/vertexShader":89}],82:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UniformLocations = require('../../locations/uniform'),
    fragmentShaderSource = require('../../source/texture/fragmentShader');

var samplerName = fragmentShaderSource.samplerName;

var TextureUniformLocations = function (_UniformLocations) {
  _inherits(TextureUniformLocations, _UniformLocations);

  function TextureUniformLocations(offsetMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalMatrixUniformLocation, samplerUniformLocation) {
    _classCallCheck(this, TextureUniformLocations);

    var _this = _possibleConstructorReturn(this, (TextureUniformLocations.__proto__ || Object.getPrototypeOf(TextureUniformLocations)).call(this, offsetMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalMatrixUniformLocation));

    _this.samplerUniformLocation = samplerUniformLocation;
    return _this;
  }

  _createClass(TextureUniformLocations, [{
    key: 'getSamplerUniformLocation',
    value: function getSamplerUniformLocation() {
      return this.samplerUniformLocation;
    }
  }], [{
    key: 'fromProgram',
    value: function fromProgram(program, canvas) {
      var samplerUniformLocation = canvas.getUniformLocation(program, samplerName),
          textureUniformLocations = UniformLocations.fromProgram(TextureUniformLocations, program, canvas, samplerUniformLocation);

      return textureUniformLocations;
    }
  }]);

  return TextureUniformLocations;
}(UniformLocations);

module.exports = TextureUniformLocations;

},{"../../locations/uniform":83,"../../source/texture/fragmentShader":88}],83:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lightingSource = require('../source/lighting'),
    positionSource = require('../source/position');

var normalMatrixName = lightingSource.normalMatrixName,
    offsetMatrixName = positionSource.offsetMatrixName,
    rotationMatrixName = positionSource.rotationMatrixName,
    positionMatrixName = positionSource.positionMatrixName,
    projectionMatrixName = positionSource.projectionMatrixName;

var UniformLocations = function () {
  function UniformLocations(offsetMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalMatrixUniformLocation) {
    _classCallCheck(this, UniformLocations);

    this.offsetMatrixUniformLocation = offsetMatrixUniformLocation;
    this.rotationMatrixUniformLocation = rotationMatrixUniformLocation;
    this.positionMatrixUniformLocation = positionMatrixUniformLocation;
    this.projectionMatrixUniformLocation = projectionMatrixUniformLocation;
    this.normalMatrixUniformLocation = normalMatrixUniformLocation;
  }

  _createClass(UniformLocations, [{
    key: 'getOffsetMatrixUniformLocation',
    value: function getOffsetMatrixUniformLocation() {
      return this.offsetMatrixUniformLocation;
    }
  }, {
    key: 'getRotationMatrixUniformLocation',
    value: function getRotationMatrixUniformLocation() {
      return this.rotationMatrixUniformLocation;
    }
  }, {
    key: 'getPositionMatrixUniformLocation',
    value: function getPositionMatrixUniformLocation() {
      return this.positionMatrixUniformLocation;
    }
  }, {
    key: 'getProjectionMatrixUniformLocation',
    value: function getProjectionMatrixUniformLocation() {
      return this.projectionMatrixUniformLocation;
    }
  }, {
    key: 'getNormalMatrixUniformLocation',
    value: function getNormalMatrixUniformLocation() {
      return this.normalMatrixUniformLocation;
    }
  }], [{
    key: 'fromProgram',
    value: function fromProgram(Class, program, canvas) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        remainingArguments[_key - 3] = arguments[_key];
      }

      var offsetMatrixUniformLocation = canvas.getUniformLocation(program, offsetMatrixName),
          rotationMatrixUniformLocation = canvas.getUniformLocation(program, rotationMatrixName),
          positionMatrixUniformLocation = canvas.getUniformLocation(program, positionMatrixName),
          projectionMatrixUniformLocation = canvas.getUniformLocation(program, projectionMatrixName),
          normalMatrixUniformLocation = canvas.getUniformLocation(program, normalMatrixName),
          uniformLocations = new (Function.prototype.bind.apply(Class, [null].concat([offsetMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalMatrixUniformLocation], remainingArguments)))();

      return uniformLocations;
    }
  }]);

  return UniformLocations;
}();

module.exports = UniformLocations;

},{"../source/lighting":86,"../source/position":87}],84:[function(require,module,exports){
'use strict';

var fragmentShaderSource = new String('\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ');

module.exports = fragmentShaderSource;

},{}],85:[function(require,module,exports){
'use strict';

var lightingSource = require('../../source/lighting'),
    positionSource = require('../../source/position');

var vertexColourAttributeName = 'aVertexColour',
    vertexShaderSource = new String('\n    \n        attribute vec4 ' + vertexColourAttributeName + ';\n\n        ' + lightingSource + '\n      \n        ' + positionSource + '\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ' + vertexColourAttributeName + ';                    \n        }\n        \n      ');

Object.assign(vertexShaderSource, {
  vertexColourAttributeName: vertexColourAttributeName
});

module.exports = vertexShaderSource;

},{"../../source/lighting":86,"../../source/position":87}],86:[function(require,module,exports){
'use strict';

var normalMatrixName = 'uNormalMatrix',
    vertexNormalAttributeName = 'aVertexNormal';

var lightingSource = new String('\n  \n        uniform mat4 ' + normalMatrixName + ';\n\n        attribute vec3 ' + vertexNormalAttributeName + ';\n\n        vec3 directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(1.0, 1.0, 1.0));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ' + normalMatrixName + ' * vec4(' + vertexNormalAttributeName + ', 1.0);            \n\n          float directional = (dot(transformedNormal.xyz, directionalVector) + 1.0) / 2.0;\n          \n          vec3 lighting = (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      ');

Object.assign(lightingSource, {
  normalMatrixName: normalMatrixName,
  vertexNormalAttributeName: vertexNormalAttributeName
});

module.exports = lightingSource;

},{}],87:[function(require,module,exports){
'use strict';

var offsetMatrixName = 'uOffsetMatrix',
    rotationMatrixName = 'uRotationMatrix',
    positionMatrixName = 'uPositionMatrix',
    projectionMatrixName = 'uPerspectiveMatrix',
    vertexPositionAttributeName = 'aVertexPosition';

var positionSource = new String('\n  \n        uniform mat4 ' + offsetMatrixName + ',\n                     ' + rotationMatrixName + ',\n                     ' + positionMatrixName + ',\n                     ' + projectionMatrixName + ';\n        \n        attribute vec4 ' + vertexPositionAttributeName + ';\n\n        vec4 calculatePosition() {\n          vec4 position = ' + projectionMatrixName + ' * ' + positionMatrixName + ' * ' + rotationMatrixName + ' * ' + offsetMatrixName + ' * ' + vertexPositionAttributeName + ';\n          \n          return position;\n        }\n        \n      ');

Object.assign(positionSource, {
  offsetMatrixName: offsetMatrixName,
  rotationMatrixName: rotationMatrixName,
  positionMatrixName: positionMatrixName,
  projectionMatrixName: projectionMatrixName,
  vertexPositionAttributeName: vertexPositionAttributeName
});

module.exports = positionSource;

},{}],88:[function(require,module,exports){
'use strict';

var samplerName = 'uSampler',
    fragmentShaderSource = new String('\n        \n        uniform sampler2D ' + samplerName + ';\n\n        varying highp vec3 vLighting;\n                   \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          highp vec4 texelColour = texture2D(' + samplerName + ', vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      ');

Object.assign(fragmentShaderSource, {
  samplerName: samplerName
});

module.exports = fragmentShaderSource;

},{}],89:[function(require,module,exports){
'use strict';

var lightingSource = require('../../source/lighting'),
    positionSource = require('../../source/position');

var textureCoordinateAttributeName = 'aTextureCoordinate',
    vertexShaderSource = new String('\n        \n        attribute vec2 ' + textureCoordinateAttributeName + ';\n        \n        ' + lightingSource + '\n      \n        ' + positionSource + '\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ' + textureCoordinateAttributeName + ';\n        }\n        \n      ');

Object.assign(vertexShaderSource, {
  textureCoordinateAttributeName: textureCoordinateAttributeName
});

module.exports = vertexShaderSource;

},{"../../source/lighting":86,"../../source/position":87}],90:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Renderer = require('../renderer'),
    vertexShaderSource = require('./source/texture/vertexShader'),
    fragmentShaderSource = require('./source/texture/fragmentShader'),
    TextureUniformLocations = require('./locations/texture/uniform'),
    TextureAttributeLocations = require('./locations/texture/attribute');

var createProgram = Renderer.createProgram,
    arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var TextureRenderer = function (_Renderer) {
  _inherits(TextureRenderer, _Renderer);

  function TextureRenderer(program, uniformLocations, attributeLocations) {
    _classCallCheck(this, TextureRenderer);

    var _this = _possibleConstructorReturn(this, (TextureRenderer.__proto__ || Object.getPrototypeOf(TextureRenderer)).call(this, program, uniformLocations, attributeLocations));

    _this.textureCoordinateData = [];

    _this.textureCoordinateBuffer = null; ///
    return _this;
  }

  _createClass(TextureRenderer, [{
    key: 'getTextureCoordinateAttributeLocation',
    value: function getTextureCoordinateAttributeLocation() {
      var attributeLocations = this.getAttributeLocations(),
          textureCoordinateAttributeLocation = attributeLocations.getTextureCoordinateAttributeLocation();

      return textureCoordinateAttributeLocation;
    }
  }, {
    key: 'addTextureCoordinateData',
    value: function addTextureCoordinateData(textureCoordinateData) {
      add(this.textureCoordinateData, textureCoordinateData);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.textureCoordinateBuffer = canvas.createBuffer(this.textureCoordinateData);

      _get(TextureRenderer.prototype.__proto__ || Object.getPrototypeOf(TextureRenderer.prototype), 'createBuffers', this).call(this, canvas);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(canvas) {
      var textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation(),
          textureCoordinateComponents = 2;

      canvas.bindBuffer(this.textureCoordinateBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);

      _get(TextureRenderer.prototype.__proto__ || Object.getPrototypeOf(TextureRenderer.prototype), 'bindBuffers', this).call(this, canvas);
    }
  }, {
    key: 'createTexture',
    value: function createTexture(image, canvas) {
      canvas.createTexture(image);
    }
  }, {
    key: 'activateTexture',
    value: function activateTexture(canvas) {
      var context = canvas.getContext(),
          TEXTURE0 = context.TEXTURE0,
          target = TEXTURE0,
          uniformLocations = this.getUniformLocations(),
          samplerUniformLocation = uniformLocations.getSamplerUniformLocation(),
          uSamplerUniformLocationIntegerValue = 0;


      canvas.activateTexture(target);

      canvas.setUniformLocationIntegerValue(samplerUniformLocation, uSamplerUniformLocationIntegerValue);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
          uniformLocations = TextureUniformLocations.fromProgram(program, canvas),
          attributeLocations = TextureAttributeLocations.fromProgram(program, canvas),
          textureRenderer = new TextureRenderer(program, uniformLocations, attributeLocations);

      return textureRenderer;
    }
  }]);

  return TextureRenderer;
}(Renderer);

module.exports = TextureRenderer;

},{"../renderer":76,"./locations/texture/attribute":81,"./locations/texture/uniform":82,"./source/texture/fragmentShader":88,"./source/texture/vertexShader":89,"necessary":209}],91:[function(require,module,exports){
'use strict';

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities;


function chop(elements, arrayLength) {
  var arrays = [],
      elementsLength = elements.length,
      arraysLength = elementsLength / arrayLength;

  for (var index = 0; index < arraysLength; index++) {
    var array = [];

    for (var offset = 0; offset < arrayLength; offset++) {
      array[offset] = elements[index * arrayLength + offset];
    }

    arrays[index] = array;
  }

  return arrays;
}

function flatten(arrays) {
  return arrays.reduce(function (elements, array) {
    return elements.concat(array);
  }, []);
}

function guarantee(arrayOrElement) {
  return arrayOrElement instanceof Array ? arrayOrElement : [arrayOrElement];
}

module.exports = Object.assign(arrayUtilities, {
  chop: chop,
  flatten: flatten,
  guarantee: guarantee
});

},{"necessary":209}],92:[function(require,module,exports){
'use strict';

function domElementFromSelector(selector) {
  var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

module.exports = {
  domElementFromSelector: domElementFromSelector
};

},{}],93:[function(require,module,exports){
'use strict';

var necessary = require('necessary');

var asynchronousUtilities = necessary.asynchronousUtilities,
    repeatedly = asynchronousUtilities.repeatedly;


function preloadImage(path, callback) {
  var image = new Image();

  image.onload = function () {
    callback(image);
  };

  image.src = path; ///
}

function preloadImages(paths, callback) {
  var images = [],
      length = paths.length,
      ///
  context = {
    images: images,
    paths: paths
  };

  repeatedly(preloadImageCallback, length, done, context);

  function done() {
    callback(images);
  }
}

module.exports = {
  preloadImage: preloadImage,
  preloadImages: preloadImages
};

function preloadImageCallback(next, done, context, index) {
  var images = context.images,
      paths = context.paths,
      path = paths[index],
      image = new Image();


  images[index] = image;

  image.onload = next; ///

  image.src = path; ///
}

},{"necessary":209}],94:[function(require,module,exports){
'use strict';

var constants = require('../../bin/constants'),
    ///
imageUtilities = require('../utilities/image');

var IMAGE_MAP_PATH = constants.IMAGE_MAP_PATH,
    preloadImage = imageUtilities.preloadImage,
    _runtimeConfiguration = runtimeConfiguration,
    imageMapJSON = _runtimeConfiguration.imageMapJSON;


function preloadImageMap(callback) {
  var path = IMAGE_MAP_PATH;

  preloadImage(path, callback);
}

function textureCoordinatesFromImageNames(imageNames) {
  var textureCoordinates = imageNames.reduce(function (textureCoordinates, textureName) {
    textureCoordinates = textureCoordinates.concat(imageMapJSON[textureName]);

    return textureCoordinates;
  }, []);

  return textureCoordinates;
}

module.exports = {
  preloadImageMap: preloadImageMap,
  textureCoordinatesFromImageNames: textureCoordinatesFromImageNames
};

},{"../../bin/constants":1,"../utilities/image":93}],95:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var mat4 = require('../maths/mat4'),
    vec4 = require('../maths/vec4'),
    constants = require('../constants'),
    arrayUtilities = require('../utilities/array');

var DEGREES_TO_RADIANS = constants.DEGREES_TO_RADIANS,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    create = mat4.create,
    scale = mat4.scale,
    rotate = mat4.rotate,
    translate = mat4.translate,
    transform = vec4.transform,
    xAxis = [1, 0, 0],
    yAxis = [0, 1, 0],
    zAxis = [0, 0, 1],
    defaultWidth = 1,
    defaultDepth = 1,
    defaultHeight = 1,
    defaultPosition = [0, 0, 0],
    defaultRotations = [0, 0, 0];


function composeTransform(width, height, depth, position, rotations) {
  var scale = composeScale(width, height, depth),
      rotate = composeRotate(rotations),
      translate = composeTranslate(position);

  return function (vec) {
    return translate(rotate(scale(vec)));
  };
}

module.exports = module.exports = {
  composeTransform: composeTransform
};

function compose(mat4) {
  return function (vec) {
    return transform([].concat(_toConsumableArray(vec), [1]), mat4).slice(0, 3);
  };
}

function composeScale() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultWidth;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultHeight;
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDepth;

  var mat4 = create();

  scale(mat4, mat4, [width, height, depth]);

  return compose(mat4);
}

function composeRotate() {
  var rotations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRotations;

  var mat4 = create(),
      firstRotation = first(rotations),
      secondRotation = second(rotations),
      thirdRotation = third(rotations),
      xAngle = firstRotation * DEGREES_TO_RADIANS,
      ///
  yAngle = secondRotation * DEGREES_TO_RADIANS,
      ///
  zAngle = thirdRotation * DEGREES_TO_RADIANS; ///

  rotate(mat4, mat4, xAngle, xAxis);
  rotate(mat4, mat4, yAngle, yAxis);
  rotate(mat4, mat4, zAngle, zAxis);

  return compose(mat4);
}

function composeTranslate() {
  var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPosition;

  var mat4 = create();

  translate(mat4, mat4, position);

  return compose(mat4);
}

},{"../constants":10,"../maths/mat4":65,"../maths/vec4":68,"../utilities/array":91}],96:[function(require,module,exports){

},{}],97:[function(require,module,exports){
module.exports = adjoint;

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
    out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
    out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
    out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
    out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
    out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
    return out;
};
},{}],98:[function(require,module,exports){
module.exports = clone;

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
    var out = new Float32Array(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};
},{}],99:[function(require,module,exports){
module.exports = copy;

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};
},{}],100:[function(require,module,exports){
module.exports = create;

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
    var out = new Float32Array(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};
},{}],101:[function(require,module,exports){
module.exports = determinant;

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
};
},{}],102:[function(require,module,exports){
module.exports = fromQuat;

/**
 * Creates a matrix from a quaternion rotation.
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @returns {mat4} out
 */
function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
};
},{}],103:[function(require,module,exports){
module.exports = fromRotationTranslation;

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    
    return out;
};
},{}],104:[function(require,module,exports){
module.exports = frustum;

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left),
        tb = 1 / (top - bottom),
        nf = 1 / (near - far);
    out[0] = (near * 2) * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = (near * 2) * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (far * near * 2) * nf;
    out[15] = 0;
    return out;
};
},{}],105:[function(require,module,exports){
module.exports = identity;

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};
},{}],106:[function(require,module,exports){
module.exports = {
  create: require('./create')
  , clone: require('./clone')
  , copy: require('./copy')
  , identity: require('./identity')
  , transpose: require('./transpose')
  , invert: require('./invert')
  , adjoint: require('./adjoint')
  , determinant: require('./determinant')
  , multiply: require('./multiply')
  , translate: require('./translate')
  , scale: require('./scale')
  , rotate: require('./rotate')
  , rotateX: require('./rotateX')
  , rotateY: require('./rotateY')
  , rotateZ: require('./rotateZ')
  , fromRotationTranslation: require('./fromRotationTranslation')
  , fromQuat: require('./fromQuat')
  , frustum: require('./frustum')
  , perspective: require('./perspective')
  , perspectiveFromFieldOfView: require('./perspectiveFromFieldOfView')
  , ortho: require('./ortho')
  , lookAt: require('./lookAt')
  , str: require('./str')
}
},{"./adjoint":97,"./clone":98,"./copy":99,"./create":100,"./determinant":101,"./fromQuat":102,"./fromRotationTranslation":103,"./frustum":104,"./identity":105,"./invert":107,"./lookAt":108,"./multiply":109,"./ortho":110,"./perspective":111,"./perspectiveFromFieldOfView":112,"./rotate":113,"./rotateX":114,"./rotateY":115,"./rotateZ":116,"./scale":117,"./str":118,"./translate":119,"./transpose":120}],107:[function(require,module,exports){
module.exports = invert;

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
};
},{}],108:[function(require,module,exports){
var identity = require('./identity');

module.exports = lookAt;

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) < 0.000001 &&
        Math.abs(eyey - centery) < 0.000001 &&
        Math.abs(eyez - centerz) < 0.000001) {
        return identity(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
};
},{"./identity":105}],109:[function(require,module,exports){
module.exports = multiply;

/**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    // Cache only the current line of the second matrix
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return out;
};
},{}],110:[function(require,module,exports){
module.exports = ortho;

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right),
        bt = 1 / (bottom - top),
        nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
};
},{}],111:[function(require,module,exports){
module.exports = perspective;

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (2 * far * near) * nf;
    out[15] = 0;
    return out;
};
},{}],112:[function(require,module,exports){
module.exports = perspectiveFromFieldOfView;

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspectiveFromFieldOfView(out, fov, near, far) {
    var upTan = Math.tan(fov.upDegrees * Math.PI/180.0),
        downTan = Math.tan(fov.downDegrees * Math.PI/180.0),
        leftTan = Math.tan(fov.leftDegrees * Math.PI/180.0),
        rightTan = Math.tan(fov.rightDegrees * Math.PI/180.0),
        xScale = 2.0 / (leftTan + rightTan),
        yScale = 2.0 / (upTan + downTan);

    out[0] = xScale;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    out[4] = 0.0;
    out[5] = yScale;
    out[6] = 0.0;
    out[7] = 0.0;
    out[8] = -((leftTan - rightTan) * xScale * 0.5);
    out[9] = ((upTan - downTan) * yScale * 0.5);
    out[10] = far / (near - far);
    out[11] = -1.0;
    out[12] = 0.0;
    out[13] = 0.0;
    out[14] = (far * near) / (near - far);
    out[15] = 0.0;
    return out;
}


},{}],113:[function(require,module,exports){
module.exports = rotate;

/**
 * Rotates a mat4 by the given angle
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s, c, t,
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23,
        b00, b01, b02,
        b10, b11, b12,
        b20, b21, b22;

    if (Math.abs(len) < 0.000001) { return null; }
    
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
};
},{}],114:[function(require,module,exports){
module.exports = rotateX;

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[0]  = a[0];
        out[1]  = a[1];
        out[2]  = a[2];
        out[3]  = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
};
},{}],115:[function(require,module,exports){
module.exports = rotateY;

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[4]  = a[4];
        out[5]  = a[5];
        out[6]  = a[6];
        out[7]  = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
};
},{}],116:[function(require,module,exports){
module.exports = rotateZ;

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[8]  = a[8];
        out[9]  = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
};
},{}],117:[function(require,module,exports){
module.exports = scale;

/**
 * Scales the mat4 by the dimensions in the given vec3
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
    var x = v[0], y = v[1], z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};
},{}],118:[function(require,module,exports){
module.exports = str;

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
                    a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
                    a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + 
                    a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
};
},{}],119:[function(require,module,exports){
module.exports = translate;

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
    var x = v[0], y = v[1], z = v[2],
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
};
},{}],120:[function(require,module,exports){
module.exports = transpose;

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3],
            a12 = a[6], a13 = a[7],
            a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    
    return out;
};
},{}],121:[function(require,module,exports){
module.exports = add

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    return out
}
},{}],122:[function(require,module,exports){
module.exports = clone

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
function clone(a) {
    var out = new Float32Array(2)
    out[0] = a[0]
    out[1] = a[1]
    return out
}
},{}],123:[function(require,module,exports){
module.exports = copy

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
    out[0] = a[0]
    out[1] = a[1]
    return out
}
},{}],124:[function(require,module,exports){
module.exports = create

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
    var out = new Float32Array(2)
    out[0] = 0
    out[1] = 0
    return out
}
},{}],125:[function(require,module,exports){
module.exports = cross

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0]
    out[0] = out[1] = 0
    out[2] = z
    return out
}
},{}],126:[function(require,module,exports){
module.exports = distance

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1]
    return Math.sqrt(x*x + y*y)
}
},{}],127:[function(require,module,exports){
module.exports = divide

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0]
    out[1] = a[1] / b[1]
    return out
}
},{}],128:[function(require,module,exports){
module.exports = dot

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1]
}
},{}],129:[function(require,module,exports){
module.exports = forEach

var vec = require('./create')()

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
function forEach(a, stride, offset, count, fn, arg) {
    var i, l
    if(!stride) {
        stride = 2
    }

    if(!offset) {
        offset = 0
    }
    
    if(count) {
        l = Math.min((count * stride) + offset, a.length)
    } else {
        l = a.length
    }

    for(i = offset; i < l; i += stride) {
        vec[0] = a[i]
        vec[1] = a[i+1]
        fn(vec, vec, arg)
        a[i] = vec[0]
        a[i+1] = vec[1]
    }
    
    return a
}
},{"./create":124}],130:[function(require,module,exports){
module.exports = fromValues

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
    var out = new Float32Array(2)
    out[0] = x
    out[1] = y
    return out
}
},{}],131:[function(require,module,exports){
module.exports = {
  create: require('./create')
  , clone: require('./clone')
  , fromValues: require('./fromValues')
  , copy: require('./copy')
  , set: require('./set')
  , add: require('./add')
  , subtract: require('./subtract')
  , multiply: require('./multiply')
  , divide: require('./divide')
  , min: require('./min')
  , max: require('./max')
  , scale: require('./scale')
  , scaleAndAdd: require('./scaleAndAdd')
  , distance: require('./distance')
  , squaredDistance: require('./squaredDistance')
  , length: require('./length')
  , squaredLength: require('./squaredLength')
  , negate: require('./negate')
  , normalize: require('./normalize')
  , dot: require('./dot')
  , cross: require('./cross')
  , lerp: require('./lerp')
  , random: require('./random')
  , transformMat2: require('./transformMat2')
  , transformMat2d: require('./transformMat2d')
  , transformMat3: require('./transformMat3')
  , transformMat4: require('./transformMat4')
  , forEach: require('./forEach')
}
},{"./add":121,"./clone":122,"./copy":123,"./create":124,"./cross":125,"./distance":126,"./divide":127,"./dot":128,"./forEach":129,"./fromValues":130,"./length":132,"./lerp":133,"./max":134,"./min":135,"./multiply":136,"./negate":137,"./normalize":138,"./random":139,"./scale":140,"./scaleAndAdd":141,"./set":142,"./squaredDistance":143,"./squaredLength":144,"./subtract":145,"./transformMat2":146,"./transformMat2d":147,"./transformMat3":148,"./transformMat4":149}],132:[function(require,module,exports){
module.exports = length

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0],
        y = a[1]
    return Math.sqrt(x*x + y*y)
}
},{}],133:[function(require,module,exports){
module.exports = lerp

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
    var ax = a[0],
        ay = a[1]
    out[0] = ax + t * (b[0] - ax)
    out[1] = ay + t * (b[1] - ay)
    return out
}
},{}],134:[function(require,module,exports){
module.exports = max

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0])
    out[1] = Math.max(a[1], b[1])
    return out
}
},{}],135:[function(require,module,exports){
module.exports = min

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0])
    out[1] = Math.min(a[1], b[1])
    return out
}
},{}],136:[function(require,module,exports){
module.exports = multiply

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[1]
    return out
}
},{}],137:[function(require,module,exports){
module.exports = negate

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
    out[0] = -a[0]
    out[1] = -a[1]
    return out
}
},{}],138:[function(require,module,exports){
module.exports = normalize

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1]
    var len = x*x + y*y
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len)
        out[0] = a[0] * len
        out[1] = a[1] * len
    }
    return out
}
},{}],139:[function(require,module,exports){
module.exports = random

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
function random(out, scale) {
    scale = scale || 1.0
    var r = Math.random() * 2.0 * Math.PI
    out[0] = Math.cos(r) * scale
    out[1] = Math.sin(r) * scale
    return out
}
},{}],140:[function(require,module,exports){
module.exports = scale

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b
    out[1] = a[1] * b
    return out
}
},{}],141:[function(require,module,exports){
module.exports = scaleAndAdd

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale)
    out[1] = a[1] + (b[1] * scale)
    return out
}
},{}],142:[function(require,module,exports){
module.exports = set

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
    out[0] = x
    out[1] = y
    return out
}
},{}],143:[function(require,module,exports){
module.exports = squaredDistance

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1]
    return x*x + y*y
}
},{}],144:[function(require,module,exports){
module.exports = squaredLength

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
    var x = a[0],
        y = a[1]
    return x*x + y*y
}
},{}],145:[function(require,module,exports){
module.exports = subtract

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    return out
}
},{}],146:[function(require,module,exports){
module.exports = transformMat2

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
    var x = a[0],
        y = a[1]
    out[0] = m[0] * x + m[2] * y
    out[1] = m[1] * x + m[3] * y
    return out
}
},{}],147:[function(require,module,exports){
module.exports = transformMat2d

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
    var x = a[0],
        y = a[1]
    out[0] = m[0] * x + m[2] * y + m[4]
    out[1] = m[1] * x + m[3] * y + m[5]
    return out
}
},{}],148:[function(require,module,exports){
module.exports = transformMat3

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
    var x = a[0],
        y = a[1]
    out[0] = m[0] * x + m[3] * y + m[6]
    out[1] = m[1] * x + m[4] * y + m[7]
    return out
}
},{}],149:[function(require,module,exports){
module.exports = transformMat4

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
    var x = a[0], 
        y = a[1]
    out[0] = m[0] * x + m[4] * y + m[12]
    out[1] = m[1] * x + m[5] * y + m[13]
    return out
}
},{}],150:[function(require,module,exports){
module.exports = add;

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    out[2] = a[2] + b[2]
    return out
}
},{}],151:[function(require,module,exports){
module.exports = angle

var fromValues = require('./fromValues')
var normalize = require('./normalize')
var dot = require('./dot')

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
    var tempA = fromValues(a[0], a[1], a[2])
    var tempB = fromValues(b[0], b[1], b[2])
 
    normalize(tempA, tempA)
    normalize(tempB, tempB)
 
    var cosine = dot(tempA, tempB)

    if(cosine > 1.0){
        return 0
    } else {
        return Math.acos(cosine)
    }     
}

},{"./dot":158,"./fromValues":160,"./normalize":169}],152:[function(require,module,exports){
module.exports = clone;

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone(a) {
    var out = new Float32Array(3)
    out[0] = a[0]
    out[1] = a[1]
    out[2] = a[2]
    return out
}
},{}],153:[function(require,module,exports){
module.exports = copy;

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
    out[0] = a[0]
    out[1] = a[1]
    out[2] = a[2]
    return out
}
},{}],154:[function(require,module,exports){
module.exports = create;

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
    var out = new Float32Array(3)
    out[0] = 0
    out[1] = 0
    out[2] = 0
    return out
}
},{}],155:[function(require,module,exports){
module.exports = cross;

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2]

    out[0] = ay * bz - az * by
    out[1] = az * bx - ax * bz
    out[2] = ax * by - ay * bx
    return out
}
},{}],156:[function(require,module,exports){
module.exports = distance;

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2]
    return Math.sqrt(x*x + y*y + z*z)
}
},{}],157:[function(require,module,exports){
module.exports = divide;

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0]
    out[1] = a[1] / b[1]
    out[2] = a[2] / b[2]
    return out
}
},{}],158:[function(require,module,exports){
module.exports = dot;

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}
},{}],159:[function(require,module,exports){
module.exports = forEach;

var vec = require('./create')()

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
function forEach(a, stride, offset, count, fn, arg) {
        var i, l
        if(!stride) {
            stride = 3
        }

        if(!offset) {
            offset = 0
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length)
        } else {
            l = a.length
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i] 
            vec[1] = a[i+1] 
            vec[2] = a[i+2]
            fn(vec, vec, arg)
            a[i] = vec[0] 
            a[i+1] = vec[1] 
            a[i+2] = vec[2]
        }
        
        return a
}
},{"./create":154}],160:[function(require,module,exports){
module.exports = fromValues;

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
    var out = new Float32Array(3)
    out[0] = x
    out[1] = y
    out[2] = z
    return out
}
},{}],161:[function(require,module,exports){
module.exports = {
  create: require('./create')
  , clone: require('./clone')
  , angle: require('./angle')
  , fromValues: require('./fromValues')
  , copy: require('./copy')
  , set: require('./set')
  , add: require('./add')
  , subtract: require('./subtract')
  , multiply: require('./multiply')
  , divide: require('./divide')
  , min: require('./min')
  , max: require('./max')
  , scale: require('./scale')
  , scaleAndAdd: require('./scaleAndAdd')
  , distance: require('./distance')
  , squaredDistance: require('./squaredDistance')
  , length: require('./length')
  , squaredLength: require('./squaredLength')
  , negate: require('./negate')
  , inverse: require('./inverse')
  , normalize: require('./normalize')
  , dot: require('./dot')
  , cross: require('./cross')
  , lerp: require('./lerp')
  , random: require('./random')
  , transformMat4: require('./transformMat4')
  , transformMat3: require('./transformMat3')
  , transformQuat: require('./transformQuat')
  , rotateX: require('./rotateX')
  , rotateY: require('./rotateY')
  , rotateZ: require('./rotateZ')
  , forEach: require('./forEach')
}
},{"./add":150,"./angle":151,"./clone":152,"./copy":153,"./create":154,"./cross":155,"./distance":156,"./divide":157,"./dot":158,"./forEach":159,"./fromValues":160,"./inverse":162,"./length":163,"./lerp":164,"./max":165,"./min":166,"./multiply":167,"./negate":168,"./normalize":169,"./random":170,"./rotateX":171,"./rotateY":172,"./rotateZ":173,"./scale":174,"./scaleAndAdd":175,"./set":176,"./squaredDistance":177,"./squaredLength":178,"./subtract":179,"./transformMat3":180,"./transformMat4":181,"./transformQuat":182}],162:[function(require,module,exports){
module.exports = inverse;

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0]
  out[1] = 1.0 / a[1]
  out[2] = 1.0 / a[2]
  return out
}
},{}],163:[function(require,module,exports){
module.exports = length;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    return Math.sqrt(x*x + y*y + z*z)
}
},{}],164:[function(require,module,exports){
module.exports = lerp;

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2]
    out[0] = ax + t * (b[0] - ax)
    out[1] = ay + t * (b[1] - ay)
    out[2] = az + t * (b[2] - az)
    return out
}
},{}],165:[function(require,module,exports){
module.exports = max;

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0])
    out[1] = Math.max(a[1], b[1])
    out[2] = Math.max(a[2], b[2])
    return out
}
},{}],166:[function(require,module,exports){
module.exports = min;

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0])
    out[1] = Math.min(a[1], b[1])
    out[2] = Math.min(a[2], b[2])
    return out
}
},{}],167:[function(require,module,exports){
module.exports = multiply;

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[1]
    out[2] = a[2] * b[2]
    return out
}
},{}],168:[function(require,module,exports){
module.exports = negate;

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
    out[0] = -a[0]
    out[1] = -a[1]
    out[2] = -a[2]
    return out
}
},{}],169:[function(require,module,exports){
module.exports = normalize;

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    var len = x*x + y*y + z*z
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len)
        out[0] = a[0] * len
        out[1] = a[1] * len
        out[2] = a[2] * len
    }
    return out
}
},{}],170:[function(require,module,exports){
module.exports = random;

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
    scale = scale || 1.0

    var r = Math.random() * 2.0 * Math.PI
    var z = (Math.random() * 2.0) - 1.0
    var zScale = Math.sqrt(1.0-z*z) * scale

    out[0] = Math.cos(r) * zScale
    out[1] = Math.sin(r) * zScale
    out[2] = z * scale
    return out
}
},{}],171:[function(require,module,exports){
module.exports = rotateX;

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c){
    var p = [], r=[]
    //Translate point to the origin
    p[0] = a[0] - b[0]
    p[1] = a[1] - b[1]
    p[2] = a[2] - b[2]

    //perform rotation
    r[0] = p[0]
    r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c)
    r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c)

    //translate to correct position
    out[0] = r[0] + b[0]
    out[1] = r[1] + b[1]
    out[2] = r[2] + b[2]

    return out
}
},{}],172:[function(require,module,exports){
module.exports = rotateY;

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c){
    var p = [], r=[]
    //Translate point to the origin
    p[0] = a[0] - b[0]
    p[1] = a[1] - b[1]
    p[2] = a[2] - b[2]
  
    //perform rotation
    r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c)
    r[1] = p[1]
    r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c)
  
    //translate to correct position
    out[0] = r[0] + b[0]
    out[1] = r[1] + b[1]
    out[2] = r[2] + b[2]
  
    return out
}
},{}],173:[function(require,module,exports){
module.exports = rotateZ;

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c){
    var p = [], r=[]
    //Translate point to the origin
    p[0] = a[0] - b[0]
    p[1] = a[1] - b[1]
    p[2] = a[2] - b[2]
  
    //perform rotation
    r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c)
    r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c)
    r[2] = p[2]
  
    //translate to correct position
    out[0] = r[0] + b[0]
    out[1] = r[1] + b[1]
    out[2] = r[2] + b[2]
  
    return out
}
},{}],174:[function(require,module,exports){
module.exports = scale;

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b
    out[1] = a[1] * b
    out[2] = a[2] * b
    return out
}
},{}],175:[function(require,module,exports){
module.exports = scaleAndAdd;

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale)
    out[1] = a[1] + (b[1] * scale)
    out[2] = a[2] + (b[2] * scale)
    return out
}
},{}],176:[function(require,module,exports){
module.exports = set;

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
    out[0] = x
    out[1] = y
    out[2] = z
    return out
}
},{}],177:[function(require,module,exports){
module.exports = squaredDistance;

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2]
    return x*x + y*y + z*z
}
},{}],178:[function(require,module,exports){
module.exports = squaredLength;

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    return x*x + y*y + z*z
}
},{}],179:[function(require,module,exports){
module.exports = subtract;

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    out[2] = a[2] - b[2]
    return out
}
},{}],180:[function(require,module,exports){
module.exports = transformMat3;

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
    var x = a[0], y = a[1], z = a[2]
    out[0] = x * m[0] + y * m[3] + z * m[6]
    out[1] = x * m[1] + y * m[4] + z * m[7]
    out[2] = x * m[2] + y * m[5] + z * m[8]
    return out
}
},{}],181:[function(require,module,exports){
module.exports = transformMat4;

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2],
        w = m[3] * x + m[7] * y + m[11] * z + m[15]
    w = w || 1.0
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w
    return out
}
},{}],182:[function(require,module,exports){
module.exports = transformQuat;

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx
    return out
}
},{}],183:[function(require,module,exports){
module.exports = add

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add (out, a, b) {
  out[0] = a[0] + b[0]
  out[1] = a[1] + b[1]
  out[2] = a[2] + b[2]
  out[3] = a[3] + b[3]
  return out
}

},{}],184:[function(require,module,exports){
module.exports = clone

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
function clone (a) {
  var out = new Float32Array(4)
  out[0] = a[0]
  out[1] = a[1]
  out[2] = a[2]
  out[3] = a[3]
  return out
}

},{}],185:[function(require,module,exports){
module.exports = copy

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy (out, a) {
  out[0] = a[0]
  out[1] = a[1]
  out[2] = a[2]
  out[3] = a[3]
  return out
}

},{}],186:[function(require,module,exports){
module.exports = create

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create () {
  var out = new Float32Array(4)
  out[0] = 0
  out[1] = 0
  out[2] = 0
  out[3] = 0
  return out
}

},{}],187:[function(require,module,exports){
module.exports = distance

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
function distance (a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1],
    z = b[2] - a[2],
    w = b[3] - a[3]
  return Math.sqrt(x * x + y * y + z * z + w * w)
}

},{}],188:[function(require,module,exports){
module.exports = divide

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function divide (out, a, b) {
  out[0] = a[0] / b[0]
  out[1] = a[1] / b[1]
  out[2] = a[2] / b[2]
  out[3] = a[3] / b[3]
  return out
}

},{}],189:[function(require,module,exports){
module.exports = dot

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot (a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
}

},{}],190:[function(require,module,exports){
module.exports = fromValues

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
function fromValues (x, y, z, w) {
  var out = new Float32Array(4)
  out[0] = x
  out[1] = y
  out[2] = z
  out[3] = w
  return out
}

},{}],191:[function(require,module,exports){
module.exports = {
  create: require('./create'),
  clone: require('./clone'),
  fromValues: require('./fromValues'),
  copy: require('./copy'),
  set: require('./set'),
  add: require('./add'),
  subtract: require('./subtract'),
  multiply: require('./multiply'),
  divide: require('./divide'),
  min: require('./min'),
  max: require('./max'),
  scale: require('./scale'),
  scaleAndAdd: require('./scaleAndAdd'),
  distance: require('./distance'),
  squaredDistance: require('./squaredDistance'),
  length: require('./length'),
  squaredLength: require('./squaredLength'),
  negate: require('./negate'),
  inverse: require('./inverse'),
  normalize: require('./normalize'),
  dot: require('./dot'),
  lerp: require('./lerp'),
  random: require('./random'),
  transformMat4: require('./transformMat4'),
  transformQuat: require('./transformQuat')
}

},{"./add":183,"./clone":184,"./copy":185,"./create":186,"./distance":187,"./divide":188,"./dot":189,"./fromValues":190,"./inverse":192,"./length":193,"./lerp":194,"./max":195,"./min":196,"./multiply":197,"./negate":198,"./normalize":199,"./random":200,"./scale":201,"./scaleAndAdd":202,"./set":203,"./squaredDistance":204,"./squaredLength":205,"./subtract":206,"./transformMat4":207,"./transformQuat":208}],192:[function(require,module,exports){
module.exports = inverse

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
function inverse (out, a) {
  out[0] = 1.0 / a[0]
  out[1] = 1.0 / a[1]
  out[2] = 1.0 / a[2]
  out[3] = 1.0 / a[3]
  return out
}

},{}],193:[function(require,module,exports){
module.exports = length

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length (a) {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3]
  return Math.sqrt(x * x + y * y + z * z + w * w)
}

},{}],194:[function(require,module,exports){
module.exports = lerp

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
function lerp (out, a, b, t) {
  var ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3]
  out[0] = ax + t * (b[0] - ax)
  out[1] = ay + t * (b[1] - ay)
  out[2] = az + t * (b[2] - az)
  out[3] = aw + t * (b[3] - aw)
  return out
}

},{}],195:[function(require,module,exports){
module.exports = max

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function max (out, a, b) {
  out[0] = Math.max(a[0], b[0])
  out[1] = Math.max(a[1], b[1])
  out[2] = Math.max(a[2], b[2])
  out[3] = Math.max(a[3], b[3])
  return out
}

},{}],196:[function(require,module,exports){
module.exports = min

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function min (out, a, b) {
  out[0] = Math.min(a[0], b[0])
  out[1] = Math.min(a[1], b[1])
  out[2] = Math.min(a[2], b[2])
  out[3] = Math.min(a[3], b[3])
  return out
}

},{}],197:[function(require,module,exports){
module.exports = multiply

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function multiply (out, a, b) {
  out[0] = a[0] * b[0]
  out[1] = a[1] * b[1]
  out[2] = a[2] * b[2]
  out[3] = a[3] * b[3]
  return out
}

},{}],198:[function(require,module,exports){
module.exports = negate

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
function negate (out, a) {
  out[0] = -a[0]
  out[1] = -a[1]
  out[2] = -a[2]
  out[3] = -a[3]
  return out
}

},{}],199:[function(require,module,exports){
module.exports = normalize

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize (out, a) {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3]
  var len = x * x + y * y + z * z + w * w
  if (len > 0) {
    len = 1 / Math.sqrt(len)
    out[0] = x * len
    out[1] = y * len
    out[2] = z * len
    out[3] = w * len
  }
  return out
}

},{}],200:[function(require,module,exports){
var vecNormalize = require('./normalize')
var vecScale = require('./scale')

module.exports = random

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
function random (out, scale) {
  scale = scale || 1.0

  // TODO: This is a pretty awful way of doing this. Find something better.
  out[0] = Math.random()
  out[1] = Math.random()
  out[2] = Math.random()
  out[3] = Math.random()
  vecNormalize(out, out)
  vecScale(out, out, scale)
  return out
}

},{"./normalize":199,"./scale":201}],201:[function(require,module,exports){
module.exports = scale

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale (out, a, b) {
  out[0] = a[0] * b
  out[1] = a[1] * b
  out[2] = a[2] * b
  out[3] = a[3] * b
  return out
}

},{}],202:[function(require,module,exports){
module.exports = scaleAndAdd

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
function scaleAndAdd (out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale)
  out[1] = a[1] + (b[1] * scale)
  out[2] = a[2] + (b[2] * scale)
  out[3] = a[3] + (b[3] * scale)
  return out
}

},{}],203:[function(require,module,exports){
module.exports = set

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set (out, x, y, z, w) {
  out[0] = x
  out[1] = y
  out[2] = z
  out[3] = w
  return out
}

},{}],204:[function(require,module,exports){
module.exports = squaredDistance

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance (a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1],
    z = b[2] - a[2],
    w = b[3] - a[3]
  return x * x + y * y + z * z + w * w
}

},{}],205:[function(require,module,exports){
module.exports = squaredLength

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength (a) {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3]
  return x * x + y * y + z * z + w * w
}

},{}],206:[function(require,module,exports){
module.exports = subtract

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function subtract (out, a, b) {
  out[0] = a[0] - b[0]
  out[1] = a[1] - b[1]
  out[2] = a[2] - b[2]
  out[3] = a[3] - b[3]
  return out
}

},{}],207:[function(require,module,exports){
module.exports = transformMat4

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4 (out, a, m) {
  var x = a[0], y = a[1], z = a[2], w = a[3]
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w
  return out
}

},{}],208:[function(require,module,exports){
module.exports = transformQuat

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
function transformQuat (out, a, q) {
  var x = a[0], y = a[1], z = a[2],
    qx = q[0], qy = q[1], qz = q[2], qw = q[3],

    // calculate quat * vec
    ix = qw * x + qy * z - qz * y,
    iy = qw * y + qz * x - qx * z,
    iz = qw * z + qx * y - qy * x,
    iw = -qx * x - qy * y - qz * z

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx
  out[3] = a[3]
  return out
}

},{}],209:[function(require,module,exports){
'use strict';

module.exports = {
  pathUtilities: require('./lib/utilities/path'),
  arrayUtilities: require('./lib/utilities/array'),
  fileSystemUtilities: require('./lib/utilities/fileSystem'),
  asynchronousUtilities: require('./lib/utilities/asynchronous')
};

},{"./lib/utilities/array":210,"./lib/utilities/asynchronous":211,"./lib/utilities/fileSystem":212,"./lib/utilities/path":213}],210:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function first(array) {
  return array[0];
}

function second(array) {
  return array[1];
}

function third(array) {
  return array[2];
}

function fourth(array) {
  return array[3];
}

function fifth(array) {
  return array[4];
}

function fifthLast(array) {
  return array[array.length - 5];
}

function fourthLast(array) {
  return array[array.length - 4];
}

function thirdLast(array) {
  return array[array.length - 3];
}

function secondLast(array) {
  return array[array.length - 2];
}

function last(array) {
  return array[array.length - 1];
}

function tail(array) {
  return array.slice(1);
}

function push(array1, array2) {
  Array.prototype.push.apply(array1, array2);
}

function unshift(array1, array2) {
  Array.prototype.unshift.apply(array1, array2);
}

function clear(array) {
  var start = 0;

  return array.splice(start);
}

function copy(array1, array2) {
  var start = 0,
      deleteCount = array2.length; ///

  splice(array1, start, deleteCount, array2);
}

function merge(array1, array2) {
  var start = array2.length,
      ///
  deleteCount = 0;

  splice(array1, start, deleteCount, array2);
}

function splice(array1, start, deleteCount) {
  var array2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  var args = [start, deleteCount].concat(_toConsumableArray(array2)),
      deletedItemsArray = Array.prototype.splice.apply(array1, args);

  return deletedItemsArray;
}

function replace(array, element, test) {
  var start = -1;

  var found = array.some(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      start = index; ///

      return true;
    }
  });

  if (found) {
    var deleteCount = 1;

    array.splice(start, deleteCount, element);
  }

  return found;
}

function filter(array, test) {
  var filteredElements = [];

  backwardsForEach(array, function (element, index) {
    var passed = test(element, index);

    if (!passed) {
      var start = index,
          ///
      deleteCount = 1,
          deletedElements = array.splice(start, deleteCount),
          firstDeletedElement = first(deletedElements);

      filteredElements.unshift(firstDeletedElement); ///
    }
  });

  return filteredElements;
}

function find(array, test) {
  var elements = [];

  forwardsForEach(array, function (element, index) {
    var passed = test(element, index);

    if (passed) {
      elements.push(element);
    }
  });

  return elements;
}

function prune(array, test) {
  var prunedElement = undefined;

  array.some(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      var start = index,
          ///
      deleteCount = 1,
          deletedElements = array.splice(start, deleteCount),
          firstDeletedElement = first(deletedElements);

      prunedElement = firstDeletedElement; ///

      return true;
    }
  });

  return prunedElement;
}

function patch(array, element, test) {
  var found = array.some(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      return true;
    }
  });

  if (found) {
    array.push(element);
  }

  return found;
}

function augment(array1, array2, test) {
  array2.forEach(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      array1.push(element);
    }
  });
}

function separate(array, array1, array2, test) {
  array.forEach(function (element, index) {
    var passed = test(element, index);

    passed ? array1.push(element) : array2.push(element);
  });
}

function forwardsSome(array, callback) {
  var arrayLength = array.length;

  for (var index = 0; index < arrayLength; index++) {
    var element = array[index],
        result = callback(element, index);

    if (result) {
      return true;
    }
  }

  return false;
}

function backwardsSome(array, callback) {
  var arrayLength = array.length;

  for (var index = arrayLength - 1; index >= 0; index--) {
    var element = array[index],
        result = callback(element, index);

    if (result) {
      return true;
    }
  }

  return false;
}

function forwardsForEach(array, callback) {
  var arrayLength = array.length;

  for (var index = 0; index < arrayLength; index++) {
    var element = array[index];

    callback(element, index);
  }
}

function backwardsForEach(array, callback) {
  var arrayLength = array.length;

  for (var index = arrayLength - 1; index >= 0; index--) {
    var element = array[index];

    callback(element, index);
  }
}

module.exports = {
  first: first,
  second: second,
  third: third,
  fourth: fourth,
  fifth: fifth,
  fifthLast: fifthLast,
  fourthLast: fourthLast,
  thirdLast: thirdLast,
  secondLast: secondLast,
  last: last,
  tail: tail,
  push: push,
  unshift: unshift,
  clear: clear,
  copy: copy,
  merge: merge,
  splice: splice,
  replace: replace,
  filter: filter,
  find: find,
  prune: prune,
  patch: patch,
  augment: augment,
  separate: separate,
  forwardsSome: forwardsSome,
  backwardsSome: backwardsSome,
  forwardsForEach: forwardsForEach,
  backwardsForEach: backwardsForEach
};

},{}],211:[function(require,module,exports){
'use strict';

function whilst(callback, done, context) {
  var count = -1;

  function next() {
    count++;

    var index = count,
        ///
    terminate = callback(next, done, context, index);

    if (terminate) {
      done();
    }
  }

  next();
}

function forEach(array, callback, done, context) {
  var length = array.length; ///

  var count = -1;

  function next() {
    count++;

    var terminate = count === length;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      element = array[index];

      callback(element, next, done, context, index);
    }
  }

  next();
}

function sequence(callbacks, done, context) {
  var length = callbacks.length; ///

  var count = -1;

  function next() {
    count++;

    var terminate = count === length;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      callback = callbacks[index];

      callback(next, done, context, index);
    }
  }

  next();
}

function eventually(callbacks, done, context) {
  var length = callbacks.length; ///

  var count = 0;

  function next() {
    count++;

    var terminate = count === length;

    if (terminate) {
      done();
    }
  }

  callbacks.forEach(function (callback, index) {
    callback(next, done, context, index);
  });
}

function repeatedly(callback, length, done, context) {
  var count = 0;

  function next() {
    count++;

    var terminate = count === length;

    if (terminate) {
      done();
    }
  }

  for (var index = 0; index < length; index++) {
    callback(next, done, context, index);
  }
}

function forwardsForEach(array, callback, done, context) {
  var length = array.length; ///

  var count = -1;

  function next() {
    count++;

    var terminate = count === length;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      element = array[index];

      callback(element, next, done, context, index);
    }
  }

  next();
}

function backwardsForEach(array, callback, done, context) {
  var length = array.length; ///

  var count = length;

  function next() {
    count--;

    var terminate = count === -1;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      element = array[index];

      callback(element, next, done, context, index);
    }
  }

  next();
}

module.exports = {
  whilst: whilst,
  forEach: forEach,
  sequence: sequence,
  eventually: eventually,
  repeatedly: repeatedly,
  forwardsForEach: forwardsForEach,
  backwardsForEach: backwardsForEach
};

},{}],212:[function(require,module,exports){
'use strict';

var fs = require('fs');

function entryExists(absolutePath) {
  return fs.existsSync(absolutePath);
}

function fileExists(absoluteFilePath) {
  var fileExists = false;

  var absolutePath = absoluteFilePath,
      ///
  entryExists = entryExists(absolutePath);

  if (entryExists) {
    var entryFile = isEntryFile(absolutePath);

    if (entryFile) {
      fileExists = true;
    }
  }

  return fileExists;
}

function isEntryFile(absolutePath) {
  var stat = fs.statSync(absolutePath),
      entryDirectory = stat.isDirectory(),
      entryFile = !entryDirectory;

  return entryFile;
}

function directoryExists(absoluteDirectoryPath) {
  var directoryExists = false;

  var absolutePath = absoluteDirectoryPath,
      ///
  entryExists = entryExists(absolutePath);

  if (entryExists) {
    var entryDirectory = isEntryDirectory(absolutePath);

    if (entryDirectory) {
      directoryExists = true;
    }
  }

  return directoryExists;
}

function isEntryDirectory(absolutePath) {
  var stat = fs.statSync(absolutePath),
      entryDirectory = stat.isDirectory();

  return entryDirectory;
}

function isDirectoryEmpty(absoluteDirectoryPath) {
  var subEntryNames = readDirectory(absoluteDirectoryPath),
      subEntryNamesLength = subEntryNames.length,
      directoryEmpty = subEntryNamesLength === 0;

  return directoryEmpty;
}

function readDirectory(absoluteDirectoryPath) {
  var subEntryNames = fs.readdirSync(absoluteDirectoryPath);

  return subEntryNames;
}

function readFile(absoluteFilePath) {
  var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'utf8';

  var options = {
    encoding: encoding
  },
      content = fs.readFileSync(absoluteFilePath, options);

  return content;
}

function writeFile(absoluteFilePath, content) {
  fs.writeFileSync(absoluteFilePath, content);
}

module.exports = {
  entryExists: entryExists,
  fileExists: fileExists,
  isEntryFile: isEntryFile,
  directoryExists: directoryExists,
  isEntryDirectory: isEntryDirectory,
  isDirectoryEmpty: isDirectoryEmpty,
  readDirectory: readDirectory,
  readFile: readFile,
  writeFile: writeFile
};

},{"fs":96}],213:[function(require,module,exports){
'use strict';

var array = require('./array');

var first = array.first,
    second = array.second,
    last = array.last;


function isPathRelativePath(path) {
  var position = path.search(/^\.{1,2}\//),
      pathRelativePath = position !== -1;

  return pathRelativePath;
}

function isPathAbsolutePath(path) {
  var pathRelativePath = isPathRelativePath(path),
      pathAbsolutePath = !pathRelativePath; ///

  return pathAbsolutePath;
}

function isPathTopmostDirectoryName(path) {
  var position = path.search(/^[^\/]+\/?$/),
      pathTopmostDirectoryName = position !== -1;

  return pathTopmostDirectoryName;
}

function isTopmostDirectoryNameContainedInPath(topmostDirectoryName, path) {
  topmostDirectoryName = topmostDirectoryName.replace(/\/$/, ''); ///

  var regExp = new RegExp('^' + topmostDirectoryName + '(?:\\/.+)?$'),
      position = path.search(regExp),
      topmostDirectoryNameContainedInFilePath = position !== -1;

  return topmostDirectoryNameContainedInFilePath;
}

function combinePaths(directoryPath, relativePath) {
  var absolutePath = null;

  var directoryPathSubEntryNames = directoryPath.split('/'),
      relativeFilePathSubEntryNames = relativePath.split('/');

  var firstRelativeFilePathSubEntryName = first(relativeFilePathSubEntryNames),
      lastDirectoryPathSubEntryName = void 0;

  if (firstRelativeFilePathSubEntryName === '.') {
    relativeFilePathSubEntryNames.shift();
  }

  firstRelativeFilePathSubEntryName = first(relativeFilePathSubEntryNames);
  lastDirectoryPathSubEntryName = last(directoryPathSubEntryNames);

  while (firstRelativeFilePathSubEntryName === '..' && lastDirectoryPathSubEntryName !== undefined) {
    relativeFilePathSubEntryNames.shift();
    directoryPathSubEntryNames.pop();

    firstRelativeFilePathSubEntryName = first(relativeFilePathSubEntryNames);
    lastDirectoryPathSubEntryName = last(directoryPathSubEntryNames);
  }

  if (lastDirectoryPathSubEntryName !== undefined) {
    var absoluteFilePathSubEntryNames = [].concat(directoryPathSubEntryNames).concat(relativeFilePathSubEntryNames);

    absolutePath = absoluteFilePathSubEntryNames.join('/');
  }

  return absolutePath;
}

function concatenatePaths(path1, path2) {
  path1 = path1.replace(/\/$/, ''); ///

  var combinedPath = path1 + '/' + path2;

  return combinedPath;
}

function bottommostNameFromPath(path) {
  var bottommostName = null;

  var matches = path.match(/^.+\/([^\/]+\/?)$/);

  if (matches !== null) {
    var secondMatch = second(matches);

    bottommostName = secondMatch; ///
  }

  return bottommostName;
}

function topmostDirectoryPathFromPath(path) {
  var matches = path.match(/^(.+)\/[^\/]+\/?$/),
      secondMatch = second(matches),
      directoryPath = secondMatch; ///

  return directoryPath;
}

function topmostDirectoryNameFromPath(path) {
  var topmostDirectoryName = null;

  var matches = path.match(/^([^\/]+)\/.+$/);

  if (matches !== null) {
    var secondMatch = second(matches);

    topmostDirectoryName = secondMatch; ///
  }

  return topmostDirectoryName;
}

function pathWithoutBottommostNameFromPath(path) {
  var pathWithoutBottommostName = null;

  var matches = path.match(/(^.+)\/[^\/]+\/?$/);

  if (matches !== null) {
    var secondMatch = second(matches);

    pathWithoutBottommostName = secondMatch; ///
  }

  return pathWithoutBottommostName;
}

function pathWithoutTopmostDirectoryNameFromPath(path) {
  var pathWithoutTopmostDirectoryName = null;

  var matches = path.match(/^[^\/]+\/(.+)$/);

  if (matches !== null) {
    var secondMatch = second(matches);

    pathWithoutTopmostDirectoryName = secondMatch;
  }

  return pathWithoutTopmostDirectoryName;
}

module.exports = {
  isPathRelativePath: isPathRelativePath,
  isPathAbsolutePath: isPathAbsolutePath,
  isPathTopmostDirectoryName: isPathTopmostDirectoryName,
  isTopmostDirectoryNameContainedInPath: isTopmostDirectoryNameContainedInPath,
  combinePaths: combinePaths,
  concatenatePaths: concatenatePaths,
  bottommostNameFromPath: bottommostNameFromPath,
  topmostDirectoryPathFromPath: topmostDirectoryPathFromPath,
  topmostDirectoryNameFromPath: topmostDirectoryNameFromPath,
  pathWithoutBottommostNameFromPath: pathWithoutBottommostNameFromPath,
  pathWithoutTopmostDirectoryNameFromPath: pathWithoutTopmostDirectoryNameFromPath
};

},{"./array":210}]},{},[22])(22)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJiaW4vY29uc3RhbnRzLmpzIiwiZXM2L2NhbnZhcy5qcyIsImVzNi9jYW52YXMvbWl4aW4vYnVmZmVyLmpzIiwiZXM2L2NhbnZhcy9taXhpbi9jb2xvdXIuanMiLCJlczYvY2FudmFzL21peGluL2RlcHRoLmpzIiwiZXM2L2NhbnZhcy9taXhpbi9tYXRyaXguanMiLCJlczYvY2FudmFzL21peGluL3Byb2dyYW0uanMiLCJlczYvY2FudmFzL21peGluL3NoYWRlci5qcyIsImVzNi9jYW52YXMvbWl4aW4vdGV4dHVyZS5qcyIsImVzNi9jb25zdGFudHMuanMiLCJlczYvZWxlbWVudC5qcyIsImVzNi9lbGVtZW50L2NhbWVyYS5qcyIsImVzNi9lbGVtZW50L2NhbWVyYS9rZXlFdmVudHMuanMiLCJlczYvZWxlbWVudC9jYW1lcmEvbW91c2VFdmVudHMuanMiLCJlczYvZWxlbWVudC9jYW1lcmEvcGFuLmpzIiwiZXM2L2VsZW1lbnQvY2FtZXJhL3RpbHQuanMiLCJlczYvZWxlbWVudC9jYW1lcmEvem9vbS5qcyIsImVzNi9lbGVtZW50L2NhbnZhcy5qcyIsImVzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyIsImVzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyIsImVzNi9lbGVtZW50L3NjZW5lLmpzIiwiZXM2L2V4YW1wbGVzLmpzIiwiZXM2L2V4YW1wbGVzL2NvbW1vbi9jb2xvdXJlZC9jdWJvaWQuanMiLCJlczYvZXhhbXBsZXMvY29tbW9uL2NvbG91cmVkL2N5bGluZGVyLmpzIiwiZXM2L2V4YW1wbGVzL2NvbW1vbi9jb2xvdXJlZC9wbGFuZS5qcyIsImVzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkLmpzIiwiZXM2L2V4YW1wbGVzL2NvbW1vbi9jeWxpbmRlci5qcyIsImVzNi9leGFtcGxlcy9jb21tb24vcGxhbmUuanMiLCJlczYvZXhhbXBsZXMvY29tbW9uL3RleHR1cmVkL2N1Ym9pZC5qcyIsImVzNi9leGFtcGxlcy9jb21tb24vdGV4dHVyZWQvY3lsaW5kZXIuanMiLCJlczYvZXhhbXBsZXMvY29tbW9uL3RleHR1cmVkL3BsYW5lLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvYmVkcm9vbS5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L2xvd2VyLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvbWFpbi5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3JhaWxpbmcuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9yYWlsaW5nL3RvcFJhaWwuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9yYWlsaW5nL3VwcmlnaHQuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9yYWlsaW5nL3VwcmlnaHRzLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvc2VjdGlvbi5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3NlY3Rpb24vZWRnZS5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3NlY3Rpb24vZWRnZS9sb25nLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvc2VjdGlvbi9lZGdlL3Nob3J0LmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvc2VjdGlvbi9vcGVuTWVzaC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL2JhY2tXYWxsLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci9mb3J0eUZvb3QuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL2Zyb250V2FsbC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvcm9vZi5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvc2lkZVdhbGxBLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci9zaWRlV2FsbEIuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL3R3ZW50eUZvb3QuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL3VuZGVyc2lkZS5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9mbG9vci9maXJzdC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9mbG9vci9zZWNvbmQuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvZmxvb3IvdGhpcmQuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvZm91bmRhdGlvbnMuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvZm91bmRhdGlvbnMvY29uY3JldGVTbGFiLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2ZyYW1lLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2ZyYW1lL3N0ZWVsU2VjdGlvbi5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9yb29mR2FyZGVuLmpzIiwiZXM2L2V4YW1wbGVzL3NoYXBlcy5qcyIsImVzNi9leGFtcGxlcy9zaGFwZXMvY29tcG91bmRlZC5qcyIsImVzNi9qaWdnbGUuanMiLCJlczYvbWF0aHMvbWF0NC5qcyIsImVzNi9tYXRocy92ZWMyLmpzIiwiZXM2L21hdGhzL3ZlYzMuanMiLCJlczYvbWF0aHMvdmVjNC5qcyIsImVzNi9tYXRyaXguanMiLCJlczYvbWF0cml4L25vcm1hbC5qcyIsImVzNi9tYXRyaXgvb2Zmc2V0LmpzIiwiZXM2L21hdHJpeC9wb3NpdGlvbi5qcyIsImVzNi9tYXRyaXgvcHJvamVjdGlvbi5qcyIsImVzNi9tYXRyaXgvcm90YXRpb24uanMiLCJlczYvcmVhY3QuanMiLCJlczYvcmVuZGVyZXIuanMiLCJlczYvcmVuZGVyZXIvY29sb3VyLmpzIiwiZXM2L3JlbmRlcmVyL2xvY2F0aW9ucy9hdHRyaWJ1dGUuanMiLCJlczYvcmVuZGVyZXIvbG9jYXRpb25zL2NvbG91ci9hdHRyaWJ1dGUuanMiLCJlczYvcmVuZGVyZXIvbG9jYXRpb25zL2NvbG91ci91bmlmb3JtLmpzIiwiZXM2L3JlbmRlcmVyL2xvY2F0aW9ucy90ZXh0dXJlL2F0dHJpYnV0ZS5qcyIsImVzNi9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtLmpzIiwiZXM2L3JlbmRlcmVyL2xvY2F0aW9ucy91bmlmb3JtLmpzIiwiZXM2L3JlbmRlcmVyL3NvdXJjZS9jb2xvdXIvZnJhZ21lbnRTaGFkZXIuanMiLCJlczYvcmVuZGVyZXIvc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXIuanMiLCJlczYvcmVuZGVyZXIvc291cmNlL2xpZ2h0aW5nLmpzIiwiZXM2L3JlbmRlcmVyL3NvdXJjZS9wb3NpdGlvbi5qcyIsImVzNi9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlci5qcyIsImVzNi9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXIuanMiLCJlczYvcmVuZGVyZXIvdGV4dHVyZS5qcyIsImVzNi91dGlsaXRpZXMvYXJyYXkuanMiLCJlczYvdXRpbGl0aWVzL2RvbS5qcyIsImVzNi91dGlsaXRpZXMvaW1hZ2UuanMiLCJlczYvdXRpbGl0aWVzL2ltYWdlTWFwLmpzIiwiZXM2L3V0aWxpdGllcy90cmFuc2Zvcm0uanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvYWRqb2ludC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvY29weS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2RldGVybWluYW50LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvZnJvbVF1YXQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9mcm9tUm90YXRpb25UcmFuc2xhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2ZydXN0dW0uanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9pZGVudGl0eS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvaW52ZXJ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvbG9va0F0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9vcnRoby5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3BlcnNwZWN0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXcuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGVYLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlWS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZVouanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3N0ci5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3RyYW5zbGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3RyYW5zcG9zZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL2FkZC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvY29weS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL2Nyb3NzLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvZGlzdGFuY2UuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9kaXZpZGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9kb3QuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9mb3JFYWNoLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvZnJvbVZhbHVlcy5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvbGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvbGVycC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL21heC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL21pbi5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL211bHRpcGx5LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvbmVnYXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvbm9ybWFsaXplLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvcmFuZG9tLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvc2NhbGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9zY2FsZUFuZEFkZC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL3NldC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL3NxdWFyZWREaXN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL3NxdWFyZWRMZW5ndGguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9zdWJ0cmFjdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL3RyYW5zZm9ybU1hdDIuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi90cmFuc2Zvcm1NYXQyZC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL3RyYW5zZm9ybU1hdDMuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi90cmFuc2Zvcm1NYXQ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvYWRkLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvYW5nbGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2NvcHkuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9jcm9zcy5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2Rpc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvZGl2aWRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvZG90LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvZm9yRWFjaC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2Zyb21WYWx1ZXMuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2ludmVyc2UuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9sZW5ndGguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9sZXJwLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvbWF4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvbWluLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9uZWdhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9ub3JtYWxpemUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9yYW5kb20uanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9yb3RhdGVYLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvcm90YXRlWS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3JvdGF0ZVouanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3NjYWxlQW5kQWRkLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvc2V0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvc3F1YXJlZERpc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvc3F1YXJlZExlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3N1YnRyYWN0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvdHJhbnNmb3JtTWF0My5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3RyYW5zZm9ybU1hdDQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy90cmFuc2Zvcm1RdWF0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvYWRkLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9jb3B5LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvZGlzdGFuY2UuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9kaXZpZGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9kb3QuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9mcm9tVmFsdWVzLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9pbnZlcnNlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvbGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvbGVycC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L21heC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L21pbi5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L211bHRpcGx5LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvbmVnYXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvbm9ybWFsaXplLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvcmFuZG9tLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvc2NhbGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9zY2FsZUFuZEFkZC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L3NldC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L3NxdWFyZWREaXN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L3NxdWFyZWRMZW5ndGguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9zdWJ0cmFjdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L3RyYW5zZm9ybU1hdDQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC90cmFuc2Zvcm1RdWF0LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9hc3luY2hyb25vdXMuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9wYXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7Ozs7OztBQUVBLElBQU0sZUFBZSxRQUFRLHdCQUFSLENBQXJCO0FBQUEsSUFDTSxlQUFlLFFBQVEsd0JBQVIsQ0FEckI7QUFBQSxJQUVNLGNBQWMsUUFBUSx1QkFBUixDQUZwQjtBQUFBLElBR00sY0FBYyxRQUFRLHVCQUFSLENBSHBCO0FBQUEsSUFJTSxjQUFjLFFBQVEsdUJBQVIsQ0FKcEI7QUFBQSxJQUtNLGNBQWMsUUFBUSx1QkFBUixDQUxwQjtBQUFBLElBTU0sYUFBYSxRQUFRLHNCQUFSLENBTm5CO0FBQUEsSUFPTSxlQUFlLFFBQVEsaUJBQVIsQ0FQckI7O0lBU1Esc0IsR0FBMkIsWSxDQUEzQixzQjs7O0FBRVIsSUFBTSxnQkFBZ0IsQ0FBdEI7O0lBRU0sTTtBQUNKLG9CQUFpQztBQUFBLFFBQXJCLFFBQXFCLHVFQUFWLFFBQVU7O0FBQUE7O0FBQy9CLFFBQU0sYUFBYSx1QkFBdUIsUUFBdkIsQ0FBbkI7QUFBQSxRQUNNLFVBQVUsV0FBVyxVQUFYLENBQXNCLE9BQXRCLENBRGhCOztBQUdBLFFBQUksQ0FBQyxPQUFMLEVBQWM7QUFDWixZQUFNLElBQUksS0FBSixxQ0FBTjtBQUNEOztBQUVELFNBQUssT0FBTCxHQUFlLE9BQWY7O0FBRUEsU0FBSyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUssT0FBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUssVUFBWjtBQUNEOzs7K0JBRVU7QUFBRSxhQUFPLEtBQUssVUFBTCxDQUFnQixLQUF2QjtBQUErQjs7O2dDQUVoQztBQUFFLGFBQU8sS0FBSyxVQUFMLENBQWdCLE1BQXZCO0FBQWdDOzs7cUNBRTdCO0FBQUUsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsV0FBdkI7QUFBcUM7OztzQ0FFdEM7QUFBRSxhQUFPLEtBQUssVUFBTCxDQUFnQixZQUF2QjtBQUFzQzs7O3VDQUV2QyxPLEVBQVMsSSxFQUFNO0FBQUUsYUFBTyxLQUFLLE9BQUwsQ0FBYSxrQkFBYixDQUFnQyxPQUFoQyxFQUF5QyxJQUF6QyxDQUFQO0FBQXdEOzs7eUNBRXZFLE8sRUFBUyxJLEVBQU07QUFBRSxhQUFPLEtBQUssT0FBTCxDQUFhLGlCQUFiLENBQStCLE9BQS9CLEVBQXdDLElBQXhDLENBQVA7QUFBdUQ7Ozs2QkFFcEYsSyxFQUFPO0FBQUUsV0FBSyxVQUFMLENBQWdCLFlBQWhCLENBQTZCLE9BQTdCLEVBQXNDLEtBQXRDO0FBQStDOzs7OEJBRXZELE0sRUFBUTtBQUFFLFdBQUssVUFBTCxDQUFnQixZQUFoQixDQUE2QixRQUE3QixFQUF1QyxNQUF2QztBQUFpRDs7O2dDQUV6RCxDLEVBQUcsQyxFQUFHLEssRUFBTyxNLEVBQVE7QUFBRSxXQUFLLE9BQUwsQ0FBYSxRQUFiLENBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLEtBQTVCLEVBQW1DLE1BQW5DO0FBQTZDOzs7bURBRWpELGUsRUFBaUIsWSxFQUFjO0FBQUUsV0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixlQUF2QixFQUF3QyxZQUF4QztBQUF3RDs7OzRCQUVoSDtBQUNOLFdBQUssVUFBTDtBQUNBLFdBQUssV0FBTDtBQUNBLFdBQUssZ0JBQUw7QUFDQSxXQUFLLGlCQUFMO0FBQ0Q7OzsyQkFFTSxLLEVBQU8sTSxFQUFRO0FBQ3BCLFdBQUssUUFBTCxDQUFjLEtBQWQ7QUFDQSxXQUFLLFNBQUwsQ0FBZSxNQUFmO0FBQ0EsV0FBSyxXQUFMLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLEtBQXZCLEVBQThCLE1BQTlCO0FBQ0Q7OzsyQkFFTSxNLEVBQVEsWSxFQUFjLGMsRUFBZ0IsYyxFQUFnQixnQixFQUFrQixZLEVBQWM7QUFDM0YsVUFBTSw4QkFBOEIsT0FBTyw4QkFBUCxFQUFwQztBQUFBLFVBQ00sZ0NBQWdDLE9BQU8sZ0NBQVAsRUFEdEM7QUFBQSxVQUVNLGdDQUFnQyxPQUFPLGdDQUFQLEVBRnRDO0FBQUEsVUFHTSxrQ0FBa0MsT0FBTyxrQ0FBUCxFQUh4QztBQUFBLFVBSU0sOEJBQThCLE9BQU8sOEJBQVAsRUFKcEM7QUFBQSxVQUtNLFNBQVMsSUFMZixDQUQyRixDQU1yRTs7QUFFdEIsbUJBQWEsS0FBYixDQUFtQiwyQkFBbkIsRUFBZ0QsTUFBaEQ7QUFDQSxxQkFBZSxLQUFmLENBQXFCLDZCQUFyQixFQUFvRCxNQUFwRDtBQUNBLHFCQUFlLEtBQWYsQ0FBcUIsNkJBQXJCLEVBQW9ELE1BQXBEO0FBQ0EsdUJBQWlCLEtBQWpCLENBQXVCLCtCQUF2QixFQUF3RCxNQUF4RDtBQUNBLG1CQUFhLEtBQWIsQ0FBbUIsMkJBQW5CLEVBQWdELE1BQWhEOztBQUVBLFVBQU0sUUFBUSxPQUFPLFFBQVAsRUFBZDs7QUFFQSxXQUFLLFlBQUwsQ0FBa0IsS0FBbEI7QUFDRDs7O2lDQUVZLEssRUFBK0I7QUFBQSxVQUF4QixNQUF3Qix1RUFBZixhQUFlO0FBQUEscUJBQ0osS0FBSyxPQUREO0FBQUEsVUFDbEMsU0FEa0MsWUFDbEMsU0FEa0M7QUFBQSxVQUN2QixjQUR1QixZQUN2QixjQUR1QjtBQUFBLFVBRXBDLElBRm9DLEdBRTdCLFNBRjZCO0FBQUEsVUFHcEMsSUFIb0MsR0FHN0IsY0FINkI7OztBQUsxQyxXQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLElBQTFCLEVBQWdDLEtBQWhDLEVBQXVDLElBQXZDLEVBQTZDLE1BQTdDO0FBQ0Q7Ozs7OztBQUdILE9BQU8sTUFBUCxDQUFjLE9BQU8sU0FBckIsRUFBZ0MsWUFBaEM7QUFDQSxPQUFPLE1BQVAsQ0FBYyxPQUFPLFNBQXJCLEVBQWdDLFlBQWhDO0FBQ0EsT0FBTyxNQUFQLENBQWMsT0FBTyxTQUFyQixFQUFnQyxXQUFoQztBQUNBLE9BQU8sTUFBUCxDQUFjLE9BQU8sU0FBckIsRUFBZ0MsV0FBaEM7QUFDQSxPQUFPLE1BQVAsQ0FBYyxPQUFPLFNBQXJCLEVBQWdDLFdBQWhDO0FBQ0EsT0FBTyxNQUFQLENBQWMsT0FBTyxTQUFyQixFQUFnQyxXQUFoQztBQUNBLE9BQU8sTUFBUCxDQUFjLE9BQU8sU0FBckIsRUFBZ0MsVUFBaEM7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLE1BQWpCOzs7QUMxR0E7O0FBRUEsU0FBUyxtQkFBVCxDQUE2QixJQUE3QixFQUFtQztBQUFBLGlCQUNhLEtBQUssT0FEbEI7QUFBQSxNQUN6QixvQkFEeUIsWUFDekIsb0JBRHlCO0FBQUEsTUFDSCxXQURHLFlBQ0gsV0FERztBQUFBLE1BRTNCLE1BRjJCLEdBRWxCLG9CQUZrQjtBQUFBLE1BRzNCLEtBSDJCLEdBR25CLFdBSG1CO0FBQUEsTUFJM0IsV0FKMkIsR0FJYixJQUFJLFdBQUosQ0FBZ0IsSUFBaEIsQ0FKYTtBQUFBLE1BSzNCLGFBTDJCLEdBS1gsS0FBSyxPQUFMLENBQWEsWUFBYixFQUxXOzs7QUFPakMsT0FBSyxPQUFMLENBQWEsVUFBYixDQUF3QixNQUF4QixFQUFnQyxhQUFoQzs7QUFFQSxPQUFLLE9BQUwsQ0FBYSxVQUFiLENBQXdCLE1BQXhCLEVBQWdDLFdBQWhDLEVBQTZDLEtBQTdDOztBQUVBLFNBQU8sYUFBUDtBQUNEOztBQUVELFNBQVMsaUJBQVQsQ0FBMkIsYUFBM0IsRUFBMEM7QUFDbEMsTUFBRSxvQkFBRixHQUEyQixLQUFLLE9BQWhDLENBQUUsb0JBQUY7QUFBQSxNQUNBLE1BREEsR0FDUyxvQkFEVDs7O0FBR04sT0FBSyxPQUFMLENBQWEsVUFBYixDQUF3QixNQUF4QixFQUFnQyxhQUFoQztBQUNEOztBQUVELFNBQVMsWUFBVCxDQUFzQixJQUF0QixFQUE0QjtBQUFBLGtCQUNZLEtBQUssT0FEakI7QUFBQSxNQUNsQixZQURrQixhQUNsQixZQURrQjtBQUFBLE1BQ0osV0FESSxhQUNKLFdBREk7QUFBQSxNQUVwQixNQUZvQixHQUVYLFlBRlc7QUFBQSxNQUdwQixLQUhvQixHQUdaLFdBSFk7QUFBQSxNQUlwQixNQUpvQixHQUlYLEtBQUssT0FBTCxDQUFhLFlBQWIsRUFKVztBQUFBLE1BS3BCLFlBTG9CLEdBS0wsSUFBSSxZQUFKLENBQWlCLElBQWpCLENBTEs7OztBQU8xQixPQUFLLE9BQUwsQ0FBYSxVQUFiLENBQXdCLE1BQXhCLEVBQWdDLE1BQWhDOztBQUVBLE9BQUssT0FBTCxDQUFhLFVBQWIsQ0FBd0IsTUFBeEIsRUFBZ0MsWUFBaEMsRUFBOEMsS0FBOUM7O0FBRUEsU0FBTyxNQUFQO0FBQ0Q7O0FBRUQsU0FBUyxVQUFULENBQW9CLE1BQXBCLEVBQTRCLGlCQUE1QixFQUErQyxVQUEvQyxFQUEyRDtBQUFBLGtCQUN6QixLQUFLLE9BRG9CO0FBQUEsTUFDakQsWUFEaUQsYUFDakQsWUFEaUQ7QUFBQSxNQUNuQyxLQURtQyxhQUNuQyxLQURtQztBQUFBLE1BRW5ELE1BRm1ELEdBRTFDLFlBRjBDO0FBQUEsTUFHbkQsSUFIbUQsR0FHNUMsS0FINEM7QUFBQSxNQUluRCxTQUptRCxHQUl2QyxLQUp1QztBQUFBLE1BS25ELE1BTG1ELEdBSzFDLENBTDBDO0FBQUEsTUFNbkQsTUFObUQsR0FNMUMsQ0FOMEM7OztBQVF6RCxPQUFLLE9BQUwsQ0FBYSxVQUFiLENBQXdCLE1BQXhCLEVBQWdDLE1BQWhDOztBQUVBLE9BQUssT0FBTCxDQUFhLG1CQUFiLENBQWlDLGlCQUFqQyxFQUFvRCxVQUFwRCxFQUFnRSxJQUFoRSxFQUFzRSxTQUF0RSxFQUFpRixNQUFqRixFQUF5RixNQUF6Rjs7QUFFQSxPQUFLLE9BQUwsQ0FBYSx1QkFBYixDQUFxQyxpQkFBckM7QUFDRDs7QUFFRCxPQUFPLE9BQVAsR0FBaUI7QUFDZix1QkFBcUIsbUJBRE47QUFFZixxQkFBbUIsaUJBRko7QUFHZixnQkFBYyxZQUhDO0FBSWYsY0FBWTtBQUpHLENBQWpCOzs7QUNwREE7O0FBRUEsSUFBTSxXQUFXLEdBQWpCO0FBQUEsSUFDTSxXQUFXLEdBRGpCO0FBQUEsSUFFTSxXQUFXLEdBRmpCO0FBQUEsSUFHTSxXQUFXLEdBSGpCOztBQUtBLFNBQVMsV0FBVCxHQUE2RTtBQUFBLFVBQXhELENBQXdELHVFQUFwRCxRQUFvRDtBQUFBLFVBQTFDLENBQTBDLHVFQUF0QyxRQUFzQztBQUFBLFVBQTVCLENBQTRCLHVFQUF4QixRQUF3QjtBQUFBLFVBQWQsQ0FBYyx1RUFBVixRQUFVO0FBQUUsV0FBSyxPQUFMLENBQWEsVUFBYixDQUF3QixDQUF4QixFQUEyQixDQUEzQixFQUE4QixDQUE5QixFQUFpQyxDQUFqQztBQUFzQzs7QUFFckgsU0FBUyxpQkFBVCxHQUE2QjtBQUNyQixVQUFFLGdCQUFGLEdBQXVCLEtBQUssT0FBNUIsQ0FBRSxnQkFBRjtBQUFBLFVBQ0EsSUFEQSxHQUNPLGdCQURQOzs7QUFHTixXQUFLLE9BQUwsQ0FBYSxLQUFiLENBQW1CLElBQW5CO0FBQ0Q7O0FBRUQsT0FBTyxPQUFQLEdBQWlCO0FBQ2YsbUJBQWEsV0FERTtBQUVmLHlCQUFtQjtBQUZKLENBQWpCOzs7QUNoQkE7O0FBRUEsSUFBTSxlQUFlLEdBQXJCOztBQUVBLFNBQVMsVUFBVCxHQUEwQztBQUFBLE1BQXRCLEtBQXNCLHVFQUFkLFlBQWM7QUFBRSxPQUFLLE9BQUwsQ0FBYSxVQUFiLENBQXdCLEtBQXhCO0FBQWlDOztBQUU3RSxTQUFTLGdCQUFULEdBQTRCO0FBQ3BCLE1BQUUsZ0JBQUYsR0FBdUIsS0FBSyxPQUE1QixDQUFFLGdCQUFGO0FBQUEsTUFDQSxJQURBLEdBQ08sZ0JBRFA7OztBQUdOLE9BQUssT0FBTCxDQUFhLEtBQWIsQ0FBbUIsSUFBbkI7QUFDRDs7QUFFRCxTQUFTLGtCQUFULEdBQThCO0FBQ3RCLE1BQUUsVUFBRixHQUFpQixLQUFLLE9BQXRCLENBQUUsVUFBRjtBQUFBLE1BQ0EsR0FEQSxHQUNNLFVBRE47OztBQUdOLE9BQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsR0FBcEI7QUFDRDs7QUFFRCxTQUFTLG1CQUFULEdBQStCO0FBQ3ZCLE1BQUUsTUFBRixHQUFhLEtBQUssT0FBbEIsQ0FBRSxNQUFGO0FBQUEsTUFDQSxJQURBLEdBQ08sTUFEUDs7O0FBR04sT0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixJQUF2QjtBQUNEOztBQUVELE9BQU8sT0FBUCxHQUFpQjtBQUNmLGNBQVksVUFERztBQUVmLG9CQUFrQixnQkFGSDtBQUdmLHNCQUFvQixrQkFITDtBQUlmLHVCQUFxQjtBQUpOLENBQWpCOzs7QUMzQkE7O0FBRUEsU0FBUyxXQUFULENBQXFCLGVBQXJCLEVBQXNDLE1BQXRDLEVBQThDO0FBQzVDLE1BQU0sWUFBWSxLQUFsQixDQUQ0QyxDQUNsQjs7QUFFMUIsT0FBSyxPQUFMLENBQWEsZ0JBQWIsQ0FBOEIsZUFBOUIsRUFBK0MsU0FBL0MsRUFBMEQsTUFBMUQ7QUFDRDs7QUFFRCxPQUFPLE9BQVAsR0FBaUI7QUFDZixlQUFhO0FBREUsQ0FBakI7OztBQ1JBOztBQUVBLFNBQVMsYUFBVCxDQUF1QixZQUF2QixFQUFxQyxjQUFyQyxFQUFxRDtBQUNuRCxNQUFNLFVBQVUsS0FBSyxPQUFMLENBQWEsYUFBYixFQUFoQjs7QUFFQSxPQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLE9BQTFCLEVBQW1DLFlBQW5DO0FBQ0EsT0FBSyxPQUFMLENBQWEsWUFBYixDQUEwQixPQUExQixFQUFtQyxjQUFuQzs7QUFFQSxPQUFLLE9BQUwsQ0FBYSxXQUFiLENBQXlCLE9BQXpCOztBQUVBLFNBQU8sT0FBUDtBQUNEOztBQUVELFNBQVMsVUFBVCxDQUFvQixPQUFwQixFQUE2QjtBQUMzQixPQUFLLE9BQUwsQ0FBYSxVQUFiLENBQXdCLE9BQXhCO0FBQ0Q7O0FBRUQsT0FBTyxPQUFQLEdBQWlCO0FBQ2YsaUJBQWUsYUFEQTtBQUVmLGNBQVk7QUFGRyxDQUFqQjs7O0FDakJBOztBQUVBLFNBQVMsWUFBVCxDQUFzQixJQUF0QixFQUE0QixZQUE1QixFQUEwQztBQUNsQyxNQUFFLGNBQUYsR0FBcUIsS0FBSyxPQUExQixDQUFFLGNBQUY7QUFBQSxNQUNBLEtBREEsR0FDUSxjQURSO0FBQUEsTUFFQSxNQUZBLEdBRVMsS0FBSyxPQUFMLENBQWEsWUFBYixDQUEwQixJQUExQixDQUZUOzs7QUFJTixPQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLE1BQTFCLEVBQWtDLFlBQWxDOztBQUVBLE9BQUssT0FBTCxDQUFhLGFBQWIsQ0FBMkIsTUFBM0I7O0FBRUEsTUFBTSxnQkFBZ0IsS0FBSyxPQUFMLENBQWEsa0JBQWIsQ0FBZ0MsTUFBaEMsRUFBd0MsS0FBeEMsQ0FBdEI7O0FBRUEsTUFBSSxDQUFDLGFBQUwsRUFBb0I7QUFDbEIsVUFBTSxJQUFJLEtBQUosZ0NBQU47QUFDRDs7QUFFRCxTQUFPLE1BQVA7QUFDRDs7QUFFRCxTQUFTLGtCQUFULENBQTRCLGtCQUE1QixFQUFnRCxNQUFoRCxFQUF3RDtBQUNoRCxNQUFFLGFBQUYsR0FBb0IsS0FBSyxPQUF6QixDQUFFLGFBQUY7QUFBQSxNQUNBLElBREEsR0FDTyxhQURQO0FBQUEsTUFFQSxZQUZBLEdBRWUsS0FBSyxZQUFMLENBQWtCLElBQWxCLEVBQXdCLGtCQUF4QixDQUZmOzs7QUFJTixTQUFPLFlBQVA7QUFDRDs7QUFFRCxTQUFTLG9CQUFULENBQThCLG9CQUE5QixFQUFvRCxNQUFwRCxFQUE0RDtBQUNwRCxNQUFFLGVBQUYsR0FBc0IsS0FBSyxPQUEzQixDQUFFLGVBQUY7QUFBQSxNQUNBLElBREEsR0FDTyxlQURQO0FBQUEsTUFFQSxZQUZBLEdBRWUsS0FBSyxZQUFMLENBQWtCLElBQWxCLEVBQXdCLG9CQUF4QixDQUZmOzs7QUFJTixTQUFPLFlBQVA7QUFDRDs7QUFFRCxPQUFPLE9BQVAsR0FBaUI7QUFDZixnQkFBYyxZQURDO0FBRWYsc0JBQW9CLGtCQUZMO0FBR2Ysd0JBQXNCO0FBSFAsQ0FBakI7OztBQ3BDQTs7QUFFQSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEI7QUFBQSxpQkFDZ0IsS0FBSyxPQURyQjtBQUFBLE1BQ3BCLFVBRG9CLFlBQ3BCLFVBRG9CO0FBQUEsTUFDUixJQURRLFlBQ1IsSUFEUTtBQUFBLE1BQ0YsYUFERSxZQUNGLGFBREU7QUFBQSxNQUV0QixLQUZzQixHQUVkLENBRmM7QUFBQSxNQUd0QixjQUhzQixHQUdMLElBSEs7QUFBQSxNQUl0QixNQUpzQixHQUliLElBSmE7QUFBQSxNQUt0QixJQUxzQixHQUtmLGFBTGU7QUFBQSxNQU10QixPQU5zQixHQU1aLEtBQUssT0FBTCxDQUFhLGFBQWIsRUFOWTs7O0FBUTVCLE9BQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsVUFBekIsRUFBcUMsT0FBckM7O0FBRUEsT0FBSyxPQUFMLENBQWEsVUFBYixDQUF3QixVQUF4QixFQUFvQyxLQUFwQyxFQUEyQyxjQUEzQyxFQUEyRCxNQUEzRCxFQUFtRSxJQUFuRSxFQUF5RSxLQUF6RTs7QUFFQSxPQUFLLE9BQUwsQ0FBYSxjQUFiLENBQTRCLFVBQTVCO0FBQ0Q7O0FBRUQsU0FBUyxlQUFULENBQXlCLE1BQXpCLEVBQWlDO0FBQUUsT0FBSyxPQUFMLENBQWEsYUFBYixDQUEyQixNQUEzQjtBQUFxQzs7QUFFeEUsT0FBTyxPQUFQLEdBQWlCO0FBQ2YsaUJBQWUsYUFEQTtBQUVmLG1CQUFpQjtBQUZGLENBQWpCOzs7QUNuQkE7O0FBRUEsSUFBTSxpQkFBaUIsRUFBdkI7QUFBQSxJQUNNLG1CQUFtQixFQUR6QjtBQUFBLElBRU0scUJBQXFCLEtBQUssRUFBTCxHQUFVLEdBRnJDO0FBQUEsSUFHTSxnQkFBZ0IsS0FBSyxrQkFIM0I7QUFBQSxJQUlNLFNBQVMsQ0FKZjtBQUFBLElBS00sUUFBUSxJQUxkO0FBQUEsSUFNTSxXQUFXLFVBTmpCO0FBQUEsSUFPTSxhQUFhLFlBUG5CO0FBQUEsSUFRTSxhQUFhLFlBUm5CO0FBQUEsSUFTTSxjQUFjLGFBVHBCO0FBQUEsSUFVTSxnQkFBZ0IsRUFWdEI7QUFBQSxJQVdNLGlCQUFpQixFQVh2QjtBQUFBLElBWU0sZ0JBQWdCLElBWnRCO0FBQUEsSUFhTSxrQkFBa0IsSUFieEI7QUFBQSxJQWNNLDJCQUEyQixJQWRqQztBQUFBLElBZU0sNEJBQTRCLENBQUUsQ0FBRixFQUFLLENBQUwsQ0FmbEM7QUFBQSxJQWdCTSw0QkFBNEIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxDQWhCbEM7O0FBa0JBLE9BQU8sT0FBUCxHQUFpQjtBQUNmLFNBQU8sS0FEUTtBQUVmLFVBQVEsTUFGTztBQUdmLFlBQVUsUUFISztBQUlmLGNBQVksVUFKRztBQUtmLGNBQVksVUFMRztBQU1mLGVBQWEsV0FORTtBQU9mLGlCQUFlLGFBUEE7QUFRZixrQkFBZ0IsY0FSRDtBQVNmLGlCQUFlLGFBVEE7QUFVZixrQkFBZ0IsY0FWRDtBQVdmLG9CQUFrQixnQkFYSDtBQVlmLHNCQUFvQixrQkFaTDtBQWFmLGlCQUFlLGFBYkE7QUFjZixtQkFBaUIsZUFkRjtBQWVmLDRCQUEwQix3QkFmWDtBQWdCZiw2QkFBMkIseUJBaEJaO0FBaUJmLDZCQUEyQjtBQWpCWixDQUFqQjs7O0FDcEJBOzs7Ozs7SUFFTSxPOzs7Ozs7O3VDQUNlO0FBQ2pCLGFBQU8sS0FBSyxhQUFaO0FBQ0Q7OztxQ0FFZ0IsYSxFQUFlO0FBQzlCLFdBQUssYUFBTCxHQUFxQixhQUFyQjtBQUNEOzs7MkJBRU0sYyxFQUFnQixlLEVBQWlCLFUsRUFBWSxDQUFFOzs7a0NBRXhDLEssRUFBTyxVLEVBQVk7QUFDL0IsVUFBTSxrQkFBa0IsVUFBVSxNQUFsQzs7QUFFQSxVQUFJLG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QixZQUFNLGdCQUFnQixNQUFNLFNBQU4sQ0FBdEI7O0FBRUEsWUFBSSxPQUFPLGFBQVAsS0FBeUIsU0FBN0IsRUFBd0M7QUFDdEMsa0JBQVEsT0FBTyxJQUFQLENBQVksS0FBSyxPQUFqQixDQUFSOztBQUVBLHVCQUFhLGFBQWI7QUFDRCxTQUpELE1BSU87QUFDTCx1QkFBYSxJQUFiO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJLG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QixnQkFBUSxPQUFPLElBQVAsQ0FBWSxLQUFLLE9BQWpCLENBQVI7O0FBRUEscUJBQWEsSUFBYjtBQUNEOztBQUVELFlBQU0sT0FBTixDQUFjLFVBQVMsSUFBVCxFQUFlO0FBQzNCLFlBQU0sUUFBUSxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWQ7QUFBQSxZQUNNLGVBQWUsSUFEckI7QUFBQSxZQUM0QjtBQUN0QixxQkFBYTtBQUNYLGlCQUFPO0FBREksU0FGbkI7O0FBTUEsZUFBTyxjQUFQLENBQXNCLElBQXRCLEVBQTRCLFlBQTVCLEVBQTBDLFVBQTFDOztBQUVBLFlBQUksVUFBSixFQUFnQjtBQUNkLGlCQUFPLEtBQUssT0FBTCxDQUFhLElBQWIsQ0FBUDtBQUNEO0FBQ0YsT0FaYSxDQVlaLElBWlksQ0FZUCxJQVpPLENBQWQsRUFZYyxFQVpkO0FBYUQ7OztrQ0FFYSxZLEVBQWM7QUFDMUIsVUFBTSxVQUFXLE9BQU8sYUFBYSxhQUFwQixLQUFzQyxVQUF2QyxHQUNFLGFBQWEsYUFBYixFQURGLEdBRUksYUFBYSxPQUZqQzs7QUFJQSxXQUFLLE9BQUwsR0FBZSxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUssT0FBdkIsRUFBZ0MsT0FBaEMsQ0FBZjs7QUFFQSxhQUFPLGFBQWEsT0FBcEI7QUFDRDs7O21DQUVxQixLLEVBQU8sVSxFQUFtQztBQUFBLHdDQUFwQixrQkFBb0I7QUFBcEIsMEJBQW9CO0FBQUE7O0FBQzlELFVBQU0sNkNBQWMsS0FBZCxnQkFBdUIsa0JBQXZCLEtBQU47QUFBQSxVQUNNLGdCQUFnQixxQ0FBcUMsT0FBckMsRUFBOEMsVUFBOUMsQ0FEdEI7O0FBR0EsY0FBUSxnQkFBUixDQUF5QixhQUF6Qjs7QUFFQSxvQkFBYyxPQUFkLENBQXNCLFVBQVMsWUFBVCxFQUF1QjtBQUMzQyxnQkFBUSxhQUFSLENBQXNCLFlBQXRCO0FBQ0QsT0FGRDs7QUFJQSxhQUFPLE9BQVA7QUFDRDs7Ozs7O0FBR0gsT0FBTyxPQUFQLEdBQWlCLE9BQWpCOztBQUVBLFNBQVMsb0NBQVQsQ0FBOEMsT0FBOUMsRUFBdUQsVUFBdkQsRUFBbUU7QUFDakUsTUFBTSxnQkFBaUIsT0FBTyxRQUFRLGFBQWYsS0FBaUMsVUFBbEMsR0FDRSxRQUFRLGFBQVIsQ0FBc0IsVUFBdEIsQ0FERixHQUVJLFdBQVcsYUFBWCxJQUE0QixFQUZ0RDs7QUFJQSxTQUFPLGFBQVA7QUFDRDs7O0FDakZEOzs7Ozs7Ozs7O0FBRUEsSUFBTSxVQUFVLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ00sTUFBTSxRQUFRLGNBQVIsQ0FEWjtBQUFBLElBRU0sT0FBTyxRQUFRLGVBQVIsQ0FGYjtBQUFBLElBR00sT0FBTyxRQUFRLGVBQVIsQ0FIYjtBQUFBLElBSU0sWUFBWSxRQUFRLG9CQUFSLENBSmxCO0FBQUEsSUFLTSxjQUFjLFFBQVEsc0JBQVIsQ0FMcEI7QUFBQSxJQU1NLGVBQWUsUUFBUSxrQkFBUixDQU5yQjtBQUFBLElBT00sZUFBZSxRQUFRLGtCQUFSLENBUHJCO0FBQUEsSUFRTSxpQkFBaUIsUUFBUSxvQkFBUixDQVJ2QjtBQUFBLElBU00saUJBQWlCLFFBQVEsb0JBQVIsQ0FUdkI7QUFBQSxJQVVNLG1CQUFtQixRQUFRLHNCQUFSLENBVnpCOztJQVlNLE07OztBQUNKLGtCQUFZLEdBQVosRUFBaUIsSUFBakIsRUFBdUIsT0FBdkIsRUFBZ0MsU0FBaEMsRUFBMkMsTUFBM0MsRUFBbUQ7QUFBQTs7QUFBQTs7QUFHakQsVUFBSyxHQUFMLEdBQVcsR0FBWDtBQUNBLFVBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxVQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsVUFBSyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0EsVUFBSyxNQUFMLEdBQWMsTUFBZDtBQVBpRDtBQVFsRDs7OzttQ0FFYyxnQixFQUFrQjtBQUMvQixXQUFLLFNBQUwsR0FBaUIsS0FBakI7O0FBRUEsV0FBSyxjQUFMOztBQUVBLFdBQUssR0FBTCxDQUFTLGNBQVQ7QUFDRDs7O3FDQUVnQixnQixFQUFrQjtBQUNqQyxXQUFLLFNBQUwsR0FBaUIsSUFBakI7O0FBRUEsV0FBSyxnQkFBTDs7QUFFQSxXQUFLLEdBQUwsQ0FBUyxnQkFBVDtBQUNEOzs7cUNBRWdCLGdCLEVBQWtCO0FBQ2pDLFdBQUssZ0JBQUwsQ0FBc0IsZ0JBQXRCOztBQUVBLFdBQUssR0FBTCxDQUFTLGdCQUFULENBQTBCLGdCQUExQixFQUE0QyxJQUE1Qzs7QUFFQSxVQUFJLEtBQUssU0FBVCxFQUFvQjtBQUNsQixhQUFLLE1BQUw7QUFDRDtBQUNGOzs7c0NBRWlCLEssRUFBTztBQUN2QixXQUFLLElBQUwsQ0FBVSxzQkFBVixDQUFpQyxLQUFqQzs7QUFFQSxXQUFLLE1BQUw7QUFDRDs7O29DQUVlLFksRUFBYztBQUM1QixXQUFLLGVBQUwsQ0FBcUIsWUFBckI7O0FBRUEsV0FBSyxHQUFMLENBQVMsZUFBVCxDQUF5QixZQUF6QjtBQUNEOzs7MENBRXFCO0FBQ3BCLFVBQU0sa0JBQWtCLEtBQUssZUFBTCxDQUFxQixJQUFyQixDQUEwQixJQUExQixDQUF4Qjs7QUFFQSxnQkFBVSxrQkFBVixDQUE2QixlQUE3QjtBQUNEOzs7NENBRXVCO0FBQ3RCLFVBQU0sY0FBYyxZQUFZLFdBQVosQ0FBd0IsS0FBSyxNQUE3QixDQUFwQjtBQUFBLFVBQ00saUJBQWlCLEtBQUssY0FBTCxDQUFvQixJQUFwQixDQUF5QixJQUF6QixDQUR2QjtBQUFBLFVBRU0sbUJBQW1CLEtBQUssZ0JBQUwsQ0FBc0IsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FGekI7QUFBQSxVQUdNLG1CQUFtQixLQUFLLGdCQUFMLENBQXNCLElBQXRCLENBQTJCLElBQTNCLENBSHpCO0FBQUEsVUFJTSxvQkFBb0IsS0FBSyxpQkFBTCxDQUF1QixJQUF2QixDQUE0QixJQUE1QixDQUoxQjs7QUFNQSxrQkFBWSxpQkFBWixDQUE4QixjQUE5QjtBQUNBLGtCQUFZLG1CQUFaLENBQWdDLGdCQUFoQztBQUNBLGtCQUFZLG1CQUFaLENBQWdDLGdCQUFoQztBQUNBLGtCQUFZLG9CQUFaLENBQWlDLGlCQUFqQztBQUNEOzs7NkJBRVEsTyxFQUFTO0FBQ2hCLFdBQUssT0FBTCxHQUFlLE9BQWY7QUFDRDs7O2tDQUVhO0FBQ1osV0FBSyxNQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU0sUUFBUSxLQUFLLE1BQUwsQ0FBWSxRQUFaLEVBQWQ7QUFBQSxVQUNNLFNBQVMsS0FBSyxNQUFMLENBQVksU0FBWixFQURmO0FBQUEsVUFFTSxTQUFTLEtBQUssR0FBTCxDQUFTLFNBQVQsRUFGZjtBQUFBLFVBR00sV0FBVyxLQUFLLElBQUwsQ0FBVSxXQUFWLEVBSGpCO0FBQUEsVUFJTSxlQUFlLGFBQWEsVUFBYixDQUF3QixNQUF4QixDQUpyQjtBQUFBLFVBS00saUJBQWlCLGVBQWUsVUFBZixDQUEwQixJQUExQixDQUx2QjtBQUFBLFVBTU0saUJBQWlCLGVBQWUsWUFBZixDQUE0QixRQUE1QixDQU52QjtBQUFBLFVBT00sbUJBQW1CLGlCQUFpQixrQkFBakIsQ0FBb0MsS0FBcEMsRUFBMkMsTUFBM0MsQ0FQekI7QUFBQSxVQVFNLGVBQWUsYUFBYSxrQkFBYixDQUFnQyxjQUFoQyxDQVJyQjs7QUFVQSxVQUFJLEtBQUssT0FBVCxFQUFrQjtBQUFHO0FBQ25CLGFBQUssT0FBTCxDQUFhLFlBQWIsRUFBMkIsY0FBM0IsRUFBMkMsY0FBM0MsRUFBMkQsZ0JBQTNELEVBQTZFLFlBQTdFO0FBQ0Q7QUFDRjs7O29DQUVlO0FBQ2QsYUFBUTtBQUNOLGtCQUFVLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsSUFBbkIsQ0FESjtBQUVOLHFCQUFhLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QjtBQUZQLE9BQVI7QUFJRDs7O2lDQUVZO0FBQ1gsV0FBSyxtQkFBTDtBQUNBLFdBQUsscUJBQUw7QUFDRDs7O21DQUVxQixVLEVBQVk7QUFBQSxVQUN4QixlQUR3QixHQUNtQixVQURuQixDQUN4QixlQUR3QjtBQUFBLFVBQ1AsYUFETyxHQUNtQixVQURuQixDQUNQLGFBRE87QUFBQSxVQUNRLE1BRFIsR0FDbUIsVUFEbkIsQ0FDUSxNQURSO0FBQUEsVUFFMUIsR0FGMEIsR0FFcEIsSUFBSSxpQkFBSixDQUFzQixhQUF0QixDQUZvQjtBQUFBLFVBRzFCLElBSDBCLEdBR25CLEtBQUssbUJBQUwsQ0FBeUIsZUFBekIsQ0FIbUI7QUFBQSxVQUkxQixPQUowQixHQUloQixJQUpnQjtBQUFBLFVBSzFCLFNBTDBCLEdBS2QsS0FMYztBQUFBLFVBTTFCLE1BTjBCLEdBTWpCLElBQUksTUFBSixDQUFXLEdBQVgsRUFBZ0IsSUFBaEIsRUFBc0IsT0FBdEIsRUFBK0IsU0FBL0IsRUFBMEMsTUFBMUMsQ0FOaUI7OztBQVFoQyxhQUFPLFVBQVA7O0FBRUEsYUFBTyxNQUFQO0FBQ0Q7Ozs7RUFuSGtCLE87O0FBc0hyQixPQUFPLE9BQVAsR0FBaUIsTUFBakI7OztBQ3BJQTs7Ozs7O0FBRUEsSUFBTSxZQUFZLFFBQVEsaUJBQVIsQ0FBbEI7O0lBRVEsYSxHQUFrQyxTLENBQWxDLGE7SUFBZSxjLEdBQW1CLFMsQ0FBbkIsYzs7SUFFakIsUztBQUNKLHFCQUFZLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixVQUFNLGNBQWMsS0FBcEI7QUFBQSxVQUNNLGtCQUFrQixLQUFLLFFBQUwsQ0FBYyxhQUFkLENBRHhCOztBQUdBLHNCQUFnQixPQUFoQixDQUF3QixVQUFTLGNBQVQsRUFBeUI7QUFDL0MsdUJBQWUsV0FBZjtBQUNELE9BRkQ7QUFHRDs7O21DQUVjO0FBQ2IsVUFBTSxlQUFlLEtBQXJCO0FBQUEsVUFDTSxtQkFBbUIsS0FBSyxRQUFMLENBQWMsY0FBZCxDQUR6Qjs7QUFHQSx1QkFBaUIsT0FBakIsQ0FBeUIsVUFBUyxlQUFULEVBQTBCO0FBQ2pELHdCQUFnQixZQUFoQjtBQUNELE9BRkQ7QUFHRDs7O29DQUVlO0FBQ2QsVUFBTSxjQUFjLElBQXBCO0FBQUEsVUFDTSxrQkFBa0IsS0FBSyxRQUFMLENBQWMsYUFBZCxDQUR4Qjs7QUFHQSxzQkFBZ0IsT0FBaEIsQ0FBd0IsVUFBUyxjQUFULEVBQXlCO0FBQy9DLHVCQUFlLFdBQWY7QUFDRCxPQUZEO0FBR0Q7OztxQ0FFZ0I7QUFDZixVQUFNLGVBQWUsSUFBckI7QUFBQSxVQUNNLG1CQUFtQixLQUFLLFFBQUwsQ0FBYyxjQUFkLENBRHpCOztBQUdBLHVCQUFpQixPQUFqQixDQUF5QixVQUFTLGVBQVQsRUFBMEI7QUFDakQsd0JBQWdCLFlBQWhCO0FBQ0QsT0FGRDtBQUdEOzs7c0NBRWlCLGMsRUFBZ0I7QUFDaEMsVUFBTSxrQkFBa0IsS0FBSyxRQUFMLENBQWMsYUFBZCxDQUF4Qjs7QUFFQSxzQkFBZ0IsSUFBaEIsQ0FBcUIsY0FBckI7QUFDRDs7O3VDQUVrQixlLEVBQWlCO0FBQ2xDLFVBQU0sbUJBQW1CLEtBQUssUUFBTCxDQUFjLGNBQWQsQ0FBekI7O0FBRUEsdUJBQWlCLElBQWpCLENBQXNCLGVBQXRCO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTSxXQUFXLEVBQWpCO0FBQUEsVUFDTSxZQUFZLElBQUksU0FBSixDQUFjLFFBQWQsQ0FEbEI7O0FBR0EsZUFBUyxhQUFULElBQTBCLEVBQTFCO0FBQ0EsZUFBUyxjQUFULElBQTJCLEVBQTNCOztBQUVBLGFBQU8sU0FBUDtBQUNEOzs7Ozs7QUFHSCxJQUFNLFlBQVksVUFBVSxXQUFWLEVBQWxCOztBQUVBLE9BQU8sT0FBUCxHQUFpQixTQUFqQjs7QUFFQSxJQUFNLHFCQUFxQixTQUFTLGVBQXBDOztBQUVBLG1CQUFtQixPQUFuQixHQUE2QixVQUFTLEtBQVQsRUFBZ0I7QUFDM0MsTUFBTSxVQUFVLE1BQU0sT0FBdEI7O0FBRUEsTUFBSSxLQUFKLEVBQVcsQ0FFVixDQUZELE1BRU8sSUFBSSxZQUFZLGFBQWhCLEVBQStCO0FBQ3BDLGNBQVUsV0FBVjtBQUNELEdBRk0sTUFFQSxJQUFJLFlBQVksY0FBaEIsRUFBZ0M7QUFDckMsY0FBVSxZQUFWO0FBQ0Q7QUFDRixDQVZEOztBQVlBLG1CQUFtQixTQUFuQixHQUErQixVQUFTLEtBQVQsRUFBZ0I7QUFDN0MsTUFBTSxVQUFVLE1BQU0sT0FBdEI7O0FBRUEsTUFBSSxLQUFKLEVBQVcsQ0FFVixDQUZELE1BRU8sSUFBSSxZQUFZLGFBQWhCLEVBQStCO0FBQ3BDLGNBQVUsYUFBVjtBQUNELEdBRk0sTUFFQSxJQUFJLFlBQVksY0FBaEIsRUFBZ0M7QUFDckMsY0FBVSxjQUFWO0FBQ0Q7QUFDRixDQVZEOzs7QUN4RkE7Ozs7OztBQUVBLElBQU0sWUFBWSxRQUFRLGlCQUFSLENBQWxCOztJQUVRLFEsR0FBa0QsUyxDQUFsRCxRO0lBQVUsVSxHQUF3QyxTLENBQXhDLFU7SUFBWSxVLEdBQTRCLFMsQ0FBNUIsVTtJQUFZLFcsR0FBZ0IsUyxDQUFoQixXOztJQUVwQyxXO0FBQ0osdUJBQVksV0FBWixFQUF5QjtBQUFBOztBQUN2QixTQUFLLFdBQUwsR0FBbUIsV0FBbkI7QUFDRDs7OztzQ0FFaUIsYyxFQUFnQjtBQUNoQyxXQUFLLFVBQUwsQ0FBZ0IsUUFBaEIsRUFBMEIsY0FBMUI7QUFDRDs7O3dDQUVtQixnQixFQUFrQjtBQUNwQyxXQUFLLFVBQUwsQ0FBZ0IsVUFBaEIsRUFBNEIsZ0JBQTVCO0FBQ0Q7Ozt3Q0FFbUIsZ0IsRUFBa0I7QUFDcEMsV0FBSyxVQUFMLENBQWdCLFVBQWhCLEVBQTRCLGdCQUE1QjtBQUNEOzs7eUNBRW9CLGlCLEVBQW1CO0FBQ3RDLFdBQUssVUFBTCxDQUFnQixXQUFoQixFQUE2QixpQkFBN0I7QUFDRDs7OytCQUVVLFMsRUFBVyxPLEVBQVM7QUFDN0IsVUFBTSxXQUFXLEtBQUssV0FBTCxDQUFpQixTQUFqQixDQUFqQjs7QUFFQSxlQUFTLElBQVQsQ0FBYyxPQUFkO0FBQ0Q7OztpQ0FFWSxTLEVBQVcsSyxFQUFPO0FBQzdCLFVBQU0sV0FBVyxLQUFLLFdBQUwsQ0FBaUIsU0FBakIsQ0FBakI7QUFBQSxVQUNNLG1CQUFtQiwwQkFBMEIsS0FBMUIsRUFBaUMsS0FBSyxNQUF0QyxDQUR6Qjs7QUFHQSxlQUFTLE9BQVQsQ0FBaUIsVUFBUyxPQUFULEVBQWtCO0FBQ2pDLGdCQUFRLGdCQUFSO0FBQ0QsT0FGRDtBQUdEOzs7c0NBRWlCLEssRUFBTztBQUN2QixVQUFNLFdBQVcsS0FBSyxXQUFMLENBQWlCLFdBQWpCLENBQWpCO0FBQUEsVUFDTSxRQUFRLGVBQWUsS0FBZixDQURkOztBQUdBLGVBQVMsT0FBVCxDQUFpQixVQUFTLE9BQVQsRUFBa0I7QUFDakMsZ0JBQVEsS0FBUjtBQUNELE9BRkQ7QUFHRDs7O2dDQUVrQixNLEVBQVE7QUFDekIsVUFBTSxjQUFjO0FBQ1osa0JBQVUsRUFERTtBQUVaLG9CQUFZLEVBRkE7QUFHWixvQkFBWSxFQUhBO0FBSVoscUJBQWE7QUFKRCxPQUFwQjtBQUFBLFVBTU0sY0FBYyxJQUFJLFdBQUosQ0FBZ0IsV0FBaEIsQ0FOcEI7QUFBQSxVQU9NLGFBQWEsT0FBTyxhQUFQLEVBUG5COztBQVNBLDJCQUFxQixVQUFyQixFQUFpQyxTQUFqQyxFQUE0QyxVQUFTLEtBQVQsRUFBZ0I7QUFBRSxvQkFBWSxZQUFaLENBQXlCLFFBQXpCLEVBQW1DLEtBQW5DO0FBQTRDLE9BQTFHO0FBQ0EsMkJBQXFCLFVBQXJCLEVBQWlDLFdBQWpDLEVBQThDLFVBQVMsS0FBVCxFQUFnQjtBQUFFLG9CQUFZLFlBQVosQ0FBeUIsVUFBekIsRUFBcUMsS0FBckM7QUFBOEMsT0FBOUc7QUFDQSwyQkFBcUIsVUFBckIsRUFBaUMsV0FBakMsRUFBOEMsVUFBUyxLQUFULEVBQWdCO0FBQUUsb0JBQVksWUFBWixDQUF5QixVQUF6QixFQUFxQyxLQUFyQztBQUE4QyxPQUE5RztBQUNBLDJCQUFxQixVQUFyQixFQUFpQyxZQUFqQyxFQUErQyxVQUFTLEtBQVQsRUFBZ0I7QUFBRSxvQkFBWSxpQkFBWixDQUE4QixLQUE5QjtBQUF1QyxPQUF4Rzs7QUFFQSxhQUFPLFdBQVA7QUFDRDs7Ozs7O0FBR0gsT0FBTyxPQUFQLEdBQWlCLFdBQWpCOztBQUVBLFNBQVMsY0FBVCxDQUF3QixLQUF4QixFQUErQjtBQUM3QixNQUFNLFFBQVEsS0FBSyxHQUFMLENBQVMsQ0FBQyxDQUFWLEVBQWEsS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLE1BQU0sVUFBbEIsQ0FBYixDQUFkLENBRDZCLENBQzhCOztBQUUzRCxTQUFPLEtBQVA7QUFDRDs7QUFFRCxTQUFTLHlCQUFULENBQW1DLEtBQW5DLEVBQTBDO0FBQ3hDLE1BQU0sYUFBYSxNQUFNLE1BQXpCO0FBQUEsTUFBa0M7QUFDNUIsaUNBQStCLFdBQVcscUJBQVgsRUFEckM7QUFBQSxNQUVNLG1CQUFtQixDQUNqQixFQUFFLE1BQU0sT0FBTixHQUFnQiw2QkFBNkIsSUFBL0MsQ0FEaUIsRUFFakIsRUFBRSxNQUFNLE9BQU4sR0FBZ0IsNkJBQTZCLEdBQS9DLENBRmlCLENBRnpCOztBQU9BLFNBQU8sZ0JBQVA7QUFDRDs7QUFFRCxTQUFTLG9CQUFULENBQThCLFVBQTlCLEVBQTBDLElBQTFDLEVBQWdELE9BQWhELEVBQXlEO0FBQ3ZELGFBQVcsZ0JBQVgsQ0FBNEIsSUFBNUIsRUFBa0MsVUFBUyxLQUFULEVBQWdCO0FBQ2hELFlBQVEsS0FBUjs7QUFFQSxVQUFNLGNBQU47QUFDRCxHQUpEO0FBS0Q7OztBQy9GRDs7Ozs7O0FBRUEsSUFBTSxZQUFZLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNLE9BQU8sUUFBUSxrQkFBUixDQUFiO0FBQUEsSUFDTSxPQUFPLFFBQVEsa0JBQVIsQ0FEYjtBQUFBLElBRU0sWUFBWSxRQUFRLGlCQUFSLENBRmxCOztBQUlNLElBQUUsY0FBRixHQUFxQixTQUFyQixDQUFFLGNBQUY7QUFBQSxJQUNFLEtBREYsR0FDb0IsY0FEcEIsQ0FDRSxLQURGO0FBQUEsSUFDUyxNQURULEdBQ29CLGNBRHBCLENBQ1MsTUFEVDtBQUFBLElBRUUsR0FGRixHQUVVLElBRlYsQ0FFRSxHQUZGO0FBQUEsSUFHRSxRQUhGLEdBR3NCLElBSHRCLENBR0UsUUFIRjtBQUFBLElBR1ksS0FIWixHQUdzQixJQUh0QixDQUdZLEtBSFo7QUFBQSxJQUlFLGFBSkYsR0FJK0MsU0FKL0MsQ0FJRSxhQUpGO0FBQUEsSUFJaUIseUJBSmpCLEdBSStDLFNBSi9DLENBSWlCLHlCQUpqQjs7SUFNQSxHO0FBQ0osZUFBWSxTQUFaLEVBQXVCLFlBQXZCLEVBQXFDLE1BQXJDLEVBQTZDLGNBQTdDLEVBQTZELGdCQUE3RCxFQUErRSx3QkFBL0UsRUFBeUc7QUFBQTs7QUFDdkcsU0FBSyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0EsU0FBSyxZQUFMLEdBQW9CLFlBQXBCO0FBQ0EsU0FBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLFNBQUssY0FBTCxHQUFzQixjQUF0QjtBQUNBLFNBQUssZ0JBQUwsR0FBd0IsZ0JBQXhCO0FBQ0EsU0FBSyx3QkFBTCxHQUFnQyx3QkFBaEM7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBSyxNQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixXQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxXQUFLLHdCQUFMLEdBQWdDLEtBQUssZ0JBQXJDO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsV0FBSyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsV0FBSyxjQUFMLEdBQXNCLEtBQUssTUFBM0I7O0FBRUEsVUFBSSxLQUFLLFlBQVQsRUFBdUI7QUFDckIsYUFBSyx3QkFBTCxHQUFnQyxLQUFLLGdCQUFyQztBQUNBLGFBQUssY0FBTCxHQUFzQixLQUFLLE1BQTNCO0FBQ0Q7QUFDRjs7O3FDQUVnQixnQixFQUFrQixNLEVBQVE7QUFDekMsV0FBSyxnQkFBTCxHQUF3QixnQkFBeEI7O0FBRUEsVUFBSSxLQUFLLFNBQUwsSUFBa0IsS0FBSyxZQUEzQixFQUF5QztBQUN2QyxhQUFLLFlBQUwsQ0FBa0IsTUFBbEI7QUFDRDtBQUNGOzs7b0NBRWUsWSxFQUFjO0FBQzVCLFdBQUssWUFBTCxHQUFvQixZQUFwQjs7QUFFQSxVQUFJLEtBQUssWUFBVCxFQUF1QjtBQUNyQixhQUFLLHdCQUFMLEdBQWdDLEtBQUssZ0JBQXJDO0FBQ0EsYUFBSyxjQUFMLEdBQXNCLEtBQUssTUFBM0I7QUFDRDtBQUNGOzs7aUNBRVksTSxFQUFRO0FBQ25CLFVBQU0sU0FBUyxPQUFPLFNBQVAsRUFBZjtBQUFBLFVBQ00sU0FBUyxPQUFPLFNBQVAsRUFEZjtBQUFBLFVBRU0sU0FBUyxhQUZmO0FBQUEsVUFHTSwyQkFBMkIsU0FBUyxLQUFLLGdCQUFkLEVBQWdDLEtBQUssd0JBQXJDLENBSGpDO0FBQUEsVUFJTSxpQkFBaUIsTUFBTSx3QkFBTixFQUFnQyxNQUFoQyxDQUp2QjtBQUFBLFVBS00sc0JBQXNCLE1BQU0sY0FBTixDQUw1QjtBQUFBLFVBTU0sdUJBQXVCLE9BQU8sY0FBUCxDQU43Qjs7QUFRQSxVQUFJLFNBQVMsS0FBSyxjQUFMLENBQW9CLEtBQXBCLEVBQWI7O0FBRUEsT0FBQyxZQUFXO0FBQ1YsWUFBTSxJQUFJLENBQUMsS0FBSyxHQUFMLENBQVMsTUFBVCxDQUFELEdBQW9CLG1CQUE5QjtBQUFBLFlBQ00sSUFBSSxDQURWO0FBQUEsWUFFTSxJQUFJLENBQUMsS0FBSyxHQUFMLENBQVMsTUFBVCxDQUFELEdBQW9CLG1CQUY5Qjs7QUFJQSxpQkFBUyxJQUFJLE1BQUosRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLENBQVQ7QUFDRCxPQU5EOztBQVFBLE9BQUMsWUFBVztBQUNWLFlBQU0sSUFBSSxDQUFDLEtBQUssR0FBTCxDQUFTLE1BQVQsQ0FBRCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxNQUFULENBQXBCLEdBQXVDLG9CQUFqRDtBQUFBLFlBQ00sSUFBSSxDQUFDLEtBQUssR0FBTCxDQUFTLE1BQVQsQ0FBRCxHQUFvQixvQkFEOUI7QUFBQSxZQUVNLElBQUksQ0FBQyxLQUFLLEdBQUwsQ0FBUyxNQUFULENBQUQsR0FBb0IsS0FBSyxHQUFMLENBQVMsTUFBVCxDQUFwQixHQUF1QyxvQkFGakQ7O0FBSUEsaUJBQVMsSUFBSSxNQUFKLEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixDQUFUO0FBQ0QsT0FORDs7QUFRQSxXQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0Q7OztzQ0FFd0IsYSxFQUFlO0FBQ3RDLFVBQU0sU0FBUyxhQUFmO0FBQUEsVUFDTSxZQUFZLEtBRGxCO0FBQUEsVUFFTSxlQUFlLEtBRnJCO0FBQUEsVUFHTSxpQkFBaUIsTUFIdkI7QUFBQSxVQUdnQztBQUMxQix5QkFBbUIseUJBSnpCO0FBQUEsVUFLTSwyQkFBMkIsZ0JBTGpDO0FBQUEsVUFNTSxNQUFNLElBQUksR0FBSixDQUFRLFNBQVIsRUFBbUIsWUFBbkIsRUFBaUMsTUFBakMsRUFBeUMsY0FBekMsRUFBeUQsZ0JBQXpELEVBQTJFLHdCQUEzRSxDQU5aOztBQVFBLGFBQU8sR0FBUDtBQUNEOzs7Ozs7QUFHSCxPQUFPLE9BQVAsR0FBaUIsR0FBakI7OztBQ3ZHQTs7Ozs7O0FBRUEsSUFBTSxZQUFZLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNLE9BQU8sUUFBUSxrQkFBUixDQUFiO0FBQUEsSUFDTSxZQUFZLFFBQVEsaUJBQVIsQ0FEbEI7O0FBR00sSUFBRSxjQUFGLEdBQXFCLFNBQXJCLENBQUUsY0FBRjtBQUFBLElBQ0UsS0FERixHQUNvQixjQURwQixDQUNFLEtBREY7QUFBQSxJQUNTLE1BRFQsR0FDb0IsY0FEcEIsQ0FDUyxNQURUO0FBQUEsSUFFRSxHQUZGLEdBRTJCLElBRjNCLENBRUUsR0FGRjtBQUFBLElBRU8sUUFGUCxHQUUyQixJQUYzQixDQUVPLFFBRlA7QUFBQSxJQUVpQixLQUZqQixHQUUyQixJQUYzQixDQUVpQixLQUZqQjtBQUFBLElBR0Usd0JBSEYsR0FHcUYsU0FIckYsQ0FHRSx3QkFIRjtBQUFBLElBRzRCLHlCQUg1QixHQUdxRixTQUhyRixDQUc0Qix5QkFINUI7QUFBQSxJQUd1RCx5QkFIdkQsR0FHcUYsU0FIckYsQ0FHdUQseUJBSHZEOztJQUtBLEk7QUFDSixnQkFBWSxTQUFaLEVBQXVCLFlBQXZCLEVBQXFDLGdCQUFyQyxFQUF1RCxnQkFBdkQsRUFBeUUsd0JBQXpFLEVBQW1HLHdCQUFuRyxFQUE2SDtBQUFBOztBQUMzSCxTQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDQSxTQUFLLFlBQUwsR0FBb0IsWUFBcEI7QUFDQSxTQUFLLGdCQUFMLEdBQXdCLGdCQUF4QjtBQUNBLFNBQUssZ0JBQUwsR0FBd0IsZ0JBQXhCO0FBQ0EsU0FBSyx3QkFBTCxHQUFnQyx3QkFBaEM7QUFDQSxTQUFLLHdCQUFMLEdBQWdDLHdCQUFoQztBQUNEOzs7O2dDQUVXO0FBQ1YsVUFBTSx3QkFBd0IsT0FBTyxLQUFLLGdCQUFaLENBQTlCO0FBQUEsVUFDTSxTQUFTLHFCQURmLENBRFUsQ0FFNEI7O0FBRXRDLGFBQU8sTUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNLHVCQUF1QixNQUFNLEtBQUssZ0JBQVgsQ0FBN0I7QUFBQSxVQUNNLFNBQVMsQ0FBQyxvQkFEaEIsQ0FEVSxDQUU0Qjs7QUFFdEMsYUFBTyxNQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU0sU0FBUyxDQUFmOztBQUVBLGFBQU8sTUFBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsV0FBSyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsV0FBSyx3QkFBTCxHQUFnQyxLQUFLLGdCQUFyQztBQUNEOzs7dUNBRWtCO0FBQ2pCLFdBQUssU0FBTCxHQUFpQixJQUFqQjtBQUNBLFdBQUssd0JBQUwsR0FBZ0MsS0FBSyxnQkFBckM7QUFDRDs7O3FDQUVnQixnQixFQUFrQjtBQUNqQyxXQUFLLGdCQUFMLEdBQXdCLGdCQUF4Qjs7QUFFQSxVQUFJLEtBQUssU0FBTCxJQUFrQixDQUFDLEtBQUssWUFBNUIsRUFBMEM7QUFDeEMsYUFBSyxzQkFBTDtBQUNEO0FBQ0Y7OztvQ0FFZSxZLEVBQWM7QUFDNUIsV0FBSyxZQUFMLEdBQW9CLFlBQXBCOztBQUVBLFVBQUksQ0FBQyxZQUFMLEVBQW1CO0FBQ2pCLGFBQUssd0JBQUwsR0FBZ0MsS0FBSyxnQkFBckM7QUFDQSxhQUFLLHdCQUFMLEdBQWdDLEtBQUssZ0JBQXJDO0FBQ0Q7QUFDRjs7OzZDQUV3QjtBQUN2QixVQUFNLFNBQVMsd0JBQWY7QUFBQSxVQUNNLDJCQUEyQixTQUFTLEtBQUssZ0JBQWQsRUFBZ0MsS0FBSyx3QkFBckMsQ0FEakM7QUFBQSxVQUVNLDJCQUEyQixNQUFNLHdCQUFOLEVBQWdDLE1BQWhDLENBRmpDOztBQUlBLFdBQUssZ0JBQUwsR0FBd0IsSUFBSSxLQUFLLHdCQUFULEVBQW1DLHdCQUFuQyxDQUF4QjtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU0sWUFBWSxLQUFsQjtBQUFBLFVBQ00sZUFBZSxLQURyQjtBQUFBLFVBRU0sbUJBQW1CLHlCQUZ6QjtBQUFBLFVBR00sbUJBQW1CLHlCQUh6QjtBQUFBLFVBSU0sMkJBQTJCLGdCQUpqQztBQUFBLFVBSW9EO0FBQzlDLGlDQUEyQixnQkFMakM7QUFBQSxVQUtvRDtBQUM5QyxhQUFPLElBQUksSUFBSixDQUFTLFNBQVQsRUFBb0IsWUFBcEIsRUFBa0MsZ0JBQWxDLEVBQW9ELGdCQUFwRCxFQUFzRSx3QkFBdEUsRUFBZ0csd0JBQWhHLENBTmI7O0FBUUEsYUFBTyxJQUFQO0FBQ0Q7Ozs7OztBQUdILElBQU0sT0FBTyxLQUFLLFdBQUwsRUFBYjs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsSUFBakI7OztBQzVGQTs7Ozs7O0FBRUEsSUFBTSxZQUFZLFFBQVEsaUJBQVIsQ0FBbEI7O0lBRVEsZSxHQUFzQyxTLENBQXRDLGU7SUFBaUIsZ0IsR0FBcUIsUyxDQUFyQixnQjs7SUFFbkIsSTtBQUNKLGdCQUFZLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUssUUFBWjtBQUNEOzs7MkNBRXNCLEssRUFBTztBQUM1QixVQUFNLFNBQVMsZUFBZjs7QUFFQSxXQUFLLFFBQUwsSUFBaUIsUUFBUSxNQUF6Qjs7QUFFQSxXQUFLLFFBQUwsR0FBZ0IsS0FBSyxHQUFMLENBQVMsZ0JBQVQsRUFBMkIsS0FBSyxRQUFoQyxDQUFoQjtBQUNEOzs7d0NBRTBCLGUsRUFBaUI7QUFDMUMsVUFBTSxXQUFXLGVBQWpCO0FBQUEsVUFDTSxPQUFPLElBQUksSUFBSixDQUFTLFFBQVQsQ0FEYjs7QUFHQSxhQUFPLElBQVA7QUFDRDs7Ozs7O0FBR0gsT0FBTyxPQUFQLEdBQWlCLElBQWpCOzs7QUMvQkE7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sVUFBVSxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNLE9BQU8sUUFBUSxlQUFSLENBRGI7QUFBQSxJQUVNLGlCQUFpQixRQUFRLG9CQUFSLENBRnZCO0FBQUEsSUFHTSxxQkFBcUIsUUFBUSx3QkFBUixDQUgzQjs7SUFLUSxJLEdBQWtCLGMsQ0FBbEIsSTtJQUFNLE8sR0FBWSxjLENBQVosTztJQUNOLGdCLEdBQXFCLGtCLENBQXJCLGdCO0lBQ0EsUSxHQUErQixJLENBQS9CLFE7SUFBVSxLLEdBQXFCLEksQ0FBckIsSztJQUFPLFMsR0FBYyxJLENBQWQsUzs7SUFFbkIsYTs7O0FBQ0oseUJBQVksU0FBWixFQUF1QjtBQUFBOztBQUFBOztBQUdyQixVQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFIcUI7QUFJdEI7Ozs7bUNBRWM7QUFDYixhQUFPLEtBQUssU0FBWjtBQUNEOzs7MkJBRU0sYyxFQUFnQixlLEVBQWlCLFUsRUFBWTtBQUNsRCxvQkFBYyxLQUFLLFNBQW5CLDRCQUFpQyxVQUFqQyxHQURrRCxDQUNKOztBQUU5QyxVQUFNLGdCQUFnQixLQUFLLGdCQUFMLEVBQXRCOztBQUVBLG9CQUFjLE9BQWQsQ0FBc0IsVUFBUyxZQUFULEVBQXVCO0FBQzNDLHFCQUFhLE1BQWIsQ0FBb0IsY0FBcEIsRUFBb0MsZUFBcEMsRUFBcUQsVUFBckQ7QUFDRCxPQUZEO0FBR0Q7OztnREFFMkIsVSxFQUFZO0FBQ3RDLG9CQUFjLEtBQUssU0FBbkIsNEJBQWlDLFVBQWpDLEdBRHNDLENBQ1E7O0FBRTlDLFVBQU0sNEJBQTRCLEtBQUssNEJBQUwsRUFBbEM7QUFBQSxVQUNNLHlCQUF5QixLQUFLLHlCQUFMLEVBQWdDLENBQWhDLENBRC9CO0FBQUEsVUFDb0U7QUFDOUQsd0JBQWtCLHVCQUF1QixHQUF2QixDQUEyQixVQUFTLHFCQUFULEVBQWdDO0FBQzNFLFlBQUksaUJBQWlCLHFCQUFyQjs7QUFFQSxtQkFBVyxPQUFYLENBQW1CLFVBQVMsU0FBVCxFQUFvQjtBQUNyQywyQkFBaUIsVUFBVSxjQUFWLENBQWpCO0FBQ0QsU0FGRDs7QUFJQSxlQUFPLGNBQVA7QUFDRCxPQVJpQixDQUZ4QjtBQUFBLFVBV00scUJBQXFCLFFBQVEsZUFBUixDQVgzQjs7QUFhQSxhQUFPLGtCQUFQO0FBQ0Q7Ozs4Q0FFeUIsa0IsRUFBb0I7QUFDNUMsVUFBTSxRQUFRLEtBQUssa0JBQUwsRUFBeUIsRUFBekIsQ0FBZDtBQUFBLFVBQTZDO0FBQ3ZDLHNCQUFnQixNQUFNLE1BQU4sQ0FBYSxVQUFTLGFBQVQsRUFBd0IsSUFBeEIsRUFBOEI7QUFDekQsWUFBTSxrQkFBa0IsS0FBSyxJQUFMLEVBQVcsQ0FBWCxDQUF4Qjs7QUFFQSxhQUFLLElBQUksUUFBUSxDQUFqQixFQUFvQixRQUFRLENBQTVCLEVBQStCLE9BQS9CLEVBQXdDO0FBQ3RDLGNBQU0sbUJBQW1CLEtBQXpCO0FBQUEsY0FDSSxvQkFBb0IsQ0FBQyxRQUFRLENBQVQsSUFBYyxDQUR0QztBQUFBLGNBRUksbUJBQW1CLENBQUMsUUFBUSxDQUFULElBQWMsQ0FGckM7QUFBQSxjQUdJLHNCQUFzQixnQkFBZ0IsZ0JBQWhCLENBSDFCO0FBQUEsY0FJSSx1QkFBdUIsZ0JBQWdCLGlCQUFoQixDQUozQjtBQUFBLGNBS0ksc0JBQXNCLGdCQUFnQixnQkFBaEIsQ0FMMUI7QUFBQSxjQU1JLGNBQWMsU0FBUyxvQkFBVCxFQUErQixtQkFBL0IsQ0FObEI7QUFBQSxjQU9JLGVBQWUsU0FBUyxtQkFBVCxFQUE4QixtQkFBOUIsQ0FQbkI7QUFBQSxjQVFJLGVBQWUsVUFBVSxNQUFNLFdBQU4sRUFBbUIsWUFBbkIsQ0FBVixDQVJuQjs7QUFVQSx3QkFBYyxJQUFkLENBQW1CLFlBQW5CO0FBQ0Q7O0FBRUQsZUFBTyxhQUFQO0FBQ0QsT0FsQmUsRUFrQmIsRUFsQmEsQ0FEdEI7QUFBQSxVQW9CTSxtQkFBbUIsUUFBUSxhQUFSLENBcEJ6QixDQUQ0QyxDQXFCSzs7QUFFakQsYUFBTyxnQkFBUDtBQUNEOzs7NkNBRXdCLGtCLEVBQW9CO0FBQzNDLFVBQU0sa0JBQWtCLEVBQXhCO0FBQUEsVUFDTSwyQkFBMkIsbUJBQW1CLE1BRHBEO0FBQUEsVUFFTSxjQUFjLDJCQUEyQixFQUYvQyxDQUQyQyxDQUdROztBQUVuRCxXQUFLLElBQUksUUFBUSxDQUFqQixFQUFvQixRQUFRLFdBQTVCLEVBQXlDLE9BQXpDLEVBQWtEO0FBQ2hELFlBQU0sU0FBUyxRQUFRLENBQXZCOztBQUVBLHdCQUFnQixJQUFoQixDQUFxQixTQUFTLENBQTlCO0FBQ0Esd0JBQWdCLElBQWhCLENBQXFCLFNBQVMsQ0FBOUI7QUFDQSx3QkFBZ0IsSUFBaEIsQ0FBcUIsU0FBUyxDQUE5QjtBQUNBLHdCQUFnQixJQUFoQixDQUFxQixTQUFTLENBQTlCO0FBQ0Esd0JBQWdCLElBQWhCLENBQXFCLFNBQVMsQ0FBOUI7QUFDQSx3QkFBZ0IsSUFBaEIsQ0FBcUIsU0FBUyxDQUE5QjtBQUNEOztBQUVELGFBQU8sZUFBUDtBQUNEOzs7bUNBRXFCLEssRUFBTyxVLEVBQW1DO0FBQUEsd0NBQXBCLGtCQUFvQjtBQUFwQiwwQkFBb0I7QUFBQTs7QUFBQSxVQUN0RCxLQURzRCxHQUNSLFVBRFEsQ0FDdEQsS0FEc0Q7QUFBQSxVQUMvQyxNQUQrQyxHQUNSLFVBRFEsQ0FDL0MsTUFEK0M7QUFBQSxVQUN2QyxLQUR1QyxHQUNSLFVBRFEsQ0FDdkMsS0FEdUM7QUFBQSxVQUNoQyxRQURnQyxHQUNSLFVBRFEsQ0FDaEMsUUFEZ0M7QUFBQSxVQUN0QixTQURzQixHQUNSLFVBRFEsQ0FDdEIsU0FEc0I7QUFBQSxVQUV4RCxTQUZ3RCxHQUU1QyxpQkFBaUIsS0FBakIsRUFBd0IsTUFBeEIsRUFBZ0MsS0FBaEMsRUFBdUMsUUFBdkMsRUFBaUQsU0FBakQsQ0FGNEM7QUFBQSxVQUd4RCxhQUh3RCxHQUd4QyxRQUFRLGNBQVIsaUJBQXVCLEtBQXZCLEVBQThCLFVBQTlCLEVBQTBDLFNBQTFDLFNBQXdELGtCQUF4RCxFQUh3Qzs7O0FBSzlELGFBQU8sYUFBUDtBQUNEOzs7O0VBM0Z5QixPOztBQThGNUIsT0FBTyxPQUFQLEdBQWlCLGFBQWpCOzs7QUN6R0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sZ0JBQWdCLFFBQVEsc0JBQVIsQ0FBdEI7QUFBQSxJQUNNLGlCQUFpQixRQUFRLHVCQUFSLENBRHZCOztJQUdRLE8sR0FBWSxjLENBQVosTzs7SUFFRixxQjs7O0FBQ0osaUNBQVksU0FBWixFQUF1QixNQUF2QixFQUErQjtBQUFBOztBQUFBLDhJQUN2QixTQUR1Qjs7QUFHN0IsVUFBSyxNQUFMLEdBQWMsTUFBZDtBQUg2QjtBQUk5Qjs7Ozs4Q0FFeUIsa0IsRUFBb0I7QUFDNUMsVUFBTSwyQkFBMkIsbUJBQW1CLE1BQXBEO0FBQUEsVUFDTSxzQkFBc0IsMkJBQTJCLENBRHZEO0FBQUEsVUFDMkQ7QUFDckQscUJBQWUsS0FBSyxNQUYxQjtBQUFBLFVBR00sZ0JBQWdCLEVBSHRCOztBQUtBLFdBQUssSUFBSSxRQUFRLENBQWpCLEVBQW9CLFFBQVEsbUJBQTVCLEVBQWlELE9BQWpELEVBQTBEO0FBQ3hELHNCQUFjLElBQWQsQ0FBbUIsWUFBbkI7QUFDRDs7QUFFRCxVQUFNLG1CQUFtQixRQUFRLGFBQVIsQ0FBekIsQ0FWNEMsQ0FVTTs7QUFFbEQsYUFBTyxnQkFBUDtBQUNEOzs7MkJBRU0sYyxFQUFnQixlLEVBQWlCLFUsRUFBWTtBQUNsRCxVQUFNLHFCQUFxQixLQUFLLDJCQUFMLENBQWlDLFVBQWpDLENBQTNCO0FBQUEsVUFDTSxrQkFBa0IsS0FBSyx3QkFBTCxDQUE4QixrQkFBOUIsQ0FEeEI7QUFBQSxVQUVNLG1CQUFtQixLQUFLLHlCQUFMLENBQStCLGtCQUEvQixDQUZ6QjtBQUFBLFVBR00sbUJBQW1CLEtBQUsseUJBQUwsQ0FBK0Isa0JBQS9CLENBSHpCOztBQUtBLHFCQUFlLHFCQUFmLENBQXFDLGtCQUFyQztBQUNBLHFCQUFlLGtCQUFmLENBQWtDLGVBQWxDO0FBQ0EscUJBQWUsbUJBQWYsQ0FBbUMsZ0JBQW5DO0FBQ0EscUJBQWUsbUJBQWYsQ0FBbUMsZ0JBQW5DOztBQUVBLDJJQUFhLGNBQWIsRUFBNkIsZUFBN0IsRUFBOEMsVUFBOUM7QUFDRDs7O21DQUVxQixLLEVBQU8sVSxFQUFZO0FBQ2pDLFVBQUUsTUFBRixHQUFhLFVBQWIsQ0FBRSxNQUFGO0FBQUEsVUFDQSxxQkFEQSxHQUN3QixjQUFjLGNBQWQsQ0FBNkIsS0FBN0IsRUFBb0MsVUFBcEMsRUFBZ0QsTUFBaEQsQ0FEeEI7OztBQUdOLGFBQU8scUJBQVA7QUFDRDs7OztFQXpDaUMsYTs7QUE0Q3BDLE9BQU8sT0FBUCxHQUFpQixxQkFBakI7OztBQ25EQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxnQkFBZ0IsUUFBUSxzQkFBUixDQUF0QjtBQUFBLElBQ00saUJBQWlCLFFBQVEsdUJBQVIsQ0FEdkI7QUFBQSxJQUVNLG9CQUFvQixRQUFRLDBCQUFSLENBRjFCOztBQUlNLElBQUUsT0FBRixHQUFjLGNBQWQsQ0FBRSxPQUFGO0FBQUEsSUFDRSxnQ0FERixHQUN1QyxpQkFEdkMsQ0FDRSxnQ0FERjs7SUFHQSxxQjs7O0FBQ0oscUNBQVksU0FBWixFQUF1QixTQUF2QixFQUFrQztBQUFBOztBQUFBLHNKQUMxQixTQUQwQjs7QUFHaEMsa0JBQUssU0FBTCxHQUFpQixTQUFqQjtBQUhnQztBQUlqQzs7OzsyREFFOEIsa0IsRUFBb0I7QUFDakQsc0JBQU0sMkJBQTJCLG1CQUFtQixNQUFwRDtBQUFBLHNCQUNNLG1CQUFtQiwyQkFBMkIsRUFEcEQ7QUFBQSxzQkFDeUQ7QUFDbkQsK0JBQWEsRUFGbkI7O0FBSUEsdUJBQUssSUFBSSxRQUFRLENBQWpCLEVBQW9CLFFBQVEsZ0JBQTVCLEVBQThDLE9BQTlDLEVBQXVEO0FBQ3JELG1DQUFXLElBQVgsQ0FBZ0IsS0FBSyxTQUFyQjtBQUNEOztBQUVELHNCQUFNLHFCQUFxQixpQ0FBaUMsVUFBakMsQ0FBM0I7QUFBQSxzQkFDTSx3QkFBd0IsUUFBUSxrQkFBUixDQUQ5Qjs7QUFHQSx5QkFBTyxxQkFBUDtBQUNEOzs7bUNBRU0sYyxFQUFnQixlLEVBQWlCLFUsRUFBWTtBQUNsRCxzQkFBTSxxQkFBcUIsS0FBSywyQkFBTCxDQUFpQyxVQUFqQyxDQUEzQjtBQUFBLHNCQUNNLGtCQUFrQixLQUFLLHdCQUFMLENBQThCLGtCQUE5QixDQUR4QjtBQUFBLHNCQUVNLG1CQUFtQixLQUFLLHlCQUFMLENBQStCLGtCQUEvQixDQUZ6QjtBQUFBLHNCQUdNLHdCQUF3QixLQUFLLDhCQUFMLENBQW9DLGtCQUFwQyxDQUg5Qjs7QUFLQSxrQ0FBZ0IscUJBQWhCLENBQXNDLGtCQUF0QztBQUNBLGtDQUFnQixrQkFBaEIsQ0FBbUMsZUFBbkM7QUFDQSxrQ0FBZ0IsbUJBQWhCLENBQW9DLGdCQUFwQztBQUNBLGtDQUFnQix3QkFBaEIsQ0FBeUMscUJBQXpDOztBQUVBLHVKQUFhLGNBQWIsRUFBNkIsZUFBN0IsRUFBOEMsVUFBOUM7QUFDRDs7OzJDQUVxQixLLEVBQU8sVSxFQUFZO0FBQ2pDLHNCQUFFLFNBQUYsR0FBZ0IsVUFBaEIsQ0FBRSxTQUFGO0FBQUEsc0JBQ0EscUJBREEsR0FDd0IsY0FBYyxjQUFkLENBQTZCLEtBQTdCLEVBQW9DLFVBQXBDLEVBQWdELFNBQWhELENBRHhCOzs7QUFHTix5QkFBTyxxQkFBUDtBQUNEOzs7O0VBekNpQyxhOztBQTRDcEMsT0FBTyxPQUFQLEdBQWlCLHFCQUFqQjs7O0FDckRBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxVQUFVLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ00saUJBQWlCLFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNLGtCQUFrQixRQUFRLHFCQUFSLENBRnhCOztJQUlNLEs7OztBQUNKLGlCQUFZLGNBQVosRUFBNEIsZUFBNUIsRUFBNkMsTUFBN0MsRUFBcUQ7QUFBQTs7QUFBQTs7QUFHbkQsVUFBSyxjQUFMLEdBQXNCLGNBQXRCO0FBQ0EsVUFBSyxlQUFMLEdBQXVCLGVBQXZCOztBQUVBLFVBQUssTUFBTCxHQUFjLE1BQWQ7QUFObUQ7QUFPcEQ7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUssTUFBWjtBQUNEOzs7d0NBRW1CO0FBQ2xCLGFBQU8sS0FBSyxjQUFaO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsYUFBTyxLQUFLLGVBQVo7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTSxjQUFjLEtBQUssTUFBTCxDQUFZLGNBQVosRUFBcEI7QUFBQSxVQUNNLGVBQWUsS0FBSyxNQUFMLENBQVksZUFBWixFQURyQjtBQUFBLFVBRU0sUUFBUSxXQUZkO0FBQUEsVUFFNEI7QUFDdEIsZUFBUyxZQUhmLENBRE8sQ0FJdUI7O0FBRTlCLFdBQUssTUFBTCxDQUFZLE1BQVosQ0FBbUIsS0FBbkIsRUFBMEIsTUFBMUI7QUFDRDs7OzJCQUVNLFksRUFBYyxjLEVBQWdCLGMsRUFBZ0IsZ0IsRUFBa0IsWSxFQUFjO0FBQ25GLFVBQU0sd0JBQXdCLEtBQUssY0FBTCxDQUFvQixVQUFwQixFQUE5QjtBQUFBLFVBQ00seUJBQXlCLEtBQUssZUFBTCxDQUFxQixVQUFyQixFQUQvQjs7QUFHQSxXQUFLLE1BQUwsQ0FBWSxLQUFaOztBQUVBLFdBQUssTUFBTCxDQUFZLFVBQVosQ0FBdUIscUJBQXZCOztBQUVBLFdBQUssY0FBTCxDQUFvQixXQUFwQixDQUFnQyxLQUFLLE1BQXJDOztBQUVBLFdBQUssTUFBTCxDQUFZLE1BQVosQ0FBbUIsS0FBSyxjQUF4QixFQUF3QyxZQUF4QyxFQUFzRCxjQUF0RCxFQUFzRSxjQUF0RSxFQUFzRixnQkFBdEYsRUFBd0csWUFBeEc7O0FBRUEsV0FBSyxNQUFMLENBQVksVUFBWixDQUF1QixzQkFBdkI7O0FBRUEsV0FBSyxlQUFMLENBQXFCLFdBQXJCLENBQWlDLEtBQUssTUFBdEM7O0FBRUEsV0FBSyxlQUFMLENBQXFCLGVBQXJCLENBQXFDLEtBQUssTUFBMUM7O0FBRUEsV0FBSyxNQUFMLENBQVksTUFBWixDQUFtQixLQUFLLGVBQXhCLEVBQXlDLFlBQXpDLEVBQXVELGNBQXZELEVBQXVFLGNBQXZFLEVBQXVGLGdCQUF2RixFQUF5RyxZQUF6RztBQUNEOzs7a0NBRWEsWSxFQUFjLGMsRUFBZ0IsYyxFQUFnQixnQixFQUFrQixZLEVBQWM7QUFDMUYsV0FBSyxNQUFMLENBQVksWUFBWixFQUEwQixjQUExQixFQUEwQyxjQUExQyxFQUEwRCxnQkFBMUQsRUFBNEUsWUFBNUU7QUFDRDs7O2lDQUVZO0FBQ1gsV0FBSyxhQUFMOztBQUVBLFdBQUssUUFBTCxDQUFjLEtBQUssYUFBTCxDQUFtQixJQUFuQixDQUF3QixJQUF4QixDQUFkOztBQUVBLGFBQU8sUUFBUCxHQUFrQixZQUFXO0FBQzNCLGFBQUssTUFBTDs7QUFFQSxhQUFLLFdBQUw7QUFDRCxPQUppQixDQUloQixJQUpnQixDQUlYLElBSlcsQ0FBbEI7O0FBTUEsV0FBSyxNQUFMOztBQUVBLFdBQUssV0FBTDtBQUNEOzs7bUNBRXFCLFUsRUFBWTtBQUFBLFVBQ3hCLGFBRHdCLEdBQ1ksVUFEWixDQUN4QixhQUR3QjtBQUFBLFVBQ1QsUUFEUyxHQUNZLFVBRFosQ0FDVCxRQURTO0FBQUEsVUFDQyxNQURELEdBQ1ksVUFEWixDQUNDLE1BREQ7QUFBQSxVQUUxQixjQUYwQixHQUVULGVBQWUsV0FBZixDQUEyQixNQUEzQixDQUZTO0FBQUEsVUFHMUIsZUFIMEIsR0FHUixnQkFBZ0IsV0FBaEIsQ0FBNEIsTUFBNUIsQ0FIUTtBQUFBLFVBSTFCLEtBSjBCLEdBSWxCLFFBQVEsY0FBUixDQUF1QixLQUF2QixFQUE4QixVQUE5QixFQUEwQyxjQUExQyxFQUEwRCxlQUExRCxFQUEyRSxNQUEzRSxDQUprQjtBQUFBLFVBSzFCLFVBTDBCLEdBS2IsRUFMYTs7O0FBT2hDLG9CQUFjLE9BQWQsQ0FBc0IsVUFBUyxZQUFULEVBQXVCO0FBQzNDLHFCQUFhLE1BQWIsQ0FBb0IsY0FBcEIsRUFBb0MsZUFBcEMsRUFBcUQsVUFBckQ7QUFDRCxPQUZEOztBQUlBLFVBQUksUUFBSixFQUFjO0FBQ1osd0JBQWdCLGFBQWhCLENBQThCLFFBQTlCLEVBQXdDLE1BQXhDO0FBQ0Q7O0FBRUQscUJBQWUsYUFBZixDQUE2QixNQUE3QjtBQUNBLHNCQUFnQixhQUFoQixDQUE4QixNQUE5Qjs7QUFFQSxhQUFPLGtCQUFQO0FBQ0EsYUFBTyxtQkFBUDs7QUFFQSxZQUFNLFVBQU47O0FBRUEsYUFBTyxLQUFQO0FBQ0Q7Ozs7RUFoR2lCLE87O0FBbUdwQixPQUFPLE9BQVAsR0FBaUIsS0FBakI7OztBQ3pHQTs7QUFFQSxPQUFPLE9BQVAsR0FBaUI7QUFDZixVQUFRLFFBQVEsbUJBQVIsQ0FETztBQUVmLGtCQUFnQixRQUFRLDJCQUFSO0FBRkQsQ0FBakI7OztBQ0ZBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxTQUFTLFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTSx3QkFBd0IsUUFBUSxrQ0FBUixDQUQ5Qjs7SUFHUSx5QixHQUE4QixNLENBQTlCLHlCOztJQUVGLGM7Ozs7Ozs7Ozs7O21EQUMyQjtBQUM3QixhQUFPLHlCQUFQO0FBQ0Q7OzttQ0FFcUIsVSxFQUFZO0FBQUUsYUFBTyxzQkFBc0IsY0FBdEIsQ0FBcUMsY0FBckMsRUFBcUQsVUFBckQsQ0FBUDtBQUEwRTs7OztFQUxuRixxQjs7QUFRN0IsT0FBTyxPQUFQLEdBQWlCLGNBQWpCOzs7QUNmQTs7Ozs7Ozs7OztBQUVBLElBQU0sV0FBVyxRQUFRLGFBQVIsQ0FBakI7QUFBQSxJQUNNLHdCQUF3QixRQUFRLGtDQUFSLENBRDlCOztJQUdRLHlCLEdBQThCLFEsQ0FBOUIseUI7O0lBRUYsZ0I7Ozs7Ozs7Ozs7O21EQUMyQjtBQUM3QixhQUFPLHlCQUFQO0FBQ0Q7OzttQ0FFcUIsVSxFQUFZO0FBQUUsYUFBTyxzQkFBc0IsY0FBdEIsQ0FBcUMsZ0JBQXJDLEVBQXVELFVBQXZELENBQVA7QUFBNEU7Ozs7RUFMbkYscUI7O0FBUS9CLE9BQU8sT0FBUCxHQUFpQixnQkFBakI7OztBQ2ZBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxRQUFRLFFBQVEsVUFBUixDQUFkO0FBQUEsSUFDTSx3QkFBd0IsUUFBUSxrQ0FBUixDQUQ5Qjs7SUFHUSx5QixHQUE4QixLLENBQTlCLHlCOztJQUVGLGE7Ozs7Ozs7Ozs7O21EQUMyQjtBQUM3QixhQUFPLHlCQUFQO0FBQ0Q7OzttQ0FFcUIsVSxFQUFZO0FBQUUsYUFBTyxzQkFBc0IsY0FBdEIsQ0FBcUMsYUFBckMsRUFBb0QsVUFBcEQsQ0FBUDtBQUF5RTs7OztFQUxuRixxQjs7QUFRNUIsT0FBTyxPQUFQLEdBQWlCLGFBQWpCOzs7QUNmQTs7QUFFQSxJQUFNLDRCQUE0QixDQUUxQixHQUYwQixFQUVyQixHQUZxQixFQUVoQixHQUZnQixFQUcxQixHQUgwQixFQUdyQixHQUhxQixFQUdoQixHQUhnQixFQUkxQixHQUowQixFQUlyQixHQUpxQixFQUloQixHQUpnQixFQUsxQixHQUwwQixFQUtyQixHQUxxQixFQUtoQixHQUxnQixFQU8xQixHQVAwQixFQU9yQixHQVBxQixFQU9oQixHQVBnQixFQVExQixHQVIwQixFQVFyQixHQVJxQixFQVFoQixHQVJnQixFQVMxQixHQVQwQixFQVNyQixHQVRxQixFQVNoQixHQVRnQixFQVUxQixHQVYwQixFQVVyQixHQVZxQixFQVVoQixHQVZnQixFQVkxQixHQVowQixFQVlyQixHQVpxQixFQVloQixHQVpnQixFQWExQixHQWIwQixFQWFyQixHQWJxQixFQWFoQixHQWJnQixFQWMxQixHQWQwQixFQWNyQixHQWRxQixFQWNoQixHQWRnQixFQWUxQixHQWYwQixFQWVyQixHQWZxQixFQWVoQixHQWZnQixFQWlCMUIsR0FqQjBCLEVBaUJyQixHQWpCcUIsRUFpQmhCLEdBakJnQixFQWtCMUIsR0FsQjBCLEVBa0JyQixHQWxCcUIsRUFrQmhCLEdBbEJnQixFQW1CMUIsR0FuQjBCLEVBbUJyQixHQW5CcUIsRUFtQmhCLEdBbkJnQixFQW9CMUIsR0FwQjBCLEVBb0JyQixHQXBCcUIsRUFvQmhCLEdBcEJnQixFQXNCMUIsR0F0QjBCLEVBc0JyQixHQXRCcUIsRUFzQmhCLEdBdEJnQixFQXVCMUIsR0F2QjBCLEVBdUJyQixHQXZCcUIsRUF1QmhCLEdBdkJnQixFQXdCMUIsR0F4QjBCLEVBd0JyQixHQXhCcUIsRUF3QmhCLEdBeEJnQixFQXlCMUIsR0F6QjBCLEVBeUJyQixHQXpCcUIsRUF5QmhCLEdBekJnQixFQTJCMUIsR0EzQjBCLEVBMkJyQixHQTNCcUIsRUEyQmhCLEdBM0JnQixFQTRCMUIsR0E1QjBCLEVBNEJyQixHQTVCcUIsRUE0QmhCLEdBNUJnQixFQTZCMUIsR0E3QjBCLEVBNkJyQixHQTdCcUIsRUE2QmhCLEdBN0JnQixFQThCMUIsR0E5QjBCLEVBOEJyQixHQTlCcUIsRUE4QmhCLEdBOUJnQixDQUFsQzs7QUFrQ0EsT0FBTyxPQUFQLEdBQWlCO0FBQ2YsNkJBQTJCO0FBRFosQ0FBakI7OztBQ3BDQTs7QUFFQSxJQUFNLFlBQVksUUFBUSxpQkFBUixDQUFsQjtBQUFBLElBQ00saUJBQWlCLFFBQVEsdUJBQVIsQ0FEdkI7O0FBR00sSUFBRSxjQUFGLEdBQXFCLFNBQXJCLENBQUUsY0FBRjtBQUFBLElBQ0UsT0FERixHQUNjLGNBRGQsQ0FDRSxPQURGOzs7QUFHTixJQUFNLDRCQUE0QixvQ0FBbEM7O0FBRUEsT0FBTyxPQUFQLEdBQWlCO0FBQ2YsaUNBQTJCO0FBRFosQ0FBakI7O0FBSUEsU0FBUyxrQ0FBVCxHQUE4QztBQUM1QyxVQUFNLCtCQUErQixFQUFyQztBQUFBLFVBQ00sUUFBUSxjQURkO0FBQUEsVUFFTSxPQUFPLElBQUksS0FBSyxFQUFULEdBQWMsS0FGM0I7O0FBSUEsV0FBSyxJQUFJLFFBQVEsQ0FBakIsRUFBb0IsUUFBUSxLQUE1QixFQUFtQyxPQUFuQyxFQUE0QztBQUMxQyxnQkFBTSxRQUFRLE9BQU8sS0FBckI7QUFBQSxnQkFDTSxTQUFTLENBQUMsS0FBSyxHQUFMLENBQVMsS0FBVCxJQUFrQixDQUFuQixJQUF3QixDQUR2QztBQUFBLGdCQUVNLFNBQVMsQ0FBQyxLQUFLLEdBQUwsQ0FBUyxLQUFULElBQWtCLENBQW5CLElBQXdCLENBRnZDO0FBQUEsZ0JBR00sVUFBVSxDQUFDLEtBQUssR0FBTCxDQUFTLFFBQVEsSUFBakIsSUFBeUIsQ0FBMUIsSUFBK0IsQ0FIL0M7QUFBQSxnQkFJTSxVQUFVLENBQUMsS0FBSyxHQUFMLENBQVMsUUFBUSxJQUFqQixJQUF5QixDQUExQixJQUErQixDQUovQztBQUFBLGdCQUtNLFNBQVMsQ0FMZjtBQUFBLGdCQU1NLFVBQVUsQ0FOaEI7O0FBUUEseUNBQTZCLElBQTdCLENBQWtDLENBQUUsTUFBRixFQUFVLE1BQVYsRUFBa0IsTUFBbEIsQ0FBbEM7QUFDQSx5Q0FBNkIsSUFBN0IsQ0FBa0MsQ0FBRSxPQUFGLEVBQVcsT0FBWCxFQUFvQixNQUFwQixDQUFsQztBQUNBLHlDQUE2QixJQUE3QixDQUFrQyxDQUFFLE9BQUYsRUFBVyxPQUFYLEVBQW9CLE9BQXBCLENBQWxDO0FBQ0EseUNBQTZCLElBQTdCLENBQWtDLENBQUUsTUFBRixFQUFVLE1BQVYsRUFBa0IsT0FBbEIsQ0FBbEM7QUFDRDs7QUFFRCxVQUFNLDRCQUE0QixRQUFRLDRCQUFSLENBQWxDLENBcEI0QyxDQW9COEI7O0FBRTFFLGFBQU8seUJBQVA7QUFDRDs7O0FDckNEOztBQUVBLElBQU0sNEJBQTRCLENBRTFCLEdBRjBCLEVBRXJCLEdBRnFCLEVBRWhCLEdBRmdCLEVBRzFCLEdBSDBCLEVBR3JCLEdBSHFCLEVBR2hCLEdBSGdCLEVBSTFCLEdBSjBCLEVBSXJCLEdBSnFCLEVBSWhCLEdBSmdCLEVBSzFCLEdBTDBCLEVBS3JCLEdBTHFCLEVBS2hCLEdBTGdCLENBQWxDOztBQVNBLE9BQU8sT0FBUCxHQUFpQjtBQUNmLDZCQUEyQjtBQURaLENBQWpCOzs7QUNYQTs7Ozs7Ozs7OztBQUVBLElBQU0sU0FBUyxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ00sd0JBQXdCLFFBQVEsa0NBQVIsQ0FEOUI7O0lBR1EseUIsR0FBOEIsTSxDQUE5Qix5Qjs7SUFFRixjOzs7Ozs7Ozs7OzttREFDMkI7QUFDN0IsYUFBTyx5QkFBUDtBQUNEOzs7bUNBRXFCLFUsRUFBWTtBQUFFLGFBQU8sc0JBQXNCLGNBQXRCLENBQXFDLGNBQXJDLEVBQXFELFVBQXJELENBQVA7QUFBMEU7Ozs7RUFMbkYscUI7O0FBUTdCLE9BQU8sT0FBUCxHQUFpQixjQUFqQjs7O0FDZkE7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFdBQVcsUUFBUSxhQUFSLENBQWpCO0FBQUEsSUFDTSx3QkFBd0IsUUFBUSxrQ0FBUixDQUQ5Qjs7SUFHUSx5QixHQUE4QixRLENBQTlCLHlCOztJQUVGLGdCOzs7Ozs7Ozs7OzttREFDMkI7QUFDN0IsYUFBTyx5QkFBUDtBQUNEOzs7bUNBRXFCLFUsRUFBWTtBQUFFLGFBQU8sc0JBQXNCLGNBQXRCLENBQXFDLGdCQUFyQyxFQUF1RCxVQUF2RCxDQUFQO0FBQTRFOzs7O0VBTG5GLHFCOztBQVEvQixPQUFPLE9BQVAsR0FBaUIsZ0JBQWpCOzs7QUNmQTs7Ozs7Ozs7OztBQUVBLElBQU0sUUFBUSxRQUFRLFVBQVIsQ0FBZDtBQUFBLElBQ00sd0JBQXdCLFFBQVEsa0NBQVIsQ0FEOUI7O0lBR1EseUIsR0FBOEIsSyxDQUE5Qix5Qjs7SUFFRixhOzs7Ozs7Ozs7OzttREFDMkI7QUFDN0IsYUFBTyx5QkFBUDtBQUNEOzs7bUNBRXFCLFUsRUFBWTtBQUFFLGFBQU8sc0JBQXNCLGNBQXRCLENBQXFDLGFBQXJDLEVBQW9ELFVBQXBELENBQVA7QUFBeUU7Ozs7RUFMbkYscUI7O0FBUTVCLE9BQU8sT0FBUCxHQUFpQixhQUFqQjs7O0FDZkE7O0FBRUEsUUFBUSxXQUFSOztBQUVBLElBQU0sU0FBUyxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ00sUUFBUSxRQUFRLGtCQUFSLENBRGQ7QUFBQSxJQUVNLFNBQVMsUUFBUSxtQkFBUixDQUZmO0FBQUEsSUFHTSxRQUFRLFFBQVEsd0JBQVIsQ0FIZDtBQUFBLElBSU0sYUFBYSxRQUFRLDZCQUFSLENBSm5CO0FBQUEsSUFLTSxhQUFhLFFBQVEsOEJBQVIsQ0FMbkI7QUFBQSxJQU1NLGFBQWEsUUFBUSw4QkFBUixDQU5uQjtBQUFBLElBT00sY0FBYyxRQUFRLCtCQUFSLENBUHBCO0FBQUEsSUFRTSxjQUFjLFFBQVEsOEJBQVIsQ0FScEI7QUFBQSxJQVNNLGNBQWMsUUFBUSwrQkFBUixDQVRwQjtBQUFBLElBVU0sZUFBZSxRQUFRLGdDQUFSLENBVnJCO0FBQUEsSUFXTSxpQkFBaUIsUUFBUSxrQ0FBUixDQVh2QjtBQUFBLElBWU0sb0JBQW9CLFFBQVEsdUJBQVIsQ0FaMUI7O0lBY1EsZSxHQUFvQixpQixDQUFwQixlOzs7QUFFUixJQUFNLGlCQUFpQixTQUFqQixjQUFpQixHQUFNOztBQUUzQixNQUFNLFNBQVMsSUFBSSxNQUFKLEVBQWY7O0FBRUEsa0JBQWdCLFVBQUMsUUFBRDtBQUFBLFdBRWQ7QUFBQyxXQUFEO0FBQUEsUUFBTyxVQUFVLFFBQWpCLEVBQTJCLFFBQVEsTUFBbkM7QUFDRSwwQkFBQyxNQUFELElBQVEsaUJBQWlCLEdBQXpCLEVBQThCLGVBQWUsQ0FBRSxDQUFDLEVBQUgsRUFBTyxDQUFQLEVBQVUsQ0FBQyxFQUFYLENBQTdDLEVBQThELFFBQVEsTUFBdEUsR0FERjtBQUVFLDBCQUFDLFdBQUQsT0FGRjtBQUdFLDBCQUFDLFVBQUQsT0FIRjtBQUlFLDBCQUFDLFdBQUQsT0FKRjtBQUtFLDBCQUFDLFVBQUQsT0FMRjtBQU1FLDBCQUFDLFVBQUQsT0FORjtBQU9FLDBCQUFDLFdBQUQsT0FQRjtBQVFFLDBCQUFDLFlBQUQsT0FSRjtBQVNFLDBCQUFDLGNBQUQsT0FURjtBQVVFLDBCQUFDLEtBQUQ7QUFWRixLQUZjO0FBQUEsR0FBaEI7QUFnQkQsQ0FwQkQ7O0FBc0JBLE9BQU8sT0FBUCxHQUFpQixjQUFqQjs7O0FDMUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxnQkFBZ0IsUUFBUSx5QkFBUixDQUF0QjtBQUFBLElBQ00saUJBQWlCLFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNLFVBQVUsUUFBUSxvQkFBUixDQUZoQjs7SUFJUSxTLEdBQWMsTyxDQUFkLFM7O0lBRUYsYzs7Ozs7Ozs7Ozs7b0NBQ1k7QUFDZCxhQUFRLENBRU4sb0JBQUMsY0FBRCxJQUFnQixVQUFVLENBQUUsQ0FBRixFQUFLLEVBQUwsRUFBUyxDQUFULENBQTFCLEdBRk0sRUFHTixvQkFBQyxjQUFELElBQWdCLFVBQVUsQ0FBRSxDQUFGLEVBQUssRUFBTCxFQUFTLENBQVQsQ0FBMUIsR0FITSxFQUtOLG9CQUFDLE9BQUQsSUFBUyxVQUFVLENBQVUsQ0FBVixFQUFhLEVBQWIsRUFBaUIsQ0FBakIsQ0FBbkIsRUFBeUMsUUFBUSxDQUFqRCxHQUxNLEVBTU4sb0JBQUMsT0FBRCxJQUFTLFVBQVUsQ0FBRSxTQUFGLEVBQWEsRUFBYixFQUFpQixDQUFqQixDQUFuQixFQUF5QyxRQUFRLEVBQWpELEVBQXFELFdBQVcsQ0FBRSxDQUFGLEVBQUssQ0FBQyxFQUFOLEVBQVUsQ0FBVixDQUFoRSxHQU5NLENBQVI7QUFTRDs7O21DQUVxQixVLEVBQVk7QUFBRSxhQUFPLGNBQWMsY0FBZCxDQUE2QixjQUE3QixFQUE2QyxVQUE3QyxDQUFQO0FBQWtFOzs7O0VBYjNFLGE7O0FBZ0I3QixPQUFPLE9BQVAsR0FBaUIsY0FBakI7OztBQ3hCQTs7Ozs7Ozs7OztBQUVBLElBQU0sZ0JBQWdCLFFBQVEseUJBQVIsQ0FBdEI7QUFBQSxJQUNNLFVBQVUsUUFBUSxvQkFBUixDQURoQjs7SUFHUSxTLEdBQWMsTyxDQUFkLFM7O0lBRUYsWTs7Ozs7Ozs7Ozs7b0NBQ1k7QUFDZCxhQUFRLENBRU4sb0JBQUMsT0FBRCxJQUFTLFVBQVUsQ0FBRSxFQUFGLEVBQU0sR0FBTixFQUFXLEVBQVgsQ0FBbkIsRUFBOEMsUUFBUSxDQUF0RCxHQUZNLEVBR04sb0JBQUMsT0FBRCxJQUFTLFVBQVUsQ0FBRSxFQUFGLEVBQU0sR0FBTixFQUFXLEtBQUcsU0FBZCxDQUFuQixFQUE4QyxRQUFRLENBQXRELEdBSE0sRUFJTixvQkFBQyxPQUFELElBQVMsVUFBVSxDQUFFLEVBQUYsRUFBTSxHQUFOLEVBQVcsRUFBWCxDQUFuQixFQUE4QyxXQUFXLENBQUUsQ0FBRixFQUFLLENBQUMsRUFBTixFQUFVLENBQVYsQ0FBekQsRUFBdUUsUUFBUSxFQUEvRSxHQUpNLENBQVI7QUFPRDs7O21DQUVxQixVLEVBQVk7QUFBRSxhQUFPLGNBQWMsY0FBZCxDQUE2QixZQUE3QixFQUEyQyxVQUEzQyxDQUFQO0FBQWdFOzs7O0VBWDNFLGE7O0FBYzNCLE9BQU8sT0FBUCxHQUFpQixZQUFqQjs7O0FDckJBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxnQkFBZ0IsUUFBUSx5QkFBUixDQUF0QjtBQUFBLElBQ00saUJBQWlCLFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNLFVBQVUsUUFBUSxvQkFBUixDQUZoQjs7SUFJUSxTLEdBQWMsTyxDQUFkLFM7O0lBRUYsVzs7Ozs7Ozs7Ozs7b0NBQ1k7QUFDZCxhQUFRLENBRU4sb0JBQUMsY0FBRCxJQUFnQixVQUFVLENBQUUsRUFBRixFQUFNLEVBQU4sRUFBVyxDQUFYLENBQTFCLEdBRk0sRUFHTixvQkFBQyxjQUFELElBQWdCLFVBQVUsQ0FBRSxFQUFGLEVBQU0sRUFBTixFQUFXLENBQVgsQ0FBMUIsR0FITSxFQUlOLG9CQUFDLGNBQUQsSUFBZ0IsVUFBVSxDQUFFLEVBQUYsRUFBTSxFQUFOLEVBQVcsQ0FBWCxDQUExQixHQUpNLEVBS04sb0JBQUMsY0FBRCxJQUFnQixVQUFVLENBQUUsRUFBRixFQUFNLEVBQU4sRUFBVyxDQUFYLENBQTFCLEdBTE0sRUFNTixvQkFBQyxjQUFELElBQWdCLFVBQVUsQ0FBRSxFQUFGLEVBQU0sRUFBTixFQUFXLENBQVgsQ0FBMUIsR0FOTSxFQU9OLG9CQUFDLGNBQUQsSUFBZ0IsVUFBVSxDQUFFLEVBQUYsRUFBTSxFQUFOLEVBQVUsRUFBVixDQUExQixHQVBNLEVBUU4sb0JBQUMsY0FBRCxJQUFnQixVQUFVLENBQUUsRUFBRixFQUFNLEVBQU4sRUFBVSxFQUFWLENBQTFCLEdBUk0sRUFVTixvQkFBQyxPQUFELElBQVMsVUFBVSxDQUFFLEVBQUYsRUFBTSxFQUFOLEVBQXFCLENBQXJCLENBQW5CLEVBQTZDLFFBQVEsRUFBckQsR0FWTSxFQVdOLG9CQUFDLE9BQUQsSUFBUyxVQUFVLENBQUUsRUFBRixFQUFNLEVBQU4sRUFBVSxLQUFHLFNBQWIsQ0FBbkIsRUFBNkMsUUFBUSxFQUFyRCxHQVhNLEVBWU4sb0JBQUMsT0FBRCxJQUFTLFVBQVUsQ0FBRSxFQUFGLEVBQU0sRUFBTixFQUFVLENBQVYsQ0FBbkIsRUFBNkMsV0FBVyxDQUFFLENBQUYsRUFBSyxDQUFDLEVBQU4sRUFBVSxDQUFWLENBQXhELEVBQXNFLFFBQVEsRUFBOUUsR0FaTSxDQUFSO0FBZUQ7OzttQ0FFcUIsVSxFQUFZO0FBQUUsYUFBTyxjQUFjLGNBQWQsQ0FBNkIsV0FBN0IsRUFBMEMsVUFBMUMsQ0FBUDtBQUErRDs7OztFQW5CM0UsYTs7QUFzQjFCLE9BQU8sT0FBUCxHQUFpQixXQUFqQjs7O0FDOUJBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxVQUFVLFFBQVEsbUJBQVIsQ0FBaEI7QUFBQSxJQUNNLFdBQVcsUUFBUSxvQkFBUixDQURqQjtBQUFBLElBRU0sZ0JBQWdCLFFBQVEseUJBQVIsQ0FGdEI7O0FBSU0sSUFBRSxTQUFGLEdBQWdCLE9BQWhCLENBQUUsU0FBRjtBQUFBLElBQ0EsYUFEQSxHQUNnQixDQURoQjs7SUFHQSxPOzs7Ozs7Ozs7OztrQ0FDVSxVLEVBQVk7QUFBQSxVQUNoQixNQURnQixHQUNMLFVBREssQ0FDaEIsTUFEZ0I7OztBQUd4QixhQUFRLENBRU4sb0JBQUMsT0FBRCxJQUFTLGVBQWUsYUFBeEIsRUFBdUMsUUFBUSxNQUEvQyxHQUZNLEVBSU4sb0JBQUMsUUFBRCxJQUFVLGVBQWUsYUFBekIsRUFBd0MsUUFBUSxNQUFoRCxFQUF3RCxXQUFXLFNBQW5FLEdBSk0sQ0FBUjtBQU9EOzs7bUNBRXFCLFUsRUFBWTtBQUFFLGFBQU8sY0FBYyxjQUFkLENBQTZCLE9BQTdCLEVBQXNDLFVBQXRDLENBQVA7QUFBMkQ7Ozs7RUFiM0UsYTs7QUFnQnRCLE9BQU8sTUFBUCxDQUFjLE9BQWQsRUFBdUI7QUFDckIsYUFBVztBQURVLENBQXZCOztBQUlBLE9BQU8sT0FBUCxHQUFpQixPQUFqQjs7O0FDN0JBOztBQUVBLElBQU0saUJBQWlCLFFBQVEsaUNBQVIsQ0FBdkI7O0FBRUEsSUFBTSxTQUFTLEdBQWY7QUFBQSxJQUNNLFlBQVksR0FEbEI7QUFBQSxJQUVNLFNBQVMsQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFZLEdBQVosRUFBaUIsQ0FBakIsQ0FGZjs7QUFJQSxJQUFNLFVBQVUsU0FBVixPQUFVLENBQUMsVUFBRCxFQUFnQjtBQUFBLE1BQ3RCLE1BRHNCLEdBQ0ksVUFESixDQUN0QixNQURzQjtBQUFBLE1BQ2QsYUFEYyxHQUNJLFVBREosQ0FDZCxhQURjO0FBQUEsTUFFeEIsS0FGd0IsR0FFaEIsTUFGZ0I7QUFBQSxNQUd4QixLQUh3QixHQUdoQixTQUhnQjtBQUFBLE1BSXhCLFFBSndCLEdBSWIsQ0FBRSxDQUFGLEVBQUssYUFBTCxFQUFvQixDQUFwQixDQUphOzs7QUFNOUIsU0FFRSxvQkFBQyxjQUFELElBQWdCLFFBQVEsTUFBeEIsRUFBZ0MsT0FBTyxLQUF2QyxFQUE4QyxRQUFRLE1BQXRELEVBQThELE9BQU8sS0FBckUsRUFBNEUsVUFBVSxRQUF0RixHQUZGO0FBS0QsQ0FYRDs7QUFhQSxPQUFPLE1BQVAsQ0FBYyxPQUFkLEVBQXVCO0FBQ3JCLGFBQVc7QUFEVSxDQUF2Qjs7QUFJQSxPQUFPLE9BQVAsR0FBaUIsT0FBakI7OztBQ3pCQTs7QUFFQSxJQUFNLG1CQUFtQixRQUFRLG1DQUFSLENBQXpCOztBQUVBLElBQU0sV0FBVyxLQUFqQjtBQUFBLElBQ00sU0FBUyxXQUFXLENBRDFCO0FBQUEsSUFFTSxTQUFTLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxHQUFaLEVBQWlCLENBQWpCLENBRmY7O0FBSUEsSUFBTSxVQUFVLFNBQVYsT0FBVSxDQUFDLFVBQUQsRUFBZ0I7QUFBQSxNQUN0QixRQURzQixHQUNNLFVBRE4sQ0FDdEIsUUFEc0I7QUFBQSxNQUNaLGFBRFksR0FDTSxVQUROLENBQ1osYUFEWTtBQUFBLE1BRXhCLEtBRndCLEdBRWhCLFFBRmdCO0FBQUEsTUFHeEIsTUFId0IsR0FHZixRQUhlO0FBQUEsTUFJeEIsS0FKd0IsR0FJaEIsYUFKZ0IsRUFJQTs7QUFFOUIsU0FFRSxvQkFBQyxnQkFBRCxJQUFrQixRQUFRLE1BQTFCLEVBQWtDLE9BQU8sS0FBekMsRUFBZ0QsUUFBUSxNQUF4RCxFQUFnRSxPQUFPLEtBQXZFLEVBQThFLFVBQVUsUUFBeEYsRUFBa0csV0FBVyxDQUFFLENBQUMsRUFBSCxFQUFPLENBQVAsRUFBVSxDQUFWLENBQTdHLEdBRkY7QUFLRCxDQVhEOztBQWFBLE9BQU8sTUFBUCxDQUFjLE9BQWQsRUFBdUI7QUFDckIsVUFBUTtBQURhLENBQXZCOztBQUlBLE9BQU8sT0FBUCxHQUFpQixPQUFqQjs7O0FDekJBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxVQUFVLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ00sZ0JBQWdCLFFBQVEsNEJBQVIsQ0FEdEI7O0lBR1EsTSxHQUFXLE8sQ0FBWCxNOztJQUVGLFE7Ozs7Ozs7Ozs7O2tDQUNVLFUsRUFBWTtBQUFBLFVBQ2hCLGFBRGdCLEdBQ3FCLFVBRHJCLENBQ2hCLGFBRGdCO0FBQUEsVUFDRCxNQURDLEdBQ3FCLFVBRHJCLENBQ0QsTUFEQztBQUFBLFVBQ08sU0FEUCxHQUNxQixVQURyQixDQUNPLFNBRFA7QUFBQSxVQUVsQixRQUZrQixHQUVQLEVBRk87QUFBQSxVQUdsQixJQUhrQixHQUdYLEdBSFc7QUFBQSxVQUlsQixLQUprQixHQUlWLFNBQVMsSUFKQzs7O0FBTXhCLFdBQUssSUFBSSxRQUFRLENBQWpCLEVBQW9CLFFBQVEsS0FBNUIsRUFBbUMsT0FBbkMsRUFBNEM7QUFDMUMsWUFBTSxXQUFXLENBQUMsT0FBTyxLQUFQLEdBQWUsTUFBaEIsRUFBd0IsQ0FBeEIsRUFBMkIsWUFBWSxDQUFaLEdBQWdCLE1BQTNDLEVBQW1ELENBQW5ELENBQWpCOztBQUVBLGlCQUFTLElBQVQsQ0FFRSxvQkFBQyxPQUFELElBQVMsVUFBVSxRQUFuQixFQUE2QixlQUFlLGFBQTVDLEdBRkY7QUFLRDs7QUFFRCxhQUFPLFFBQVA7QUFDRDs7O21DQUVxQixVLEVBQVk7QUFBRSxhQUFPLGNBQWMsY0FBZCxDQUE2QixRQUE3QixFQUF1QyxVQUF2QyxDQUFQO0FBQTREOzs7O0VBcEIzRSxhOztBQXVCdkIsT0FBTyxPQUFQLEdBQWlCLFFBQWpCOzs7QUM5QkE7Ozs7Ozs7Ozs7QUFFQSxJQUFNLE9BQU8sUUFBUSxnQkFBUixDQUFiO0FBQUEsSUFDTSxXQUFXLFFBQVEsb0JBQVIsQ0FEakI7QUFBQSxJQUVNLFdBQVcsUUFBUSxxQkFBUixDQUZqQjtBQUFBLElBR00sWUFBWSxRQUFRLHNCQUFSLENBSGxCO0FBQUEsSUFJTSxnQkFBZ0IsUUFBUSx5QkFBUixDQUp0Qjs7SUFNUSxNLEdBQXNCLEksQ0FBdEIsTTtJQUFRLFMsR0FBYyxJLENBQWQsUztJQUNWLEssR0FBUSxDO0lBQ1IsSyxHQUFRLEU7O0lBRVIsYzs7Ozs7Ozs7Ozs7a0NBQ1UsVSxFQUFZO0FBQ3hCLGFBQVEsQ0FFTixvQkFBQyxRQUFELElBQVUsVUFBVSxDQUFnQixDQUFoQixFQUFtQixDQUFDLE1BQXBCLEVBQXVDLENBQXZDLENBQXBCLEVBQWdFLE9BQU8sS0FBdkUsR0FGTSxFQUdOLG9CQUFDLFFBQUQsSUFBVSxVQUFVLENBQUUsUUFBTSxTQUFSLEVBQW1CLENBQUMsTUFBcEIsRUFBdUMsQ0FBdkMsQ0FBcEIsRUFBZ0UsT0FBTyxLQUF2RSxHQUhNLEVBS04sb0JBQUMsU0FBRCxJQUFXLFVBQVUsQ0FBZSxDQUFmLEVBQWtCLENBQUMsTUFBbkIsRUFBc0MsQ0FBdEMsQ0FBckIsRUFBZ0UsT0FBTyxLQUF2RSxHQUxNLEVBTU4sb0JBQUMsU0FBRCxJQUFXLFVBQVUsQ0FBZSxDQUFmLEVBQWtCLENBQUMsTUFBbkIsRUFBMkIsS0FBRyxTQUE5QixDQUFyQixFQUFnRSxPQUFPLEtBQXZFLEdBTk0sRUFRTixvQkFBQyxRQUFELElBQVUsVUFBVSxDQUFFLFNBQUYsRUFBYSxDQUFiLEVBQWdCLFNBQWhCLENBQXBCLEVBQWlELGNBQWMsUUFBUSxJQUFJLFNBQTNFLEVBQXNGLGNBQWMsUUFBUSxJQUFJLFNBQWhILEdBUk0sQ0FBUjtBQVdEOzs7bUNBRXFCLFUsRUFBWTtBQUFFLGFBQU8sY0FBYyxjQUFkLENBQTZCLGNBQTdCLEVBQTZDLFVBQTdDLENBQVA7QUFBa0U7Ozs7RUFmM0UsYTs7QUFrQjdCLE9BQU8sT0FBUCxHQUFpQixjQUFqQjs7O0FDOUJBOztBQUVBLElBQU0saUJBQWlCLFFBQVEsaUNBQVIsQ0FBdkI7O0FBRUEsSUFBTSxTQUFTLElBQWY7QUFBQSxJQUNNLFlBQVksR0FEbEI7O0FBR0EsSUFBTSxPQUFPLFNBQVAsSUFBTyxDQUFDLFVBQUQsRUFBZ0I7QUFBQSxNQUNuQixRQURtQixHQUNRLFVBRFIsQ0FDbkIsUUFEbUI7QUFBQSxNQUNULEtBRFMsR0FDUSxVQURSLENBQ1QsS0FEUztBQUFBLE1BQ0YsS0FERSxHQUNRLFVBRFIsQ0FDRixLQURFOzs7QUFHM0IsU0FFRSxvQkFBQyxjQUFELElBQWdCLFdBQVUsZ0JBQTFCLEVBQTJDLFVBQVUsUUFBckQsRUFBK0QsT0FBTyxLQUF0RSxFQUE2RSxPQUFPLEtBQXBGLEVBQTJGLFFBQVEsTUFBbkcsR0FGRjtBQUtELENBUkQ7O0FBVUEsT0FBTyxNQUFQLENBQWMsSUFBZCxFQUFvQjtBQUNsQixVQUFRLE1BRFU7QUFFbEIsYUFBVztBQUZPLENBQXBCOztBQUtBLE9BQU8sT0FBUCxHQUFpQixJQUFqQjs7O0FDdEJBOztBQUVBLElBQU0sT0FBTyxRQUFRLFNBQVIsQ0FBYjs7SUFFUSxTLEdBQWMsSSxDQUFkLFM7OztBQUVSLElBQU0sV0FBVyxTQUFYLFFBQVcsQ0FBQyxVQUFELEVBQWdCO0FBQUEsTUFDdkIsUUFEdUIsR0FDSCxVQURHLENBQ3ZCLFFBRHVCO0FBQUEsTUFDYixLQURhLEdBQ0gsVUFERyxDQUNiLEtBRGE7QUFBQSxNQUV6QixLQUZ5QixHQUVqQixTQUZpQixFQUVMOztBQUUxQixTQUVFLG9CQUFDLElBQUQsSUFBTSxVQUFVLFFBQWhCLEVBQTBCLE9BQU8sS0FBakMsRUFBd0MsT0FBTyxLQUEvQyxHQUZGO0FBS0QsQ0FURDs7QUFXQSxPQUFPLE9BQVAsR0FBaUIsUUFBakI7OztBQ2pCQTs7QUFFQSxJQUFNLE9BQU8sUUFBUSxTQUFSLENBQWI7O0lBRVEsUyxHQUFjLEksQ0FBZCxTOzs7QUFFUixJQUFNLFlBQVksU0FBWixTQUFZLENBQUMsVUFBRCxFQUFnQjtBQUFBLE1BQ3hCLFFBRHdCLEdBQ0osVUFESSxDQUN4QixRQUR3QjtBQUFBLE1BQ2QsS0FEYyxHQUNKLFVBREksQ0FDZCxLQURjO0FBQUEsTUFFMUIsS0FGMEIsR0FFbEIsU0FGa0IsRUFFTjs7QUFFMUIsU0FFRSxvQkFBQyxJQUFELElBQU0sVUFBVSxRQUFoQixFQUEwQixPQUFPLEtBQWpDLEVBQXdDLE9BQU8sS0FBL0MsR0FGRjtBQUtELENBVEQ7O0FBV0EsT0FBTyxPQUFQLEdBQWlCLFNBQWpCOzs7QUNqQkE7Ozs7Ozs7Ozs7QUFFQSxJQUFNLGdCQUFnQixRQUFRLDRCQUFSLENBQXRCO0FBQUEsSUFDTSxpQkFBaUIsUUFBUSxpQ0FBUixDQUR2QjtBQUFBLElBRU0sbUJBQW1CLFFBQVEsbUNBQVIsQ0FGekI7O0FBSUEsSUFBTSxnQkFBZ0IsSUFBdEI7QUFBQSxJQUNNLG1CQUFtQixLQUR6QjtBQUFBLElBRU0saUJBQWlCLEVBRnZCO0FBQUEsSUFHTSxpQkFBaUIsQ0FIdkI7QUFBQSxJQUlNLFNBQVMsQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFZLEdBQVosRUFBaUIsRUFBakIsQ0FKZjs7SUFNTSxROzs7Ozs7Ozs7OztrQ0FDVSxVLEVBQVk7QUFBQSxVQUNoQixZQURnQixHQUNlLFVBRGYsQ0FDaEIsWUFEZ0I7QUFBQSxVQUNGLFlBREUsR0FDZSxVQURmLENBQ0YsWUFERTtBQUFBLFVBRWxCLFFBRmtCLEdBRVAsRUFGTzs7O0FBSXhCLFdBQUssSUFBSSxRQUFRLENBQWpCLEVBQW9CLFFBQVEsY0FBNUIsRUFBNEMsT0FBNUMsRUFBcUQ7QUFDbkQsWUFBTSxPQUFPLGVBQWUsY0FBNUI7QUFBQSxZQUNNLFFBQVEsZ0JBRGQ7QUFBQSxZQUNpQztBQUMzQixpQkFBUyxhQUZmO0FBQUEsWUFHTSxRQUFRLFlBSGQ7O0FBS0EsaUJBQVMsSUFBVCxDQUVFLG9CQUFDLGNBQUQsSUFBZ0IsUUFBUSxNQUF4QixFQUFnQyxVQUFVLENBQUMsT0FBTyxLQUFSLEVBQWUsQ0FBQyxNQUFoQixFQUF3QixDQUF4QixDQUExQyxFQUFzRSxPQUFPLEtBQTdFLEVBQW9GLFFBQVEsTUFBNUYsRUFBb0csT0FBTyxLQUEzRyxHQUZGO0FBS0Q7O0FBRUQsV0FBSyxJQUFJLFNBQVEsQ0FBakIsRUFBb0IsU0FBUSxjQUE1QixFQUE0QyxRQUE1QyxFQUFxRDtBQUNuRCxZQUFNLFFBQU8sZUFBZSxjQUE1QjtBQUFBLFlBQ00sV0FBVyxnQkFBZ0IsQ0FEakM7QUFBQSxZQUNvQztBQUM5QixpQkFBUSxRQUZkO0FBQUEsWUFFd0I7QUFDbEIsa0JBQVMsUUFIZjtBQUFBLFlBR3lCO0FBQ25CLGlCQUFRLFlBSmQsQ0FEbUQsQ0FLdEI7O0FBRTdCLGlCQUFTLElBQVQsQ0FFRSxvQkFBQyxnQkFBRCxJQUFrQixRQUFRLE1BQTFCLEVBQWtDLFVBQVUsQ0FBRSxDQUFGLEVBQUssQ0FBQyxDQUFELEdBQUssUUFBTCxHQUFnQixDQUFyQixFQUF3QixRQUFPLE1BQS9CLENBQTVDLEVBQW9GLE9BQU8sTUFBM0YsRUFBa0csUUFBUSxPQUExRyxFQUFrSCxPQUFPLE1BQXpILEVBQWdJLFdBQVcsQ0FBRSxDQUFGLEVBQUssRUFBTCxFQUFTLENBQVQsQ0FBM0ksR0FGRjtBQUtEOztBQUVELGFBQU8sUUFBUDtBQUNEOzs7bUNBRXFCLFUsRUFBWTtBQUFFLGFBQU8sY0FBYyxjQUFkLENBQTZCLFFBQTdCLEVBQXVDLFVBQXZDLENBQVA7QUFBNEQ7Ozs7RUFuQzNFLGE7O0FBc0N2QixPQUFPLE9BQVAsR0FBaUIsUUFBakI7OztBQ2xEQTs7Ozs7Ozs7OztBQUVBLElBQU0sZ0JBQWdCLFFBQVEsc0JBQVIsQ0FBdEI7QUFBQSxJQUNNLE9BQU8sUUFBUSxrQkFBUixDQURiO0FBQUEsSUFFTSxXQUFXLFFBQVEsc0JBQVIsQ0FGakI7QUFBQSxJQUdNLFlBQVksUUFBUSx1QkFBUixDQUhsQjtBQUFBLElBSU0sWUFBWSxRQUFRLHVCQUFSLENBSmxCO0FBQUEsSUFLTSxZQUFZLFFBQVEsdUJBQVIsQ0FMbEI7QUFBQSxJQU1NLFlBQVksUUFBUSx1QkFBUixDQU5sQjs7QUFRQSxJQUFNLGdCQUFnQixHQUF0QjtBQUFBLElBQ00sZUFBZSxDQURyQjtBQUFBLElBRU0sU0FBUyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FGZjs7SUFJTSxTOzs7Ozs7Ozs7OztrQ0FDVSxVLEVBQVk7QUFBQSxVQUNoQixNQURnQixHQUNMLFVBREssQ0FDaEIsTUFEZ0I7OztBQUd4QixhQUFRLENBRU4sb0JBQUMsSUFBRCxJQUFNLFFBQVEsTUFBZCxFQUFzQixjQUFjLFlBQXBDLEVBQWtELGVBQWUsYUFBakUsRUFBZ0YsUUFBUSxNQUF4RixHQUZNLEVBR04sb0JBQUMsU0FBRCxJQUFXLFFBQVEsTUFBbkIsRUFBMkIsY0FBYyxZQUF6QyxFQUF1RCxlQUFlLGFBQXRFLEVBQXFGLFFBQVEsTUFBN0YsR0FITSxFQUlOLG9CQUFDLFNBQUQsSUFBVyxRQUFRLE1BQW5CLEVBQTJCLGNBQWMsWUFBekMsRUFBdUQsZUFBZSxhQUF0RSxFQUFxRixRQUFRLE1BQTdGLEdBSk0sRUFLTixvQkFBQyxRQUFELElBQVUsUUFBUSxNQUFsQixFQUEwQixjQUFjLFlBQXhDLEVBQXNELGVBQWUsYUFBckUsRUFBb0YsUUFBUSxNQUE1RixHQUxNLEVBTU4sb0JBQUMsU0FBRCxJQUFXLFFBQVEsTUFBbkIsRUFBMkIsY0FBYyxZQUF6QyxFQUF1RCxlQUFlLGFBQXRFLEVBQXFGLFFBQVEsTUFBN0YsR0FOTSxFQU9OLG9CQUFDLFNBQUQsSUFBVyxRQUFRLE1BQW5CLEVBQTJCLGNBQWMsWUFBekMsRUFBdUQsZUFBZSxhQUF0RSxFQUFxRixRQUFRLE1BQTdGLEdBUE0sQ0FBUjtBQVVEOzs7bUNBRXFCLFUsRUFBWTtBQUFFLGFBQU8sY0FBYyxjQUFkLENBQTZCLFNBQTdCLEVBQXdDLFVBQXhDLENBQVA7QUFBNkQ7Ozs7RUFoQjNFLGE7O0FBbUJ4QixPQUFPLE9BQVAsR0FBaUIsU0FBakI7OztBQ2pDQTs7QUFFQSxJQUFNLGdCQUFnQixRQUFRLDZCQUFSLENBQXRCOztBQUVBLElBQU0sV0FBVyxTQUFYLFFBQVcsQ0FBQyxVQUFELEVBQWdCO0FBQUEsTUFDdkIsTUFEdUIsR0FDeUIsVUFEekIsQ0FDdkIsTUFEdUI7QUFBQSxNQUNmLFlBRGUsR0FDeUIsVUFEekIsQ0FDZixZQURlO0FBQUEsTUFDRCxhQURDLEdBQ3lCLFVBRHpCLENBQ0QsYUFEQztBQUFBLE1BQ2MsTUFEZCxHQUN5QixVQUR6QixDQUNjLE1BRGQ7QUFBQSxNQUV6QixLQUZ5QixHQUVqQixZQUZpQjtBQUFBLE1BR3pCLE1BSHlCLEdBR2hCLGFBSGdCO0FBQUEsTUFJekIsS0FKeUIsR0FJakIsQ0FKaUI7QUFBQSxNQUt6QixRQUx5QixHQUtkLENBQUUsWUFBRixFQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUxjO0FBQUEsTUFNekIsU0FOeUIsR0FNYixDQUFFLENBQUYsRUFBSyxDQUFDLEdBQU4sRUFBVyxDQUFYLENBTmE7OztBQVEvQixTQUVFLG9CQUFDLGFBQUQsSUFBZSxRQUFRLE1BQXZCLEVBQStCLE9BQU8sS0FBdEMsRUFBNkMsUUFBUSxNQUFyRCxFQUE2RCxPQUFPLEtBQXBFLEVBQTJFLFVBQVUsUUFBckYsRUFBK0YsV0FBVyxTQUExRyxHQUZGO0FBS0QsQ0FiRDs7QUFlQSxPQUFPLE9BQVAsR0FBaUIsUUFBakI7OztBQ25CQTs7QUFFQSxJQUFNLFlBQVksUUFBUSxjQUFSLENBQWxCOztBQUVBLElBQU0scUJBQXFCLFNBQXJCLGtCQUFxQixDQUFDLFVBQUQsRUFBZ0I7QUFBQSxNQUNqQyxRQURpQyxHQUNULFVBRFMsQ0FDakMsUUFEaUM7QUFBQSxNQUN2QixTQUR1QixHQUNULFVBRFMsQ0FDdkIsU0FEdUI7OztBQUd6QyxTQUVFLG9CQUFDLFNBQUQsSUFBVyxVQUFVLFFBQXJCLEVBQStCLFdBQVcsU0FBMUMsRUFBcUQsUUFBUSxFQUE3RCxHQUZGO0FBS0QsQ0FSRDs7QUFVQSxPQUFPLE9BQVAsR0FBaUIsa0JBQWpCOzs7QUNkQTs7QUFFQSxJQUFNLGdCQUFnQixRQUFRLDZCQUFSLENBQXRCOztBQUVBLElBQU0sWUFBWSxTQUFaLFNBQVksQ0FBQyxVQUFELEVBQWdCO0FBQUEsTUFDeEIsTUFEd0IsR0FDd0IsVUFEeEIsQ0FDeEIsTUFEd0I7QUFBQSxNQUNoQixZQURnQixHQUN3QixVQUR4QixDQUNoQixZQURnQjtBQUFBLE1BQ0YsYUFERSxHQUN3QixVQUR4QixDQUNGLGFBREU7QUFBQSxNQUNhLE1BRGIsR0FDd0IsVUFEeEIsQ0FDYSxNQURiO0FBQUEsTUFFMUIsS0FGMEIsR0FFbEIsWUFGa0I7QUFBQSxNQUcxQixNQUgwQixHQUdqQixhQUhpQjtBQUFBLE1BSTFCLEtBSjBCLEdBSWxCLENBSmtCO0FBQUEsTUFLMUIsUUFMMEIsR0FLZixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsTUFBUixDQUxlO0FBQUEsTUFNMUIsU0FOMEIsR0FNZCxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQU5jOzs7QUFRaEMsU0FFRSxvQkFBQyxhQUFELElBQWUsUUFBUSxNQUF2QixFQUErQixPQUFPLEtBQXRDLEVBQTZDLFFBQVEsTUFBckQsRUFBNkQsT0FBTyxLQUFwRSxFQUEyRSxVQUFVLFFBQXJGLEVBQStGLFdBQVcsU0FBMUcsR0FGRjtBQUtELENBYkQ7O0FBZUEsT0FBTyxPQUFQLEdBQWlCLFNBQWpCOzs7QUNuQkE7O0FBRUEsSUFBTSxnQkFBZ0IsUUFBUSw2QkFBUixDQUF0Qjs7QUFFQSxJQUFNLE9BQU8sU0FBUCxJQUFPLENBQUMsVUFBRCxFQUFnQjtBQUFBLE1BQ25CLE1BRG1CLEdBQzZCLFVBRDdCLENBQ25CLE1BRG1CO0FBQUEsTUFDWCxZQURXLEdBQzZCLFVBRDdCLENBQ1gsWUFEVztBQUFBLE1BQ0csYUFESCxHQUM2QixVQUQ3QixDQUNHLGFBREg7QUFBQSxNQUNrQixNQURsQixHQUM2QixVQUQ3QixDQUNrQixNQURsQjtBQUFBLE1BRXJCLEtBRnFCLEdBRWIsWUFGYTtBQUFBLE1BR3JCLE1BSHFCLEdBR1osTUFIWTtBQUFBLE1BSXJCLEtBSnFCLEdBSWIsYUFKYTtBQUFBLE1BS3JCLFFBTHFCLEdBS1YsQ0FBRSxDQUFGLEVBQUssYUFBTCxFQUFvQixNQUFwQixDQUxVO0FBQUEsTUFNckIsU0FOcUIsR0FNVCxDQUFFLENBQUMsRUFBSCxFQUFPLENBQVAsRUFBVSxDQUFWLENBTlM7O0FBTzdCOztBQUVFLFNBRUUsb0JBQUMsYUFBRCxJQUFlLFFBQVEsTUFBdkIsRUFBK0IsT0FBTyxLQUF0QyxFQUE2QyxRQUFRLE1BQXJELEVBQTZELE9BQU8sS0FBcEUsRUFBMkUsVUFBVSxRQUFyRixFQUErRixXQUFXLFNBQTFHLEdBRkY7QUFLRCxDQWREOztBQWdCQSxPQUFPLE9BQVAsR0FBaUIsSUFBakI7OztBQ3BCQTs7QUFFQSxJQUFNLGdCQUFnQixRQUFRLDZCQUFSLENBQXRCOztBQUVBLElBQU0sWUFBWSxTQUFaLFNBQVksQ0FBQyxVQUFELEVBQWdCO0FBQUEsTUFDeEIsTUFEd0IsR0FDd0IsVUFEeEIsQ0FDeEIsTUFEd0I7QUFBQSxNQUNoQixZQURnQixHQUN3QixVQUR4QixDQUNoQixZQURnQjtBQUFBLE1BQ0YsYUFERSxHQUN3QixVQUR4QixDQUNGLGFBREU7QUFBQSxNQUNhLE1BRGIsR0FDd0IsVUFEeEIsQ0FDYSxNQURiO0FBQUEsTUFFMUIsS0FGMEIsR0FFbEIsTUFGa0I7QUFBQSxNQUcxQixNQUgwQixHQUdqQixhQUhpQjtBQUFBLE1BSTFCLEtBSjBCLEdBSWxCLENBSmtCO0FBQUEsTUFLMUIsUUFMMEIsR0FLZixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUxlO0FBQUEsTUFNMUIsU0FOMEIsR0FNZCxDQUFFLENBQUYsRUFBSyxDQUFDLEVBQU4sRUFBVSxDQUFWLENBTmM7OztBQVFoQyxTQUVFLG9CQUFDLGFBQUQsSUFBZSxRQUFRLE1BQXZCLEVBQStCLE9BQU8sS0FBdEMsRUFBNkMsUUFBUSxNQUFyRCxFQUE2RCxPQUFPLEtBQXBFLEVBQTJFLFVBQVUsUUFBckYsRUFBK0YsV0FBVyxTQUExRyxHQUZGO0FBS0QsQ0FiRDs7QUFlQSxPQUFPLE9BQVAsR0FBaUIsU0FBakI7OztBQ25CQTs7QUFFQSxJQUFNLGdCQUFnQixRQUFRLDZCQUFSLENBQXRCOztBQUVBLElBQU0sWUFBWSxTQUFaLFNBQVksQ0FBQyxVQUFELEVBQWdCO0FBQUEsTUFDeEIsTUFEd0IsR0FDd0IsVUFEeEIsQ0FDeEIsTUFEd0I7QUFBQSxNQUNoQixZQURnQixHQUN3QixVQUR4QixDQUNoQixZQURnQjtBQUFBLE1BQ0YsYUFERSxHQUN3QixVQUR4QixDQUNGLGFBREU7QUFBQSxNQUNhLE1BRGIsR0FDd0IsVUFEeEIsQ0FDYSxNQURiO0FBQUEsTUFFMUIsS0FGMEIsR0FFbEIsTUFGa0I7QUFBQSxNQUcxQixNQUgwQixHQUdqQixhQUhpQjtBQUFBLE1BSTFCLEtBSjBCLEdBSWxCLENBSmtCO0FBQUEsTUFLMUIsUUFMMEIsR0FLZixDQUFFLFlBQUYsRUFBZ0IsQ0FBaEIsRUFBbUIsTUFBbkIsQ0FMZTtBQUFBLE1BTTFCLFNBTjBCLEdBTWQsQ0FBRSxDQUFGLEVBQUssQ0FBQyxFQUFOLEVBQVUsQ0FBVixDQU5jOzs7QUFRaEMsU0FFRSxvQkFBQyxhQUFELElBQWUsUUFBUSxNQUF2QixFQUErQixPQUFPLEtBQXRDLEVBQTZDLFFBQVEsTUFBckQsRUFBNkQsT0FBTyxLQUFwRSxFQUEyRSxVQUFVLFFBQXJGLEVBQStGLFdBQVcsU0FBMUcsR0FGRjtBQUtELENBYkQ7O0FBZUEsT0FBTyxPQUFQLEdBQWlCLFNBQWpCOzs7QUNuQkE7O0FBRUEsSUFBTSxZQUFZLFFBQVEsY0FBUixDQUFsQjs7QUFFQSxJQUFNLHNCQUFzQixTQUF0QixtQkFBc0IsQ0FBQyxVQUFELEVBQWdCO0FBQUEsTUFDbEMsUUFEa0MsR0FDVixVQURVLENBQ2xDLFFBRGtDO0FBQUEsTUFDeEIsU0FEd0IsR0FDVixVQURVLENBQ3hCLFNBRHdCOzs7QUFHMUMsU0FFRSxvQkFBQyxTQUFELElBQVcsVUFBVSxRQUFyQixFQUErQixXQUFXLFNBQTFDLEVBQXFELFFBQVEsRUFBN0QsR0FGRjtBQUtELENBUkQ7O0FBVUEsT0FBTyxPQUFQLEdBQWlCLG1CQUFqQjs7O0FDZEE7O0FBRUEsSUFBTSxnQkFBZ0IsUUFBUSw2QkFBUixDQUF0Qjs7QUFFQSxJQUFNLFlBQVksU0FBWixTQUFZLENBQUMsVUFBRCxFQUFnQjtBQUFBLE1BQ3hCLE1BRHdCLEdBQ3dCLFVBRHhCLENBQ3hCLE1BRHdCO0FBQUEsTUFDaEIsWUFEZ0IsR0FDd0IsVUFEeEIsQ0FDaEIsWUFEZ0I7QUFBQSxNQUNGLGFBREUsR0FDd0IsVUFEeEIsQ0FDRixhQURFO0FBQUEsTUFDYSxNQURiLEdBQ3dCLFVBRHhCLENBQ2EsTUFEYjtBQUFBLE1BRTFCLEtBRjBCLEdBRWxCLFlBRmtCO0FBQUEsTUFHMUIsTUFIMEIsR0FHakIsTUFIaUI7QUFBQSxNQUkxQixLQUowQixHQUlsQixDQUprQjtBQUFBLE1BSzFCLFFBTDBCLEdBS2YsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FMZTtBQUFBLE1BTTFCLFNBTjBCLEdBTWQsQ0FBRSxDQUFDLEVBQUgsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQU5jOzs7QUFRaEMsU0FFRSxvQkFBQyxhQUFELElBQWUsUUFBUSxNQUF2QixFQUErQixPQUFPLEtBQXRDLEVBQTZDLFFBQVEsTUFBckQsRUFBNkQsT0FBTyxLQUFwRSxFQUEyRSxVQUFVLFFBQXJGLEVBQStGLFdBQVcsU0FBMUcsR0FGRjtBQUtELENBYkQ7O0FBZUEsT0FBTyxPQUFQLEdBQWlCLFNBQWpCOzs7QUNuQkE7Ozs7Ozs7Ozs7QUFFQSxJQUFNLGdCQUFnQixRQUFRLHlCQUFSLENBQXRCO0FBQUEsSUFDTSxxQkFBcUIsUUFBUSx3QkFBUixDQUQzQjtBQUFBLElBRU0sc0JBQXNCLFFBQVEseUJBQVIsQ0FGNUI7O0lBSU0sVTs7Ozs7Ozs7Ozs7b0NBQ1k7QUFDZCxhQUFRLENBRU4sb0JBQUMsa0JBQUQsSUFBb0IsVUFBVSxDQUFHLENBQUgsRUFBTSxDQUFOLEVBQVMsRUFBVCxDQUE5QixFQUE2QyxXQUFXLENBQUUsQ0FBRixFQUFLLEVBQUwsRUFBUyxDQUFULENBQXhELEdBRk0sRUFHTixvQkFBQyxrQkFBRCxJQUFvQixVQUFVLENBQUcsQ0FBSCxFQUFNLENBQU4sRUFBUyxFQUFULENBQTlCLEVBQTZDLFdBQVcsQ0FBRSxDQUFGLEVBQUssRUFBTCxFQUFTLENBQVQsQ0FBeEQsR0FITSxFQUlOLG9CQUFDLG1CQUFELElBQXFCLFVBQVUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLEVBQVIsQ0FBL0IsRUFBNkMsV0FBVyxDQUFFLENBQUYsRUFBSyxFQUFMLEVBQVMsQ0FBVCxDQUF4RCxHQUpNLEVBS04sb0JBQUMsbUJBQUQsSUFBcUIsVUFBVSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVMsQ0FBVCxDQUEvQixFQUE2QyxXQUFXLENBQUUsQ0FBRixFQUFLLEVBQUwsRUFBUyxDQUFULENBQXhELEdBTE0sQ0FBUjtBQVFEOzs7bUNBRXFCLFUsRUFBWTtBQUFFLGFBQU8sY0FBYyxjQUFkLENBQTZCLFVBQTdCLEVBQXlDLFVBQXpDLENBQVA7QUFBOEQ7Ozs7RUFaM0UsYTs7QUFlekIsT0FBTyxPQUFQLEdBQWlCLFVBQWpCOzs7QUNyQkE7Ozs7Ozs7Ozs7QUFFQSxJQUFNLGdCQUFnQixRQUFRLHlCQUFSLENBQXRCO0FBQUEsSUFDSSxxQkFBcUIsUUFBUSx3QkFBUixDQUR6QjtBQUFBLElBRUksc0JBQXNCLFFBQVEseUJBQVIsQ0FGMUI7O0lBSU0sVzs7Ozs7Ozs7Ozs7b0NBQ1k7QUFDZCxhQUFRLENBRU4sb0JBQUMsa0JBQUQsSUFBb0IsVUFBVSxDQUFHLENBQUgsRUFBTSxHQUFOLEVBQVcsRUFBWCxDQUE5QixFQUErQyxXQUFXLENBQUUsQ0FBRixFQUFLLEVBQUwsRUFBUyxDQUFULENBQTFELEdBRk0sRUFHTixvQkFBQyxrQkFBRCxJQUFvQixVQUFVLENBQUcsQ0FBSCxFQUFNLEdBQU4sRUFBVyxFQUFYLENBQTlCLEVBQStDLFdBQVcsQ0FBRSxDQUFGLEVBQUssRUFBTCxFQUFTLENBQVQsQ0FBMUQsR0FITSxFQUlOLG9CQUFDLG1CQUFELElBQXFCLFVBQVUsQ0FBRSxDQUFGLEVBQUssR0FBTCxFQUFVLEVBQVYsQ0FBL0IsRUFBK0MsV0FBVyxDQUFFLENBQUYsRUFBSyxFQUFMLEVBQVMsQ0FBVCxDQUExRCxHQUpNLEVBS04sb0JBQUMsbUJBQUQsSUFBcUIsVUFBVSxDQUFFLENBQUYsRUFBSyxHQUFMLEVBQVcsQ0FBWCxDQUEvQixFQUErQyxXQUFXLENBQUUsQ0FBRixFQUFLLEVBQUwsRUFBUyxDQUFULENBQTFELEdBTE0sQ0FBUjtBQVFEOzs7bUNBRXFCLFUsRUFBWTtBQUFFLGFBQU8sY0FBYyxjQUFkLENBQTZCLFdBQTdCLEVBQTBDLFVBQTFDLENBQVA7QUFBK0Q7Ozs7RUFaM0UsYTs7QUFlMUIsT0FBTyxPQUFQLEdBQWlCLFdBQWpCOzs7QUNyQkE7Ozs7Ozs7Ozs7QUFFQSxJQUFNLGdCQUFnQixRQUFRLHlCQUFSLENBQXRCO0FBQUEsSUFDTSxzQkFBc0IsUUFBUSx5QkFBUixDQUQ1Qjs7SUFHTSxVOzs7Ozs7Ozs7OztvQ0FDWTtBQUNkLGFBQVEsQ0FFTixvQkFBQyxtQkFBRCxJQUFxQixVQUFVLENBQUUsQ0FBRixFQUFLLEVBQUwsRUFBUyxFQUFULENBQS9CLEVBQThDLFdBQVcsQ0FBRSxDQUFGLEVBQUssRUFBTCxFQUFTLENBQVQsQ0FBekQsR0FGTSxFQUdOLG9CQUFDLG1CQUFELElBQXFCLFVBQVUsQ0FBRSxDQUFGLEVBQUssRUFBTCxFQUFTLEVBQVQsQ0FBL0IsRUFBOEMsV0FBVyxDQUFFLENBQUYsRUFBSyxFQUFMLEVBQVMsQ0FBVCxDQUF6RCxHQUhNLEVBSU4sb0JBQUMsbUJBQUQsSUFBcUIsVUFBVSxDQUFFLENBQUYsRUFBSyxFQUFMLEVBQVMsRUFBVCxDQUEvQixFQUE4QyxXQUFXLENBQUUsQ0FBRixFQUFLLEVBQUwsRUFBUyxDQUFULENBQXpELEdBSk0sRUFLTixvQkFBQyxtQkFBRCxJQUFxQixVQUFVLENBQUUsQ0FBRixFQUFLLEVBQUwsRUFBVSxDQUFWLENBQS9CLEVBQThDLFdBQVcsQ0FBRSxDQUFGLEVBQUssRUFBTCxFQUFTLENBQVQsQ0FBekQsR0FMTSxDQUFSO0FBUUQ7OzttQ0FFcUIsVSxFQUFZO0FBQUUsYUFBTyxjQUFjLGNBQWQsQ0FBNkIsVUFBN0IsRUFBeUMsVUFBekMsQ0FBUDtBQUE4RDs7OztFQVozRSxhOztBQWV6QixPQUFPLE9BQVAsR0FBaUIsVUFBakI7OztBQ3BCQTs7Ozs7Ozs7OztBQUVBLElBQU0sZ0JBQWdCLFFBQVEsc0JBQVIsQ0FBdEI7QUFBQSxJQUNNLGVBQWUsUUFBUSw0QkFBUixDQURyQjs7SUFHTSxXOzs7Ozs7Ozs7Ozt1Q0FDZTtBQUNqQixhQUFRLENBRU4sb0JBQUMsWUFBRCxJQUFjLFVBQVUsQ0FBRSxDQUFDLEdBQUgsRUFBUSxDQUFDLENBQVQsRUFBWSxDQUFDLEdBQWIsQ0FBeEIsRUFBNEMsT0FBTyxJQUFuRCxFQUF5RCxRQUFRLENBQWpFLEVBQW9FLE9BQU8sRUFBM0UsR0FGTSxFQUdOLG9CQUFDLFlBQUQsSUFBYyxVQUFVLENBQUksRUFBSixFQUFRLENBQUMsQ0FBVCxFQUFZLENBQUMsR0FBYixDQUF4QixFQUE0QyxPQUFPLElBQW5ELEVBQXlELFFBQVEsQ0FBakUsRUFBb0UsT0FBTyxFQUEzRSxHQUhNLENBQVI7QUFNRDs7O21DQUVxQixVLEVBQVk7QUFBRSxhQUFPLGNBQWMsY0FBZCxDQUE2QixXQUE3QixFQUEwQyxVQUExQyxDQUFQO0FBQStEOzs7O0VBVjNFLGE7O0FBYTFCLE9BQU8sT0FBUCxHQUFpQixXQUFqQjs7O0FDbEJBOztBQUVBLElBQU0saUJBQWlCLFFBQVEsOEJBQVIsQ0FBdkI7O0FBRUEsSUFBTSxlQUFlLFNBQWYsWUFBZSxDQUFDLFVBQUQsRUFBZ0I7QUFBQSxNQUMzQixRQUQyQixHQUNRLFVBRFIsQ0FDM0IsUUFEMkI7QUFBQSxNQUNqQixLQURpQixHQUNRLFVBRFIsQ0FDakIsS0FEaUI7QUFBQSxNQUNWLE1BRFUsR0FDUSxVQURSLENBQ1YsTUFEVTtBQUFBLE1BQ0YsS0FERSxHQUNRLFVBRFIsQ0FDRixLQURFOzs7QUFHbkMsU0FFRSxvQkFBQyxjQUFELElBQWdCLFdBQVUsY0FBMUIsRUFBeUMsVUFBVSxRQUFuRCxFQUE2RCxPQUFPLEtBQXBFLEVBQTJFLFFBQVEsTUFBbkYsRUFBMkYsT0FBTyxLQUFsRyxHQUZGO0FBS0QsQ0FSRDs7QUFVQSxPQUFPLE9BQVAsR0FBaUIsWUFBakI7OztBQ2RBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxlQUFlLFFBQVEsc0JBQVIsQ0FBckI7QUFBQSxJQUNNLGdCQUFnQixRQUFRLHNCQUFSLENBRHRCOztJQUdNLEs7Ozs7Ozs7Ozs7O29DQUNZO0FBQ2QsVUFBTSxRQUFRLEVBQWQ7QUFBQSxVQUNNLFNBQVMsRUFEZjtBQUFBLFVBRU0sUUFBUSxFQUZkOztBQUlBLGFBQVEsQ0FFTixvQkFBQyxZQUFELElBQWMsVUFBVyxDQUFPLENBQUMsR0FBUixFQUFhLENBQWIsRUFBcUIsQ0FBQyxHQUF0QixDQUF6QixFQUF1RCxPQUFPLENBQTlELEVBQWlFLFFBQVEsTUFBekUsRUFBaUYsT0FBTyxDQUF4RixHQUZNLEVBR04sb0JBQUMsWUFBRCxJQUFjLFVBQVcsQ0FBTyxDQUFDLEdBQVIsRUFBYSxDQUFiLEVBQWdCLFFBQU0sR0FBdEIsQ0FBekIsRUFBdUQsT0FBTyxDQUE5RCxFQUFpRSxRQUFRLE1BQXpFLEVBQWlGLE9BQU8sQ0FBeEYsR0FITSxFQUlOLG9CQUFDLFlBQUQsSUFBYyxVQUFXLENBQUUsUUFBTSxHQUFSLEVBQWEsQ0FBYixFQUFnQixRQUFNLEdBQXRCLENBQXpCLEVBQXVELE9BQU8sQ0FBOUQsRUFBaUUsUUFBUSxNQUF6RSxFQUFpRixPQUFPLENBQXhGLEdBSk0sRUFLTixvQkFBQyxZQUFELElBQWMsVUFBVyxDQUFFLFFBQU0sR0FBUixFQUFhLENBQWIsRUFBcUIsQ0FBQyxHQUF0QixDQUF6QixFQUF1RCxPQUFPLENBQTlELEVBQWlFLFFBQVEsTUFBekUsRUFBaUYsT0FBTyxDQUF4RixHQUxNLEVBT04sb0JBQUMsWUFBRCxJQUFjLFVBQVcsQ0FBTyxDQUFDLEdBQVIsRUFBYSxTQUFPLENBQXBCLEVBQXVCLENBQUMsR0FBeEIsQ0FBekIsRUFBeUQsT0FBTyxDQUFoRSxFQUFtRSxRQUFRLENBQTNFLEVBQThFLE9BQU8sS0FBckYsR0FQTSxFQVFOLG9CQUFDLFlBQUQsSUFBYyxVQUFXLENBQUUsUUFBTSxHQUFSLEVBQWEsU0FBTyxDQUFwQixFQUF1QixDQUFDLEdBQXhCLENBQXpCLEVBQXlELE9BQU8sQ0FBaEUsRUFBbUUsUUFBUSxDQUEzRSxFQUE4RSxPQUFPLEtBQXJGLEdBUk0sRUFVTixvQkFBQyxZQUFELElBQWMsVUFBVyxDQUFFLENBQUMsR0FBSCxFQUFRLFNBQU8sQ0FBZixFQUF1QixDQUFDLEdBQXhCLENBQXpCLEVBQXlELE9BQU8sS0FBaEUsRUFBdUUsUUFBUSxDQUEvRSxFQUFrRixPQUFPLENBQXpGLEdBVk0sRUFXTixvQkFBQyxZQUFELElBQWMsVUFBVyxDQUFFLENBQUMsR0FBSCxFQUFRLFNBQU8sQ0FBZixFQUFrQixRQUFNLEdBQXhCLENBQXpCLEVBQXlELE9BQU8sS0FBaEUsRUFBdUUsUUFBUSxDQUEvRSxFQUFrRixPQUFPLENBQXpGLEdBWE0sQ0FBUjtBQWNEOzs7bUNBRXFCLFUsRUFBWTtBQUFFLGFBQU8sY0FBYyxjQUFkLENBQTZCLEtBQTdCLEVBQW9DLFVBQXBDLENBQVA7QUFBeUQ7Ozs7RUF0QjNFLGE7O0FBeUJwQixPQUFPLE9BQVAsR0FBaUIsS0FBakI7OztBQzlCQTs7QUFFQSxJQUFNLGlCQUFpQixRQUFRLDhCQUFSLENBQXZCOztBQUVBLElBQU0sZUFBZSxTQUFmLFlBQWUsQ0FBQyxVQUFELEVBQWdCO0FBQUEsTUFDM0IsUUFEMkIsR0FDUSxVQURSLENBQzNCLFFBRDJCO0FBQUEsTUFDakIsS0FEaUIsR0FDUSxVQURSLENBQ2pCLEtBRGlCO0FBQUEsTUFDVixNQURVLEdBQ1EsVUFEUixDQUNWLE1BRFU7QUFBQSxNQUNGLEtBREUsR0FDUSxVQURSLENBQ0YsS0FERTs7O0FBR25DLFNBRUUsb0JBQUMsY0FBRCxJQUFnQixXQUFVLGdCQUExQixFQUEyQyxVQUFVLFFBQXJELEVBQStELE9BQU8sS0FBdEUsRUFBNkUsUUFBUSxNQUFyRixFQUE2RixPQUFPLEtBQXBHLEdBRkY7QUFLRCxDQVJEOztBQVVBLE9BQU8sT0FBUCxHQUFpQixZQUFqQjs7O0FDZEE7O0FBRUEsSUFBTSxnQkFBZ0IsUUFBUSwwQkFBUixDQUF0Qjs7QUFFQSxJQUFNLGFBQWEsU0FBYixVQUFhLENBQUMsVUFBRCxFQUFnQjtBQUNqQyxTQUVFLG9CQUFDLGFBQUQsSUFBZSxPQUFPLEVBQXRCLEVBQTBCLFFBQVEsRUFBbEMsRUFBc0MsT0FBTyxDQUE3QyxFQUFnRCxVQUFVLENBQUUsRUFBRixFQUFNLEtBQU4sRUFBYSxFQUFiLENBQTFELEVBQTZFLFdBQVcsQ0FBRSxDQUFDLEVBQUgsRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUF4RixFQUF1RyxXQUFVLFlBQWpILEdBRkY7QUFLRCxDQU5EOztBQVFBLE9BQU8sT0FBUCxHQUFpQixVQUFqQjs7O0FDWkE7O0FBRUEsUUFBUSxXQUFSOztBQUVBLElBQU0sU0FBUyxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ00sUUFBUSxRQUFRLGtCQUFSLENBRGQ7QUFBQSxJQUVNLFNBQVMsUUFBUSxtQkFBUixDQUZmO0FBQUEsSUFHTSxtQkFBbUIsUUFBUSxxQkFBUixDQUh6QjtBQUFBLElBSU0sZ0JBQWdCLFFBQVEseUJBQVIsQ0FKdEI7QUFBQSxJQUtNLGlCQUFpQixRQUFRLDBCQUFSLENBTHZCO0FBQUEsSUFNTSxtQkFBbUIsUUFBUSw0QkFBUixDQU56QjtBQUFBLElBT00sbUJBQW1CLFFBQVEsNEJBQVIsQ0FQekI7QUFBQSxJQVFNLG9CQUFvQixRQUFRLHVCQUFSLENBUjFCOztJQVVRLGUsR0FBb0IsaUIsQ0FBcEIsZTs7O0FBRVIsSUFBTSxTQUFTLFNBQVQsTUFBUyxHQUFNOztBQUVuQixNQUFNLFNBQVMsSUFBSSxNQUFKLEVBQWY7O0FBRUEsa0JBQWdCLFVBQUMsUUFBRDtBQUFBLFdBRWQ7QUFBQyxXQUFEO0FBQUEsUUFBTyxVQUFVLFFBQWpCLEVBQTJCLFFBQVEsTUFBbkM7QUFDRSwwQkFBQyxNQUFELElBQVEsaUJBQWlCLEVBQXpCLEVBQTZCLGVBQWUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBNUMsRUFBeUQsUUFBUSxNQUFqRSxHQURGO0FBRUUsMEJBQUMsY0FBRCxJQUFnQixPQUFPLENBQXZCLEVBQTBCLFFBQVEsQ0FBbEMsRUFBcUMsT0FBTyxDQUE1QyxFQUErQyxVQUFVLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQXpELEVBQXNFLFdBQVUsWUFBaEYsR0FGRjtBQUdFLDBCQUFDLGFBQUQsSUFBZSxPQUFPLENBQXRCLEVBQXlCLFFBQVEsQ0FBakMsRUFBb0MsVUFBVSxDQUFFLENBQUMsQ0FBSCxFQUFNLENBQUMsQ0FBUCxFQUFVLENBQUMsQ0FBWCxDQUE5QyxFQUE4RCxXQUFVLFlBQXhFLEdBSEY7QUFJRSwwQkFBQyxnQkFBRCxJQUFrQixPQUFPLENBQXpCLEVBQTRCLFFBQVEsQ0FBcEMsRUFBdUMsT0FBTyxDQUE5QyxFQUFpRCxVQUFVLENBQUUsQ0FBRixFQUFLLENBQUMsQ0FBTixFQUFTLENBQVQsQ0FBM0QsRUFBeUUsV0FBVyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUFwRixFQUFpRyxRQUFRLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUF6RyxHQUpGO0FBS0UsMEJBQUMsZ0JBQUQsSUFBa0IsT0FBTyxDQUF6QixFQUE0QixRQUFRLENBQXBDLEVBQXVDLE9BQU8sQ0FBOUMsRUFBaUQsVUFBVSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBQyxDQUFULENBQTNELEVBQXlFLFdBQVcsQ0FBRSxDQUFGLEVBQUssRUFBTCxFQUFTLEVBQVQsQ0FBcEYsRUFBbUcsV0FBVSxXQUE3RyxHQUxGO0FBTUUsMEJBQUMsZ0JBQUQsSUFBa0IsT0FBTyxHQUF6QixFQUE4QixRQUFRLEdBQXRDLEVBQTJDLE9BQU8sR0FBbEQsRUFBdUQsV0FBVyxDQUFFLEVBQUYsRUFBTSxFQUFOLEVBQVUsRUFBVixDQUFsRSxFQUFrRixVQUFVLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxFQUFSLENBQTVGO0FBTkYsS0FGYztBQUFBLEdBQWhCO0FBWUQsQ0FoQkQ7O0FBa0JBLE9BQU8sT0FBUCxHQUFpQixNQUFqQjs7O0FDbENBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxnQkFBZ0IsUUFBUSxzQkFBUixDQUF0QjtBQUFBLElBQ00sbUJBQW1CLFFBQVEsNkJBQVIsQ0FEekI7QUFBQSxJQUVNLG1CQUFtQixRQUFRLDZCQUFSLENBRnpCOztJQUlNLGdCOzs7Ozs7Ozs7OztvQ0FDWTtBQUNkLGFBQVEsQ0FFSixvQkFBQyxnQkFBRCxJQUFrQixPQUFPLENBQXpCLEVBQTRCLFFBQVEsQ0FBcEMsRUFBdUMsT0FBTyxDQUE5QyxFQUFpRCxVQUFVLENBQUUsQ0FBRixFQUFLLENBQUMsQ0FBTixFQUFTLENBQVQsQ0FBM0QsRUFBeUUsV0FBVyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUFwRixFQUFpRyxRQUFRLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUF6RyxHQUZJLEVBR0osb0JBQUMsZ0JBQUQsSUFBa0IsT0FBTyxDQUF6QixFQUE0QixRQUFRLENBQXBDLEVBQXVDLE9BQU8sQ0FBOUMsRUFBaUQsVUFBVSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBQyxDQUFULENBQTNELEVBQXlFLFdBQVcsQ0FBRSxDQUFGLEVBQUssRUFBTCxFQUFTLEVBQVQsQ0FBcEYsRUFBbUcsV0FBVSxZQUE3RyxHQUhJLENBQVI7QUFNRDs7O21DQUVxQixVLEVBQVk7QUFBRSxhQUFPLGNBQWMsY0FBZCxDQUE2QixnQkFBN0IsRUFBK0MsVUFBL0MsQ0FBUDtBQUFvRTs7OztFQVYzRSxhOztBQWEvQixPQUFPLE9BQVAsR0FBaUIsZ0JBQWpCOzs7QUNuQkE7O0FBRUEsSUFBTSxRQUFRLFFBQVEsU0FBUixDQUFkOztBQUVBLE9BQU8sY0FBUCxDQUFzQixNQUF0QixFQUE4QixPQUE5QixFQUF1QztBQUNyQyxPQUFLLGVBQVc7QUFDZCxXQUFPLEtBQVA7QUFDRDtBQUhvQyxDQUF2Qzs7QUFNQSxPQUFPLE9BQVAsR0FBaUIsS0FBakI7OztBQ1ZBOztBQUVBLElBQU0sT0FBTyxRQUFRLFNBQVIsQ0FBYjs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsSUFBakI7OztBQ0pBOztBQUVBLElBQU0sT0FBTyxRQUFRLFNBQVIsQ0FBYjs7QUFFQSxTQUFTLEdBQVQsQ0FBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCO0FBQ3ZCLE1BQU0sTUFBTSxFQUFaOztBQUVBLE9BQUssR0FBTCxDQUFTLEdBQVQsRUFBYyxJQUFkLEVBQW9CLElBQXBCOztBQUVBLFNBQU8sR0FBUDtBQUNEOztBQUVELFNBQVMsUUFBVCxDQUFrQixJQUFsQixFQUF3QixJQUF4QixFQUE4QjtBQUM1QixNQUFNLE1BQU0sRUFBWjs7QUFFQSxPQUFLLFFBQUwsQ0FBYyxHQUFkLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCOztBQUVBLFNBQU8sR0FBUDtBQUNEOztBQUVELFNBQVMsS0FBVCxDQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkI7QUFDM0IsTUFBTSxNQUFNLEVBQVo7O0FBRUEsT0FBSyxLQUFMLENBQVcsR0FBWCxFQUFnQixJQUFoQixFQUFzQixNQUF0Qjs7QUFFQSxTQUFPLEdBQVA7QUFDRDs7QUFFRCxPQUFPLE9BQVAsR0FBaUI7QUFDZixPQUFLLEdBRFU7QUFFZixZQUFVLFFBRks7QUFHZixTQUFPO0FBSFEsQ0FBakI7OztBQzVCQTs7QUFFQSxJQUFNLE9BQU8sUUFBUSxTQUFSLENBQWI7O0FBRUEsU0FBUyxHQUFULENBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QjtBQUN2QixNQUFNLE1BQU0sRUFBWjs7QUFFQSxPQUFLLEdBQUwsQ0FBUyxHQUFULEVBQWMsSUFBZCxFQUFvQixJQUFwQjs7QUFFQSxTQUFPLEdBQVA7QUFDRDs7QUFFRCxTQUFTLFFBQVQsQ0FBa0IsSUFBbEIsRUFBd0IsSUFBeEIsRUFBOEI7QUFDNUIsTUFBTSxNQUFNLEVBQVo7O0FBRUEsT0FBSyxRQUFMLENBQWMsR0FBZCxFQUFtQixJQUFuQixFQUF5QixJQUF6Qjs7QUFFQSxTQUFPLEdBQVA7QUFDRDs7QUFFRCxTQUFTLEtBQVQsQ0FBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCO0FBQ3pCLE1BQU0sTUFBTSxFQUFaOztBQUVBLE9BQUssS0FBTCxDQUFXLEdBQVgsRUFBZ0IsSUFBaEIsRUFBc0IsSUFBdEI7O0FBRUEsU0FBTyxHQUFQO0FBQ0Q7O0FBRUQsU0FBUyxTQUFULENBQW1CLEdBQW5CLEVBQXdCO0FBQ3RCLE1BQU0sTUFBTSxFQUFaOztBQUVBLE9BQUssU0FBTCxDQUFlLEdBQWYsRUFBb0IsR0FBcEI7O0FBRUEsU0FBTyxHQUFQO0FBQ0Q7O0FBRUQsT0FBTyxPQUFQLEdBQWlCO0FBQ2YsT0FBSyxHQURVO0FBRWYsWUFBVSxRQUZLO0FBR2YsU0FBTyxLQUhRO0FBSWYsYUFBVztBQUpJLENBQWpCOzs7QUNwQ0E7O0FBRUEsSUFBTSxPQUFPLFFBQVEsU0FBUixDQUFiOztBQUVBLFNBQVMsU0FBVCxDQUFtQixHQUFuQixFQUF3QixJQUF4QixFQUE4QjtBQUM1QixNQUFNLE1BQU0sRUFBWjs7QUFFQSxPQUFLLGFBQUwsQ0FBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkIsSUFBN0I7O0FBRUEsU0FBTyxHQUFQO0FBQ0Q7O0FBRUQsT0FBTyxPQUFQLEdBQWlCO0FBQ2YsYUFBVztBQURJLENBQWpCOzs7QUNaQTs7Ozs7O0lBRU0sTTtBQUNKLGtCQUFZLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBSyxJQUFMLEdBQVksSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLLElBQVo7QUFDRDs7OzBCQUVLLGUsRUFBaUIsTSxFQUFRO0FBQzdCLGFBQU8sV0FBUCxDQUFtQixlQUFuQixFQUFvQyxLQUFLLElBQXpDO0FBQ0Q7Ozs7OztBQUdILE9BQU8sT0FBUCxHQUFpQixNQUFqQjs7O0FDaEJBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxPQUFPLFFBQVEsZUFBUixDQUFiO0FBQUEsSUFDTSxTQUFTLFFBQVEsV0FBUixDQURmOztJQUdRLE0sR0FBOEIsSSxDQUE5QixNO0lBQVEsTSxHQUFzQixJLENBQXRCLE07SUFBUSxTLEdBQWMsSSxDQUFkLFM7O0lBRWxCLFk7Ozs7Ozs7Ozs7OytDQUNzQixjLEVBQWdCO0FBQ3hDLHNCQUFNLE9BQU8sUUFBYjtBQUFBLHNCQUNNLGVBQWUsZUFBZSxPQUFmLEVBRHJCO0FBQUEsc0JBRU0sZUFBZSxJQUFJLFlBQUosQ0FBaUIsSUFBakIsQ0FGckI7O0FBSUEseUJBQU8sSUFBUCxFQUFhLFlBQWI7O0FBRUEsNEJBQVUsSUFBVixFQUFnQixJQUFoQjs7QUFFQSx5QkFBTyxZQUFQO0FBQ0Q7Ozs7RUFYd0IsTTs7QUFjM0IsT0FBTyxPQUFQLEdBQWlCLFlBQWpCOzs7QUNyQkE7Ozs7Ozs7Ozs7QUFFQSxJQUFNLE9BQU8sUUFBUSxlQUFSLENBQWI7QUFBQSxJQUNNLFNBQVMsUUFBUSxXQUFSLENBRGY7O0lBR1EsTSxHQUFzQixJLENBQXRCLE07SUFBUSxTLEdBQWMsSSxDQUFkLFM7O0lBRVYsWTs7Ozs7Ozs7Ozs7K0JBQ2MsTSxFQUFRO0FBQ3hCLFVBQU0sT0FBTyxRQUFiO0FBQUEsVUFDTSxlQUFlLElBQUksWUFBSixDQUFpQixJQUFqQixDQURyQjs7QUFHQSxnQkFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLE1BQXRCOztBQUVBLGFBQU8sWUFBUDtBQUNEOzs7O0VBUndCLE07O0FBVzNCLE9BQU8sT0FBUCxHQUFpQixZQUFqQjs7O0FDbEJBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxPQUFPLFFBQVEsZUFBUixDQUFiO0FBQUEsSUFDTSxTQUFTLFFBQVEsV0FBUixDQURmOztJQUdRLE0sR0FBc0IsSSxDQUF0QixNO0lBQVEsUyxHQUFjLEksQ0FBZCxTOztJQUVWLGM7Ozs7Ozs7Ozs7O3lDQUNnQixRLEVBQVU7QUFDNUIsc0JBQU0sSUFBSSxDQUFWO0FBQUEsc0JBQ00sSUFBSSxDQURWO0FBQUEsc0JBRU0sSUFBSSxDQUFDLFFBRlg7QUFBQSxzQkFFcUI7QUFDZixtQ0FBaUIsZUFBZSxlQUFmLENBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBSHZCOztBQUtBLHlCQUFPLGNBQVA7QUFDRDs7OzRDQUVzQixDLEVBQUcsQyxFQUFHLEMsRUFBRztBQUM5QixzQkFBTSxPQUFPLFFBQWI7QUFBQSxzQkFDTSxpQkFBaUIsSUFBSSxjQUFKLENBQW1CLElBQW5CLENBRHZCOztBQUdBLDRCQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBdEI7O0FBRUEseUJBQU8sY0FBUDtBQUNEOzs7O0VBakIwQixNOztBQW9CN0IsT0FBTyxPQUFQLEdBQWlCLGNBQWpCOzs7QUMzQkE7Ozs7Ozs7Ozs7QUFFQSxJQUFNLE9BQU8sUUFBUSxlQUFSLENBQWI7QUFBQSxJQUNNLFNBQVMsUUFBUSxXQUFSLENBRGY7QUFBQSxJQUVNLFlBQVksUUFBUSxjQUFSLENBRmxCOztJQUlRLE0sR0FBd0IsSSxDQUF4QixNO0lBQVEsVyxHQUFnQixJLENBQWhCLFc7SUFDUixhLEdBQWlDLFMsQ0FBakMsYTtJQUFlLE0sR0FBa0IsUyxDQUFsQixNO0lBQVEsSyxHQUFVLFMsQ0FBVixLOztJQUV6QixnQjs7Ozs7Ozs7Ozs7K0NBQ3NCLEssRUFBTyxNLEVBQVE7QUFDdkMsc0JBQU0sT0FBTyxRQUFiO0FBQUEsc0JBQ00sY0FBYyxhQURwQjtBQUFBLHNCQUVNLGNBQWMsUUFBUSxNQUY1QjtBQUFBLHNCQUdNLFFBQVEsTUFIZDtBQUFBLHNCQUlNLE9BQU8sS0FKYjtBQUFBLHNCQUtNLG1CQUFtQixJQUFJLGdCQUFKLENBQXFCLElBQXJCLENBTHpCOztBQU9BLDhCQUFZLElBQVosRUFBa0IsV0FBbEIsRUFBK0IsV0FBL0IsRUFBNEMsS0FBNUMsRUFBbUQsSUFBbkQ7O0FBRUEseUJBQU8sZ0JBQVA7QUFDRDs7OztFQVo0QixNOztBQWUvQixPQUFPLE9BQVAsR0FBaUIsZ0JBQWpCOzs7QUN4QkE7Ozs7Ozs7Ozs7QUFFQSxJQUFNLE9BQU8sUUFBUSxlQUFSLENBQWI7QUFBQSxJQUNNLFNBQVMsUUFBUSxXQUFSLENBRGY7O0lBR1EsTSxHQUFtQixJLENBQW5CLE07SUFBUSxNLEdBQVcsSSxDQUFYLE07O0lBRVYsYzs7Ozs7Ozs7Ozs7dUNBQ2MsTSxFQUFRO0FBQ3hCLHNCQUFNLFNBQVMsT0FBTyxTQUFQLEVBQWY7QUFBQSxzQkFDTSxTQUFTLE9BQU8sU0FBUCxFQURmO0FBQUEsc0JBRU0sU0FBUyxPQUFPLFNBQVAsRUFGZjtBQUFBLHNCQUdNLGlCQUFpQixlQUFlLHlCQUFmLENBQXlDLE1BQXpDLEVBQWlELE1BQWpELEVBQXlELE1BQXpELENBSHZCOztBQUtBLHlCQUFPLGNBQVA7QUFDRDs7O3NEQUVnQyxNLEVBQVEsTSxFQUFRLE0sRUFBUTtBQUN2RCxzQkFBTSxPQUFPLFFBQWI7QUFBQSxzQkFDTSxpQkFBaUIsSUFBSSxjQUFKLENBQW1CLElBQW5CLENBRHZCOztBQUdBLHlCQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLE1BQW5CLEVBQTJCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQTNCO0FBQ0EseUJBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsTUFBbkIsRUFBMkIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBM0I7QUFDQSx5QkFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixNQUFuQixFQUEyQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUEzQjs7QUFFQSx5QkFBTyxjQUFQO0FBQ0Q7Ozs7RUFuQjBCLE07O0FBc0I3QixPQUFPLE9BQVAsR0FBaUIsY0FBakI7OztBQzdCQTs7QUFFQSxJQUFNLFVBQVUsUUFBUSxXQUFSLENBQWhCOztBQUVBLFNBQVMsYUFBVCxDQUF1QixhQUF2QixFQUFzQyxVQUF0QyxFQUFvRTtBQUFBLG9DQUFmLGFBQWU7QUFBZixpQkFBZTtBQUFBOztBQUNsRSxNQUFJLGdCQUFKOztBQUVBLGVBQWEsT0FBTyxNQUFQLENBQWM7QUFDekIsbUJBQWU7QUFEVSxHQUFkLEVBRVYsVUFGVSxDQUFiOztBQUlBLE1BQUksS0FBSixFQUFXLENBRVYsQ0FGRCxNQUVPLElBQUksYUFBYSxhQUFiLEVBQTRCLE9BQTVCLENBQUosRUFBMEM7QUFDL0MsUUFBTSxRQUFRLGFBQWQsQ0FEK0MsQ0FDakI7O0FBRTlCLGNBQVUsTUFBTSxjQUFOLENBQXFCLFVBQXJCLENBQVY7QUFDRCxHQUpNLE1BSUEsSUFBSSxPQUFPLGFBQVAsS0FBeUIsVUFBN0IsRUFBeUM7QUFDOUMsUUFBTSxPQUFPLGFBQWIsQ0FEOEMsQ0FDakI7O0FBRTdCLGNBQVUsS0FBSyxVQUFMLENBQVY7QUFDRDs7QUFFRCxTQUFPLE9BQVA7QUFDRDs7QUFFRCxJQUFNLFFBQVE7QUFDWixpQkFBZTtBQURILENBQWQ7O0FBSUEsT0FBTyxPQUFQLEdBQWlCLEtBQWpCOztBQUVBLFNBQVMsWUFBVCxDQUFzQixRQUF0QixFQUFnQyxLQUFoQyxFQUF1QztBQUNyQyxNQUFJLFNBQVMsS0FBYjs7QUFFQSxNQUFJLFNBQVMsSUFBVCxLQUFrQixNQUFNLElBQTVCLEVBQWtDO0FBQUU7QUFDbEMsYUFBUyxJQUFUO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsZUFBVyxPQUFPLGNBQVAsQ0FBc0IsUUFBdEIsQ0FBWCxDQURLLENBQ3VDOztBQUU1QyxRQUFJLFFBQUosRUFBYztBQUNaLGVBQVMsYUFBYSxRQUFiLEVBQXVCLEtBQXZCLENBQVQ7QUFDRDtBQUNGOztBQUVELFNBQU8sTUFBUDtBQUNEOzs7QUM5Q0Q7Ozs7Ozs7O0FBRUEsSUFBTSxZQUFZLFFBQVEsV0FBUixDQUFsQjs7QUFFTSxJQUFFLGNBQUYsR0FBcUIsU0FBckIsQ0FBRSxjQUFGO0FBQUEsSUFDRSxLQURGLEdBQ1ksY0FEWixDQUNFLEtBREY7QUFBQSxJQUVBLEdBRkEsR0FFTSxLQUZOLEMsQ0FFYzs7SUFFZCxRO0FBQ0osb0JBQVksT0FBWixFQUFxQixnQkFBckIsRUFBdUMsa0JBQXZDLEVBQTJEO0FBQUE7O0FBQ3pELFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLGdCQUFMLEdBQXdCLGdCQUF4QjtBQUNBLFNBQUssa0JBQUwsR0FBMEIsa0JBQTFCOztBQUVBLFNBQUssa0JBQUwsR0FBMEIsRUFBMUI7QUFDQSxTQUFLLGdCQUFMLEdBQXdCLEVBQXhCO0FBQ0EsU0FBSyxlQUFMLEdBQXVCLEVBQXZCOztBQUVBLFNBQUssb0JBQUwsR0FBNEIsSUFBNUIsQ0FUeUQsQ0FTdkI7QUFDbEMsU0FBSyxrQkFBTCxHQUEwQixJQUExQixDQVZ5RCxDQVV6QjtBQUNoQyxTQUFLLHdCQUFMLEdBQWdDLElBQWhDLENBWHlELENBV25COztBQUV0QyxTQUFLLGtCQUFMLEdBQTBCLENBQUMsQ0FBM0IsQ0FieUQsQ0FhM0I7QUFDL0I7Ozs7K0JBRVU7QUFDVCxVQUFNLHdCQUF3QixLQUFLLGVBQUwsQ0FBcUIsTUFBbkQ7QUFBQSxVQUNNLFFBQVEscUJBRGQsQ0FEUyxDQUU2Qjs7QUFFdEMsYUFBTyxLQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBSyxPQUFaO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsYUFBTyxLQUFLLGdCQUFaO0FBQ0Q7Ozs0Q0FFdUI7QUFDdEIsYUFBTyxLQUFLLGtCQUFaO0FBQ0Q7OztxREFFZ0M7QUFBRSxhQUFPLEtBQUssZ0JBQUwsQ0FBc0IsOEJBQXRCLEVBQVA7QUFBZ0U7Ozt1REFFaEU7QUFBRSxhQUFPLEtBQUssZ0JBQUwsQ0FBc0IsZ0NBQXRCLEVBQVA7QUFBa0U7Ozt1REFFcEU7QUFBRSxhQUFPLEtBQUssZ0JBQUwsQ0FBc0IsZ0NBQXRCLEVBQVA7QUFBa0U7Ozt5REFFbEU7QUFBRSxhQUFPLEtBQUssZ0JBQUwsQ0FBc0Isa0NBQXRCLEVBQVA7QUFBb0U7OztxREFFMUU7QUFBRSxhQUFPLEtBQUssZ0JBQUwsQ0FBc0IsOEJBQXRCLEVBQVA7QUFBZ0U7Ozt5REFFOUQ7QUFBRSxhQUFPLEtBQUssa0JBQUwsQ0FBd0Isa0NBQXhCLEVBQVA7QUFBc0U7Ozt1REFFMUU7QUFBRSxhQUFPLEtBQUssa0JBQUwsQ0FBd0IsZ0NBQXhCLEVBQVA7QUFBb0U7OzswQ0FFbkYsa0IsRUFBb0I7QUFDeEMsVUFBSSxLQUFLLGtCQUFULEVBQTZCLGtCQUE3QjtBQUNEOzs7d0NBRW1CLGdCLEVBQWtCO0FBQ3BDLFVBQUksS0FBSyxnQkFBVCxFQUEyQixnQkFBM0I7QUFDRDs7O3VDQUVrQixlLEVBQWlCO0FBQ2xDLFVBQU0sU0FBUyxLQUFLLGtCQUFMLEdBQTBCLENBQXpDOztBQUVBLHdCQUFrQixnQkFBZ0IsR0FBaEIsQ0FBb0IsVUFBUyxXQUFULEVBQXNCO0FBQzFELGVBQU8sY0FBYyxNQUFyQjtBQUNELE9BRmlCLENBQWxCOztBQUlBLFVBQUksS0FBSyxlQUFULEVBQTBCLGVBQTFCOztBQUVBLFdBQUssa0JBQUwsR0FBMEIsS0FBSyxHQUFMLGNBQVMsS0FBSyxrQkFBZCw0QkFBcUMsZUFBckMsR0FBMUI7QUFDRDs7O2tDQUVhLE0sRUFBUTtBQUNwQixXQUFLLDBCQUFMLENBQWdDLE1BQWhDO0FBQ0EsV0FBSyx3QkFBTCxDQUE4QixNQUE5QjtBQUNBLFdBQUssOEJBQUwsQ0FBb0MsTUFBcEM7QUFDRDs7O2dDQUVXLE0sRUFBUTtBQUNsQixXQUFLLHNCQUFMLENBQTRCLE1BQTVCO0FBQ0EsV0FBSyx3QkFBTCxDQUE4QixNQUE5QjtBQUNBLFdBQUssNEJBQUwsQ0FBa0MsTUFBbEM7QUFDRDs7OytDQUUwQixNLEVBQVE7QUFDakMsV0FBSyxvQkFBTCxHQUE0QixPQUFPLFlBQVAsQ0FBb0IsS0FBSyxrQkFBekIsQ0FBNUI7QUFDRDs7OzZDQUV3QixNLEVBQVE7QUFDL0IsV0FBSyxrQkFBTCxHQUEwQixPQUFPLFlBQVAsQ0FBb0IsS0FBSyxnQkFBekIsQ0FBMUI7QUFDRDs7O21EQUU4QixNLEVBQVE7QUFDckMsV0FBSyx3QkFBTCxHQUFnQyxPQUFPLG1CQUFQLENBQTJCLEtBQUssZUFBaEMsQ0FBaEM7QUFDRDs7OzZDQUV3QixNLEVBQVE7QUFDL0IsVUFBTSxrQ0FBa0MsS0FBSyxrQ0FBTCxFQUF4QztBQUFBLFVBQ00sMkJBQTJCLENBRGpDOztBQUdBLGFBQU8sVUFBUCxDQUFrQixLQUFLLG9CQUF2QixFQUE2QywrQkFBN0MsRUFBOEUsd0JBQTlFO0FBQ0Q7OzsyQ0FFc0IsTSxFQUFRO0FBQzdCLFVBQU0sZ0NBQWdDLEtBQUssZ0NBQUwsRUFBdEM7QUFBQSxVQUNNLHlCQUF5QixDQUQvQjs7QUFHQSxhQUFPLFVBQVAsQ0FBa0IsS0FBSyxrQkFBdkIsRUFBMkMsNkJBQTNDLEVBQTBFLHNCQUExRTtBQUNEOzs7aURBRTRCLE0sRUFBUTtBQUNuQyxhQUFPLGlCQUFQLENBQXlCLEtBQUssd0JBQTlCO0FBQ0Q7Ozs7OztBQUdILFNBQVMsYUFBVCxDQUF1QixrQkFBdkIsRUFBMkMsb0JBQTNDLEVBQWlFLE1BQWpFLEVBQXlFO0FBQ3ZFLE1BQU0sZUFBZSxPQUFPLGtCQUFQLENBQTBCLGtCQUExQixDQUFyQjtBQUFBLE1BQ00saUJBQWlCLE9BQU8sb0JBQVAsQ0FBNEIsb0JBQTVCLENBRHZCO0FBQUEsTUFFTSxVQUFVLE9BQU8sYUFBUCxDQUFxQixZQUFyQixFQUFtQyxjQUFuQyxDQUZoQjs7QUFJQSxTQUFPLE9BQVA7QUFDRDs7QUFFRCxPQUFPLE1BQVAsQ0FBYyxRQUFkLEVBQXdCO0FBQ3RCLGlCQUFlO0FBRE8sQ0FBeEI7O0FBSUEsT0FBTyxPQUFQLEdBQWlCLFFBQWpCOzs7QUNySUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sWUFBWSxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTSxXQUFXLFFBQVEsYUFBUixDQUFqQjtBQUFBLElBQ00scUJBQXFCLFFBQVEsOEJBQVIsQ0FEM0I7QUFBQSxJQUVNLHVCQUF1QixRQUFRLGdDQUFSLENBRjdCO0FBQUEsSUFHTSx5QkFBeUIsUUFBUSw0QkFBUixDQUgvQjtBQUFBLElBSU0sMkJBQTJCLFFBQVEsOEJBQVIsQ0FKakM7O0FBTU0sSUFBRSxhQUFGLEdBQW9CLFFBQXBCLENBQUUsYUFBRjtBQUFBLElBQ0UsY0FERixHQUNxQixTQURyQixDQUNFLGNBREY7QUFBQSxJQUVFLEtBRkYsR0FFWSxjQUZaLENBRUUsS0FGRjtBQUFBLElBR0EsR0FIQSxHQUdNLEtBSE4sQyxDQUdjOztJQUVkLGM7OztBQUNKLDBCQUFZLE9BQVosRUFBcUIsZ0JBQXJCLEVBQXVDLGtCQUF2QyxFQUEyRDtBQUFBOztBQUFBLGdJQUNuRCxPQURtRCxFQUMxQyxnQkFEMEMsRUFDeEIsa0JBRHdCOztBQUd6RCxVQUFLLGdCQUFMLEdBQXdCLEVBQXhCOztBQUVBLFVBQUssa0JBQUwsR0FBMEIsSUFBMUIsQ0FMeUQsQ0FLekI7QUFMeUI7QUFNMUQ7Ozs7dURBRWtDO0FBQ2pDLFVBQU0scUJBQXFCLEtBQUsscUJBQUwsRUFBM0I7QUFBQSxVQUNNLGdDQUFnQyxtQkFBbUIsZ0NBQW5CLEVBRHRDOztBQUdBLGFBQU8sNkJBQVA7QUFDRDs7O3dDQUVtQixnQixFQUFrQjtBQUNwQyxVQUFJLEtBQUssZ0JBQVQsRUFBMkIsZ0JBQTNCO0FBQ0Q7OztrQ0FFYSxNLEVBQVE7QUFDcEIsV0FBSyxrQkFBTCxHQUEwQixPQUFPLFlBQVAsQ0FBb0IsS0FBSyxnQkFBekIsQ0FBMUI7O0FBRUEsb0lBQW9CLE1BQXBCO0FBQ0Q7OztnQ0FFVyxNLEVBQVE7QUFDbEIsVUFBTSxnQ0FBZ0MsS0FBSyxnQ0FBTCxFQUF0QztBQUFBLFVBQ00seUJBQXlCLENBRC9COztBQUdBLGFBQU8sVUFBUCxDQUFrQixLQUFLLGtCQUF2QixFQUEyQyw2QkFBM0MsRUFBMEUsc0JBQTFFOztBQUVBLGtJQUFrQixNQUFsQjtBQUNEOzs7Z0NBRWtCLE0sRUFBUTtBQUN6QixVQUFNLFVBQVUsY0FBYyxrQkFBZCxFQUFrQyxvQkFBbEMsRUFBd0QsTUFBeEQsQ0FBaEI7QUFBQSxVQUNNLG1CQUFtQix1QkFBdUIsV0FBdkIsQ0FBbUMsT0FBbkMsRUFBNEMsTUFBNUMsQ0FEekI7QUFBQSxVQUVNLHFCQUFxQix5QkFBeUIsV0FBekIsQ0FBcUMsT0FBckMsRUFBOEMsTUFBOUMsQ0FGM0I7QUFBQSxVQUdNLGlCQUFpQixJQUFJLGNBQUosQ0FBbUIsT0FBbkIsRUFBNEIsZ0JBQTVCLEVBQThDLGtCQUE5QyxDQUh2Qjs7QUFLQSxhQUFPLGNBQVA7QUFDRDs7OztFQTFDMEIsUTs7QUE2QzdCLE9BQU8sT0FBUCxHQUFpQixjQUFqQjs7O0FDNURBOzs7Ozs7QUFFQSxJQUFNLGlCQUFpQixRQUFRLG9CQUFSLENBQXZCO0FBQUEsSUFDTSxpQkFBaUIsUUFBUSxvQkFBUixDQUR2Qjs7QUFHTSxJQUFFLHlCQUFGLEdBQWdDLGNBQWhDLENBQUUseUJBQUY7QUFBQSxJQUNFLDJCQURGLEdBQ2tDLGNBRGxDLENBQ0UsMkJBREY7O0lBR0Esa0I7QUFDSiw4QkFBWSwrQkFBWixFQUE2Qyw2QkFBN0MsRUFBNEU7QUFBQTs7QUFDMUUsU0FBSywrQkFBTCxHQUF1QywrQkFBdkM7QUFDQSxTQUFLLDZCQUFMLEdBQXFDLDZCQUFyQztBQUNEOzs7O3lEQUVvQztBQUNuQyxhQUFPLEtBQUssK0JBQVo7QUFDRDs7O3VEQUVrQztBQUNqQyxhQUFPLEtBQUssNkJBQVo7QUFDRDs7O2dDQUVrQixLLEVBQU8sTyxFQUFTLE0sRUFBK0I7QUFBQSx3Q0FBcEIsa0JBQW9CO0FBQXBCLDBCQUFvQjtBQUFBOztBQUNoRSxVQUFNLGtDQUFrQyxPQUFPLG9CQUFQLENBQTRCLE9BQTVCLEVBQXFDLDJCQUFyQyxDQUF4QztBQUFBLFVBQ00sZ0NBQWdDLE9BQU8sb0JBQVAsQ0FBNEIsT0FBNUIsRUFBcUMseUJBQXJDLENBRHRDO0FBQUEsVUFFTSx3REFBeUIsS0FBekIsaUJBQStCLCtCQUEvQixFQUFnRSw2QkFBaEUsR0FBa0csa0JBQWxHLEtBRk47O0FBSUEsYUFBTyxrQkFBUDtBQUNEOzs7Ozs7QUFHSCxPQUFPLE9BQVAsR0FBaUIsa0JBQWpCOzs7QUMvQkE7Ozs7Ozs7Ozs7QUFFQSxJQUFNLHFCQUFxQixRQUFRLDJCQUFSLENBQTNCO0FBQUEsSUFDTSxxQkFBcUIsUUFBUSxrQ0FBUixDQUQzQjs7SUFHUSx5QixHQUE4QixrQixDQUE5Qix5Qjs7SUFFRix3Qjs7O0FBQ0osb0NBQVksK0JBQVosRUFBNkMsNkJBQTdDLEVBQTRFLDZCQUE1RSxFQUEyRztBQUFBOztBQUFBLG9KQUNuRywrQkFEbUcsRUFDbEUsNkJBRGtFOztBQUd6RyxVQUFLLDZCQUFMLEdBQXFDLDZCQUFyQztBQUh5RztBQUkxRzs7Ozt1REFFa0M7QUFDakMsYUFBTyxLQUFLLDZCQUFaO0FBQ0Q7OztnQ0FFa0IsTyxFQUFTLE0sRUFBUTtBQUNsQyxVQUFNLGdDQUFnQyxPQUFPLG9CQUFQLENBQTRCLE9BQTVCLEVBQXFDLHlCQUFyQyxDQUF0QztBQUFBLFVBQ00sMkJBQTJCLG1CQUFtQixXQUFuQixDQUErQix3QkFBL0IsRUFBeUQsT0FBekQsRUFBa0UsTUFBbEUsRUFBMEUsNkJBQTFFLENBRGpDOztBQUdBLGFBQU8sd0JBQVA7QUFDRDs7OztFQWhCb0Msa0I7O0FBbUJ2QyxPQUFPLE9BQVAsR0FBaUIsd0JBQWpCOzs7QUMxQkE7Ozs7Ozs7Ozs7QUFFQSxJQUFNLG1CQUFtQixRQUFRLHlCQUFSLENBQXpCOztJQUVNLHNCOzs7Ozs7Ozs7OztnQ0FDZSxPLEVBQVMsTSxFQUFRO0FBQUUsYUFBTyxpQkFBaUIsV0FBakIsQ0FBNkIsc0JBQTdCLEVBQXFELE9BQXJELEVBQThELE1BQTlELENBQVA7QUFBK0U7Ozs7RUFEbEYsZ0I7O0FBSXJDLE9BQU8sT0FBUCxHQUFpQixzQkFBakI7OztBQ1JBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxxQkFBcUIsUUFBUSwyQkFBUixDQUEzQjtBQUFBLElBQ00scUJBQXFCLFFBQVEsbUNBQVIsQ0FEM0I7O0lBR1EsOEIsR0FBbUMsa0IsQ0FBbkMsOEI7O0lBRUYseUI7OztBQUNKLHFDQUFZLCtCQUFaLEVBQTZDLDZCQUE3QyxFQUE0RSxrQ0FBNUUsRUFBZ0g7QUFBQTs7QUFBQSxzSkFDeEcsK0JBRHdHLEVBQ3ZFLDZCQUR1RTs7QUFHOUcsVUFBSyxrQ0FBTCxHQUEwQyxrQ0FBMUM7QUFIOEc7QUFJL0c7Ozs7NERBRXVDO0FBQ3RDLGFBQU8sS0FBSyxrQ0FBWjtBQUNEOzs7Z0NBRWtCLE8sRUFBUyxNLEVBQVE7QUFDbEMsVUFBTSxxQ0FBcUMsT0FBTyxvQkFBUCxDQUE0QixPQUE1QixFQUFxQyw4QkFBckMsQ0FBM0M7QUFBQSxVQUNNLDRCQUE0QixtQkFBbUIsV0FBbkIsQ0FBK0IseUJBQS9CLEVBQTBELE9BQTFELEVBQW1FLE1BQW5FLEVBQTJFLGtDQUEzRSxDQURsQzs7QUFHQSxhQUFPLHlCQUFQO0FBQ0Q7Ozs7RUFoQnFDLGtCOztBQW1CeEMsT0FBTyxPQUFQLEdBQWlCLHlCQUFqQjs7O0FDMUJBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxtQkFBbUIsUUFBUSx5QkFBUixDQUF6QjtBQUFBLElBQ00sdUJBQXVCLFFBQVEscUNBQVIsQ0FEN0I7O0lBR1EsVyxHQUFnQixvQixDQUFoQixXOztJQUVGLHVCOzs7QUFDSixtQ0FBWSwyQkFBWixFQUF5Qyw2QkFBekMsRUFBd0UsNkJBQXhFLEVBQXVHLCtCQUF2RyxFQUF3SSwyQkFBeEksRUFBcUssc0JBQXJLLEVBQTZMO0FBQUE7O0FBQUEsa0pBQ3JMLDJCQURxTCxFQUN4Siw2QkFEd0osRUFDekgsNkJBRHlILEVBQzFGLCtCQUQwRixFQUN6RCwyQkFEeUQ7O0FBRzNMLFVBQUssc0JBQUwsR0FBOEIsc0JBQTlCO0FBSDJMO0FBSTVMOzs7O2dEQUUyQjtBQUMxQixhQUFPLEtBQUssc0JBQVo7QUFDRDs7O2dDQUVrQixPLEVBQVMsTSxFQUFRO0FBQ2xDLFVBQU0seUJBQXlCLE9BQU8sa0JBQVAsQ0FBMEIsT0FBMUIsRUFBbUMsV0FBbkMsQ0FBL0I7QUFBQSxVQUNNLDBCQUEwQixpQkFBaUIsV0FBakIsQ0FBNkIsdUJBQTdCLEVBQXNELE9BQXRELEVBQStELE1BQS9ELEVBQXVFLHNCQUF2RSxDQURoQzs7QUFHQSxhQUFPLHVCQUFQO0FBQ0Q7Ozs7RUFoQm1DLGdCOztBQW1CdEMsT0FBTyxPQUFQLEdBQWlCLHVCQUFqQjs7O0FDMUJBOzs7Ozs7QUFFQSxJQUFNLGlCQUFpQixRQUFRLG9CQUFSLENBQXZCO0FBQUEsSUFDTSxpQkFBaUIsUUFBUSxvQkFBUixDQUR2Qjs7QUFHTSxJQUFFLGdCQUFGLEdBQXVCLGNBQXZCLENBQUUsZ0JBQUY7QUFBQSxJQUNFLGdCQURGLEdBQ3FGLGNBRHJGLENBQ0UsZ0JBREY7QUFBQSxJQUNvQixrQkFEcEIsR0FDcUYsY0FEckYsQ0FDb0Isa0JBRHBCO0FBQUEsSUFDd0Msa0JBRHhDLEdBQ3FGLGNBRHJGLENBQ3dDLGtCQUR4QztBQUFBLElBQzRELG9CQUQ1RCxHQUNxRixjQURyRixDQUM0RCxvQkFENUQ7O0lBR0EsZ0I7QUFDSiw0QkFBWSwyQkFBWixFQUF5Qyw2QkFBekMsRUFBd0UsNkJBQXhFLEVBQXVHLCtCQUF2RyxFQUF3SSwyQkFBeEksRUFBcUs7QUFBQTs7QUFDbkssU0FBSywyQkFBTCxHQUFtQywyQkFBbkM7QUFDQSxTQUFLLDZCQUFMLEdBQXFDLDZCQUFyQztBQUNBLFNBQUssNkJBQUwsR0FBcUMsNkJBQXJDO0FBQ0EsU0FBSywrQkFBTCxHQUF1QywrQkFBdkM7QUFDQSxTQUFLLDJCQUFMLEdBQW1DLDJCQUFuQztBQUNEOzs7O3FEQUVnQztBQUMvQixhQUFPLEtBQUssMkJBQVo7QUFDRDs7O3VEQUVrQztBQUNqQyxhQUFPLEtBQUssNkJBQVo7QUFDRDs7O3VEQUVrQztBQUNqQyxhQUFPLEtBQUssNkJBQVo7QUFDRDs7O3lEQUVvQztBQUNuQyxhQUFPLEtBQUssK0JBQVo7QUFDRDs7O3FEQUVnQztBQUMvQixhQUFPLEtBQUssMkJBQVo7QUFDRDs7O2dDQUVrQixLLEVBQU8sTyxFQUFTLE0sRUFBK0I7QUFBQSx3Q0FBcEIsa0JBQW9CO0FBQXBCLDBCQUFvQjtBQUFBOztBQUNoRSxVQUFNLDhCQUE4QixPQUFPLGtCQUFQLENBQTBCLE9BQTFCLEVBQW1DLGdCQUFuQyxDQUFwQztBQUFBLFVBQ00sZ0NBQWdDLE9BQU8sa0JBQVAsQ0FBMEIsT0FBMUIsRUFBbUMsa0JBQW5DLENBRHRDO0FBQUEsVUFFTSxnQ0FBZ0MsT0FBTyxrQkFBUCxDQUEwQixPQUExQixFQUFtQyxrQkFBbkMsQ0FGdEM7QUFBQSxVQUdNLGtDQUFrQyxPQUFPLGtCQUFQLENBQTBCLE9BQTFCLEVBQW1DLG9CQUFuQyxDQUh4QztBQUFBLFVBSU0sOEJBQThCLE9BQU8sa0JBQVAsQ0FBMEIsT0FBMUIsRUFBbUMsZ0JBQW5DLENBSnBDO0FBQUEsVUFLTSxzREFBdUIsS0FBdkIsaUJBQTZCLDJCQUE3QixFQUEwRCw2QkFBMUQsRUFBeUYsNkJBQXpGLEVBQXdILCtCQUF4SCxFQUF5SiwyQkFBekosR0FBeUwsa0JBQXpMLEtBTE47O0FBT0EsYUFBTyxnQkFBUDtBQUNEOzs7Ozs7QUFHSCxPQUFPLE9BQVAsR0FBaUIsZ0JBQWpCOzs7QUNqREE7O0FBRUEsSUFBTSx1QkFBdUIsSUFBSSxNQUFKLG1PQUE3Qjs7QUFZQSxPQUFPLE9BQVAsR0FBaUIsb0JBQWpCOzs7QUNkQTs7QUFFQSxJQUFNLGlCQUFpQixRQUFRLHVCQUFSLENBQXZCO0FBQUEsSUFDTSxpQkFBaUIsUUFBUSx1QkFBUixDQUR2Qjs7QUFHQSxJQUFNLDRCQUE0QixlQUFsQztBQUFBLElBQ00scUJBQXFCLElBQUksTUFBSixxQ0FFRix5QkFGRSxxQkFJakIsY0FKaUIsMEJBTWpCLGNBTmlCLHdQQWlCTCx5QkFqQkssd0RBRDNCOztBQXVCQSxPQUFPLE1BQVAsQ0FBYyxrQkFBZCxFQUFrQztBQUNoQyw2QkFBMkI7QUFESyxDQUFsQzs7QUFJQSxPQUFPLE9BQVAsR0FBaUIsa0JBQWpCOzs7QUNoQ0E7O0FBRUEsSUFBTSxtQkFBbUIsZUFBekI7QUFBQSxJQUNNLDRCQUE0QixlQURsQzs7QUFHQSxJQUFNLGlCQUFpQixJQUFJLE1BQUosaUNBRUEsZ0JBRkEsb0NBSUUseUJBSkYsd05BVWMsZ0JBVmQsZ0JBVXlDLHlCQVZ6QyxtUUFBdkI7O0FBcUJBLE9BQU8sTUFBUCxDQUFjLGNBQWQsRUFBOEI7QUFDNUIsb0JBQWtCLGdCQURVO0FBRTVCLDZCQUEyQjtBQUZDLENBQTlCOztBQUtBLE9BQU8sT0FBUCxHQUFpQixjQUFqQjs7O0FDL0JBOztBQUVBLElBQU0sbUJBQW1CLGVBQXpCO0FBQUEsSUFDTSxxQkFBcUIsaUJBRDNCO0FBQUEsSUFFTSxxQkFBcUIsaUJBRjNCO0FBQUEsSUFHTSx1QkFBdUIsb0JBSDdCO0FBQUEsSUFJTSw4QkFBOEIsaUJBSnBDOztBQU1BLElBQU0saUJBQWlCLElBQUksTUFBSixpQ0FFQSxnQkFGQSxnQ0FHQSxrQkFIQSxnQ0FJQSxrQkFKQSxnQ0FLQSxvQkFMQSw0Q0FPRSwyQkFQRiwyRUFVSyxvQkFWTCxXQVUrQixrQkFWL0IsV0FVdUQsa0JBVnZELFdBVStFLGdCQVYvRSxXQVVxRywyQkFWckcsNEVBQXZCOztBQWlCQSxPQUFPLE1BQVAsQ0FBYyxjQUFkLEVBQThCO0FBQzVCLG9CQUFrQixnQkFEVTtBQUU1QixzQkFBb0Isa0JBRlE7QUFHNUIsc0JBQW9CLGtCQUhRO0FBSTVCLHdCQUFzQixvQkFKTTtBQUs1QiwrQkFBNkI7QUFMRCxDQUE5Qjs7QUFRQSxPQUFPLE9BQVAsR0FBaUIsY0FBakI7OztBQ2pDQTs7QUFFQSxJQUFNLGNBQWMsVUFBcEI7QUFBQSxJQUNNLHVCQUF1QixJQUFJLE1BQUosNENBRUQsV0FGQyx1TUFTa0IsV0FUbEIsbUpBRDdCOztBQWlCQSxPQUFPLE1BQVAsQ0FBYyxvQkFBZCxFQUFvQztBQUNsQyxlQUFhO0FBRHFCLENBQXBDOztBQUlBLE9BQU8sT0FBUCxHQUFpQixvQkFBakI7OztBQ3ZCQTs7QUFFQSxJQUFNLGlCQUFpQixRQUFRLHVCQUFSLENBQXZCO0FBQUEsSUFDTSxpQkFBaUIsUUFBUSx1QkFBUixDQUR2Qjs7QUFHQSxJQUFNLGlDQUFpQyxvQkFBdkM7QUFBQSxJQUNNLHFCQUFxQixJQUFJLE1BQUoseUNBRUYsOEJBRkUsNkJBSWpCLGNBSmlCLDBCQU1qQixjQU5pQiwrUkFpQk0sOEJBakJOLG9DQUQzQjs7QUF1QkEsT0FBTyxNQUFQLENBQWMsa0JBQWQsRUFBa0M7QUFDaEMsa0NBQWdDO0FBREEsQ0FBbEM7O0FBSUEsT0FBTyxPQUFQLEdBQWlCLGtCQUFqQjs7O0FDaENBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFlBQVksUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU0sV0FBVyxRQUFRLGFBQVIsQ0FBakI7QUFBQSxJQUNNLHFCQUFxQixRQUFRLCtCQUFSLENBRDNCO0FBQUEsSUFFTSx1QkFBdUIsUUFBUSxpQ0FBUixDQUY3QjtBQUFBLElBR00sMEJBQTBCLFFBQVEsNkJBQVIsQ0FIaEM7QUFBQSxJQUlNLDRCQUE0QixRQUFRLCtCQUFSLENBSmxDOztBQU1NLElBQUUsYUFBRixHQUFvQixRQUFwQixDQUFFLGFBQUY7QUFBQSxJQUNFLGNBREYsR0FDcUIsU0FEckIsQ0FDRSxjQURGO0FBQUEsSUFFRSxLQUZGLEdBRVksY0FGWixDQUVFLEtBRkY7QUFBQSxJQUdBLEdBSEEsR0FHTSxLQUhOLEMsQ0FHYzs7SUFFZCxlOzs7QUFDSiwyQkFBWSxPQUFaLEVBQXFCLGdCQUFyQixFQUF1QyxrQkFBdkMsRUFBMkQ7QUFBQTs7QUFBQSxrSUFDbkQsT0FEbUQsRUFDMUMsZ0JBRDBDLEVBQ3hCLGtCQUR3Qjs7QUFHekQsVUFBSyxxQkFBTCxHQUE2QixFQUE3Qjs7QUFFQSxVQUFLLHVCQUFMLEdBQStCLElBQS9CLENBTHlELENBS25CO0FBTG1CO0FBTTFEOzs7OzREQUV1QztBQUN0QyxVQUFNLHFCQUFxQixLQUFLLHFCQUFMLEVBQTNCO0FBQUEsVUFDTSxxQ0FBcUMsbUJBQW1CLHFDQUFuQixFQUQzQzs7QUFHQSxhQUFPLGtDQUFQO0FBQ0Q7Ozs2Q0FFd0IscUIsRUFBdUI7QUFDOUMsVUFBSSxLQUFLLHFCQUFULEVBQWdDLHFCQUFoQztBQUNEOzs7a0NBRWEsTSxFQUFRO0FBQ3BCLFdBQUssdUJBQUwsR0FBK0IsT0FBTyxZQUFQLENBQW9CLEtBQUsscUJBQXpCLENBQS9COztBQUVBLHNJQUFvQixNQUFwQjtBQUNEOzs7Z0NBRVcsTSxFQUFRO0FBQ2xCLFVBQU0scUNBQXFDLEtBQUsscUNBQUwsRUFBM0M7QUFBQSxVQUNNLDhCQUE4QixDQURwQzs7QUFHQSxhQUFPLFVBQVAsQ0FBa0IsS0FBSyx1QkFBdkIsRUFBZ0Qsa0NBQWhELEVBQW9GLDJCQUFwRjs7QUFFQSxvSUFBa0IsTUFBbEI7QUFDRDs7O2tDQUVhLEssRUFBTyxNLEVBQVE7QUFDM0IsYUFBTyxhQUFQLENBQXFCLEtBQXJCO0FBQ0Q7OztvQ0FFZSxNLEVBQVE7QUFDaEIsb0JBQVUsT0FBTyxVQUFQLEVBQVY7QUFBQSxVQUNFLFFBREYsR0FDZSxPQURmLENBQ0UsUUFERjtBQUFBLFVBRUEsTUFGQSxHQUVTLFFBRlQ7QUFBQSxVQUdBLGdCQUhBLEdBR21CLEtBQUssbUJBQUwsRUFIbkI7QUFBQSxVQUlBLHNCQUpBLEdBSXlCLGlCQUFpQix5QkFBakIsRUFKekI7QUFBQSxVQUtBLG1DQUxBLEdBS3NDLENBTHRDOzs7QUFPTixhQUFPLGVBQVAsQ0FBdUIsTUFBdkI7O0FBRUEsYUFBTyw4QkFBUCxDQUFzQyxzQkFBdEMsRUFBOEQsbUNBQTlEO0FBQ0Q7OztnQ0FFa0IsTSxFQUFRO0FBQ3pCLFVBQU0sVUFBVSxjQUFjLGtCQUFkLEVBQWtDLG9CQUFsQyxFQUF3RCxNQUF4RCxDQUFoQjtBQUFBLFVBQ00sbUJBQW1CLHdCQUF3QixXQUF4QixDQUFvQyxPQUFwQyxFQUE2QyxNQUE3QyxDQUR6QjtBQUFBLFVBRU0scUJBQXFCLDBCQUEwQixXQUExQixDQUFzQyxPQUF0QyxFQUErQyxNQUEvQyxDQUYzQjtBQUFBLFVBR00sa0JBQWtCLElBQUksZUFBSixDQUFvQixPQUFwQixFQUE2QixnQkFBN0IsRUFBK0Msa0JBQS9DLENBSHhCOztBQUtBLGFBQU8sZUFBUDtBQUNEOzs7O0VBM0QyQixROztBQThEOUIsT0FBTyxPQUFQLEdBQWlCLGVBQWpCOzs7QUM3RUE7O0FBRUEsSUFBTSxZQUFZLFFBQVEsV0FBUixDQUFsQjs7SUFFUSxjLEdBQW1CLFMsQ0FBbkIsYzs7O0FBRVIsU0FBUyxJQUFULENBQWMsUUFBZCxFQUF3QixXQUF4QixFQUFxQztBQUNuQyxNQUFNLFNBQVMsRUFBZjtBQUFBLE1BQ00saUJBQWlCLFNBQVMsTUFEaEM7QUFBQSxNQUVNLGVBQWUsaUJBQWlCLFdBRnRDOztBQUlBLE9BQUssSUFBSSxRQUFRLENBQWpCLEVBQW9CLFFBQVEsWUFBNUIsRUFBMEMsT0FBMUMsRUFBbUQ7QUFDakQsUUFBTSxRQUFRLEVBQWQ7O0FBRUEsU0FBSyxJQUFJLFNBQVMsQ0FBbEIsRUFBcUIsU0FBUyxXQUE5QixFQUEyQyxRQUEzQyxFQUFxRDtBQUNuRCxZQUFNLE1BQU4sSUFBZ0IsU0FBUyxRQUFRLFdBQVIsR0FBc0IsTUFBL0IsQ0FBaEI7QUFDRDs7QUFFRCxXQUFPLEtBQVAsSUFBZ0IsS0FBaEI7QUFDRDs7QUFFRCxTQUFPLE1BQVA7QUFDRDs7QUFFRCxTQUFTLE9BQVQsQ0FBaUIsTUFBakIsRUFBeUI7QUFDdkIsU0FBTyxPQUFPLE1BQVAsQ0FBYyxVQUFTLFFBQVQsRUFBbUIsS0FBbkIsRUFBMEI7QUFDN0MsV0FBTyxTQUFTLE1BQVQsQ0FBZ0IsS0FBaEIsQ0FBUDtBQUNELEdBRk0sRUFFSixFQUZJLENBQVA7QUFHRDs7QUFFRCxTQUFTLFNBQVQsQ0FBbUIsY0FBbkIsRUFBbUM7QUFDakMsU0FBUSwwQkFBMEIsS0FBM0IsR0FDRyxjQURILEdBRUksQ0FBQyxjQUFELENBRlg7QUFHRDs7QUFFRCxPQUFPLE9BQVAsR0FBaUIsT0FBTyxNQUFQLENBQWMsY0FBZCxFQUE4QjtBQUM3QyxRQUFNLElBRHVDO0FBRTdDLFdBQVMsT0FGb0M7QUFHN0MsYUFBVztBQUhrQyxDQUE5QixDQUFqQjs7O0FDcENBOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsUUFBaEMsRUFBMEM7QUFDeEMsTUFBTSxhQUFjLE9BQU8sUUFBUCxLQUFvQixRQUFyQixHQUNFLFNBQVMsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsQ0FBcEMsQ0FERixHQUM0QztBQUN4QyxVQUZ2QixDQUR3QyxDQUdOOztBQUVsQyxTQUFPLFVBQVA7QUFDRDs7QUFFRCxPQUFPLE9BQVAsR0FBaUI7QUFDZiwwQkFBd0I7QUFEVCxDQUFqQjs7O0FDVkE7O0FBRUEsSUFBTSxZQUFZLFFBQVEsV0FBUixDQUFsQjs7QUFFTSxJQUFFLHFCQUFGLEdBQTRCLFNBQTVCLENBQUUscUJBQUY7QUFBQSxJQUNFLFVBREYsR0FDaUIscUJBRGpCLENBQ0UsVUFERjs7O0FBR04sU0FBUyxZQUFULENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLEVBQXNDO0FBQ3BDLE1BQU0sUUFBUSxJQUFJLEtBQUosRUFBZDs7QUFFQSxRQUFNLE1BQU4sR0FBZSxZQUFXO0FBQ3hCLGFBQVMsS0FBVDtBQUNELEdBRkQ7O0FBSUEsUUFBTSxHQUFOLEdBQVksSUFBWixDQVBvQyxDQU9qQjtBQUNwQjs7QUFFRCxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEIsUUFBOUIsRUFBd0M7QUFDdEMsTUFBTSxTQUFTLEVBQWY7QUFBQSxNQUNNLFNBQVMsTUFBTSxNQURyQjtBQUFBLE1BQzZCO0FBQ3ZCLFlBQVU7QUFDUixZQUFRLE1BREE7QUFFUixXQUFPO0FBRkMsR0FGaEI7O0FBT0EsYUFBVyxvQkFBWCxFQUFpQyxNQUFqQyxFQUF5QyxJQUF6QyxFQUErQyxPQUEvQzs7QUFFQSxXQUFTLElBQVQsR0FBZ0I7QUFDZCxhQUFTLE1BQVQ7QUFDRDtBQUNGOztBQUVELE9BQU8sT0FBUCxHQUFpQjtBQUNmLGdCQUFjLFlBREM7QUFFZixpQkFBZTtBQUZBLENBQWpCOztBQUtBLFNBQVMsb0JBQVQsQ0FBOEIsSUFBOUIsRUFBb0MsSUFBcEMsRUFBMEMsT0FBMUMsRUFBbUQsS0FBbkQsRUFBMEQ7QUFBQSxNQUNoRCxNQURnRCxHQUM5QixPQUQ4QixDQUNoRCxNQURnRDtBQUFBLE1BQ3hDLEtBRHdDLEdBQzlCLE9BRDhCLENBQ3hDLEtBRHdDO0FBQUEsTUFFbEQsSUFGa0QsR0FFM0MsTUFBTSxLQUFOLENBRjJDO0FBQUEsTUFHbEQsS0FIa0QsR0FHMUMsSUFBSSxLQUFKLEVBSDBDOzs7QUFLeEQsU0FBTyxLQUFQLElBQWdCLEtBQWhCOztBQUVBLFFBQU0sTUFBTixHQUFlLElBQWYsQ0FQd0QsQ0FPbEM7O0FBRXRCLFFBQU0sR0FBTixHQUFZLElBQVosQ0FUd0QsQ0FTckM7QUFDcEI7OztBQy9DRDs7QUFFQSxJQUFNLFlBQVksUUFBUSxxQkFBUixDQUFsQjtBQUFBLElBQWtEO0FBQzVDLGlCQUFpQixRQUFRLG9CQUFSLENBRHZCOztBQUdNLElBQUUsY0FBRixHQUFxQixTQUFyQixDQUFFLGNBQUY7QUFBQSxJQUNFLFlBREYsR0FDbUIsY0FEbkIsQ0FDRSxZQURGO0FBQUEsNEJBRW1CLG9CQUZuQjtBQUFBLElBRUUsWUFGRix5QkFFRSxZQUZGOzs7QUFJTixTQUFTLGVBQVQsQ0FBeUIsUUFBekIsRUFBbUM7QUFDakMsTUFBTSxPQUFPLGNBQWI7O0FBRUEsZUFBYSxJQUFiLEVBQW1CLFFBQW5CO0FBQ0Q7O0FBRUQsU0FBUyxnQ0FBVCxDQUEwQyxVQUExQyxFQUFzRDtBQUNwRCxNQUFNLHFCQUFxQixXQUFXLE1BQVgsQ0FBa0IsVUFBUyxrQkFBVCxFQUE2QixXQUE3QixFQUEwQztBQUMvRSx5QkFBcUIsbUJBQW1CLE1BQW5CLENBQTBCLGFBQWEsV0FBYixDQUExQixDQUFyQjs7QUFFQSxXQUFPLGtCQUFQO0FBQ0QsR0FKb0IsRUFJbEIsRUFKa0IsQ0FBM0I7O0FBTUEsU0FBTyxrQkFBUDtBQUNEOztBQUVELE9BQU8sT0FBUCxHQUFpQjtBQUNmLG1CQUFpQixlQURGO0FBRWYsb0NBQWtDO0FBRm5CLENBQWpCOzs7QUN6QkE7Ozs7QUFFQSxJQUFNLE9BQU8sUUFBUSxlQUFSLENBQWI7QUFBQSxJQUNNLE9BQU8sUUFBUSxlQUFSLENBRGI7QUFBQSxJQUVNLFlBQVksUUFBUSxjQUFSLENBRmxCO0FBQUEsSUFHTSxpQkFBaUIsUUFBUSxvQkFBUixDQUh2Qjs7QUFLTSxJQUFFLGtCQUFGLEdBQXlCLFNBQXpCLENBQUUsa0JBQUY7QUFBQSxJQUNFLEtBREYsR0FDMkIsY0FEM0IsQ0FDRSxLQURGO0FBQUEsSUFDUyxNQURULEdBQzJCLGNBRDNCLENBQ1MsTUFEVDtBQUFBLElBQ2lCLEtBRGpCLEdBQzJCLGNBRDNCLENBQ2lCLEtBRGpCO0FBQUEsSUFFRSxNQUZGLEdBRXVDLElBRnZDLENBRUUsTUFGRjtBQUFBLElBRVUsS0FGVixHQUV1QyxJQUZ2QyxDQUVVLEtBRlY7QUFBQSxJQUVpQixNQUZqQixHQUV1QyxJQUZ2QyxDQUVpQixNQUZqQjtBQUFBLElBRXlCLFNBRnpCLEdBRXVDLElBRnZDLENBRXlCLFNBRnpCO0FBQUEsSUFHRSxTQUhGLEdBR2dCLElBSGhCLENBR0UsU0FIRjtBQUFBLElBSUEsS0FKQSxHQUlRLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBSlI7QUFBQSxJQUtBLEtBTEEsR0FLUSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUxSO0FBQUEsSUFNQSxLQU5BLEdBTVEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FOUjtBQUFBLElBT0EsWUFQQSxHQU9lLENBUGY7QUFBQSxJQVFBLFlBUkEsR0FRZSxDQVJmO0FBQUEsSUFTQSxhQVRBLEdBU2dCLENBVGhCO0FBQUEsSUFVQSxlQVZBLEdBVWtCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBVmxCO0FBQUEsSUFXQSxnQkFYQSxHQVdtQixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQVhuQjs7O0FBYU4sU0FBUyxnQkFBVCxDQUEwQixLQUExQixFQUFpQyxNQUFqQyxFQUF5QyxLQUF6QyxFQUFnRCxRQUFoRCxFQUEwRCxTQUExRCxFQUFxRTtBQUNuRSxNQUFNLFFBQVEsYUFBYSxLQUFiLEVBQW9CLE1BQXBCLEVBQTRCLEtBQTVCLENBQWQ7QUFBQSxNQUNNLFNBQVMsY0FBYyxTQUFkLENBRGY7QUFBQSxNQUVNLFlBQVksaUJBQWlCLFFBQWpCLENBRmxCOztBQUlBLFNBQU8sVUFBUyxHQUFULEVBQWM7QUFDbkIsV0FBTyxVQUFVLE9BQU8sTUFBTSxHQUFOLENBQVAsQ0FBVixDQUFQO0FBQ0QsR0FGRDtBQUdEOztBQUVELE9BQU8sT0FBUCxHQUFpQixPQUFPLE9BQVAsR0FBaUI7QUFDaEMsb0JBQWtCO0FBRGMsQ0FBbEM7O0FBSUEsU0FBUyxPQUFULENBQWlCLElBQWpCLEVBQXVCO0FBQ3JCLFNBQU8sVUFBUyxHQUFULEVBQWM7QUFDbkIsV0FBTyx1Q0FBYyxHQUFkLElBQW1CLENBQW5CLElBQXVCLElBQXZCLEVBQTZCLEtBQTdCLENBQW1DLENBQW5DLEVBQXNDLENBQXRDLENBQVA7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBUyxZQUFULEdBQTBGO0FBQUEsTUFBcEUsS0FBb0UsdUVBQTVELFlBQTREO0FBQUEsTUFBOUMsTUFBOEMsdUVBQXJDLGFBQXFDO0FBQUEsTUFBdEIsS0FBc0IsdUVBQWQsWUFBYzs7QUFDeEYsTUFBTSxPQUFPLFFBQWI7O0FBRUEsUUFBTSxJQUFOLEVBQVksSUFBWixFQUFrQixDQUFFLEtBQUYsRUFBUyxNQUFULEVBQWlCLEtBQWpCLENBQWxCOztBQUVBLFNBQU8sUUFBUSxJQUFSLENBQVA7QUFDRDs7QUFFRCxTQUFTLGFBQVQsR0FBcUQ7QUFBQSxNQUE5QixTQUE4Qix1RUFBbEIsZ0JBQWtCOztBQUNuRCxNQUFNLE9BQU8sUUFBYjtBQUFBLE1BQ0ksZ0JBQWdCLE1BQU0sU0FBTixDQURwQjtBQUFBLE1BRUksaUJBQWlCLE9BQU8sU0FBUCxDQUZyQjtBQUFBLE1BR0ksZ0JBQWdCLE1BQU0sU0FBTixDQUhwQjtBQUFBLE1BSUksU0FBUyxnQkFBZ0Isa0JBSjdCO0FBQUEsTUFJa0Q7QUFDOUMsV0FBUyxpQkFBaUIsa0JBTDlCO0FBQUEsTUFLa0Q7QUFDOUMsV0FBUyxnQkFBZ0Isa0JBTjdCLENBRG1ELENBT0Q7O0FBRWxELFNBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsTUFBbkIsRUFBMkIsS0FBM0I7QUFDQSxTQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLE1BQW5CLEVBQTJCLEtBQTNCO0FBQ0EsU0FBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixNQUFuQixFQUEyQixLQUEzQjs7QUFFQSxTQUFPLFFBQVEsSUFBUixDQUFQO0FBQ0Q7O0FBRUQsU0FBUyxnQkFBVCxHQUFzRDtBQUFBLE1BQTVCLFFBQTRCLHVFQUFqQixlQUFpQjs7QUFDcEQsTUFBTSxPQUFPLFFBQWI7O0FBRUEsWUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLFFBQXRCOztBQUVBLFNBQU8sUUFBUSxJQUFSLENBQVA7QUFDRDs7O0FDdEVEOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LHFDQUp4QjtBQUtmLGdCQUFjLFlBTEM7QUFNZixvQkFBa0IsZ0JBTkg7QUFPZiwwQkFBd0Isc0JBUFQ7QUFRZixnQ0FBOEIsNEJBUmY7QUFTZixnQ0FBOEIsNEJBVGY7QUFVZixxQ0FBbUMsaUNBVnBCO0FBV2YsMkNBQXlDO0FBWDFCLENBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSU1BR0VfU0laRSA9IDEyOCxcbiAgICAgIElNQUdFX01BUF9QQVRIID0gJy9pbWFnZU1hcCcsXG4gICAgICBJTkRFWF9QQUdFX1BBVEggPSAnLycsXG4gICAgICBTSEFQRVNfUEFHRV9QQVRIID0gJy9zaGFwZXMnLFxuICAgICAgQ09OVEFJTkVSX0hPVVNFX1BBR0VfUEFUSCA9ICcvY29udGFpbmVySG91c2UnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSU1BR0VfU0laRTogSU1BR0VfU0laRSxcbiAgSU1BR0VfTUFQX1BBVEg6IElNQUdFX01BUF9QQVRILFxuICBJTkRFWF9QQUdFX1BBVEg6IElOREVYX1BBR0VfUEFUSCxcbiAgU0hBUEVTX1BBR0VfUEFUSDogU0hBUEVTX1BBR0VfUEFUSCxcbiAgQ09OVEFJTkVSX0hPVVNFX1BBR0VfUEFUSDogQ09OVEFJTkVSX0hPVVNFX1BBR0VfUEFUSFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcHJvZ3JhbU1peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vcHJvZ3JhbScpLFxuICAgICAgdGV4dHVyZU1peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vdGV4dHVyZScpLFxuICAgICAgY29sb3VyTWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi9jb2xvdXInKSxcbiAgICAgIHNoYWRlck1peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vc2hhZGVyJyksXG4gICAgICBidWZmZXJNaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL2J1ZmZlcicpLFxuICAgICAgbWF0cml4TWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi9tYXRyaXgnKSxcbiAgICAgIGRlcHRoTWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi9kZXB0aCcpLFxuICAgICAgZG9tVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvZG9tJyk7XG5cbmNvbnN0IHsgZG9tRWxlbWVudEZyb21TZWxlY3RvciB9ID0gZG9tVXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0T2Zmc2V0ID0gMDtcblxuY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSAnY2FudmFzJykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgICAgICAgICBjb250ZXh0ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KCd3ZWJnbCcpO1xuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBpbml0aWFsaXNlIHRoZSBjb250ZXh0LmApO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LndpZHRoOyB9XG5cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmhlaWdodDsgfVxuXG4gIGdldENsaWVudFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aWR0aCk7IH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCk7IH1cblxuICBzZXRWaWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7IHRoaXMuY29udGV4dC52aWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTsgfVxuXG4gIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSkgeyB0aGlzLmNvbnRleHQudW5pZm9ybTFpKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKTsgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2xlYXJEZXB0aCgpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXIoKTtcbiAgICB0aGlzLmNsZWFyRGVwdGhCdWZmZXIoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyQnVmZmVyKCk7XG4gIH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG4gICAgdGhpcy5zZXRWaWV3cG9ydCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcihzaGFkZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICBjb25zdCBvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0T2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBjYW52YXMgPSB0aGlzOyAgLy8vXG5cbiAgICBvZmZzZXRNYXRyaXguYXBwbHkob2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHJvdGF0aW9uTWF0cml4LmFwcGx5KHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHBvc2l0aW9uTWF0cml4LmFwcGx5KHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHByb2plY3Rpb25NYXRyaXguYXBwbHkocHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgY2FudmFzKTtcbiAgICBub3JtYWxNYXRyaXguYXBwbHkobm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBjYW52YXMpO1xuXG4gICAgY29uc3QgY291bnQgPSBzaGFkZXIuZ2V0Q291bnQoKTtcblxuICAgIHRoaXMuZHJhd0VsZW1lbnRzKGNvdW50KTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhjb3VudCwgb2Zmc2V0ID0gZGVmYXVsdE9mZnNldCkge1xuICAgIGNvbnN0IHsgVFJJQU5HTEVTLCBVTlNJR05FRF9TSE9SVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIG1vZGUgPSBUUklBTkdMRVMsXG4gICAgICAgICAgdHlwZSA9IFVOU0lHTkVEX1NIT1JUO1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdFbGVtZW50cyhtb2RlLCBjb3VudCwgdHlwZSwgb2Zmc2V0KVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgcHJvZ3JhbU1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgdGV4dHVyZU1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgY29sb3VyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBzaGFkZXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJ1ZmZlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgbWF0cml4TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBkZXB0aE1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSLCBTVEFUSUNfRFJBVyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBFTEVNRU5UX0FSUkFZX0JVRkZFUixcbiAgICAgICAgdXNhZ2UgPSBTVEFUSUNfRFJBVyxcbiAgICAgICAgdWludDE2QXJyYXkgPSBuZXcgVWludDE2QXJyYXkoZGF0YSksXG4gICAgICAgIGVsZW1lbnRCdWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0YXJnZXQsIHVpbnQxNkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRCdWZmZXI7XG59XG5cbmZ1bmN0aW9uIGJpbmRFbGVtZW50QnVmZmVyKGVsZW1lbnRCdWZmZXIpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBFTEVNRU5UX0FSUkFZX0JVRkZFUjtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGVsZW1lbnRCdWZmZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICBidWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCksXG4gICAgICAgIGZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgZmxvYXQzMkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYmluZEJ1ZmZlcihidWZmZXIsIGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBGTE9BVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHR5cGUgPSBGTE9BVCxcbiAgICAgICAgbm9ybWFsaXplID0gZmFsc2UsXG4gICAgICAgIHN0cmlkZSA9IDAsXG4gICAgICAgIG9mZnNldCA9IDA7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0cmlidXRlTG9jYXRpb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlRWxlbWVudEJ1ZmZlcjogY3JlYXRlRWxlbWVudEJ1ZmZlcixcbiAgYmluZEVsZW1lbnRCdWZmZXI6IGJpbmRFbGVtZW50QnVmZmVyLFxuICBjcmVhdGVCdWZmZXI6IGNyZWF0ZUJ1ZmZlcixcbiAgYmluZEJ1ZmZlcjogYmluZEJ1ZmZlclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVmYXVsdFIgPSAwLjAsXG4gICAgICBkZWZhdWx0RyA9IDAuMCxcbiAgICAgIGRlZmF1bHRCID0gMC4wLFxuICAgICAgZGVmYXVsdEEgPSAxLjA7XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyKHIgPSBkZWZhdWx0UiwgZyA9IGRlZmF1bHRHLCBiID0gZGVmYXVsdEIsIGEgPSBkZWZhdWx0QSkgeyB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNvbG91ckJ1ZmZlcigpIHtcbiAgY29uc3QgeyBDT0xPUl9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBDT0xPUl9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsZWFyQ29sb3VyOiBjbGVhckNvbG91cixcbiAgY2xlYXJDb2xvdXJCdWZmZXI6IGNsZWFyQ29sb3VyQnVmZmVyXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWZhdWx0RGVwdGggPSAxLjA7XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGgoZGVwdGggPSBkZWZhdWx0RGVwdGgpIHsgdGhpcy5jb250ZXh0LmNsZWFyRGVwdGgoZGVwdGgpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGhCdWZmZXIoKSB7XG4gIGNvbnN0IHsgREVQVEhfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gREVQVEhfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZURlcHRoVGVzdGluZygpIHtcbiAgY29uc3QgeyBERVBUSF9URVNUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIGNhcCA9IERFUFRIX1RFU1Q7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZShjYXApO1xufVxuXG5mdW5jdGlvbiBlbmFibGVEZXB0aEZ1bmN0aW9uKCkge1xuICBjb25zdCB7IExFUVVBTCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBmdW5jID0gTEVRVUFMO1xuICBcbiAgdGhpcy5jb250ZXh0LmRlcHRoRnVuYyhmdW5jKTsgXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjbGVhckRlcHRoOiBjbGVhckRlcHRoLFxuICBjbGVhckRlcHRoQnVmZmVyOiBjbGVhckRlcHRoQnVmZmVyLFxuICBlbmFibGVEZXB0aFRlc3Rpbmc6IGVuYWJsZURlcHRoVGVzdGluZyxcbiAgZW5hYmxlRGVwdGhGdW5jdGlvbjogZW5hYmxlRGVwdGhGdW5jdGlvblxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gYXBwbHlNYXRyaXgodW5pZm9ybUxvY2F0aW9uLCBtYXRyaXgpIHtcbiAgY29uc3QgdHJhbnNwb3NlID0gZmFsc2U7ICAvLy9cblxuICB0aGlzLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih1bmlmb3JtTG9jYXRpb24sIHRyYW5zcG9zZSwgbWF0cml4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFwcGx5TWF0cml4OiBhcHBseU1hdHJpeFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKSB7XG4gIGNvbnN0IHByb2dyYW0gPSB0aGlzLmNvbnRleHQuY3JlYXRlUHJvZ3JhbSgpO1xuXG4gIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICB0aGlzLmNvbnRleHQubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gIFxuICByZXR1cm4gcHJvZ3JhbTtcbn1cblxuZnVuY3Rpb24gdXNlUHJvZ3JhbShwcm9ncmFtKSB7XG4gIHRoaXMuY29udGV4dC51c2VQcm9ncmFtKHByb2dyYW0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlUHJvZ3JhbTogY3JlYXRlUHJvZ3JhbSxcbiAgdXNlUHJvZ3JhbTogdXNlUHJvZ3JhbVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlYXRlU2hhZGVyKHR5cGUsIHNoYWRlclNvdXJjZSkge1xuICBjb25zdCB7IENPTVBJTEVfU1RBVFVTIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHBuYW1lID0gQ09NUElMRV9TVEFUVVMsXG4gICAgICAgIHNoYWRlciA9IHRoaXMuY29udGV4dC5jcmVhdGVTaGFkZXIodHlwZSk7XG5cbiAgdGhpcy5jb250ZXh0LnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7XG5cbiAgdGhpcy5jb250ZXh0LmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICBjb25zdCBjb21waWxlU3RhdHVzID0gdGhpcy5jb250ZXh0LmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHBuYW1lKTtcblxuICBpZiAoIWNvbXBpbGVTdGF0dXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlci5gKTtcbiAgfVxuXG4gIHJldHVybiBzaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB7IFZFUlRFWF9TSEFERVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdHlwZSA9IFZFUlRFWF9TSEFERVIsXG4gICAgICAgIHZlcnRleFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKHR5cGUsIHZlcnRleFNoYWRlclNvdXJjZSk7XG5cbiAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB7IEZSQUdNRU5UX1NIQURFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0eXBlID0gRlJBR01FTlRfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcih0eXBlLCBmcmFnbWVudFNoYWRlclNvdXJjZSk7XG5cbiAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZVNoYWRlcjogY3JlYXRlU2hhZGVyLFxuICBjcmVhdGVWZXJ0ZXhTaGFkZXI6IGNyZWF0ZVZlcnRleFNoYWRlcixcbiAgY3JlYXRlRnJhZ21lbnRTaGFkZXI6IGNyZWF0ZUZyYWdtZW50U2hhZGVyXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0dXJlKGltYWdlKSB7XG4gIGNvbnN0IHsgVEVYVFVSRV8yRCwgUkdCQSwgVU5TSUdORURfQllURSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBsZXZlbCA9IDAsXG4gICAgICAgIGludGVybmFsRm9ybWF0ID0gUkdCQSxcbiAgICAgICAgZm9ybWF0ID0gUkdCQSxcbiAgICAgICAgdHlwZSA9IFVOU0lHTkVEX0JZVEUsXG4gICAgICAgIHRleHR1cmUgPSB0aGlzLmNvbnRleHQuY3JlYXRlVGV4dHVyZSgpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZShURVhUVVJFXzJELCB0ZXh0dXJlKTtcblxuICB0aGlzLmNvbnRleHQudGV4SW1hZ2UyRChURVhUVVJFXzJELCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIGZvcm1hdCwgdHlwZSwgaW1hZ2UpO1xuXG4gIHRoaXMuY29udGV4dC5nZW5lcmF0ZU1pcG1hcChURVhUVVJFXzJEKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVUZXh0dXJlKHRhcmdldCkgeyB0aGlzLmNvbnRleHQuYWN0aXZlVGV4dHVyZSh0YXJnZXQpOyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVUZXh0dXJlOiBjcmVhdGVUZXh0dXJlLFxuICBhY3RpdmF0ZVRleHR1cmU6IGFjdGl2YXRlVGV4dHVyZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ1lMSU5ERVJfRkFDRVMgPSAxNixcbiAgICAgIE1JTklNVU1fRElTVEFOQ0UgPSAxMCxcbiAgICAgIERFR1JFRVNfVE9fUkFESUFOUyA9IE1hdGguUEkgLyAxODAsXG4gICAgICBGSUVMRF9PRl9WSUVXID0gNDUgKiBERUdSRUVTX1RPX1JBRElBTlMsXG4gICAgICBaX05FQVIgPSAxLFxuICAgICAgWl9GQVIgPSAxMDAwLFxuICAgICAgTU9VU0VfVVAgPSAnTU9VU0VfVVAnLFxuICAgICAgTU9VU0VfRE9XTiA9ICdNT1VTRV9ET1dOJyxcbiAgICAgIE1PVVNFX01PVkUgPSAnTU9VU0VfTU9WRScsXG4gICAgICBNT1VTRV9XSEVFTCA9ICdNT1VTRV9XSEVFTCcsXG4gICAgICBDVFJMX0tFWV9DT0RFID0gMTcsXG4gICAgICBTSElGVF9LRVlfQ09ERSA9IDE2LFxuICAgICAgT0ZGU0VUX1NDQUxBUiA9IDAuMjUsXG4gICAgICBESVNUQU5DRV9TQ0FMQVIgPSAxLjI1LFxuICAgICAgQU5HTEVfQ09PUkRJTkFURVNfU0NBTEFSID0gMC4wMSxcbiAgICAgIElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMgPSBbIDAsIDAgXSxcbiAgICAgIElOSVRJQUxfQU5HTEVfQ09PUkRJTkFURVMgPSBbIDAsIDAgXTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFpfRkFSOiBaX0ZBUixcbiAgWl9ORUFSOiBaX05FQVIsXG4gIE1PVVNFX1VQOiBNT1VTRV9VUCxcbiAgTU9VU0VfRE9XTjogTU9VU0VfRE9XTixcbiAgTU9VU0VfTU9WRTogTU9VU0VfTU9WRSxcbiAgTU9VU0VfV0hFRUw6IE1PVVNFX1dIRUVMLFxuICBDVFJMX0tFWV9DT0RFOiBDVFJMX0tFWV9DT0RFLFxuICBTSElGVF9LRVlfQ09ERTogU0hJRlRfS0VZX0NPREUsXG4gIEZJRUxEX09GX1ZJRVc6IEZJRUxEX09GX1ZJRVcsXG4gIENZTElOREVSX0ZBQ0VTOiBDWUxJTkRFUl9GQUNFUyxcbiAgTUlOSU1VTV9ESVNUQU5DRTogTUlOSU1VTV9ESVNUQU5DRSxcbiAgREVHUkVFU19UT19SQURJQU5TOiBERUdSRUVTX1RPX1JBRElBTlMsXG4gIE9GRlNFVF9TQ0FMQVI6IE9GRlNFVF9TQ0FMQVIsXG4gIERJU1RBTkNFX1NDQUxBUjogRElTVEFOQ0VfU0NBTEFSLFxuICBBTkdMRV9DT09SRElOQVRFU19TQ0FMQVI6IEFOR0xFX0NPT1JESU5BVEVTX1NDQUxBUixcbiAgSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUzogSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyxcbiAgSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUzogSU5JVElBTF9BTkdMRV9DT09SRElOQVRFU1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICAgIHRoaXMuY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge31cblxuICBhc3NpZ25Db250ZXh0KG5hbWVzLCB0aGVuRGVsZXRlKSB7XG4gICAgY29uc3QgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgXG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyk7XG4gIFxuICAgICAgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuICBcbiAgICAgICAgdGhlbkRlbGV0ZSA9IGZpcnN0QXJndW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcbiAgXG4gICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICB9XG4gIFxuICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRleHRbbmFtZV0sXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH07XG4gIFxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvcik7XG4gIFxuICAgICAgaWYgKHRoZW5EZWxldGUpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuY29udGV4dFtuYW1lXTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyksIFtdKTtcbiAgfVxuXG4gIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9ICh0eXBlb2YgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0O1xuXG4gICAgdGhpcy5jb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGRlbGV0ZSBjaGlsZEVsZW1lbnQuY29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBDbGFzcyguLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnRPclByb3BlcnRpZXMoZWxlbWVudCwgcHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LnNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50T3JQcm9wZXJ0aWVzKGVsZW1lbnQsIHByb3BlcnRpZXMpIHtcbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9ICh0eXBlb2YgZWxlbWVudC5jaGlsZEVsZW1lbnRzID09PSAnZnVuY3Rpb24nKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzIHx8IFtdO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBQYW4gPSByZXF1aXJlKCcuL2NhbWVyYS9wYW4nKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuL2NhbWVyYS96b29tJyksXG4gICAgICB0aWx0ID0gcmVxdWlyZSgnLi9jYW1lcmEvdGlsdCcpLFxuICAgICAga2V5RXZlbnRzID0gcmVxdWlyZSgnLi9jYW1lcmEva2V5RXZlbnRzJyksXG4gICAgICBNb3VzZUV2ZW50cyA9IHJlcXVpcmUoJy4vY2FtZXJhL21vdXNlRXZlbnRzJyksXG4gICAgICBPZmZzZXRNYXRyaXggPSByZXF1aXJlKCcuLi9tYXRyaXgvb2Zmc2V0JyksXG4gICAgICBOb3JtYWxNYXRyaXggPSByZXF1aXJlKCcuLi9tYXRyaXgvbm9ybWFsJyksXG4gICAgICBSb3RhdGlvbk1hdHJpeCA9IHJlcXVpcmUoJy4uL21hdHJpeC9yb3RhdGlvbicpLFxuICAgICAgUG9zaXRpb25NYXRyaXggPSByZXF1aXJlKCcuLi9tYXRyaXgvcG9zaXRpb24nKSxcbiAgICAgIFByb2plY3Rpb25NYXRyaXggPSByZXF1aXJlKCcuLi9tYXRyaXgvcHJvamVjdGlvbicpO1xuXG5jbGFzcyBDYW1lcmEgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocGFuLCB6b29tLCBoYW5kbGVyLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG4gICAgXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG4gIFxuICBtb3VzZVVwSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICBcbiAgICB0aWx0Lm1vdXNlVXBIYW5kbGVyKCk7XG5cbiAgICB0aGlzLnBhbi5tb3VzZVVwSGFuZGxlcigpO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgIFxuICAgIHRpbHQubW91c2VEb3duSGFuZGxlcigpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VEb3duSGFuZGxlcigpO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGlsdC5tb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCB0aWx0KTtcblxuICAgIGlmICh0aGlzLm1vdXNlRG93bikge1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihkZWx0YSkge1xuICAgIHRoaXMuem9vbS5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgdGlsdC5zaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKTtcblxuICAgIHRoaXMucGFuLnNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pO1xuICB9XG5cbiAgYWRkS2V5RXZlbnRIYW5kbGVycygpIHtcbiAgICBjb25zdCBzaGlmdEtleUhhbmRsZXIgPSB0aGlzLnNoaWZ0S2V5SGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAga2V5RXZlbnRzLmFkZFNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleUhhbmRsZXIpO1xuICB9XG4gIFxuICBhZGRNb3VzZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3QgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyh0aGlzLmNhbnZhcyksXG4gICAgICAgICAgbW91c2VVcEhhbmRsZXIgPSB0aGlzLm1vdXNlVXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VEb3duSGFuZGxlciA9IHRoaXMubW91c2VEb3duSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsSGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgb25VcGRhdGUoaGFuZGxlcikge1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cbiAgXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIG9mZnNldCA9IHRoaXMucGFuLmdldE9mZnNldCgpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgb2Zmc2V0TWF0cml4ID0gT2Zmc2V0TWF0cml4LmZyb21PZmZzZXQob2Zmc2V0KSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IFJvdGF0aW9uTWF0cml4LmZyb21BbmdsZXModGlsdCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBQb3NpdGlvbk1hdHJpeC5mcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBQcm9qZWN0aW9uTWF0cml4LmZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxNYXRyaXggPSBOb3JtYWxNYXRyaXguZnJvbVJvdGF0aW9uTWF0cml4KHJvdGF0aW9uTWF0cml4KTtcbiAgICBcbiAgICBpZiAodGhpcy5oYW5kbGVyKSB7ICAvLy9cbiAgICAgIHRoaXMuaGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgICB9XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIHJldHVybiAoe1xuICAgICAgb25VcGRhdGU6IHRoaXMub25VcGRhdGUuYmluZCh0aGlzKSxcbiAgICAgIGZvcmNlVXBkYXRlOiB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuICBcbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFkZEtleUV2ZW50SGFuZGxlcnMoKTtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVycygpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxEaXN0YW5jZSwgaW5pdGlhbE9mZnNldCwgY2FudmFzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldChpbml0aWFsT2Zmc2V0KSxcbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSksXG4gICAgICAgICAgaGFuZGxlciA9IG51bGwsICAvLy9cbiAgICAgICAgICBtb3VzZURvd24gPSBmYWxzZSxcbiAgICAgICAgICBjYW1lcmEgPSBuZXcgQ2FtZXJhKHBhbiwgem9vbSwgaGFuZGxlciwgbW91c2VEb3duLCBjYW52YXMpO1xuICAgIFxuICAgIGNhbWVyYS5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FtZXJhO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBDVFJMX0tFWV9DT0RFLCBTSElGVF9LRVlfQ09ERSB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBLZXlFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVycykge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgfVxuICBcbiAgb25DdHJsS2V5VXAoKSB7XG4gICAgY29uc3QgY3RybEtleURvd24gPSBmYWxzZSxcbiAgICAgICAgICBjdHJsS2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW0NUUkxfS0VZX0NPREVdO1xuXG4gICAgY3RybEtleUhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oY3RybEtleUhhbmRsZXIpIHtcbiAgICAgIGN0cmxLZXlIYW5kbGVyKGN0cmxLZXlEb3duKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uU2hpZnRLZXlVcCgpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSBmYWxzZSxcbiAgICAgICAgICBzaGlmdEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1tTSElGVF9LRVlfQ09ERV07XG5cbiAgICBzaGlmdEtleUhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ3RybEtleURvd24oKSB7XG4gICAgY29uc3QgY3RybEtleURvd24gPSB0cnVlLFxuICAgICAgICAgIGN0cmxLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbQ1RSTF9LRVlfQ09ERV07XG5cbiAgICBjdHJsS2V5SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihjdHJsS2V5SGFuZGxlcikge1xuICAgICAgY3RybEtleUhhbmRsZXIoY3RybEtleURvd24pO1xuICAgIH0pO1xuICB9XG5cbiAgb25TaGlmdEtleURvd24oKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdHJ1ZSxcbiAgICAgICAgICBzaGlmdEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1tTSElGVF9LRVlfQ09ERV07XG5cbiAgICBzaGlmdEtleUhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEN0cmxLZXlIYW5kbGVyKGN0cmxLZXlIYW5kbGVyKSB7XG4gICAgY29uc3QgY3RybEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1tDVFJMX0tFWV9DT0RFXTtcblxuICAgIGN0cmxLZXlIYW5kbGVycy5wdXNoKGN0cmxLZXlIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZFNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleUhhbmRsZXIpIHtcbiAgICBjb25zdCBzaGlmdEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1tTSElGVF9LRVlfQ09ERV07XG5cbiAgICBzaGlmdEtleUhhbmRsZXJzLnB1c2goc2hpZnRLZXlIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHt9LFxuICAgICAgICAgIGtleUV2ZW50cyA9IG5ldyBLZXlFdmVudHMoaGFuZGxlcnMpO1xuICAgIFxuICAgIGhhbmRsZXJzW0NUUkxfS0VZX0NPREVdID0gW107XG4gICAgaGFuZGxlcnNbU0hJRlRfS0VZX0NPREVdID0gW107XG5cbiAgICByZXR1cm4ga2V5RXZlbnRzO1xuICB9XG59XG5cbmNvbnN0IGtleUV2ZW50cyA9IEtleUV2ZW50cy5mcm9tTm90aGluZygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleUV2ZW50cztcblxuY29uc3QgZG9jdW1lbnRET01FbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5kb2N1bWVudERPTUVsZW1lbnQub25rZXl1cCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gIGlmIChmYWxzZSkge1xuXG4gIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gQ1RSTF9LRVlfQ09ERSkge1xuICAgIGtleUV2ZW50cy5vbkN0cmxLZXlVcCgpO1xuICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAga2V5RXZlbnRzLm9uU2hpZnRLZXlVcCgpO1xuICB9XG59O1xuXG5kb2N1bWVudERPTUVsZW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgaWYgKGZhbHNlKSB7XG5cbiAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBDVFJMX0tFWV9DT0RFKSB7XG4gICAga2V5RXZlbnRzLm9uQ3RybEtleURvd24oKTtcbiAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgIGtleUV2ZW50cy5vblNoaWZ0S2V5RG93bigpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBNT1VTRV9VUCwgTU9VU0VfRE9XTiwgTU9VU0VfTU9WRSwgTU9VU0VfV0hFRUwgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgTW91c2VFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVyc01hcCkge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRIYW5kbGVyKE1PVVNFX1VQLCBtb3VzZVVwSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZEhhbmRsZXIoTU9VU0VfRE9XTiwgbW91c2VEb3duSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZEhhbmRsZXIoTU9VU0VfTU9WRSwgbW91c2VNb3ZlSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcikge1xuICAgIHRoaXMuYWRkSGFuZGxlcihNT1VTRV9XSEVFTCwgbW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkSGFuZGxlcihldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXTtcblxuICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBvbk1vdXNlRXZlbnQoZXZlbnRUeXBlLCBldmVudCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50LCB0aGlzLmNhbnZhcyk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlV2hlZWxFdmVudChldmVudCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtNT1VTRV9XSEVFTF0sXG4gICAgICAgICAgZGVsdGEgPSBkZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIoZGVsdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGhhbmRsZXJzTWFwID0ge1xuICAgICAgICAgICAgTU9VU0VfVVA6IFtdLFxuICAgICAgICAgICAgTU9VU0VfRE9XTjogW10sXG4gICAgICAgICAgICBNT1VTRV9NT1ZFOiBbXSxcbiAgICAgICAgICAgIE1PVVNFX1dIRUVMOiBbXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoaGFuZGxlcnNNYXApLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBjYW52YXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgYWRkTW91c2VFdmVudEhhbmRsZXIoZG9tRWxlbWVudCwgJ21vdXNldXAnLCBmdW5jdGlvbihldmVudCkgeyBtb3VzZUV2ZW50cy5vbk1vdXNlRXZlbnQoTU9VU0VfVVAsIGV2ZW50KTsgfSk7XG4gICAgYWRkTW91c2VFdmVudEhhbmRsZXIoZG9tRWxlbWVudCwgJ21vdXNlZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7IG1vdXNlRXZlbnRzLm9uTW91c2VFdmVudChNT1VTRV9ET1dOLCBldmVudCk7IH0pO1xuICAgIGFkZE1vdXNlRXZlbnRIYW5kbGVyKGRvbUVsZW1lbnQsICdtb3VzZW1vdmUnLCBmdW5jdGlvbihldmVudCkgeyBtb3VzZUV2ZW50cy5vbk1vdXNlRXZlbnQoTU9VU0VfTU9WRSwgZXZlbnQpOyB9KTtcbiAgICBhZGRNb3VzZUV2ZW50SGFuZGxlcihkb21FbGVtZW50LCAnbW91c2V3aGVlbCcsIGZ1bmN0aW9uKGV2ZW50KSB7IG1vdXNlRXZlbnRzLm9uTW91c2VXaGVlbEV2ZW50KGV2ZW50KTsgfSk7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZUV2ZW50cztcblxuZnVuY3Rpb24gZGVsdGFGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZXZlbnQud2hlZWxEZWx0YSkpOyAvLy9cblxuICByZXR1cm4gZGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IGV2ZW50LnRhcmdldCwgIC8vL1xuICAgICAgICBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0ID0gZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IFtcbiAgICAgICAgICArKGV2ZW50LmNsaWVudFggLSBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0LmxlZnQpLFxuICAgICAgICAgIC0oZXZlbnQuY2xpZW50WSAtIGRvbUVsZW1lbnRCb3VuZGluZ0NsaWVudFJlY3QudG9wKVxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuXG5mdW5jdGlvbiBhZGRNb3VzZUV2ZW50SGFuZGxlcihkb21FbGVtZW50LCB0eXBlLCBoYW5kbGVyKSB7XG4gIGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jdGlvbihldmVudCkge1xuICAgIGhhbmRsZXIoZXZlbnQpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB2ZWMyID0gcmVxdWlyZSgnLi4vLi4vbWF0aHMvdmVjMicpLFxuICAgICAgdmVjMyA9IHJlcXVpcmUoJy4uLy4uL21hdGhzL3ZlYzMnKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhZGQgfSA9IHZlYzMsXG4gICAgICB7IHN1YnRyYWN0LCBzY2FsZSB9ID0gdmVjMixcbiAgICAgIHsgT0ZGU0VUX1NDQUxBUiwgSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBQYW4ge1xuICBjb25zdHJ1Y3Rvcihtb3VzZURvd24sIHNoaWZ0S2V5RG93biwgb2Zmc2V0LCBwcmV2aW91c09mZnNldCwgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgdGhpcy5wcmV2aW91c09mZnNldCA9IHByZXZpb3VzT2Zmc2V0O1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0O1xuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIoKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSB0aGlzLm9mZnNldDtcblxuICAgIGlmICh0aGlzLnNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgICB0aGlzLnByZXZpb3VzT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBhbmdsZXMpIHtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKHRoaXMubW91c2VEb3duICYmIHRoaXMuc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnVwZGF0ZU9mZnNldChhbmdsZXMpO1xuICAgIH1cbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcblxuICAgIGlmICh0aGlzLnNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgICB0aGlzLnByZXZpb3VzT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlT2Zmc2V0KGFuZ2xlcykge1xuICAgIGNvbnN0IHhBbmdsZSA9IGFuZ2xlcy5nZXRYQW5nbGUoKSxcbiAgICAgICAgICB5QW5nbGUgPSBhbmdsZXMuZ2V0WUFuZ2xlKCksXG4gICAgICAgICAgc2NhbGFyID0gT0ZGU0VUX1NDQUxBUixcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdCh0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldCA9IHNjYWxlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGFyKSxcbiAgICAgICAgICBmaXJzdFJlbGF0aXZlT2Zmc2V0ID0gZmlyc3QocmVsYXRpdmVPZmZzZXQpLFxuICAgICAgICAgIHNlY29uZFJlbGF0aXZlT2Zmc2V0ID0gc2Vjb25kKHJlbGF0aXZlT2Zmc2V0KTtcblxuICAgIGxldCBvZmZzZXQgPSB0aGlzLnByZXZpb3VzT2Zmc2V0LnNsaWNlKCk7XG5cbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB4ID0gLU1hdGguY29zKHlBbmdsZSkgKiBmaXJzdFJlbGF0aXZlT2Zmc2V0LFxuICAgICAgICAgICAgeSA9IDAsXG4gICAgICAgICAgICB6ID0gLU1hdGguc2luKHlBbmdsZSkgKiBmaXJzdFJlbGF0aXZlT2Zmc2V0O1xuXG4gICAgICBvZmZzZXQgPSBhZGQob2Zmc2V0LCBbeCwgeSwgel0pO1xuICAgIH0pKCk7XG5cbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB4ID0gLU1hdGguc2luKHhBbmdsZSkgKiBNYXRoLnNpbih5QW5nbGUpICogc2Vjb25kUmVsYXRpdmVPZmZzZXQsXG4gICAgICAgICAgICB5ID0gLU1hdGguY29zKHhBbmdsZSkgKiBzZWNvbmRSZWxhdGl2ZU9mZnNldCxcbiAgICAgICAgICAgIHogPSArTWF0aC5zaW4oeEFuZ2xlKSAqIE1hdGguY29zKHlBbmdsZSkgKiBzZWNvbmRSZWxhdGl2ZU9mZnNldDtcblxuICAgICAgb2Zmc2V0ID0gYWRkKG9mZnNldCwgW3gsIHksIHpdKTtcbiAgICB9KSgpO1xuXG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxPZmZzZXQoaW5pdGlhbE9mZnNldCkge1xuICAgIGNvbnN0IG9mZnNldCA9IGluaXRpYWxPZmZzZXQsXG4gICAgICAgICAgbW91c2VEb3duID0gZmFsc2UsXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsXG4gICAgICAgICAgcHJldmlvdXNPZmZzZXQgPSBvZmZzZXQsICAvLy9cbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLFxuICAgICAgICAgIHBhbiA9IG5ldyBQYW4obW91c2VEb3duLCBzaGlmdEtleURvd24sIG9mZnNldCwgcHJldmlvdXNPZmZzZXQsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG4gICAgXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHZlYzIgPSByZXF1aXJlKCcuLi8uLi9tYXRocy92ZWMyJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYWRkLCBzdWJ0cmFjdCwgc2NhbGUgfSA9IHZlYzIsXG4gICAgICB7IEFOR0xFX0NPT1JESU5BVEVTX1NDQUxBUiwgSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUywgSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IobW91c2VEb3duLCBzaGlmdEtleURvd24sIG1vdXNlQ29vcmRpbmF0ZXMsIGFuZ2xlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcywgcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMgPSBhbmdsZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0WEFuZ2xlKCkge1xuICAgIGNvbnN0IHNlY29uZEFuZ2xlQ29vcmRpbmF0ZSA9IHNlY29uZCh0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHhBbmdsZSA9IHNlY29uZEFuZ2xlQ29vcmRpbmF0ZTsgLy8vXG5cbiAgICByZXR1cm4geEFuZ2xlO1xuICB9XG4gIFxuICBnZXRZQW5nbGUoKSB7XG4gICAgY29uc3QgZmlyc3RBbmdsZUNvb3JkaW5hdGUgPSBmaXJzdCh0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHlBbmdsZSA9IC1maXJzdEFuZ2xlQ29vcmRpbmF0ZTsgLy8vXG5cbiAgICByZXR1cm4geUFuZ2xlO1xuICB9XG5cbiAgZ2V0WkFuZ2xlKCkge1xuICAgIGNvbnN0IHpBbmdsZSA9IDA7XG5cbiAgICByZXR1cm4gekFuZ2xlO1xuICB9XG4gIFxuICBtb3VzZVVwSGFuZGxlcigpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gdGhpcy5hbmdsZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcigpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKHRoaXMubW91c2VEb3duICYmICF0aGlzLnNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy51cGRhdGVBbmdsZUNvb3JkaW5hdGVzKCk7XG4gICAgfVxuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuXG4gICAgaWYgKCFzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICAgICAgdGhpcy5wcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSB0aGlzLmFuZ2xlQ29vcmRpbmF0ZXM7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQW5nbGVDb29yZGluYXRlcygpIHtcbiAgICBjb25zdCBzY2FsYXIgPSBBTkdMRV9DT09SRElOQVRFU19TQ0FMQVIsXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QodGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgcmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzID0gc2NhbGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsYXIpO1xuXG4gICAgdGhpcy5hbmdsZUNvb3JkaW5hdGVzID0gYWRkKHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzLCByZWxhdGl2ZUFuZ2xlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG1vdXNlRG93biA9IGZhbHNlLFxuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTLFxuICAgICAgICAgIGFuZ2xlQ29vcmRpbmF0ZXMgPSBJTklUSUFMX0FOR0xFX0NPT1JESU5BVEVTLFxuICAgICAgICAgIHByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IGFuZ2xlQ29vcmRpbmF0ZXMsICAvLy9cbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KG1vdXNlRG93biwgc2hpZnRLZXlEb3duLCBtb3VzZUNvb3JkaW5hdGVzLCBhbmdsZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzQW5nbGVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxufVxuXG5jb25zdCB0aWx0ID0gVGlsdC5mcm9tTm90aGluZygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRpbHQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IERJU1RBTkNFX1NDQUxBUiwgTUlOSU1VTV9ESVNUQU5DRSB9ID0gY29uc3RhbnRzOyBcblxuY2xhc3MgWm9vbSB7XG4gIGNvbnN0cnVjdG9yKGRpc3RhbmNlKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdGFuY2U7XG4gIH1cblxuICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gRElTVEFOQ0VfU0NBTEFSO1xuICAgIFxuICAgIHRoaXMuZGlzdGFuY2UgLT0gZGVsdGEgKiBzY2FsYXI7XG5cbiAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5tYXgoTUlOSU1VTV9ESVNUQU5DRSwgdGhpcy5kaXN0YW5jZSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gaW5pdGlhbERpc3RhbmNlLFxuICAgICAgICAgIHpvb20gPSBuZXcgWm9vbShkaXN0YW5jZSk7XG4gICAgXG4gICAgcmV0dXJuIHpvb207XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBab29tO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgdmVjMyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlYzMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB0cmFuc2Zvcm1VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdHJhbnNmb3JtJyk7XG5cbmNvbnN0IHsgY2hvcCwgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNvbXBvc2VUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybVV0aWxpdGllcyxcbiAgICAgIHsgc3VidHJhY3QsIGNyb3NzLCBub3JtYWxpc2UgfSA9IHZlYzM7XG5cbmNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKSB7XG4gICAgdHJhbnNmb3JtcyA9IFt0aGlzLnRyYW5zZm9ybSwgLi4udHJhbnNmb3Jtc107IC8vL1xuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSh0cmFuc2Zvcm1zKSB7XG4gICAgdHJhbnNmb3JtcyA9IFt0aGlzLnRyYW5zZm9ybSwgLi4udHJhbnNmb3Jtc107IC8vL1xuXG4gICAgY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSA9IHRoaXMuZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSgpLFxuICAgICAgICAgIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgPSBjaG9wKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIDMpLCAgLy8vXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gaW5pdGlhbFZlcnRleFBvc2l0aW9ucy5tYXAoZnVuY3Rpb24oaW5pdGlhbFZlcnRleFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBsZXQgdmVydGV4UG9zaXRpb24gPSBpbml0aWFsVmVydGV4UG9zaXRpb247XG5cbiAgICAgICAgICAgIHRyYW5zZm9ybXMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgICAgdmVydGV4UG9zaXRpb24gPSB0cmFuc2Zvcm0odmVydGV4UG9zaXRpb24pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBmbGF0dGVuKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25EYXRhO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpIHtcbiAgICBjb25zdCBmYWNlcyA9IGNob3AodmVydGV4UG9zaXRpb25EYXRhLCAxMiksICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gZmFjZXMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleE5vcm1hbHMsIGZhY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IGNob3AoZmFjZSwgMyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA0OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZpcnN0VmVydGV4SW5kZXggPSBpbmRleCxcbiAgICAgICAgICAgICAgICAgIHNlY29uZFZlcnRleEluZGV4ID0gKGluZGV4ICsgMSkgJSA0LFxuICAgICAgICAgICAgICAgICAgdGhpcmRWZXJ0ZXhJbmRleCA9IChpbmRleCArIDMpICUgNCxcbiAgICAgICAgICAgICAgICAgIGZpcnN0VmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbZmlyc3RWZXJ0ZXhJbmRleF0sXG4gICAgICAgICAgICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tzZWNvbmRWZXJ0ZXhJbmRleF0sXG4gICAgICAgICAgICAgICAgICB0aGlyZFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3RoaXJkVmVydGV4SW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZmlyc3RWZWN0b3IgPSBzdWJ0cmFjdChzZWNvbmRWZXJ0ZXhQb3NpdGlvbiwgZmlyc3RWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgICAgICAgICAgICBzZWNvbmRWZWN0b3IgPSBzdWJ0cmFjdCh0aGlyZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbGlzZShjcm9zcyhmaXJzdFZlY3Rvciwgc2Vjb25kVmVjdG9yKSk7XG5cbiAgICAgICAgICAgICAgdmVydGV4Tm9ybWFscy5wdXNoKHZlcnRleE5vcm1hbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gZmxhdHRlbih2ZXJ0ZXhOb3JtYWxzKTsgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4Tm9ybWFsRGF0YTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleERhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbkRhdGEubGVuZ3RoLFxuICAgICAgICAgIGZhY2VzTGVuZ3RoID0gdmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoIC8gMTI7IC8vL1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZhY2VzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIDQ7XG5cbiAgICAgIHZlcnRleEluZGV4RGF0YS5wdXNoKG9mZnNldCArIDApO1xuICAgICAgdmVydGV4SW5kZXhEYXRhLnB1c2gob2Zmc2V0ICsgMSk7XG4gICAgICB2ZXJ0ZXhJbmRleERhdGEucHVzaChvZmZzZXQgKyAyKTtcbiAgICAgIHZlcnRleEluZGV4RGF0YS5wdXNoKG9mZnNldCArIDApO1xuICAgICAgdmVydGV4SW5kZXhEYXRhLnB1c2gob2Zmc2V0ICsgMik7XG4gICAgICB2ZXJ0ZXhJbmRleERhdGEucHVzaChvZmZzZXQgKyAzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVydGV4SW5kZXhEYXRhO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBwb3NpdGlvbiwgcm90YXRpb25zIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0od2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMpLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCB0cmFuc2Zvcm0sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc0VsZW1lbnQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGNvbG91cikge1xuICAgIHN1cGVyKHRyYW5zZm9ybSk7XG5cbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEodmVydGV4UG9zaXRpb25EYXRhKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoID0gdmVydGV4UG9zaXRpb25EYXRhLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzTGVuZ3RoID0gdmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoIC8gMywgIC8vL1xuICAgICAgICAgIHZlcnRleENvbG91ciA9IHRoaXMuY29sb3VyLFxuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2ZXJ0ZXhDb2xvdXJzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2ZXJ0ZXhDb2xvdXJzLnB1c2godmVydGV4Q29sb3VyKTtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJEYXRhID0gZmxhdHRlbih2ZXJ0ZXhDb2xvdXJzKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91ckRhdGE7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uRGF0YSA9IHRoaXMuY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhKHRyYW5zZm9ybXMpLFxuICAgICAgICAgIHZlcnRleEluZGV4RGF0YSA9IHRoaXMuY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IHRoaXMuY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpLFxuICAgICAgICAgIHZlcnRleENvbG91ckRhdGEgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEodmVydGV4UG9zaXRpb25EYXRhKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9uRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhJbmRleERhdGEpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbERhdGEodmVydGV4Tm9ybWFsRGF0YSk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Q29sb3VyRGF0YSh2ZXJ0ZXhDb2xvdXJEYXRhKTtcblxuICAgIHN1cGVyLmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91cmVkQ2FudmFzRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvbG91cik7XG5cbiAgICByZXR1cm4gY29sb3VyZWRDYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRDYW52YXNFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9pbWFnZU1hcCcpO1xuXG5jb25zdCB7IGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0ZXh0dXJlQ29vcmRpbmF0ZXNGcm9tSW1hZ2VOYW1lcyB9ID0gaW1hZ2VNYXBVdGlsaXRpZXM7XG5cbmNsYXNzIFRleHR1cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGltYWdlTmFtZSkge1xuICAgIHN1cGVyKHRyYW5zZm9ybSk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbkRhdGEubGVuZ3RoLFxuICAgICAgICAgIGltYWdlTmFtZXNMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGggLyAxMiwgIC8vL1xuICAgICAgICAgIGltYWdlTmFtZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbWFnZU5hbWVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpbWFnZU5hbWVzLnB1c2godGhpcy5pbWFnZU5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlc0Zyb21JbWFnZU5hbWVzKGltYWdlTmFtZXMpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlRGF0YSA9IGZsYXR0ZW4odGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uRGF0YSA9IHRoaXMuY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhKHRyYW5zZm9ybXMpLFxuICAgICAgICAgIHZlcnRleEluZGV4RGF0YSA9IHRoaXMuY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IHRoaXMuY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlRGF0YSA9IHRoaXMuY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSk7XG5cbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4UG9zaXRpb25EYXRhKHZlcnRleFBvc2l0aW9uRGF0YSk7XG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhJbmRleERhdGEpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleE5vcm1hbERhdGEpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRUZXh0dXJlQ29vcmRpbmF0ZURhdGEodGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcblxuICAgIHN1cGVyLmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRDYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgaW1hZ2VOYW1lKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZWRDYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRDYW52YXNFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgQ29sb3VyUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlci9jb2xvdXInKSxcbiAgICAgIFRleHR1cmVSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL3RleHR1cmUnKTtcblxuY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG4gIFxuICBnZXRDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9XG4gIFxuICBnZXRDb2xvdXJSZW5kZXJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvdXJSZW5kZXJlcjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZVJlbmRlcmVyKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVSZW5kZXJlcjtcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICBjb25zdCBjb2xvdXJSZW5kZXJlclByb2dyYW0gPSB0aGlzLmNvbG91clJlbmRlcmVyLmdldFByb2dyYW0oKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJQcm9ncmFtID0gdGhpcy50ZXh0dXJlUmVuZGVyZXIuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVByb2dyYW0oY29sb3VyUmVuZGVyZXJQcm9ncmFtKTtcblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMuY29sb3VyUmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlUHJvZ3JhbSh0ZXh0dXJlUmVuZGVyZXJQcm9ncmFtKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuYWN0aXZhdGVUZXh0dXJlKHRoaXMuY2FudmFzKTtcbiAgICBcbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy50ZXh0dXJlUmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgdXBkYXRlSGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgdGhpcy5yZW5kZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5vblVwZGF0ZSh0aGlzLnVwZGF0ZUhhbmRsZXIuYmluZCh0aGlzKSk7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGltYWdlTWFwLCBjYW52YXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBDb2xvdXJSZW5kZXJlci5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHNjZW5lID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTY2VuZSwgcHJvcGVydGllcywgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgY2FudmFzKSxcbiAgICAgICAgICB0cmFuc2Zvcm1zID0gW107XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGltYWdlTWFwKSB7XG4gICAgICB0ZXh0dXJlUmVuZGVyZXIuY3JlYXRlVGV4dHVyZShpbWFnZU1hcCwgY2FudmFzKTtcbiAgICB9XG5cbiAgICBjb2xvdXJSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gICAgdGV4dHVyZVJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNhbnZhcy5lbmFibGVEZXB0aFRlc3RpbmcoKTtcbiAgICBjYW52YXMuZW5hYmxlRGVwdGhGdW5jdGlvbigpO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzaGFwZXM6IHJlcXVpcmUoJy4vZXhhbXBsZXMvc2hhcGVzJyksXG4gIGNvbnRhaW5lckhvdXNlOiByZXF1aXJlKCcuL2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN1Ym9pZCA9IHJlcXVpcmUoJy4uL2N1Ym9pZCcpLFxuICAgICAgQ29sb3VyZWRDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMvY29sb3VyZWQnKTtcblxuY29uc3QgeyBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIH0gPSBjdWJvaWQ7XG5cbmNsYXNzIENvbG91cmVkQ3Vib2lkIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSgpIHtcbiAgICByZXR1cm4gaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDb2xvdXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29sb3VyZWRDdWJvaWQsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRDdWJvaWQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN5bGluZGVyID0gcmVxdWlyZSgnLi4vY3lsaW5kZXInKSxcbiAgICAgIENvbG91cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkJyk7XG5cbmNvbnN0IHsgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSB9ID0gY3lsaW5kZXI7XG5cbmNsYXNzIENvbG91cmVkQ3lsaW5kZXIgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBnZXRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKCkge1xuICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZEN5bGluZGVyLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkQ3lsaW5kZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBsYW5lID0gcmVxdWlyZSgnLi4vcGxhbmUnKSxcbiAgICAgIENvbG91cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkJyk7XG5cbmNvbnN0IHsgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSB9ID0gcGxhbmU7XG5cbmNsYXNzIENvbG91cmVkUGxhbmUgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBnZXRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKCkge1xuICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZFBsYW5lLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkUGxhbmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEgPSBbXG5cbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMC4wLCAxLjAsIDEuMCxcblxuICAgICAgICAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgIDAuMCwgMS4wLCAxLjAsXG4gICAgICAgIDEuMCwgMS4wLCAxLjAsXG4gICAgICAgIDEuMCwgMS4wLCAwLjAsXG5cbiAgICAgICAgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcblxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuICAgICAgICAxLjAsIDEuMCwgMS4wLFxuICAgICAgICAxLjAsIDAuMCwgMS4wLFxuXG4gICAgICAgIDAuMCwgMC4wLCAwLjAsXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsXG4gICAgICAgIDAuMCwgMS4wLCAxLjAsXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsXG5cbiAgICAgIF07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhOiBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgQ1lMSU5ERVJfRkFDRVMgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEgPSBjYWxjdWxhdGVJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKCk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhOiBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhXG59O1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKCkge1xuICBjb25zdCBpbml0aWFsVmVydGV4UG9zaXRpb25WZWN0b3JzID0gW10sXG4gICAgICAgIGZhY2VzID0gQ1lMSU5ERVJfRkFDRVMsXG4gICAgICAgIHN0ZXAgPSAyICogTWF0aC5QSSAvIGZhY2VzO1xuXG4gIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBmYWNlczsgY291bnQrKykge1xuICAgIGNvbnN0IGFuZ2xlID0gc3RlcCAqIGNvdW50LFxuICAgICAgICAgIGZpcnN0WCA9IChNYXRoLmNvcyhhbmdsZSkgKyAxICkvIDIsXG4gICAgICAgICAgZmlyc3RZID0gKE1hdGguc2luKGFuZ2xlKSArIDEgKS8gMixcbiAgICAgICAgICBzZWNvbmRYID0gKE1hdGguY29zKGFuZ2xlICsgc3RlcCkgKyAxICkvIDIsXG4gICAgICAgICAgc2Vjb25kWSA9IChNYXRoLnNpbihhbmdsZSArIHN0ZXApICsgMSApLyAyLFxuICAgICAgICAgIGZpcnN0WiA9IDAsXG4gICAgICAgICAgc2Vjb25kWiA9IDE7XG5cbiAgICBpbml0aWFsVmVydGV4UG9zaXRpb25WZWN0b3JzLnB1c2goWyBmaXJzdFgsIGZpcnN0WSwgZmlyc3RaIF0pO1xuICAgIGluaXRpYWxWZXJ0ZXhQb3NpdGlvblZlY3RvcnMucHVzaChbIHNlY29uZFgsIHNlY29uZFksIGZpcnN0WiBdKTtcbiAgICBpbml0aWFsVmVydGV4UG9zaXRpb25WZWN0b3JzLnB1c2goWyBzZWNvbmRYLCBzZWNvbmRZLCBzZWNvbmRaIF0pO1xuICAgIGluaXRpYWxWZXJ0ZXhQb3NpdGlvblZlY3RvcnMucHVzaChbIGZpcnN0WCwgZmlyc3RZLCBzZWNvbmRaIF0pO1xuICB9XG5cbiAgY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSA9IGZsYXR0ZW4oaW5pdGlhbFZlcnRleFBvc2l0aW9uVmVjdG9ycyk7ICAvLy9cblxuICByZXR1cm4gaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSA9IFtcblxuICAgICAgICAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuICAgIFxuICAgICAgXTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGE6IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGFcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN1Ym9pZCA9IHJlcXVpcmUoJy4uL2N1Ym9pZCcpLFxuICAgICAgVGV4dHVyZWRDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMvdGV4dHVyZWQnKTtcblxuY29uc3QgeyBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIH0gPSBjdWJvaWQ7XG5cbmNsYXNzIFRleHR1cmVkQ3Vib2lkIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSgpIHtcbiAgICByZXR1cm4gaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRDdWJvaWQsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRDdWJvaWQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN5bGluZGVyID0gcmVxdWlyZSgnLi4vY3lsaW5kZXInKSxcbiAgICAgIFRleHR1cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzL3RleHR1cmVkJyk7XG5cbmNvbnN0IHsgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSB9ID0gY3lsaW5kZXI7XG5cbmNsYXNzIFRleHR1cmVkQ3lsaW5kZXIgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBnZXRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKCkge1xuICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZEN5bGluZGVyLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkQ3lsaW5kZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBsYW5lID0gcmVxdWlyZSgnLi4vcGxhbmUnKSxcbiAgICAgIFRleHR1cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzL3RleHR1cmVkJyk7XG5cbmNvbnN0IHsgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSB9ID0gcGxhbmU7XG5cbmNsYXNzIFRleHR1cmVkUGxhbmUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBnZXRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKCkge1xuICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZFBsYW5lLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkUGxhbmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uL2ppZ2dsZScpO1xuXG5jb25zdCBDYW52YXMgPSByZXF1aXJlKCcuLi9jYW52YXMnKSxcbiAgICAgIFNjZW5lID0gcmVxdWlyZSgnLi4vZWxlbWVudC9zY2VuZScpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vZWxlbWVudC9jYW1lcmEnKSxcbiAgICAgIEZyYW1lID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9mcmFtZScpLFxuICAgICAgUm9vZkdhcmRlbiA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2Uvcm9vZkdhcmRlbicpLFxuICAgICAgRmlyc3RGbG9vciA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZmxvb3IvZmlyc3QnKSxcbiAgICAgIFRoaXJkRmxvb3IgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2Zsb29yL3RoaXJkJyksXG4gICAgICBTZWNvbmRGbG9vciA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZmxvb3Ivc2Vjb25kJyksXG4gICAgICBGb3VuZGF0aW9ucyA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZm91bmRhdGlvbnMnKSxcbiAgICAgIE1haW5CYWxjb255ID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9iYWxjb255L21haW4nKSxcbiAgICAgIExvd2VyQmFsY29ueSA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvYmFsY29ueS9sb3dlcicpLFxuICAgICAgQmVkcm9vbUJhbGNvbnkgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvYmVkcm9vbScpLFxuICAgICAgaW1hZ2VNYXBVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvaW1hZ2VNYXAnKTtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VNYXAgfSA9IGltYWdlTWFwVXRpbGl0aWVzO1xuXG5jb25zdCBjb250YWluZXJIb3VzZSA9ICgpID0+IHtcblxuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgcHJlbG9hZEltYWdlTWFwKChpbWFnZU1hcCkgPT5cblxuICAgIDxTY2VuZSBpbWFnZU1hcD17aW1hZ2VNYXB9IGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxDYW1lcmEgaW5pdGlhbERpc3RhbmNlPXsxNTB9IGluaXRpYWxPZmZzZXQ9e1sgLTE4LCAwLCAtMTYgXX0gY2FudmFzPXtjYW52YXN9IC8+XG4gICAgICA8Rm91bmRhdGlvbnMgLz5cbiAgICAgIDxGaXJzdEZsb29yIC8+XG4gICAgICA8U2Vjb25kRmxvb3IgLz5cbiAgICAgIDxUaGlyZEZsb29yIC8+XG4gICAgICA8Um9vZkdhcmRlbiAvPlxuICAgICAgPE1haW5CYWxjb255IC8+XG4gICAgICA8TG93ZXJCYWxjb255IC8+XG4gICAgICA8QmVkcm9vbUJhbGNvbnkgLz5cbiAgICAgIDxGcmFtZSAvPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGFpbmVySG91c2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgQmFsY29ueVNlY3Rpb24gPSByZXF1aXJlKCcuLi9iYWxjb255L3NlY3Rpb24nKSxcbiAgICAgIFJhaWxpbmcgPSByZXF1aXJlKCcuLi9iYWxjb255L3JhaWxpbmcnKTtcblxuY29uc3QgeyB0aGlja25lc3MgfSA9IFJhaWxpbmc7XG5cbmNsYXNzIEJlZHJvb21CYWxjb255IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxCYWxjb255U2VjdGlvbiBwb3NpdGlvbj17WyAwLCAxOSwgMCBdfSAvPixcbiAgICAgIDxCYWxjb255U2VjdGlvbiBwb3NpdGlvbj17WyA0LCAxOSwgMCBdfSAvPixcblxuICAgICAgPFJhaWxpbmcgcG9zaXRpb249e1sgICAgICAgICAwLCAxOSwgMCBdfSBsZW5ndGg9ezh9IC8+LFxuICAgICAgPFJhaWxpbmcgcG9zaXRpb249e1sgdGhpY2tuZXNzLCAxOSwgMCBdfSBsZW5ndGg9ezE2fSByb3RhdGlvbnM9e1sgMCwgLTkwLCAwIF19Lz4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEJlZHJvb21CYWxjb255LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJlZHJvb21CYWxjb255O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIFJhaWxpbmcgPSByZXF1aXJlKCcuLi9iYWxjb255L3JhaWxpbmcnKTtcblxuY29uc3QgeyB0aGlja25lc3MgfSA9IFJhaWxpbmc7XG5cbmNsYXNzIExvd2VyQmFsY29ueSBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8UmFpbGluZyBwb3NpdGlvbj17WyA0MCwgOS41LCAxNiAgICAgICAgICAgXX0gbGVuZ3RoPXs4fSAvPixcbiAgICAgIDxSYWlsaW5nIHBvc2l0aW9uPXtbIDQwLCA5LjUsIDMyLXRoaWNrbmVzcyBdfSBsZW5ndGg9ezh9IC8+LFxuICAgICAgPFJhaWxpbmcgcG9zaXRpb249e1sgNDgsIDkuNSwgMTYgICAgICAgICAgIF19IHJvdGF0aW9ucz17WyAwLCAtOTAsIDBdfSBsZW5ndGg9ezE2fSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoTG93ZXJCYWxjb255LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvd2VyQmFsY29ueTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBCYWxjb255U2VjdGlvbiA9IHJlcXVpcmUoJy4uL2JhbGNvbnkvc2VjdGlvbicpLFxuICAgICAgUmFpbGluZyA9IHJlcXVpcmUoJy4uL2JhbGNvbnkvcmFpbGluZycpO1xuXG5jb25zdCB7IHRoaWNrbmVzcyB9ID0gUmFpbGluZztcblxuY2xhc3MgTWFpbkJhbGNvbnkgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEJhbGNvbnlTZWN0aW9uIHBvc2l0aW9uPXtbIDQwLCAxOSwgIDAgXX0gLz4sXG4gICAgICA8QmFsY29ueVNlY3Rpb24gcG9zaXRpb249e1sgNDQsIDE5LCAgMCBdfSAvPixcbiAgICAgIDxCYWxjb255U2VjdGlvbiBwb3NpdGlvbj17WyAzNiwgMTksICAwIF19IC8+LFxuICAgICAgPEJhbGNvbnlTZWN0aW9uIHBvc2l0aW9uPXtbIDMyLCAxOSwgIDAgXX0gLz4sXG4gICAgICA8QmFsY29ueVNlY3Rpb24gcG9zaXRpb249e1sgMjgsIDE5LCAgMCBdfSAvPixcbiAgICAgIDxCYWxjb255U2VjdGlvbiBwb3NpdGlvbj17WyA0MCwgMTksIDE2IF19IC8+LFxuICAgICAgPEJhbGNvbnlTZWN0aW9uIHBvc2l0aW9uPXtbIDQ0LCAxOSwgMTYgXX0gLz4sXG5cbiAgICAgIDxSYWlsaW5nIHBvc2l0aW9uPXtbIDI4LCAxOSwgICAgICAgICAgICAwIF19IGxlbmd0aD17MjB9IC8+LFxuICAgICAgPFJhaWxpbmcgcG9zaXRpb249e1sgMjAsIDE5LCAzMi10aGlja25lc3MgXX0gbGVuZ3RoPXsyOH0gLz4sXG4gICAgICA8UmFpbGluZyBwb3NpdGlvbj17WyA0OCwgMTksIDAgICAgICAgICAgICBdfSByb3RhdGlvbnM9e1sgMCwgLTkwLCAwXX0gbGVuZ3RoPXszMn0gLz4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1haW5CYWxjb255LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1haW5CYWxjb255O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUb3BSYWlsID0gcmVxdWlyZSgnLi9yYWlsaW5nL3RvcFJhaWwnKSxcbiAgICAgIFVwcmlnaHRzID0gcmVxdWlyZSgnLi9yYWlsaW5nL3VwcmlnaHRzJyksXG4gICAgICBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMnKTtcblxuY29uc3QgeyB0aGlja25lc3MgfSA9IFRvcFJhaWwsXG4gICAgICBvdmVyYWxsSGVpZ2h0ID0gMztcblxuY2xhc3MgUmFpbGluZyBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gcHJvcGVydGllcztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8VG9wUmFpbCBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSBsZW5ndGg9e2xlbmd0aH0gLz4sXG5cbiAgICAgIDxVcHJpZ2h0cyBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSBsZW5ndGg9e2xlbmd0aH0gdGhpY2tuZXNzPXt0aGlja25lc3N9IC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFJhaWxpbmcsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmFpbGluZywge1xuICB0aGlja25lc3M6IHRoaWNrbmVzc1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmFpbGluZztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29sb3VyZWRDdWJvaWQgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vY29sb3VyZWQvY3Vib2lkJyk7XG5cbmNvbnN0IGhlaWdodCA9IDAuMSxcbiAgICAgIHRoaWNrbmVzcyA9IDAuNCxcbiAgICAgIGNvbG91ciA9IFsgMC41LCAwLjUsIDAuNSwgMV07XG5cbmNvbnN0IFRvcFJhaWwgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGxlbmd0aCwgb3ZlcmFsbEhlaWdodCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgd2lkdGggPSBsZW5ndGgsIC8vL1xuICAgICAgICBkZXB0aCA9IHRoaWNrbmVzcywgLy8vXG4gICAgICAgIHBvc2l0aW9uID0gWyAwLCBvdmVyYWxsSGVpZ2h0LCAwIF07XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb2xvdXJlZEN1Ym9pZCBjb2xvdXI9e2NvbG91cn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSBwb3NpdGlvbj17cG9zaXRpb259IC8+XG5cbiAgKTtcbn07XG5cbk9iamVjdC5hc3NpZ24oVG9wUmFpbCwge1xuICB0aGlja25lc3M6IHRoaWNrbmVzc1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVG9wUmFpbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29sb3VyZWRDeWxpbmRlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbW1vbi9jb2xvdXJlZC9jeWxpbmRlcicpO1xuXG5jb25zdCBkaWFtZXRlciA9IDAuMTI1LFxuICAgICAgcmFkaXVzID0gZGlhbWV0ZXIgLyAyLFxuICAgICAgY29sb3VyID0gWyAwLjUsIDAuNSwgMC41LCAxXTtcblxuY29uc3QgVXByaWdodCA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgcG9zaXRpb24sIG92ZXJhbGxIZWlnaHQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIHdpZHRoID0gZGlhbWV0ZXIsIC8vL1xuICAgICAgICBoZWlnaHQgPSBkaWFtZXRlciwgLy8vXG4gICAgICAgIGRlcHRoID0gb3ZlcmFsbEhlaWdodDsgIC8vL1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRDeWxpbmRlciBjb2xvdXI9e2NvbG91cn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSBwb3NpdGlvbj17cG9zaXRpb259IHJvdGF0aW9ucz17WyAtOTAsIDAsIDAgXX0gLz5cblxuICApO1xufTtcblxuT2JqZWN0LmFzc2lnbihVcHJpZ2h0LCB7XG4gIHJhZGl1czogcmFkaXVzXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBVcHJpZ2h0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBVcHJpZ2h0ID0gcmVxdWlyZSgnLi91cHJpZ2h0JyksXG4gICAgICBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vZWxlbWVudC9jYW52YXMnKTtcblxuY29uc3QgeyByYWRpdXMgfSA9IFVwcmlnaHQ7XG5cbmNsYXNzIFVwcmlnaHRzIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb3ZlcmFsbEhlaWdodCwgbGVuZ3RoLCB0aGlja25lc3MgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZWxlbWVudHMgPSBbXSxcbiAgICAgICAgICBzdGVwID0gMC41LFxuICAgICAgICAgIGNvdW50ID0gbGVuZ3RoIC8gc3RlcDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBbc3RlcCAqIGluZGV4IC0gcmFkaXVzLCAwLCB0aGlja25lc3MgLyAyICsgcmFkaXVzLCAxXTtcblxuICAgICAgZWxlbWVudHMucHVzaChcblxuICAgICAgICA8VXByaWdodCBwb3NpdGlvbj17cG9zaXRpb259IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IC8+XG5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhVcHJpZ2h0cywgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVcHJpZ2h0cztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4vc2VjdGlvbi9lZGdlJyksXG4gICAgICBPcGVuTWVzaCA9IHJlcXVpcmUoJy4vc2VjdGlvbi9vcGVuTWVzaCcpLFxuICAgICAgTG9uZ0VkZ2UgPSByZXF1aXJlKCcuL3NlY3Rpb24vZWRnZS9sb25nJyksXG4gICAgICBTaG9ydEVkZ2UgPSByZXF1aXJlKCcuL3NlY3Rpb24vZWRnZS9zaG9ydCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNvbnN0IHsgaGVpZ2h0LCB0aGlja25lc3MgfSA9IEVkZ2UsXG4gICAgICB3aWR0aCA9IDQsXG4gICAgICBkZXB0aCA9IDE2O1xuXG5jbGFzcyBCYWxjb255U2VjdGlvbiBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPExvbmdFZGdlIHBvc2l0aW9uPXtbICAgICAgICAgICAgICAgMCwgLWhlaWdodCwgICAgICAgICAgICAwIF19IGRlcHRoPXtkZXB0aH0vPixcbiAgICAgIDxMb25nRWRnZSBwb3NpdGlvbj17WyB3aWR0aC10aGlja25lc3MsIC1oZWlnaHQsICAgICAgICAgICAgMCBdfSBkZXB0aD17ZGVwdGh9Lz4sXG5cbiAgICAgIDxTaG9ydEVkZ2UgcG9zaXRpb249e1sgICAgICAgICAgICAgIDAsIC1oZWlnaHQsICAgICAgICAgICAgMCBdfSB3aWR0aD17d2lkdGh9Lz4sXG4gICAgICA8U2hvcnRFZGdlIHBvc2l0aW9uPXtbICAgICAgICAgICAgICAwLCAtaGVpZ2h0LCAxNi10aGlja25lc3MgXX0gd2lkdGg9e3dpZHRofS8+LFxuXG4gICAgICA8T3Blbk1lc2ggcG9zaXRpb249e1sgdGhpY2tuZXNzLCAwLCB0aGlja25lc3MgXX0gb3ZlcmFsbFdpZHRoPXt3aWR0aCAtIDIgKiB0aGlja25lc3N9IG92ZXJhbGxEZXB0aD17ZGVwdGggLSAyICogdGhpY2tuZXNzfSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhCYWxjb255U2VjdGlvbiwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYWxjb255U2VjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGV4dHVyZWRDdWJvaWQgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vdGV4dHVyZWQvY3Vib2lkJyk7XG5cbmNvbnN0IGhlaWdodCA9IDAuMjUsXG4gICAgICB0aGlja25lc3MgPSAwLjE7XG5cbmNvbnN0IEVkZ2UgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCB3aWR0aCwgZGVwdGggfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxUZXh0dXJlZEN1Ym9pZCBpbWFnZU5hbWU9XCJydXN0eVN0ZWVsLmpwZ1wiIHBvc2l0aW9uPXtwb3NpdGlvbn0gd2lkdGg9e3dpZHRofSBkZXB0aD17ZGVwdGh9IGhlaWdodD17aGVpZ2h0fSAvPlxuXG4gICk7XG59O1xuXG5PYmplY3QuYXNzaWduKEVkZ2UsIHtcbiAgaGVpZ2h0OiBoZWlnaHQsXG4gIHRoaWNrbmVzczogdGhpY2tuZXNzXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFZGdlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi4vZWRnZScpO1xuXG5jb25zdCB7IHRoaWNrbmVzcyB9ID0gRWRnZTtcblxuY29uc3QgTG9uZ0VkZ2UgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCBkZXB0aCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgd2lkdGggPSB0aGlja25lc3M7ICAvLy9cblxuICByZXR1cm4gKFxuXG4gICAgPEVkZ2UgcG9zaXRpb249e3Bvc2l0aW9ufSB3aWR0aD17d2lkdGh9IGRlcHRoPXtkZXB0aH0gLz5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb25nRWRnZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4uL2VkZ2UnKTtcblxuY29uc3QgeyB0aGlja25lc3MgfSA9IEVkZ2U7XG5cbmNvbnN0IFNob3J0RWRnZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgcG9zaXRpb24sIHdpZHRoIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICBkZXB0aCA9IHRoaWNrbmVzczsgIC8vL1xuXG4gIHJldHVybiAoXG5cbiAgICA8RWRnZSBwb3NpdGlvbj17cG9zaXRpb259IHdpZHRoPXt3aWR0aH0gZGVwdGg9e2RlcHRofSAvPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNob3J0RWRnZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBDb2xvdXJlZEN1Ym9pZCA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbW1vbi9jb2xvdXJlZC9jdWJvaWQnKSxcbiAgICAgIENvbG91cmVkQ3lsaW5kZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vY29sb3VyZWQvY3lsaW5kZXInKTtcblxuY29uc3Qgb3ZlcmFsbEhlaWdodCA9IDAuMjUsXG4gICAgICBvdmVyYWxsVGhpY2tuZXNzID0gMC4wMjUsXG4gICAgICB3aWR0aHdpc2VDb3VudCA9IDEwLFxuICAgICAgZGVwdGh3aXNlQ291bnQgPSA1LFxuICAgICAgY29sb3VyID0gWyAwLjYsIDAuNiwgMC42LCAxMCBdO1xuXG5jbGFzcyBPcGVuTWVzaCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG92ZXJhbGxXaWR0aCwgb3ZlcmFsbERlcHRoIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGVsZW1lbnRzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgd2lkdGh3aXNlQ291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSBvdmVyYWxsV2lkdGggLyB3aWR0aHdpc2VDb3VudCxcbiAgICAgICAgICAgIHdpZHRoID0gb3ZlcmFsbFRoaWNrbmVzcywgIC8vL1xuICAgICAgICAgICAgaGVpZ2h0ID0gb3ZlcmFsbEhlaWdodCxcbiAgICAgICAgICAgIGRlcHRoID0gb3ZlcmFsbERlcHRoO1xuXG4gICAgICBlbGVtZW50cy5wdXNoKFxuXG4gICAgICAgIDxDb2xvdXJlZEN1Ym9pZCBjb2xvdXI9e2NvbG91cn0gcG9zaXRpb249e1tzdGVwICogaW5kZXgsIC1oZWlnaHQsIDBdfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9Lz5cblxuICAgICAgKVxuICAgIH1cblxuICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBkZXB0aHdpc2VDb3VudDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgc3RlcCA9IG92ZXJhbGxEZXB0aCAvIGRlcHRod2lzZUNvdW50LFxuICAgICAgICAgICAgZGlhbWV0ZXIgPSBvdmVyYWxsSGVpZ2h0IC8gMiwgLy8vXG4gICAgICAgICAgICB3aWR0aCA9IGRpYW1ldGVyLCAvLy9cbiAgICAgICAgICAgIGhlaWdodCA9IGRpYW1ldGVyLCAvLy9cbiAgICAgICAgICAgIGRlcHRoID0gb3ZlcmFsbFdpZHRoOyAgLy8vXG5cbiAgICAgIGVsZW1lbnRzLnB1c2goXG5cbiAgICAgICAgPENvbG91cmVkQ3lsaW5kZXIgY29sb3VyPXtjb2xvdXJ9IHBvc2l0aW9uPXtbIDAsIC0zICogZGlhbWV0ZXIgLyAyLCBzdGVwICogaW5kZXggXX0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0vPlxuXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoT3Blbk1lc2gsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3Blbk1lc2g7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgUm9vZiA9IHJlcXVpcmUoJy4vY29udGFpbmVyL3Jvb2YnKSxcbiAgICAgIEJhY2tXYWxsID0gcmVxdWlyZSgnLi9jb250YWluZXIvYmFja1dhbGwnKSxcbiAgICAgIFVuZGVyc2lkZSA9IHJlcXVpcmUoJy4vY29udGFpbmVyL3VuZGVyc2lkZScpLFxuICAgICAgRnJvbnRXYWxsID0gcmVxdWlyZSgnLi9jb250YWluZXIvZnJvbnRXYWxsJyksXG4gICAgICBTaWRlV2FsbEEgPSByZXF1aXJlKCcuL2NvbnRhaW5lci9zaWRlV2FsbEEnKSxcbiAgICAgIFNpZGVXYWxsQiA9IHJlcXVpcmUoJy4vY29udGFpbmVyL3NpZGVXYWxsQicpO1xuXG5jb25zdCBvdmVyYWxsSGVpZ2h0ID0gOS41LFxuICAgICAgb3ZlcmFsbFdpZHRoID0gOCxcbiAgICAgIGNvbG91ciA9IFsgMSwgMSwgMSwgMSBdO1xuXG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFJvb2YgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSBjb2xvdXI9e2NvbG91cn0gLz4sXG4gICAgICA8VW5kZXJzaWRlIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsV2lkdGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gY29sb3VyPXtjb2xvdXJ9IC8+LFxuICAgICAgPEZyb250V2FsbCBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbFdpZHRoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IGNvbG91cj17Y29sb3VyfSAvPixcbiAgICAgIDxCYWNrV2FsbCBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbFdpZHRoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IGNvbG91cj17Y29sb3VyfSAvPixcbiAgICAgIDxTaWRlV2FsbEEgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSBjb2xvdXI9e2NvbG91cn0gLz4sXG4gICAgICA8U2lkZVdhbGxCIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsV2lkdGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gY29sb3VyPXtjb2xvdXJ9IC8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb250YWluZXIsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGFpbmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb2xvdXJlZFBsYW5lID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL2NvbG91cmVkL3BsYW5lJyk7XG5cbmNvbnN0IEJhY2tXYWxsID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBsZW5ndGgsIG92ZXJhbGxXaWR0aCwgb3ZlcmFsbEhlaWdodCwgY29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICB3aWR0aCA9IG92ZXJhbGxXaWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gb3ZlcmFsbEhlaWdodCxcbiAgICAgICAgZGVwdGggPSAwLFxuICAgICAgICBwb3NpdGlvbiA9IFsgb3ZlcmFsbFdpZHRoLCAwLCAwIF0sXG4gICAgICAgIHJvdGF0aW9ucyA9IFsgMCwgLTE4MCwgMCBdO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRQbGFuZSBjb2xvdXI9e2NvbG91cn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSBwb3NpdGlvbj17cG9zaXRpb259IHJvdGF0aW9ucz17cm90YXRpb25zfSAvPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhY2tXYWxsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXInKTtcblxuY29uc3QgRm9ydHlGb290Q29udGFpbmVyID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBwb3NpdGlvbiwgcm90YXRpb25zIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29udGFpbmVyIHBvc2l0aW9uPXtwb3NpdGlvbn0gcm90YXRpb25zPXtyb3RhdGlvbnN9IGxlbmd0aD17NDB9IC8+XG4gICAgICBcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ydHlGb290Q29udGFpbmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb2xvdXJlZFBsYW5lID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL2NvbG91cmVkL3BsYW5lJyk7XG5cbmNvbnN0IEZyb250V2FsbCA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgbGVuZ3RoLCBvdmVyYWxsV2lkdGgsIG92ZXJhbGxIZWlnaHQsIGNvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgd2lkdGggPSBvdmVyYWxsV2lkdGgsXG4gICAgICAgIGhlaWdodCA9IG92ZXJhbGxIZWlnaHQsXG4gICAgICAgIGRlcHRoID0gMCxcbiAgICAgICAgcG9zaXRpb24gPSBbIDAsIDAsIGxlbmd0aCBdLFxuICAgICAgICByb3RhdGlvbnMgPSBbIDAsIDAsIDAgXTtcblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkUGxhbmUgY29sb3VyPXtjb2xvdXJ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gLz5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGcm9udFdhbGw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbG91cmVkUGxhbmUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vY29sb3VyZWQvcGxhbmUnKTtcblxuY29uc3QgUm9vZiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgbGVuZ3RoLCBvdmVyYWxsV2lkdGgsIG92ZXJhbGxIZWlnaHQsIGNvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgd2lkdGggPSBvdmVyYWxsV2lkdGgsXG4gICAgICAgIGhlaWdodCA9IGxlbmd0aCxcbiAgICAgICAgZGVwdGggPSBvdmVyYWxsSGVpZ2h0LFxuICAgICAgICBwb3NpdGlvbiA9IFsgMCwgb3ZlcmFsbEhlaWdodCwgbGVuZ3RoIF0sXG4gICAgICAgIHJvdGF0aW9ucyA9IFsgLTkwLCAwLCAwIF07XG47XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb2xvdXJlZFBsYW5lIGNvbG91cj17Y29sb3VyfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IHBvc2l0aW9uPXtwb3NpdGlvbn0gcm90YXRpb25zPXtyb3RhdGlvbnN9IC8+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUm9vZjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29sb3VyZWRQbGFuZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9jb2xvdXJlZC9wbGFuZScpO1xuXG5jb25zdCBTaWRlV2FsbEEgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGxlbmd0aCwgb3ZlcmFsbFdpZHRoLCBvdmVyYWxsSGVpZ2h0LCBjb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIHdpZHRoID0gbGVuZ3RoLFxuICAgICAgICBoZWlnaHQgPSBvdmVyYWxsSGVpZ2h0LFxuICAgICAgICBkZXB0aCA9IDAsXG4gICAgICAgIHBvc2l0aW9uID0gWyAwLCAwLCAwIF0sXG4gICAgICAgIHJvdGF0aW9ucyA9IFsgMCwgLTkwLCAwIF07XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb2xvdXJlZFBsYW5lIGNvbG91cj17Y29sb3VyfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IHBvc2l0aW9uPXtwb3NpdGlvbn0gcm90YXRpb25zPXtyb3RhdGlvbnN9IC8+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2lkZVdhbGxBO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb2xvdXJlZFBsYW5lID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL2NvbG91cmVkL3BsYW5lJyk7XG5cbmNvbnN0IFNpZGVXYWxsQiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgbGVuZ3RoLCBvdmVyYWxsV2lkdGgsIG92ZXJhbGxIZWlnaHQsIGNvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgd2lkdGggPSBsZW5ndGgsXG4gICAgICAgIGhlaWdodCA9IG92ZXJhbGxIZWlnaHQsXG4gICAgICAgIGRlcHRoID0gMCxcbiAgICAgICAgcG9zaXRpb24gPSBbIG92ZXJhbGxXaWR0aCwgMCwgbGVuZ3RoIF0sXG4gICAgICAgIHJvdGF0aW9ucyA9IFsgMCwgKzkwLCAwIF07XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb2xvdXJlZFBsYW5lIGNvbG91cj17Y29sb3VyfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IHBvc2l0aW9uPXtwb3NpdGlvbn0gcm90YXRpb25zPXtyb3RhdGlvbnN9IC8+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2lkZVdhbGxCOyIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29udGFpbmVyID0gcmVxdWlyZSgnLi4vY29udGFpbmVyJyk7XG5cbmNvbnN0IFR3ZW50eUZvb3RDb250YWluZXIgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCByb3RhdGlvbnMgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb250YWluZXIgcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gbGVuZ3RoPXsyMH0gLz5cbiAgICAgIFxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUd2VudHlGb290Q29udGFpbmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb2xvdXJlZFBsYW5lID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL2NvbG91cmVkL3BsYW5lJyk7XG5cbmNvbnN0IFVuZGVyc2lkZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgbGVuZ3RoLCBvdmVyYWxsV2lkdGgsIG92ZXJhbGxIZWlnaHQsIGNvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgd2lkdGggPSBvdmVyYWxsV2lkdGgsXG4gICAgICAgIGhlaWdodCA9IGxlbmd0aCxcbiAgICAgICAgZGVwdGggPSAwLFxuICAgICAgICBwb3NpdGlvbiA9IFsgMCwgMCwgMCBdLFxuICAgICAgICByb3RhdGlvbnMgPSBbICs5MCwgIDAsIDAgXTtcblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkUGxhbmUgY29sb3VyPXtjb2xvdXJ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gLz5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBVbmRlcnNpZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgRm9ydHlGb290Q29udGFpbmVyID0gcmVxdWlyZSgnLi4vY29udGFpbmVyL2ZvcnR5Rm9vdCcpLFxuICAgICAgVHdlbnR5Rm9vdENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lci90d2VudHlGb290Jyk7XG5cbmNsYXNzIEZpcnN0Rmxvb3IgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEZvcnR5Rm9vdENvbnRhaW5lciBwb3NpdGlvbj17WyAgOCwgMCwgMzIgXX0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuICAgICAgPEZvcnR5Rm9vdENvbnRhaW5lciBwb3NpdGlvbj17WyAgOCwgMCwgMjQgXX0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuICAgICAgPFR3ZW50eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgOCwgMCwgMTYgXX0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuICAgICAgPFR3ZW50eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgOCwgMCwgIDggXX0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhGaXJzdEZsb29yLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZpcnN0Rmxvb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgIEZvcnR5Rm9vdENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lci9mb3J0eUZvb3QnKSxcbiAgICBUd2VudHlGb290Q29udGFpbmVyID0gcmVxdWlyZSgnLi4vY29udGFpbmVyL3R3ZW50eUZvb3QnKTtcblxuY2xhc3MgU2Vjb25kRmxvb3IgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEZvcnR5Rm9vdENvbnRhaW5lciBwb3NpdGlvbj17WyAgMCwgOS41LCAzMiBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0gLz4sXG4gICAgICA8Rm9ydHlGb290Q29udGFpbmVyIHBvc2l0aW9uPXtbICAwLCA5LjUsIDI0IF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcbiAgICAgIDxUd2VudHlGb290Q29udGFpbmVyIHBvc2l0aW9uPXtbIDgsIDkuNSwgMTYgXX0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuICAgICAgPFR3ZW50eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgOCwgOS41LCAgOCBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0gLz4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNlY29uZEZsb29yLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlY29uZEZsb29yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIFR3ZW50eUZvb3RDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXIvdHdlbnR5Rm9vdCcpO1xuXG5jbGFzcyBUaGlyZEZsb29yIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxUd2VudHlGb290Q29udGFpbmVyIHBvc2l0aW9uPXtbIDAsIDE5LCAzMiBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0gLz4sXG4gICAgICA8VHdlbnR5Rm9vdENvbnRhaW5lciBwb3NpdGlvbj17WyAwLCAxOSwgMjQgXX0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuICAgICAgPFR3ZW50eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgOCwgMTksIDE2IF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcbiAgICAgIDxUd2VudHlGb290Q29udGFpbmVyIHBvc2l0aW9uPXtbIDgsIDE5LCAgOCBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0gLz4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRoaXJkRmxvb3IsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGhpcmRGbG9vcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBDb25jcmV0ZVNsYWIgPSByZXF1aXJlKCcuL2ZvdW5kYXRpb25zL2NvbmNyZXRlU2xhYicpO1xuXG5jbGFzcyBGb3VuZGF0aW9ucyBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29uY3JldGVTbGFiIHBvc2l0aW9uPXtbIC0wLjUsIC0xLCAtMC41IF19IHdpZHRoPXsxMi41fSBoZWlnaHQ9ezF9IGRlcHRoPXszM30gLz4sXG4gICAgICA8Q29uY3JldGVTbGFiIHBvc2l0aW9uPXtbICAgMjQsIC0xLCAtMC41IF19IHdpZHRoPXsyNC40fSBoZWlnaHQ9ezF9IGRlcHRoPXszM30gLz4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEZvdW5kYXRpb25zLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZvdW5kYXRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXh0dXJlZEN1Ym9pZCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90ZXh0dXJlZC9jdWJvaWQnKTtcblxuY29uc3QgQ29uY3JldGVTbGFiID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBwb3NpdGlvbiwgd2lkdGgsIGhlaWdodCwgZGVwdGggfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxUZXh0dXJlZEN1Ym9pZCBpbWFnZU5hbWU9XCJjb25jcmV0ZS5qcGdcIiBwb3NpdGlvbj17cG9zaXRpb259IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gLz5cbiAgICAgIFxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb25jcmV0ZVNsYWI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFN0ZWVsU2VjdGlvbiA9IHJlcXVpcmUoJy4vZnJhbWUvc3RlZWxTZWN0aW9uJyksXG4gICAgICBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKTtcblxuY2xhc3MgRnJhbWUgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB3aWR0aCA9IDQ4LFxuICAgICAgICAgIGhlaWdodCA9IDI5LFxuICAgICAgICAgIGRlcHRoID0gMzI7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFN0ZWVsU2VjdGlvbiBwb3NpdGlvbj17IFsgICAgICAtMC41LCAwLCAgICAgIC0wLjUgXSB9IHdpZHRoPXsxfSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9ezF9IC8+LFxuICAgICAgPFN0ZWVsU2VjdGlvbiBwb3NpdGlvbj17IFsgICAgICAtMC41LCAwLCBkZXB0aC0wLjUgXSB9IHdpZHRoPXsxfSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9ezF9IC8+LFxuICAgICAgPFN0ZWVsU2VjdGlvbiBwb3NpdGlvbj17IFsgd2lkdGgtMC41LCAwLCBkZXB0aC0wLjUgXSB9IHdpZHRoPXsxfSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9ezF9IC8+LFxuICAgICAgPFN0ZWVsU2VjdGlvbiBwb3NpdGlvbj17IFsgd2lkdGgtMC41LCAwLCAgICAgIC0wLjUgXSB9IHdpZHRoPXsxfSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9ezF9IC8+LFxuXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyAgICAgIC0wLjUsIGhlaWdodC0xLCAtMC41IF0gfSB3aWR0aD17MX0gaGVpZ2h0PXsxfSBkZXB0aD17ZGVwdGh9IC8+LFxuICAgICAgPFN0ZWVsU2VjdGlvbiBwb3NpdGlvbj17IFsgd2lkdGgtMC41LCBoZWlnaHQtMSwgLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17MX0gZGVwdGg9e2RlcHRofSAvPixcblxuICAgICAgPFN0ZWVsU2VjdGlvbiBwb3NpdGlvbj17IFsgLTAuNSwgaGVpZ2h0LTEsICAgICAgLTAuNSBdIH0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9ezF9IGRlcHRoPXsxfSAvPixcbiAgICAgIDxTdGVlbFNlY3Rpb24gcG9zaXRpb249eyBbIC0wLjUsIGhlaWdodC0xLCBkZXB0aC0wLjUgXSB9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXsxfSBkZXB0aD17MX0gLz4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEZyYW1lLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZyYW1lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXh0dXJlZEN1Ym9pZCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90ZXh0dXJlZC9jdWJvaWQnKTtcblxuY29uc3QgU3RlZWxTZWN0aW9uID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBwb3NpdGlvbiwgd2lkdGgsIGhlaWdodCwgZGVwdGggfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxUZXh0dXJlZEN1Ym9pZCBpbWFnZU5hbWU9XCJydXN0eVN0ZWVsLmpwZ1wiIHBvc2l0aW9uPXtwb3NpdGlvbn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSAvPlxuICAgICAgXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0ZWVsU2VjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGV4dHVyZWRQbGFuZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi90ZXh0dXJlZC9wbGFuZScpO1xuXG5jb25zdCBSb29mR2FyZGVuID0gKHByb3BlcnRpZXMpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxUZXh0dXJlZFBsYW5lIHdpZHRoPXsyMH0gaGVpZ2h0PXsxNn0gZGVwdGg9ezB9IHBvc2l0aW9uPXtbIDIwLCAxOS4wMSwgMzIgXX0gcm90YXRpb25zPXtbIC05MCwgMCwgMCBdfSBpbWFnZU5hbWU9XCJncmF2ZWwuanBnXCIgLz5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSb29mR2FyZGVuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9qaWdnbGUnKTtcblxuY29uc3QgQ2FudmFzID0gcmVxdWlyZSgnLi4vY2FudmFzJyksXG4gICAgICBTY2VuZSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvc2NlbmUnKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvY2FtZXJhJyksXG4gICAgICBDb21wb3VuZGVkU2hhcGVzID0gcmVxdWlyZSgnLi9zaGFwZXMvY29tcG91bmRlZCcpLFxuICAgICAgVGV4dHVyZWRQbGFuZSA9IHJlcXVpcmUoJy4vY29tbW9uL3RleHR1cmVkL3BsYW5lJyksXG4gICAgICBUZXh0dXJlZEN1Ym9pZCA9IHJlcXVpcmUoJy4vY29tbW9uL3RleHR1cmVkL2N1Ym9pZCcpLFxuICAgICAgQ29sb3VyZWRDeWxpbmRlciA9IHJlcXVpcmUoJy4vY29tbW9uL2NvbG91cmVkL2N5bGluZGVyJyksXG4gICAgICBUZXh0dXJlZEN5bGluZGVyID0gcmVxdWlyZSgnLi9jb21tb24vdGV4dHVyZWQvY3lsaW5kZXInKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlTWFwIH0gPSBpbWFnZU1hcFV0aWxpdGllcztcblxuY29uc3Qgc2hhcGVzID0gKCkgPT4ge1xuXG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICBwcmVsb2FkSW1hZ2VNYXAoKGltYWdlTWFwKSA9PlxuXG4gICAgPFNjZW5lIGltYWdlTWFwPXtpbWFnZU1hcH0gY2FudmFzPXtjYW52YXN9PlxuICAgICAgPENhbWVyYSBpbml0aWFsRGlzdGFuY2U9ezEwfSBpbml0aWFsT2Zmc2V0PXtbIDAsIDAsIDAgXX0gY2FudmFzPXtjYW52YXN9IC8+XG4gICAgICA8VGV4dHVyZWRDdWJvaWQgd2lkdGg9ezF9IGhlaWdodD17MX0gZGVwdGg9ezF9IHBvc2l0aW9uPXtbIDAsIDIsIDAgXX0gaW1hZ2VOYW1lPVwiYnJpY2tzLmpwZ1wiIC8+XG4gICAgICA8VGV4dHVyZWRQbGFuZSB3aWR0aD17MX0gaGVpZ2h0PXsxfSBwb3NpdGlvbj17WyAtMSwgLTEsIC0xIF19IGltYWdlTmFtZT1cImdyYXZlbC5qcGdcIiAvPlxuICAgICAgPENvbG91cmVkQ3lsaW5kZXIgd2lkdGg9ezF9IGhlaWdodD17MX0gZGVwdGg9ezF9IHBvc2l0aW9uPXtbIDAsIC0xLCAxIF19IHJvdGF0aW9ucz17WyAwLCAwLCAwIF19IGNvbG91cj17WyAxLCAwLCAwLCAxIF19IC8+XG4gICAgICA8VGV4dHVyZWRDeWxpbmRlciB3aWR0aD17MX0gaGVpZ2h0PXsxfSBkZXB0aD17MX0gcG9zaXRpb249e1sgMCwgMSwgLTEgXX0gcm90YXRpb25zPXtbIDAsIDkwLCA5MCBdfSBpbWFnZU5hbWU9XCJncmFzcy5qcGdcIiAvPlxuICAgICAgPENvbXBvdW5kZWRTaGFwZXMgd2lkdGg9ezAuMX0gaGVpZ2h0PXswLjF9IGRlcHRoPXswLjF9IHJvdGF0aW9ucz17WyA0NSwgNDUsIDQ1IF19IHBvc2l0aW9uPXtbIDAsIDAsIDEwIF19IC8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaGFwZXM7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBDb2xvdXJlZEN5bGluZGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2NvbG91cmVkL2N5bGluZGVyJyksXG4gICAgICBUZXh0dXJlZEN5bGluZGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL3RleHR1cmVkL2N5bGluZGVyJyk7XG5cbmNsYXNzIENvbXBvdW5kZWRTaGFwZXMgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgICA8Q29sb3VyZWRDeWxpbmRlciB3aWR0aD17MX0gaGVpZ2h0PXsxfSBkZXB0aD17MX0gcG9zaXRpb249e1sgMywgLTEsIDEgXX0gcm90YXRpb25zPXtbIDAsIDAsIDAgXX0gY29sb3VyPXtbIDEsIDAsIDEsIDEgXX0gLz4sXG4gICAgICAgIDxUZXh0dXJlZEN5bGluZGVyIHdpZHRoPXsxfSBoZWlnaHQ9ezF9IGRlcHRoPXsxfSBwb3NpdGlvbj17WyAwLCAxLCAtMyBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDkwIF19IGltYWdlTmFtZT1cImdyYXZlbC5qcGdcIiAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29tcG91bmRlZFNoYXBlcywgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb3VuZGVkU2hhcGVzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJy4vcmVhY3QnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgJ1JlYWN0Jywge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBSZWFjdDtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCdnbC1tYXQ0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbWF0NDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjMiA9IHJlcXVpcmUoJ2dsLXZlYzInKTtcblxuZnVuY3Rpb24gYWRkKHZlY0EsIHZlY0IpIHtcbiAgY29uc3Qgb3V0ID0gW107XG5cbiAgdmVjMi5hZGQob3V0LCB2ZWNBLCB2ZWNCKTtcblxuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBzdWJ0cmFjdCh2ZWNBLCB2ZWNCKSB7XG4gIGNvbnN0IG91dCA9IFtdO1xuXG4gIHZlYzIuc3VidHJhY3Qob3V0LCB2ZWNBLCB2ZWNCKTtcblxuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBzY2FsZSh2ZWNBLCBzY2FsYXIpIHtcbiAgY29uc3Qgb3V0ID0gW107XG5cbiAgdmVjMi5zY2FsZShvdXQsIHZlY0EsIHNjYWxhcik7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFkZDogYWRkLFxuICBzdWJ0cmFjdDogc3VidHJhY3QsXG4gIHNjYWxlOiBzY2FsZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjMyA9IHJlcXVpcmUoJ2dsLXZlYzMnKTtcblxuZnVuY3Rpb24gYWRkKHZlY0EsIHZlY0IpIHtcbiAgY29uc3Qgb3V0ID0gW107XG5cbiAgdmVjMy5hZGQob3V0LCB2ZWNBLCB2ZWNCKTtcblxuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBzdWJ0cmFjdCh2ZWNBLCB2ZWNCKSB7XG4gIGNvbnN0IG91dCA9IFtdO1xuXG4gIHZlYzMuc3VidHJhY3Qob3V0LCB2ZWNBLCB2ZWNCKTtcblxuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBjcm9zcyh2ZWNBLCB2ZWNCKSB7XG4gIGNvbnN0IG91dCA9IFtdO1xuXG4gIHZlYzMuY3Jvc3Mob3V0LCB2ZWNBLCB2ZWNCKTtcblxuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBub3JtYWxpc2UodmVjKSB7XG4gIGNvbnN0IG91dCA9IFtdO1xuXG4gIHZlYzMubm9ybWFsaXplKG91dCwgdmVjKTtcblxuICByZXR1cm4gb3V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWRkOiBhZGQsXG4gIHN1YnRyYWN0OiBzdWJ0cmFjdCxcbiAgY3Jvc3M6IGNyb3NzLFxuICBub3JtYWxpc2U6IG5vcm1hbGlzZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjNCA9IHJlcXVpcmUoJ2dsLXZlYzQnKTtcblxuZnVuY3Rpb24gdHJhbnNmb3JtKHZlYywgbWF0NCkge1xuICBjb25zdCBvdXQgPSBbXTtcblxuICB2ZWM0LnRyYW5zZm9ybU1hdDQob3V0LCB2ZWMsIG1hdDQpO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgTWF0cml4IHtcbiAgY29uc3RydWN0b3IobWF0NCkge1xuICAgIHRoaXMubWF0NCA9IG1hdDQ7XG4gIH1cbiAgXG4gIGdldE1hdDQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0NDtcbiAgfVxuICBcbiAgYXBwbHkodW5pZm9ybUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYXBwbHlNYXRyaXgodW5pZm9ybUxvY2F0aW9uLCB0aGlzLm1hdDQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWF0cml4O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnLi4vbWF0aHMvbWF0NCcpLFxuICAgICAgTWF0cml4ID0gcmVxdWlyZSgnLi4vbWF0cml4Jyk7XG5cbmNvbnN0IHsgY3JlYXRlLCBpbnZlcnQsIHRyYW5zcG9zZSB9ID0gbWF0NDtcblxuY2xhc3MgTm9ybWFsTWF0cml4IGV4dGVuZHMgTWF0cml4IHtcbiAgc3RhdGljIGZyb21Sb3RhdGlvbk1hdHJpeChyb3RhdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IG1hdDQgPSBjcmVhdGUoKSxcbiAgICAgICAgICByb3RhdGlvbk1hdDQgPSByb3RhdGlvbk1hdHJpeC5nZXRNYXQ0KCksXG4gICAgICAgICAgbm9ybWFsTWF0cml4ID0gbmV3IE5vcm1hbE1hdHJpeChtYXQ0KTtcblxuICAgIGludmVydChtYXQ0LCByb3RhdGlvbk1hdDQpO1xuICAgIFxuICAgIHRyYW5zcG9zZShtYXQ0LCBtYXQ0KTtcbiAgICBcbiAgICByZXR1cm4gbm9ybWFsTWF0cml4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9ybWFsTWF0cml4O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnLi4vbWF0aHMvbWF0NCcpLFxuICAgICAgTWF0cml4ID0gcmVxdWlyZSgnLi4vbWF0cml4Jyk7XG5cbmNvbnN0IHsgY3JlYXRlLCB0cmFuc2xhdGUgfSA9IG1hdDQ7XG5cbmNsYXNzIE9mZnNldE1hdHJpeCBleHRlbmRzIE1hdHJpeCB7XG4gIHN0YXRpYyBmcm9tT2Zmc2V0KG9mZnNldCkge1xuICAgIGNvbnN0IG1hdDQgPSBjcmVhdGUoKSxcbiAgICAgICAgICBvZmZzZXRNYXRyaXggPSBuZXcgT2Zmc2V0TWF0cml4KG1hdDQpO1xuXG4gICAgdHJhbnNsYXRlKG1hdDQsIG1hdDQsIG9mZnNldCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0TWF0cml4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2Zmc2V0TWF0cml4O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnLi4vbWF0aHMvbWF0NCcpLFxuICAgICAgTWF0cml4ID0gcmVxdWlyZSgnLi4vbWF0cml4Jyk7XG5cbmNvbnN0IHsgY3JlYXRlLCB0cmFuc2xhdGUgfSA9IG1hdDQ7XG5cbmNsYXNzIFBvc2l0aW9uTWF0cml4IGV4dGVuZHMgTWF0cml4IHtcbiAgc3RhdGljIGZyb21EaXN0YW5jZShkaXN0YW5jZSkge1xuICAgIGNvbnN0IHggPSAwLFxuICAgICAgICAgIHkgPSAwLFxuICAgICAgICAgIHogPSAtZGlzdGFuY2UsIC8vL1xuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gUG9zaXRpb25NYXRyaXguZnJvbUNvb3JkaW5hdGVzKHgsIHksIHopO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db29yZGluYXRlcyh4LCB5LCB6KSB7XG4gICAgY29uc3QgbWF0NCA9IGNyZWF0ZSgpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gbmV3IFBvc2l0aW9uTWF0cml4KG1hdDQpO1xuXG4gICAgdHJhbnNsYXRlKG1hdDQsIG1hdDQsIFsgeCwgeSwgeiBdKTtcblxuICAgIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvc2l0aW9uTWF0cml4O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnLi4vbWF0aHMvbWF0NCcpLFxuICAgICAgTWF0cml4ID0gcmVxdWlyZSgnLi4vbWF0cml4JyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBjcmVhdGUsIHBlcnNwZWN0aXZlIH0gPSBtYXQ0LFxuICAgICAgeyBGSUVMRF9PRl9WSUVXLCBaX05FQVIsIFpfRkFSIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIFByb2plY3Rpb25NYXRyaXggZXh0ZW5kcyBNYXRyaXgge1xuICBzdGF0aWMgZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBtYXQ0ID0gY3JlYXRlKCksXG4gICAgICAgICAgZmllbGRPZlZpZXcgPSBGSUVMRF9PRl9WSUVXLFxuICAgICAgICAgIGFzcGVjdFJhdGlvID0gd2lkdGggLyBoZWlnaHQsXG4gICAgICAgICAgek5lYXIgPSBaX05FQVIsXG4gICAgICAgICAgekZhciA9IFpfRkFSLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBuZXcgUHJvamVjdGlvbk1hdHJpeChtYXQ0KTtcblxuICAgIHBlcnNwZWN0aXZlKG1hdDQsIGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgek5lYXIsIHpGYXIpO1xuXG4gICAgcmV0dXJuIHByb2plY3Rpb25NYXRyaXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0aW9uTWF0cml4O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnLi4vbWF0aHMvbWF0NCcpLFxuICAgICAgTWF0cml4ID0gcmVxdWlyZSgnLi4vbWF0cml4Jyk7XG5cbmNvbnN0IHsgY3JlYXRlLCByb3RhdGUgfSA9IG1hdDQ7XG5cbmNsYXNzIFJvdGF0aW9uTWF0cml4IGV4dGVuZHMgTWF0cml4IHtcbiAgc3RhdGljIGZyb21BbmdsZXMoYW5nbGVzKSB7XG4gICAgY29uc3QgeEFuZ2xlID0gYW5nbGVzLmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IGFuZ2xlcy5nZXRZQW5nbGUoKSxcbiAgICAgICAgICB6QW5nbGUgPSBhbmdsZXMuZ2V0WkFuZ2xlKCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSBSb3RhdGlvbk1hdHJpeC5mcm9tWEFuZ2xlWUFuZ2xlQW5kWkFuZ2xlKHhBbmdsZSwgeUFuZ2xlLCB6QW5nbGUpO1xuXG4gICAgcmV0dXJuIHJvdGF0aW9uTWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21YQW5nbGVZQW5nbGVBbmRaQW5nbGUoeEFuZ2xlLCB5QW5nbGUsIHpBbmdsZSkge1xuICAgIGNvbnN0IG1hdDQgPSBjcmVhdGUoKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IG5ldyBSb3RhdGlvbk1hdHJpeChtYXQ0KTtcblxuICAgIHJvdGF0ZShtYXQ0LCBtYXQ0LCB4QW5nbGUsIFsxLCAwLCAwXSk7XG4gICAgcm90YXRlKG1hdDQsIG1hdDQsIHlBbmdsZSwgWzAsIDEsIDBdKTtcbiAgICByb3RhdGUobWF0NCwgbWF0NCwgekFuZ2xlLCBbMCwgMCwgMV0pO1xuXG4gICAgcmV0dXJuIHJvdGF0aW9uTWF0cml4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUm90YXRpb25NYXRyaXg7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIGxldCBlbGVtZW50O1xuXG4gIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBjaGlsZEVsZW1lbnRzOiBjaGlsZEVsZW1lbnRzXG4gIH0sIHByb3BlcnRpZXMpO1xuXG4gIGlmIChmYWxzZSkge1xuXG4gIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBmdW5jID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgZWxlbWVudCA9IGZ1bmMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7IC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgdHlwZU9mID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucyA9IHVuaWZvcm1Mb2NhdGlvbnM7XG4gICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMgPSBhdHRyaWJ1dGVMb2NhdGlvbnM7XG5cbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSA9IFtdO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsRGF0YSA9IFtdO1xuICAgIHRoaXMudmVydGV4SW5kZXhEYXRhID0gW107XG5cbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uQnVmZmVyID0gbnVsbDsgLy8vXG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxCdWZmZXIgPSBudWxsOyAvLy9cbiAgICB0aGlzLnZlcnRleEluZGV4RWxlbWVudEJ1ZmZlciA9IG51bGw7IC8vL1xuXG4gICAgdGhpcy5tYXhpbXVtVmVydGV4SW5kZXggPSAtMTsgLy8vXG4gIH1cblxuICBnZXRDb3VudCgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleERhdGFMZW5ndGggPSB0aGlzLnZlcnRleEluZGV4RGF0YS5sZW5ndGgsXG4gICAgICAgICAgY291bnQgPSB2ZXJ0ZXhJbmRleERhdGFMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuICBcbiAgZ2V0VW5pZm9ybUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zO1xuICB9XG4gIFxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG4gIFxuICBnZXRPZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0T2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGFkZFZlcnRleFBvc2l0aW9uRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpIHtcbiAgICBhZGQodGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleFBvc2l0aW9uRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleE5vcm1hbERhdGEpIHtcbiAgICBhZGQodGhpcy52ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhJbmRleERhdGEpIHtcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLm1heGltdW1WZXJ0ZXhJbmRleCArIDE7XG5cbiAgICB2ZXJ0ZXhJbmRleERhdGEgPSB2ZXJ0ZXhJbmRleERhdGEubWFwKGZ1bmN0aW9uKHZlcnRleEluZGV4KSB7XG4gICAgICByZXR1cm4gdmVydGV4SW5kZXggKyBvZmZzZXQ7XG4gICAgfSk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhJbmRleERhdGEsIHZlcnRleEluZGV4RGF0YSk7XG5cbiAgICB0aGlzLm1heGltdW1WZXJ0ZXhJbmRleCA9IE1hdGgubWF4KHRoaXMubWF4aW11bVZlcnRleEluZGV4LCAuLi52ZXJ0ZXhJbmRleERhdGEpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleFBvc2l0aW9uQnVmZmVyKGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhOb3JtYWxCdWZmZXIoY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleEluZGV4RWxlbWVudEJ1ZmZlcihjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVmVydGV4Tm9ybWFsQnVmZmVyKGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4UG9zaXRpb25CdWZmZXIoY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIoY2FudmFzKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleFBvc2l0aW9uQnVmZmVyKGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25CdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRoaXMudmVydGV4UG9zaXRpb25EYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleE5vcm1hbEJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodGhpcy52ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleEluZGV4RWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleEluZGV4RWxlbWVudEJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVFbGVtZW50QnVmZmVyKHRoaXMudmVydGV4SW5kZXhEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25Db21wb25lbnRzID0gMztcbiAgICBcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uQnVmZmVyLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleE5vcm1hbEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMztcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyKGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kRWxlbWVudEJ1ZmZlcih0aGlzLnZlcnRleEluZGV4RWxlbWVudEJ1ZmZlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgdmVydGV4U2hhZGVyID0gY2FudmFzLmNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UpLFxuICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNhbnZhcy5jcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSksXG4gICAgICAgIHByb2dyYW0gPSBjYW52YXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gIHJldHVybiBwcm9ncmFtO1xufVxuXG5PYmplY3QuYXNzaWduKFJlbmRlcmVyLCB7XG4gIGNyZWF0ZVByb2dyYW06IGNyZWF0ZVByb2dyYW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlcicpLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlcicpLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS9jb2xvdXIvZnJhZ21lbnRTaGFkZXInKSxcbiAgICAgIENvbG91clVuaWZvcm1Mb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybScpLFxuICAgICAgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZScpO1xuXG5jb25zdCB7IGNyZWF0ZVByb2dyYW0gfSA9IFJlbmRlcmVyLFxuICAgICAgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBtZXJnZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICBhZGQgPSBtZXJnZTsgIC8vL1xuXG5jbGFzcyBDb2xvdXJSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IocHJvZ3JhbSwgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKSB7XG4gICAgc3VwZXIocHJvZ3JhbSwgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3VyRGF0YSA9IFtdO1xuICAgIFxuICAgIHRoaXMudmVydGV4Q29sb3VyQnVmZmVyID0gbnVsbDsgLy8vXG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBhZGRWZXJ0ZXhDb2xvdXJEYXRhKHZlcnRleENvbG91ckRhdGEpIHtcbiAgICBhZGQodGhpcy52ZXJ0ZXhDb2xvdXJEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRoaXMudmVydGV4Q29sb3VyRGF0YSk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzID0gNDtcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Q29sb3VyQnVmZmVyLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQ29tcG9uZW50cyk7XG5cbiAgICBzdXBlci5iaW5kQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IENvbG91clVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG5ldyBDb2xvdXJSZW5kZXJlcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clJlbmRlcmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsaWdodGluZ1NvdXJjZSA9IHJlcXVpcmUoJy4uL3NvdXJjZS9saWdodGluZycpLFxuICAgICAgcG9zaXRpb25Tb3VyY2UgPSByZXF1aXJlKCcuLi9zb3VyY2UvcG9zaXRpb24nKTtcblxuY29uc3QgeyB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lIH0gPSBsaWdodGluZ1NvdXJjZSxcbiAgICAgIHsgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lIH0gPSBwb3NpdGlvblNvdXJjZTtcblxuY2xhc3MgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKENsYXNzLCBwcm9ncmFtLCBjYW52YXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTG9jYXRpb25zO1xuICB9ICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBdHRyaWJ1dGVMb2NhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGUnKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyJyk7XG5cbmNvbnN0IHsgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSB9ID0gdmVydGV4U2hhZGVyU291cmNlO1xuXG5jbGFzcyBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgZXh0ZW5kcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG5cbiAgICB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IEF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgcmV0dXJuIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2xvY2F0aW9ucy91bmlmb3JtJyk7XG5cbmNsYXNzIENvbG91clVuaWZvcm1Mb2NhdGlvbnMgZXh0ZW5kcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykgeyByZXR1cm4gVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShDb2xvdXJVbmlmb3JtTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyVW5pZm9ybUxvY2F0aW9ucztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZSgnLi4vLi4vbG9jYXRpb25zL2F0dHJpYnV0ZScpLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyJyk7XG5cbmNvbnN0IHsgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lIH0gPSB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG5cbmNsYXNzIFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgZXh0ZW5kcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IEF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24pO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zO1xuICB9ICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBVbmlmb3JtTG9jYXRpb25zID0gcmVxdWlyZSgnLi4vLi4vbG9jYXRpb25zL3VuaWZvcm0nKSxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXInKTtcblxuY29uc3QgeyBzYW1wbGVyTmFtZSB9ID0gZnJhZ21lbnRTaGFkZXJTb3VyY2U7XG5cbmNsYXNzIFRleHR1cmVVbmlmb3JtTG9jYXRpb25zIGV4dGVuZHMgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24pIHtcbiAgICBzdXBlcihvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKTtcbiAgICBcbiAgICB0aGlzLnNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNhbXBsZXJVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgc2FtcGxlck5hbWUpLFxuICAgICAgICAgIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zID0gVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSByZXF1aXJlKCcuLi9zb3VyY2UvbGlnaHRpbmcnKSxcbiAgICAgIHBvc2l0aW9uU291cmNlID0gcmVxdWlyZSgnLi4vc291cmNlL3Bvc2l0aW9uJyk7XG5cbmNvbnN0IHsgbm9ybWFsTWF0cml4TmFtZSB9ID0gbGlnaHRpbmdTb3VyY2UsXG4gICAgICB7IG9mZnNldE1hdHJpeE5hbWUsIHJvdGF0aW9uTWF0cml4TmFtZSwgcG9zaXRpb25NYXRyaXhOYW1lLCBwcm9qZWN0aW9uTWF0cml4TmFtZSB9ID0gcG9zaXRpb25Tb3VyY2U7XG5cbmNsYXNzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKSB7XG4gICAgdGhpcy5vZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5yb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMubm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0T2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbjsgICAgXG4gIH1cbiAgXG4gIGdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKENsYXNzLCBwcm9ncmFtLCBjYW52YXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgb2Zmc2V0TWF0cml4TmFtZSksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHJvdGF0aW9uTWF0cml4TmFtZSksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHBvc2l0aW9uTWF0cml4TmFtZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcHJvamVjdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbm9ybWFsTWF0cml4TmFtZSksXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IG5ldyBDbGFzcyhvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiB1bmlmb3JtTG9jYXRpb25zOyAgICAgICBcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaWZvcm1Mb2NhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2Q29sb3VyLnJnYiAqIHZMaWdodGluZywgdkNvbG91ci5hKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyYWdtZW50U2hhZGVyU291cmNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsaWdodGluZ1NvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS9saWdodGluZycpLFxuICAgICAgcG9zaXRpb25Tb3VyY2UgPSByZXF1aXJlKCcuLi8uLi9zb3VyY2UvcG9zaXRpb24nKTtcblxuY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4Q29sb3VyJyxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgICR7bGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtwb3NpdGlvblNvdXJjZX1cbiAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcblxuICAgICAgICAgIHZDb2xvdXIgPSAke3ZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWV9OyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIHtcbiAgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZTogdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdmVydGV4U2hhZGVyU291cmNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBub3JtYWxNYXRyaXhOYW1lID0gJ3VOb3JtYWxNYXRyaXgnLFxuICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4Tm9ybWFsJztcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke25vcm1hbE1hdHJpeE5hbWV9O1xuXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzICR7dmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjMyBkaXJlY3Rpb25hbExpZ2h0Q29sb3VyID0gdmVjMygxLCAxLCAxKSxcbiAgICAgICAgICAgICBkaXJlY3Rpb25hbFZlY3RvciA9IG5vcm1hbGl6ZSh2ZWMzKDEuMCwgMS4wLCAxLjApKTtcbiAgICAgICAgICBcbiAgICAgICAgdmVjMyBjYWxjdWxhdGVMaWdodGluZygpIHtcbiAgICAgICAgICB2ZWM0IHRyYW5zZm9ybWVkTm9ybWFsID0gJHtub3JtYWxNYXRyaXhOYW1lfSAqIHZlYzQoJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfSwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gKGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSArIDEuMCkgLyAyLjA7XG4gICAgICAgICAgXG4gICAgICAgICAgdmVjMyBsaWdodGluZyA9IChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBsaWdodGluZztcbiAgICAgICAgfVxuXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbihsaWdodGluZ1NvdXJjZSwge1xuICBub3JtYWxNYXRyaXhOYW1lOiBub3JtYWxNYXRyaXhOYW1lLFxuICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lOiB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBsaWdodGluZ1NvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgb2Zmc2V0TWF0cml4TmFtZSA9ICd1T2Zmc2V0TWF0cml4JyxcbiAgICAgIHJvdGF0aW9uTWF0cml4TmFtZSA9ICd1Um90YXRpb25NYXRyaXgnLFxuICAgICAgcG9zaXRpb25NYXRyaXhOYW1lID0gJ3VQb3NpdGlvbk1hdHJpeCcsXG4gICAgICBwcm9qZWN0aW9uTWF0cml4TmFtZSA9ICd1UGVyc3BlY3RpdmVNYXRyaXgnLFxuICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lID0gJ2FWZXJ0ZXhQb3NpdGlvbic7XG5cbmNvbnN0IHBvc2l0aW9uU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtvZmZzZXRNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cm90YXRpb25NYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cG9zaXRpb25NYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9O1xuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzQgY2FsY3VsYXRlUG9zaXRpb24oKSB7XG4gICAgICAgICAgdmVjNCBwb3NpdGlvbiA9ICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9ICogJHtwb3NpdGlvbk1hdHJpeE5hbWV9ICogJHtyb3RhdGlvbk1hdHJpeE5hbWV9ICogJHtvZmZzZXRNYXRyaXhOYW1lfSAqICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbihwb3NpdGlvblNvdXJjZSwge1xuICBvZmZzZXRNYXRyaXhOYW1lOiBvZmZzZXRNYXRyaXhOYW1lLFxuICByb3RhdGlvbk1hdHJpeE5hbWU6IHJvdGF0aW9uTWF0cml4TmFtZSxcbiAgcG9zaXRpb25NYXRyaXhOYW1lOiBwb3NpdGlvbk1hdHJpeE5hbWUsXG4gIHByb2plY3Rpb25NYXRyaXhOYW1lOiBwcm9qZWN0aW9uTWF0cml4TmFtZSxcbiAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lOiB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWVcbn0pO1xuICAgIFxubW9kdWxlLmV4cG9ydHMgPSBwb3NpdGlvblNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc2FtcGxlck5hbWUgPSAndVNhbXBsZXInLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEICR7c2FtcGxlck5hbWV9O1xuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgaGlnaHAgdmVjNCB0ZXhlbENvbG91ciA9IHRleHR1cmUyRCgke3NhbXBsZXJOYW1lfSwgdlRleHR1cmVDb29yZGluYXRlKTtcbiAgICAgICAgICBcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHRleGVsQ29sb3VyLnJnYiAqIHZMaWdodGluZywgdGV4ZWxDb2xvdXIuYSk7ICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKGZyYWdtZW50U2hhZGVyU291cmNlLCB7XG4gIHNhbXBsZXJOYW1lOiBzYW1wbGVyTmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJhZ21lbnRTaGFkZXJTb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL2xpZ2h0aW5nJyksXG4gICAgICBwb3NpdGlvblNvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS9wb3NpdGlvbicpO1xuXG5jb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgPSAnYVRleHR1cmVDb29yZGluYXRlJyxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzIgJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICBcbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIHZUZXh0dXJlQ29vcmRpbmF0ZSA9ICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKHZlcnRleFNoYWRlclNvdXJjZSwge1xuICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWU6IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdmVydGV4U2hhZGVyU291cmNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlcicpLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXInKSxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlcicpLFxuICAgICAgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy90ZXh0dXJlL3VuaWZvcm0nKSxcbiAgICAgIFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy90ZXh0dXJlL2F0dHJpYnV0ZScpO1xuXG5jb25zdCB7IGNyZWF0ZVByb2dyYW0gfSA9IFJlbmRlcmVyLFxuICAgICAgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBtZXJnZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICBhZGQgPSBtZXJnZTsgIC8vL1xuXG5jbGFzcyBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucykge1xuICAgIHN1cGVyKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSA9IFtdO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIgPSBudWxsOyAgLy8vXG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlTG9jYXRpb25zKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGFkZFRleHR1cmVDb29yZGluYXRlRGF0YSh0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpIHtcbiAgICBhZGQodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMgPSAyO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcblxuICAgIHN1cGVyLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlKGltYWdlLCBjYW52YXMpIHtcbiAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSk7XG4gIH1cblxuICBhY3RpdmF0ZVRleHR1cmUoY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgeyBURVhUVVJFMCB9ID0gY29udGV4dCxcbiAgICAgICAgICB0YXJnZXQgPSBURVhUVVJFMCwgIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgdVNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSAwO1xuXG4gICAgY2FudmFzLmFjdGl2YXRlVGV4dHVyZSh0YXJnZXQpO1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbmV3IFRleHR1cmVSZW5kZXJlcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVSZW5kZXJlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeTtcblxuZnVuY3Rpb24gY2hvcChlbGVtZW50cywgYXJyYXlMZW5ndGgpIHtcbiAgY29uc3QgYXJyYXlzID0gW10sXG4gICAgICAgIGVsZW1lbnRzTGVuZ3RoID0gZWxlbWVudHMubGVuZ3RoLFxuICAgICAgICBhcnJheXNMZW5ndGggPSBlbGVtZW50c0xlbmd0aCAvIGFycmF5TGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgYXJyYXlMZW5ndGg7IG9mZnNldCsrKSB7XG4gICAgICBhcnJheVtvZmZzZXRdID0gZWxlbWVudHNbaW5kZXggKiBhcnJheUxlbmd0aCArIG9mZnNldF07XG4gICAgfVxuXG4gICAgYXJyYXlzW2luZGV4XSA9IGFycmF5O1xuICB9XG5cbiAgcmV0dXJuIGFycmF5cztcbn1cblxuZnVuY3Rpb24gZmxhdHRlbihhcnJheXMpIHtcbiAgcmV0dXJuIGFycmF5cy5yZWR1Y2UoZnVuY3Rpb24oZWxlbWVudHMsIGFycmF5KSB7XG4gICAgcmV0dXJuIGVsZW1lbnRzLmNvbmNhdChhcnJheSk7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbihhcnJheVV0aWxpdGllcywge1xuICBjaG9wOiBjaG9wLFxuICBmbGF0dGVuOiBmbGF0dGVuLFxuICBndWFyYW50ZWU6IGd1YXJhbnRlZVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpWzBdIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOyAgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkb21FbGVtZW50RnJvbVNlbGVjdG9yOiBkb21FbGVtZW50RnJvbVNlbGVjdG9yXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgcmVwZWF0ZWRseSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2UocGF0aCwgY2FsbGJhY2spIHtcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjYWxsYmFjayhpbWFnZSk7XG4gIH07XG5cbiAgaW1hZ2Uuc3JjID0gcGF0aDsgIC8vL1xufVxuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2VzKHBhdGhzLCBjYWxsYmFjaykge1xuICBjb25zdCBpbWFnZXMgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gcGF0aHMubGVuZ3RoLCAvLy9cbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBpbWFnZXM6IGltYWdlcyxcbiAgICAgICAgICBwYXRoczogcGF0aHNcbiAgICAgICAgfTtcblxuICByZXBlYXRlZGx5KHByZWxvYWRJbWFnZUNhbGxiYWNrLCBsZW5ndGgsIGRvbmUsIGNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgY2FsbGJhY2soaW1hZ2VzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJlbG9hZEltYWdlOiBwcmVsb2FkSW1hZ2UsXG4gIHByZWxvYWRJbWFnZXM6IHByZWxvYWRJbWFnZXNcbn07XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZUNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KSB7XG4gIGNvbnN0IHsgaW1hZ2VzLCBwYXRocyB9ID0gY29udGV4dCxcbiAgICAgICAgcGF0aCA9IHBhdGhzW2luZGV4XSxcbiAgICAgICAgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICBpbWFnZXNbaW5kZXhdID0gaW1hZ2U7XG5cbiAgaW1hZ2Uub25sb2FkID0gbmV4dDsgIC8vL1xuXG4gIGltYWdlLnNyYyA9IHBhdGg7ICAvLy9cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vYmluL2NvbnN0YW50cycpLCAvLy9cbiAgICAgIGltYWdlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlJyk7XG5cbmNvbnN0IHsgSU1BR0VfTUFQX1BBVEggfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgcHJlbG9hZEltYWdlIH0gPSBpbWFnZVV0aWxpdGllcyxcbiAgICAgIHsgaW1hZ2VNYXBKU09OIH0gPSBydW50aW1lQ29uZmlndXJhdGlvbjtcblxuZnVuY3Rpb24gcHJlbG9hZEltYWdlTWFwKGNhbGxiYWNrKSB7XG4gIGNvbnN0IHBhdGggPSBJTUFHRV9NQVBfUEFUSDtcblxuICBwcmVsb2FkSW1hZ2UocGF0aCwgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiB0ZXh0dXJlQ29vcmRpbmF0ZXNGcm9tSW1hZ2VOYW1lcyhpbWFnZU5hbWVzKSB7XG4gIGNvbnN0IHRleHR1cmVDb29yZGluYXRlcyA9IGltYWdlTmFtZXMucmVkdWNlKGZ1bmN0aW9uKHRleHR1cmVDb29yZGluYXRlcywgdGV4dHVyZU5hbWUpIHtcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXMuY29uY2F0KGltYWdlTWFwSlNPTlt0ZXh0dXJlTmFtZV0pO1xuXG4gICAgICAgICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlcztcbiAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcmVsb2FkSW1hZ2VNYXA6IHByZWxvYWRJbWFnZU1hcCxcbiAgdGV4dHVyZUNvb3JkaW5hdGVzRnJvbUltYWdlTmFtZXM6IHRleHR1cmVDb29yZGluYXRlc0Zyb21JbWFnZU5hbWVzXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnLi4vbWF0aHMvbWF0NCcpLFxuICAgICAgdmVjNCA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlYzQnKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBERUdSRUVTX1RPX1JBRElBTlMgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjcmVhdGUsIHNjYWxlLCByb3RhdGUsIHRyYW5zbGF0ZSB9ID0gbWF0NCxcbiAgICAgIHsgdHJhbnNmb3JtIH0gPSB2ZWM0LFxuICAgICAgeEF4aXMgPSBbIDEsIDAsIDAgXSxcbiAgICAgIHlBeGlzID0gWyAwLCAxLCAwIF0sXG4gICAgICB6QXhpcyA9IFsgMCwgMCwgMSBdLFxuICAgICAgZGVmYXVsdFdpZHRoID0gMSxcbiAgICAgIGRlZmF1bHREZXB0aCA9IDEsXG4gICAgICBkZWZhdWx0SGVpZ2h0ID0gMSxcbiAgICAgIGRlZmF1bHRQb3NpdGlvbiA9IFsgMCwgMCwgMCBdLFxuICAgICAgZGVmYXVsdFJvdGF0aW9ucyA9IFsgMCwgMCwgMCBdO1xuXG5mdW5jdGlvbiBjb21wb3NlVHJhbnNmb3JtKHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBwb3NpdGlvbiwgcm90YXRpb25zKSB7XG4gIGNvbnN0IHNjYWxlID0gY29tcG9zZVNjYWxlKHdpZHRoLCBoZWlnaHQsIGRlcHRoKSxcbiAgICAgICAgcm90YXRlID0gY29tcG9zZVJvdGF0ZShyb3RhdGlvbnMpLFxuICAgICAgICB0cmFuc2xhdGUgPSBjb21wb3NlVHJhbnNsYXRlKHBvc2l0aW9uKTtcblxuICByZXR1cm4gZnVuY3Rpb24odmVjKSB7XG4gICAgcmV0dXJuIHRyYW5zbGF0ZShyb3RhdGUoc2NhbGUodmVjKSkpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBjb21wb3NlVHJhbnNmb3JtOiBjb21wb3NlVHJhbnNmb3JtXG59O1xuXG5mdW5jdGlvbiBjb21wb3NlKG1hdDQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZlYykge1xuICAgIHJldHVybiB0cmFuc2Zvcm0oWy4uLnZlYywgMV0sIG1hdDQpLnNsaWNlKDAsIDMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb21wb3NlU2NhbGUod2lkdGggPSBkZWZhdWx0V2lkdGgsIGhlaWdodCA9IGRlZmF1bHRIZWlnaHQsIGRlcHRoID0gZGVmYXVsdERlcHRoKSB7XG4gIGNvbnN0IG1hdDQgPSBjcmVhdGUoKTtcblxuICBzY2FsZShtYXQ0LCBtYXQ0LCBbIHdpZHRoLCBoZWlnaHQsIGRlcHRoIF0pO1xuXG4gIHJldHVybiBjb21wb3NlKG1hdDQpO1xufVxuXG5mdW5jdGlvbiBjb21wb3NlUm90YXRlKHJvdGF0aW9ucyA9IGRlZmF1bHRSb3RhdGlvbnMpIHtcbiAgY29uc3QgbWF0NCA9IGNyZWF0ZSgpLFxuICAgICAgZmlyc3RSb3RhdGlvbiA9IGZpcnN0KHJvdGF0aW9ucyksXG4gICAgICBzZWNvbmRSb3RhdGlvbiA9IHNlY29uZChyb3RhdGlvbnMpLFxuICAgICAgdGhpcmRSb3RhdGlvbiA9IHRoaXJkKHJvdGF0aW9ucyksXG4gICAgICB4QW5nbGUgPSBmaXJzdFJvdGF0aW9uICogREVHUkVFU19UT19SQURJQU5TLCAgLy8vXG4gICAgICB5QW5nbGUgPSBzZWNvbmRSb3RhdGlvbiAqIERFR1JFRVNfVE9fUkFESUFOUywgLy8vXG4gICAgICB6QW5nbGUgPSB0aGlyZFJvdGF0aW9uICogREVHUkVFU19UT19SQURJQU5TOyAgLy8vXG5cbiAgcm90YXRlKG1hdDQsIG1hdDQsIHhBbmdsZSwgeEF4aXMpO1xuICByb3RhdGUobWF0NCwgbWF0NCwgeUFuZ2xlLCB5QXhpcyk7XG4gIHJvdGF0ZShtYXQ0LCBtYXQ0LCB6QW5nbGUsIHpBeGlzKTtcblxuICByZXR1cm4gY29tcG9zZShtYXQ0KTtcbn1cblxuZnVuY3Rpb24gY29tcG9zZVRyYW5zbGF0ZShwb3NpdGlvbiA9IGRlZmF1bHRQb3NpdGlvbikge1xuICBjb25zdCBtYXQ0ID0gY3JlYXRlKCk7XG5cbiAgdHJhbnNsYXRlKG1hdDQsIG1hdDQsIHBvc2l0aW9uKTtcblxuICByZXR1cm4gY29tcG9zZShtYXQ0KTtcbn1cbiIsIiIsIm1vZHVsZS5leHBvcnRzID0gYWRqb2ludDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGFkam9pbnQob3V0LCBhKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXSxcbiAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV07XG5cbiAgICBvdXRbMF0gID0gIChhMTEgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMSAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpICsgYTMxICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikpO1xuICAgIG91dFsxXSAgPSAtKGEwMSAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIxICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzEgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSk7XG4gICAgb3V0WzJdICA9ICAoYTAxICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgLSBhMTEgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMSAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgICBvdXRbM10gID0gLShhMDEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSAtIGExMSAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpICsgYTIxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFs0XSAgPSAtKGExMCAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIwICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgKyBhMzAgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSk7XG4gICAgb3V0WzVdICA9ICAoYTAwICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjAgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMCAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpKTtcbiAgICBvdXRbNl0gID0gLShhMDAgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFs3XSAgPSAgKGEwMCAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpIC0gYTEwICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikgKyBhMjAgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzhdICA9ICAoYTEwICogKGEyMSAqIGEzMyAtIGEyMyAqIGEzMSkgLSBhMjAgKiAoYTExICogYTMzIC0gYTEzICogYTMxKSArIGEzMCAqIChhMTEgKiBhMjMgLSBhMTMgKiBhMjEpKTtcbiAgICBvdXRbOV0gID0gLShhMDAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMDEgKiBhMzMgLSBhMDMgKiBhMzEpICsgYTMwICogKGEwMSAqIGEyMyAtIGEwMyAqIGEyMSkpO1xuICAgIG91dFsxMF0gPSAgKGEwMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpIC0gYTEwICogKGEwMSAqIGEzMyAtIGEwMyAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTEzIC0gYTAzICogYTExKSk7XG4gICAgb3V0WzExXSA9IC0oYTAwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSkgLSBhMTAgKiAoYTAxICogYTIzIC0gYTAzICogYTIxKSArIGEyMCAqIChhMDEgKiBhMTMgLSBhMDMgKiBhMTEpKTtcbiAgICBvdXRbMTJdID0gLShhMTAgKiAoYTIxICogYTMyIC0gYTIyICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzIgLSBhMTIgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMiAtIGExMiAqIGEyMSkpO1xuICAgIG91dFsxM10gPSAgKGEwMCAqIChhMjEgKiBhMzIgLSBhMjIgKiBhMzEpIC0gYTIwICogKGEwMSAqIGEzMiAtIGEwMiAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTIyIC0gYTAyICogYTIxKSk7XG4gICAgb3V0WzE0XSA9IC0oYTAwICogKGExMSAqIGEzMiAtIGExMiAqIGEzMSkgLSBhMTAgKiAoYTAxICogYTMyIC0gYTAyICogYTMxKSArIGEzMCAqIChhMDEgKiBhMTIgLSBhMDIgKiBhMTEpKTtcbiAgICBvdXRbMTVdID0gIChhMDAgKiAoYTExICogYTIyIC0gYTEyICogYTIxKSAtIGExMCAqIChhMDEgKiBhMjIgLSBhMDIgKiBhMjEpICsgYTIwICogKGEwMSAqIGExMiAtIGEwMiAqIGExMSkpO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gY2xvbmU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBtYXQ0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQ0fSBhIG1hdHJpeCB0byBjbG9uZVxuICogQHJldHVybnMge21hdDR9IGEgbmV3IDR4NCBtYXRyaXhcbiAqL1xuZnVuY3Rpb24gY2xvbmUoYSkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICAgIG91dFs0XSA9IGFbNF07XG4gICAgb3V0WzVdID0gYVs1XTtcbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICBvdXRbOV0gPSBhWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gY29weTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0NCB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbNl07XG4gICAgb3V0WzddID0gYVs3XTtcbiAgICBvdXRbOF0gPSBhWzhdO1xuICAgIG91dFs5XSA9IGFbOV07XG4gICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgIG91dFsxMV0gPSBhWzExXTtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBtYXQ0XG4gKlxuICogQHJldHVybnMge21hdDR9IGEgbmV3IDR4NCBtYXRyaXhcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICBvdXRbMF0gPSAxO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gMTtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAxO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZGV0ZXJtaW5hbnQ7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkZXRlcm1pbmFudCBvZiBhXG4gKi9cbmZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XSxcblxuICAgICAgICBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTAsXG4gICAgICAgIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMCxcbiAgICAgICAgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwLFxuICAgICAgICBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTEsXG4gICAgICAgIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMSxcbiAgICAgICAgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyLFxuICAgICAgICBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzAsXG4gICAgICAgIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMCxcbiAgICAgICAgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwLFxuICAgICAgICBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzEsXG4gICAgICAgIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMSxcbiAgICAgICAgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICAgIHJldHVybiBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnJvbVF1YXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgcXVhdGVybmlvbiByb3RhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gZnJvbVF1YXQob3V0LCBxKSB7XG4gICAgdmFyIHggPSBxWzBdLCB5ID0gcVsxXSwgeiA9IHFbMl0sIHcgPSBxWzNdLFxuICAgICAgICB4MiA9IHggKyB4LFxuICAgICAgICB5MiA9IHkgKyB5LFxuICAgICAgICB6MiA9IHogKyB6LFxuXG4gICAgICAgIHh4ID0geCAqIHgyLFxuICAgICAgICB5eCA9IHkgKiB4MixcbiAgICAgICAgeXkgPSB5ICogeTIsXG4gICAgICAgIHp4ID0geiAqIHgyLFxuICAgICAgICB6eSA9IHogKiB5MixcbiAgICAgICAgenogPSB6ICogejIsXG4gICAgICAgIHd4ID0gdyAqIHgyLFxuICAgICAgICB3eSA9IHcgKiB5MixcbiAgICAgICAgd3ogPSB3ICogejI7XG5cbiAgICBvdXRbMF0gPSAxIC0geXkgLSB6ejtcbiAgICBvdXRbMV0gPSB5eCArIHd6O1xuICAgIG91dFsyXSA9IHp4IC0gd3k7XG4gICAgb3V0WzNdID0gMDtcblxuICAgIG91dFs0XSA9IHl4IC0gd3o7XG4gICAgb3V0WzVdID0gMSAtIHh4IC0geno7XG4gICAgb3V0WzZdID0genkgKyB3eDtcbiAgICBvdXRbN10gPSAwO1xuXG4gICAgb3V0WzhdID0genggKyB3eTtcbiAgICBvdXRbOV0gPSB6eSAtIHd4O1xuICAgIG91dFsxMF0gPSAxIC0geHggLSB5eTtcbiAgICBvdXRbMTFdID0gMDtcblxuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tUm90YXRpb25UcmFuc2xhdGlvbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uIGFuZCB2ZWN0b3IgdHJhbnNsYXRpb25cbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIHZlYyk7XG4gKiAgICAgdmFyIHF1YXRNYXQgPSBtYXQ0LmNyZWF0ZSgpO1xuICogICAgIHF1YXQ0LnRvTWF0NChxdWF0LCBxdWF0TWF0KTtcbiAqICAgICBtYXQ0Lm11bHRpcGx5KGRlc3QsIHF1YXRNYXQpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdDR9IHEgUm90YXRpb24gcXVhdGVybmlvblxuICogQHBhcmFtIHt2ZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvbihvdXQsIHEsIHYpIHtcbiAgICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgICB2YXIgeCA9IHFbMF0sIHkgPSBxWzFdLCB6ID0gcVsyXSwgdyA9IHFbM10sXG4gICAgICAgIHgyID0geCArIHgsXG4gICAgICAgIHkyID0geSArIHksXG4gICAgICAgIHoyID0geiArIHosXG5cbiAgICAgICAgeHggPSB4ICogeDIsXG4gICAgICAgIHh5ID0geCAqIHkyLFxuICAgICAgICB4eiA9IHggKiB6MixcbiAgICAgICAgeXkgPSB5ICogeTIsXG4gICAgICAgIHl6ID0geSAqIHoyLFxuICAgICAgICB6eiA9IHogKiB6MixcbiAgICAgICAgd3ggPSB3ICogeDIsXG4gICAgICAgIHd5ID0gdyAqIHkyLFxuICAgICAgICB3eiA9IHcgKiB6MjtcblxuICAgIG91dFswXSA9IDEgLSAoeXkgKyB6eik7XG4gICAgb3V0WzFdID0geHkgKyB3ejtcbiAgICBvdXRbMl0gPSB4eiAtIHd5O1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0geHkgLSB3ejtcbiAgICBvdXRbNV0gPSAxIC0gKHh4ICsgenopO1xuICAgIG91dFs2XSA9IHl6ICsgd3g7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSB4eiArIHd5O1xuICAgIG91dFs5XSA9IHl6IC0gd3g7XG4gICAgb3V0WzEwXSA9IDEgLSAoeHggKyB5eSk7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IHZbMF07XG4gICAgb3V0WzEzXSA9IHZbMV07XG4gICAgb3V0WzE0XSA9IHZbMl07XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmcnVzdHVtO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGZydXN0dW0gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7TnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBmcnVzdHVtKG91dCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgICB2YXIgcmwgPSAxIC8gKHJpZ2h0IC0gbGVmdCksXG4gICAgICAgIHRiID0gMSAvICh0b3AgLSBib3R0b20pLFxuICAgICAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzBdID0gKG5lYXIgKiAyKSAqIHJsO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gKG5lYXIgKiAyKSAqIHRiO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAocmlnaHQgKyBsZWZ0KSAqIHJsO1xuICAgIG91dFs5XSA9ICh0b3AgKyBib3R0b20pICogdGI7XG4gICAgb3V0WzEwXSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxMV0gPSAtMTtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gKGZhciAqIG5lYXIgKiAyKSAqIG5mO1xuICAgIG91dFsxNV0gPSAwO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG5cbi8qKlxuICogU2V0IGEgbWF0NCB0byB0aGUgaWRlbnRpdHkgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IDE7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiByZXF1aXJlKCcuL2NyZWF0ZScpXG4gICwgY2xvbmU6IHJlcXVpcmUoJy4vY2xvbmUnKVxuICAsIGNvcHk6IHJlcXVpcmUoJy4vY29weScpXG4gICwgaWRlbnRpdHk6IHJlcXVpcmUoJy4vaWRlbnRpdHknKVxuICAsIHRyYW5zcG9zZTogcmVxdWlyZSgnLi90cmFuc3Bvc2UnKVxuICAsIGludmVydDogcmVxdWlyZSgnLi9pbnZlcnQnKVxuICAsIGFkam9pbnQ6IHJlcXVpcmUoJy4vYWRqb2ludCcpXG4gICwgZGV0ZXJtaW5hbnQ6IHJlcXVpcmUoJy4vZGV0ZXJtaW5hbnQnKVxuICAsIG11bHRpcGx5OiByZXF1aXJlKCcuL211bHRpcGx5JylcbiAgLCB0cmFuc2xhdGU6IHJlcXVpcmUoJy4vdHJhbnNsYXRlJylcbiAgLCBzY2FsZTogcmVxdWlyZSgnLi9zY2FsZScpXG4gICwgcm90YXRlOiByZXF1aXJlKCcuL3JvdGF0ZScpXG4gICwgcm90YXRlWDogcmVxdWlyZSgnLi9yb3RhdGVYJylcbiAgLCByb3RhdGVZOiByZXF1aXJlKCcuL3JvdGF0ZVknKVxuICAsIHJvdGF0ZVo6IHJlcXVpcmUoJy4vcm90YXRlWicpXG4gICwgZnJvbVJvdGF0aW9uVHJhbnNsYXRpb246IHJlcXVpcmUoJy4vZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24nKVxuICAsIGZyb21RdWF0OiByZXF1aXJlKCcuL2Zyb21RdWF0JylcbiAgLCBmcnVzdHVtOiByZXF1aXJlKCcuL2ZydXN0dW0nKVxuICAsIHBlcnNwZWN0aXZlOiByZXF1aXJlKCcuL3BlcnNwZWN0aXZlJylcbiAgLCBwZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldzogcmVxdWlyZSgnLi9wZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldycpXG4gICwgb3J0aG86IHJlcXVpcmUoJy4vb3J0aG8nKVxuICAsIGxvb2tBdDogcmVxdWlyZSgnLi9sb29rQXQnKVxuICAsIHN0cjogcmVxdWlyZSgnLi9zdHInKVxufSIsIm1vZHVsZS5leHBvcnRzID0gaW52ZXJ0O1xuXG4vKipcbiAqIEludmVydHMgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXSxcbiAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV0sXG5cbiAgICAgICAgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwLFxuICAgICAgICBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTAsXG4gICAgICAgIGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMCxcbiAgICAgICAgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExLFxuICAgICAgICBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTEsXG4gICAgICAgIGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMixcbiAgICAgICAgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwLFxuICAgICAgICBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzAsXG4gICAgICAgIGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMCxcbiAgICAgICAgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxLFxuICAgICAgICBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzEsXG4gICAgICAgIGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMixcblxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gICAgICAgIGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcblxuICAgIGlmICghZGV0KSB7IFxuICAgICAgICByZXR1cm4gbnVsbDsgXG4gICAgfVxuICAgIGRldCA9IDEuMCAvIGRldDtcblxuICAgIG91dFswXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xuICAgIG91dFsxXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xuICAgIG91dFsyXSA9IChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0O1xuICAgIG91dFszXSA9IChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0O1xuICAgIG91dFs0XSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0O1xuICAgIG91dFs1XSA9IChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpICogZGV0O1xuICAgIG91dFs2XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xuICAgIG91dFs3XSA9IChhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDEpICogZGV0O1xuICAgIG91dFs4XSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0O1xuICAgIG91dFs5XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuICAgIG91dFsxMF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcbiAgICBvdXRbMTFdID0gKGEyMSAqIGIwMiAtIGEyMCAqIGIwNCAtIGEyMyAqIGIwMCkgKiBkZXQ7XG4gICAgb3V0WzEyXSA9IChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0O1xuICAgIG91dFsxM10gPSAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldDtcbiAgICBvdXRbMTRdID0gKGEzMSAqIGIwMSAtIGEzMCAqIGIwMyAtIGEzMiAqIGIwMCkgKiBkZXQ7XG4gICAgb3V0WzE1XSA9IChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0O1xuXG4gICAgcmV0dXJuIG91dDtcbn07IiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvb2tBdDtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBsb29rLWF0IG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBleWUgcG9zaXRpb24sIGZvY2FsIHBvaW50LCBhbmQgdXAgYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7dmVjM30gZXllIFBvc2l0aW9uIG9mIHRoZSB2aWV3ZXJcbiAqIEBwYXJhbSB7dmVjM30gY2VudGVyIFBvaW50IHRoZSB2aWV3ZXIgaXMgbG9va2luZyBhdFxuICogQHBhcmFtIHt2ZWMzfSB1cCB2ZWMzIHBvaW50aW5nIHVwXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGxvb2tBdChvdXQsIGV5ZSwgY2VudGVyLCB1cCkge1xuICAgIHZhciB4MCwgeDEsIHgyLCB5MCwgeTEsIHkyLCB6MCwgejEsIHoyLCBsZW4sXG4gICAgICAgIGV5ZXggPSBleWVbMF0sXG4gICAgICAgIGV5ZXkgPSBleWVbMV0sXG4gICAgICAgIGV5ZXogPSBleWVbMl0sXG4gICAgICAgIHVweCA9IHVwWzBdLFxuICAgICAgICB1cHkgPSB1cFsxXSxcbiAgICAgICAgdXB6ID0gdXBbMl0sXG4gICAgICAgIGNlbnRlcnggPSBjZW50ZXJbMF0sXG4gICAgICAgIGNlbnRlcnkgPSBjZW50ZXJbMV0sXG4gICAgICAgIGNlbnRlcnogPSBjZW50ZXJbMl07XG5cbiAgICBpZiAoTWF0aC5hYnMoZXlleCAtIGNlbnRlcngpIDwgMC4wMDAwMDEgJiZcbiAgICAgICAgTWF0aC5hYnMoZXlleSAtIGNlbnRlcnkpIDwgMC4wMDAwMDEgJiZcbiAgICAgICAgTWF0aC5hYnMoZXlleiAtIGNlbnRlcnopIDwgMC4wMDAwMDEpIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aXR5KG91dCk7XG4gICAgfVxuXG4gICAgejAgPSBleWV4IC0gY2VudGVyeDtcbiAgICB6MSA9IGV5ZXkgLSBjZW50ZXJ5O1xuICAgIHoyID0gZXlleiAtIGNlbnRlcno7XG5cbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KHowICogejAgKyB6MSAqIHoxICsgejIgKiB6Mik7XG4gICAgejAgKj0gbGVuO1xuICAgIHoxICo9IGxlbjtcbiAgICB6MiAqPSBsZW47XG5cbiAgICB4MCA9IHVweSAqIHoyIC0gdXB6ICogejE7XG4gICAgeDEgPSB1cHogKiB6MCAtIHVweCAqIHoyO1xuICAgIHgyID0gdXB4ICogejEgLSB1cHkgKiB6MDtcbiAgICBsZW4gPSBNYXRoLnNxcnQoeDAgKiB4MCArIHgxICogeDEgKyB4MiAqIHgyKTtcbiAgICBpZiAoIWxlbikge1xuICAgICAgICB4MCA9IDA7XG4gICAgICAgIHgxID0gMDtcbiAgICAgICAgeDIgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IDEgLyBsZW47XG4gICAgICAgIHgwICo9IGxlbjtcbiAgICAgICAgeDEgKj0gbGVuO1xuICAgICAgICB4MiAqPSBsZW47XG4gICAgfVxuXG4gICAgeTAgPSB6MSAqIHgyIC0gejIgKiB4MTtcbiAgICB5MSA9IHoyICogeDAgLSB6MCAqIHgyO1xuICAgIHkyID0gejAgKiB4MSAtIHoxICogeDA7XG5cbiAgICBsZW4gPSBNYXRoLnNxcnQoeTAgKiB5MCArIHkxICogeTEgKyB5MiAqIHkyKTtcbiAgICBpZiAoIWxlbikge1xuICAgICAgICB5MCA9IDA7XG4gICAgICAgIHkxID0gMDtcbiAgICAgICAgeTIgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IDEgLyBsZW47XG4gICAgICAgIHkwICo9IGxlbjtcbiAgICAgICAgeTEgKj0gbGVuO1xuICAgICAgICB5MiAqPSBsZW47XG4gICAgfVxuXG4gICAgb3V0WzBdID0geDA7XG4gICAgb3V0WzFdID0geTA7XG4gICAgb3V0WzJdID0gejA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSB4MTtcbiAgICBvdXRbNV0gPSB5MTtcbiAgICBvdXRbNl0gPSB6MTtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IHgyO1xuICAgIG91dFs5XSA9IHkyO1xuICAgIG91dFsxMF0gPSB6MjtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gLSh4MCAqIGV5ZXggKyB4MSAqIGV5ZXkgKyB4MiAqIGV5ZXopO1xuICAgIG91dFsxM10gPSAtKHkwICogZXlleCArIHkxICogZXlleSArIHkyICogZXlleik7XG4gICAgb3V0WzE0XSA9IC0oejAgKiBleWV4ICsgejEgKiBleWV5ICsgejIgKiBleWV6KTtcbiAgICBvdXRbMTVdID0gMTtcblxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gbXVsdGlwbHk7XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbWF0NCdzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICAgIC8vIENhY2hlIG9ubHkgdGhlIGN1cnJlbnQgbGluZSBvZiB0aGUgc2Vjb25kIG1hdHJpeFxuICAgIHZhciBiMCAgPSBiWzBdLCBiMSA9IGJbMV0sIGIyID0gYlsyXSwgYjMgPSBiWzNdOyAgXG4gICAgb3V0WzBdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFsxXSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbMl0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gICAgb3V0WzNdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuXG4gICAgYjAgPSBiWzRdOyBiMSA9IGJbNV07IGIyID0gYls2XTsgYjMgPSBiWzddO1xuICAgIG91dFs0XSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbNV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzZdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFs3XSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcblxuICAgIGIwID0gYls4XTsgYjEgPSBiWzldOyBiMiA9IGJbMTBdOyBiMyA9IGJbMTFdO1xuICAgIG91dFs4XSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbOV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzEwXSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbMTFdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuXG4gICAgYjAgPSBiWzEyXTsgYjEgPSBiWzEzXTsgYjIgPSBiWzE0XTsgYjMgPSBiWzE1XTtcbiAgICBvdXRbMTJdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFsxM10gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzE0XSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbMTVdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gb3J0aG87XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgb3J0aG9nb25hbCBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b20gQm90dG9tIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gb3J0aG8ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICAgIHZhciBsciA9IDEgLyAobGVmdCAtIHJpZ2h0KSxcbiAgICAgICAgYnQgPSAxIC8gKGJvdHRvbSAtIHRvcCksXG4gICAgICAgIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSAtMiAqIGxyO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gLTIgKiBidDtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAyICogbmY7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IChsZWZ0ICsgcmlnaHQpICogbHI7XG4gICAgb3V0WzEzXSA9ICh0b3AgKyBib3R0b20pICogYnQ7XG4gICAgb3V0WzE0XSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcGVyc3BlY3RpdmU7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGZvdnkgVmVydGljYWwgZmllbGQgb2YgdmlldyBpbiByYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0IEFzcGVjdCByYXRpby4gdHlwaWNhbGx5IHZpZXdwb3J0IHdpZHRoL2hlaWdodFxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcGVyc3BlY3RpdmUob3V0LCBmb3Z5LCBhc3BlY3QsIG5lYXIsIGZhcikge1xuICAgIHZhciBmID0gMS4wIC8gTWF0aC50YW4oZm92eSAvIDIpLFxuICAgICAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzBdID0gZiAvIGFzcGVjdDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IGY7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzExXSA9IC0xO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAoMiAqIGZhciAqIG5lYXIpICogbmY7XG4gICAgb3V0WzE1XSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBwZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldztcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBmaWVsZCBvZiB2aWV3LlxuICogVGhpcyBpcyBwcmltYXJpbHkgdXNlZnVsIGZvciBnZW5lcmF0aW5nIHByb2plY3Rpb24gbWF0cmljZXMgdG8gYmUgdXNlZFxuICogd2l0aCB0aGUgc3RpbGwgZXhwZXJpZW1lbnRhbCBXZWJWUiBBUEkuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGZvdiBPYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIHZhbHVlczogdXBEZWdyZWVzLCBkb3duRGVncmVlcywgbGVmdERlZ3JlZXMsIHJpZ2h0RGVncmVlc1xuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXcob3V0LCBmb3YsIG5lYXIsIGZhcikge1xuICAgIHZhciB1cFRhbiA9IE1hdGgudGFuKGZvdi51cERlZ3JlZXMgKiBNYXRoLlBJLzE4MC4wKSxcbiAgICAgICAgZG93blRhbiA9IE1hdGgudGFuKGZvdi5kb3duRGVncmVlcyAqIE1hdGguUEkvMTgwLjApLFxuICAgICAgICBsZWZ0VGFuID0gTWF0aC50YW4oZm92LmxlZnREZWdyZWVzICogTWF0aC5QSS8xODAuMCksXG4gICAgICAgIHJpZ2h0VGFuID0gTWF0aC50YW4oZm92LnJpZ2h0RGVncmVlcyAqIE1hdGguUEkvMTgwLjApLFxuICAgICAgICB4U2NhbGUgPSAyLjAgLyAobGVmdFRhbiArIHJpZ2h0VGFuKSxcbiAgICAgICAgeVNjYWxlID0gMi4wIC8gKHVwVGFuICsgZG93blRhbik7XG5cbiAgICBvdXRbMF0gPSB4U2NhbGU7XG4gICAgb3V0WzFdID0gMC4wO1xuICAgIG91dFsyXSA9IDAuMDtcbiAgICBvdXRbM10gPSAwLjA7XG4gICAgb3V0WzRdID0gMC4wO1xuICAgIG91dFs1XSA9IHlTY2FsZTtcbiAgICBvdXRbNl0gPSAwLjA7XG4gICAgb3V0WzddID0gMC4wO1xuICAgIG91dFs4XSA9IC0oKGxlZnRUYW4gLSByaWdodFRhbikgKiB4U2NhbGUgKiAwLjUpO1xuICAgIG91dFs5XSA9ICgodXBUYW4gLSBkb3duVGFuKSAqIHlTY2FsZSAqIDAuNSk7XG4gICAgb3V0WzEwXSA9IGZhciAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMTFdID0gLTEuMDtcbiAgICBvdXRbMTJdID0gMC4wO1xuICAgIG91dFsxM10gPSAwLjA7XG4gICAgb3V0WzE0XSA9IChmYXIgKiBuZWFyKSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMTVdID0gMC4wO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlO1xuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXQ0IGJ5IHRoZSBnaXZlbiBhbmdsZVxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcGFyYW0ge3ZlYzN9IGF4aXMgdGhlIGF4aXMgdG8gcm90YXRlIGFyb3VuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQsIGF4aXMpIHtcbiAgICB2YXIgeCA9IGF4aXNbMF0sIHkgPSBheGlzWzFdLCB6ID0gYXhpc1syXSxcbiAgICAgICAgbGVuID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiksXG4gICAgICAgIHMsIGMsIHQsXG4gICAgICAgIGEwMCwgYTAxLCBhMDIsIGEwMyxcbiAgICAgICAgYTEwLCBhMTEsIGExMiwgYTEzLFxuICAgICAgICBhMjAsIGEyMSwgYTIyLCBhMjMsXG4gICAgICAgIGIwMCwgYjAxLCBiMDIsXG4gICAgICAgIGIxMCwgYjExLCBiMTIsXG4gICAgICAgIGIyMCwgYjIxLCBiMjI7XG5cbiAgICBpZiAoTWF0aC5hYnMobGVuKSA8IDAuMDAwMDAxKSB7IHJldHVybiBudWxsOyB9XG4gICAgXG4gICAgbGVuID0gMSAvIGxlbjtcbiAgICB4ICo9IGxlbjtcbiAgICB5ICo9IGxlbjtcbiAgICB6ICo9IGxlbjtcblxuICAgIHMgPSBNYXRoLnNpbihyYWQpO1xuICAgIGMgPSBNYXRoLmNvcyhyYWQpO1xuICAgIHQgPSAxIC0gYztcblxuICAgIGEwMCA9IGFbMF07IGEwMSA9IGFbMV07IGEwMiA9IGFbMl07IGEwMyA9IGFbM107XG4gICAgYTEwID0gYVs0XTsgYTExID0gYVs1XTsgYTEyID0gYVs2XTsgYTEzID0gYVs3XTtcbiAgICBhMjAgPSBhWzhdOyBhMjEgPSBhWzldOyBhMjIgPSBhWzEwXTsgYTIzID0gYVsxMV07XG5cbiAgICAvLyBDb25zdHJ1Y3QgdGhlIGVsZW1lbnRzIG9mIHRoZSByb3RhdGlvbiBtYXRyaXhcbiAgICBiMDAgPSB4ICogeCAqIHQgKyBjOyBiMDEgPSB5ICogeCAqIHQgKyB6ICogczsgYjAyID0geiAqIHggKiB0IC0geSAqIHM7XG4gICAgYjEwID0geCAqIHkgKiB0IC0geiAqIHM7IGIxMSA9IHkgKiB5ICogdCArIGM7IGIxMiA9IHogKiB5ICogdCArIHggKiBzO1xuICAgIGIyMCA9IHggKiB6ICogdCArIHkgKiBzOyBiMjEgPSB5ICogeiAqIHQgLSB4ICogczsgYjIyID0geiAqIHogKiB0ICsgYztcblxuICAgIC8vIFBlcmZvcm0gcm90YXRpb24tc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzBdID0gYTAwICogYjAwICsgYTEwICogYjAxICsgYTIwICogYjAyO1xuICAgIG91dFsxXSA9IGEwMSAqIGIwMCArIGExMSAqIGIwMSArIGEyMSAqIGIwMjtcbiAgICBvdXRbMl0gPSBhMDIgKiBiMDAgKyBhMTIgKiBiMDEgKyBhMjIgKiBiMDI7XG4gICAgb3V0WzNdID0gYTAzICogYjAwICsgYTEzICogYjAxICsgYTIzICogYjAyO1xuICAgIG91dFs0XSA9IGEwMCAqIGIxMCArIGExMCAqIGIxMSArIGEyMCAqIGIxMjtcbiAgICBvdXRbNV0gPSBhMDEgKiBiMTAgKyBhMTEgKiBiMTEgKyBhMjEgKiBiMTI7XG4gICAgb3V0WzZdID0gYTAyICogYjEwICsgYTEyICogYjExICsgYTIyICogYjEyO1xuICAgIG91dFs3XSA9IGEwMyAqIGIxMCArIGExMyAqIGIxMSArIGEyMyAqIGIxMjtcbiAgICBvdXRbOF0gPSBhMDAgKiBiMjAgKyBhMTAgKiBiMjEgKyBhMjAgKiBiMjI7XG4gICAgb3V0WzldID0gYTAxICogYjIwICsgYTExICogYjIxICsgYTIxICogYjIyO1xuICAgIG91dFsxMF0gPSBhMDIgKiBiMjAgKyBhMTIgKiBiMjEgKyBhMjIgKiBiMjI7XG4gICAgb3V0WzExXSA9IGEwMyAqIGIyMCArIGExMyAqIGIyMSArIGEyMyAqIGIyMjtcblxuICAgIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICAgICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZVg7XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBYIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgYTEwID0gYVs0XSxcbiAgICAgICAgYTExID0gYVs1XSxcbiAgICAgICAgYTEyID0gYVs2XSxcbiAgICAgICAgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCByb3dzXG4gICAgICAgIG91dFswXSAgPSBhWzBdO1xuICAgICAgICBvdXRbMV0gID0gYVsxXTtcbiAgICAgICAgb3V0WzJdICA9IGFbMl07XG4gICAgICAgIG91dFszXSAgPSBhWzNdO1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFs0XSA9IGExMCAqIGMgKyBhMjAgKiBzO1xuICAgIG91dFs1XSA9IGExMSAqIGMgKyBhMjEgKiBzO1xuICAgIG91dFs2XSA9IGExMiAqIGMgKyBhMjIgKiBzO1xuICAgIG91dFs3XSA9IGExMyAqIGMgKyBhMjMgKiBzO1xuICAgIG91dFs4XSA9IGEyMCAqIGMgLSBhMTAgKiBzO1xuICAgIG91dFs5XSA9IGEyMSAqIGMgLSBhMTEgKiBzO1xuICAgIG91dFsxMF0gPSBhMjIgKiBjIC0gYTEyICogcztcbiAgICBvdXRbMTFdID0gYTIzICogYyAtIGExMyAqIHM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVZO1xuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWSBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIHJhZCkge1xuICAgIHZhciBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgICAgYyA9IE1hdGguY29zKHJhZCksXG4gICAgICAgIGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgIGEwMyA9IGFbM10sXG4gICAgICAgIGEyMCA9IGFbOF0sXG4gICAgICAgIGEyMSA9IGFbOV0sXG4gICAgICAgIGEyMiA9IGFbMTBdLFxuICAgICAgICBhMjMgPSBhWzExXTtcblxuICAgIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgcm93c1xuICAgICAgICBvdXRbNF0gID0gYVs0XTtcbiAgICAgICAgb3V0WzVdICA9IGFbNV07XG4gICAgICAgIG91dFs2XSAgPSBhWzZdO1xuICAgICAgICBvdXRbN10gID0gYVs3XTtcbiAgICAgICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbMF0gPSBhMDAgKiBjIC0gYTIwICogcztcbiAgICBvdXRbMV0gPSBhMDEgKiBjIC0gYTIxICogcztcbiAgICBvdXRbMl0gPSBhMDIgKiBjIC0gYTIyICogcztcbiAgICBvdXRbM10gPSBhMDMgKiBjIC0gYTIzICogcztcbiAgICBvdXRbOF0gPSBhMDAgKiBzICsgYTIwICogYztcbiAgICBvdXRbOV0gPSBhMDEgKiBzICsgYTIxICogYztcbiAgICBvdXRbMTBdID0gYTAyICogcyArIGEyMiAqIGM7XG4gICAgb3V0WzExXSA9IGEwMyAqIHMgKyBhMjMgKiBjO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlWjtcblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFogYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVoob3V0LCBhLCByYWQpIHtcbiAgICB2YXIgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICAgIGMgPSBNYXRoLmNvcyhyYWQpLFxuICAgICAgICBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLFxuICAgICAgICBhMTEgPSBhWzVdLFxuICAgICAgICBhMTIgPSBhWzZdLFxuICAgICAgICBhMTMgPSBhWzddO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCBsYXN0IHJvd1xuICAgICAgICBvdXRbOF0gID0gYVs4XTtcbiAgICAgICAgb3V0WzldICA9IGFbOV07XG4gICAgICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICAgICAgb3V0WzExXSA9IGFbMTFdO1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSA9IGEwMCAqIGMgKyBhMTAgKiBzO1xuICAgIG91dFsxXSA9IGEwMSAqIGMgKyBhMTEgKiBzO1xuICAgIG91dFsyXSA9IGEwMiAqIGMgKyBhMTIgKiBzO1xuICAgIG91dFszXSA9IGEwMyAqIGMgKyBhMTMgKiBzO1xuICAgIG91dFs0XSA9IGExMCAqIGMgLSBhMDAgKiBzO1xuICAgIG91dFs1XSA9IGExMSAqIGMgLSBhMDEgKiBzO1xuICAgIG91dFs2XSA9IGExMiAqIGMgLSBhMDIgKiBzO1xuICAgIG91dFs3XSA9IGExMyAqIGMgLSBhMDMgKiBzO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGU7XG5cbi8qKlxuICogU2NhbGVzIHRoZSBtYXQ0IGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdGhlIHZlYzMgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICoqL1xuZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gICAgdmFyIHggPSB2WzBdLCB5ID0gdlsxXSwgeiA9IHZbMl07XG5cbiAgICBvdXRbMF0gPSBhWzBdICogeDtcbiAgICBvdXRbMV0gPSBhWzFdICogeDtcbiAgICBvdXRbMl0gPSBhWzJdICogeDtcbiAgICBvdXRbM10gPSBhWzNdICogeDtcbiAgICBvdXRbNF0gPSBhWzRdICogeTtcbiAgICBvdXRbNV0gPSBhWzVdICogeTtcbiAgICBvdXRbNl0gPSBhWzZdICogeTtcbiAgICBvdXRbN10gPSBhWzddICogeTtcbiAgICBvdXRbOF0gPSBhWzhdICogejtcbiAgICBvdXRbOV0gPSBhWzldICogejtcbiAgICBvdXRbMTBdID0gYVsxMF0gKiB6O1xuICAgIG91dFsxMV0gPSBhWzExXSAqIHo7XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gc3RyO1xuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBtYXQgbWF0cml4IHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcbiAqL1xuZnVuY3Rpb24gc3RyKGEpIHtcbiAgICByZXR1cm4gJ21hdDQoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArIGFbM10gKyAnLCAnICtcbiAgICAgICAgICAgICAgICAgICAgYVs0XSArICcsICcgKyBhWzVdICsgJywgJyArIGFbNl0gKyAnLCAnICsgYVs3XSArICcsICcgK1xuICAgICAgICAgICAgICAgICAgICBhWzhdICsgJywgJyArIGFbOV0gKyAnLCAnICsgYVsxMF0gKyAnLCAnICsgYVsxMV0gKyAnLCAnICsgXG4gICAgICAgICAgICAgICAgICAgIGFbMTJdICsgJywgJyArIGFbMTNdICsgJywgJyArIGFbMTRdICsgJywgJyArIGFbMTVdICsgJyknO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zbGF0ZTtcblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQ0IGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2xhdGUob3V0LCBhLCB2KSB7XG4gICAgdmFyIHggPSB2WzBdLCB5ID0gdlsxXSwgeiA9IHZbMl0sXG4gICAgICAgIGEwMCwgYTAxLCBhMDIsIGEwMyxcbiAgICAgICAgYTEwLCBhMTEsIGExMiwgYTEzLFxuICAgICAgICBhMjAsIGEyMSwgYTIyLCBhMjM7XG5cbiAgICBpZiAoYSA9PT0gb3V0KSB7XG4gICAgICAgIG91dFsxMl0gPSBhWzBdICogeCArIGFbNF0gKiB5ICsgYVs4XSAqIHogKyBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMV0gKiB4ICsgYVs1XSAqIHkgKyBhWzldICogeiArIGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsyXSAqIHggKyBhWzZdICogeSArIGFbMTBdICogeiArIGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVszXSAqIHggKyBhWzddICogeSArIGFbMTFdICogeiArIGFbMTVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGEwMCA9IGFbMF07IGEwMSA9IGFbMV07IGEwMiA9IGFbMl07IGEwMyA9IGFbM107XG4gICAgICAgIGExMCA9IGFbNF07IGExMSA9IGFbNV07IGExMiA9IGFbNl07IGExMyA9IGFbN107XG4gICAgICAgIGEyMCA9IGFbOF07IGEyMSA9IGFbOV07IGEyMiA9IGFbMTBdOyBhMjMgPSBhWzExXTtcblxuICAgICAgICBvdXRbMF0gPSBhMDA7IG91dFsxXSA9IGEwMTsgb3V0WzJdID0gYTAyOyBvdXRbM10gPSBhMDM7XG4gICAgICAgIG91dFs0XSA9IGExMDsgb3V0WzVdID0gYTExOyBvdXRbNl0gPSBhMTI7IG91dFs3XSA9IGExMztcbiAgICAgICAgb3V0WzhdID0gYTIwOyBvdXRbOV0gPSBhMjE7IG91dFsxMF0gPSBhMjI7IG91dFsxMV0gPSBhMjM7XG5cbiAgICAgICAgb3V0WzEyXSA9IGEwMCAqIHggKyBhMTAgKiB5ICsgYTIwICogeiArIGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYTAxICogeCArIGExMSAqIHkgKyBhMjEgKiB6ICsgYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhMDIgKiB4ICsgYTEyICogeSArIGEyMiAqIHogKyBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGEwMyAqIHggKyBhMTMgKiB5ICsgYTIzICogeiArIGFbMTVdO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNwb3NlO1xuXG4vKipcbiAqIFRyYW5zcG9zZSB0aGUgdmFsdWVzIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNwb3NlKG91dCwgYSkge1xuICAgIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgICBpZiAob3V0ID09PSBhKSB7XG4gICAgICAgIHZhciBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICAgICAgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgICAgIG91dFsxXSA9IGFbNF07XG4gICAgICAgIG91dFsyXSA9IGFbOF07XG4gICAgICAgIG91dFszXSA9IGFbMTJdO1xuICAgICAgICBvdXRbNF0gPSBhMDE7XG4gICAgICAgIG91dFs2XSA9IGFbOV07XG4gICAgICAgIG91dFs3XSA9IGFbMTNdO1xuICAgICAgICBvdXRbOF0gPSBhMDI7XG4gICAgICAgIG91dFs5XSA9IGExMjtcbiAgICAgICAgb3V0WzExXSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTJdID0gYTAzO1xuICAgICAgICBvdXRbMTNdID0gYTEzO1xuICAgICAgICBvdXRbMTRdID0gYTIzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG91dFswXSA9IGFbMF07XG4gICAgICAgIG91dFsxXSA9IGFbNF07XG4gICAgICAgIG91dFsyXSA9IGFbOF07XG4gICAgICAgIG91dFszXSA9IGFbMTJdO1xuICAgICAgICBvdXRbNF0gPSBhWzFdO1xuICAgICAgICBvdXRbNV0gPSBhWzVdO1xuICAgICAgICBvdXRbNl0gPSBhWzldO1xuICAgICAgICBvdXRbN10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzhdID0gYVsyXTtcbiAgICAgICAgb3V0WzldID0gYVs2XTtcbiAgICAgICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgICAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgICAgIG91dFsxMl0gPSBhWzNdO1xuICAgICAgICBvdXRbMTNdID0gYVs3XTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTFdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gYWRkXG5cbi8qKlxuICogQWRkcyB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSArIGJbMF1cbiAgICBvdXRbMV0gPSBhWzFdICsgYlsxXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGNsb25lXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWMyIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBjbG9uZVxuICogQHJldHVybnMge3ZlYzJ9IGEgbmV3IDJEIHZlY3RvclxuICovXG5mdW5jdGlvbiBjbG9uZShhKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMilcbiAgICBvdXRbMF0gPSBhWzBdXG4gICAgb3V0WzFdID0gYVsxXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGNvcHlcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgdmVjMiB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgc291cmNlIHZlY3RvclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF1cbiAgICBvdXRbMV0gPSBhWzFdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgdmVjMlxuICpcbiAqIEByZXR1cm5zIHt2ZWMyfSBhIG5ldyAyRCB2ZWN0b3JcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDIpXG4gICAgb3V0WzBdID0gMFxuICAgIG91dFsxXSA9IDBcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBjcm9zc1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWMyJ3NcbiAqIE5vdGUgdGhhdCB0aGUgY3Jvc3MgcHJvZHVjdCBtdXN0IGJ5IGRlZmluaXRpb24gcHJvZHVjZSBhIDNEIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gY3Jvc3Mob3V0LCBhLCBiKSB7XG4gICAgdmFyIHogPSBhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdXG4gICAgb3V0WzBdID0gb3V0WzFdID0gMFxuICAgIG91dFsyXSA9IHpcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBkaXN0YW5jZVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5mdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gICAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgICAgeSA9IGJbMV0gLSBhWzFdXG4gICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpXG59IiwibW9kdWxlLmV4cG9ydHMgPSBkaXZpZGVcblxuLyoqXG4gKiBEaXZpZGVzIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIGRpdmlkZShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC8gYlswXVxuICAgIG91dFsxXSA9IGFbMV0gLyBiWzFdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gZG90XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxuICovXG5mdW5jdGlvbiBkb3QoYSwgYikge1xuICAgIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmb3JFYWNoXG5cbnZhciB2ZWMgPSByZXF1aXJlKCcuL2NyZWF0ZScpKClcblxuLyoqXG4gKiBQZXJmb3JtIHNvbWUgb3BlcmF0aW9uIG92ZXIgYW4gYXJyYXkgb2YgdmVjMnMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgYXJyYXkgb2YgdmVjdG9ycyB0byBpdGVyYXRlIG92ZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdHJpZGUgTnVtYmVyIG9mIGVsZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0IG9mIGVhY2ggdmVjMi4gSWYgMCBhc3N1bWVzIHRpZ2h0bHkgcGFja2VkXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IE51bWJlciBvZiBlbGVtZW50cyB0byBza2lwIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIHZlYzJzIHRvIGl0ZXJhdGUgb3Zlci4gSWYgMCBpdGVyYXRlcyBvdmVyIGVudGlyZSBhcnJheVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCB2ZWN0b3IgaW4gdGhlIGFycmF5XG4gKiBAcGFyYW0ge09iamVjdH0gW2FyZ10gYWRkaXRpb25hbCBhcmd1bWVudCB0byBwYXNzIHRvIGZuXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFcbiAqIEBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBmb3JFYWNoKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIHZhciBpLCBsXG4gICAgaWYoIXN0cmlkZSkge1xuICAgICAgICBzdHJpZGUgPSAyXG4gICAgfVxuXG4gICAgaWYoIW9mZnNldCkge1xuICAgICAgICBvZmZzZXQgPSAwXG4gICAgfVxuICAgIFxuICAgIGlmKGNvdW50KSB7XG4gICAgICAgIGwgPSBNYXRoLm1pbigoY291bnQgKiBzdHJpZGUpICsgb2Zmc2V0LCBhLmxlbmd0aClcbiAgICB9IGVsc2Uge1xuICAgICAgICBsID0gYS5sZW5ndGhcbiAgICB9XG5cbiAgICBmb3IoaSA9IG9mZnNldDsgaSA8IGw7IGkgKz0gc3RyaWRlKSB7XG4gICAgICAgIHZlY1swXSA9IGFbaV1cbiAgICAgICAgdmVjWzFdID0gYVtpKzFdXG4gICAgICAgIGZuKHZlYywgdmVjLCBhcmcpXG4gICAgICAgIGFbaV0gPSB2ZWNbMF1cbiAgICAgICAgYVtpKzFdID0gdmVjWzFdXG4gICAgfVxuICAgIFxuICAgIHJldHVybiBhXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tVmFsdWVzXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWMyIGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzJ9IGEgbmV3IDJEIHZlY3RvclxuICovXG5mdW5jdGlvbiBmcm9tVmFsdWVzKHgsIHkpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgyKVxuICAgIG91dFswXSA9IHhcbiAgICBvdXRbMV0gPSB5XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6IHJlcXVpcmUoJy4vY3JlYXRlJylcbiAgLCBjbG9uZTogcmVxdWlyZSgnLi9jbG9uZScpXG4gICwgZnJvbVZhbHVlczogcmVxdWlyZSgnLi9mcm9tVmFsdWVzJylcbiAgLCBjb3B5OiByZXF1aXJlKCcuL2NvcHknKVxuICAsIHNldDogcmVxdWlyZSgnLi9zZXQnKVxuICAsIGFkZDogcmVxdWlyZSgnLi9hZGQnKVxuICAsIHN1YnRyYWN0OiByZXF1aXJlKCcuL3N1YnRyYWN0JylcbiAgLCBtdWx0aXBseTogcmVxdWlyZSgnLi9tdWx0aXBseScpXG4gICwgZGl2aWRlOiByZXF1aXJlKCcuL2RpdmlkZScpXG4gICwgbWluOiByZXF1aXJlKCcuL21pbicpXG4gICwgbWF4OiByZXF1aXJlKCcuL21heCcpXG4gICwgc2NhbGU6IHJlcXVpcmUoJy4vc2NhbGUnKVxuICAsIHNjYWxlQW5kQWRkOiByZXF1aXJlKCcuL3NjYWxlQW5kQWRkJylcbiAgLCBkaXN0YW5jZTogcmVxdWlyZSgnLi9kaXN0YW5jZScpXG4gICwgc3F1YXJlZERpc3RhbmNlOiByZXF1aXJlKCcuL3NxdWFyZWREaXN0YW5jZScpXG4gICwgbGVuZ3RoOiByZXF1aXJlKCcuL2xlbmd0aCcpXG4gICwgc3F1YXJlZExlbmd0aDogcmVxdWlyZSgnLi9zcXVhcmVkTGVuZ3RoJylcbiAgLCBuZWdhdGU6IHJlcXVpcmUoJy4vbmVnYXRlJylcbiAgLCBub3JtYWxpemU6IHJlcXVpcmUoJy4vbm9ybWFsaXplJylcbiAgLCBkb3Q6IHJlcXVpcmUoJy4vZG90JylcbiAgLCBjcm9zczogcmVxdWlyZSgnLi9jcm9zcycpXG4gICwgbGVycDogcmVxdWlyZSgnLi9sZXJwJylcbiAgLCByYW5kb206IHJlcXVpcmUoJy4vcmFuZG9tJylcbiAgLCB0cmFuc2Zvcm1NYXQyOiByZXF1aXJlKCcuL3RyYW5zZm9ybU1hdDInKVxuICAsIHRyYW5zZm9ybU1hdDJkOiByZXF1aXJlKCcuL3RyYW5zZm9ybU1hdDJkJylcbiAgLCB0cmFuc2Zvcm1NYXQzOiByZXF1aXJlKCcuL3RyYW5zZm9ybU1hdDMnKVxuICAsIHRyYW5zZm9ybU1hdDQ6IHJlcXVpcmUoJy4vdHJhbnNmb3JtTWF0NCcpXG4gICwgZm9yRWFjaDogcmVxdWlyZSgnLi9mb3JFYWNoJylcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGxlbmd0aFxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKi9cbmZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXVxuICAgIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5KVxufSIsIm1vZHVsZS5leHBvcnRzID0gbGVycFxuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBsZXJwKG91dCwgYSwgYiwgdCkge1xuICAgIHZhciBheCA9IGFbMF0sXG4gICAgICAgIGF5ID0gYVsxXVxuICAgIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpXG4gICAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBtYXhcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIG1heChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKVxuICAgIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbWluXG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBtaW4ob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSlcbiAgICBvdXRbMV0gPSBNYXRoLm1pbihhWzFdLCBiWzFdKVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IG11bHRpcGx5XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICogYlswXVxuICAgIG91dFsxXSA9IGFbMV0gKiBiWzFdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbmVnYXRlXG5cbi8qKlxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBuZWdhdGVcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gbmVnYXRlKG91dCwgYSkge1xuICAgIG91dFswXSA9IC1hWzBdXG4gICAgb3V0WzFdID0gLWFbMV1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemVcblxuLyoqXG4gKiBOb3JtYWxpemUgYSB2ZWMyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gbm9ybWFsaXplXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdXG4gICAgdmFyIGxlbiA9IHgqeCArIHkqeVxuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgIC8vVE9ETzogZXZhbHVhdGUgdXNlIG9mIGdsbV9pbnZzcXJ0IGhlcmU/XG4gICAgICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKVxuICAgICAgICBvdXRbMF0gPSBhWzBdICogbGVuXG4gICAgICAgIG91dFsxXSA9IGFbMV0gKiBsZW5cbiAgICB9XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gcmFuZG9tXG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBzY2FsZVxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gW3NjYWxlXSBMZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3IuIElmIG9tbWl0dGVkLCBhIHVuaXQgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gcmFuZG9tKG91dCwgc2NhbGUpIHtcbiAgICBzY2FsZSA9IHNjYWxlIHx8IDEuMFxuICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDIuMCAqIE1hdGguUElcbiAgICBvdXRbMF0gPSBNYXRoLmNvcyhyKSAqIHNjYWxlXG4gICAgb3V0WzFdID0gTWF0aC5zaW4ocikgKiBzY2FsZVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlXG5cbi8qKlxuICogU2NhbGVzIGEgdmVjMiBieSBhIHNjYWxhciBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKiBiXG4gICAgb3V0WzFdID0gYVsxXSAqIGJcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZUFuZEFkZFxuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzIncyBhZnRlciBzY2FsaW5nIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBzY2FsZUFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gICAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpXG4gICAgb3V0WzFdID0gYVsxXSArIChiWzFdICogc2NhbGUpXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gc2V0XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMiB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBzZXQob3V0LCB4LCB5KSB7XG4gICAgb3V0WzBdID0geFxuICAgIG91dFsxXSA9IHlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzcXVhcmVkRGlzdGFuY2VcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gICAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgICAgeSA9IGJbMV0gLSBhWzFdXG4gICAgcmV0dXJuIHgqeCArIHkqeVxufSIsIm1vZHVsZS5leHBvcnRzID0gc3F1YXJlZExlbmd0aFxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWRMZW5ndGgoYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV1cbiAgICByZXR1cm4geCp4ICsgeSp5XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzdWJ0cmFjdFxuXG4vKipcbiAqIFN1YnRyYWN0cyB2ZWN0b3IgYiBmcm9tIHZlY3RvciBhXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC0gYlswXVxuICAgIG91dFsxXSA9IGFbMV0gLSBiWzFdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtTWF0MlxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDJ9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdDIob3V0LCBhLCBtKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXVxuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVsyXSAqIHlcbiAgICBvdXRbMV0gPSBtWzFdICogeCArIG1bM10gKiB5XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtTWF0MmRcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMyIHdpdGggYSBtYXQyZFxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0MmR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdDJkKG91dCwgYSwgbSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV1cbiAgICBvdXRbMF0gPSBtWzBdICogeCArIG1bMl0gKiB5ICsgbVs0XVxuICAgIG91dFsxXSA9IG1bMV0gKiB4ICsgbVszXSAqIHkgKyBtWzVdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtTWF0M1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDNcbiAqIDNyZCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQzfSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXQzKG91dCwgYSwgbSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV1cbiAgICBvdXRbMF0gPSBtWzBdICogeCArIG1bM10gKiB5ICsgbVs2XVxuICAgIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs0XSAqIHkgKyBtWzddXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtTWF0NFxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDRcbiAqIDNyZCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzAnXG4gKiA0dGggdmVjdG9yIGNvbXBvbmVudCBpcyBpbXBsaWNpdGx5ICcxJ1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0NH0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgICB2YXIgeCA9IGFbMF0sIFxuICAgICAgICB5ID0gYVsxXVxuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzEyXVxuICAgIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzEzXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGFkZDtcblxuLyoqXG4gKiBBZGRzIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgYlswXVxuICAgIG91dFsxXSA9IGFbMV0gKyBiWzFdXG4gICAgb3V0WzJdID0gYVsyXSArIGJbMl1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBhbmdsZVxuXG52YXIgZnJvbVZhbHVlcyA9IHJlcXVpcmUoJy4vZnJvbVZhbHVlcycpXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnLi9ub3JtYWxpemUnKVxudmFyIGRvdCA9IHJlcXVpcmUoJy4vZG90JylcblxuLyoqXG4gKiBHZXQgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIDNEIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqL1xuZnVuY3Rpb24gYW5nbGUoYSwgYikge1xuICAgIHZhciB0ZW1wQSA9IGZyb21WYWx1ZXMoYVswXSwgYVsxXSwgYVsyXSlcbiAgICB2YXIgdGVtcEIgPSBmcm9tVmFsdWVzKGJbMF0sIGJbMV0sIGJbMl0pXG4gXG4gICAgbm9ybWFsaXplKHRlbXBBLCB0ZW1wQSlcbiAgICBub3JtYWxpemUodGVtcEIsIHRlbXBCKVxuIFxuICAgIHZhciBjb3NpbmUgPSBkb3QodGVtcEEsIHRlbXBCKVxuXG4gICAgaWYoY29zaW5lID4gMS4wKXtcbiAgICAgICAgcmV0dXJuIDBcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5hY29zKGNvc2luZSlcbiAgICB9ICAgICBcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY2xvbmU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWMzIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjbG9uZVxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxuICovXG5mdW5jdGlvbiBjbG9uZShhKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMylcbiAgICBvdXRbMF0gPSBhWzBdXG4gICAgb3V0WzFdID0gYVsxXVxuICAgIG91dFsyXSA9IGFbMl1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBjb3B5O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWMzIHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXVxuICAgIG91dFsxXSA9IGFbMV1cbiAgICBvdXRbMl0gPSBhWzJdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzNcbiAqXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgzKVxuICAgIG91dFswXSA9IDBcbiAgICBvdXRbMV0gPSAwXG4gICAgb3V0WzJdID0gMFxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGNyb3NzO1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGNyb3NzKG91dCwgYSwgYikge1xuICAgIHZhciBheCA9IGFbMF0sIGF5ID0gYVsxXSwgYXogPSBhWzJdLFxuICAgICAgICBieCA9IGJbMF0sIGJ5ID0gYlsxXSwgYnogPSBiWzJdXG5cbiAgICBvdXRbMF0gPSBheSAqIGJ6IC0gYXogKiBieVxuICAgIG91dFsxXSA9IGF6ICogYnggLSBheCAqIGJ6XG4gICAgb3V0WzJdID0gYXggKiBieSAtIGF5ICogYnhcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBkaXN0YW5jZTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICAgIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgICAgIHkgPSBiWzFdIC0gYVsxXSxcbiAgICAgICAgeiA9IGJbMl0gLSBhWzJdXG4gICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnopXG59IiwibW9kdWxlLmV4cG9ydHMgPSBkaXZpZGU7XG5cbi8qKlxuICogRGl2aWRlcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBkaXZpZGUob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAvIGJbMF1cbiAgICBvdXRbMV0gPSBhWzFdIC8gYlsxXVxuICAgIG91dFsyXSA9IGFbMl0gLyBiWzJdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gZG90O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gZG90KGEsIGIpIHtcbiAgICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmb3JFYWNoO1xuXG52YXIgdmVjID0gcmVxdWlyZSgnLi9jcmVhdGUnKSgpXG5cbi8qKlxuICogUGVyZm9ybSBzb21lIG9wZXJhdGlvbiBvdmVyIGFuIGFycmF5IG9mIHZlYzNzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGEgdGhlIGFycmF5IG9mIHZlY3RvcnMgdG8gaXRlcmF0ZSBvdmVyXG4gKiBAcGFyYW0ge051bWJlcn0gc3RyaWRlIE51bWJlciBvZiBlbGVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydCBvZiBlYWNoIHZlYzMuIElmIDAgYXNzdW1lcyB0aWdodGx5IHBhY2tlZFxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBOdW1iZXIgb2YgZWxlbWVudHMgdG8gc2tpcCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IE51bWJlciBvZiB2ZWMzcyB0byBpdGVyYXRlIG92ZXIuIElmIDAgaXRlcmF0ZXMgb3ZlciBlbnRpcmUgYXJyYXlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggdmVjdG9yIGluIHRoZSBhcnJheVxuICogQHBhcmFtIHtPYmplY3R9IFthcmddIGFkZGl0aW9uYWwgYXJndW1lbnQgdG8gcGFzcyB0byBmblxuICogQHJldHVybnMge0FycmF5fSBhXG4gKiBAZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChhLCBzdHJpZGUsIG9mZnNldCwgY291bnQsIGZuLCBhcmcpIHtcbiAgICAgICAgdmFyIGksIGxcbiAgICAgICAgaWYoIXN0cmlkZSkge1xuICAgICAgICAgICAgc3RyaWRlID0gM1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIW9mZnNldCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gMFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihjb3VudCkge1xuICAgICAgICAgICAgbCA9IE1hdGgubWluKChjb3VudCAqIHN0cmlkZSkgKyBvZmZzZXQsIGEubGVuZ3RoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbCA9IGEubGVuZ3RoXG4gICAgICAgIH1cblxuICAgICAgICBmb3IoaSA9IG9mZnNldDsgaSA8IGw7IGkgKz0gc3RyaWRlKSB7XG4gICAgICAgICAgICB2ZWNbMF0gPSBhW2ldIFxuICAgICAgICAgICAgdmVjWzFdID0gYVtpKzFdIFxuICAgICAgICAgICAgdmVjWzJdID0gYVtpKzJdXG4gICAgICAgICAgICBmbih2ZWMsIHZlYywgYXJnKVxuICAgICAgICAgICAgYVtpXSA9IHZlY1swXSBcbiAgICAgICAgICAgIGFbaSsxXSA9IHZlY1sxXSBcbiAgICAgICAgICAgIGFbaSsyXSA9IHZlY1syXVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnJvbVZhbHVlcztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzMgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxuICovXG5mdW5jdGlvbiBmcm9tVmFsdWVzKHgsIHksIHopIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgzKVxuICAgIG91dFswXSA9IHhcbiAgICBvdXRbMV0gPSB5XG4gICAgb3V0WzJdID0gelxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiByZXF1aXJlKCcuL2NyZWF0ZScpXG4gICwgY2xvbmU6IHJlcXVpcmUoJy4vY2xvbmUnKVxuICAsIGFuZ2xlOiByZXF1aXJlKCcuL2FuZ2xlJylcbiAgLCBmcm9tVmFsdWVzOiByZXF1aXJlKCcuL2Zyb21WYWx1ZXMnKVxuICAsIGNvcHk6IHJlcXVpcmUoJy4vY29weScpXG4gICwgc2V0OiByZXF1aXJlKCcuL3NldCcpXG4gICwgYWRkOiByZXF1aXJlKCcuL2FkZCcpXG4gICwgc3VidHJhY3Q6IHJlcXVpcmUoJy4vc3VidHJhY3QnKVxuICAsIG11bHRpcGx5OiByZXF1aXJlKCcuL211bHRpcGx5JylcbiAgLCBkaXZpZGU6IHJlcXVpcmUoJy4vZGl2aWRlJylcbiAgLCBtaW46IHJlcXVpcmUoJy4vbWluJylcbiAgLCBtYXg6IHJlcXVpcmUoJy4vbWF4JylcbiAgLCBzY2FsZTogcmVxdWlyZSgnLi9zY2FsZScpXG4gICwgc2NhbGVBbmRBZGQ6IHJlcXVpcmUoJy4vc2NhbGVBbmRBZGQnKVxuICAsIGRpc3RhbmNlOiByZXF1aXJlKCcuL2Rpc3RhbmNlJylcbiAgLCBzcXVhcmVkRGlzdGFuY2U6IHJlcXVpcmUoJy4vc3F1YXJlZERpc3RhbmNlJylcbiAgLCBsZW5ndGg6IHJlcXVpcmUoJy4vbGVuZ3RoJylcbiAgLCBzcXVhcmVkTGVuZ3RoOiByZXF1aXJlKCcuL3NxdWFyZWRMZW5ndGgnKVxuICAsIG5lZ2F0ZTogcmVxdWlyZSgnLi9uZWdhdGUnKVxuICAsIGludmVyc2U6IHJlcXVpcmUoJy4vaW52ZXJzZScpXG4gICwgbm9ybWFsaXplOiByZXF1aXJlKCcuL25vcm1hbGl6ZScpXG4gICwgZG90OiByZXF1aXJlKCcuL2RvdCcpXG4gICwgY3Jvc3M6IHJlcXVpcmUoJy4vY3Jvc3MnKVxuICAsIGxlcnA6IHJlcXVpcmUoJy4vbGVycCcpXG4gICwgcmFuZG9tOiByZXF1aXJlKCcuL3JhbmRvbScpXG4gICwgdHJhbnNmb3JtTWF0NDogcmVxdWlyZSgnLi90cmFuc2Zvcm1NYXQ0JylcbiAgLCB0cmFuc2Zvcm1NYXQzOiByZXF1aXJlKCcuL3RyYW5zZm9ybU1hdDMnKVxuICAsIHRyYW5zZm9ybVF1YXQ6IHJlcXVpcmUoJy4vdHJhbnNmb3JtUXVhdCcpXG4gICwgcm90YXRlWDogcmVxdWlyZSgnLi9yb3RhdGVYJylcbiAgLCByb3RhdGVZOiByZXF1aXJlKCcuL3JvdGF0ZVknKVxuICAsIHJvdGF0ZVo6IHJlcXVpcmUoJy4vcm90YXRlWicpXG4gICwgZm9yRWFjaDogcmVxdWlyZSgnLi9mb3JFYWNoJylcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGludmVyc2U7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBpbnZlcnRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gMS4wIC8gYVswXVxuICBvdXRbMV0gPSAxLjAgLyBhWzFdXG4gIG91dFsyXSA9IDEuMCAvIGFbMl1cbiAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbGVuZ3RoO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKi9cbmZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXSxcbiAgICAgICAgeiA9IGFbMl1cbiAgICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeilcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGxlcnA7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gICAgdmFyIGF4ID0gYVswXSxcbiAgICAgICAgYXkgPSBhWzFdLFxuICAgICAgICBheiA9IGFbMl1cbiAgICBvdXRbMF0gPSBheCArIHQgKiAoYlswXSAtIGF4KVxuICAgIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpXG4gICAgb3V0WzJdID0gYXogKyB0ICogKGJbMl0gLSBheilcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBtYXg7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWF4aW11bSBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSlcbiAgICBvdXRbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKVxuICAgIG91dFsyXSA9IE1hdGgubWF4KGFbMl0sIGJbMl0pXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbWluO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gbWluKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IE1hdGgubWluKGFbMF0sIGJbMF0pXG4gICAgb3V0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSlcbiAgICBvdXRbMl0gPSBNYXRoLm1pbihhWzJdLCBiWzJdKVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IG11bHRpcGx5O1xuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGJbMF1cbiAgICBvdXRbMV0gPSBhWzFdICogYlsxXVxuICAgIG91dFsyXSA9IGFbMl0gKiBiWzJdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbmVnYXRlO1xuXG4vKipcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gbmVnYXRlXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIG5lZ2F0ZShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSAtYVswXVxuICAgIG91dFsxXSA9IC1hWzFdXG4gICAgb3V0WzJdID0gLWFbMl1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemU7XG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBub3JtYWxpemUob3V0LCBhKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXSxcbiAgICAgICAgeiA9IGFbMl1cbiAgICB2YXIgbGVuID0geCp4ICsgeSp5ICsgeip6XG4gICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgLy9UT0RPOiBldmFsdWF0ZSB1c2Ugb2YgZ2xtX2ludnNxcnQgaGVyZT9cbiAgICAgICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pXG4gICAgICAgIG91dFswXSA9IGFbMF0gKiBsZW5cbiAgICAgICAgb3V0WzFdID0gYVsxXSAqIGxlblxuICAgICAgICBvdXRbMl0gPSBhWzJdICogbGVuXG4gICAgfVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJhbmRvbTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdmVjdG9yIHdpdGggdGhlIGdpdmVuIHNjYWxlXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2NhbGVdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiByYW5kb20ob3V0LCBzY2FsZSkge1xuICAgIHNjYWxlID0gc2NhbGUgfHwgMS4wXG5cbiAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAyLjAgKiBNYXRoLlBJXG4gICAgdmFyIHogPSAoTWF0aC5yYW5kb20oKSAqIDIuMCkgLSAxLjBcbiAgICB2YXIgelNjYWxlID0gTWF0aC5zcXJ0KDEuMC16KnopICogc2NhbGVcblxuICAgIG91dFswXSA9IE1hdGguY29zKHIpICogelNjYWxlXG4gICAgb3V0WzFdID0gTWF0aC5zaW4ocikgKiB6U2NhbGVcbiAgICBvdXRbMl0gPSB6ICogc2NhbGVcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVYO1xuXG4vKipcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHgtYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBjIFRoZSBhbmdsZSBvZiByb3RhdGlvblxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgYiwgYyl7XG4gICAgdmFyIHAgPSBbXSwgcj1bXVxuICAgIC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cbiAgICBwWzBdID0gYVswXSAtIGJbMF1cbiAgICBwWzFdID0gYVsxXSAtIGJbMV1cbiAgICBwWzJdID0gYVsyXSAtIGJbMl1cblxuICAgIC8vcGVyZm9ybSByb3RhdGlvblxuICAgIHJbMF0gPSBwWzBdXG4gICAgclsxXSA9IHBbMV0qTWF0aC5jb3MoYykgLSBwWzJdKk1hdGguc2luKGMpXG4gICAgclsyXSA9IHBbMV0qTWF0aC5zaW4oYykgKyBwWzJdKk1hdGguY29zKGMpXG5cbiAgICAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG4gICAgb3V0WzBdID0gclswXSArIGJbMF1cbiAgICBvdXRbMV0gPSByWzFdICsgYlsxXVxuICAgIG91dFsyXSA9IHJbMl0gKyBiWzJdXG5cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVZO1xuXG4vKipcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHktYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBjIFRoZSBhbmdsZSBvZiByb3RhdGlvblxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgYiwgYyl7XG4gICAgdmFyIHAgPSBbXSwgcj1bXVxuICAgIC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cbiAgICBwWzBdID0gYVswXSAtIGJbMF1cbiAgICBwWzFdID0gYVsxXSAtIGJbMV1cbiAgICBwWzJdID0gYVsyXSAtIGJbMl1cbiAgXG4gICAgLy9wZXJmb3JtIHJvdGF0aW9uXG4gICAgclswXSA9IHBbMl0qTWF0aC5zaW4oYykgKyBwWzBdKk1hdGguY29zKGMpXG4gICAgclsxXSA9IHBbMV1cbiAgICByWzJdID0gcFsyXSpNYXRoLmNvcyhjKSAtIHBbMF0qTWF0aC5zaW4oYylcbiAgXG4gICAgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuICAgIG91dFswXSA9IHJbMF0gKyBiWzBdXG4gICAgb3V0WzFdID0gclsxXSArIGJbMV1cbiAgICBvdXRbMl0gPSByWzJdICsgYlsyXVxuICBcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVaO1xuXG4vKipcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHotYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBjIFRoZSBhbmdsZSBvZiByb3RhdGlvblxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgYiwgYyl7XG4gICAgdmFyIHAgPSBbXSwgcj1bXVxuICAgIC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cbiAgICBwWzBdID0gYVswXSAtIGJbMF1cbiAgICBwWzFdID0gYVsxXSAtIGJbMV1cbiAgICBwWzJdID0gYVsyXSAtIGJbMl1cbiAgXG4gICAgLy9wZXJmb3JtIHJvdGF0aW9uXG4gICAgclswXSA9IHBbMF0qTWF0aC5jb3MoYykgLSBwWzFdKk1hdGguc2luKGMpXG4gICAgclsxXSA9IHBbMF0qTWF0aC5zaW4oYykgKyBwWzFdKk1hdGguY29zKGMpXG4gICAgclsyXSA9IHBbMl1cbiAgXG4gICAgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuICAgIG91dFswXSA9IHJbMF0gKyBiWzBdXG4gICAgb3V0WzFdID0gclsxXSArIGJbMV1cbiAgICBvdXRbMl0gPSByWzJdICsgYlsyXVxuICBcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZTtcblxuLyoqXG4gKiBTY2FsZXMgYSB2ZWMzIGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGJcbiAgICBvdXRbMV0gPSBhWzFdICogYlxuICAgIG91dFsyXSA9IGFbMl0gKiBiXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGVBbmRBZGQ7XG5cbi8qKlxuICogQWRkcyB0d28gdmVjMydzIGFmdGVyIHNjYWxpbmcgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHNjYWxlQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgKGJbMF0gKiBzY2FsZSlcbiAgICBvdXRbMV0gPSBhWzFdICsgKGJbMV0gKiBzY2FsZSlcbiAgICBvdXRbMl0gPSBhWzJdICsgKGJbMl0gKiBzY2FsZSlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzZXQ7XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMyB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gc2V0KG91dCwgeCwgeSwgeikge1xuICAgIG91dFswXSA9IHhcbiAgICBvdXRbMV0gPSB5XG4gICAgb3V0WzJdID0gelxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHNxdWFyZWREaXN0YW5jZTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gICAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgICAgeSA9IGJbMV0gLSBhWzFdLFxuICAgICAgICB6ID0gYlsyXSAtIGFbMl1cbiAgICByZXR1cm4geCp4ICsgeSp5ICsgeip6XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzcXVhcmVkTGVuZ3RoO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWRMZW5ndGgoYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV0sXG4gICAgICAgIHogPSBhWzJdXG4gICAgcmV0dXJuIHgqeCArIHkqeSArIHoqelxufSIsIm1vZHVsZS5leHBvcnRzID0gc3VidHJhY3Q7XG5cbi8qKlxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLSBiWzBdXG4gICAgb3V0WzFdID0gYVsxXSAtIGJbMV1cbiAgICBvdXRbMl0gPSBhWzJdIC0gYlsyXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zZm9ybU1hdDM7XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0My5cbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDR9IG0gdGhlIDN4MyBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtTWF0MyhvdXQsIGEsIG0pIHtcbiAgICB2YXIgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXVxuICAgIG91dFswXSA9IHggKiBtWzBdICsgeSAqIG1bM10gKyB6ICogbVs2XVxuICAgIG91dFsxXSA9IHggKiBtWzFdICsgeSAqIG1bNF0gKyB6ICogbVs3XVxuICAgIG91dFsyXSA9IHggKiBtWzJdICsgeSAqIG1bNV0gKyB6ICogbVs4XVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zZm9ybU1hdDQ7XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0NC5cbiAqIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0KG91dCwgYSwgbSkge1xuICAgIHZhciB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdLFxuICAgICAgICB3ID0gbVszXSAqIHggKyBtWzddICogeSArIG1bMTFdICogeiArIG1bMTVdXG4gICAgdyA9IHcgfHwgMS4wXG4gICAgb3V0WzBdID0gKG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdKSAvIHdcbiAgICBvdXRbMV0gPSAobVsxXSAqIHggKyBtWzVdICogeSArIG1bOV0gKiB6ICsgbVsxM10pIC8gd1xuICAgIG91dFsyXSA9IChtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6ICsgbVsxNF0pIC8gd1xuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zZm9ybVF1YXQ7XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7cXVhdH0gcSBxdWF0ZXJuaW9uIHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybVF1YXQob3V0LCBhLCBxKSB7XG4gICAgLy8gYmVuY2htYXJrczogaHR0cDovL2pzcGVyZi5jb20vcXVhdGVybmlvbi10cmFuc2Zvcm0tdmVjMy1pbXBsZW1lbnRhdGlvbnNcblxuICAgIHZhciB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdLFxuICAgICAgICBxeCA9IHFbMF0sIHF5ID0gcVsxXSwgcXogPSBxWzJdLCBxdyA9IHFbM10sXG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHF1YXQgKiB2ZWNcbiAgICAgICAgaXggPSBxdyAqIHggKyBxeSAqIHogLSBxeiAqIHksXG4gICAgICAgIGl5ID0gcXcgKiB5ICsgcXogKiB4IC0gcXggKiB6LFxuICAgICAgICBpeiA9IHF3ICogeiArIHF4ICogeSAtIHF5ICogeCxcbiAgICAgICAgaXcgPSAtcXggKiB4IC0gcXkgKiB5IC0gcXogKiB6XG5cbiAgICAvLyBjYWxjdWxhdGUgcmVzdWx0ICogaW52ZXJzZSBxdWF0XG4gICAgb3V0WzBdID0gaXggKiBxdyArIGl3ICogLXF4ICsgaXkgKiAtcXogLSBpeiAqIC1xeVxuICAgIG91dFsxXSA9IGl5ICogcXcgKyBpdyAqIC1xeSArIGl6ICogLXF4IC0gaXggKiAtcXpcbiAgICBvdXRbMl0gPSBpeiAqIHF3ICsgaXcgKiAtcXogKyBpeCAqIC1xeSAtIGl5ICogLXF4XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gYWRkXG5cbi8qKlxuICogQWRkcyB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBhZGQgKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXVxuICBvdXRbMV0gPSBhWzFdICsgYlsxXVxuICBvdXRbMl0gPSBhWzJdICsgYlsyXVxuICBvdXRbM10gPSBhWzNdICsgYlszXVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNsb25lXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWM0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBjbG9uZVxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxuICovXG5mdW5jdGlvbiBjbG9uZSAoYSkge1xuICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSg0KVxuICBvdXRbMF0gPSBhWzBdXG4gIG91dFsxXSA9IGFbMV1cbiAgb3V0WzJdID0gYVsyXVxuICBvdXRbM10gPSBhWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY29weVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWM0IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGNvcHkgKG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdXG4gIG91dFsxXSA9IGFbMV1cbiAgb3V0WzJdID0gYVsyXVxuICBvdXRbM10gPSBhWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgdmVjNFxuICpcbiAqIEByZXR1cm5zIHt2ZWM0fSBhIG5ldyA0RCB2ZWN0b3JcbiAqL1xuZnVuY3Rpb24gY3JlYXRlICgpIHtcbiAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoNClcbiAgb3V0WzBdID0gMFxuICBvdXRbMV0gPSAwXG4gIG91dFsyXSA9IDBcbiAgb3V0WzNdID0gMFxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGRpc3RhbmNlXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIGRpc3RhbmNlIChhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgeSA9IGJbMV0gLSBhWzFdLFxuICAgIHogPSBiWzJdIC0gYVsyXSxcbiAgICB3ID0gYlszXSAtIGFbM11cbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZGl2aWRlXG5cbi8qKlxuICogRGl2aWRlcyB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBkaXZpZGUgKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC8gYlswXVxuICBvdXRbMV0gPSBhWzFdIC8gYlsxXVxuICBvdXRbMl0gPSBhWzJdIC8gYlsyXVxuICBvdXRbM10gPSBhWzNdIC8gYlszXVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGRvdFxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gZG90IChhLCBiKSB7XG4gIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl0gKyBhWzNdICogYlszXVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tVmFsdWVzXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWM0IGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjNH0gYSBuZXcgNEQgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGZyb21WYWx1ZXMgKHgsIHksIHosIHcpIHtcbiAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoNClcbiAgb3V0WzBdID0geFxuICBvdXRbMV0gPSB5XG4gIG91dFsyXSA9IHpcbiAgb3V0WzNdID0gd1xuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiByZXF1aXJlKCcuL2NyZWF0ZScpLFxuICBjbG9uZTogcmVxdWlyZSgnLi9jbG9uZScpLFxuICBmcm9tVmFsdWVzOiByZXF1aXJlKCcuL2Zyb21WYWx1ZXMnKSxcbiAgY29weTogcmVxdWlyZSgnLi9jb3B5JyksXG4gIHNldDogcmVxdWlyZSgnLi9zZXQnKSxcbiAgYWRkOiByZXF1aXJlKCcuL2FkZCcpLFxuICBzdWJ0cmFjdDogcmVxdWlyZSgnLi9zdWJ0cmFjdCcpLFxuICBtdWx0aXBseTogcmVxdWlyZSgnLi9tdWx0aXBseScpLFxuICBkaXZpZGU6IHJlcXVpcmUoJy4vZGl2aWRlJyksXG4gIG1pbjogcmVxdWlyZSgnLi9taW4nKSxcbiAgbWF4OiByZXF1aXJlKCcuL21heCcpLFxuICBzY2FsZTogcmVxdWlyZSgnLi9zY2FsZScpLFxuICBzY2FsZUFuZEFkZDogcmVxdWlyZSgnLi9zY2FsZUFuZEFkZCcpLFxuICBkaXN0YW5jZTogcmVxdWlyZSgnLi9kaXN0YW5jZScpLFxuICBzcXVhcmVkRGlzdGFuY2U6IHJlcXVpcmUoJy4vc3F1YXJlZERpc3RhbmNlJyksXG4gIGxlbmd0aDogcmVxdWlyZSgnLi9sZW5ndGgnKSxcbiAgc3F1YXJlZExlbmd0aDogcmVxdWlyZSgnLi9zcXVhcmVkTGVuZ3RoJyksXG4gIG5lZ2F0ZTogcmVxdWlyZSgnLi9uZWdhdGUnKSxcbiAgaW52ZXJzZTogcmVxdWlyZSgnLi9pbnZlcnNlJyksXG4gIG5vcm1hbGl6ZTogcmVxdWlyZSgnLi9ub3JtYWxpemUnKSxcbiAgZG90OiByZXF1aXJlKCcuL2RvdCcpLFxuICBsZXJwOiByZXF1aXJlKCcuL2xlcnAnKSxcbiAgcmFuZG9tOiByZXF1aXJlKCcuL3JhbmRvbScpLFxuICB0cmFuc2Zvcm1NYXQ0OiByZXF1aXJlKCcuL3RyYW5zZm9ybU1hdDQnKSxcbiAgdHJhbnNmb3JtUXVhdDogcmVxdWlyZSgnLi90cmFuc2Zvcm1RdWF0Jylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gaW52ZXJzZVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGludmVyc2Ugb2YgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gaW52ZXJ0XG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGludmVyc2UgKG91dCwgYSkge1xuICBvdXRbMF0gPSAxLjAgLyBhWzBdXG4gIG91dFsxXSA9IDEuMCAvIGFbMV1cbiAgb3V0WzJdID0gMS4wIC8gYVsyXVxuICBvdXRbM10gPSAxLjAgLyBhWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbGVuZ3RoXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcbiAqL1xuZnVuY3Rpb24gbGVuZ3RoIChhKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICB5ID0gYVsxXSxcbiAgICB6ID0gYVsyXSxcbiAgICB3ID0gYVszXVxuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBsZXJwXG5cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGxlcnAgKG91dCwgYSwgYiwgdCkge1xuICB2YXIgYXggPSBhWzBdLFxuICAgIGF5ID0gYVsxXSxcbiAgICBheiA9IGFbMl0sXG4gICAgYXcgPSBhWzNdXG4gIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpXG4gIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpXG4gIG91dFsyXSA9IGF6ICsgdCAqIChiWzJdIC0gYXopXG4gIG91dFszXSA9IGF3ICsgdCAqIChiWzNdIC0gYXcpXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbWF4XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWF4aW11bSBvZiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBtYXggKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKVxuICBvdXRbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKVxuICBvdXRbMl0gPSBNYXRoLm1heChhWzJdLCBiWzJdKVxuICBvdXRbM10gPSBNYXRoLm1heChhWzNdLCBiWzNdKVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG1pblxuXG4vKipcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbWluIChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSlcbiAgb3V0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSlcbiAgb3V0WzJdID0gTWF0aC5taW4oYVsyXSwgYlsyXSlcbiAgb3V0WzNdID0gTWF0aC5taW4oYVszXSwgYlszXSlcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBtdWx0aXBseVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbXVsdGlwbHkgKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYlswXVxuICBvdXRbMV0gPSBhWzFdICogYlsxXVxuICBvdXRbMl0gPSBhWzJdICogYlsyXVxuICBvdXRbM10gPSBhWzNdICogYlszXVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG5lZ2F0ZVxuXG4vKipcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gbmVnYXRlXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIG5lZ2F0ZSAob3V0LCBhKSB7XG4gIG91dFswXSA9IC1hWzBdXG4gIG91dFsxXSA9IC1hWzFdXG4gIG91dFsyXSA9IC1hWzJdXG4gIG91dFszXSA9IC1hWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplXG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBub3JtYWxpemUgKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgeSA9IGFbMV0sXG4gICAgeiA9IGFbMl0sXG4gICAgdyA9IGFbM11cbiAgdmFyIGxlbiA9IHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3XG4gIGlmIChsZW4gPiAwKSB7XG4gICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pXG4gICAgb3V0WzBdID0geCAqIGxlblxuICAgIG91dFsxXSA9IHkgKiBsZW5cbiAgICBvdXRbMl0gPSB6ICogbGVuXG4gICAgb3V0WzNdID0gdyAqIGxlblxuICB9XG4gIHJldHVybiBvdXRcbn1cbiIsInZhciB2ZWNOb3JtYWxpemUgPSByZXF1aXJlKCcuL25vcm1hbGl6ZScpXG52YXIgdmVjU2NhbGUgPSByZXF1aXJlKCcuL3NjYWxlJylcblxubW9kdWxlLmV4cG9ydHMgPSByYW5kb21cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdmVjdG9yIHdpdGggdGhlIGdpdmVuIHNjYWxlXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2NhbGVdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiByYW5kb20gKG91dCwgc2NhbGUpIHtcbiAgc2NhbGUgPSBzY2FsZSB8fCAxLjBcblxuICAvLyBUT0RPOiBUaGlzIGlzIGEgcHJldHR5IGF3ZnVsIHdheSBvZiBkb2luZyB0aGlzLiBGaW5kIHNvbWV0aGluZyBiZXR0ZXIuXG4gIG91dFswXSA9IE1hdGgucmFuZG9tKClcbiAgb3V0WzFdID0gTWF0aC5yYW5kb20oKVxuICBvdXRbMl0gPSBNYXRoLnJhbmRvbSgpXG4gIG91dFszXSA9IE1hdGgucmFuZG9tKClcbiAgdmVjTm9ybWFsaXplKG91dCwgb3V0KVxuICB2ZWNTY2FsZShvdXQsIG91dCwgc2NhbGUpXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGVcblxuLyoqXG4gKiBTY2FsZXMgYSB2ZWM0IGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gc2NhbGUgKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYlxuICBvdXRbMV0gPSBhWzFdICogYlxuICBvdXRbMl0gPSBhWzJdICogYlxuICBvdXRbM10gPSBhWzNdICogYlxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlQW5kQWRkXG5cbi8qKlxuICogQWRkcyB0d28gdmVjNCdzIGFmdGVyIHNjYWxpbmcgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHNjYWxlQW5kQWRkIChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gIG91dFswXSA9IGFbMF0gKyAoYlswXSAqIHNjYWxlKVxuICBvdXRbMV0gPSBhWzFdICsgKGJbMV0gKiBzY2FsZSlcbiAgb3V0WzJdID0gYVsyXSArIChiWzJdICogc2NhbGUpXG4gIG91dFszXSA9IGFbM10gKyAoYlszXSAqIHNjYWxlKVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHNldFxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzQgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBzZXQgKG91dCwgeCwgeSwgeiwgdykge1xuICBvdXRbMF0gPSB4XG4gIG91dFsxXSA9IHlcbiAgb3V0WzJdID0gelxuICBvdXRbM10gPSB3XG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc3F1YXJlZERpc3RhbmNlXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5mdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UgKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICB5ID0gYlsxXSAtIGFbMV0sXG4gICAgeiA9IGJbMl0gLSBhWzJdLFxuICAgIHcgPSBiWzNdIC0gYVszXVxuICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHdcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc3F1YXJlZExlbmd0aFxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWRMZW5ndGggKGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgIHkgPSBhWzFdLFxuICAgIHogPSBhWzJdLFxuICAgIHcgPSBhWzNdXG4gIHJldHVybiB4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogd1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzdWJ0cmFjdFxuXG4vKipcbiAqIFN1YnRyYWN0cyB2ZWN0b3IgYiBmcm9tIHZlY3RvciBhXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBzdWJ0cmFjdCAob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdXG4gIG91dFsxXSA9IGFbMV0gLSBiWzFdXG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdXG4gIG91dFszXSA9IGFbM10gLSBiWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtTWF0NFxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzQgd2l0aCBhIG1hdDQuXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0IChvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl0sIHcgPSBhWzNdXG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdICogd1xuICBvdXRbMV0gPSBtWzFdICogeCArIG1bNV0gKiB5ICsgbVs5XSAqIHogKyBtWzEzXSAqIHdcbiAgb3V0WzJdID0gbVsyXSAqIHggKyBtWzZdICogeSArIG1bMTBdICogeiArIG1bMTRdICogd1xuICBvdXRbM10gPSBtWzNdICogeCArIG1bN10gKiB5ICsgbVsxMV0gKiB6ICsgbVsxNV0gKiB3XG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtUXVhdFxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzQgd2l0aCBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge3F1YXR9IHEgcXVhdGVybmlvbiB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1RdWF0IChvdXQsIGEsIHEpIHtcbiAgdmFyIHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl0sXG4gICAgcXggPSBxWzBdLCBxeSA9IHFbMV0sIHF6ID0gcVsyXSwgcXcgPSBxWzNdLFxuXG4gICAgLy8gY2FsY3VsYXRlIHF1YXQgKiB2ZWNcbiAgICBpeCA9IHF3ICogeCArIHF5ICogeiAtIHF6ICogeSxcbiAgICBpeSA9IHF3ICogeSArIHF6ICogeCAtIHF4ICogeixcbiAgICBpeiA9IHF3ICogeiArIHF4ICogeSAtIHF5ICogeCxcbiAgICBpdyA9IC1xeCAqIHggLSBxeSAqIHkgLSBxeiAqIHpcblxuICAvLyBjYWxjdWxhdGUgcmVzdWx0ICogaW52ZXJzZSBxdWF0XG4gIG91dFswXSA9IGl4ICogcXcgKyBpdyAqIC1xeCArIGl5ICogLXF6IC0gaXogKiAtcXlcbiAgb3V0WzFdID0gaXkgKiBxdyArIGl3ICogLXF5ICsgaXogKiAtcXggLSBpeCAqIC1xelxuICBvdXRbMl0gPSBpeiAqIHF3ICsgaXcgKiAtcXogKyBpeCAqIC1xeSAtIGl5ICogLXF4XG4gIG91dFszXSA9IGFbM11cbiAgcmV0dXJuIG91dFxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aFV0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL3BhdGgnKSxcbiAgYXJyYXlVdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy9hcnJheScpLFxuICBmaWxlU3lzdGVtVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvZmlsZVN5c3RlbScpLFxuICBhc3luY2hyb25vdXNVdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy9hc3luY2hyb25vdXMnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cblxuZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5mdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5mdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5mdW5jdGlvbiBwdXNoKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5mdW5jdGlvbiB1bnNoaWZ0KGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5mdW5jdGlvbiBjbGVhcihhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG4gIFxuICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbn1cblxuZnVuY3Rpb24gY29weShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXkyLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5mdW5jdGlvbiBtZXJnZShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IGFycmF5Mi5sZW5ndGgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyKTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyXSxcbiAgICAgICAgZGVsZXRlZEl0ZW1zQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5MSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xufVxuXG5mdW5jdGlvbiByZXBsYWNlKGFycmF5LCBlbGVtZW50LCB0ZXN0KSB7XG4gIGxldCBzdGFydCA9IC0xO1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGZpbHRlcmVkRWxlbWVudHMgPSBbXTtcbiAgXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZmlsdGVyZWRFbGVtZW50cy51bnNoaWZ0KGZpcnN0RGVsZXRlZEVsZW1lbnQpOyAgLy8vXG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBmaWx0ZXJlZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBmaW5kKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gcHJ1bmUoYXJyYXksIHRlc3QpIHtcbiAgbGV0IHBydW5lZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIFxuICBhcnJheS5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBwcnVuZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIHBydW5lZEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHBhdGNoKGFycmF5LCBlbGVtZW50LCB0ZXN0KSB7XG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkyLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBwYXNzZWQgP1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCkgOlxuICAgICAgICBhcnJheTIucHVzaChlbGVtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmaXJzdDogZmlyc3QsXG4gIHNlY29uZDogc2Vjb25kLFxuICB0aGlyZDogdGhpcmQsXG4gIGZvdXJ0aDogZm91cnRoLFxuICBmaWZ0aDogZmlmdGgsXG4gIGZpZnRoTGFzdDogZmlmdGhMYXN0LFxuICBmb3VydGhMYXN0OiBmb3VydGhMYXN0LFxuICB0aGlyZExhc3Q6IHRoaXJkTGFzdCxcbiAgc2Vjb25kTGFzdDogc2Vjb25kTGFzdCxcbiAgbGFzdDogbGFzdCxcbiAgdGFpbDogdGFpbCxcbiAgcHVzaDogcHVzaCxcbiAgdW5zaGlmdDogdW5zaGlmdCxcbiAgY2xlYXI6IGNsZWFyLFxuICBjb3B5OiBjb3B5LFxuICBtZXJnZTogbWVyZ2UsXG4gIHNwbGljZTogc3BsaWNlLFxuICByZXBsYWNlOiByZXBsYWNlLFxuICBmaWx0ZXI6IGZpbHRlcixcbiAgZmluZDogZmluZCxcbiAgcHJ1bmU6IHBydW5lLFxuICBwYXRjaDogcGF0Y2gsXG4gIGF1Z21lbnQ6IGF1Z21lbnQsXG4gIHNlcGFyYXRlOiBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNTb21lOiBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWU6IGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRm9yRWFjaDogZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoOiBiYWNrd2FyZHNGb3JFYWNoXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gd2hpbHN0KGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VxdWVuY2UoY2FsbGJhY2tzLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2FsbGJhY2tzLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrc1tpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV2ZW50dWFsbHkoY2FsbGJhY2tzLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2FsbGJhY2tzLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaywgaW5kZXgpIHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwZWF0ZWRseShjYWxsYmFjaywgbGVuZ3RoLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICB3aGlsc3Q6IHdoaWxzdCxcclxuICBmb3JFYWNoOiBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlOiBzZXF1ZW5jZSxcclxuICBldmVudHVhbGx5OiBldmVudHVhbGx5LFxyXG4gIHJlcGVhdGVkbHk6IHJlcGVhdGVkbHksXHJcbiAgZm9yd2FyZHNGb3JFYWNoOiBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaDogYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcblxuZnVuY3Rpb24gZW50cnlFeGlzdHMoYWJzb2x1dGVQYXRoKSB7XG4gIHJldHVybiBmcy5leGlzdHNTeW5jKGFic29sdXRlUGF0aCk7XG59XG5cbmZ1bmN0aW9uIGZpbGVFeGlzdHMoYWJzb2x1dGVGaWxlUGF0aCkge1xuICBsZXQgZmlsZUV4aXN0cyA9IGZhbHNlO1xuICBcbiAgY29uc3QgYWJzb2x1dGVQYXRoID0gYWJzb2x1dGVGaWxlUGF0aCwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gZW50cnlFeGlzdHMoYWJzb2x1dGVQYXRoKTtcbiAgXG4gIGlmIChlbnRyeUV4aXN0cykge1xuICAgIGNvbnN0IGVudHJ5RmlsZSA9IGlzRW50cnlGaWxlKGFic29sdXRlUGF0aCk7XG4gICAgXG4gICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgZmlsZUV4aXN0cyA9IHRydWU7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gZmlsZUV4aXN0cztcbn1cblxuZnVuY3Rpb24gaXNFbnRyeUZpbGUoYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhhYnNvbHV0ZVBhdGgpLFxuICAgICAgZW50cnlEaXJlY3RvcnkgPSBzdGF0LmlzRGlyZWN0b3J5KCksXG4gICAgICBlbnRyeUZpbGUgPSAhZW50cnlEaXJlY3Rvcnk7XG5cbiAgcmV0dXJuIGVudHJ5RmlsZTtcbn1cblxuZnVuY3Rpb24gZGlyZWN0b3J5RXhpc3RzKGFic29sdXRlRGlyZWN0b3J5UGF0aCkge1xuICBsZXQgZGlyZWN0b3J5RXhpc3RzID0gZmFsc2U7XG5cbiAgY29uc3QgYWJzb2x1dGVQYXRoID0gYWJzb2x1dGVEaXJlY3RvcnlQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBlbnRyeUV4aXN0cyhhYnNvbHV0ZVBhdGgpO1xuXG4gIGlmIChlbnRyeUV4aXN0cykge1xuICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShhYnNvbHV0ZVBhdGgpO1xuXG4gICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICBkaXJlY3RvcnlFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXJlY3RvcnlFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhhYnNvbHV0ZVBhdGgpLFxuICAgICAgICBlbnRyeURpcmVjdG9yeSA9IHN0YXQuaXNEaXJlY3RvcnkoKTtcblxuICByZXR1cm4gZW50cnlEaXJlY3Rvcnk7XG59XG5cbmZ1bmN0aW9uIGlzRGlyZWN0b3J5RW1wdHkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXNMZW5ndGggPSBzdWJFbnRyeU5hbWVzLmxlbmd0aCxcbiAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSAoc3ViRW50cnlOYW1lc0xlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xufVxuXG5mdW5jdGlvbiByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBzdWJFbnRyeU5hbWVzID0gZnMucmVhZGRpclN5bmMoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICByZXR1cm4gc3ViRW50cnlOYW1lcztcbn1cblxuZnVuY3Rpb24gcmVhZEZpbGUoYWJzb2x1dGVGaWxlUGF0aCwgZW5jb2RpbmcgPSAndXRmOCcpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBlbmNvZGluZzogZW5jb2RpbmdcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhhYnNvbHV0ZUZpbGVQYXRoLCBvcHRpb25zKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gd3JpdGVGaWxlKGFic29sdXRlRmlsZVBhdGgsIGNvbnRlbnQpIHtcbiAgZnMud3JpdGVGaWxlU3luYyhhYnNvbHV0ZUZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVudHJ5RXhpc3RzOiBlbnRyeUV4aXN0cyxcbiAgZmlsZUV4aXN0czogZmlsZUV4aXN0cyxcbiAgaXNFbnRyeUZpbGU6IGlzRW50cnlGaWxlLFxuICBkaXJlY3RvcnlFeGlzdHM6IGRpcmVjdG9yeUV4aXN0cyxcbiAgaXNFbnRyeURpcmVjdG9yeTogaXNFbnRyeURpcmVjdG9yeSxcbiAgaXNEaXJlY3RvcnlFbXB0eTogaXNEaXJlY3RvcnlFbXB0eSxcbiAgcmVhZERpcmVjdG9yeTogcmVhZERpcmVjdG9yeSxcbiAgcmVhZEZpbGU6IHJlYWRGaWxlLFxuICB3cml0ZUZpbGU6IHdyaXRlRmlsZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXkgPSByZXF1aXJlKCcuL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgbGFzdCB9ID0gYXJyYXk7XG5cbmZ1bmN0aW9uIGlzUGF0aFJlbGF0aXZlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gcGF0aC5zZWFyY2goL15cXC57MSwyfVxcLy8pLFxuICAgICAgICBwYXRoUmVsYXRpdmVQYXRoID0gKHBvc2l0aW9uICE9PSAtMSk7XG5cbiAgcmV0dXJuIHBhdGhSZWxhdGl2ZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhSZWxhdGl2ZVBhdGggPSBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhBYnNvbHV0ZVBhdGggPSAhcGF0aFJlbGF0aXZlUGF0aDsgLy8vXG5cbiAgcmV0dXJuIHBhdGhBYnNvbHV0ZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGlzUGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lKHBhdGgpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBwYXRoLnNlYXJjaCgvXlteXFwvXStcXC8/JC8pLFxuICAgICAgICBwYXRoVG9wbW9zdERpcmVjdG9yeU5hbWUgPSAocG9zaXRpb24gIT09IC0xKTtcblxuICByZXR1cm4gcGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5mdW5jdGlvbiBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwYXRoKSB7XG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWUucmVwbGFjZSgvXFwvJC8sICcnKTsgLy8vXG5cbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdERpcmVjdG9yeU5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICBwb3NpdGlvbiA9IHBhdGguc2VhcmNoKHJlZ0V4cCksXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5GaWxlUGF0aCA9IChwb3NpdGlvbiAhPT0gLTEpO1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluRmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVQYXRocyhkaXJlY3RvcnlQYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgbGV0IGFic29sdXRlUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMgPSBkaXJlY3RvcnlQYXRoLnNwbGl0KCcvJyksXG4gICAgICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzID0gcmVsYXRpdmVQYXRoLnNwbGl0KCcvJyk7XG5cbiAgbGV0IGZpcnN0UmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZSA9IGZpcnN0KHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzKSxcbiAgICAgIGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lO1xuXG4gIGlmIChmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPT09ICcuJykge1xuICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzLnNoaWZ0KCk7XG4gIH1cblxuICBmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPSBmaXJzdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG4gIGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lID0gbGFzdChkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPT09ICcuLicpICYmIChsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzLnNoaWZ0KCk7XG4gICAgZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMucG9wKCk7XG5cbiAgICBmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPSBmaXJzdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG4gICAgbGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgPSBsYXN0KGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgYWJzb2x1dGVGaWxlUGF0aFN1YkVudHJ5TmFtZXMgPSBbXS5jb25jYXQoZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMpLmNvbmNhdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG5cbiAgICBhYnNvbHV0ZVBhdGggPSBhYnNvbHV0ZUZpbGVQYXRoU3ViRW50cnlOYW1lcy5qb2luKCcvJyk7XG4gIH1cblxuICByZXR1cm4gYWJzb2x1dGVQYXRoO1xufVxuXG5mdW5jdGlvbiBjb25jYXRlbmF0ZVBhdGhzKHBhdGgxLCBwYXRoMikge1xuICBwYXRoMSA9IHBhdGgxLnJlcGxhY2UoL1xcLyQvLCAnJyk7ICAvLy9cblxuICBjb25zdCBjb21iaW5lZFBhdGggPSBgJHtwYXRoMX0vJHtwYXRoMn1gO1xuXG4gIHJldHVybiBjb21iaW5lZFBhdGg7XG59XG5cbmZ1bmN0aW9uIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgYm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eLitcXC8oW15cXC9dK1xcLz8pJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBib3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gYm90dG9tbW9zdE5hbWU7XG59XG5cbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKylcXC9bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGRpcmVjdG9yeVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGRpcmVjdG9yeVBhdGg7XG59XG5cbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSspXFwvLiskLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZnVuY3Rpb24gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC8oXi4rKVxcL1teXFwvXStcXC8/JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XG59XG5cbmZ1bmN0aW9uIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXlteXFwvXStcXC8oLispJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7XG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzUGF0aFJlbGF0aXZlUGF0aDogaXNQYXRoUmVsYXRpdmVQYXRoLFxuICBpc1BhdGhBYnNvbHV0ZVBhdGg6IGlzUGF0aEFic29sdXRlUGF0aCxcbiAgaXNQYXRoVG9wbW9zdERpcmVjdG9yeU5hbWU6IGlzUGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lLFxuICBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoOiBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoLFxuICBjb21iaW5lUGF0aHM6IGNvbWJpbmVQYXRocyxcbiAgY29uY2F0ZW5hdGVQYXRoczogY29uY2F0ZW5hdGVQYXRocyxcbiAgYm90dG9tbW9zdE5hbWVGcm9tUGF0aDogYm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aDogdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aDogdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoOiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aDogcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoXG59O1xuIl19
