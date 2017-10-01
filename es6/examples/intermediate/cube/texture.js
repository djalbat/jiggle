'use strict';

const vec3 = require('../../../vec3'),
      Element = require('../../../element'),
      arrayUtilities = require('../../../utilities/array');

const { divide, flatten } = arrayUtilities;

const { imageMapJSON } = runtimeConfiguration,
      textureNames = [
        'ivy.jpg',
        'steel.jpg',
        'grass.jpg',
        'bricks.jpg',
        'carpet.jpg',
        'concrete.jpg'
      ],
      textureCoordinates = textureNames.reduce(function(textureCoordinates, textureName) {
        textureCoordinates = textureCoordinates.concat(imageMapJSON[textureName]);

        return textureCoordinates;
      }, []),
      textureCoordinateData = flatten(textureCoordinates),
      vertexPositionData = [
        -1.0, -1.0, +1.0,
        +1.0, -1.0, +1.0,
        +1.0, +1.0, +1.0,
        -1.0, +1.0, +1.0,

        -1.0, -1.0, -1.0,
        -1.0, +1.0, -1.0,
        +1.0, +1.0, -1.0,
        +1.0, -1.0, -1.0,

        -1.0, +1.0, -1.0,
        -1.0, +1.0, +1.0,
        +1.0, +1.0, +1.0,
        +1.0, +1.0, -1.0,

        -1.0, -1.0, -1.0,
        +1.0, -1.0, -1.0,
        +1.0, -1.0, +1.0,
        -1.0, -1.0, +1.0,

        +1.0, -1.0, -1.0,
        +1.0, +1.0, -1.0,
        +1.0, +1.0, +1.0,
        +1.0, -1.0, +1.0,

        -1.0, -1.0, -1.0,
        -1.0, -1.0, +1.0,
        -1.0, +1.0, +1.0,
        -1.0, +1.0, -1.0
      ],
      vertexNormalData = [
        0.0,  0.0, +1.0,
        0.0,  0.0, +1.0,
        0.0,  0.0, +1.0,
        0.0,  0.0, +1.0,

        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,

        0.0, +1.0,  0.0,
        0.0, +1.0,  0.0,
        0.0, +1.0,  0.0,
        0.0, +1.0,  0.0,

        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,

        +1.0,  0.0,  0.0,
        +1.0,  0.0,  0.0,
        +1.0,  0.0,  0.0,
        +1.0,  0.0,  0.0,

        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0
      ],
      vertexIndexData = [
        0,  1,  2,
        0,  2,  3,

        4,  5,  6,
        4,  6,  7,

        8,  9, 10,
        8, 10, 11,

        12, 13, 14,
        12, 14, 15,

        16, 17, 18,
        16, 18, 19,

        20, 21, 22,
        20, 22, 23
      ];

class TextureCube extends Element{
  constructor(vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData) {
    super();
    
    this.vertexPositionData = vertexPositionData;
    this.vertexNormalData = vertexNormalData;
    this.vertexIndexData = vertexIndexData;
    this.textureCoordinateData = textureCoordinateData;
  }

  getVertexPositionData() {
    return this.vertexPositionData;
  }

  getVertexNormalData() {
    return this.vertexNormalData;
  }

  getVertexIndexData() {
    return this.vertexIndexData;
  }

  getTextureCoordinateData() {
    return this.textureCoordinateData;
  }

  createElement(colourShader, textureShader) {
    textureShader.addVertexPositionData(this.vertexPositionData);
    textureShader.addVertexNormalData(this.vertexNormalData);
    textureShader.addVertexIndexData(this.vertexIndexData);
    textureShader.addTextureCoordinateData(this.textureCoordinateData);
  }
  
  static fromProperties(properties) {
    const { offsetPosition } = properties,
          vertexPositionData = vertexPositionDataFromOffsetPosition(offsetPosition),
          textureCube = new TextureCube(vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData);

    return textureCube;
  }
}

module.exports = TextureCube;

function vertexPositionDataFromOffsetPosition(offsetPosition) {
  let vertexPositions = divide(vertexPositionData, 3);  ///

  vertexPositions = vertexPositions.map(function(vertexPosition) {
    const offsetVertexPosition = vec3.add(vertexPosition, offsetPosition);

    return offsetVertexPosition;
  });

  return flatten(vertexPositions);
}
