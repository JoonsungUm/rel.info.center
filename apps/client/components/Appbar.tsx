import React from 'react'
import { NextPage } from 'next'

import { Box, Button, AppBar, Toolbar, Typography } from '@mui/material'
import NavTabs from './NavTabs'

interface AppbarProps {
  tabIndex: number
}
const Appbar: NextPage<AppbarProps> = ({ tabIndex }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ width: '100%' }}>
          <NavTabs tabIndex={tabIndex} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Appbar
