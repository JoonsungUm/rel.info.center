import React, { Fragment, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import namhaePic from '../public/images/namhae.png'

import { Toolbar, Box, Container, Paper, Stack, Typography } from '@mui/material'

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

      <Box component="main">
        <Box>
          <Toolbar />

          <Box sx={{ backgroundColor: 'namhae.main' }}>
            <Image src={namhaePic} alt="namhae map" />
          </Box>

          <Container>
            <Box my={30}>
              <FadeInSection>
                <IntroPopulation />
              </FadeInSection>
            </Box>
          </Container>

          <Box my={30}>
            <Paper
              height={500}
              sx={{ border: 0, borderRadius: 0, boxShadow: 0, backgroundColor: 'primary.main' }}
              component={Stack}
              direction="column"
              justifyContent="center"
            >
              <FadeInSection>
                <Typography
                  color="namhae.main"
                  variant="h4"
                  component="h1"
                  fontWeight="fontWeightBold"
                  gutterBottom
                  textAlign="center"
                  mt={5}
                >
                  하나의 관계가
                  <br />
                  새로운 인구를 형성한다.
                </Typography>
              </FadeInSection>
            </Paper>
          </Box>

          <Container>
            <Box my={30}>
              <FadeInSection>
                <CenterGrid />
              </FadeInSection>
            </Box>
          </Container>
        </Box>
      </Box>

      <Footer />
    </Fragment>
  )
}

export default Home
