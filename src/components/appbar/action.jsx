import React from "react";
import {
  ActionIconContainerDesktop,
  ActionIconContainerMobile,
  MyList,
} from "../../styles/appbar";
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import ShoppingCartchIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Colors } from "../../styles/theme";

export default function Actions({ matches }) {
  const arr = [<ShoppingCartchIcon />, <PersonIcon />, <FavoriteIcon />];
  const Component = matches
    ? ActionIconContainerMobile
    : ActionIconContainerDesktop;
  return (
    <Component>
      <MyList
        type="row"
        sx={{
          marginRight: "15px",
        }}
      >
        {arr.map((icon, index) => (
          <>
            <ListItemButton
              sx={{
                justifyContent: "center",
              }}
              key={index}
            >
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: Colors.secondary,
                }}
              >
                {icon}
              </ListItemIcon>
            </ListItemButton>

            <Divider orientation="vertical" flexItem />
          </>
        ))}
      </MyList>
    </Component>
  );
}
