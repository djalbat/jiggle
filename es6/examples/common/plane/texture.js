'use strict';

const plane = require('../plane'),
      TextureElement = require('../../../element/texture'),
      vertexUtilities = require('../../../utilities/vertex');

const { calculateVertexPositionData, calculateTextureCoordinateData } = vertexUtilities,
      { vertexIndexData, vertexNormalData, initialVertexPositionData } = plane;

class TexturePlane extends TextureElement {
  static fromProperties(properties) {
    const { width, height, depth, offset, rotation, imageName } = properties,
          textureCoordinateData = calculateTextureCoordinateData(initialVertexPositionData, imageName),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotation),
          texturePlane = TextureElement.fromProperties(TexturePlane, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData);

    return texturePlane;
  }
}

module.exports = TexturePlane;
