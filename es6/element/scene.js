'use strict';

const Element = require('../element');

class Scene extends Element {
  constructor(canvas) {
    super();

    this.canvas = canvas;
  }

  onResize(resizeHandler) {
    window.onresize = resizeHandler;
  }

  resizeHandler() {
    const clientWidth = this.canvas.getClientWidth(),
          clientHeight = this.canvas.getClientHeight(),
          width = clientWidth,  ///
          height = clientHeight;  ///

    this.canvas.resize(width, height);

    this.forceUpdate(this.canvas);
  }

  updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    this.render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
  }

  render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    this.canvas.clear();

    this.childElements.forEach((childElement) => childElement.render(this.canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix));
  }

  initialise(done) {
    const childElements = this.getChildElements(),
          resizeHandler = this.resizeHandler.bind(this),
          updateHandler = this.updateHandler.bind(this);

    this.assignContext();

    this.onResize(resizeHandler);

    this.onUpdate(updateHandler);

    childElements.forEach((childElement) => childElement.initialise(this.canvas));

    this.resizeHandler(); ///

    done && done(); ///
  }

  static fromProperties(properties) {
    const { canvas, done } = properties,
          scene = Element.fromProperties(Scene, properties, canvas);

    scene.initialise(done);

    return scene;
  }
}

module.exports = Scene;
