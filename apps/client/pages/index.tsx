import React, { VFC, Fragment, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import namhaePic from '../public/images/namhae.png'

import { Toolbar, Box, Container, Paper, Stack, Grid, Typography } from '@mui/material'

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
            <Box
              sx={{ p: { xs: 3, sm: 6 }, position: { sm: 'relative', md: 'absolute' }, color: 'whitesmoke' }}
            >
              <Stack
                direction={{ sm: 'row', md: 'column' }}
                justifyContent={{ xs: 'center', sm: 'center', md: 'left', lg: 'left' }}
              >
                <MapTitleTypo title="남해" />
                <MapTitleTypo title="관계" />
                <MapTitleTypo title="지도" />
              </Stack>

              <Box
                sx={{
                  color: 'primary.main',
                  pt: { xs: 3, sm: 6 },
                }}
              >
                <Grid container>
                  <MapItemTypo title="OO스튜디오" />
                  <MapItemTypo title="OO공방" />
                  <MapItemTypo title="OOO빵집" />
                  <MapItemTypo title="OOO디자인" />
                  <MapItemTypo title="OO라이프" />
                  <MapItemTypo title="OO클럽" />
                  <MapItemTypo title="살러" />
                  <MapItemTypo title="OO청년단체" />
                  <MapItemTypo title="OO모임" />
                  <MapItemTypo title="사진관" />
                  <MapItemTypo title="까페" />
                  <MapItemTypo title="..." />
                </Grid>
              </Box>
            </Box>
            <Box>
              <Image src={namhaePic} alt="namhae map" />
            </Box>
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

interface MapTitleTypoPops {
  title: string
}

const MapTitleTypo: VFC<MapTitleTypoPops> = ({ title }) => (
  <Typography
    sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '2.5rem', lg: '3rem' } }}
    variant="h3"
    component="div"
    gutterBottom
  >
    {title}
  </Typography>
)

interface MapItemTypoPops {
  title: string
}

const MapItemTypo: VFC<MapItemTypoPops> = ({ title }) => (
  <Grid item xs={12} sm={6} md={12}>
    <Typography
      sx={{
        textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' },
        fontSize: { xs: '1rem', sm: '1rem', md: '1rem', lg: '1.5rem' },
      }}
      gutterBottom
    >
      {title}
    </Typography>
  </Grid>
)
