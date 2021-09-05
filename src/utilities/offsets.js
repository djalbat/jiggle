"use strict";

import { rotationsMatrixFromAngles } from "../utilities/matrix";
import { reflect2, truncate4, transform4 } from "../maths/vector";

export function relativeOffsetsFromAnglesAndDirections(angles, directions) {
  angles = reflect2(angles);  ///

  const reverseOrder = true,
        rotationsMatrix = rotationsMatrixFromAngles(angles, reverseOrder);

  let relativeOffsets = transform4(directions, rotationsMatrix);

  relativeOffsets = truncate4(relativeOffsets);

  return relativeOffsets;
}
