import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";

export default function AppDrawer({ open, setOpen }) {
  return (
    <Drawer open={open}>
      <IconButton
        sx={{
          position: "absolute",
          top: -7,
          right: -20,
        }}
        onClick={() => setOpen(false)}
      >
        <CloseIcon
          sx={{
            fontSize: "2.5rem",
            color: Colors.white,
          }}
        />
      </IconButton>
      <List sx={{ marginTop: 6 }}>
        <ListItemButton>
          <ListItemText>Home</ListItemText>
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText>Categories</ListItemText>
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText>Products</ListItemText>
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText>About Us</ListItemText>
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText>Contact Us</ListItemText>
        </ListItemButton>
        <Divider />
      </List>
    </Drawer>
  );
}
