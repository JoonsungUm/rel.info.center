import React, { Fragment, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Toolbar, Box, Container, Typography } from '@mui/material'

import Appbar from '../components/Appbar'
import CenterGrid from '../components/CenterGrid'
import Footer from '../components/Footer'
import IntroPopulation from '../components/IntroPopulation'
import FadeInSection from '../components/FadeInSelection'

const Home: NextPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <Fragment>
      <Head>
        <title>관계안내소-하나의 관계가 새로운 인구를 형성한다</title>
        <meta name="description" content="관계안내소-하나의 관계가 새로운 인구를 형성한다" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Appbar handleDrawerToggle={handleDrawerToggle} />

      <Box component="main" sx={{ p: 3 }}>
        <Container maxWidth="xl" sx={{ px: 0 }}>
          <Toolbar />

          <Box my={50}>
            <FadeInSection>
              <IntroPopulation />
            </FadeInSection>
          </Box>

          <Box my={50}>
            <FadeInSection>
              <Typography variant="h2" component="h1" gutterBottom textAlign="center" mt={5}>
                하나의 관계가
                <br />
                새로운 인구를 형성한다.
              </Typography>
            </FadeInSection>
          </Box>

          <Box my={50}>
            <FadeInSection>
              <CenterGrid />
            </FadeInSection>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Fragment>
  )
}

export default Home
