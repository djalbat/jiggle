"use strict";

import TextureRenderer from "../../renderer/texture";

import { push } from "../../utilities/array";

const add = push; ///

export default class ImageMapTextureRenderer extends TextureRenderer {
	constructor(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageMapJSON) {
		super(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);

		this.imageMapJSON = imageMapJSON;
	}

  createBuffers(canvas) {
    const facets = this.getFacets(),
          vertexIndexes = [],
          vertexNormals = [],
          vertexPositions = [],
          vertexTextureCoordinateTuples = [];

    facets.forEach((facet, index) => {
      const texturedFacet = facet,  ///
            facetVertexIndexes = facet.getVertexIndexes(index),
            facetVertexNormals = facet.getVertexNormals(),
            facetVertexPositions = facet.getVertexPositions(),
            mappedTextureCoordinateTuples = texturedFacet.getMappedTextureCoordinateTuples(this.imageMapJSON),
            texturedFacetVertexTextureCoordinateTuples = mappedTextureCoordinateTuples; ///

      add(vertexIndexes, facetVertexIndexes);
      add(vertexNormals, facetVertexNormals);
      add(vertexPositions, facetVertexPositions);
      add(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
    });

    const rendererData = this.getRendererData();

    rendererData.addVertexIndexes(vertexIndexes);
    rendererData.addVertexNormals(vertexNormals);
    rendererData.addVertexPositions(vertexPositions);
    rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);

    super.createBuffers(canvas);
  }

  bindBuffers(canvas) {
    const rendererBuffers = this.getRendererBuffers(),
          vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
          vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
          textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();

    rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
  }

  useTexture(index, canvas) {
    const uniformLocations = this.getUniformLocations(),
          samplerUniformLocation = uniformLocations.getSamplerUniformLocation(),
          samplerUniformLocationIntegerValue = index; ///

    canvas.setUniformLocationIntegerValue(samplerUniformLocation, samplerUniformLocationIntegerValue);
  }

  render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
    const program = this.getProgram();

    canvas.useProgram(program);

    this.bindBuffers(canvas);

    const renderer = this;  ///

    canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);

    const rendererData = this.getRendererData(),
          count = rendererData.getCount(),
          index = 0,
          start = 0,
          finish = count; ///

    this.useTexture(index, canvas);

    canvas.drawElements(start, finish);
  }

  static fromImageMapAndImageMapJSON(imageMap, imageMapJSON, canvas) {
    const image = imageMap, ///
          index = 0,
          repeat = false;

    canvas.createTexture(image, index, repeat);

    const imageMapTextureRenderer = TextureRenderer.fromNothing(ImageMapTextureRenderer, canvas, imageMapJSON);

    return imageMapTextureRenderer;
  }
}
