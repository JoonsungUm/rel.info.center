import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Box, Tabs, Tab } from '@mui/material'

interface LinkTabProps {
  label: string
  href: string
}

const LinkTab = (props: LinkTabProps) => {
  const router = useRouter()
  return (
    <Tab
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
        router.push(props.href)
      }}
      {...props}
    />
  )
}

interface NavTabsProps {
  tabIndex: number
}

const NavTabs: NextPage<NavTabsProps> = ({ tabIndex = 1 }) => {
  const [value, setValue] = React.useState(tabIndex)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs"
        textColor="inherit"
        variant="fullWidth"
      >
        <LinkTab label="관계인구" href="/intro" />
        <LinkTab label="관계안내소" href="/" />
        <LinkTab label="관계형성" href="/map" />
      </Tabs>
    </Box>
  )
}

export default NavTabs
