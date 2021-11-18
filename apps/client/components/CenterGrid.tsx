import React, { VFC } from 'react'

import { Grid } from '@mui/material'
import CenterCard from './CenterCard'

const CenterGrid: VFC = () => {
  return (
    <Grid container spacing={3} sx={{ pt: 4 }}>
      <Grid item xs={12} sm={6} md={6}>
        <CenterCard title="남면다락" imageUrl="/images/darak.jpg" />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <CenterCard title="삼동초이" imageUrl="/images/choii.jpg" />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <CenterCard title="서면서상" imageUrl="/images/seosang.jpg" />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <CenterCard title="설천티라" imageUrl="/images/tira.jpg" />
      </Grid>
    </Grid>
  )
}

export default CenterGrid
