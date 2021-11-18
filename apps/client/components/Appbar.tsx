import React, { FC, ReactElement, VFC } from 'react'

import { Box, AppBar, Toolbar, Typography, Slide, useScrollTrigger, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const HideOnScroll: FC = ({ children }) => {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children as ReactElement}
    </Slide>
  )
}

interface AppbarProps {
  handleDrawerToggle: () => void
}

const Appbar: VFC<AppbarProps> = ({ handleDrawerToggle }) => {
  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ width: '100%' }}>
          <Typography>관계안내소 - 하나의 관계가 새로운 인구를 형성한다</Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              position: 'fixed',
              right: 24,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default Appbar
