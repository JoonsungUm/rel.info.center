import React, { Fragment } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Toolbar, Box, Grid, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material'

import Appbar from '../components/Appbar'
import NewMap from '../components/NewMap'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>관계안내소-하나의 관계가 새로운 인구를 형성한다</title>
        <meta name="description" content="관계안내소-하나의 관계가 새로운 인구를 형성한다" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Appbar tabIndex={1} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Box sx={{ position: 'relative', width: '100%', height: { xs: 200, sm: 300, lg: 400 }, zIndex: -1 }}>
          <NewMap />
        </Box>

        <Typography variant="h2" component="h1" gutterBottom textAlign="center" mt={5}>
          하나의 관계가
          <br />
          새로운 인구를 형성한다.
        </Typography>
        <Grid container spacing={3} sx={{ pt: 4 }}>
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="/namhae.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    안내소 소개
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    안내소는 안내소를 위한 서비스를 제공하는 서비스입니다.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="/namhae.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    안내소 소개
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    안내소는 안내소를 위한 서비스를 제공하는 서비스입니다.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="/namhae.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    안내소 소개
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    안내소는 안내소를 위한 서비스를 제공하는 서비스입니다.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="/namhae.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    안내소 소개
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    안내소는 안내소를 위한 서비스를 제공하는 서비스입니다.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Fragment>
  )
}

export default Home
