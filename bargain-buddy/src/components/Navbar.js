import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginButton from "./LoginButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BargainBuddy
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
          >
            <LoginButton />
          </Box>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Sidebar state={state} setState={setState} toggleDrawer={toggleDrawer}></Sidebar>
    </>
  );
};

export default Navbar;
