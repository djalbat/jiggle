'use strict';

const triangle = require('../triangle'),
      TexturedCanvasElement = require('../../../element/canvas/textured');

const { defaultVertices, defaultIndexes, defaultImageName, defaultTextureCoordinates } = triangle;

class TexturedTriangle extends TexturedCanvasElement {
  static fromProperties(properties) {
    const { vertices = defaultVertices, indexes = defaultIndexes, imageName = defaultImageName, textureCoordinates = defaultTextureCoordinates } = properties,
          texturedTriangle = TexturedCanvasElement.fromProperties(TexturedTriangle, properties, vertices, indexes, imageName, textureCoordinates);

    return texturedTriangle;
  }
}

module.exports = TexturedTriangle;
