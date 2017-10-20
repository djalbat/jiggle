'use strict';

const ColouredPlane = require('../../common/coloured/plane');

const SideWallB = (properties) => {
  const { length, overallWidth, overallHeight, colour } = properties,
        width = length,
        height = overallHeight,
        depth = 0,
        position = [ overallWidth, 0, length ],
        rotations = [ 0, +90, 0 ];

  return (

    <ColouredPlane colour={colour} width={width} height={height} depth={depth} position={position} rotations={rotations} />

  );
};

module.exports = SideWallB;