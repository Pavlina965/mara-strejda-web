"use client";
import React from "react";
import { useState } from "react";
import styles from "./Navbar.module.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      // main: "#9a8a78",
      main: "#f3f3f3",
    },
    secondary: {
      main: "#4caf50",
    },
  },
});

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (event: React.MouseEvent) => {
    setIsOpen(open);
  };

  const menuItems = [
    { text: "Domů", href: "/" },
    // { text: "Služby", href: "#Services" },
    { text: "O nás", href: "#About" },
    { text: "Kontakt", href: "#Contact" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar sx={{ backgroundColor: theme.palette.primary.main }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Logo
            </Typography>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  href={item.href}
                  className={styles.listItem}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="top"
          open={isOpen}
          onClose={toggleDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          <Box
            sx={{ width: "100%" }}
            role="presentation"
            onClick={toggleDrawer(false)}
          >
            <List>
              {menuItems.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  component="a"
                  href={item.href}
                  className={styles.drawerListItem}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
