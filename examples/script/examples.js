(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AngleCoordinates = require('./coordinates2D'),
    MouseCoordinates = require('./mouseCoordinates');

var INITIAL_MOUSE_COORDINATES = new MouseCoordinates(0, 0),
    INITIAL_ANGLE_COORDINATES = new AngleCoordinates(0, Math.PI / 2);

var Angles = function () {
  function Angles(mouseDown, offsetMouseCoordinates, angleCoordinates, previousAngleCoordinates) {
    _classCallCheck(this, Angles);

    this.mouseDown = mouseDown;
    this.offsetMouseCoordinates = offsetMouseCoordinates;
    this.angleCoordinates = angleCoordinates;
    this.previousAngleCoordinates = previousAngleCoordinates;
  }

  _createClass(Angles, [{
    key: 'getXAxisAngle',
    value: function getXAxisAngle() {
      var xAxisAngle = -this.angleCoordinates.getY(); ///

      return xAxisAngle;
    }
  }, {
    key: 'getYAxisAngle',
    value: function getYAxisAngle() {
      var yAxisAngle = +this.angleCoordinates.getX(); ///

      return yAxisAngle;
    }
  }, {
    key: 'mouseUpEventHandler',
    value: function mouseUpEventHandler(mouseCoordinates) {
      this.mouseDown = false;
      this.previousAngleCoordinates = this.angleCoordinates;
    }
  }, {
    key: 'mouseDownEventHandler',
    value: function mouseDownEventHandler(mouseCoordinates) {
      this.mouseDown = true;
      this.offsetMouseCoordinates = mouseCoordinates;
    }
  }, {
    key: 'mouseMoveEventHandler',
    value: function mouseMoveEventHandler(mouseCoordinates) {
      if (this.mouseDown) {
        this.updateAngleCoordinates(mouseCoordinates);
      }
    }
  }, {
    key: 'updateAngleCoordinates',
    value: function updateAngleCoordinates(mouseCoordinates) {
      var relativeMouseCoordinates = mouseCoordinates.minus(this.offsetMouseCoordinates),
          relativeAngleCoordinates = relativeMouseCoordinates.multipliedBy(Math.PI / 180); ///

      this.angleCoordinates = this.previousAngleCoordinates.plus(relativeAngleCoordinates);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var mouseDown = false,
          offsetMouseCoordinates = INITIAL_MOUSE_COORDINATES,
          angleCoordinates = INITIAL_ANGLE_COORDINATES,
          previousAngleCoordinates = angleCoordinates,
          angles = new Angles(mouseDown, offsetMouseCoordinates, angleCoordinates, previousAngleCoordinates);

      return angles;
    }
  }]);

  return Angles;
}();

var angles = Angles.fromNothing();

module.exports = angles;

},{"./coordinates2D":3,"./mouseCoordinates":18}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var domUtilities = require('./utilities/dom'),
    textureMixin = require('./mixin/texture'),
    bufferMixin = require('./mixin/buffer'),
    colourMixin = require('./mixin/colour'),
    matrixMixin = require('./mixin/matrix'),
    depthMixin = require('./mixin/depth'),
    mouseMixin = require('./mixin/mouse');

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
    key: 'createProgram',
    value: function createProgram() {
      return this.context.createProgram();
    }
  }, {
    key: 'useShader',
    value: function useShader(shader) {
      var shaderProgram = shader.getProgram();

      this.context.useProgram(shaderProgram);
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
    value: function render(shader, normal, rotation, position, perspective) {
      var normalMatrix = normal.getMatrix(),
          rotationMatrix = rotation.getMatrix(),
          positionMatrix = position.getMatrix(),
          perspectiveMatrix = perspective.getMatrix(),
          normalMatrixUniformLocation = shader.getNormalMatrixUniformLocation(),
          rotationMatrixUniformLocation = shader.getRotationMatrixUniformLocation(),
          positionMatrixUniformLocation = shader.getPositionMatrixUniformLocation(),
          perspectiveMatrixUniformLocation = shader.getPerspectiveMatrixUniformLocation();

      this.applyMatrix(normalMatrixUniformLocation, normalMatrix);
      this.applyMatrix(rotationMatrixUniformLocation, rotationMatrix);
      this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
      this.applyMatrix(perspectiveMatrixUniformLocation, perspectiveMatrix);

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

Object.assign(Canvas.prototype, textureMixin);
Object.assign(Canvas.prototype, bufferMixin);
Object.assign(Canvas.prototype, colourMixin);
Object.assign(Canvas.prototype, matrixMixin);
Object.assign(Canvas.prototype, depthMixin);
Object.assign(Canvas.prototype, mouseMixin);

module.exports = Canvas;

},{"./mixin/buffer":12,"./mixin/colour":13,"./mixin/depth":14,"./mixin/matrix":15,"./mixin/mouse":16,"./mixin/texture":17,"./utilities/dom":28}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Coordinates2D = function () {
  function Coordinates2D(x, y) {
    _classCallCheck(this, Coordinates2D);

    this.x = x;
    this.y = y;
  }

  _createClass(Coordinates2D, [{
    key: 'getX',
    value: function getX() {
      return this.x;
    }
  }, {
    key: 'getY',
    value: function getY() {
      return this.y;
    }
  }, {
    key: 'setX',
    value: function setX(x) {
      this.x = x;
    }
  }, {
    key: 'setY',
    value: function setY(y) {
      this.y = y;
    }
  }, {
    key: 'plus',
    value: function plus(coordinates2D) {
      var x = coordinates2D.getX(),
          y = coordinates2D.getY();

      x = this.x + x;
      y = this.y + y;

      return new Coordinates2D(x, y);
    }
  }, {
    key: 'minus',
    value: function minus(coordinates2D) {
      var x = coordinates2D.getX(),
          y = coordinates2D.getY();

      x = this.x - x;
      y = this.y - y;

      return new Coordinates2D(x, y);
    }
  }, {
    key: 'multipliedBy',
    value: function multipliedBy(scalar) {
      var x = this.x * scalar,
          y = this.y * scalar;

      return new Coordinates2D(x, y);
    }
  }, {
    key: 'dividedBy',
    value: function dividedBy(scalar) {
      var x = this.x / scalar,
          y = this.y / scalar;

      return new Coordinates2D(x, y);
    }
  }, {
    key: 'toString',
    value: function toString() {
      var x = this.getX(),
          y = this.getY(),
          string = x + ',' + y;

      return string;
    }
  }]);

  return Coordinates2D;
}();

module.exports = Coordinates2D;

},{}],4:[function(require,module,exports){
'use strict';

module.exports = {
  intermediate: require('./examples/intermediate'),
  containerHouse: require('./examples/containerHouse'),
  schoonerCecilie: require('./examples/schoonerCecilie')
};

},{"./examples/containerHouse":5,"./examples/intermediate":6,"./examples/schoonerCecilie":11}],5:[function(require,module,exports){
'use strict';

var containerHouse = function containerHouse() {};

module.exports = containerHouse;

},{}],6:[function(require,module,exports){
'use strict';

var Canvas = require('../canvas'),
    App = require('./intermediate/app'),
    cubes = require('./intermediate/cubes'),
    ColourShader = require('../shader/colour'),
    TextureShader = require('../shader/texture');

var create = cubes.create;


var canvas = new Canvas();

canvas.enableDepthTesting();
canvas.enableDepthFunction();

function intermediate() {
  var colourShader = ColourShader.fromNothing(canvas),
      textureShader = TextureShader.fromNothing(canvas);

  create(colourShader, textureShader, canvas, function () {
    var app = new App(colourShader, textureShader, canvas);

    window.onresize = function () {
      app.resize();

      app.render(colourShader, textureShader);
    };

    app.resize();

    app.render(colourShader, textureShader);

    app.addMouseEventHandlers();
  });
}

module.exports = intermediate;

},{"../canvas":2,"../shader/colour":25,"../shader/texture":26,"./intermediate/app":7,"./intermediate/cubes":10}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var angles = require('../../angles'),
    zoom = require('../../zoom'),
    Normal = require('../../normal'),
    Rotation = require('../../rotation'),
    Position = require('../../position'),
    Perspective = require('../../perspective'),
    MouseEvents = require('../../mouseEvents');

var App = function () {
  function App(colourShader, textureShader, canvas) {
    _classCallCheck(this, App);

    this.colourShader = colourShader;
    this.textureShader = textureShader;
    this.canvas = canvas;
  }

  _createClass(App, [{
    key: 'addMouseEventHandlers',
    value: function addMouseEventHandlers() {
      var mouseEvents = MouseEvents.fromNothing(this.canvas),
          mouseUpEventHandler = this.mouseUpEventHandler.bind(this),
          mouseDownEventHandler = this.mouseDownEventHandler.bind(this),
          mouseMoveEventHandler = this.mouseMoveEventHandler.bind(this),
          mouseWheelEventHandler = this.mouseWheelEventHandler.bind(this);

      mouseEvents.addMouseUpEventHandler(mouseUpEventHandler);
      mouseEvents.addMouseDownEventHandler(mouseDownEventHandler);
      mouseEvents.addMouseMoveEventHandler(mouseMoveEventHandler);
      mouseEvents.addMouseWheelEventHandler(mouseWheelEventHandler);
    }
  }, {
    key: 'mouseUpEventHandler',
    value: function mouseUpEventHandler(mouseCoordinates) {
      angles.mouseUpEventHandler(mouseCoordinates);
    }
  }, {
    key: 'mouseDownEventHandler',
    value: function mouseDownEventHandler(mouseCoordinates) {
      angles.mouseDownEventHandler(mouseCoordinates);
    }
  }, {
    key: 'mouseMoveEventHandler',
    value: function mouseMoveEventHandler(mouseCoordinates) {
      angles.mouseMoveEventHandler(mouseCoordinates);

      this.render();
    }
  }, {
    key: 'mouseWheelEventHandler',
    value: function mouseWheelEventHandler(delta) {
      zoom.mouseWheelEventHandler(delta);

      this.render();
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

      console.log(height);
    }
  }, {
    key: 'render',
    value: function render() {
      var xAxisAngle = angles.getXAxisAngle(),
          yAxisAngle = angles.getYAxisAngle(),
          distance = zoom.getDistance(),
          width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          xAngle = xAxisAngle,
          ///
      zAngle = yAxisAngle,
          ///
      zCoordinate = -Math.max(10, distance),
          ///
      perspective = Perspective.fromWidthAndHeight(width, height),
          rotation = Rotation.fromXAngleAndZAngle(xAngle, zAngle),
          position = Position.fromZCoordinate(zCoordinate),
          normal = Normal.fromRotation(rotation);

      this.drawElements(normal, rotation, position, perspective);
    }
  }, {
    key: 'drawElements',
    value: function drawElements(normal, rotation, position, perspective) {
      this.canvas.clear();

      this.canvas.useShader(this.colourShader);

      this.colourShader.bind(this.canvas);

      this.colourShader.activateTexture(this.canvas);

      this.canvas.render(this.colourShader, normal, rotation, position, perspective);

      this.canvas.useShader(this.textureShader);

      this.textureShader.bind(this.canvas);

      this.textureShader.activateTexture(this.canvas);

      this.canvas.render(this.textureShader, normal, rotation, position, perspective);
    }
  }]);

  return App;
}();

module.exports = App;

},{"../../angles":1,"../../mouseEvents":19,"../../normal":20,"../../perspective":21,"../../position":22,"../../rotation":23,"../../zoom":31}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vec3 = require('../../../vec3'),
    arrayUtilities = require('../../../utilities/array');

var divide = arrayUtilities.divide,
    flatten = arrayUtilities.flatten;


var vertexColourData = [1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0],
    vertexPositionData = [-1.0, -1.0, +1.0, +1.0, -1.0, +1.0, +1.0, +1.0, +1.0, -1.0, +1.0, +1.0, -1.0, -1.0, -1.0, -1.0, +1.0, -1.0, +1.0, +1.0, -1.0, +1.0, -1.0, -1.0, -1.0, +1.0, -1.0, -1.0, +1.0, +1.0, +1.0, +1.0, +1.0, +1.0, +1.0, -1.0, -1.0, -1.0, -1.0, +1.0, -1.0, -1.0, +1.0, -1.0, +1.0, -1.0, -1.0, +1.0, +1.0, -1.0, -1.0, +1.0, +1.0, -1.0, +1.0, +1.0, +1.0, +1.0, -1.0, +1.0, -1.0, -1.0, -1.0, -1.0, -1.0, +1.0, -1.0, +1.0, +1.0, -1.0, +1.0, -1.0],
    vertexNormalData = [0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0],
    vertexIndexData = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];

var ColourCube = function () {
  function ColourCube() {
    _classCallCheck(this, ColourCube);
  }

  _createClass(ColourCube, null, [{
    key: 'getVertexPositionData',
    value: function getVertexPositionData(offsetPosition) {
      var vertexPositions = divide(vertexPositionData, 3); ///

      vertexPositions = vertexPositions.map(function (vertexPosition) {
        var offsetVertexPosition = vec3.add(vertexPosition, offsetPosition);

        return offsetVertexPosition;
      });

      return flatten(vertexPositions);
    }
  }, {
    key: 'getVertexNormalData',
    value: function getVertexNormalData() {
      return vertexNormalData;
    }
  }, {
    key: 'getVertexColourData',
    value: function getVertexColourData() {
      return vertexColourData;
    }
  }, {
    key: 'getVertexIndexData',
    value: function getVertexIndexData() {
      return vertexIndexData;
    }
  }]);

  return ColourCube;
}();

module.exports = ColourCube;

},{"../../../utilities/array":27,"../../../vec3":30}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vec3 = require('../../../vec3'),
    arrayUtilities = require('../../../utilities/array');

var divide = arrayUtilities.divide,
    flatten = arrayUtilities.flatten;


var textureCoordinateData = [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0],
    vertexPositionData = [-1.0, -1.0, +1.0, +1.0, -1.0, +1.0, +1.0, +1.0, +1.0, -1.0, +1.0, +1.0, -1.0, -1.0, -1.0, -1.0, +1.0, -1.0, +1.0, +1.0, -1.0, +1.0, -1.0, -1.0, -1.0, +1.0, -1.0, -1.0, +1.0, +1.0, +1.0, +1.0, +1.0, +1.0, +1.0, -1.0, -1.0, -1.0, -1.0, +1.0, -1.0, -1.0, +1.0, -1.0, +1.0, -1.0, -1.0, +1.0, +1.0, -1.0, -1.0, +1.0, +1.0, -1.0, +1.0, +1.0, +1.0, +1.0, -1.0, +1.0, -1.0, -1.0, -1.0, -1.0, -1.0, +1.0, -1.0, +1.0, +1.0, -1.0, +1.0, -1.0],
    vertexNormalData = [0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0],
    vertexIndexData = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];

var TextureCube = function () {
  function TextureCube() {
    _classCallCheck(this, TextureCube);
  }

  _createClass(TextureCube, null, [{
    key: 'getVertexPositionData',
    value: function getVertexPositionData(offsetPosition) {
      var vertexPositions = divide(vertexPositionData, 3); ///

      vertexPositions = vertexPositions.map(function (vertexPosition) {
        var offsetVertexPosition = vec3.add(vertexPosition, offsetPosition);

        return offsetVertexPosition;
      });

      return flatten(vertexPositions);
    }
  }, {
    key: 'getVertexNormalData',
    value: function getVertexNormalData() {
      return vertexNormalData;
    }
  }, {
    key: 'getTextureCoordinateData',
    value: function getTextureCoordinateData() {
      return textureCoordinateData;
    }
  }, {
    key: 'getVertexIndexData',
    value: function getVertexIndexData() {
      return vertexIndexData;
    }
  }]);

  return TextureCube;
}();

module.exports = TextureCube;

},{"../../../utilities/array":27,"../../../vec3":30}],10:[function(require,module,exports){
'use strict';

var necessary = require('necessary');

var ColourCube = require('./cube/colour'),
    TextureCube = require('./cube/texture'),
    imagesUtilities = require('../../utilities/images');

var arrayUtilities = necessary.arrayUtilities,
    asynchronousUtilities = necessary.asynchronousUtilities,
    sequence = asynchronousUtilities.sequence,
    preload = imagesUtilities.preload,
    first = arrayUtilities.first;


function create(colourShader, textureShader, canvas, done) {
      var callbacks = [createColourCubeCallback, createTextureCubeCallback],
          context = {
            colourShader: colourShader,
            textureShader: textureShader,
            canvas: canvas
      };

      sequence(callbacks, done, context);
}

module.exports = {
      create: create
};

function createColourCubeCallback(next, done, context) {
      var colourShader = context.colourShader,
          canvas = context.canvas,
          offsetPosition = [-2, 0, 0];


      var vertexPositionData = ColourCube.getVertexPositionData(offsetPosition),
          vertexNormalData = ColourCube.getVertexNormalData(),
          vertexColourData = ColourCube.getVertexColourData(),
          vertexIndexData = ColourCube.getVertexIndexData();

      colourShader.createBuffers(vertexPositionData, vertexNormalData, vertexColourData, vertexIndexData, canvas);

      next();
}

function createTextureCubeCallback(next, done, context) {
      var textureShader = context.textureShader,
          canvas = context.canvas,
          sources = ['texture/bricks.jpg'];


      preload(sources, function (images) {
            var firstImage = first(images),
                offsetPosition = [+2, 0, 0],
                image = firstImage;

            var vertexPositionData = TextureCube.getVertexPositionData(offsetPosition),
                vertexNormalData = TextureCube.getVertexNormalData(),
                textureCoordinateData = TextureCube.getTextureCoordinateData(),
                vertexIndexData = TextureCube.getVertexIndexData();

            textureShader.createBuffers(vertexPositionData, vertexNormalData, textureCoordinateData, vertexIndexData, canvas);

            textureShader.createTexture(image, canvas);

            next();
      });
}

},{"../../utilities/images":29,"./cube/colour":8,"./cube/texture":9,"necessary":57}],11:[function(require,module,exports){
'use strict';

var schoonerCecilie = function schoonerCecilie() {};

module.exports = schoonerCecilie;

},{}],12:[function(require,module,exports){
'use strict';

function createAndBindElementBuffer(vertexIndexData) {
  var vertexIndexElementBuffer = this.createElementBuffer(vertexIndexData),
      vertexIndexDataLength = vertexIndexData.length,
      count = vertexIndexDataLength; ///

  this.bindElementBuffer(vertexIndexElementBuffer);

  return count;
}

function createElementBuffer(data) {
  var _context = this.context,
      ELEMENT_ARRAY_BUFFER = _context.ELEMENT_ARRAY_BUFFER,
      STATIC_DRAW = _context.STATIC_DRAW,
      target = ELEMENT_ARRAY_BUFFER,
      usage = STATIC_DRAW,
      elementBuffer = this.context.createBuffer(),
      uint16Array = new Uint16Array(data);


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
  createAndBindElementBuffer: createAndBindElementBuffer,
  createElementBuffer: createElementBuffer,
  bindElementBuffer: bindElementBuffer,
  createBuffer: createBuffer,
  bindBuffer: bindBuffer
};

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
'use strict';

function applyMatrix(uniformLocation, matrix) {
  var transpose = false; ///

  this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
}

module.exports = {
  applyMatrix: applyMatrix
};

},{}],16:[function(require,module,exports){
'use strict';

var MouseCoordinates = require('../mouseCoordinates');

var horizontalOffset = 512,
    ///
verticalOffset = 320; ///

function mouseCoordinatesFromEvent(event) {
  var domElementBoundingClientRect = this.domElement.getBoundingClientRect(),
      x = +(event.clientX - domElementBoundingClientRect.left - horizontalOffset),
      ///
  y = -(event.clientY - domElementBoundingClientRect.top - verticalOffset),
      ///
  mouseCoordinates = new MouseCoordinates(x, y);

  return mouseCoordinates;
}

module.exports = {
  mouseCoordinatesFromEvent: mouseCoordinatesFromEvent
};

},{"../mouseCoordinates":18}],17:[function(require,module,exports){
'use strict';

function createTexture(image) {
  var _context = this.context,
      TEXTURE_2D = _context.TEXTURE_2D,
      RGBA = _context.RGBA,
      UNSIGNED_BYTE = _context.UNSIGNED_BYTE,
      TEXTURE_WRAP_S = _context.TEXTURE_WRAP_S,
      TEXTURE_WRAP_T = _context.TEXTURE_WRAP_T,
      CLAMP_TO_EDGE = _context.CLAMP_TO_EDGE,
      TEXTURE_MIN_FILTER = _context.TEXTURE_MIN_FILTER,
      LINEAR = _context.LINEAR,
      target = TEXTURE_2D,
      internalFormat = RGBA,
      format = RGBA,
      type = UNSIGNED_BYTE,
      texture = this.context.createTexture(),
      level = 0;


  this.context.bindTexture(target, texture);

  this.context.texImage2D(target, level, internalFormat, format, type, image);

  this.context.texParameteri(target, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
  this.context.texParameteri(target, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
  this.context.texParameteri(target, TEXTURE_MIN_FILTER, LINEAR);
}

function activateTexture(target) {
  this.context.activeTexture(target);
}

module.exports = {
  createTexture: createTexture,
  activateTexture: activateTexture
};

},{}],18:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Coordinates2D = require('./coordinates2D');

var MouseCoordinates = function (_Coordinates2D) {
  _inherits(MouseCoordinates, _Coordinates2D);

  function MouseCoordinates() {
    _classCallCheck(this, MouseCoordinates);

    return _possibleConstructorReturn(this, (MouseCoordinates.__proto__ || Object.getPrototypeOf(MouseCoordinates)).apply(this, arguments));
  }

  return MouseCoordinates;
}(Coordinates2D);

module.exports = MouseCoordinates;

},{"./coordinates2D":3}],19:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MOUSE_UP = 'MOUSE_UP',
    MOUSE_DOWN = 'MOUSE_DOWN',
    MOUSE_MOVE = 'MOUSE_MOVE',
    MOUSE_WHEEL = 'MOUSE_WHEEL';

var MouseEvents = function () {
  function MouseEvents(canvas) {
    _classCallCheck(this, MouseEvents);

    this.canvas = canvas;

    this.handlers = {};

    var mouseEventTypes = [MOUSE_UP, MOUSE_DOWN, MOUSE_MOVE, MOUSE_WHEEL];

    mouseEventTypes.forEach(function (mouseEventType) {
      this.handlers[mouseEventType] = [];
    }.bind(this));

    this.addEventHandler(canvas, 'mouseup', function (event) {
      this.onMouseEvent(MOUSE_UP, event);
    }.bind(this));
    this.addEventHandler(canvas, 'mousedown', function (event) {
      this.onMouseEvent(MOUSE_DOWN, event);
    }.bind(this));
    this.addEventHandler(canvas, 'mousemove', function (event) {
      this.onMouseEvent(MOUSE_MOVE, event);
    }.bind(this));
    this.addEventHandler(canvas, 'mousewheel', function (event) {
      this.onMouseWheelEvent(event);
    }.bind(this));
    this.addEventHandler(canvas, 'DOMMouseScroll', function (event) {
      this.onMouseWheelEvent(event);
    }.bind(this));
  }

  _createClass(MouseEvents, [{
    key: 'addMouseUpEventHandler',
    value: function addMouseUpEventHandler(mouseUpEventHandler) {
      this.addMouseEventHandler(MOUSE_UP, mouseUpEventHandler);
    }
  }, {
    key: 'addMouseDownEventHandler',
    value: function addMouseDownEventHandler(mouseDownEventHandler) {
      this.addMouseEventHandler(MOUSE_DOWN, mouseDownEventHandler);
    }
  }, {
    key: 'addMouseMoveEventHandler',
    value: function addMouseMoveEventHandler(mouseMoveEventHandler) {
      this.addMouseEventHandler(MOUSE_MOVE, mouseMoveEventHandler);
    }
  }, {
    key: 'addMouseWheelEventHandler',
    value: function addMouseWheelEventHandler(mouseWheelEventHandler) {
      this.addMouseEventHandler(MOUSE_WHEEL, mouseWheelEventHandler);
    }
  }, {
    key: 'addEventHandler',
    value: function addEventHandler(canvas, type, handler) {
      var domElement = canvas.getDOMElement();

      domElement.addEventListener(type, function (event) {
        event.preventDefault();

        handler(event);
      });
    }
  }, {
    key: 'onMouseEvent',
    value: function onMouseEvent(mouseEventType, event) {
      var mouseEventHandlers = this.handlers[mouseEventType],
          mouseCoordinates = this.canvas.mouseCoordinatesFromEvent(event);

      mouseEventHandlers.forEach(function (mouseEventHandler) {
        mouseEventHandler(mouseCoordinates);
      });
    }
  }, {
    key: 'onMouseWheelEvent',
    value: function onMouseWheelEvent(event) {
      var mouseWheelEventType = MOUSE_WHEEL,
          mouseWheelEventHandlers = this.handlers[mouseWheelEventType],
          delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail)); ///

      mouseWheelEventHandlers.forEach(function (mouseWheelEventHandler) {
        mouseWheelEventHandler(delta);
      });
    }
  }, {
    key: 'addMouseEventHandler',
    value: function addMouseEventHandler(mouseEventType, mouseEventHandler) {
      var mouseEventHandlers = this.handlers[mouseEventType];

      mouseEventHandlers.push(mouseEventHandler);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var mouseEvents = new MouseEvents(canvas);

      return mouseEvents;
    }
  }]);

  return MouseEvents;
}();

module.exports = MouseEvents;

},{}],20:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var Normal = function () {
  function Normal(matrix) {
    _classCallCheck(this, Normal);

    this.matrix = matrix;
  }

  _createClass(Normal, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }], [{
    key: 'fromRotation',
    value: function fromRotation(rotation) {
      var matrix = mat4.create(),
          rotationMatrix = rotation.getMatrix();

      mat4.invert(matrix, rotationMatrix);
      mat4.transpose(matrix, matrix);

      var normal = new Normal(matrix);

      return normal;
    }
  }]);

  return Normal;
}();

module.exports = Normal;

},{"gl-mat4":42}],21:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultFieldOfView = 45 * Math.PI / 180,
    defaultZNear = 0.1,
    defaultZFar = 100.0;

var Perspective = function () {
  function Perspective(matrix) {
    _classCallCheck(this, Perspective);

    this.matrix = matrix;
  }

  _createClass(Perspective, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }], [{
    key: 'fromWidthAndHeight',
    value: function fromWidthAndHeight(width, height) {
      var aspectRatio = width / height,
          fieldOfView = defaultFieldOfView,
          zNear = defaultZNear,
          zFar = defaultZFar,
          matrix = mat4.create();

      mat4.perspective(matrix, fieldOfView, aspectRatio, zNear, zFar);

      var perspective = new Perspective(matrix);

      return perspective;
    }
  }]);

  return Perspective;
}();

module.exports = Perspective;

},{"gl-mat4":42}],22:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultXCoordinate = +0.0,
    defaultYCoordinate = +0.0,
    defaultZCoordinate = -6.0;

var Position = function () {
  function Position(matrix) {
    _classCallCheck(this, Position);

    this.matrix = matrix;
  }

  _createClass(Position, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }], [{
    key: 'fromZCoordinate',
    value: function fromZCoordinate(zCoordinate) {
      var xCoordinate = defaultXCoordinate,
          yCoordinate = defaultYCoordinate,
          coordinateVector = [xCoordinate, yCoordinate, zCoordinate],
          matrix = mat4.create();

      mat4.translate(matrix, matrix, coordinateVector);

      var position = new Position(matrix);

      return position;
    }
  }]);

  return Position;
}();

module.exports = Position;

},{"gl-mat4":42}],23:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultXAngle = 0.0,
    defaultYAngle = 0.0,
    defaultZAngle = 0.0,
    xAxisVectorArray = [1, 0, 0],
    yAxisVectorArray = [0, 1, 0],
    zAxisVectorArray = [0, 0, 1];

var Rotation = function () {
  function Rotation(matrix) {
    _classCallCheck(this, Rotation);

    this.matrix = matrix;
  }

  _createClass(Rotation, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var xAngle = defaultXAngle,
          yAngle = defaultYAngle,
          zAngle = defaultZAngle,
          rotation = Rotation.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle);

      return rotation;
    }
  }, {
    key: 'fromXAngle',
    value: function fromXAngle(xAngle) {
      var yAngle = defaultYAngle,
          zAngle = defaultZAngle,
          rotation = Rotation.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle);

      return rotation;
    }
  }, {
    key: 'fromXAngleAndYAngle',
    value: function fromXAngleAndYAngle(xAngle, yAngle) {
      var zAngle = defaultZAngle,
          rotation = Rotation.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle);

      return rotation;
    }
  }, {
    key: 'fromXAngleAndZAngle',
    value: function fromXAngleAndZAngle(xAngle, zAngle) {
      var yAngle = defaultYAngle,
          rotation = Rotation.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle);

      return rotation;
    }
  }, {
    key: 'fromXAngleYAngleAndZAngle',
    value: function fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle) {
      var matrix = mat4.create();

      mat4.rotate(matrix, matrix, xAngle, xAxisVectorArray);
      mat4.rotate(matrix, matrix, yAngle, yAxisVectorArray);
      mat4.rotate(matrix, matrix, zAngle, zAxisVectorArray);

      var rotation = new Rotation(matrix);

      return rotation;
    }
  }]);

  return Rotation;
}();

module.exports = Rotation;

},{"gl-mat4":42}],24:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var normalMatrixName = 'uNormalMatrix',
    rotationMatrixName = 'uRotationMatrix',
    positionMatrixName = 'uPositionMatrix',
    perspectiveMatrixName = 'uPerspectiveMatrix',
    vertexPositionAttributeName = 'aVertexPosition',
    vertexNormalAttributeName = 'aVertexNormal',
    calculateLightingSource = '\n\n        uniform mat4 ' + normalMatrixName + ';\n\n        attribute vec3 ' + vertexNormalAttributeName + ';\n\n        vec3 ambientLight = vec3(0.3, 0.3, 0.3),\n             directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(0.85, 0.8, 0.75));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ' + normalMatrixName + ' * vec4(' + vertexNormalAttributeName + ', 1.0);            \n\n          float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n          \n          vec3 lighting = ambientLight + (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      ',
    calculatePositionSource = '\n\n        uniform mat4 ' + rotationMatrixName + ',\n                     ' + positionMatrixName + ',\n                     ' + perspectiveMatrixName + ';\n        \n        attribute vec4 ' + vertexPositionAttributeName + ';\n\n        vec4 calculatePosition() {\n          vec4 position = ' + perspectiveMatrixName + ' * ' + positionMatrixName + ' * ' + rotationMatrixName + ' * ' + vertexPositionAttributeName + ';\n          \n          return position;\n        }\n        \n      ';

var Shader = function () {
  function Shader(program, canvas) {
    _classCallCheck(this, Shader);

    this.program = program;
    this.normalMatrixUniformLocation = canvas.getUniformLocation(program, normalMatrixName);
    this.rotationMatrixUniformLocation = canvas.getUniformLocation(program, rotationMatrixName);
    this.positionMatrixUniformLocation = canvas.getUniformLocation(program, positionMatrixName);
    this.perspectiveMatrixUniformLocation = canvas.getUniformLocation(program, perspectiveMatrixName);
    this.vertexPositionAttributeLocation = canvas.getAttributeLocation(program, vertexPositionAttributeName);
    this.vertexNormalAttributeLocation = canvas.getAttributeLocation(program, vertexNormalAttributeName);
  }

  _createClass(Shader, [{
    key: 'getCount',
    value: function getCount() {
      return this.count;
    }
  }, {
    key: 'getProgram',
    value: function getProgram() {
      return this.program;
    }
  }, {
    key: 'getNormalMatrixUniformLocation',
    value: function getNormalMatrixUniformLocation() {
      return this.normalMatrixUniformLocation;
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
    key: 'getPerspectiveMatrixUniformLocation',
    value: function getPerspectiveMatrixUniformLocation() {
      return this.perspectiveMatrixUniformLocation;
    }
  }, {
    key: 'createVertexPositionBuffer',
    value: function createVertexPositionBuffer(vertexPositionData, canvas) {
      this.vertexPositionBuffer = canvas.createBuffer(vertexPositionData);
    }
  }, {
    key: 'createVertexNormalBuffer',
    value: function createVertexNormalBuffer(vertexNormalData, canvas) {
      this.vertexNormalBuffer = canvas.createBuffer(vertexNormalData);
    }
  }, {
    key: 'bind',
    value: function bind(canvas) {
      this.bindVertexNormalBuffer(canvas);
      this.bindVertexPositionBuffer(canvas);
    }
  }, {
    key: 'bindVertexNormalBuffer',
    value: function bindVertexNormalBuffer(canvas) {
      var vertexNormalComponents = 3;

      canvas.bindBuffer(this.vertexNormalBuffer, this.vertexNormalAttributeLocation, vertexNormalComponents);
    }
  }, {
    key: 'bindVertexPositionBuffer',
    value: function bindVertexPositionBuffer(canvas) {
      var vertexPositionComponents = 3;

      canvas.bindBuffer(this.vertexPositionBuffer, this.vertexPositionAttributeLocation, vertexPositionComponents);
    }
  }, {
    key: 'setCount',
    value: function setCount(count) {
      this.count = count;
    }
  }], [{
    key: 'createVertexShader',
    value: function createVertexShader(vertexShaderSource, canvas) {
      var context = canvas.getContext(),
          VERTEX_SHADER = context.VERTEX_SHADER,
          type = VERTEX_SHADER,
          vertexShader = createShader(type, vertexShaderSource, context);


      return vertexShader;
    }
  }, {
    key: 'createFragmentShader',
    value: function createFragmentShader(fragmentShaderSource, canvas) {
      var context = canvas.getContext(),
          FRAGMENT_SHADER = context.FRAGMENT_SHADER,
          type = FRAGMENT_SHADER,
          vertexShader = createShader(type, fragmentShaderSource, context);


      return vertexShader;
    }
  }, {
    key: 'fromProgram',
    value: function fromProgram(Class, program, canvas) {
      var shader = new Class(program, canvas);

      return shader;
    }
  }]);

  return Shader;
}();

Object.assign(Shader, {
  calculateLightingSource: calculateLightingSource,
  calculatePositionSource: calculatePositionSource
});

module.exports = Shader;

function createShader(type, shaderSource, context) {
  var COMPILE_STATUS = context.COMPILE_STATUS,
      pname = COMPILE_STATUS,
      shader = context.createShader(type);


  context.shaderSource(shader, shaderSource);

  context.compileShader(shader);

  var compileStatus = context.getShaderParameter(shader, pname);

  if (!compileStatus) {
    var shaderInfoLog = context.getShaderInfoLog(shader);

    throw new Error('Unable to create the shader.');
  }

  return shader;
}

},{}],25:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shader = require('../shader');

var calculateLightingSource = Shader.calculateLightingSource,
    calculatePositionSource = Shader.calculatePositionSource;


var vertexColourAttributeName = 'aVertexColour';

var vertexShaderSource = '\n    \n        attribute vec4 ' + vertexColourAttributeName + ';\n\n        ' + calculateLightingSource + '\n      \n        ' + calculatePositionSource + '\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ' + vertexColourAttributeName + ';                    \n        }\n        \n      ',
    fragmentShaderSource = '\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ';

var ColourShader = function (_Shader) {
  _inherits(ColourShader, _Shader);

  function ColourShader(program, canvas) {
    _classCallCheck(this, ColourShader);

    var _this = _possibleConstructorReturn(this, (ColourShader.__proto__ || Object.getPrototypeOf(ColourShader)).call(this, program, canvas));

    _this.vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName);
    return _this;
  }

  _createClass(ColourShader, [{
    key: 'createBuffers',
    value: function createBuffers(offsetVertexPositionData, vertexNormalData, vertexColourData, vertexIndexData, canvas) {
      this.createVertexPositionBuffer(offsetVertexPositionData, canvas);
      this.createVertexNormalBuffer(vertexNormalData, canvas);
      this.createVertexColourBuffer(vertexColourData, canvas);

      var count = canvas.createAndBindElementBuffer(vertexIndexData);

      this.setCount(count);
    }
  }, {
    key: 'createVertexColourBuffer',
    value: function createVertexColourBuffer(vertexColourData, canvas) {
      this.vertexColourBuffer = canvas.createBuffer(vertexColourData);
    }
  }, {
    key: 'bind',
    value: function bind(canvas) {
      this.bindVertexColourBuffer(canvas);

      _get(ColourShader.prototype.__proto__ || Object.getPrototypeOf(ColourShader.prototype), 'bind', this).call(this, canvas);
    }
  }, {
    key: 'bindVertexColourBuffer',
    value: function bindVertexColourBuffer(canvas) {
      var vertexColourComponents = 4;

      canvas.bindBuffer(this.vertexColourBuffer, this.vertexColourAttributeLocation, vertexColourComponents);
    }
  }, {
    key: 'activateTexture',
    value: function activateTexture(canvas) {} ///

  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var context = canvas.getContext(),
          program = canvas.createProgram(),
          vertexShader = Shader.createVertexShader(vertexShaderSource, canvas),
          fragmentShader = Shader.createFragmentShader(fragmentShaderSource, canvas);

      context.attachShader(program, vertexShader);
      context.attachShader(program, fragmentShader);
      context.linkProgram(program);

      var colourShader = Shader.fromProgram(ColourShader, program, canvas);

      return colourShader;
    }
  }]);

  return ColourShader;
}(Shader);

module.exports = ColourShader;

},{"../shader":24}],26:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shader = require('../shader');

var calculateLightingSource = Shader.calculateLightingSource,
    calculatePositionSource = Shader.calculatePositionSource;


var samplerName = 'uSampler',
    textureCoordinateAttributeName = 'aTextureCoordinate';

var vertexShaderSource = '\n        \n        attribute vec2 ' + textureCoordinateAttributeName + ';\n        \n        ' + calculateLightingSource + '\n      \n        ' + calculatePositionSource + '\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ' + textureCoordinateAttributeName + ';\n        }\n        \n      ',
    fragmentShaderSource = '\n        \n        uniform sampler2D ' + samplerName + ';\n\n        varying highp vec3 vLighting;\n                   \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          highp vec4 texelColour = texture2D(' + samplerName + ', vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      ';

var TextureShader = function (_Shader) {
  _inherits(TextureShader, _Shader);

  function TextureShader(program, canvas) {
    _classCallCheck(this, TextureShader);

    var _this = _possibleConstructorReturn(this, (TextureShader.__proto__ || Object.getPrototypeOf(TextureShader)).call(this, program, canvas));

    _this.samplerUniformLocation = canvas.getUniformLocation(program, samplerName);
    _this.textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, textureCoordinateAttributeName);
    return _this;
  }

  _createClass(TextureShader, [{
    key: 'createBuffers',
    value: function createBuffers(offsetVertexPositionData, vertexNormalData, textureCoordinateData, vertexIndexData, canvas) {
      this.createVertexPositionBuffer(offsetVertexPositionData, canvas);
      this.createVertexNormalBuffer(vertexNormalData, canvas);
      this.createTextureCoordinateBuffer(textureCoordinateData, canvas);

      var count = canvas.createAndBindElementBuffer(vertexIndexData);

      this.setCount(count);
    }
  }, {
    key: 'createTextureCoordinateBuffer',
    value: function createTextureCoordinateBuffer(vertexCoordinateData, canvas) {
      this.textureCoordinateBuffer = canvas.createBuffer(vertexCoordinateData);
    }
  }, {
    key: 'bind',
    value: function bind(canvas) {
      this.bindTextureCoordinateBuffer(canvas);

      _get(TextureShader.prototype.__proto__ || Object.getPrototypeOf(TextureShader.prototype), 'bind', this).call(this, canvas);
    }
  }, {
    key: 'bindTextureCoordinateBuffer',
    value: function bindTextureCoordinateBuffer(canvas) {
      var textureCoordinateComponents = 2;

      canvas.bindBuffer(this.textureCoordinateBuffer, this.textureCoordinateAttributeLocation, textureCoordinateComponents);
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
          uSamplerUniformLocationIntegerValue = 0;


      canvas.activateTexture(target);

      canvas.setUniformLocationIntegerValue(this.samplerUniformLocation, uSamplerUniformLocationIntegerValue);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var context = canvas.getContext(),
          program = canvas.createProgram(),
          vertexShader = Shader.createVertexShader(vertexShaderSource, canvas),
          fragmentShader = Shader.createFragmentShader(fragmentShaderSource, canvas);

      context.attachShader(program, vertexShader);
      context.attachShader(program, fragmentShader);
      context.linkProgram(program);

      var textureShader = Shader.fromProgram(TextureShader, program, canvas);

      return textureShader;
    }
  }]);

  return TextureShader;
}(Shader);

module.exports = TextureShader;

},{"../shader":24}],27:[function(require,module,exports){
'use strict';

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities;


function divide(data, divisor) {
  var arrays = [],
      dataLength = data.length,
      arraysLength = dataLength / divisor;

  for (var i = 0; i < arraysLength; i++) {
    var array = [],
        offset = i * divisor;

    for (var j = 0; j < divisor; j++) {
      array[j] = data[j + offset];
    }

    arrays[i] = array;
  }

  return arrays;
}

function flatten(arrays) {
  var data = arrays.reduce(function (data, array) {
    data = data.concat(array);

    return data;
  }, []);

  return data;
}

module.exports = Object.assign(arrayUtilities, {
  divide: divide,
  flatten: flatten
});

},{"necessary":57}],28:[function(require,module,exports){
'use strict';

function domElementFromSelector(selector) {
  var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

module.exports = {
  domElementFromSelector: domElementFromSelector
};

},{}],29:[function(require,module,exports){
'use strict';

var necessary = require('necessary');

var asynchronousUtilities = necessary.asynchronousUtilities,
    repeatedly = asynchronousUtilities.repeatedly;


function preload(sources, callback) {
  var images = [],
      length = sources.length; ///

  repeatedly(function (next, done, context, index) {
    var source = sources[index],
        image = new Image();

    images[index] = image;

    image.onload = next; ///

    image.src = source; ///
  }, length, done);

  function done() {
    callback(images);
  }
}

module.exports = {
  preload: preload
};

},{"necessary":57}],30:[function(require,module,exports){
'use strict';

function add(array1, array2) {
  var array = array1.map(function (value1, index) {
    var value2 = array2[index],
        value = value1 + value2;

    return value;
  });

  return array;
}

module.exports = {
  add: add
};

},{}],31:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INITIAL_DISTANCE = 10;

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
      this.distance += delta;
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var distance = INITIAL_DISTANCE,
          zoom = new Zoom(distance);

      return zoom;
    }
  }]);

  return Zoom;
}();

var zoom = Zoom.fromNothing();

module.exports = zoom;

},{}],32:[function(require,module,exports){

},{}],33:[function(require,module,exports){
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
},{}],34:[function(require,module,exports){
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
},{}],35:[function(require,module,exports){
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
},{}],36:[function(require,module,exports){
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
},{}],37:[function(require,module,exports){
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
},{}],38:[function(require,module,exports){
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
},{}],39:[function(require,module,exports){
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
},{}],40:[function(require,module,exports){
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
},{}],41:[function(require,module,exports){
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
},{}],42:[function(require,module,exports){
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
},{"./adjoint":33,"./clone":34,"./copy":35,"./create":36,"./determinant":37,"./fromQuat":38,"./fromRotationTranslation":39,"./frustum":40,"./identity":41,"./invert":43,"./lookAt":44,"./multiply":45,"./ortho":46,"./perspective":47,"./perspectiveFromFieldOfView":48,"./rotate":49,"./rotateX":50,"./rotateY":51,"./rotateZ":52,"./scale":53,"./str":54,"./translate":55,"./transpose":56}],43:[function(require,module,exports){
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
},{}],44:[function(require,module,exports){
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
},{"./identity":41}],45:[function(require,module,exports){
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
},{}],46:[function(require,module,exports){
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
},{}],47:[function(require,module,exports){
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
},{}],48:[function(require,module,exports){
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


},{}],49:[function(require,module,exports){
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
},{}],50:[function(require,module,exports){
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
},{}],51:[function(require,module,exports){
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
},{}],52:[function(require,module,exports){
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
},{}],53:[function(require,module,exports){
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
},{}],54:[function(require,module,exports){
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
},{}],55:[function(require,module,exports){
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
},{}],56:[function(require,module,exports){
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
},{}],57:[function(require,module,exports){
'use strict';

module.exports = {
  pathUtilities: require('./lib/utilities/path'),
  arrayUtilities: require('./lib/utilities/array'),
  fileSystemUtilities: require('./lib/utilities/fileSystem'),
  asynchronousUtilities: require('./lib/utilities/asynchronous')
};

},{"./lib/utilities/array":58,"./lib/utilities/asynchronous":59,"./lib/utilities/fileSystem":60,"./lib/utilities/path":61}],58:[function(require,module,exports){
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
  backwardsForEach(array, function (element, index) {
    var passed = test(element, index);

    if (!passed) {
      var start = index,
          ///
      deleteCount = 1;

      array.splice(start, deleteCount);
    }
  });
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
  var found = array.some(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      var start = index,
          ///
      deleteCount = 1;

      array.splice(start, deleteCount);

      return true;
    }
  });

  return found;
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

},{}],59:[function(require,module,exports){
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

},{}],60:[function(require,module,exports){
'use strict';

var fs = require('fs');

function entryExists(absoluteFilePath) {
  return fs.existsSync(absoluteFilePath);
}

function fileExists(absoluteFilePath) {
  return fs.existsSync(absoluteFilePath);
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

function writeFile(absoluteFilePath, content) {
  fs.writeFileSync(absoluteFilePath, content);
}

function readFile(absoluteFilePath) {
  var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'utf8';

  var options = {
    encoding: encoding
  },
      content = fs.readFileSync(absoluteFilePath, options);

  return content;
}

function readDirectory(absoluteDirectoryPath) {
  var subEntryNames = fs.readdirSync(absoluteDirectoryPath);

  return subEntryNames;
}

module.exports = {
  entryExists: entryExists,
  fileExists: fileExists,
  isEntryDirectory: isEntryDirectory,
  isDirectoryEmpty: isDirectoryEmpty,
  writeFile: writeFile,
  readFile: readFile,
  readDirectory: readDirectory
};

},{"fs":32}],61:[function(require,module,exports){
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

},{"./array":58}]},{},[4])(4)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvYW5nbGVzLmpzIiwiZXM2L2NhbnZhcy5qcyIsImVzNi9jb29yZGluYXRlczJELmpzIiwiZXM2L2V4YW1wbGVzLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlLmpzIiwiZXM2L2V4YW1wbGVzL2ludGVybWVkaWF0ZS5qcyIsImVzNi9leGFtcGxlcy9pbnRlcm1lZGlhdGUvYXBwLmpzIiwiZXM2L2V4YW1wbGVzL2ludGVybWVkaWF0ZS9jdWJlL2NvbG91ci5qcyIsImVzNi9leGFtcGxlcy9pbnRlcm1lZGlhdGUvY3ViZS90ZXh0dXJlLmpzIiwiZXM2L2V4YW1wbGVzL2ludGVybWVkaWF0ZS9jdWJlcy5qcyIsImVzNi9leGFtcGxlcy9zY2hvb25lckNlY2lsaWUuanMiLCJlczYvbWl4aW4vYnVmZmVyLmpzIiwiZXM2L21peGluL2NvbG91ci5qcyIsImVzNi9taXhpbi9kZXB0aC5qcyIsImVzNi9taXhpbi9tYXRyaXguanMiLCJlczYvbWl4aW4vbW91c2UuanMiLCJlczYvbWl4aW4vdGV4dHVyZS5qcyIsImVzNi9tb3VzZUNvb3JkaW5hdGVzLmpzIiwiZXM2L21vdXNlRXZlbnRzLmpzIiwiZXM2L25vcm1hbC5qcyIsImVzNi9wZXJzcGVjdGl2ZS5qcyIsImVzNi9wb3NpdGlvbi5qcyIsImVzNi9yb3RhdGlvbi5qcyIsImVzNi9zaGFkZXIuanMiLCJlczYvc2hhZGVyL2NvbG91ci5qcyIsImVzNi9zaGFkZXIvdGV4dHVyZS5qcyIsImVzNi91dGlsaXRpZXMvYXJyYXkuanMiLCJlczYvdXRpbGl0aWVzL2RvbS5qcyIsImVzNi91dGlsaXRpZXMvaW1hZ2VzLmpzIiwiZXM2L3ZlYzMuanMiLCJlczYvem9vbS5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L2xpYi9fZW1wdHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9hZGpvaW50LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9jb3B5LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvZGV0ZXJtaW5hbnQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9mcm9tUXVhdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2Zyb21Sb3RhdGlvblRyYW5zbGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvZnJ1c3R1bS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2lkZW50aXR5LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9pbnZlcnQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9sb29rQXQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9tdWx0aXBseS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L29ydGhvLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcGVyc3BlY3RpdmUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9wZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldy5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZVguanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGVZLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlWi5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3NjYWxlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvc3RyLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvdHJhbnNsYXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvdHJhbnNwb3NlLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9hc3luY2hyb25vdXMuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9wYXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7OztBQUVBLElBQU0sbUJBQW1CLFFBQVEsaUJBQVIsQ0FBekI7QUFBQSxJQUNNLG1CQUFtQixRQUFRLG9CQUFSLENBRHpCOztBQUdBLElBQU0sNEJBQTRCLElBQUksZ0JBQUosQ0FBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsQ0FBbEM7QUFBQSxJQUNNLDRCQUE0QixJQUFJLGdCQUFKLENBQXFCLENBQXJCLEVBQXdCLEtBQUssRUFBTCxHQUFVLENBQWxDLENBRGxDOztJQUdNLE07QUFDSixrQkFBWSxTQUFaLEVBQXVCLHNCQUF2QixFQUErQyxnQkFBL0MsRUFBaUUsd0JBQWpFLEVBQTJGO0FBQUE7O0FBQ3pGLFNBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNBLFNBQUssc0JBQUwsR0FBOEIsc0JBQTlCO0FBQ0EsU0FBSyxnQkFBTCxHQUF3QixnQkFBeEI7QUFDQSxTQUFLLHdCQUFMLEdBQWdDLHdCQUFoQztBQUNEOzs7O29DQUVlO0FBQ2QsVUFBTSxhQUFhLENBQUMsS0FBSyxnQkFBTCxDQUFzQixJQUF0QixFQUFwQixDQURjLENBQ29DOztBQUVsRCxhQUFPLFVBQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTSxhQUFhLENBQUMsS0FBSyxnQkFBTCxDQUFzQixJQUF0QixFQUFwQixDQURjLENBQ29DOztBQUVsRCxhQUFPLFVBQVA7QUFDRDs7O3dDQUVtQixnQixFQUFrQjtBQUNwQyxXQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxXQUFLLHdCQUFMLEdBQWdDLEtBQUssZ0JBQXJDO0FBQ0Q7OzswQ0FFcUIsZ0IsRUFBa0I7QUFDdEMsV0FBSyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsV0FBSyxzQkFBTCxHQUE4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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7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Q0FBMkMsSUFBM0MsRUFBaUQ7QUFDL0MsTUFBSSw0QkFBNEIsSUFBaEM7O0FBRUEsTUFBTSxVQUFVLEtBQUssS0FBTCxDQUFXLG1CQUFYLENBQWhCOztBQUVBLE1BQUksWUFBWSxJQUFoQixFQUFzQjtBQUNwQixRQUFNLGNBQWMsT0FBTyxPQUFQLENBQXBCOztBQUVBLGdDQUE0QixXQUE1QixDQUhvQixDQUdxQjtBQUMxQzs7QUFFRCxTQUFPLHlCQUFQO0FBQ0Q7O0FBRUQsU0FBUyx1Q0FBVCxDQUFpRCxJQUFqRCxFQUF1RDtBQUNyRCxNQUFJLGtDQUFrQyxJQUF0Qzs7QUFFQSxNQUFNLFVBQVUsS0FBSyxLQUFMLENBQVcsZ0JBQVgsQ0FBaEI7O0FBRUEsTUFBSSxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFFBQU0sY0FBYyxPQUFPLE9BQVAsQ0FBcEI7O0FBRUEsc0NBQWtDLFdBQWxDO0FBQ0Q7O0FBRUQsU0FBTywrQkFBUDtBQUNEOztBQUVELE9BQU8sT0FBUCxHQUFpQjtBQUNmLHNCQUFvQixrQkFETDtBQUVmLHNCQUFvQixrQkFGTDtBQUdmLDhCQUE0QiwwQkFIYjtBQUlmLHlDQUF1QyxxQ0FKeEI7QUFLZixnQkFBYyxZQUxDO0FBTWYsb0JBQWtCLGdCQU5IO0FBT2YsMEJBQXdCLHNCQVBUO0FBUWYsZ0NBQThCLDRCQVJmO0FBU2YsZ0NBQThCLDRCQVRmO0FBVWYscUNBQW1DLGlDQVZwQjtBQVdmLDJDQUF5QztBQVgxQixDQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEFuZ2xlQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuL2Nvb3JkaW5hdGVzMkQnKSxcbiAgICAgIE1vdXNlQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuL21vdXNlQ29vcmRpbmF0ZXMnKTtcblxuY29uc3QgSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyA9IG5ldyBNb3VzZUNvb3JkaW5hdGVzKDAsIDApLFxuICAgICAgSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyA9IG5ldyBBbmdsZUNvb3JkaW5hdGVzKDAsIE1hdGguUEkgLyAyKTtcblxuY2xhc3MgQW5nbGVzIHtcbiAgY29uc3RydWN0b3IobW91c2VEb3duLCBvZmZzZXRNb3VzZUNvb3JkaW5hdGVzLCBhbmdsZUNvb3JkaW5hdGVzLCBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgICB0aGlzLm9mZnNldE1vdXNlQ29vcmRpbmF0ZXMgPSBvZmZzZXRNb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMuYW5nbGVDb29yZGluYXRlcyA9IGFuZ2xlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRYQXhpc0FuZ2xlKCkge1xuICAgIGNvbnN0IHhBeGlzQW5nbGUgPSAtdGhpcy5hbmdsZUNvb3JkaW5hdGVzLmdldFkoKTsgLy8vXG5cbiAgICByZXR1cm4geEF4aXNBbmdsZTtcbiAgfVxuXG4gIGdldFlBeGlzQW5nbGUoKSB7XG4gICAgY29uc3QgeUF4aXNBbmdsZSA9ICt0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMuZ2V0WCgpOyAvLy9cblxuICAgIHJldHVybiB5QXhpc0FuZ2xlO1xuICB9XG4gIFxuICBtb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gdGhpcy5hbmdsZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VEb3duRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgdGhpcy5vZmZzZXRNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgaWYgKHRoaXMubW91c2VEb3duKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFuZ2xlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQW5nbGVDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcy5taW51cyh0aGlzLm9mZnNldE1vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVDb29yZGluYXRlcyA9IHJlbGF0aXZlTW91c2VDb29yZGluYXRlcy5tdWx0aXBsaWVkQnkoTWF0aC5QSSAvIDE4MCk7ICAvLy9cblxuICAgIHRoaXMuYW5nbGVDb29yZGluYXRlcyA9IHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzLnBsdXMocmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZSxcbiAgICAgICAgICBvZmZzZXRNb3VzZUNvb3JkaW5hdGVzID0gSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBhbmdsZUNvb3JkaW5hdGVzID0gSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSBhbmdsZUNvb3JkaW5hdGVzLFxuICAgICAgICAgIGFuZ2xlcyA9IG5ldyBBbmdsZXMobW91c2VEb3duLCBvZmZzZXRNb3VzZUNvb3JkaW5hdGVzLCBhbmdsZUNvb3JkaW5hdGVzLCBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIGFuZ2xlcztcbiAgfVxufVxuXG5jb25zdCBhbmdsZXMgPSBBbmdsZXMuZnJvbU5vdGhpbmcoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmdsZXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRvbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2RvbScpLFxuICAgICAgdGV4dHVyZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi90ZXh0dXJlJyksXG4gICAgICBidWZmZXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vYnVmZmVyJyksXG4gICAgICBjb2xvdXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY29sb3VyJyksXG4gICAgICBtYXRyaXhNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbWF0cml4JyksXG4gICAgICBkZXB0aE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9kZXB0aCcpLFxuICAgICAgbW91c2VNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbW91c2UnKTtcblxuY29uc3QgeyBkb21FbGVtZW50RnJvbVNlbGVjdG9yIH0gPSBkb21VdGlsaXRpZXM7XG5cbmNvbnN0IGRlZmF1bHRPZmZzZXQgPSAwO1xuXG5jbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9ICdjYW52YXMnKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpLFxuICAgICAgICAgIGNvbnRleHQgPSBkb21FbGVtZW50LmdldENvbnRleHQoJ3dlYmdsJyk7XG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGluaXRpYWxpc2UgdGhlIGNvbnRleHQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC53aWR0aDsgfVxuXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oZWlnaHQ7IH1cblxuICBnZXRDbGllbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfVxuXG4gIGdldENsaWVudEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH1cblxuICBnZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQpOyB9XG5cbiAgc2V0Vmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCkgeyB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7IH1cblxuICBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpIHsgdGhpcy5jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSk7IH1cblxuICBjcmVhdGVQcm9ncmFtKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0oKTsgfVxuXG4gIHVzZVNoYWRlcihzaGFkZXIpIHtcbiAgICBjb25zdCBzaGFkZXJQcm9ncmFtID0gc2hhZGVyLmdldFByb2dyYW0oKTtcblxuICAgIHRoaXMuY29udGV4dC51c2VQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhckRlcHRoKCk7XG4gICAgdGhpcy5jbGVhckNvbG91cigpO1xuICAgIHRoaXMuY2xlYXJEZXB0aEJ1ZmZlcigpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXJCdWZmZXIoKTtcbiAgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgICB0aGlzLnNldFZpZXdwb3J0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgcmVuZGVyKHNoYWRlciwgbm9ybWFsLCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlKSB7XG4gICAgY29uc3Qgbm9ybWFsTWF0cml4ID0gbm9ybWFsLmdldE1hdHJpeCgpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gcm90YXRpb24uZ2V0TWF0cml4KCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbi5nZXRNYXRyaXgoKSxcbiAgICAgICAgICBwZXJzcGVjdGl2ZU1hdHJpeCA9IHBlcnNwZWN0aXZlLmdldE1hdHJpeCgpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0UGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTtcblxuICAgIHRoaXMuYXBwbHlNYXRyaXgobm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcGVyc3BlY3RpdmVNYXRyaXgpO1xuXG4gICAgY29uc3QgY291bnQgPSBzaGFkZXIuZ2V0Q291bnQoKTtcblxuICAgIHRoaXMuZHJhd0VsZW1lbnRzKGNvdW50KTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhjb3VudCwgb2Zmc2V0ID0gZGVmYXVsdE9mZnNldCkge1xuICAgIGNvbnN0IHsgVFJJQU5HTEVTLCBVTlNJR05FRF9TSE9SVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIG1vZGUgPSBUUklBTkdMRVMsXG4gICAgICAgICAgdHlwZSA9IFVOU0lHTkVEX1NIT1JUO1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdFbGVtZW50cyhtb2RlLCBjb3VudCwgdHlwZSwgb2Zmc2V0KVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgdGV4dHVyZU1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYnVmZmVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBjb2xvdXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgZGVwdGhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1vdXNlTWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhcztcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQ29vcmRpbmF0ZXMyRCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBnZXRYKCkge1xuICAgIHJldHVybiB0aGlzLng7XG4gIH1cblxuICBnZXRZKCkge1xuICAgIHJldHVybiB0aGlzLnk7XG4gIH1cbiAgXG4gIHNldFgoeCkge1xuICAgIHRoaXMueCA9IHg7XG4gIH1cbiAgXG4gIHNldFkoeSkge1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBwbHVzKGNvb3JkaW5hdGVzMkQpIHtcbiAgICBsZXQgeCA9IGNvb3JkaW5hdGVzMkQuZ2V0WCgpLFxuICAgICAgICB5ID0gY29vcmRpbmF0ZXMyRC5nZXRZKCk7XG5cbiAgICB4ID0gdGhpcy54ICsgeDtcbiAgICB5ID0gdGhpcy55ICsgeTtcblxuICAgIHJldHVybiBuZXcgQ29vcmRpbmF0ZXMyRCh4LCB5KTtcbiAgfVxuXG4gIG1pbnVzKGNvb3JkaW5hdGVzMkQpIHtcbiAgICBsZXQgeCA9IGNvb3JkaW5hdGVzMkQuZ2V0WCgpLFxuICAgICAgICB5ID0gY29vcmRpbmF0ZXMyRC5nZXRZKCk7XG5cbiAgICB4ID0gdGhpcy54IC0geDtcbiAgICB5ID0gdGhpcy55IC0geTtcblxuICAgIHJldHVybiBuZXcgQ29vcmRpbmF0ZXMyRCh4LCB5KTtcbiAgfVxuICBcbiAgbXVsdGlwbGllZEJ5KHNjYWxhcikge1xuICAgIGNvbnN0IHggPSB0aGlzLnggKiBzY2FsYXIsXG4gICAgICAgICAgeSA9IHRoaXMueSAqIHNjYWxhcjtcblxuICAgIHJldHVybiBuZXcgQ29vcmRpbmF0ZXMyRCh4LCB5KTtcbiAgfVxuXG4gIGRpdmlkZWRCeShzY2FsYXIpIHtcbiAgICBjb25zdCB4ID0gdGhpcy54IC8gc2NhbGFyLFxuICAgICAgICAgIHkgPSB0aGlzLnkgLyBzY2FsYXI7XG5cbiAgICByZXR1cm4gbmV3IENvb3JkaW5hdGVzMkQoeCwgeSk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCB4ID0gdGhpcy5nZXRYKCksXG4gICAgICAgICAgeSA9IHRoaXMuZ2V0WSgpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3h9LCR7eX1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvb3JkaW5hdGVzMkQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbnRlcm1lZGlhdGU6IHJlcXVpcmUoJy4vZXhhbXBsZXMvaW50ZXJtZWRpYXRlJyksXG4gIGNvbnRhaW5lckhvdXNlOiByZXF1aXJlKCcuL2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlJyksXG4gIHNjaG9vbmVyQ2VjaWxpZTogcmVxdWlyZSgnLi9leGFtcGxlcy9zY2hvb25lckNlY2lsaWUnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29udGFpbmVySG91c2UgPSAoKSA9PiB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb250YWluZXJIb3VzZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzID0gcmVxdWlyZSgnLi4vY2FudmFzJyksXG4gICAgICBBcHAgPSByZXF1aXJlKCcuL2ludGVybWVkaWF0ZS9hcHAnKSxcbiAgICAgIGN1YmVzID0gcmVxdWlyZSgnLi9pbnRlcm1lZGlhdGUvY3ViZXMnKSxcbiAgICAgIENvbG91clNoYWRlciA9IHJlcXVpcmUoJy4uL3NoYWRlci9jb2xvdXInKSxcbiAgICAgIFRleHR1cmVTaGFkZXIgPSByZXF1aXJlKCcuLi9zaGFkZXIvdGV4dHVyZScpO1xuXG5jb25zdCB7IGNyZWF0ZSB9ID0gY3ViZXM7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuY2FudmFzLmVuYWJsZURlcHRoVGVzdGluZygpO1xuY2FudmFzLmVuYWJsZURlcHRoRnVuY3Rpb24oKTtcblxuZnVuY3Rpb24gaW50ZXJtZWRpYXRlKCkge1xuICBjb25zdCBjb2xvdXJTaGFkZXIgPSBDb2xvdXJTaGFkZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgdGV4dHVyZVNoYWRlciA9IFRleHR1cmVTaGFkZXIuZnJvbU5vdGhpbmcoY2FudmFzKTtcblxuICBjcmVhdGUoY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyLCBjYW52YXMsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFwcCA9IG5ldyBBcHAoY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyLCBjYW52YXMpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICBhcHAucmVzaXplKCk7XG5cbiAgICAgIGFwcC5yZW5kZXIoY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKTtcbiAgICB9O1xuXG4gICAgYXBwLnJlc2l6ZSgpO1xuXG4gICAgYXBwLnJlbmRlcihjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpO1xuXG4gICAgYXBwLmFkZE1vdXNlRXZlbnRIYW5kbGVycygpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnRlcm1lZGlhdGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFuZ2xlcyA9IHJlcXVpcmUoJy4uLy4uL2FuZ2xlcycpLFxuICAgICAgem9vbSA9IHJlcXVpcmUoJy4uLy4uL3pvb20nKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4uLy4uL25vcm1hbCcpLFxuICAgICAgUm90YXRpb24gPSByZXF1aXJlKCcuLi8uLi9yb3RhdGlvbicpLFxuICAgICAgUG9zaXRpb24gPSByZXF1aXJlKCcuLi8uLi9wb3NpdGlvbicpLFxuICAgICAgUGVyc3BlY3RpdmUgPSByZXF1aXJlKCcuLi8uLi9wZXJzcGVjdGl2ZScpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuLi8uLi9tb3VzZUV2ZW50cycpO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3Rvcihjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIsIGNhbnZhcykge1xuICAgIHRoaXMuY29sb3VyU2hhZGVyID0gY29sb3VyU2hhZGVyO1xuICAgIHRoaXMudGV4dHVyZVNoYWRlciA9IHRleHR1cmVTaGFkZXI7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICBhZGRNb3VzZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3QgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyh0aGlzLmNhbnZhcyksXG4gICAgICAgICAgbW91c2VVcEV2ZW50SGFuZGxlciA9IHRoaXMubW91c2VVcEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlRG93bkV2ZW50SGFuZGxlciA9IHRoaXMubW91c2VEb3duRXZlbnRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VNb3ZlRXZlbnRIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlVXBFdmVudEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlRG93bkV2ZW50SGFuZGxlcihtb3VzZURvd25FdmVudEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZU1vdmVFdmVudEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIobW91c2VXaGVlbEV2ZW50SGFuZGxlcik7XG5cbiAgfVxuXG4gIG1vdXNlVXBFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIGFuZ2xlcy5tb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgbW91c2VEb3duRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBhbmdsZXMubW91c2VEb3duRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgbW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBhbmdsZXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpIHtcbiAgICB6b29tLm1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgY29uc29sZS5sb2coaGVpZ2h0KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHhBeGlzQW5nbGUgPSBhbmdsZXMuZ2V0WEF4aXNBbmdsZSgpLFxuICAgICAgICAgIHlBeGlzQW5nbGUgPSBhbmdsZXMuZ2V0WUF4aXNBbmdsZSgpLFxuICAgICAgICAgIGRpc3RhbmNlID0gem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIHdpZHRoID0gdGhpcy5jYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICB4QW5nbGUgPSB4QXhpc0FuZ2xlLCAgLy8vXG4gICAgICAgICAgekFuZ2xlID0geUF4aXNBbmdsZSwgLy8vXG4gICAgICAgICAgekNvb3JkaW5hdGUgPSAtTWF0aC5tYXgoMTAsIGRpc3RhbmNlKSwgLy8vXG4gICAgICAgICAgcGVyc3BlY3RpdmUgPSBQZXJzcGVjdGl2ZS5mcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgcm90YXRpb24gPSBSb3RhdGlvbi5mcm9tWEFuZ2xlQW5kWkFuZ2xlKHhBbmdsZSwgekFuZ2xlKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21aQ29vcmRpbmF0ZSh6Q29vcmRpbmF0ZSksXG4gICAgICAgICAgbm9ybWFsID0gTm9ybWFsLmZyb21Sb3RhdGlvbihyb3RhdGlvbik7XG5cbiAgICB0aGlzLmRyYXdFbGVtZW50cyhub3JtYWwsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VTaGFkZXIodGhpcy5jb2xvdXJTaGFkZXIpO1xuXG4gICAgdGhpcy5jb2xvdXJTaGFkZXIuYmluZCh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNvbG91clNoYWRlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMuY29sb3VyU2hhZGVyLCBub3JtYWwsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlU2hhZGVyKHRoaXMudGV4dHVyZVNoYWRlcik7XG5cbiAgICB0aGlzLnRleHR1cmVTaGFkZXIuYmluZCh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLnRleHR1cmVTaGFkZXIuYWN0aXZhdGVUZXh0dXJlKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLnRleHR1cmVTaGFkZXIsIG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlYzMgPSByZXF1aXJlKCcuLi8uLi8uLi92ZWMzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGRpdmlkZSwgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHZlcnRleENvbG91ckRhdGEgPSBbXG4gICAgICAgIDEuMCwgIDAuMCwgIDAuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMC4wLCAgMC4wLCAgMS4wLFxuICAgICAgICAxLjAsICAwLjAsICAwLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDAuMCwgIDAuMCwgIDEuMCxcblxuICAgICAgICAwLjAsICAxLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDAuMCwgIDEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMC4wLCAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAwLjAsICAxLjAsICAxLjAsICAxLjAsXG5cbiAgICAgICAgMC4wLCAgMS4wLCAgMC4wLCAgMS4wLFxuICAgICAgICAwLjAsICAxLjAsICAwLjAsICAxLjAsXG4gICAgICAgIDAuMCwgIDEuMCwgIDAuMCwgIDEuMCxcbiAgICAgICAgMC4wLCAgMS4wLCAgMC4wLCAgMS4wLFxuXG4gICAgICAgIDEuMCwgIDAuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMC4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAxLjAsICAwLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDAuMCwgIDEuMCwgIDEuMCxcblxuICAgICAgICAwLjAsICAwLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDAuMCwgIDAuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMC4wLCAgMC4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAwLjAsICAwLjAsICAxLjAsICAxLjAsXG5cbiAgICAgICAgMS4wLCAgMS4wLCAgMC4wLCAgMS4wLFxuICAgICAgICAxLjAsICAxLjAsICAwLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgIDAuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMC4wLCAgMS4wXG4gICAgICBdLFxuICAgICAgdmVydGV4UG9zaXRpb25EYXRhID0gW1xuICAgICAgICAtMS4wLCAtMS4wLCArMS4wLFxuICAgICAgICArMS4wLCAtMS4wLCArMS4wLFxuICAgICAgICArMS4wLCArMS4wLCArMS4wLFxuICAgICAgICAtMS4wLCArMS4wLCArMS4wLFxuXG4gICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIC0xLjAsICsxLjAsIC0xLjAsXG4gICAgICAgICsxLjAsICsxLjAsIC0xLjAsXG4gICAgICAgICsxLjAsIC0xLjAsIC0xLjAsXG5cbiAgICAgICAgLTEuMCwgKzEuMCwgLTEuMCxcbiAgICAgICAgLTEuMCwgKzEuMCwgKzEuMCxcbiAgICAgICAgKzEuMCwgKzEuMCwgKzEuMCxcbiAgICAgICAgKzEuMCwgKzEuMCwgLTEuMCxcblxuICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICArMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICArMS4wLCAtMS4wLCArMS4wLFxuICAgICAgICAtMS4wLCAtMS4wLCArMS4wLFxuXG4gICAgICAgICsxLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgICsxLjAsICsxLjAsIC0xLjAsXG4gICAgICAgICsxLjAsICsxLjAsICsxLjAsXG4gICAgICAgICsxLjAsIC0xLjAsICsxLjAsXG5cbiAgICAgICAgLTEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgLTEuMCwgLTEuMCwgKzEuMCxcbiAgICAgICAgLTEuMCwgKzEuMCwgKzEuMCxcbiAgICAgICAgLTEuMCwgKzEuMCwgLTEuMFxuICAgICAgXSxcbiAgICAgIHZlcnRleE5vcm1hbERhdGEgPSBbXG4gICAgICAgIDAuMCwgIDAuMCwgKzEuMCxcbiAgICAgICAgMC4wLCAgMC4wLCArMS4wLFxuICAgICAgICAwLjAsICAwLjAsICsxLjAsXG4gICAgICAgIDAuMCwgIDAuMCwgKzEuMCxcblxuICAgICAgICAwLjAsICAwLjAsIC0xLjAsXG4gICAgICAgIDAuMCwgIDAuMCwgLTEuMCxcbiAgICAgICAgMC4wLCAgMC4wLCAtMS4wLFxuICAgICAgICAwLjAsICAwLjAsIC0xLjAsXG5cbiAgICAgICAgMC4wLCArMS4wLCAgMC4wLFxuICAgICAgICAwLjAsICsxLjAsICAwLjAsXG4gICAgICAgIDAuMCwgKzEuMCwgIDAuMCxcbiAgICAgICAgMC4wLCArMS4wLCAgMC4wLFxuXG4gICAgICAgIDAuMCwgLTEuMCwgIDAuMCxcbiAgICAgICAgMC4wLCAtMS4wLCAgMC4wLFxuICAgICAgICAwLjAsIC0xLjAsICAwLjAsXG4gICAgICAgIDAuMCwgLTEuMCwgIDAuMCxcblxuICAgICAgICArMS4wLCAgMC4wLCAgMC4wLFxuICAgICAgICArMS4wLCAgMC4wLCAgMC4wLFxuICAgICAgICArMS4wLCAgMC4wLCAgMC4wLFxuICAgICAgICArMS4wLCAgMC4wLCAgMC4wLFxuXG4gICAgICAgIC0xLjAsICAwLjAsICAwLjAsXG4gICAgICAgIC0xLjAsICAwLjAsICAwLjAsXG4gICAgICAgIC0xLjAsICAwLjAsICAwLjAsXG4gICAgICAgIC0xLjAsICAwLjAsICAwLjBcbiAgICAgIF0sXG4gICAgICB2ZXJ0ZXhJbmRleERhdGEgPSBbXG4gICAgICAgIDAsICAxLCAgMixcbiAgICAgICAgMCwgIDIsICAzLFxuXG4gICAgICAgIDQsICA1LCAgNixcbiAgICAgICAgNCwgIDYsICA3LFxuXG4gICAgICAgIDgsICA5LCAxMCxcbiAgICAgICAgOCwgMTAsIDExLFxuXG4gICAgICAgIDEyLCAxMywgMTQsXG4gICAgICAgIDEyLCAxNCwgMTUsXG5cbiAgICAgICAgMTYsIDE3LCAxOCxcbiAgICAgICAgMTYsIDE4LCAxOSxcblxuICAgICAgICAyMCwgMjEsIDIyLFxuICAgICAgICAyMCwgMjIsIDIzXG4gICAgICBdO1xuXG5jbGFzcyBDb2xvdXJDdWJlIHtcbiAgc3RhdGljIGdldFZlcnRleFBvc2l0aW9uRGF0YShvZmZzZXRQb3NpdGlvbikge1xuICAgIGxldCB2ZXJ0ZXhQb3NpdGlvbnMgPSBkaXZpZGUodmVydGV4UG9zaXRpb25EYXRhLCAzKTsgIC8vL1xuXG4gICAgdmVydGV4UG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zLm1hcChmdW5jdGlvbih2ZXJ0ZXhQb3NpdGlvbikge1xuICAgICAgY29uc3Qgb2Zmc2V0VmVydGV4UG9zaXRpb24gPSB2ZWMzLmFkZCh2ZXJ0ZXhQb3NpdGlvbiwgb2Zmc2V0UG9zaXRpb24pO1xuXG4gICAgICByZXR1cm4gb2Zmc2V0VmVydGV4UG9zaXRpb247XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmxhdHRlbih2ZXJ0ZXhQb3NpdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGdldFZlcnRleE5vcm1hbERhdGEoKSB7XG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbERhdGE7XG4gIH1cblxuICBzdGF0aWMgZ2V0VmVydGV4Q29sb3VyRGF0YSgpIHtcbiAgICByZXR1cm4gdmVydGV4Q29sb3VyRGF0YTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRWZXJ0ZXhJbmRleERhdGEoKSB7XG4gICAgcmV0dXJuIHZlcnRleEluZGV4RGF0YTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91ckN1YmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlYzMgPSByZXF1aXJlKCcuLi8uLi8uLi92ZWMzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGRpdmlkZSwgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHRleHR1cmVDb29yZGluYXRlRGF0YSA9IFtcbiAgICAgICAgMC4wLCAgMC4wLFxuICAgICAgICAxLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDEuMCxcbiAgICAgICAgMC4wLCAgMS4wLFxuXG4gICAgICAgIDAuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMC4wLFxuICAgICAgICAxLjAsICAxLjAsXG4gICAgICAgIDAuMCwgIDEuMCxcblxuICAgICAgICAwLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMS4wLFxuICAgICAgICAwLjAsICAxLjAsXG5cbiAgICAgICAgMC4wLCAgMC4wLFxuICAgICAgICAxLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDEuMCxcbiAgICAgICAgMC4wLCAgMS4wLFxuXG4gICAgICAgIDAuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMC4wLFxuICAgICAgICAxLjAsICAxLjAsXG4gICAgICAgIDAuMCwgIDEuMCxcblxuICAgICAgICAwLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMS4wLFxuICAgICAgICAwLjAsICAxLjBcbiAgICAgIF0sXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBbXG4gICAgICAgIC0xLjAsIC0xLjAsICsxLjAsXG4gICAgICAgICsxLjAsIC0xLjAsICsxLjAsXG4gICAgICAgICsxLjAsICsxLjAsICsxLjAsXG4gICAgICAgIC0xLjAsICsxLjAsICsxLjAsXG5cbiAgICAgICAgLTEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgLTEuMCwgKzEuMCwgLTEuMCxcbiAgICAgICAgKzEuMCwgKzEuMCwgLTEuMCxcbiAgICAgICAgKzEuMCwgLTEuMCwgLTEuMCxcblxuICAgICAgICAtMS4wLCArMS4wLCAtMS4wLFxuICAgICAgICAtMS4wLCArMS4wLCArMS4wLFxuICAgICAgICArMS4wLCArMS4wLCArMS4wLFxuICAgICAgICArMS4wLCArMS4wLCAtMS4wLFxuXG4gICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgICsxLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgICsxLjAsIC0xLjAsICsxLjAsXG4gICAgICAgIC0xLjAsIC0xLjAsICsxLjAsXG5cbiAgICAgICAgKzEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgKzEuMCwgKzEuMCwgLTEuMCxcbiAgICAgICAgKzEuMCwgKzEuMCwgKzEuMCxcbiAgICAgICAgKzEuMCwgLTEuMCwgKzEuMCxcblxuICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAtMS4wLCAtMS4wLCArMS4wLFxuICAgICAgICAtMS4wLCArMS4wLCArMS4wLFxuICAgICAgICAtMS4wLCArMS4wLCAtMS4wXG4gICAgICBdLFxuICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IFtcbiAgICAgICAgMC4wLCAgMC4wLCArMS4wLFxuICAgICAgICAwLjAsICAwLjAsICsxLjAsXG4gICAgICAgIDAuMCwgIDAuMCwgKzEuMCxcbiAgICAgICAgMC4wLCAgMC4wLCArMS4wLFxuXG4gICAgICAgIDAuMCwgIDAuMCwgLTEuMCxcbiAgICAgICAgMC4wLCAgMC4wLCAtMS4wLFxuICAgICAgICAwLjAsICAwLjAsIC0xLjAsXG4gICAgICAgIDAuMCwgIDAuMCwgLTEuMCxcblxuICAgICAgICAwLjAsICsxLjAsICAwLjAsXG4gICAgICAgIDAuMCwgKzEuMCwgIDAuMCxcbiAgICAgICAgMC4wLCArMS4wLCAgMC4wLFxuICAgICAgICAwLjAsICsxLjAsICAwLjAsXG5cbiAgICAgICAgMC4wLCAtMS4wLCAgMC4wLFxuICAgICAgICAwLjAsIC0xLjAsICAwLjAsXG4gICAgICAgIDAuMCwgLTEuMCwgIDAuMCxcbiAgICAgICAgMC4wLCAtMS4wLCAgMC4wLFxuXG4gICAgICAgICsxLjAsICAwLjAsICAwLjAsXG4gICAgICAgICsxLjAsICAwLjAsICAwLjAsXG4gICAgICAgICsxLjAsICAwLjAsICAwLjAsXG4gICAgICAgICsxLjAsICAwLjAsICAwLjAsXG5cbiAgICAgICAgLTEuMCwgIDAuMCwgIDAuMCxcbiAgICAgICAgLTEuMCwgIDAuMCwgIDAuMCxcbiAgICAgICAgLTEuMCwgIDAuMCwgIDAuMCxcbiAgICAgICAgLTEuMCwgIDAuMCwgIDAuMFxuICAgICAgXSxcbiAgICAgIHZlcnRleEluZGV4RGF0YSA9IFtcbiAgICAgICAgMCwgIDEsICAyLFxuICAgICAgICAwLCAgMiwgIDMsXG5cbiAgICAgICAgNCwgIDUsICA2LFxuICAgICAgICA0LCAgNiwgIDcsXG5cbiAgICAgICAgOCwgIDksIDEwLFxuICAgICAgICA4LCAxMCwgMTEsXG5cbiAgICAgICAgMTIsIDEzLCAxNCxcbiAgICAgICAgMTIsIDE0LCAxNSxcblxuICAgICAgICAxNiwgMTcsIDE4LFxuICAgICAgICAxNiwgMTgsIDE5LFxuXG4gICAgICAgIDIwLCAyMSwgMjIsXG4gICAgICAgIDIwLCAyMiwgMjNcbiAgICAgIF07XG5cbmNsYXNzIFRleHR1cmVDdWJlIHtcbiAgc3RhdGljIGdldFZlcnRleFBvc2l0aW9uRGF0YShvZmZzZXRQb3NpdGlvbikge1xuICAgIGxldCB2ZXJ0ZXhQb3NpdGlvbnMgPSBkaXZpZGUodmVydGV4UG9zaXRpb25EYXRhLCAzKTsgIC8vL1xuXG4gICAgdmVydGV4UG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zLm1hcChmdW5jdGlvbih2ZXJ0ZXhQb3NpdGlvbikge1xuICAgICAgY29uc3Qgb2Zmc2V0VmVydGV4UG9zaXRpb24gPSB2ZWMzLmFkZCh2ZXJ0ZXhQb3NpdGlvbiwgb2Zmc2V0UG9zaXRpb24pO1xuXG4gICAgICByZXR1cm4gb2Zmc2V0VmVydGV4UG9zaXRpb247XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmxhdHRlbih2ZXJ0ZXhQb3NpdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGdldFZlcnRleE5vcm1hbERhdGEoKSB7XG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbERhdGE7XG4gIH1cblxuICBzdGF0aWMgZ2V0VGV4dHVyZUNvb3JkaW5hdGVEYXRhKCkge1xuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG4gIH1cblxuICBzdGF0aWMgZ2V0VmVydGV4SW5kZXhEYXRhKCkge1xuICAgIHJldHVybiB2ZXJ0ZXhJbmRleERhdGE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlQ3ViZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IENvbG91ckN1YmUgPSByZXF1aXJlKCcuL2N1YmUvY29sb3VyJyksXG4gICAgICBUZXh0dXJlQ3ViZSA9IHJlcXVpcmUoJy4vY3ViZS90ZXh0dXJlJyksXG4gICAgICBpbWFnZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvaW1hZ2VzJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBzZXF1ZW5jZSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyBwcmVsb2FkIH0gPSBpbWFnZXNVdGlsaXRpZXMsXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZnVuY3Rpb24gY3JlYXRlKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlciwgY2FudmFzLCBkb25lKSB7XG4gIGNvbnN0IGNhbGxiYWNrcyA9IFtcbiAgICAgICAgICBjcmVhdGVDb2xvdXJDdWJlQ2FsbGJhY2ssXG4gICAgICAgICAgY3JlYXRlVGV4dHVyZUN1YmVDYWxsYmFja1xuICAgICAgICBdLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGNvbG91clNoYWRlcjogY29sb3VyU2hhZGVyLFxuICAgICAgICAgIHRleHR1cmVTaGFkZXI6IHRleHR1cmVTaGFkZXIsXG4gICAgICAgICAgY2FudmFzOiBjYW52YXNcbiAgICAgICAgfTtcblxuICBzZXF1ZW5jZShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiBjcmVhdGVcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbG91ckN1YmVDYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgY29sb3VyU2hhZGVyLCBjYW52YXMgfSA9IGNvbnRleHQsXG4gICAgICAgIG9mZnNldFBvc2l0aW9uID0gWy0yLCAwLCAwXTtcblxuICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBDb2xvdXJDdWJlLmdldFZlcnRleFBvc2l0aW9uRGF0YShvZmZzZXRQb3NpdGlvbiksXG4gICAgICAgIHZlcnRleE5vcm1hbERhdGEgPSBDb2xvdXJDdWJlLmdldFZlcnRleE5vcm1hbERhdGEoKSxcbiAgICAgICAgdmVydGV4Q29sb3VyRGF0YSA9IENvbG91ckN1YmUuZ2V0VmVydGV4Q29sb3VyRGF0YSgpLFxuICAgICAgICB2ZXJ0ZXhJbmRleERhdGEgPSBDb2xvdXJDdWJlLmdldFZlcnRleEluZGV4RGF0YSgpO1xuXG4gIGNvbG91clNoYWRlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4Q29sb3VyRGF0YSwgdmVydGV4SW5kZXhEYXRhLCBjYW52YXMpO1xuXG4gIG5leHQoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZUN1YmVDYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgdGV4dHVyZVNoYWRlciwgY2FudmFzIH0gPSBjb250ZXh0LFxuICAgICAgICBzb3VyY2VzID0gW1xuICAgICAgICAgICd0ZXh0dXJlL2JyaWNrcy5qcGcnXG4gICAgICAgIF07XG5cbiAgcHJlbG9hZChzb3VyY2VzLCBmdW5jdGlvbihpbWFnZXMpIHtcbiAgICBjb25zdCBmaXJzdEltYWdlID0gZmlyc3QoaW1hZ2VzKSxcbiAgICAgICAgICBvZmZzZXRQb3NpdGlvbiA9IFsrMiwgMCwgMF0sXG4gICAgICAgICAgaW1hZ2UgPSBmaXJzdEltYWdlO1xuXG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25EYXRhID0gVGV4dHVyZUN1YmUuZ2V0VmVydGV4UG9zaXRpb25EYXRhKG9mZnNldFBvc2l0aW9uKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gVGV4dHVyZUN1YmUuZ2V0VmVydGV4Tm9ybWFsRGF0YSgpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlRGF0YSA9IFRleHR1cmVDdWJlLmdldFRleHR1cmVDb29yZGluYXRlRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4RGF0YSA9IFRleHR1cmVDdWJlLmdldFZlcnRleEluZGV4RGF0YSgpO1xuXG4gICAgdGV4dHVyZVNoYWRlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIGNhbnZhcylcblxuICAgIHRleHR1cmVTaGFkZXIuY3JlYXRlVGV4dHVyZShpbWFnZSwgY2FudmFzKTtcblxuICAgIG5leHQoKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHNjaG9vbmVyQ2VjaWxpZSA9ICgpID0+IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNjaG9vbmVyQ2VjaWxpZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlYXRlQW5kQmluZEVsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhEYXRhKSB7XG4gIGNvbnN0IHZlcnRleEluZGV4RWxlbWVudEJ1ZmZlciA9IHRoaXMuY3JlYXRlRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleERhdGEpLFxuICAgICAgICB2ZXJ0ZXhJbmRleERhdGFMZW5ndGggPSB2ZXJ0ZXhJbmRleERhdGEubGVuZ3RoLFxuICAgICAgICBjb3VudCA9IHZlcnRleEluZGV4RGF0YUxlbmd0aDsgIC8vL1xuXG4gIHRoaXMuYmluZEVsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhFbGVtZW50QnVmZmVyKTtcblxuICByZXR1cm4gY291bnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSLCBTVEFUSUNfRFJBVyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBFTEVNRU5UX0FSUkFZX0JVRkZFUixcbiAgICAgICAgdXNhZ2UgPSBTVEFUSUNfRFJBVyxcbiAgICAgICAgZWxlbWVudEJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKSxcbiAgICAgICAgdWludDE2QXJyYXkgPSBuZXcgVWludDE2QXJyYXkoZGF0YSk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0YXJnZXQsIHVpbnQxNkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRCdWZmZXI7XG59XG5cbmZ1bmN0aW9uIGJpbmRFbGVtZW50QnVmZmVyKGVsZW1lbnRCdWZmZXIpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBFTEVNRU5UX0FSUkFZX0JVRkZFUjtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGVsZW1lbnRCdWZmZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICBidWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCksXG4gICAgICAgIGZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgZmxvYXQzMkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYmluZEJ1ZmZlcihidWZmZXIsIGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBGTE9BVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHR5cGUgPSBGTE9BVCxcbiAgICAgICAgbm9ybWFsaXplID0gZmFsc2UsXG4gICAgICAgIHN0cmlkZSA9IDAsXG4gICAgICAgIG9mZnNldCA9IDA7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0cmlidXRlTG9jYXRpb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlQW5kQmluZEVsZW1lbnRCdWZmZXI6IGNyZWF0ZUFuZEJpbmRFbGVtZW50QnVmZmVyLFxuICBjcmVhdGVFbGVtZW50QnVmZmVyOiBjcmVhdGVFbGVtZW50QnVmZmVyLFxuICBiaW5kRWxlbWVudEJ1ZmZlcjogYmluZEVsZW1lbnRCdWZmZXIsXG4gIGNyZWF0ZUJ1ZmZlcjogY3JlYXRlQnVmZmVyLFxuICBiaW5kQnVmZmVyOiBiaW5kQnVmZmVyXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWZhdWx0UiA9IDAuMCxcbiAgICAgIGRlZmF1bHRHID0gMC4wLFxuICAgICAgZGVmYXVsdEIgPSAwLjAsXG4gICAgICBkZWZhdWx0QSA9IDEuMDtcblxuZnVuY3Rpb24gY2xlYXJDb2xvdXIociA9IGRlZmF1bHRSLCBnID0gZGVmYXVsdEcsIGIgPSBkZWZhdWx0QiwgYSA9IGRlZmF1bHRBKSB7IHRoaXMuY29udGV4dC5jbGVhckNvbG9yKHIsIGcsIGIsIGEpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyQnVmZmVyKCkge1xuICBjb25zdCB7IENPTE9SX0JVRkZFUl9CSVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgbWFzayA9IENPTE9SX0JVRkZFUl9CSVQ7XG5cbiAgdGhpcy5jb250ZXh0LmNsZWFyKG1hc2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xlYXJDb2xvdXI6IGNsZWFyQ29sb3VyLFxuICBjbGVhckNvbG91ckJ1ZmZlcjogY2xlYXJDb2xvdXJCdWZmZXJcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlZmF1bHREZXB0aCA9IDEuMDtcblxuZnVuY3Rpb24gY2xlYXJEZXB0aChkZXB0aCA9IGRlZmF1bHREZXB0aCkgeyB0aGlzLmNvbnRleHQuY2xlYXJEZXB0aChkZXB0aCk7IH1cblxuZnVuY3Rpb24gY2xlYXJEZXB0aEJ1ZmZlcigpIHtcbiAgY29uc3QgeyBERVBUSF9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBERVBUSF9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRGVwdGhUZXN0aW5nKCkge1xuICBjb25zdCB7IERFUFRIX1RFU1QgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgY2FwID0gREVQVEhfVEVTVDtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlKGNhcCk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZURlcHRoRnVuY3Rpb24oKSB7XG4gIGNvbnN0IHsgTEVRVUFMIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIGZ1bmMgPSBMRVFVQUw7XG4gIFxuICB0aGlzLmNvbnRleHQuZGVwdGhGdW5jKGZ1bmMpOyBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsZWFyRGVwdGg6IGNsZWFyRGVwdGgsXG4gIGNsZWFyRGVwdGhCdWZmZXI6IGNsZWFyRGVwdGhCdWZmZXIsXG4gIGVuYWJsZURlcHRoVGVzdGluZzogZW5hYmxlRGVwdGhUZXN0aW5nLFxuICBlbmFibGVEZXB0aEZ1bmN0aW9uOiBlbmFibGVEZXB0aEZ1bmN0aW9uXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhcHBseU1hdHJpeCh1bmlmb3JtTG9jYXRpb24sIG1hdHJpeCkge1xuICBjb25zdCB0cmFuc3Bvc2UgPSBmYWxzZTsgIC8vL1xuXG4gIHRoaXMuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHVuaWZvcm1Mb2NhdGlvbiwgdHJhbnNwb3NlLCBtYXRyaXgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBwbHlNYXRyaXg6IGFwcGx5TWF0cml4XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBNb3VzZUNvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vbW91c2VDb29yZGluYXRlcycpO1xuXG5sZXQgaG9yaXpvbnRhbE9mZnNldCA9IDUxMiwgLy8vXG4gICAgdmVydGljYWxPZmZzZXQgPSAzMjA7IC8vL1xuXG5mdW5jdGlvbiBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRCb3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHggPSArKGV2ZW50LmNsaWVudFggLSBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0LmxlZnQgLSBob3Jpem9udGFsT2Zmc2V0KSwgIC8vL1xuICAgICAgICB5ID0gLShldmVudC5jbGllbnRZIC0gZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdC50b3AgLSB2ZXJ0aWNhbE9mZnNldCksIC8vL1xuICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbmV3IE1vdXNlQ29vcmRpbmF0ZXMoeCwgeSk7XG5cbiAgcmV0dXJuIG1vdXNlQ29vcmRpbmF0ZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50OiBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0dXJlKGltYWdlKSB7XG4gIGNvbnN0IHsgVEVYVFVSRV8yRCwgUkdCQSwgVU5TSUdORURfQllURSwgVEVYVFVSRV9XUkFQX1MsIFRFWFRVUkVfV1JBUF9ULCBDTEFNUF9UT19FREdFLCBURVhUVVJFX01JTl9GSUxURVIsIExJTkVBUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBURVhUVVJFXzJELFxuICAgICAgICBpbnRlcm5hbEZvcm1hdCA9IFJHQkEsXG4gICAgICAgIGZvcm1hdCA9IFJHQkEsXG4gICAgICAgIHR5cGUgPSBVTlNJR05FRF9CWVRFLFxuICAgICAgICB0ZXh0dXJlID0gdGhpcy5jb250ZXh0LmNyZWF0ZVRleHR1cmUoKSxcbiAgICAgICAgbGV2ZWwgPSAwO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZSh0YXJnZXQsIHRleHR1cmUpO1xuXG4gIHRoaXMuY29udGV4dC50ZXhJbWFnZTJEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltYWdlKTtcblxuICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaSh0YXJnZXQsIFRFWFRVUkVfV1JBUF9TLCBDTEFNUF9UT19FREdFKTtcbiAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkodGFyZ2V0LCBURVhUVVJFX1dSQVBfVCwgQ0xBTVBfVE9fRURHRSk7XG4gIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKHRhcmdldCwgVEVYVFVSRV9NSU5fRklMVEVSLCBMSU5FQVIpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVRleHR1cmUodGFyZ2V0KSB7IHRoaXMuY29udGV4dC5hY3RpdmVUZXh0dXJlKHRhcmdldCk7IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZVRleHR1cmU6IGNyZWF0ZVRleHR1cmUsXG4gIGFjdGl2YXRlVGV4dHVyZTogYWN0aXZhdGVUZXh0dXJlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb29yZGluYXRlczJEID0gcmVxdWlyZSgnLi9jb29yZGluYXRlczJEJyk7XG5cbmNsYXNzIE1vdXNlQ29vcmRpbmF0ZXMgZXh0ZW5kcyBDb29yZGluYXRlczJEIHt9XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2VDb29yZGluYXRlcztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTU9VU0VfVVAgPSAnTU9VU0VfVVAnLFxuICAgICAgTU9VU0VfRE9XTiA9ICdNT1VTRV9ET1dOJyxcbiAgICAgIE1PVVNFX01PVkUgPSAnTU9VU0VfTU9WRScsXG4gICAgICBNT1VTRV9XSEVFTCA9ICdNT1VTRV9XSEVFTCc7XG5cbmNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG5cbiAgICB0aGlzLmhhbmRsZXJzID0ge307XG5cbiAgICBjb25zdCBtb3VzZUV2ZW50VHlwZXMgPSBbXG4gICAgICAgICAgICBNT1VTRV9VUCxcbiAgICAgICAgICAgIE1PVVNFX0RPV04sXG4gICAgICAgICAgICBNT1VTRV9NT1ZFLFxuICAgICAgICAgICAgTU9VU0VfV0hFRUxcbiAgICAgICAgICBdO1xuXG4gICAgbW91c2VFdmVudFR5cGVzLmZvckVhY2goZnVuY3Rpb24obW91c2VFdmVudFR5cGUpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnNbbW91c2VFdmVudFR5cGVdID0gW107XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcihjYW52YXMsICdtb3VzZXVwJywgZnVuY3Rpb24oZXZlbnQpIHsgdGhpcy5vbk1vdXNlRXZlbnQoTU9VU0VfVVAsIGV2ZW50KSB9LmJpbmQodGhpcykgKTtcbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcihjYW52YXMsICdtb3VzZWRvd24nLCBmdW5jdGlvbihldmVudCkgeyB0aGlzLm9uTW91c2VFdmVudChNT1VTRV9ET1dOLCBldmVudCkgfS5iaW5kKHRoaXMpICk7XG4gICAgdGhpcy5hZGRFdmVudEhhbmRsZXIoY2FudmFzLCAnbW91c2Vtb3ZlJywgZnVuY3Rpb24oZXZlbnQpIHsgdGhpcy5vbk1vdXNlRXZlbnQoTU9VU0VfTU9WRSwgZXZlbnQpIH0uYmluZCh0aGlzKSApO1xuICAgIHRoaXMuYWRkRXZlbnRIYW5kbGVyKGNhbnZhcywgJ21vdXNld2hlZWwnLCBmdW5jdGlvbihldmVudCkgeyB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KGV2ZW50KSB9LmJpbmQodGhpcykgKTtcbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcihjYW52YXMsICdET01Nb3VzZVNjcm9sbCcsIGZ1bmN0aW9uKGV2ZW50KSB7IHRoaXMub25Nb3VzZVdoZWVsRXZlbnQoZXZlbnQpIH0uYmluZCh0aGlzKSApO1xuICB9XG5cbiAgYWRkTW91c2VVcEV2ZW50SGFuZGxlcihtb3VzZVVwRXZlbnRIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcihNT1VTRV9VUCwgbW91c2VVcEV2ZW50SGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25FdmVudEhhbmRsZXIobW91c2VEb3duRXZlbnRIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcihNT1VTRV9ET1dOLCBtb3VzZURvd25FdmVudEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlTW92ZUV2ZW50SGFuZGxlcikge1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXIoTU9VU0VfTU9WRSwgbW91c2VNb3ZlRXZlbnRIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIobW91c2VXaGVlbEV2ZW50SGFuZGxlcikge1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXIoTU9VU0VfV0hFRUwsIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkRXZlbnRIYW5kbGVyKGNhbnZhcywgdHlwZSwgaGFuZGxlcikge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBjYW52YXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBoYW5kbGVyKGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VFdmVudChtb3VzZUV2ZW50VHlwZSwgZXZlbnQpIHtcbiAgICBjb25zdCBtb3VzZUV2ZW50SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW21vdXNlRXZlbnRUeXBlXSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5jYW52YXMubW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCk7XG5cbiAgICBtb3VzZUV2ZW50SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihtb3VzZUV2ZW50SGFuZGxlcikge1xuICAgICAgbW91c2VFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlV2hlZWxFdmVudChldmVudCkge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxFdmVudFR5cGUgPSBNT1VTRV9XSEVFTCxcbiAgICAgICAgICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbbW91c2VXaGVlbEV2ZW50VHlwZV0sXG4gICAgICAgICAgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgKGV2ZW50LndoZWVsRGVsdGEgfHwgLWV2ZW50LmRldGFpbCkpKTsgLy8vXG5cbiAgICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKG1vdXNlV2hlZWxFdmVudEhhbmRsZXIpIHtcbiAgICAgIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkTW91c2VFdmVudEhhbmRsZXIobW91c2VFdmVudFR5cGUsIG1vdXNlRXZlbnRIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VFdmVudEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1ttb3VzZUV2ZW50VHlwZV07XG5cbiAgICBtb3VzZUV2ZW50SGFuZGxlcnMucHVzaChtb3VzZUV2ZW50SGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgbW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoY2FudmFzKTtcblxuICAgIHJldHVybiBtb3VzZUV2ZW50cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vdXNlRXZlbnRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnZ2wtbWF0NCcpOyAgLy8vXG5cbmNsYXNzIE5vcm1hbCB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVJvdGF0aW9uKHJvdGF0aW9uKSB7XG4gICAgY29uc3QgbWF0cml4ID0gbWF0NC5jcmVhdGUoKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IHJvdGF0aW9uLmdldE1hdHJpeCgpO1xuXG4gICAgbWF0NC5pbnZlcnQobWF0cml4LCByb3RhdGlvbk1hdHJpeCk7ICAgIFxuICAgIG1hdDQudHJhbnNwb3NlKG1hdHJpeCwgbWF0cml4KTtcbiAgICBcbiAgICBjb25zdCBub3JtYWwgPSBuZXcgTm9ybWFsKG1hdHJpeCk7XG4gICAgXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vcm1hbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCBkZWZhdWx0RmllbGRPZlZpZXcgPSA0NSAqIE1hdGguUEkgLyAxODAsXG4gICAgICBkZWZhdWx0Wk5lYXIgPSAwLjEsXG4gICAgICBkZWZhdWx0WkZhciA9IDEwMC4wO1xuXG5jbGFzcyBQZXJzcGVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodCxcbiAgICAgICAgICBmaWVsZE9mVmlldyA9IGRlZmF1bHRGaWVsZE9mVmlldyxcbiAgICAgICAgICB6TmVhciA9IGRlZmF1bHRaTmVhcixcbiAgICAgICAgICB6RmFyID0gZGVmYXVsdFpGYXIsXG4gICAgICAgICAgbWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcblxuICAgIG1hdDQucGVyc3BlY3RpdmUobWF0cml4LCBmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKTtcblxuICAgIGNvbnN0IHBlcnNwZWN0aXZlID0gbmV3IFBlcnNwZWN0aXZlKG1hdHJpeCk7XG5cbiAgICByZXR1cm4gcGVyc3BlY3RpdmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQZXJzcGVjdGl2ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCBkZWZhdWx0WENvb3JkaW5hdGUgPSArMC4wLFxuICAgICAgZGVmYXVsdFlDb29yZGluYXRlID0gKzAuMCxcbiAgICAgIGRlZmF1bHRaQ29vcmRpbmF0ZSA9IC02LjA7XG5cbmNsYXNzIFBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVpDb29yZGluYXRlKHpDb29yZGluYXRlKSB7XG4gICAgY29uc3QgeENvb3JkaW5hdGUgPSBkZWZhdWx0WENvb3JkaW5hdGUsXG4gICAgICAgICAgeUNvb3JkaW5hdGUgPSBkZWZhdWx0WUNvb3JkaW5hdGUsXG4gICAgICAgICAgY29vcmRpbmF0ZVZlY3RvciA9IFtcbiAgICAgICAgICAgIHhDb29yZGluYXRlLFxuICAgICAgICAgICAgeUNvb3JkaW5hdGUsXG4gICAgICAgICAgICB6Q29vcmRpbmF0ZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgbWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcblxuICAgIG1hdDQudHJhbnNsYXRlKG1hdHJpeCwgbWF0cml4LCBjb29yZGluYXRlVmVjdG9yKTtcblxuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKG1hdHJpeCk7XG4gICAgXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9zaXRpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCdnbC1tYXQ0Jyk7ICAvLy9cblxuY29uc3QgZGVmYXVsdFhBbmdsZSA9IDAuMCxcbiAgICAgIGRlZmF1bHRZQW5nbGUgPSAwLjAsXG4gICAgICBkZWZhdWx0WkFuZ2xlID0gMC4wLFxuICAgICAgeEF4aXNWZWN0b3JBcnJheSA9IFsxLCAwLCAwXSxcbiAgICAgIHlBeGlzVmVjdG9yQXJyYXkgPSBbMCwgMSwgMF0sXG4gICAgICB6QXhpc1ZlY3RvckFycmF5ID0gWzAsIDAsIDFdO1xuXG5jbGFzcyBSb3RhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHhBbmdsZSA9IGRlZmF1bHRYQW5nbGUsXG4gICAgICAgICAgeUFuZ2xlID0gZGVmYXVsdFlBbmdsZSxcbiAgICAgICAgICB6QW5nbGUgPSBkZWZhdWx0WkFuZ2xlLFxuICAgICAgICAgIHJvdGF0aW9uID0gUm90YXRpb24uZnJvbVhBbmdsZVlBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHlBbmdsZSwgekFuZ2xlKTtcblxuICAgIHJldHVybiByb3RhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tWEFuZ2xlKHhBbmdsZSkge1xuICAgIGNvbnN0IHlBbmdsZSA9IGRlZmF1bHRZQW5nbGUsXG4gICAgICAgICAgekFuZ2xlID0gZGVmYXVsdFpBbmdsZSxcbiAgICAgICAgICByb3RhdGlvbiA9IFJvdGF0aW9uLmZyb21YQW5nbGVZQW5nbGVBbmRaQW5nbGUoeEFuZ2xlLCB5QW5nbGUsIHpBbmdsZSk7XG5cbiAgICByZXR1cm4gcm90YXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVhBbmdsZUFuZFlBbmdsZSh4QW5nbGUsIHlBbmdsZSkge1xuICAgIGNvbnN0IHpBbmdsZSA9IGRlZmF1bHRaQW5nbGUsXG4gICAgICAgICAgcm90YXRpb24gPSBSb3RhdGlvbi5mcm9tWEFuZ2xlWUFuZ2xlQW5kWkFuZ2xlKHhBbmdsZSwgeUFuZ2xlLCB6QW5nbGUpO1xuXG4gICAgcmV0dXJuIHJvdGF0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21YQW5nbGVBbmRaQW5nbGUoeEFuZ2xlLCB6QW5nbGUpIHtcbiAgICBjb25zdCB5QW5nbGUgPSBkZWZhdWx0WUFuZ2xlLFxuICAgICAgICAgIHJvdGF0aW9uID0gUm90YXRpb24uZnJvbVhBbmdsZVlBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHlBbmdsZSwgekFuZ2xlKTtcblxuICAgIHJldHVybiByb3RhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tWEFuZ2xlWUFuZ2xlQW5kWkFuZ2xlKHhBbmdsZSwgeUFuZ2xlLCB6QW5nbGUpIHtcbiAgICBjb25zdCBtYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuXG4gICAgbWF0NC5yb3RhdGUobWF0cml4LCBtYXRyaXgsIHhBbmdsZSwgeEF4aXNWZWN0b3JBcnJheSk7XG4gICAgbWF0NC5yb3RhdGUobWF0cml4LCBtYXRyaXgsIHlBbmdsZSwgeUF4aXNWZWN0b3JBcnJheSk7XG4gICAgbWF0NC5yb3RhdGUobWF0cml4LCBtYXRyaXgsIHpBbmdsZSwgekF4aXNWZWN0b3JBcnJheSk7XG5cbiAgICBjb25zdCByb3RhdGlvbiA9IG5ldyBSb3RhdGlvbihtYXRyaXgpO1xuXG4gICAgcmV0dXJuIHJvdGF0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUm90YXRpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5vcm1hbE1hdHJpeE5hbWUgPSAndU5vcm1hbE1hdHJpeCcsXG4gICAgICByb3RhdGlvbk1hdHJpeE5hbWUgPSAndVJvdGF0aW9uTWF0cml4JyxcbiAgICAgIHBvc2l0aW9uTWF0cml4TmFtZSA9ICd1UG9zaXRpb25NYXRyaXgnLFxuICAgICAgcGVyc3BlY3RpdmVNYXRyaXhOYW1lID0gJ3VQZXJzcGVjdGl2ZU1hdHJpeCcsXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleFBvc2l0aW9uJyxcbiAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleE5vcm1hbCcsXG4gICAgICBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSA9IGBcblxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxNYXRyaXhOYW1lfTtcblxuICAgICAgICBhdHRyaWJ1dGUgdmVjMyAke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzMgYW1iaWVudExpZ2h0ID0gdmVjMygwLjMsIDAuMywgMC4zKSxcbiAgICAgICAgICAgICBkaXJlY3Rpb25hbExpZ2h0Q29sb3VyID0gdmVjMygxLCAxLCAxKSxcbiAgICAgICAgICAgICBkaXJlY3Rpb25hbFZlY3RvciA9IG5vcm1hbGl6ZSh2ZWMzKDAuODUsIDAuOCwgMC43NSkpO1xuICAgICAgICAgIFxuICAgICAgICB2ZWMzIGNhbGN1bGF0ZUxpZ2h0aW5nKCkge1xuICAgICAgICAgIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbE1hdHJpeE5hbWV9ICogdmVjNCgke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9LCAxLjApOyAgICAgICAgICAgIFxuXG4gICAgICAgICAgZmxvYXQgZGlyZWN0aW9uYWwgPSBtYXgoZG90KHRyYW5zZm9ybWVkTm9ybWFsLnh5eiwgZGlyZWN0aW9uYWxWZWN0b3IpLCAwLjApO1xuICAgICAgICAgIFxuICAgICAgICAgIHZlYzMgbGlnaHRpbmcgPSBhbWJpZW50TGlnaHQgKyAoZGlyZWN0aW9uYWxMaWdodENvbG91ciAqIGRpcmVjdGlvbmFsKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gbGlnaHRpbmc7XG4gICAgICAgIH1cblxuICAgICAgYCxcbiAgICAgIGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlID0gYFxuXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke3JvdGF0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Bvc2l0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3BlcnNwZWN0aXZlTWF0cml4TmFtZX07XG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjNCBjYWxjdWxhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgICB2ZWM0IHBvc2l0aW9uID0gJHtwZXJzcGVjdGl2ZU1hdHJpeE5hbWV9ICogJHtwb3NpdGlvbk1hdHJpeE5hbWV9ICogJHtyb3RhdGlvbk1hdHJpeE5hbWV9ICogJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGA7XG5cbmNsYXNzIFNoYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIGNhbnZhcykge1xuICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgdGhpcy5ub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5vcm1hbE1hdHJpeE5hbWUpO1xuICAgIHRoaXMucm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHJvdGF0aW9uTWF0cml4TmFtZSk7XG4gICAgdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcG9zaXRpb25NYXRyaXhOYW1lKTtcbiAgICB0aGlzLnBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwZXJzcGVjdGl2ZU1hdHJpeE5hbWUpO1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUpO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSk7XG4gIH1cblxuICBnZXRDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuXG4gIGdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25CdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleFBvc2l0aW9uRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhOb3JtYWxCdWZmZXIodmVydGV4Tm9ybWFsRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleE5vcm1hbERhdGEpO1xuICB9XG5cbiAgYmluZChjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhOb3JtYWxCdWZmZXIoY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpO1xuICB9XG5cbiAgYmluZFZlcnRleE5vcm1hbEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMztcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsQnVmZmVyLCB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMgPSAzO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhQb3NpdGlvbkJ1ZmZlciwgdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMpO1xuICB9XG5cbiAgc2V0Q291bnQoY291bnQpIHtcbiAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgeyBWRVJURVhfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHR5cGUgPSBWRVJURVhfU0hBREVSLFxuICAgICAgICAgIHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0eXBlLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgeyBGUkFHTUVOVF9TSEFERVIgfSA9IGNvbnRleHQsXG4gICAgICAgICAgdHlwZSA9IEZSQUdNRU5UX1NIQURFUixcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIodHlwZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hhZGVyID0gbmV3IENsYXNzKHByb2dyYW0sIGNhbnZhcyk7XG5cbiAgICByZXR1cm4gc2hhZGVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU2hhZGVyLCB7XG4gIGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlOiBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSxcbiAgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2U6IGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaGFkZXI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlcih0eXBlLCBzaGFkZXJTb3VyY2UsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDT01QSUxFX1NUQVRVUyB9ID0gY29udGV4dCxcbiAgICAgICAgcG5hbWUgPSBDT01QSUxFX1NUQVRVUyxcbiAgICAgICAgc2hhZGVyID0gY29udGV4dC5jcmVhdGVTaGFkZXIodHlwZSk7XG5cbiAgY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xuXG4gIGNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gIGNvbnN0IGNvbXBpbGVTdGF0dXMgPSBjb250ZXh0LmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHBuYW1lKTtcblxuICBpZiAoIWNvbXBpbGVTdGF0dXMpIHtcbiAgICBjb25zdCBzaGFkZXJJbmZvTG9nID0gY29udGV4dC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlci5gKTtcbiAgfVxuXG4gIHJldHVybiBzaGFkZXI7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNoYWRlciA9IHJlcXVpcmUoJy4uL3NoYWRlcicpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlLCBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZSB9ID0gU2hhZGVyO1xuXG5jb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lID0gJ2FWZXJ0ZXhDb2xvdXInO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBgXG4gICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgJHtjYWxjdWxhdGVMaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke2NhbGN1bGF0ZVBvc2l0aW9uU291cmNlfVxuICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuXG4gICAgICAgICAgdkNvbG91ciA9ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGAsXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IGBcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB2Q29sb3VyLmEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYDtcbiAgXG5jbGFzcyBDb2xvdXJTaGFkZXIgZXh0ZW5kcyBTaGFkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBzdXBlcihwcm9ncmFtLCBjYW52YXMpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMob2Zmc2V0VmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIGNhbnZhcykge1xuICAgIHRoaXMuY3JlYXRlVmVydGV4UG9zaXRpb25CdWZmZXIob2Zmc2V0VmVydGV4UG9zaXRpb25EYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Tm9ybWFsQnVmZmVyKHZlcnRleE5vcm1hbERhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhDb2xvdXJCdWZmZXIodmVydGV4Q29sb3VyRGF0YSwgY2FudmFzKTtcblxuICAgIGNvbnN0IGNvdW50ID0gY2FudmFzLmNyZWF0ZUFuZEJpbmRFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4RGF0YSk7XG5cbiAgICB0aGlzLnNldENvdW50KGNvdW50KTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleENvbG91ckJ1ZmZlcih2ZXJ0ZXhDb2xvdXJEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleENvbG91ckJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Q29sb3VyRGF0YSk7XG4gIH1cblxuICBiaW5kKGNhbnZhcykge1xuICAgIHRoaXMuYmluZFZlcnRleENvbG91ckJ1ZmZlcihjYW52YXMpO1xuXG4gICAgc3VwZXIuYmluZChjYW52YXMpO1xuICB9XG5cbiAgYmluZFZlcnRleENvbG91ckJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzID0gNDtcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Q29sb3VyQnVmZmVyLCB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzKTtcbiAgfVxuXG4gIGFjdGl2YXRlVGV4dHVyZShjYW52YXMpIHt9ICAvLy9cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVQcm9ncmFtKCksXG4gICAgICAgICAgdmVydGV4U2hhZGVyID0gU2hhZGVyLmNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBTaGFkZXIuY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyk7XG5cbiAgICBjb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgIGNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgICBjb250ZXh0LmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgY29uc3QgY29sb3VyU2hhZGVyID0gU2hhZGVyLmZyb21Qcm9ncmFtKENvbG91clNoYWRlciwgcHJvZ3JhbSwgY2FudmFzKTtcblxuICAgIHJldHVybiBjb2xvdXJTaGFkZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJTaGFkZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNoYWRlciA9IHJlcXVpcmUoJy4uL3NoYWRlcicpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlLCBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZSB9ID0gU2hhZGVyO1xuXG5jb25zdCBzYW1wbGVyTmFtZSA9ICd1U2FtcGxlcicsXG4gICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgPSAnYVRleHR1cmVDb29yZGluYXRlJztcblxuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gYFxuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzIgJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICBcbiAgICAgICAgJHtjYWxjdWxhdGVMaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke2NhbGN1bGF0ZVBvc2l0aW9uU291cmNlfVxuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIHZUZXh0dXJlQ29vcmRpbmF0ZSA9ICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGAsXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IGBcbiAgICAgICAgXG4gICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEICR7c2FtcGxlck5hbWV9O1xuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgaGlnaHAgdmVjNCB0ZXhlbENvbG91ciA9IHRleHR1cmUyRCgke3NhbXBsZXJOYW1lfSwgdlRleHR1cmVDb29yZGluYXRlKTtcbiAgICAgICAgICBcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHRleGVsQ29sb3VyLnJnYiAqIHZMaWdodGluZywgdGV4ZWxDb2xvdXIuYSk7ICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGA7XG5cbmNsYXNzIFRleHR1cmVTaGFkZXIgZXh0ZW5kcyBTaGFkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBzdXBlcihwcm9ncmFtLCBjYW52YXMpO1xuXG4gICAgdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBzYW1wbGVyTmFtZSk7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKG9mZnNldFZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIGNhbnZhcykge1xuICAgIHRoaXMuY3JlYXRlVmVydGV4UG9zaXRpb25CdWZmZXIob2Zmc2V0VmVydGV4UG9zaXRpb25EYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Tm9ybWFsQnVmZmVyKHZlcnRleE5vcm1hbERhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZURhdGEsIGNhbnZhcyk7XG5cbiAgICBjb25zdCBjb3VudCA9IGNhbnZhcy5jcmVhdGVBbmRCaW5kRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleERhdGEpO1xuXG4gICAgdGhpcy5zZXRDb3VudChjb3VudCk7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcih2ZXJ0ZXhDb29yZGluYXRlRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Q29vcmRpbmF0ZURhdGEpO1xuICB9XG5cbiAgYmluZChjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpO1xuXG4gICAgc3VwZXIuYmluZChjYW52YXMpO1xuICB9XG5cbiAgYmluZFRleHR1cmVDb29yZGluYXRlQnVmZmVyKGNhbnZhcykge1xuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyA9IDI7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlQnVmZmVyLCB0aGlzLnRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyk7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlKGltYWdlLCBjYW52YXMpIHtcbiAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSk7XG4gIH1cblxuICBhY3RpdmF0ZVRleHR1cmUoY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgeyBURVhUVVJFMCB9ID0gY29udGV4dCxcbiAgICAgICAgICB0YXJnZXQgPSBURVhUVVJFMCwgIC8vL1xuICAgICAgICAgIHVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gMDtcblxuICAgIGNhbnZhcy5hY3RpdmF0ZVRleHR1cmUodGFyZ2V0KTtcblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVQcm9ncmFtKCksXG4gICAgICAgICAgdmVydGV4U2hhZGVyID0gU2hhZGVyLmNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBTaGFkZXIuY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyk7XG5cbiAgICBjb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgIGNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgICBjb250ZXh0LmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgY29uc3QgdGV4dHVyZVNoYWRlciA9IFNoYWRlci5mcm9tUHJvZ3JhbShUZXh0dXJlU2hhZGVyLCBwcm9ncmFtLCBjYW52YXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVTaGFkZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlU2hhZGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5O1xuXG5mdW5jdGlvbiBkaXZpZGUoZGF0YSwgZGl2aXNvcikge1xuICBjb25zdCBhcnJheXMgPSBbXSxcbiAgICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoLFxuICAgICAgICBhcnJheXNMZW5ndGggPSBkYXRhTGVuZ3RoIC8gZGl2aXNvcjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5c0xlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBvZmZzZXQgPSBpICogZGl2aXNvcjtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGl2aXNvcjsgaisrKSB7XG4gICAgICBhcnJheVtqXSA9IGRhdGFbaiArIG9mZnNldF07XG4gICAgfVxuXG4gICAgYXJyYXlzW2ldID0gYXJyYXk7XG4gIH1cblxuICByZXR1cm4gYXJyYXlzO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICBjb25zdCBkYXRhID0gYXJyYXlzLnJlZHVjZShmdW5jdGlvbihkYXRhLCBhcnJheSkge1xuICAgIGRhdGEgPSBkYXRhLmNvbmNhdChhcnJheSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24oYXJyYXlVdGlsaXRpZXMsIHtcbiAgZGl2aWRlOiBkaXZpZGUsXG4gIGZsYXR0ZW46IGZsYXR0ZW5cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZG9tRWxlbWVudEZyb21TZWxlY3RvcjogZG9tRWxlbWVudEZyb21TZWxlY3RvclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IHJlcGVhdGVkbHkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZnVuY3Rpb24gcHJlbG9hZChzb3VyY2VzLCBjYWxsYmFjaykge1xuICBjb25zdCBpbWFnZXMgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gc291cmNlcy5sZW5ndGg7IC8vL1xuXG4gIHJlcGVhdGVkbHkoXG4gICAgZnVuY3Rpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpIHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdLFxuICAgICAgICAgICAgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgaW1hZ2VzW2luZGV4XSA9IGltYWdlO1xuXG4gICAgICBpbWFnZS5vbmxvYWQgPSBuZXh0OyAgLy8vXG5cbiAgICAgIGltYWdlLnNyYyA9IHNvdXJjZTsgIC8vL1xuICAgIH0sXG4gICAgbGVuZ3RoLFxuICAgIGRvbmVcbiAgKTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGNhbGxiYWNrKGltYWdlcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByZWxvYWQ6IHByZWxvYWRcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGFkZChhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBhcnJheSA9IGFycmF5MS5tYXAoZnVuY3Rpb24odmFsdWUxLCBpbmRleCkge1xuICAgIGNvbnN0IHZhbHVlMiA9IGFycmF5MltpbmRleF0sXG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZTEgKyB2YWx1ZTI7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFkZDogYWRkXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJTklUSUFMX0RJU1RBTkNFID0gMTA7XG4gICAgXG5jbGFzcyBab29tIHtcbiAgY29uc3RydWN0b3IoZGlzdGFuY2UpIHtcbiAgICB0aGlzLmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0YW5jZTtcbiAgfVxuXG4gIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpIHtcbiAgICB0aGlzLmRpc3RhbmNlICs9IGRlbHRhO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBJTklUSUFMX0RJU1RBTkNFLFxuICAgICAgICAgIHpvb20gPSBuZXcgWm9vbShkaXN0YW5jZSk7XG4gICAgXG4gICAgcmV0dXJuIHpvb207XG4gIH1cbn1cblxuY29uc3Qgem9vbSA9IFpvb20uZnJvbU5vdGhpbmcoKTtcblxubW9kdWxlLmV4cG9ydHMgPSB6b29tO1xuIiwiIiwibW9kdWxlLmV4cG9ydHMgPSBhZGpvaW50O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gYWRqb2ludChvdXQsIGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICAgIG91dFswXSAgPSAgKGExMSAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIxICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgKyBhMzEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSk7XG4gICAgb3V0WzFdICA9IC0oYTAxICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjEgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMSAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpKTtcbiAgICBvdXRbMl0gID0gIChhMDEgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFszXSAgPSAtKGEwMSAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpIC0gYTExICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikgKyBhMjEgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzRdICA9IC0oYTEwICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjAgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSArIGEzMCAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpKTtcbiAgICBvdXRbNV0gID0gIChhMDAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikpO1xuICAgIG91dFs2XSAgPSAtKGEwMCAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpIC0gYTEwICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzAgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzddICA9ICAoYTAwICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikgLSBhMTAgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSArIGEyMCAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgICBvdXRbOF0gID0gIChhMTAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSkpO1xuICAgIG91dFs5XSAgPSAtKGEwMCAqIChhMjEgKiBhMzMgLSBhMjMgKiBhMzEpIC0gYTIwICogKGEwMSAqIGEzMyAtIGEwMyAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTIzIC0gYTAzICogYTIxKSk7XG4gICAgb3V0WzEwXSA9ICAoYTAwICogKGExMSAqIGEzMyAtIGExMyAqIGEzMSkgLSBhMTAgKiAoYTAxICogYTMzIC0gYTAzICogYTMxKSArIGEzMCAqIChhMDEgKiBhMTMgLSBhMDMgKiBhMTEpKTtcbiAgICBvdXRbMTFdID0gLShhMDAgKiAoYTExICogYTIzIC0gYTEzICogYTIxKSAtIGExMCAqIChhMDEgKiBhMjMgLSBhMDMgKiBhMjEpICsgYTIwICogKGEwMSAqIGExMyAtIGEwMyAqIGExMSkpO1xuICAgIG91dFsxMl0gPSAtKGExMCAqIChhMjEgKiBhMzIgLSBhMjIgKiBhMzEpIC0gYTIwICogKGExMSAqIGEzMiAtIGExMiAqIGEzMSkgKyBhMzAgKiAoYTExICogYTIyIC0gYTEyICogYTIxKSk7XG4gICAgb3V0WzEzXSA9ICAoYTAwICogKGEyMSAqIGEzMiAtIGEyMiAqIGEzMSkgLSBhMjAgKiAoYTAxICogYTMyIC0gYTAyICogYTMxKSArIGEzMCAqIChhMDEgKiBhMjIgLSBhMDIgKiBhMjEpKTtcbiAgICBvdXRbMTRdID0gLShhMDAgKiAoYTExICogYTMyIC0gYTEyICogYTMxKSAtIGExMCAqIChhMDEgKiBhMzIgLSBhMDIgKiBhMzEpICsgYTMwICogKGEwMSAqIGExMiAtIGEwMiAqIGExMSkpO1xuICAgIG91dFsxNV0gPSAgKGEwMCAqIChhMTEgKiBhMjIgLSBhMTIgKiBhMjEpIC0gYTEwICogKGEwMSAqIGEyMiAtIGEwMiAqIGEyMSkgKyBhMjAgKiAoYTAxICogYTEyIC0gYTAyICogYTExKSk7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgbWF0cml4IHRvIGNsb25lXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxuICovXG5mdW5jdGlvbiBjbG9uZShhKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbNl07XG4gICAgb3V0WzddID0gYVs3XTtcbiAgICBvdXRbOF0gPSBhWzhdO1xuICAgIG91dFs5XSA9IGFbOV07XG4gICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgIG91dFsxMV0gPSBhWzExXTtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjb3B5O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBtYXQ0IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgb3V0WzldID0gYVs5XTtcbiAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IG1hdDRcbiAqXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxuICovXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIG91dFswXSA9IDE7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAxO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IDE7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBkZXRlcm1pbmFudDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcbiAqL1xuZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV0sXG4gICAgICAgIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdLFxuXG4gICAgICAgIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMCxcbiAgICAgICAgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwLFxuICAgICAgICBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTAsXG4gICAgICAgIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMSxcbiAgICAgICAgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExLFxuICAgICAgICBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTIsXG4gICAgICAgIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMCxcbiAgICAgICAgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwLFxuICAgICAgICBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzAsXG4gICAgICAgIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMSxcbiAgICAgICAgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxLFxuICAgICAgICBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gICAgcmV0dXJuIGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tUXVhdDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdDR9IHEgUm90YXRpb24gcXVhdGVybmlvblxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBmcm9tUXVhdChvdXQsIHEpIHtcbiAgICB2YXIgeCA9IHFbMF0sIHkgPSBxWzFdLCB6ID0gcVsyXSwgdyA9IHFbM10sXG4gICAgICAgIHgyID0geCArIHgsXG4gICAgICAgIHkyID0geSArIHksXG4gICAgICAgIHoyID0geiArIHosXG5cbiAgICAgICAgeHggPSB4ICogeDIsXG4gICAgICAgIHl4ID0geSAqIHgyLFxuICAgICAgICB5eSA9IHkgKiB5MixcbiAgICAgICAgenggPSB6ICogeDIsXG4gICAgICAgIHp5ID0geiAqIHkyLFxuICAgICAgICB6eiA9IHogKiB6MixcbiAgICAgICAgd3ggPSB3ICogeDIsXG4gICAgICAgIHd5ID0gdyAqIHkyLFxuICAgICAgICB3eiA9IHcgKiB6MjtcblxuICAgIG91dFswXSA9IDEgLSB5eSAtIHp6O1xuICAgIG91dFsxXSA9IHl4ICsgd3o7XG4gICAgb3V0WzJdID0genggLSB3eTtcbiAgICBvdXRbM10gPSAwO1xuXG4gICAgb3V0WzRdID0geXggLSB3ejtcbiAgICBvdXRbNV0gPSAxIC0geHggLSB6ejtcbiAgICBvdXRbNl0gPSB6eSArIHd4O1xuICAgIG91dFs3XSA9IDA7XG5cbiAgICBvdXRbOF0gPSB6eCArIHd5O1xuICAgIG91dFs5XSA9IHp5IC0gd3g7XG4gICAgb3V0WzEwXSA9IDEgLSB4eCAtIHl5O1xuICAgIG91dFsxMV0gPSAwO1xuXG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24gYW5kIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcbiAqICAgICB2YXIgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3ZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uKG91dCwgcSwgdikge1xuICAgIC8vIFF1YXRlcm5pb24gbWF0aFxuICAgIHZhciB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXSxcbiAgICAgICAgeDIgPSB4ICsgeCxcbiAgICAgICAgeTIgPSB5ICsgeSxcbiAgICAgICAgejIgPSB6ICsgeixcblxuICAgICAgICB4eCA9IHggKiB4MixcbiAgICAgICAgeHkgPSB4ICogeTIsXG4gICAgICAgIHh6ID0geCAqIHoyLFxuICAgICAgICB5eSA9IHkgKiB5MixcbiAgICAgICAgeXogPSB5ICogejIsXG4gICAgICAgIHp6ID0geiAqIHoyLFxuICAgICAgICB3eCA9IHcgKiB4MixcbiAgICAgICAgd3kgPSB3ICogeTIsXG4gICAgICAgIHd6ID0gdyAqIHoyO1xuXG4gICAgb3V0WzBdID0gMSAtICh5eSArIHp6KTtcbiAgICBvdXRbMV0gPSB4eSArIHd6O1xuICAgIG91dFsyXSA9IHh6IC0gd3k7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSB4eSAtIHd6O1xuICAgIG91dFs1XSA9IDEgLSAoeHggKyB6eik7XG4gICAgb3V0WzZdID0geXogKyB3eDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IHh6ICsgd3k7XG4gICAgb3V0WzldID0geXogLSB3eDtcbiAgICBvdXRbMTBdID0gMSAtICh4eCArIHl5KTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gdlswXTtcbiAgICBvdXRbMTNdID0gdlsxXTtcbiAgICBvdXRbMTRdID0gdlsyXTtcbiAgICBvdXRbMTVdID0gMTtcbiAgICBcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZydXN0dW07XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZnJ1c3R1bSBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtOdW1iZXJ9IGxlZnQgTGVmdCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IHJpZ2h0IFJpZ2h0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gYm90dG9tIEJvdHRvbSBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IHRvcCBUb3AgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGZydXN0dW0ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICAgIHZhciBybCA9IDEgLyAocmlnaHQgLSBsZWZ0KSxcbiAgICAgICAgdGIgPSAxIC8gKHRvcCAtIGJvdHRvbSksXG4gICAgICAgIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSAobmVhciAqIDIpICogcmw7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAobmVhciAqIDIpICogdGI7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IChyaWdodCArIGxlZnQpICogcmw7XG4gICAgb3V0WzldID0gKHRvcCArIGJvdHRvbSkgKiB0YjtcbiAgICBvdXRbMTBdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzExXSA9IC0xO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAoZmFyICogbmVhciAqIDIpICogbmY7XG4gICAgb3V0WzE1XSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcblxuLyoqXG4gKiBTZXQgYSBtYXQ0IHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgICBvdXRbMF0gPSAxO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gMTtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAxO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6IHJlcXVpcmUoJy4vY3JlYXRlJylcbiAgLCBjbG9uZTogcmVxdWlyZSgnLi9jbG9uZScpXG4gICwgY29weTogcmVxdWlyZSgnLi9jb3B5JylcbiAgLCBpZGVudGl0eTogcmVxdWlyZSgnLi9pZGVudGl0eScpXG4gICwgdHJhbnNwb3NlOiByZXF1aXJlKCcuL3RyYW5zcG9zZScpXG4gICwgaW52ZXJ0OiByZXF1aXJlKCcuL2ludmVydCcpXG4gICwgYWRqb2ludDogcmVxdWlyZSgnLi9hZGpvaW50JylcbiAgLCBkZXRlcm1pbmFudDogcmVxdWlyZSgnLi9kZXRlcm1pbmFudCcpXG4gICwgbXVsdGlwbHk6IHJlcXVpcmUoJy4vbXVsdGlwbHknKVxuICAsIHRyYW5zbGF0ZTogcmVxdWlyZSgnLi90cmFuc2xhdGUnKVxuICAsIHNjYWxlOiByZXF1aXJlKCcuL3NjYWxlJylcbiAgLCByb3RhdGU6IHJlcXVpcmUoJy4vcm90YXRlJylcbiAgLCByb3RhdGVYOiByZXF1aXJlKCcuL3JvdGF0ZVgnKVxuICAsIHJvdGF0ZVk6IHJlcXVpcmUoJy4vcm90YXRlWScpXG4gICwgcm90YXRlWjogcmVxdWlyZSgnLi9yb3RhdGVaJylcbiAgLCBmcm9tUm90YXRpb25UcmFuc2xhdGlvbjogcmVxdWlyZSgnLi9mcm9tUm90YXRpb25UcmFuc2xhdGlvbicpXG4gICwgZnJvbVF1YXQ6IHJlcXVpcmUoJy4vZnJvbVF1YXQnKVxuICAsIGZydXN0dW06IHJlcXVpcmUoJy4vZnJ1c3R1bScpXG4gICwgcGVyc3BlY3RpdmU6IHJlcXVpcmUoJy4vcGVyc3BlY3RpdmUnKVxuICAsIHBlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3OiByZXF1aXJlKCcuL3BlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3JylcbiAgLCBvcnRobzogcmVxdWlyZSgnLi9vcnRobycpXG4gICwgbG9va0F0OiByZXF1aXJlKCcuL2xvb2tBdCcpXG4gICwgc3RyOiByZXF1aXJlKCcuL3N0cicpXG59IiwibW9kdWxlLmV4cG9ydHMgPSBpbnZlcnQ7XG5cbi8qKlxuICogSW52ZXJ0cyBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XSxcblxuICAgICAgICBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTAsXG4gICAgICAgIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMCxcbiAgICAgICAgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwLFxuICAgICAgICBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTEsXG4gICAgICAgIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMSxcbiAgICAgICAgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyLFxuICAgICAgICBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzAsXG4gICAgICAgIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMCxcbiAgICAgICAgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwLFxuICAgICAgICBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzEsXG4gICAgICAgIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMSxcbiAgICAgICAgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyLFxuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgICAgICAgZGV0ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gICAgaWYgKCFkZXQpIHsgXG4gICAgICAgIHJldHVybiBudWxsOyBcbiAgICB9XG4gICAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gICAgb3V0WzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XG4gICAgb3V0WzFdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQ7XG4gICAgb3V0WzJdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XG4gICAgb3V0WzNdID0gKGEyMiAqIGIwNCAtIGEyMSAqIGIwNSAtIGEyMyAqIGIwMykgKiBkZXQ7XG4gICAgb3V0WzRdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XG4gICAgb3V0WzVdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XG4gICAgb3V0WzZdID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XG4gICAgb3V0WzddID0gKGEyMCAqIGIwNSAtIGEyMiAqIGIwMiArIGEyMyAqIGIwMSkgKiBkZXQ7XG4gICAgb3V0WzhdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzldID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzEwXSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xuICAgIG91dFsxMV0gPSAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldDtcbiAgICBvdXRbMTJdID0gKGExMSAqIGIwNyAtIGExMCAqIGIwOSAtIGExMiAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzEzXSA9IChhMDAgKiBiMDkgLSBhMDEgKiBiMDcgKyBhMDIgKiBiMDYpICogZGV0O1xuICAgIG91dFsxNF0gPSAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldDtcbiAgICBvdXRbMTVdID0gKGEyMCAqIGIwMyAtIGEyMSAqIGIwMSArIGEyMiAqIGIwMCkgKiBkZXQ7XG5cbiAgICByZXR1cm4gb3V0O1xufTsiLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbG9va0F0O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGxvb2stYXQgbWF0cml4IHdpdGggdGhlIGdpdmVuIGV5ZSBwb3NpdGlvbiwgZm9jYWwgcG9pbnQsIGFuZCB1cCBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHt2ZWMzfSBleWUgUG9zaXRpb24gb2YgdGhlIHZpZXdlclxuICogQHBhcmFtIHt2ZWMzfSBjZW50ZXIgUG9pbnQgdGhlIHZpZXdlciBpcyBsb29raW5nIGF0XG4gKiBAcGFyYW0ge3ZlYzN9IHVwIHZlYzMgcG9pbnRpbmcgdXBcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbG9va0F0KG91dCwgZXllLCBjZW50ZXIsIHVwKSB7XG4gICAgdmFyIHgwLCB4MSwgeDIsIHkwLCB5MSwgeTIsIHowLCB6MSwgejIsIGxlbixcbiAgICAgICAgZXlleCA9IGV5ZVswXSxcbiAgICAgICAgZXlleSA9IGV5ZVsxXSxcbiAgICAgICAgZXlleiA9IGV5ZVsyXSxcbiAgICAgICAgdXB4ID0gdXBbMF0sXG4gICAgICAgIHVweSA9IHVwWzFdLFxuICAgICAgICB1cHogPSB1cFsyXSxcbiAgICAgICAgY2VudGVyeCA9IGNlbnRlclswXSxcbiAgICAgICAgY2VudGVyeSA9IGNlbnRlclsxXSxcbiAgICAgICAgY2VudGVyeiA9IGNlbnRlclsyXTtcblxuICAgIGlmIChNYXRoLmFicyhleWV4IC0gY2VudGVyeCkgPCAwLjAwMDAwMSAmJlxuICAgICAgICBNYXRoLmFicyhleWV5IC0gY2VudGVyeSkgPCAwLjAwMDAwMSAmJlxuICAgICAgICBNYXRoLmFicyhleWV6IC0gY2VudGVyeikgPCAwLjAwMDAwMSkge1xuICAgICAgICByZXR1cm4gaWRlbnRpdHkob3V0KTtcbiAgICB9XG5cbiAgICB6MCA9IGV5ZXggLSBjZW50ZXJ4O1xuICAgIHoxID0gZXlleSAtIGNlbnRlcnk7XG4gICAgejIgPSBleWV6IC0gY2VudGVyejtcblxuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQoejAgKiB6MCArIHoxICogejEgKyB6MiAqIHoyKTtcbiAgICB6MCAqPSBsZW47XG4gICAgejEgKj0gbGVuO1xuICAgIHoyICo9IGxlbjtcblxuICAgIHgwID0gdXB5ICogejIgLSB1cHogKiB6MTtcbiAgICB4MSA9IHVweiAqIHowIC0gdXB4ICogejI7XG4gICAgeDIgPSB1cHggKiB6MSAtIHVweSAqIHowO1xuICAgIGxlbiA9IE1hdGguc3FydCh4MCAqIHgwICsgeDEgKiB4MSArIHgyICogeDIpO1xuICAgIGlmICghbGVuKSB7XG4gICAgICAgIHgwID0gMDtcbiAgICAgICAgeDEgPSAwO1xuICAgICAgICB4MiA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGVuID0gMSAvIGxlbjtcbiAgICAgICAgeDAgKj0gbGVuO1xuICAgICAgICB4MSAqPSBsZW47XG4gICAgICAgIHgyICo9IGxlbjtcbiAgICB9XG5cbiAgICB5MCA9IHoxICogeDIgLSB6MiAqIHgxO1xuICAgIHkxID0gejIgKiB4MCAtIHowICogeDI7XG4gICAgeTIgPSB6MCAqIHgxIC0gejEgKiB4MDtcblxuICAgIGxlbiA9IE1hdGguc3FydCh5MCAqIHkwICsgeTEgKiB5MSArIHkyICogeTIpO1xuICAgIGlmICghbGVuKSB7XG4gICAgICAgIHkwID0gMDtcbiAgICAgICAgeTEgPSAwO1xuICAgICAgICB5MiA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGVuID0gMSAvIGxlbjtcbiAgICAgICAgeTAgKj0gbGVuO1xuICAgICAgICB5MSAqPSBsZW47XG4gICAgICAgIHkyICo9IGxlbjtcbiAgICB9XG5cbiAgICBvdXRbMF0gPSB4MDtcbiAgICBvdXRbMV0gPSB5MDtcbiAgICBvdXRbMl0gPSB6MDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IHgxO1xuICAgIG91dFs1XSA9IHkxO1xuICAgIG91dFs2XSA9IHoxO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0geDI7XG4gICAgb3V0WzldID0geTI7XG4gICAgb3V0WzEwXSA9IHoyO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAtKHgwICogZXlleCArIHgxICogZXlleSArIHgyICogZXlleik7XG4gICAgb3V0WzEzXSA9IC0oeTAgKiBleWV4ICsgeTEgKiBleWV5ICsgeTIgKiBleWV6KTtcbiAgICBvdXRbMTRdID0gLSh6MCAqIGV5ZXggKyB6MSAqIGV5ZXkgKyB6MiAqIGV5ZXopO1xuICAgIG91dFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBtdWx0aXBseTtcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBtYXQ0J3NcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV0sXG4gICAgICAgIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdO1xuXG4gICAgLy8gQ2FjaGUgb25seSB0aGUgY3VycmVudCBsaW5lIG9mIHRoZSBzZWNvbmQgbWF0cml4XG4gICAgdmFyIGIwICA9IGJbMF0sIGIxID0gYlsxXSwgYjIgPSBiWzJdLCBiMyA9IGJbM107ICBcbiAgICBvdXRbMF0gPSBiMCphMDAgKyBiMSphMTAgKyBiMiphMjAgKyBiMyphMzA7XG4gICAgb3V0WzFdID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICAgIG91dFsyXSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbM10gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG5cbiAgICBiMCA9IGJbNF07IGIxID0gYls1XTsgYjIgPSBiWzZdOyBiMyA9IGJbN107XG4gICAgb3V0WzRdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFs1XSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbNl0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gICAgb3V0WzddID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuXG4gICAgYjAgPSBiWzhdOyBiMSA9IGJbOV07IGIyID0gYlsxMF07IGIzID0gYlsxMV07XG4gICAgb3V0WzhdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFs5XSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbMTBdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFsxMV0gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG5cbiAgICBiMCA9IGJbMTJdOyBiMSA9IGJbMTNdOyBiMiA9IGJbMTRdOyBiMyA9IGJbMTVdO1xuICAgIG91dFsxMl0gPSBiMCphMDAgKyBiMSphMTAgKyBiMiphMjAgKyBiMyphMzA7XG4gICAgb3V0WzEzXSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbMTRdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFsxNV0gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBvcnRobztcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBvcnRob2dvbmFsIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBvcnRobyhvdXQsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XG4gICAgdmFyIGxyID0gMSAvIChsZWZ0IC0gcmlnaHQpLFxuICAgICAgICBidCA9IDEgLyAoYm90dG9tIC0gdG9wKSxcbiAgICAgICAgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFswXSA9IC0yICogbHI7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAtMiAqIGJ0O1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IDIgKiBuZjtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gKGxlZnQgKyByaWdodCkgKiBscjtcbiAgICBvdXRbMTNdID0gKHRvcCArIGJvdHRvbSkgKiBidDtcbiAgICBvdXRbMTRdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBwZXJzcGVjdGl2ZTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gZm92eSBWZXJ0aWNhbCBmaWVsZCBvZiB2aWV3IGluIHJhZGlhbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBhc3BlY3QgQXNwZWN0IHJhdGlvLiB0eXBpY2FsbHkgdmlld3BvcnQgd2lkdGgvaGVpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBwZXJzcGVjdGl2ZShvdXQsIGZvdnksIGFzcGVjdCwgbmVhciwgZmFyKSB7XG4gICAgdmFyIGYgPSAxLjAgLyBNYXRoLnRhbihmb3Z5IC8gMiksXG4gICAgICAgIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSBmIC8gYXNwZWN0O1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gZjtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgICBvdXRbMTFdID0gLTE7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9ICgyICogZmFyICogbmVhcikgKiBuZjtcbiAgICBvdXRbMTVdID0gMDtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHBlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHBlcnNwZWN0aXZlIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGZpZWxkIG9mIHZpZXcuXG4gKiBUaGlzIGlzIHByaW1hcmlseSB1c2VmdWwgZm9yIGdlbmVyYXRpbmcgcHJvamVjdGlvbiBtYXRyaWNlcyB0byBiZSB1c2VkXG4gKiB3aXRoIHRoZSBzdGlsbCBleHBlcmllbWVudGFsIFdlYlZSIEFQSS5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gZm92IE9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgdmFsdWVzOiB1cERlZ3JlZXMsIGRvd25EZWdyZWVzLCBsZWZ0RGVncmVlcywgcmlnaHREZWdyZWVzXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBwZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldyhvdXQsIGZvdiwgbmVhciwgZmFyKSB7XG4gICAgdmFyIHVwVGFuID0gTWF0aC50YW4oZm92LnVwRGVncmVlcyAqIE1hdGguUEkvMTgwLjApLFxuICAgICAgICBkb3duVGFuID0gTWF0aC50YW4oZm92LmRvd25EZWdyZWVzICogTWF0aC5QSS8xODAuMCksXG4gICAgICAgIGxlZnRUYW4gPSBNYXRoLnRhbihmb3YubGVmdERlZ3JlZXMgKiBNYXRoLlBJLzE4MC4wKSxcbiAgICAgICAgcmlnaHRUYW4gPSBNYXRoLnRhbihmb3YucmlnaHREZWdyZWVzICogTWF0aC5QSS8xODAuMCksXG4gICAgICAgIHhTY2FsZSA9IDIuMCAvIChsZWZ0VGFuICsgcmlnaHRUYW4pLFxuICAgICAgICB5U2NhbGUgPSAyLjAgLyAodXBUYW4gKyBkb3duVGFuKTtcblxuICAgIG91dFswXSA9IHhTY2FsZTtcbiAgICBvdXRbMV0gPSAwLjA7XG4gICAgb3V0WzJdID0gMC4wO1xuICAgIG91dFszXSA9IDAuMDtcbiAgICBvdXRbNF0gPSAwLjA7XG4gICAgb3V0WzVdID0geVNjYWxlO1xuICAgIG91dFs2XSA9IDAuMDtcbiAgICBvdXRbN10gPSAwLjA7XG4gICAgb3V0WzhdID0gLSgobGVmdFRhbiAtIHJpZ2h0VGFuKSAqIHhTY2FsZSAqIDAuNSk7XG4gICAgb3V0WzldID0gKCh1cFRhbiAtIGRvd25UYW4pICogeVNjYWxlICogMC41KTtcbiAgICBvdXRbMTBdID0gZmFyIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFsxMV0gPSAtMS4wO1xuICAgIG91dFsxMl0gPSAwLjA7XG4gICAgb3V0WzEzXSA9IDAuMDtcbiAgICBvdXRbMTRdID0gKGZhciAqIG5lYXIpIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFsxNV0gPSAwLjA7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuIiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGU7XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdDQgYnkgdGhlIGdpdmVuIGFuZ2xlXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEBwYXJhbSB7dmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCwgYXhpcykge1xuICAgIHZhciB4ID0gYXhpc1swXSwgeSA9IGF4aXNbMV0sIHogPSBheGlzWzJdLFxuICAgICAgICBsZW4gPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KSxcbiAgICAgICAgcywgYywgdCxcbiAgICAgICAgYTAwLCBhMDEsIGEwMiwgYTAzLFxuICAgICAgICBhMTAsIGExMSwgYTEyLCBhMTMsXG4gICAgICAgIGEyMCwgYTIxLCBhMjIsIGEyMyxcbiAgICAgICAgYjAwLCBiMDEsIGIwMixcbiAgICAgICAgYjEwLCBiMTEsIGIxMixcbiAgICAgICAgYjIwLCBiMjEsIGIyMjtcblxuICAgIGlmIChNYXRoLmFicyhsZW4pIDwgMC4wMDAwMDEpIHsgcmV0dXJuIG51bGw7IH1cbiAgICBcbiAgICBsZW4gPSAxIC8gbGVuO1xuICAgIHggKj0gbGVuO1xuICAgIHkgKj0gbGVuO1xuICAgIHogKj0gbGVuO1xuXG4gICAgcyA9IE1hdGguc2luKHJhZCk7XG4gICAgYyA9IE1hdGguY29zKHJhZCk7XG4gICAgdCA9IDEgLSBjO1xuXG4gICAgYTAwID0gYVswXTsgYTAxID0gYVsxXTsgYTAyID0gYVsyXTsgYTAzID0gYVszXTtcbiAgICBhMTAgPSBhWzRdOyBhMTEgPSBhWzVdOyBhMTIgPSBhWzZdOyBhMTMgPSBhWzddO1xuICAgIGEyMCA9IGFbOF07IGEyMSA9IGFbOV07IGEyMiA9IGFbMTBdOyBhMjMgPSBhWzExXTtcblxuICAgIC8vIENvbnN0cnVjdCB0aGUgZWxlbWVudHMgb2YgdGhlIHJvdGF0aW9uIG1hdHJpeFxuICAgIGIwMCA9IHggKiB4ICogdCArIGM7IGIwMSA9IHkgKiB4ICogdCArIHogKiBzOyBiMDIgPSB6ICogeCAqIHQgLSB5ICogcztcbiAgICBiMTAgPSB4ICogeSAqIHQgLSB6ICogczsgYjExID0geSAqIHkgKiB0ICsgYzsgYjEyID0geiAqIHkgKiB0ICsgeCAqIHM7XG4gICAgYjIwID0geCAqIHogKiB0ICsgeSAqIHM7IGIyMSA9IHkgKiB6ICogdCAtIHggKiBzOyBiMjIgPSB6ICogeiAqIHQgKyBjO1xuXG4gICAgLy8gUGVyZm9ybSByb3RhdGlvbi1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbMF0gPSBhMDAgKiBiMDAgKyBhMTAgKiBiMDEgKyBhMjAgKiBiMDI7XG4gICAgb3V0WzFdID0gYTAxICogYjAwICsgYTExICogYjAxICsgYTIxICogYjAyO1xuICAgIG91dFsyXSA9IGEwMiAqIGIwMCArIGExMiAqIGIwMSArIGEyMiAqIGIwMjtcbiAgICBvdXRbM10gPSBhMDMgKiBiMDAgKyBhMTMgKiBiMDEgKyBhMjMgKiBiMDI7XG4gICAgb3V0WzRdID0gYTAwICogYjEwICsgYTEwICogYjExICsgYTIwICogYjEyO1xuICAgIG91dFs1XSA9IGEwMSAqIGIxMCArIGExMSAqIGIxMSArIGEyMSAqIGIxMjtcbiAgICBvdXRbNl0gPSBhMDIgKiBiMTAgKyBhMTIgKiBiMTEgKyBhMjIgKiBiMTI7XG4gICAgb3V0WzddID0gYTAzICogYjEwICsgYTEzICogYjExICsgYTIzICogYjEyO1xuICAgIG91dFs4XSA9IGEwMCAqIGIyMCArIGExMCAqIGIyMSArIGEyMCAqIGIyMjtcbiAgICBvdXRbOV0gPSBhMDEgKiBiMjAgKyBhMTEgKiBiMjEgKyBhMjEgKiBiMjI7XG4gICAgb3V0WzEwXSA9IGEwMiAqIGIyMCArIGExMiAqIGIyMSArIGEyMiAqIGIyMjtcbiAgICBvdXRbMTFdID0gYTAzICogYjIwICsgYTEzICogYjIxICsgYTIzICogYjIyO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCBsYXN0IHJvd1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlWDtcblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFggYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVgob3V0LCBhLCByYWQpIHtcbiAgICB2YXIgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICAgIGMgPSBNYXRoLmNvcyhyYWQpLFxuICAgICAgICBhMTAgPSBhWzRdLFxuICAgICAgICBhMTEgPSBhWzVdLFxuICAgICAgICBhMTIgPSBhWzZdLFxuICAgICAgICBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLFxuICAgICAgICBhMjEgPSBhWzldLFxuICAgICAgICBhMjIgPSBhWzEwXSxcbiAgICAgICAgYTIzID0gYVsxMV07XG5cbiAgICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIHJvd3NcbiAgICAgICAgb3V0WzBdICA9IGFbMF07XG4gICAgICAgIG91dFsxXSAgPSBhWzFdO1xuICAgICAgICBvdXRbMl0gID0gYVsyXTtcbiAgICAgICAgb3V0WzNdICA9IGFbM107XG4gICAgICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzRdID0gYTEwICogYyArIGEyMCAqIHM7XG4gICAgb3V0WzVdID0gYTExICogYyArIGEyMSAqIHM7XG4gICAgb3V0WzZdID0gYTEyICogYyArIGEyMiAqIHM7XG4gICAgb3V0WzddID0gYTEzICogYyArIGEyMyAqIHM7XG4gICAgb3V0WzhdID0gYTIwICogYyAtIGExMCAqIHM7XG4gICAgb3V0WzldID0gYTIxICogYyAtIGExMSAqIHM7XG4gICAgb3V0WzEwXSA9IGEyMiAqIGMgLSBhMTIgKiBzO1xuICAgIG91dFsxMV0gPSBhMjMgKiBjIC0gYTEzICogcztcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZVk7XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBZIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTAzID0gYVszXSxcbiAgICAgICAgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCByb3dzXG4gICAgICAgIG91dFs0XSAgPSBhWzRdO1xuICAgICAgICBvdXRbNV0gID0gYVs1XTtcbiAgICAgICAgb3V0WzZdICA9IGFbNl07XG4gICAgICAgIG91dFs3XSAgPSBhWzddO1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSA9IGEwMCAqIGMgLSBhMjAgKiBzO1xuICAgIG91dFsxXSA9IGEwMSAqIGMgLSBhMjEgKiBzO1xuICAgIG91dFsyXSA9IGEwMiAqIGMgLSBhMjIgKiBzO1xuICAgIG91dFszXSA9IGEwMyAqIGMgLSBhMjMgKiBzO1xuICAgIG91dFs4XSA9IGEwMCAqIHMgKyBhMjAgKiBjO1xuICAgIG91dFs5XSA9IGEwMSAqIHMgKyBhMjEgKiBjO1xuICAgIG91dFsxMF0gPSBhMDIgKiBzICsgYTIyICogYztcbiAgICBvdXRbMTFdID0gYTAzICogcyArIGEyMyAqIGM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVaO1xuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWiBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIHJhZCkge1xuICAgIHZhciBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgICAgYyA9IE1hdGguY29zKHJhZCksXG4gICAgICAgIGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sXG4gICAgICAgIGExMSA9IGFbNV0sXG4gICAgICAgIGExMiA9IGFbNl0sXG4gICAgICAgIGExMyA9IGFbN107XG5cbiAgICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIGxhc3Qgcm93XG4gICAgICAgIG91dFs4XSAgPSBhWzhdO1xuICAgICAgICBvdXRbOV0gID0gYVs5XTtcbiAgICAgICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgICAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzBdID0gYTAwICogYyArIGExMCAqIHM7XG4gICAgb3V0WzFdID0gYTAxICogYyArIGExMSAqIHM7XG4gICAgb3V0WzJdID0gYTAyICogYyArIGExMiAqIHM7XG4gICAgb3V0WzNdID0gYTAzICogYyArIGExMyAqIHM7XG4gICAgb3V0WzRdID0gYTEwICogYyAtIGEwMCAqIHM7XG4gICAgb3V0WzVdID0gYTExICogYyAtIGEwMSAqIHM7XG4gICAgb3V0WzZdID0gYTEyICogYyAtIGEwMiAqIHM7XG4gICAgb3V0WzddID0gYTEzICogYyAtIGEwMyAqIHM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZTtcblxuLyoqXG4gKiBTY2FsZXMgdGhlIG1hdDQgYnkgdGhlIGRpbWVuc2lvbnMgaW4gdGhlIGdpdmVuIHZlYzNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcbiAqIEBwYXJhbSB7dmVjM30gdiB0aGUgdmVjMyB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKiovXG5mdW5jdGlvbiBzY2FsZShvdXQsIGEsIHYpIHtcbiAgICB2YXIgeCA9IHZbMF0sIHkgPSB2WzFdLCB6ID0gdlsyXTtcblxuICAgIG91dFswXSA9IGFbMF0gKiB4O1xuICAgIG91dFsxXSA9IGFbMV0gKiB4O1xuICAgIG91dFsyXSA9IGFbMl0gKiB4O1xuICAgIG91dFszXSA9IGFbM10gKiB4O1xuICAgIG91dFs0XSA9IGFbNF0gKiB5O1xuICAgIG91dFs1XSA9IGFbNV0gKiB5O1xuICAgIG91dFs2XSA9IGFbNl0gKiB5O1xuICAgIG91dFs3XSA9IGFbN10gKiB5O1xuICAgIG91dFs4XSA9IGFbOF0gKiB6O1xuICAgIG91dFs5XSA9IGFbOV0gKiB6O1xuICAgIG91dFsxMF0gPSBhWzEwXSAqIHo7XG4gICAgb3V0WzExXSA9IGFbMTFdICogejtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBzdHI7XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG1hdCBtYXRyaXggdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5mdW5jdGlvbiBzdHIoYSkge1xuICAgIHJldHVybiAnbWF0NCgnICsgYVswXSArICcsICcgKyBhWzFdICsgJywgJyArIGFbMl0gKyAnLCAnICsgYVszXSArICcsICcgK1xuICAgICAgICAgICAgICAgICAgICBhWzRdICsgJywgJyArIGFbNV0gKyAnLCAnICsgYVs2XSArICcsICcgKyBhWzddICsgJywgJyArXG4gICAgICAgICAgICAgICAgICAgIGFbOF0gKyAnLCAnICsgYVs5XSArICcsICcgKyBhWzEwXSArICcsICcgKyBhWzExXSArICcsICcgKyBcbiAgICAgICAgICAgICAgICAgICAgYVsxMl0gKyAnLCAnICsgYVsxM10gKyAnLCAnICsgYVsxNF0gKyAnLCAnICsgYVsxNV0gKyAnKSc7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNsYXRlO1xuXG4vKipcbiAqIFRyYW5zbGF0ZSBhIG1hdDQgYnkgdGhlIGdpdmVuIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcbiAqIEBwYXJhbSB7dmVjM30gdiB2ZWN0b3IgdG8gdHJhbnNsYXRlIGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgICB2YXIgeCA9IHZbMF0sIHkgPSB2WzFdLCB6ID0gdlsyXSxcbiAgICAgICAgYTAwLCBhMDEsIGEwMiwgYTAzLFxuICAgICAgICBhMTAsIGExMSwgYTEyLCBhMTMsXG4gICAgICAgIGEyMCwgYTIxLCBhMjIsIGEyMztcblxuICAgIGlmIChhID09PSBvdXQpIHtcbiAgICAgICAgb3V0WzEyXSA9IGFbMF0gKiB4ICsgYVs0XSAqIHkgKyBhWzhdICogeiArIGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxXSAqIHggKyBhWzVdICogeSArIGFbOV0gKiB6ICsgYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzJdICogeCArIGFbNl0gKiB5ICsgYVsxMF0gKiB6ICsgYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzNdICogeCArIGFbN10gKiB5ICsgYVsxMV0gKiB6ICsgYVsxNV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYTAwID0gYVswXTsgYTAxID0gYVsxXTsgYTAyID0gYVsyXTsgYTAzID0gYVszXTtcbiAgICAgICAgYTEwID0gYVs0XTsgYTExID0gYVs1XTsgYTEyID0gYVs2XTsgYTEzID0gYVs3XTtcbiAgICAgICAgYTIwID0gYVs4XTsgYTIxID0gYVs5XTsgYTIyID0gYVsxMF07IGEyMyA9IGFbMTFdO1xuXG4gICAgICAgIG91dFswXSA9IGEwMDsgb3V0WzFdID0gYTAxOyBvdXRbMl0gPSBhMDI7IG91dFszXSA9IGEwMztcbiAgICAgICAgb3V0WzRdID0gYTEwOyBvdXRbNV0gPSBhMTE7IG91dFs2XSA9IGExMjsgb3V0WzddID0gYTEzO1xuICAgICAgICBvdXRbOF0gPSBhMjA7IG91dFs5XSA9IGEyMTsgb3V0WzEwXSA9IGEyMjsgb3V0WzExXSA9IGEyMztcblxuICAgICAgICBvdXRbMTJdID0gYTAwICogeCArIGExMCAqIHkgKyBhMjAgKiB6ICsgYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhMDEgKiB4ICsgYTExICogeSArIGEyMSAqIHogKyBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGEwMiAqIHggKyBhMTIgKiB5ICsgYTIyICogeiArIGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYTAzICogeCArIGExMyAqIHkgKyBhMjMgKiB6ICsgYVsxNV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc3Bvc2U7XG5cbi8qKlxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gICAgLy8gSWYgd2UgYXJlIHRyYW5zcG9zaW5nIG91cnNlbHZlcyB3ZSBjYW4gc2tpcCBhIGZldyBzdGVwcyBidXQgaGF2ZSB0byBjYWNoZSBzb21lIHZhbHVlc1xuICAgIGlmIChvdXQgPT09IGEpIHtcbiAgICAgICAgdmFyIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgICAgICBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICAgICAgYTIzID0gYVsxMV07XG5cbiAgICAgICAgb3V0WzFdID0gYVs0XTtcbiAgICAgICAgb3V0WzJdID0gYVs4XTtcbiAgICAgICAgb3V0WzNdID0gYVsxMl07XG4gICAgICAgIG91dFs0XSA9IGEwMTtcbiAgICAgICAgb3V0WzZdID0gYVs5XTtcbiAgICAgICAgb3V0WzddID0gYVsxM107XG4gICAgICAgIG91dFs4XSA9IGEwMjtcbiAgICAgICAgb3V0WzldID0gYTEyO1xuICAgICAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgICAgIG91dFsxMl0gPSBhMDM7XG4gICAgICAgIG91dFsxM10gPSBhMTM7XG4gICAgICAgIG91dFsxNF0gPSBhMjM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3V0WzBdID0gYVswXTtcbiAgICAgICAgb3V0WzFdID0gYVs0XTtcbiAgICAgICAgb3V0WzJdID0gYVs4XTtcbiAgICAgICAgb3V0WzNdID0gYVsxMl07XG4gICAgICAgIG91dFs0XSA9IGFbMV07XG4gICAgICAgIG91dFs1XSA9IGFbNV07XG4gICAgICAgIG91dFs2XSA9IGFbOV07XG4gICAgICAgIG91dFs3XSA9IGFbMTNdO1xuICAgICAgICBvdXRbOF0gPSBhWzJdO1xuICAgICAgICBvdXRbOV0gPSBhWzZdO1xuICAgICAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzEyXSA9IGFbM107XG4gICAgICAgIG91dFsxM10gPSBhWzddO1xuICAgICAgICBvdXRbMTRdID0gYVsxMV07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG91dDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aFV0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL3BhdGgnKSxcbiAgYXJyYXlVdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy9hcnJheScpLFxuICBmaWxlU3lzdGVtVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvZmlsZVN5c3RlbScpLFxuICBhc3luY2hyb25vdXNVdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy9hc3luY2hyb25vdXMnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cblxuZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5mdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5mdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5mdW5jdGlvbiBwdXNoKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5mdW5jdGlvbiB1bnNoaWZ0KGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5mdW5jdGlvbiBjbGVhcihhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG4gIFxuICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbn1cblxuZnVuY3Rpb24gY29weShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXkyLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5mdW5jdGlvbiBtZXJnZShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IGFycmF5Mi5sZW5ndGgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyKTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyXSxcbiAgICAgICAgZGVsZXRlZEl0ZW1zQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5MSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xufVxuXG5mdW5jdGlvbiByZXBsYWNlKGFycmF5LCBlbGVtZW50LCB0ZXN0KSB7XG4gIGxldCBzdGFydCA9IC0xO1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGFycmF5LCB0ZXN0KSB7XG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaW5kKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gcHJ1bmUoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTIuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Mi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGJhY2t3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAodmFyIGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZpcnN0OiBmaXJzdCxcbiAgc2Vjb25kOiBzZWNvbmQsXG4gIHRoaXJkOiB0aGlyZCxcbiAgZm91cnRoOiBmb3VydGgsXG4gIGZpZnRoOiBmaWZ0aCxcbiAgZmlmdGhMYXN0OiBmaWZ0aExhc3QsXG4gIGZvdXJ0aExhc3Q6IGZvdXJ0aExhc3QsXG4gIHRoaXJkTGFzdDogdGhpcmRMYXN0LFxuICBzZWNvbmRMYXN0OiBzZWNvbmRMYXN0LFxuICBsYXN0OiBsYXN0LFxuICB0YWlsOiB0YWlsLFxuICBwdXNoOiBwdXNoLFxuICB1bnNoaWZ0OiB1bnNoaWZ0LFxuICBjbGVhcjogY2xlYXIsXG4gIGNvcHk6IGNvcHksXG4gIG1lcmdlOiBtZXJnZSxcbiAgc3BsaWNlOiBzcGxpY2UsXG4gIHJlcGxhY2U6IHJlcGxhY2UsXG4gIGZpbHRlcjogZmlsdGVyLFxuICBmaW5kOiBmaW5kLFxuICBwcnVuZTogcHJ1bmUsXG4gIHBhdGNoOiBwYXRjaCxcbiAgYXVnbWVudDogYXVnbWVudCxcbiAgc2VwYXJhdGU6IHNlcGFyYXRlLFxuICBmb3J3YXJkc1NvbWU6IGZvcndhcmRzU29tZSxcbiAgYmFja3dhcmRzU29tZTogYmFja3dhcmRzU29tZSxcbiAgZm9yd2FyZHNGb3JFYWNoOiBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2g6IGJhY2t3YXJkc0ZvckVhY2hcbn07XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiB3aGlsc3QoY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgdGVybWluYXRlID0gY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXF1ZW5jZShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2tzW2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXZlbnR1YWxseShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrLCBpbmRleCkge1xyXG4gICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBlYXRlZGx5KGNhbGxiYWNrLCBsZW5ndGgsIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IGxlbmd0aDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50LS07XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSAtMSk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHdoaWxzdDogd2hpbHN0LFxyXG4gIGZvckVhY2g6IGZvckVhY2gsXHJcbiAgc2VxdWVuY2U6IHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHk6IGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseTogcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2g6IGZvcndhcmRzRm9yRWFjaCxcclxuICBiYWNrd2FyZHNGb3JFYWNoOiBiYWNrd2FyZHNGb3JFYWNoXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5mdW5jdGlvbiBlbnRyeUV4aXN0cyhhYnNvbHV0ZUZpbGVQYXRoKSB7XG4gIHJldHVybiBmcy5leGlzdHNTeW5jKGFic29sdXRlRmlsZVBhdGgpO1xufVxuXG5mdW5jdGlvbiBmaWxlRXhpc3RzKGFic29sdXRlRmlsZVBhdGgpIHtcbiAgcmV0dXJuIGZzLmV4aXN0c1N5bmMoYWJzb2x1dGVGaWxlUGF0aCk7XG59XG5cbmZ1bmN0aW9uIGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhhYnNvbHV0ZVBhdGgpLFxuICAgICAgICBlbnRyeURpcmVjdG9yeSA9IHN0YXQuaXNEaXJlY3RvcnkoKTtcblxuICByZXR1cm4gZW50cnlEaXJlY3Rvcnk7XG59XG5cbmZ1bmN0aW9uIGlzRGlyZWN0b3J5RW1wdHkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXNMZW5ndGggPSBzdWJFbnRyeU5hbWVzLmxlbmd0aCxcbiAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSAoc3ViRW50cnlOYW1lc0xlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xufVxuXG5mdW5jdGlvbiB3cml0ZUZpbGUoYWJzb2x1dGVGaWxlUGF0aCwgY29udGVudCkge1xuICBmcy53cml0ZUZpbGVTeW5jKGFic29sdXRlRmlsZVBhdGgsIGNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiByZWFkRmlsZShhYnNvbHV0ZUZpbGVQYXRoLCBlbmNvZGluZyA9ICd1dGY4Jykge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIGVuY29kaW5nOiBlbmNvZGluZ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGFic29sdXRlRmlsZVBhdGgsIG9wdGlvbnMpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBzdWJFbnRyeU5hbWVzID0gZnMucmVhZGRpclN5bmMoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICByZXR1cm4gc3ViRW50cnlOYW1lcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVudHJ5RXhpc3RzOiBlbnRyeUV4aXN0cyxcbiAgZmlsZUV4aXN0czogZmlsZUV4aXN0cyxcbiAgaXNFbnRyeURpcmVjdG9yeTogaXNFbnRyeURpcmVjdG9yeSxcbiAgaXNEaXJlY3RvcnlFbXB0eTogaXNEaXJlY3RvcnlFbXB0eSxcbiAgd3JpdGVGaWxlOiB3cml0ZUZpbGUsXG4gIHJlYWRGaWxlOiByZWFkRmlsZSxcbiAgcmVhZERpcmVjdG9yeTogcmVhZERpcmVjdG9yeVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXkgPSByZXF1aXJlKCcuL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgbGFzdCB9ID0gYXJyYXk7XG5cbmZ1bmN0aW9uIGlzUGF0aFJlbGF0aXZlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gcGF0aC5zZWFyY2goL15cXC57MSwyfVxcLy8pLFxuICAgICAgICBwYXRoUmVsYXRpdmVQYXRoID0gKHBvc2l0aW9uICE9PSAtMSk7XG5cbiAgcmV0dXJuIHBhdGhSZWxhdGl2ZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhSZWxhdGl2ZVBhdGggPSBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhBYnNvbHV0ZVBhdGggPSAhcGF0aFJlbGF0aXZlUGF0aDsgLy8vXG5cbiAgcmV0dXJuIHBhdGhBYnNvbHV0ZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGlzUGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lKHBhdGgpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBwYXRoLnNlYXJjaCgvXlteXFwvXStcXC8/JC8pLFxuICAgICAgICBwYXRoVG9wbW9zdERpcmVjdG9yeU5hbWUgPSAocG9zaXRpb24gIT09IC0xKTtcblxuICByZXR1cm4gcGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5mdW5jdGlvbiBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwYXRoKSB7XG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWUucmVwbGFjZSgvXFwvJC8sICcnKTsgLy8vXG5cbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdERpcmVjdG9yeU5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICBwb3NpdGlvbiA9IHBhdGguc2VhcmNoKHJlZ0V4cCksXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5GaWxlUGF0aCA9IChwb3NpdGlvbiAhPT0gLTEpO1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluRmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVQYXRocyhkaXJlY3RvcnlQYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgbGV0IGFic29sdXRlUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMgPSBkaXJlY3RvcnlQYXRoLnNwbGl0KCcvJyksXG4gICAgICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzID0gcmVsYXRpdmVQYXRoLnNwbGl0KCcvJyk7XG5cbiAgbGV0IGZpcnN0UmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZSA9IGZpcnN0KHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzKSxcbiAgICAgIGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lO1xuXG4gIGlmIChmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPT09ICcuJykge1xuICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzLnNoaWZ0KCk7XG4gIH1cblxuICBmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPSBmaXJzdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG4gIGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lID0gbGFzdChkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPT09ICcuLicpICYmIChsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzLnNoaWZ0KCk7XG4gICAgZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMucG9wKCk7XG5cbiAgICBmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPSBmaXJzdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG4gICAgbGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgPSBsYXN0KGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgYWJzb2x1dGVGaWxlUGF0aFN1YkVudHJ5TmFtZXMgPSBbXS5jb25jYXQoZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMpLmNvbmNhdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG5cbiAgICBhYnNvbHV0ZVBhdGggPSBhYnNvbHV0ZUZpbGVQYXRoU3ViRW50cnlOYW1lcy5qb2luKCcvJyk7XG4gIH1cblxuICByZXR1cm4gYWJzb2x1dGVQYXRoO1xufVxuXG5mdW5jdGlvbiBjb25jYXRlbmF0ZVBhdGhzKHBhdGgxLCBwYXRoMikge1xuICBwYXRoMSA9IHBhdGgxLnJlcGxhY2UoL1xcLyQvLCAnJyk7ICAvLy9cblxuICBjb25zdCBjb21iaW5lZFBhdGggPSBgJHtwYXRoMX0vJHtwYXRoMn1gO1xuXG4gIHJldHVybiBjb21iaW5lZFBhdGg7XG59XG5cbmZ1bmN0aW9uIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgYm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eLitcXC8oW15cXC9dK1xcLz8pJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBib3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gYm90dG9tbW9zdE5hbWU7XG59XG5cbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKylcXC9bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGRpcmVjdG9yeVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGRpcmVjdG9yeVBhdGg7XG59XG5cbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSspXFwvLiskLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZnVuY3Rpb24gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC8oXi4rKVxcL1teXFwvXStcXC8/JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XG59XG5cbmZ1bmN0aW9uIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXlteXFwvXStcXC8oLispJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7XG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzUGF0aFJlbGF0aXZlUGF0aDogaXNQYXRoUmVsYXRpdmVQYXRoLFxuICBpc1BhdGhBYnNvbHV0ZVBhdGg6IGlzUGF0aEFic29sdXRlUGF0aCxcbiAgaXNQYXRoVG9wbW9zdERpcmVjdG9yeU5hbWU6IGlzUGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lLFxuICBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoOiBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoLFxuICBjb21iaW5lUGF0aHM6IGNvbWJpbmVQYXRocyxcbiAgY29uY2F0ZW5hdGVQYXRoczogY29uY2F0ZW5hdGVQYXRocyxcbiAgYm90dG9tbW9zdE5hbWVGcm9tUGF0aDogYm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aDogdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aDogdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoOiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aDogcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoXG59O1xuIl19
