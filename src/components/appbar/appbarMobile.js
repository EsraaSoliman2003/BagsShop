import React, { useState } from "react";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Actions from "./action";
import AppDrawer from "../drawer";
import Search from "../search";

export default function AppbarMobile({ matches }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen); // تغيير الحالة من مفتوح إلى مغلق والعكس
  };

  return (
    <AppbarContainer
      sx={{
        justifyContent: "space-between",
      }}
    >
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>

      <AppDrawer open={drawerOpen} setOpen={setDrawerOpen} />
      <AppbarHeader textAlign={"center"} variant="h4">
        My Bags
      </AppbarHeader>
      <Search />
      <Actions matches={true} />
    </AppbarContainer>
  );
}
