'use strict';

const CYLINDER_FACES = 16,
      MINIMUM_DISTANCE = 10,
      FIELD_OF_VIEW = 45 * Math.PI / 180,
      Z_NEAR = 1,
      Z_FAR = 1000,
      MOUSE_UP = 'MOUSE_UP',
      MOUSE_DOWN = 'MOUSE_DOWN',
      MOUSE_MOVE = 'MOUSE_MOVE',
      MOUSE_WHEEL = 'MOUSE_WHEEL',
      CTRL_KEY_CODE = 17,
      SHIFT_KEY_CODE = 16,
      OFFSET_SCALAR = 1,
      ANGLE_COORDINATES_SCALAR = Math.PI / 180,
      INITIAL_MOUSE_COORDINATES = [ 0, 0 ],
      INITIAL_ANGLE_COORDINATES = [ 0, 0 ];

module.exports = {
  Z_FAR: Z_FAR,
  Z_NEAR: Z_NEAR,
  MOUSE_UP: MOUSE_UP,
  MOUSE_DOWN: MOUSE_DOWN,
  MOUSE_MOVE: MOUSE_MOVE,
  MOUSE_WHEEL: MOUSE_WHEEL,
  CTRL_KEY_CODE: CTRL_KEY_CODE,
  SHIFT_KEY_CODE: SHIFT_KEY_CODE,
  FIELD_OF_VIEW: FIELD_OF_VIEW,
  CYLINDER_FACES: CYLINDER_FACES,
  MINIMUM_DISTANCE: MINIMUM_DISTANCE,
  OFFSET_SCALAR: OFFSET_SCALAR,
  ANGLE_COORDINATES_SCALAR: ANGLE_COORDINATES_SCALAR,
  INITIAL_MOUSE_COORDINATES: INITIAL_MOUSE_COORDINATES,
  INITIAL_ANGLE_COORDINATES: INITIAL_ANGLE_COORDINATES
};
