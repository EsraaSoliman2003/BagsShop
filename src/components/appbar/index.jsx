import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import AppbarMobile from './appbarMobile';
import AppbarDesktop from './appbarDesktop';


export default function Appbar() {

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div style={{color:theme.palette.primary.main }} >
        { matches? <AppbarMobile/> : <AppbarDesktop/>}
    </div>
  )
}
