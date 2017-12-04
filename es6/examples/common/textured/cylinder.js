'use strict';

const cylinder = require('../cylinder'),
      TexturedCanvasElement = require('../../../element/canvas/textured');

const { defaultVertices, defaultIndexes, defaultImageName, defaultTextureCoordinates } = cylinder;

class TexturedCylinder extends TexturedCanvasElement {
  static fromProperties(properties) {
    const { vertices = defaultVertices, indexes = defaultIndexes, imageName = defaultImageName, textureCoordinates = defaultTextureCoordinates } = properties,
          texturedCylinder = TexturedCanvasElement.fromProperties(TexturedCylinder, properties, vertices, indexes, imageName, textureCoordinates);

    return texturedCylinder;
  }
}

module.exports = TexturedCylinder;
