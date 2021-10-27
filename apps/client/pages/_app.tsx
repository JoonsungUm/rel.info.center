import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <CssBaseline />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
