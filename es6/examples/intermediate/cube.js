'use strict';

const vec3 = require('../../vec3'),
      Element = require('../../element'),
      arrayUtilities = require('../../utilities/array');

const { divide, flatten } = arrayUtilities;

const vertexPositionData = [
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

class Cube extends Element {
  constructor(vertexPositionData, vertexNormalData, vertexIndexData) {
    super();
    
    this.vertexPositionData = vertexPositionData;
    this.vertexNormalData = vertexNormalData;
    this.vertexIndexData = vertexIndexData;
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
  
  createElement(colourShader, textureShader) {
    colourShader.addVertexPositionData(this.vertexPositionData);
    colourShader.addVertexNormalData(this.vertexNormalData);
    colourShader.addVertexIndexData(this.vertexIndexData);
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const { offsetPosition } = properties,
          vertexPositionData = vertexPositionDataFromOffsetPosition(offsetPosition),
          colourCube = new Cube(vertexPositionData, vertexNormalData, vertexIndexData, ...remainingArguments);
    
    return colourCube;
  }
}

module.exports = Cube;

function vertexPositionDataFromOffsetPosition(offsetPosition) {
  let vertexPositions = divide(vertexPositionData, 3);  ///

  vertexPositions = vertexPositions.map(function(vertexPosition) {
    const offsetVertexPosition = vec3.add(vertexPosition, offsetPosition);

    return offsetVertexPosition;
  });

  return flatten(vertexPositions);
}
