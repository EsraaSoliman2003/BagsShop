import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useState } from "react";


export default function AnchorTemporaryDrawer() {
    const [state, setState] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        Test
    </Box>
  );

  return (
        <>
          <Button onClick={toggleDrawer("Top", true)}>{"Top"}</Button>
          <Drawer
            anchor={"Top"}
            open={state["Top"]}
            onClose={toggleDrawer("Top", false)}
          >
            {list("Top")}
          </Drawer>
        </>

  );
}