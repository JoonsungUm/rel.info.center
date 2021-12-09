import React, { VFC } from 'react'
import { Box, Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material'

interface MapCardProps {
  title: string
  description: string
  imageUrl: string
  linkUrl: string
}

const MapCard: VFC<MapCardProps> = ({ title, description, imageUrl, linkUrl }) => {
  return (
    <Card sx={{ backgroundColor: 'namhae.main', borderRadius: 0, boxShadow: 'none' }}>
      <CardActionArea href={linkUrl} target="_blank" rel="noopener noreferrer">
        <Box sx={{ border: 3, borderStyle: 'dashed', borderRadius: 2, borderColor: 'primary.main' }}>
          <CardMedia
            component="img"
            image={imageUrl}
            title={title}
            alt={title}
            sx={{
              height: {
                xs: 300,
                sm: 300,
                md: 140,
                lg: 180,
                xl: 200,
              },
            }}
          />
        </Box>
        <CardContent>
          <Typography
            variant="h6"
            color="primary.main"
            sx={{ fontSize: { sm: '1.5rem', md: '1rem' }, fontWeight: 'bold' }}
          >
            {title}
          </Typography>
          <Typography variant="body1" color="whitesmoke" sx={{ fontSize: { sm: '1.5rem', md: '1rem' } }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MapCard
