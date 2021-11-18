import React, { Fragment, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Box, Toolbar } from '@mui/material'

import Appbar from '../components/Appbar'
import MapContainer from '../components/MapContainer'

const MapPage: NextPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <Fragment>
      <Box>
        <Head>
          <title>관계형성-하나의 관계가 새로운 인구를 형성한다</title>
          <meta name="description" content="관계형성-하나의 관계가 새로운 인구를 형성한다" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Appbar handleDrawerToggle={handleDrawerToggle} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />

          <MapContainer />
        </Box>
      </Box>
    </Fragment>
  )
}

export default MapPage
