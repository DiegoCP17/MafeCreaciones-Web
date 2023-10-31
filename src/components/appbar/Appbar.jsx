import React, { useEffect, useState } from "react";
import { Link, scroller } from "react-scroll"; // Importa Link de react-scroll

import {
  StyledAppBar,
  StyledButton,
  StyledDrawer,
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
  const [scrollToSection, setScrollToSection] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMenuItemClick = (sectionId) => {
    handleDrawerToggle(); // Cierra el drawer cuando se hace clic en un elemento
    setScrollToSection(sectionId); // Almacena la sección a la que se debe desplazar
  };

  useEffect(() => {
    if (scrollToSection) {
      // Realiza el desplazamiento suave usando react-scroll
      scroller.scrollTo(scrollToSection, {
        duration: 800,
        smooth: true,
        offset: -90,
      });
      setScrollToSection(null); // Restablece el valor para futuros clics
    }
  }, [scrollToSection]);

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
            disablePadding
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-90}
                duration={800}
                onClick={() => handleMenuItemClick(item.toLowerCase())}
              >
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
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
              <StyledButton
                key={item}
                onClick={() => handleMenuItemClick(item.toLowerCase())}
              >
                {item}
              </StyledButton>
            ))}
          </StyledListBox>
        </Toolbar>
      </StyledAppBar>
      <nav>
        <StyledDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          drawerWidth="300px"
        >
          {drawer}
        </StyledDrawer>
      </nav>
      <Box
        component="main"
        sx={{ p: 3 }}
      >
        <Toolbar />
      </Box>
    </>
  );
};
