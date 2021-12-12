import React, { VFC, useState, useEffect, useCallback } from 'react'

import Image from 'next/image'
import namhaePic from '../public/images/namhae.png'

import { Box, Stack, Grid, Typography } from '@mui/material'

import { MAP_PLACES } from '../data/mapPlaces'
import MapMarkerCanvas from './MapMarkerCanvas'
import MapCard from './MapCard'

const NamhaeMap: VFC = () => {
  const [placeId, setPlaceId] = useState<number>(0)

  const changePlace = useCallback(() => {
    console.log(placeId)

    const nextPlaceId = placeId >= 14 ? 0 : placeId + 1
    setPlaceId(nextPlaceId)
  }, [placeId])

  useEffect(() => {
    const interval = setInterval(changePlace, 3000)
    return () => clearInterval(interval)
  }, [changePlace])

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
        {MAP_PLACES.map((place, index) => (
          <MapMarkerCanvas key={index} x={place.x} y={place.y} isSelected={index === placeId} />
        ))}
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
              <MapItemTypo key={index} title={place.name} isSelected={index === placeId} />
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
          title={MAP_PLACES[placeId].name}
          description={MAP_PLACES[placeId].address}
          imageUrl={MAP_PLACES[placeId].imageUrl}
          linkUrl={MAP_PLACES[placeId].siteUrl}
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
  isSelected: boolean
}

const MapItemTypo: VFC<MapItemTypoPops> = ({ title, isSelected }) => (
  <Grid item xs={12} sm={6} md={12}>
    <Typography
      sx={{
        textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' },
        fontSize: isSelected
          ? { xs: '1.2rem', sm: '1.2rem', md: '1rem', lg: '1.2rem', xl: '1.4rem' }
          : { xs: '1rem', sm: '1rem', md: '0.8rem', lg: '1rem', xl: '1.2rem' },
        fontWeight: isSelected ? 'bold' : 'normal',
      }}
      gutterBottom
    >
      {title}
    </Typography>
  </Grid>
)
