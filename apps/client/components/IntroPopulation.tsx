import React, { VFC, Fragment } from 'react'

import { Typography } from '@mui/material'

const IntroPopulation: VFC = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default IntroPopulation
