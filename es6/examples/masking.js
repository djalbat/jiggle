'use strict';

require('../jiggle');

const Canvas = require('../canvas'),
      Mask = require('../element/mask'),
      Scene = require('../element/scene'),
      Camera = require('../element/camera'),
      ColouredCuboid = require('./common/coloured/cuboid');

const masking = () => {
  const canvas = new Canvas();

  return (

    <Scene canvas={canvas}>
      <Camera initialDistance={5} initialOffset={[ 0, 0, 0 ]} canvas={canvas} />
      <ColouredCuboid colour={[ 1, 1, 0, 1 ]} position={[ -0.5, -0.5, -0.5 ]}>
        <Mask>
          <ColouredCuboid width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]}>
            <Mask>
              <ColouredCuboid width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]} />
            </Mask>
          </ColouredCuboid>
        </Mask>
      </ColouredCuboid>
    </Scene>

  );
};

module.exports = masking;
