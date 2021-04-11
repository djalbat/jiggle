"use strict";

export function zero2() {
  return ([

    0,
    0,

  ]);
}

export function zero3() {
  return ([

    0,
    0,
    0,

  ]);
}

export function zero4() {
  return ([

    0,
    0,
    0,
    0,

  ]);
}

export function length2(vector) {
  const x = vector[0],
        y = vector[1];

  return Math.sqrt(x*x + y*y);
}

export function length3(vector) {
  const x = vector[0],
        y = vector[1],
        z = vector[2];

  return Math.sqrt(x*x + y*y + z*z);
}

export function length4(vector) {
  const x = vector[0],
        y = vector[1],
        z = vector[2],
        w = vector[3];

  return Math.sqrt(x*x + y*y + z*z + w*w);
}

export function dot2(vectorA, vectorB) { return (vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1]); }

export function dot3(vectorA, vectorB) { return (vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1] + vectorA[2] * vectorB[2]); }

export function dot4(vectorA, vectorB) { return (vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1] + vectorA[2] * vectorB[2] + vectorA[3] * vectorB[3]); }

export function cross3(vectorA, vectorB) {
  const ax = vectorA[0], ay = vectorA[1], az = vectorA[2],
        bx = vectorB[0], by = vectorB[1], bz = vectorB[2];

  return ([

    ay * bz - az * by,
    az * bx - ax * bz,
    ax * by - ay * bx,

  ])
}

export function normalise2(vector) {
  const x = vector[0],
        y = vector[1],
        length = Math.sqrt(x*x + y*y);

  if (length > 0) {
    return ([

      x / length,
      y / length,

    ]);
  }
}

export function normalise3(vector) {
  const x = vector[0],
        y = vector[1],
        z = vector[2],
        length = Math.sqrt(x*x + y*y + z*z);

  if (length > 0) {
    return ([

      x / length,
      y / length,
      z / length,

    ]);
  }
}

export function normalise4(vector) {
  const x = vector[0],
        y = vector[1],
        z = vector[2],
        w = vector[3],
        length = Math.sqrt(x*x + y*y + z*z + w*w);

  if (length > 0) {
    return ([

      x / length,
      y / length,
      z / length,
      w / length,

    ]);
  }
}

export function reflect2(vector) {
  return ([

    vector[0] * -1,
    vector[1] * -1,

  ]);
}

export function reflect3(vector) {
  return ([

    vector[0] * -1,
    vector[1] * -1,
    vector[2] * -1,

  ]);
}

export function reflect4(vector) {
  return ([

    vector[0] * -1,
    vector[1] * -1,
    vector[2] * -1,
    vector[3] * -1,

  ]);
}

export function scale2(vector, scalar) {
  return ([

    vector[0] * scalar,
    vector[1] * scalar,

  ]);
}

export function scale3(vector, scalar) {
  return ([

    vector[0] * scalar,
    vector[1] * scalar,
    vector[2] * scalar,

  ]);
}

export function scale4(vector, scalar) {
  return ([

    vector[0] * scalar,
    vector[1] * scalar,
    vector[2] * scalar,
    vector[3] * scalar,

  ]);
}

export function add2(vectorA, vectorB) {
  return ([

    vectorA[0] + vectorB[0],
    vectorA[1] + vectorB[1],

  ]);
}

export function add3(vectorA, vectorB) {
  return ([

    vectorA[0] + vectorB[0],
    vectorA[1] + vectorB[1],
    vectorA[2] + vectorB[2],

  ]);
}

export function add4(vectorA, vectorB) {
  return ([

    vectorA[0] + vectorB[0],
    vectorA[1] + vectorB[1],
    vectorA[2] + vectorB[2],
    vectorA[3] + vectorB[3],

  ]);
}

export function subtract2(vectorA, vectorB) {
  return ([

    vectorA[0] - vectorB[0],
    vectorA[1] - vectorB[1],

  ]);
}

export function subtract3(vectorA, vectorB) {
  return ([

    vectorA[0] - vectorB[0],
    vectorA[1] - vectorB[1],
    vectorA[2] - vectorB[2],

  ]);
}

export function subtract4(vectorA, vectorB) {
  return ([

    vectorA[0] - vectorB[0],
    vectorA[1] - vectorB[1],
    vectorA[2] - vectorB[2],
    vectorA[3] - vectorB[3],

  ]);
}

export function multiply2(vectorA, vectorB) {
  return ([

    vectorA[0] * vectorB[0],
    vectorA[1] * vectorB[1],

  ]);
}

export function multiply3(vectorA, vectorB) {
  return ([

    vectorA[0] * vectorB[0],
    vectorA[1] * vectorB[1],
    vectorA[2] * vectorB[2],

  ]);
}

export function multiply4(vectorA, vectorB) {
  return ([

    vectorA[0] * vectorB[0],
    vectorA[1] * vectorB[1],
    vectorA[2] * vectorB[2],
    vectorA[3] * vectorB[3],

  ]);
}

export function transform2(vector, matrix) {
  const x = vector[0],
        y = vector[1];

  return ([

    matrix[0] * x + matrix[2] * y,
    matrix[1] * x + matrix[3] * y,

  ]);
}

export function transform3(vector, matrix) {
  const x = vector[0],
        y = vector[1],
        z = vector[2];

  return ([

    matrix[0] * x + matrix[3] * y + matrix[6] * z,
    matrix[1] * x + matrix[4] * y + matrix[7] * z,
    matrix[2] * x + matrix[5] * y + matrix[8] * z,

  ]);
}

export function transform4(vector, matrix) {
  const x = vector[0],
        y = vector[1],
        z = vector[2],
        w = vector[3];

  return ([

    matrix[ 0] * x + matrix[ 4] * y + matrix[ 8] * z + matrix[12] * w,
    matrix[ 1] * x + matrix[ 5] * y + matrix[ 9] * z + matrix[13] * w,
    matrix[ 2] * x + matrix[ 6] * y + matrix[10] * z + matrix[14] * w,
    matrix[ 3] * x + matrix[ 7] * y + matrix[11] * z + matrix[15] * w,

  ]);
}
