"use strict";

import { DELTA_SCALAR, MINIMUM_DISTANCE } from "../constants";

export default class Zoom {
  constructor(distance) {
    this.distance = distance;
  }

  getDistance() {
    return this.distance;
  }

  updateDistance(mouseWheelDelta) {
    this.distance -= mouseWheelDelta * DELTA_SCALAR;

    this.distance = Math.max(MINIMUM_DISTANCE, this.distance);
  }
  
  static fromInitialDistance(initialDistance) {
    const distance = initialDistance, ///
          zoom = new Zoom(distance);
    
    return zoom;
  }
}
