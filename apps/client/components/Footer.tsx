import React, { VFC } from 'react'

import { Container, Typography } from '@mui/material'

const Footer: VFC = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 3, textAlign: 'center' }}>
      <footer>
        <Typography variant="h6" gutterBottom>
          슬렁슬렁 관련 정보 (연락처, 주소 등)
        </Typography>
      </footer>
    </Container>
  )
}

export default Footer
