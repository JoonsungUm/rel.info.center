import React, { VFC } from 'react'

import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'

interface CenterCardProps {
  title: string
  imageUrl: string
  linkUrl: string
}

const CenterCard: VFC<CenterCardProps> = ({ title, imageUrl, linkUrl }) => {
  return (
    <Card>
      <CardActionArea href={linkUrl} target="_blank" rel="noopener noreferrer">
        <CardMedia
          component="img"
          sx={{
            height: {
              xs: 180,
              sm: 200,
              md: 240,
              lg: 300,
            },
          }}
          image={imageUrl}
          title={title}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            안내소는 안내소를 위한 서비스를 제공하는 서비스입니다.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CenterCard
