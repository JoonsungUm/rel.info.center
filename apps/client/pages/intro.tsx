import React, { Fragment, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Toolbar, Box } from '@mui/material'

import Appbar from '../components/Appbar'
import IntroPopulation from '../components/IntroPopulation'
import Footer from '../components/Footer'

const IntroPage: NextPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <Fragment>
      <Head>
        <title>관계인구-하나의 관계가 새로운 인구를 형성한다</title>
        <meta name="description" content="관계인구-하나의 관계가 새로운 인구를 형성한다" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Appbar handleDrawerToggle={handleDrawerToggle} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <IntroPopulation />
      </Box>

      <Footer />
    </Fragment>
  )
}

export default IntroPage
