import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import { Box } from '@mui/material'

const FlatMap = () => {
  //lottie
  const likecontainer = useRef()
  useEffect(() => {
    lottie.loadAnimation({
      container: likecontainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./flatMap.json'),
    })
  }, [])
  return (
    <Box>
      <Box
        ref={likecontainer}
        sx={{
          width: '100%',
          height: '100%',
          margin: '0 auto',
          position: 'absolute',
          zIndex: 1000,
        }}
      ></Box>
    </Box>
  )
}

export default FlatMap
