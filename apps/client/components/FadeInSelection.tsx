import React, { FC, useState, useRef, useEffect } from 'react'
import { Box } from '@mui/material'

const FadeInSection: FC = ({ children }) => {
  const [isVisible, setVisible] = useState(true)

  const domRef = useRef()
  useEffect(() => {
    const currentRef = domRef.current
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting))
    })
    observer.observe(currentRef)
    return () => observer.unobserve(currentRef)
  }, [])

  return (
    <Box
      ref={domRef}
      sx={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transform: isVisible ? 'none' : 'translateY(20vh)',
        transition: 'opacity 0.6s ease-out, transform 1.2s ease-out',
        willChange: 'opacity, visibility',
      }}
    >
      {children}
    </Box>
  )
}

export default FadeInSection
