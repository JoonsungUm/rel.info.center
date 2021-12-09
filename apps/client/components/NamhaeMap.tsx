import React, { VFC } from 'react'

import Image from 'next/image'
import namhaePic from '../public/images/namhae.png'

import { Box, Stack, Grid, Typography } from '@mui/material'

import { MAP_PLACES } from '../data/mapPlaces'
import MapMarkerCanvas from './MapMarkerCanvas'
import MapCard from './MapCard'

const NamhaeMap: VFC = () => {
  return (
    <Box sx={{ backgroundColor: 'namhae.main' }}>
      <Box
        sx={{
          '& canvas': {
            position: 'absolute',
            zIndex: 10,
          },
        }}
      >
        <MapMarkerCanvas />
        <Image src={namhaePic} alt="namhae map" />
      </Box>

      <Box
        sx={{
          p: { xs: 3, sm: 6 },
          top: { sm: 'auto', md: '50px' },
          position: { sm: 'relative', md: 'absolute' },
          color: 'whitesmoke',
        }}
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
            {MAP_PLACES.map((place, index) => (
              <MapItemTypo title={place.name} key={index} />
            ))}
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          p: { xs: 3, sm: 6 },
          position: { sm: 'relative', md: 'absolute' },
          top: { sm: 'auto', md: '30%' },
          right: { sm: 'auto', md: '0' },
          maxWidth: { xs: '100%', sm: '100%', md: '28%' },
          color: 'whitesmoke',
        }}
      >
        <MapCard
          title={MAP_PLACES[0].name}
          description={MAP_PLACES[0].address}
          imageUrl={MAP_PLACES[0].imageUrl}
          linkUrl={MAP_PLACES[0].siteUrl}
        />
      </Box>
    </Box>
  )
}

export default NamhaeMap

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
        fontSize: { xs: '1rem', sm: '1rem', md: '0.8rem', lg: '1rem', xl: '1.2rem' },
      }}
      gutterBottom
    >
      {title}
    </Typography>
  </Grid>
)
