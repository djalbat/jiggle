"use strict";

import CanvasElement from "../../element/canvas";
import ColouredFacet from "../../primitive/facet/coloured";

export default class ColouredCanvasElement extends CanvasElement {
  constructor(transform, facets, mask, hidden, coordinates, indexes, colour) {
    super(transform, facets, mask, hidden);

    this.coordinates = coordinates;

    this.indexes = indexes;

    this.colour = colour;
  }

  createFacets(hidden, magnification) {
    hidden = super.createFacets(hidden, magnification);  ///

    if (!hidden) {
      const indexTuples = this.indexes,  ///
            facets = indexTuples.map((indexTuple) => {
              const coordinateTuples = this.coordinates, ///
                    colouredFacet = ColouredFacet.fromCoordinateTuplesIndexTupleColourAndMagnification(coordinateTuples, indexTuple, this.colour, magnification),
                    facet = colouredFacet;  ///

              return facet;
            });

      this.setFacets(facets);
    }
  }

  addFacets(colourRenderer, textureRenderer) {
    const facets = this.getFacets();

    colourRenderer.addFacets(facets);

    super.addFacets(colourRenderer, textureRenderer);
  }

  static fromProperties(Class, properties, coordinates, indexes, colour, ...remainingArguments) { return CanvasElement.fromProperties(Class, properties, coordinates, indexes, colour, ...remainingArguments); }
}
