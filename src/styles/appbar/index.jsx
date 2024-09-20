import { Box, List, styled, Typography } from "@mui/material";
import { Colors } from "../theme";
import '@fontsource/montez'

export const AppbarContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px'

}))

export const AppbarHeader = styled(Typography)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontSize: '4em',
    fontFamily: '"Montez", "cursive"',
    color: Colors.secondary
}));

export const MyList = styled(List)(({ type }) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center'
}))

export const ActionIconContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`,
    position: "fixed",
}))

export const ActionIconContainerDesktop = styled(Box)(() => ({
    flexGrow: 0
}))

