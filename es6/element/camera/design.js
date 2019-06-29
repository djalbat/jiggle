'use strict';

const Pan = require('../../miscellaneous/pan'),
      Tilt = require('../../miscellaneous/tilt'),
      Zoom = require('../../miscellaneous/zoom'),
      Camera = require('../camera'),
      vectorMaths = require('../../maths/vector'),
      matrixUtilities = require('../../utilities/matrix');

const { zero2, zero3 } = vectorMaths,
      { offsetsMatrixFromOffsets, rotationsMatrixFromAngles, positionMatrixFromDistance, projectionMatrixFromWidthAndHeight, normalsMatrixFromRotationsMatrix } = matrixUtilities;

const defaultInitialAngles = zero2(),
      defaultInitialOffsets = zero3(),
      defaultInitialDistance = 5;

class DesignCamera extends Camera {
  constructor(keyEvents, mouseEvents, updateHandler, pan, tilt, zoom) {
    super(keyEvents, mouseEvents, updateHandler, pan, tilt);

    this.zoom = zoom;
  }

  mouseWheelHandler(delta, canvas) {


    this.zoom.updateDistance(delta);

    this.update(canvas);
  }

  update(canvas) {
    const width = canvas.getWidth(),
          height = canvas.getHeight(),
          angles = this.tilt.getAngles(),
          offsets = this.pan.getOffsets(),
          distance = this.zoom.getDistance(),
          offsetsMatrix = offsetsMatrixFromOffsets(offsets),
          positionMatrix = positionMatrixFromDistance(distance),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix);

    super.update(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
  }

  static fromProperties(properties) {
    const { initialAngles = defaultInitialAngles, initialOffsets = defaultInitialOffsets, initialDistance = defaultInitialDistance } = properties,
          flipped = false,
          pan = Pan.fromInitialOffsets(initialOffsets),
          tilt = Tilt.fromInitialAnglesAndFlipped(initialAngles, flipped),
          zoom = Zoom.fromInitialDistance(initialDistance),
          designCamera = Camera.fromProperties(DesignCamera, properties, pan, tilt, zoom);

    return designCamera;
  }
}

module.exports = DesignCamera;
