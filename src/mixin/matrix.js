"use strict";

export function applyMatrix(uniformLocation, matrix) {
  const transpose = false;  ///

  this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
}

