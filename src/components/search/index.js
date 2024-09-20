import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Colors } from "../../styles/theme";

export default function Search() {
  const [state, setState] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        margin: "auto",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
      >
        <TextField
          InputLabelProps={{
            sx: {
              color: Colors.secondary,
            },
          }}
          InputProps={{
            sx: {
              color: Colors.secondary,
            },
          }}
          sx={{
            border: `1px solid ${Colors.secondary}`,
            borderRadius: 1,
          }}
          label="Search"
        />
        <SearchIcon
          sx={{
            fontSize: "3rem",
          }}
        />
      </Box>
    </Box>
  );

  return (
    <div>
      <>
        <Button onClick={toggleDrawer("Top", true)}>
          <SearchIcon />
        </Button>
        <Drawer
          anchor={"Top"}
          open={state["Top"]}
          onClose={toggleDrawer("Top", false)}
          sx={{
            "& .MuiDrawer-paper": {
              top: "0",
              width: "100%",
              height: "50%",
              borderRadius: 0,
              backgroundColor: Colors.primary,
              color: Colors.secondary,
              opacity: 0.85,
            },
          }}
        >
          {list()}
        </Drawer>
      </>
    </div>
  );
}
