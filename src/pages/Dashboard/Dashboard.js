import React from "react";
import AddProducts from "./AddProducts/AddProducts";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import AddIcon from "@mui/icons-material/Add";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import ReviewsIcon from "@mui/icons-material/Reviews";
import LogoutIcon from "@mui/icons-material/Logout";
import PaymentIcon from "@mui/icons-material/Payment";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import ShopIcon from "@mui/icons-material/Shop";
import HomeIcon from "@mui/icons-material/Home";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import DashboardHome from "./DashboardHome/DashboardHome";
import Review from "./Review/Review";
import useAuth from "../../hooks/useAuth";
import Payments from "./Payments/Payments";
import MyOrders from "./MyOrders/MyOrders";
import ManageOrders from "./ManageOrders/ManageOrders";
import ManageProducts from "./ManageProducts/ManageProducts";
import MakeAdmin from "./MakeAdmin/MakeAdmin";

const drawerWidth = 240;
const Dashboard = (props) => {
  const { logout } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let { path, url } = useRouteMatch();
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <NavLink
            className="dash-link"
            style={{
              fontWeight: "bold",
            }}
            to="/home"
          >
            <ListItemText primary="Home"></ListItemText>
          </NavLink>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <DashboardCustomizeIcon />
          </ListItemIcon>
          <NavLink
            className="dash-link"
            style={{
              fontWeight: "bold",
            }}
            to={url}
          >
            <ListItemText primary="Dashboard"></ListItemText>
          </NavLink>
        </ListItem>

        {!admin ? (
          <div>
            <ListItem>
              <ListItemIcon>
                <ShoppingBasketIcon />
              </ListItemIcon>
              <NavLink
                className="dash-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                to={`${url}/my_orders`}
              >
                <ListItemText primary="My Orders"></ListItemText>
              </NavLink>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ReviewsIcon />
              </ListItemIcon>
              <NavLink
                className="dash-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                to={`${url}/review`}
              >
                <ListItemText primary="Review Items"></ListItemText>
              </NavLink>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <PaymentIcon />
              </ListItemIcon>
              <NavLink
                className="dash-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                to={`${url}/paynow`}
              >
                <ListItemText primary="Pay Now"></ListItemText>
              </NavLink>
            </ListItem>
          </div>
        ) : (
          <div>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <NavLink
                className="dash-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                to={`${url}/addproduct`}
              >
                <ListItemText primary="Add Products"></ListItemText>
              </NavLink>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ShopIcon />
              </ListItemIcon>
              <NavLink
                className="dash-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                to={`${url}/manage_orders`}
              >
                <ListItemText primary="Manage Orders"></ListItemText>
              </NavLink>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <AutoDeleteIcon />
              </ListItemIcon>
              <NavLink
                className="dash-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                to={`${url}/manage_products`}
              >
                <ListItemText primary="Manage Products"></ListItemText>
              </NavLink>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ManageAccountsIcon />
              </ListItemIcon>
              <NavLink
                className="dash-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                to={`${url}/make_admin`}
              >
                <ListItemText primary="Make Admin"></ListItemText>
              </NavLink>
            </ListItem>
          </div>
        )}

        <ListItem>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <button onClick={logout}>Logout</button>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
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
            <Typography variant="h6" noWrap component="div">
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar> */}
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
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
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Box>
            <Switch>
              <Route exact path={path}>
                <DashboardHome />
              </Route>
              <Route path={`${path}/addproduct`}>
                <AddProducts />
              </Route>
              <Route path={`${path}/review`}>
                <Review />
              </Route>
              <Route path={`${path}/paynow`}>
                <Payments />
              </Route>
              <Route path={`${path}/my_orders`}>
                <MyOrders />
              </Route>
              <Route path={`${path}/manage_orders`}>
                <ManageOrders />
              </Route>
              <Route path={`${path}/manage_products`}>
                <ManageProducts />
              </Route>
              <Route path={`${path}/make_admin`}>
                <MakeAdmin />
              </Route>
            </Switch>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
