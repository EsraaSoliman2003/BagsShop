import React from "react";
import {
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./action";

export default function AppbarDesktop({matches}) {
  const arr = ["Home", "Categories", "Products", "Contact Us"];
  return (
      <AppbarContainer>
        <AppbarHeader>My Bags</AppbarHeader>
        <MyList type="row">
          {arr.map((item) => (
            <ListItemText key={item} primary={item} />
          ))}
        </MyList>
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
        <Actions matches={matches} />
      </AppbarContainer>
  );
}
