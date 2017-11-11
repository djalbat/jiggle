'use strict';

const vec3 = require('./maths/vec3'),
      LineInXYPlane = require('./lineInXYPlane'),
      arrayUtilities = require('./utilities/array');

const { add, subtract, normalise, transform } = vec3,
      { first, second, fourth } = arrayUtilities;

class VerticalLineInXYPlane extends LineInXYPlane {
  constructor(position, direction, rotationAboutZAxisMatrix) {
    super(position, direction);

    this.rotationAboutZAxisMatrix = rotationAboutZAxisMatrix;
  }
  
  getRotationAboutZAxisMatrix() {
    return this.rotationAboutZAxisMatrix;
  }

  getForwardsRotationAboutZAxisMatrix() {
    const forwardsRotationAboutZAxisMatrix = this.rotationAboutZAxisMatrix; ///
    
    return forwardsRotationAboutZAxisMatrix;
  }
  
  getBackwardsRotationAboutZAxisMatrix() {
    const rotationAboutZAxisMatrixComponents = this.rotationAboutZAxisMatrix, ///
          firstRotationAboutZAxisMatrixComponent = first(rotationAboutZAxisMatrixComponents),
          fourthRotationAboutZAxisMatrixComponent = fourth(rotationAboutZAxisMatrixComponents),
          c = firstRotationAboutZAxisMatrixComponent, ///
          s = fourthRotationAboutZAxisMatrixComponent,  ///
          backwardsRotationAboutZAxisMatrix = [ c, +s, 0, -s, c, 0, 0, 0, 1 ];
    
    return backwardsRotationAboutZAxisMatrix;
  }
  
  splitFacets(facets) {
    const forwardsRotationAboutZAxisMatrix = this.getForwardsRotationAboutZAxisMatrix(),
          backwardsRotationAboutZAxisMatrix = this.getBackwardsRotationAboutZAxisMatrix();

    facets = facets.reduce(function(facets, facet) {
      facet.rotateAboutZAxis(forwardsRotationAboutZAxisMatrix);

      const facetsFromSplit = this.splitFacet(facet);

      facetsFromSplit.forEach(function(facetFromSplit) {
        facetFromSplit.rotateAboutZAxis(backwardsRotationAboutZAxisMatrix);
      });

      facets = facets.concat(facetsFromSplit);

      return facets;
    }.bind(this), []);
    
    return facets;    
  }

  splitFacet(facet) {
    const intersections = this.calculateIntersectionsWithFacet(facet),
          intersectionsIncludesNull = intersections.includes(null),
          facets = intersectionsIncludesNull ?
                     facet.splitWithNullIntersection(intersections) :
                       facet.splitWithoutNullIntersection(intersections),
          facetsFromSplit = facets; ///

    return facetsFromSplit;
  }

  calculateIntersectionsWithFacet(facet) {
    const lines = facet.getLines(),
          intersections = lines.map(function(line) {
            const intersection = this.calculateIntersectionWithLine(line);

            return intersection;
          }.bind(this));

    return intersections;
  }

  calculateIntersectionWithLine(line) {
    let intersection;

    const linePosition = line.getPosition(),
          lineDirection = line.getDirection(),
          linePositionComponents = linePosition, ///
          lineDirectionComponents = lineDirection, ///
          firstLineDirectionComponent = first(lineDirectionComponents);

    if (firstLineDirectionComponent === 0) {
      intersection = null;
    } else {
      const positionComponents = this.position, ///
            firstPositionComponent = first(positionComponents),
            firstLinePositionComponent = first(linePositionComponents);

      intersection = (firstPositionComponent- firstLinePositionComponent) / firstLineDirectionComponent;
    }

    return intersection;
  }

  static fromLineInXYPlane(lineInXYPlane) {
    let position = lineInXYPlane.getPosition(),
        direction = lineInXYPlane.getDirection();

    const unitDirection = normalise(direction),
          unitDirectionComponents = unitDirection,  ///
          firstUnitDirectionComponent = first(unitDirectionComponents),
          secondUnitDirectionComponent = second(unitDirectionComponents),
          angleOfRotationCosine = +secondUnitDirectionComponent,  ///
          angleOfRotationSine = -firstUnitDirectionComponent, ///
          c = angleOfRotationCosine,
          s = angleOfRotationSine,
          rotationAboutZAxisMatrix = [ c, -s, 0, +s, c, 0, 0, 0, 1 ];  ///

    let startVertex = position.slice(),
        endVertex = add(position, direction);

    startVertex = rotateVertex(startVertex, rotationAboutZAxisMatrix);
    endVertex = rotateVertex(endVertex, rotationAboutZAxisMatrix);

    position = startVertex;
    direction = subtract(endVertex, startVertex);

    const verticalLineInXYPlane = new VerticalLineInXYPlane(position, direction, rotationAboutZAxisMatrix);

    return verticalLineInXYPlane;
  }
}

module.exports = VerticalLineInXYPlane;

function rotateVertex(vertex, rotationAboutZAxisMatrix) {
  let vec = vertex; ///

  const mat3 = rotationAboutZAxisMatrix;  ///

  vec = transform(vec, mat3);

  vertex = vec; ///

  return vertex;
}
