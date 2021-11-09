import React, { Fragment } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import DeckGL from '@deck.gl/react'
import { GeoJsonLayer } from '@deck.gl/layers'
import { StaticMap } from 'react-map-gl'

import { MAPBOX_TOKEN } from '../config'

import { Toolbar, Box, Grid, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material'

import Appbar from '../components/Appbar'

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 127.93879233879944,
  latitude: 34.871793906417426,
  zoom: 10,
  pitch: 0,
  bearing: 0,
}

const Home: NextPage = () => {
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
    <Fragment>
      <Box>
        <Head>
          <title>관계형성-하나의 관계가 새로운 인구를 형성한다</title>
          <meta name="description" content="관계형성-하나의 관계가 새로운 인구를 형성한다" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Appbar tabIndex={2} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
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
        </Box>
      </Box>
    </Fragment>
  )
}

export default Home
