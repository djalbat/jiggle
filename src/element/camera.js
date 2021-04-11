"use strict";

import Element from "../element";

export default class Camera extends Element {
  constructor(pan, tilt) {
    super();

    this.pan = pan;

    this.tilt = tilt;
  }

  getPan() {
    return this.pan;
  }

  getTilt() {
    return this.tilt;
  }

  static fromProperties(Class, properties, ...remainingArguments) { return Element.fromProperties(Class, properties, ...remainingArguments); }
}
