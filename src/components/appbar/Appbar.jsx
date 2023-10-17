import React, { useState } from "react";
import { Link } from "react-scroll"; // Importa Link de react-scroll

import {
  StyledAppBar,
  StyledButton,
  StyledListBox,
  StyledMenuicon,
  StyledTypography,
} from "./StyleAppbar";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;
const navItems = ["Inicio", "Creaciones", "Acerca de", "Contacto"];

export const Appbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMenuItemClick = (sectionId) => {
    
    return (
      <Link
        to={sectionId}
        spy={true}
        smooth={true}
        offset={-90} // Ajusta esto según el tamaño de tu barra de navegación
        duration={500} // Duración del desplazamiento (en milisegundos)
      >
        {sectionId}
      </Link>
    );
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <Typography
        variant="h6"
        sx={{ my: 2 }}
      >
        Mafe Creaciones
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            onClick={() => handleMenuItemClick(item.toLowerCase())}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <StyledAppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <StyledMenuicon />
          </IconButton>

          <StyledTypography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Mafe Creaciones
          </StyledTypography>
          <StyledListBox>
            {navItems.map((item) => (
              <StyledButton key={item}>
                {handleMenuItemClick(item.toLowerCase())}
              </StyledButton>
            ))}
          </StyledListBox>
        </Toolbar>
      </StyledAppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        component="main"
        sx={{ p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
};
