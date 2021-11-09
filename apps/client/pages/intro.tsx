import React, { Fragment } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Toolbar, Box, Grid, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material'

import Appbar from '../components/Appbar'
import New3DMap from '../components/New3DMap'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>관계인구-하나의 관계가 새로운 인구를 형성한다</title>
        <meta name="description" content="관계인구-하나의 관계가 새로운 인구를 형성한다" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Appbar tabIndex={0} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Box sx={{ position: 'relative', width: '100%', height: 600, zIndex: -1 }}>
          <New3DMap />
        </Box>

        <Typography variant="h3" component="h1" gutterBottom textAlign="center">
          관계인구란?
        </Typography>

        <Typography variant="h5" component="h1" gutterBottom textAlign="center">
          특정 지역에 거주하진 않지만
          <br />
          여가, 업무, 문화활동, 사회적 기여등 다양한 활동을 통해 지역과 관계를 맺고
          <br />
          정주인구 나 관광인구가 아닌 지역 유대형의 제 3의 인구입니다.
        </Typography>
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
