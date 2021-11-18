import React, { VFC } from 'react'

import DeckGL from '@deck.gl/react'
import { GeoJsonLayer } from '@deck.gl/layers'
import { StaticMap } from 'react-map-gl'

import { MAPBOX_TOKEN } from '../config'

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 127.93879233879944,
  latitude: 34.871793906417426,
  zoom: 10,
  pitch: 0,
  bearing: 0,
}

const MapContainer: VFC = () => {
  const rel1 = new GeoJsonLayer({
    id: 'test1-layer',
    pointType: 'circle+text',
    getText: (f) => f.properties.name,
    getTextSize: 12,
    data: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [127.9, 34.8],
      },
      properties: {
        name: 'namhae test 1',
      },
    },
    pickable: true,
    getPointRadius: 100,
    getTextAlignmentBaseline: 'bottom',
  })

  const rel2 = new GeoJsonLayer({
    id: 'test2-layer',
    pointType: 'circle+text',
    getText: (f) => f.properties.name,
    getTextSize: 12,
    data: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [127.98, 34.76],
      },
      properties: {
        name: 'namhae test 2',
      },
    },
    pickable: true,
    getPointRadius: 100,
    getTextAlignmentBaseline: 'bottom',
  })

  const rel3 = new GeoJsonLayer({
    id: 'test3-layer',
    pointType: 'circle+text',
    getText: (f) => f.properties.name,
    getTextSize: 12,
    data: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [127.88, 34.83],
      },
      properties: {
        name: 'namhae test 3',
      },
    },
    pickable: true,
    getPointRadius: 100,
    getTextAlignmentBaseline: 'bottom',
  })

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={[rel1, rel2, rel3]}
      getTooltip={({ object }: { object: any }) =>
        object && (object.properties.name || object.properties.station)
      }
    >
      <StaticMap mapboxApiAccessToken={MAPBOX_TOKEN} />
    </DeckGL>
  )
}

export default MapContainer
