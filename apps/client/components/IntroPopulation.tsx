import React, { VFC, Fragment } from 'react'

import { Grid, Typography } from '@mui/material'

const IntroPopulation: VFC = () => {
  return (
    <Fragment>
      <Typography
        sx={{ color: 'namhae.main' }}
        mb={10}
        variant="h3"
        component="h3"
        fontWeight="fontWeightBold"
        gutterBottom
        textAlign="center"
      >
        관 계 인 구
      </Typography>

      <Typography
        sx={{ color: 'namhae.main' }}
        my={5}
        variant="h6"
        component="div"
        gutterBottom
        textAlign="center"
      >
        : 특정 지역에 거주하진 않지만
      </Typography>

      <Grid sx={{ my: 5 }} container spacing={2}>
        <Grid item md={2} />

        <Grid item xs={12} sm={6} md={2}>
          <Typography
            sx={{ color: 'namhae.main' }}
            variant="h4"
            component="div"
            fontWeight="fontWeightBold"
            gutterBottom
            textAlign="center"
          >
            여&nbsp;&nbsp;&nbsp;&nbsp;가
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5} md={2}>
          <Typography
            sx={{ color: 'namhae.main' }}
            variant="h4"
            component="div"
            fontWeight="fontWeightBold"
            gutterBottom
            textAlign="center"
          >
            업&nbsp;&nbsp;&nbsp;&nbsp;무
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography
            sx={{ color: 'namhae.main' }}
            variant="h4"
            component="div"
            fontWeight="fontWeightBold"
            gutterBottom
            textAlign="center"
          >
            문화적활동
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5} md={2}>
          <Typography
            sx={{ color: 'namhae.main' }}
            variant="h4"
            component="div"
            fontWeight="fontWeightBold"
            gutterBottom
            textAlign="center"
          >
            사회적기여
          </Typography>
        </Grid>

        <Grid item md={2} />
      </Grid>

      <Typography sx={{ color: 'namhae.main' }} variant="h5" component="div" gutterBottom textAlign="center">
        등 다양한 활동을 통해 지역과 관계를 맺고
      </Typography>

      <Typography sx={{ color: 'namhae.main' }} variant="h5" component="div" gutterBottom textAlign="center">
        정주인구 나 관광인구가 아닌
      </Typography>

      <Typography sx={{ color: 'namhae.main' }} variant="h5" component="div" gutterBottom textAlign="center">
        지역 유대형의 제 3의 인구입니다.
      </Typography>
    </Fragment>
  )
}

export default IntroPopulation
