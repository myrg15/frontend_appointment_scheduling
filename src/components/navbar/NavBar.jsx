import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const drawerWidth = 240;
let navItems = [
  { name: "home", path: "/" },
  { name: "Create Treatment", path: "/create-treatment" },
  { name: "Appointments", path: "/appointments" },
  { name: "Login", path: "/login", protected: false },
  { name: "Register", path: "/register", protected: false },
];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const TOKEN = localStorage.getItem("token");

  if (TOKEN) {
    navItems = navItems.filter((item) => item.protected !== false);
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "black", color: "goldenrod" }}
    >
      <Typography variant="h6" sx={{ my: 2, color: "goldenrod" }}>
        Facial & Body Care
      </Typography>
      <Divider sx={{ backgroundColor: "goldenrod" }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
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
      <AppBar component="nav" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", color: "goldenrod" },
            }}
          >
            Facial & Body Care
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <NavLink
                to={item.path}
                key={item.name}
                sx={{ color: "goldenrod" }}
              >
                <Button
                  key={item.name}
                  sx={{ color: "goldenrod", backgroundColor: item.name }}
                >
                  {item.name}
                </Button>
              </NavLink>
            ))}

            {TOKEN && (
              <Button onClick={handleLogout} sx={{ color: "goldenrod" }}>
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
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
              backgroundColor: "black",
              color: "goldenrod",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        width="100%"
        height="100vh"
        component="main"
        sx={{ p: 2, pt: "65px", backgroundColor: "whitesmoke" }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;
