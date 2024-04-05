"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    offsetsMatrixName: function() {
        return offsetsMatrixName;
    },
    positionMatrixName: function() {
        return positionMatrixName;
    },
    projectionMatrixName: function() {
        return projectionMatrixName;
    },
    rotationsMatrixName: function() {
        return rotationsMatrixName;
    },
    vertexPositionAttributeName: function() {
        return vertexPositionAttributeName;
    }
});
var offsetsMatrixName = "uOffsetsMatrix";
var positionMatrixName = "uPositionMatrix";
var rotationsMatrixName = "uRotationsMatrix";
var projectionMatrixName = "uPerspectiveMatrix";
var vertexPositionAttributeName = "aVertexPosition";
var positionSource = new String("\n  \n        uniform mat4 ".concat(offsetsMatrixName, ",\n                     ").concat(rotationsMatrixName, ",\n                     ").concat(positionMatrixName, ",\n                     ").concat(projectionMatrixName, ";\n        \n        attribute vec4 ").concat(vertexPositionAttributeName, ";\n\n        vec4 calculatePosition() {\n          vec4 position = ").concat(projectionMatrixName, " * ").concat(positionMatrixName, " * ").concat(rotationsMatrixName, " * ").concat(offsetsMatrixName, " * ").concat(vertexPositionAttributeName, ";\n          \n          return position;\n        }\n        \n      "));
var _default = positionSource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci9zb3VyY2UvcG9zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBvZmZzZXRzTWF0cml4TmFtZSA9IFwidU9mZnNldHNNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCBwb3NpdGlvbk1hdHJpeE5hbWUgPSBcInVQb3NpdGlvbk1hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHJvdGF0aW9uc01hdHJpeE5hbWUgPSBcInVSb3RhdGlvbnNNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCBwcm9qZWN0aW9uTWF0cml4TmFtZSA9IFwidVBlcnNwZWN0aXZlTWF0cml4XCI7XG5leHBvcnQgY29uc3QgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4UG9zaXRpb25cIjtcblxuY29uc3QgcG9zaXRpb25Tb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke29mZnNldHNNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cm90YXRpb25zTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Bvc2l0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Byb2plY3Rpb25NYXRyaXhOYW1lfTtcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWM0IGNhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICAgIHZlYzQgcG9zaXRpb24gPSAke3Byb2plY3Rpb25NYXRyaXhOYW1lfSAqICR7cG9zaXRpb25NYXRyaXhOYW1lfSAqICR7cm90YXRpb25zTWF0cml4TmFtZX0gKiAke29mZnNldHNNYXRyaXhOYW1lfSAqICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb25Tb3VyY2U7XG4iXSwibmFtZXMiOlsib2Zmc2V0c01hdHJpeE5hbWUiLCJwb3NpdGlvbk1hdHJpeE5hbWUiLCJwcm9qZWN0aW9uTWF0cml4TmFtZSIsInJvdGF0aW9uc01hdHJpeE5hbWUiLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUiLCJwb3NpdGlvblNvdXJjZSIsIlN0cmluZyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXlCQSxPQUE4QjtlQUE5Qjs7SUF2QmFBLGlCQUFpQjtlQUFqQkE7O0lBQ0FDLGtCQUFrQjtlQUFsQkE7O0lBRUFDLG9CQUFvQjtlQUFwQkE7O0lBREFDLG1CQUFtQjtlQUFuQkE7O0lBRUFDLDJCQUEyQjtlQUEzQkE7OztBQUpOLElBQU1KLG9CQUFvQjtBQUMxQixJQUFNQyxxQkFBcUI7QUFDM0IsSUFBTUUsc0JBQXNCO0FBQzVCLElBQU1ELHVCQUF1QjtBQUM3QixJQUFNRSw4QkFBOEI7QUFFM0MsSUFBTUMsaUJBQWlCLElBQUlDLE9BQU8sQUFBQyw4QkFHWkgsT0FEQUgsbUJBQWtCLDRCQUVsQkMsT0FEQUUscUJBQW9CLDRCQUVwQkQsT0FEQUQsb0JBQW1CLDRCQUdqQkcsT0FGRkYsc0JBQXFCLHdDQUtoQkEsT0FISEUsNkJBQTRCLHVFQUdDSCxPQUExQkMsc0JBQXFCLE9BQTZCQyxPQUF4QkYsb0JBQW1CLE9BQThCRCxPQUF6QkcscUJBQW9CLE9BQTRCQyxPQUF2QkosbUJBQWtCLE9BQWlDLE9BQTVCSSw2QkFBNEI7SUFPMUosV0FBZUMifQ==