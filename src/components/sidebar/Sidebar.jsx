import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import Person from "../../Media/images/person looking.jpg";
import Pro from "../../Media/images/hat.jpg";
import { Avatar, Button, Grid, IconButton,  Paper, Rating, TextareaAutosize } from "@mui/material";
import { Add, Delete, Done, RateReview } from "@mui/icons-material";
import { Link } from "react-router-dom";
import './sidebar.css'


const drawerWidth = 280;

function Sidebar() {
  return (
    <>
      
        <CssBaseline />
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            background: "#fff",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "#000000" }}
            >
              General Details
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
            {/* <img
                style={{ height: "10%", width: "50%",display:'flex',alignItems:'center' }}
                alt="logo"
                src={Logo}
              /> */}
          <Toolbar />
        
          <Divider />
          <List>
            {["General Details", "Address"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  {/* <Link to="/GeneralDetailsssds" ></Link> */}
                    {index % 2 === 0 ? <><InboxIcon /></>: <MailIcon />}
                  </ListItemIcon>
                  <Link className="sidebar-menu"
                  to= {index % 2 === 0 ? '/general-details'  : '/address'} >
                     <ListItemText primary={text} /></Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Date and Time", "Price and Payment"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <Link className="sidebar-menu"
                  to= {index % 2 === 0 ? '/date-time'  : '/price-payment'} >
                     <ListItemText primary={text} /></Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ flexGrow: 1, padding: "2px 12px" }}>
            <Paper
              elevation={10}
              style={{
                flexGrow: 1,
                padding: "1.5rem",
                marginTop: "1rem",
                borderRadius: "12px",
                backgroundColor: "#6495ED",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <img
                    style={{
                      height: "45vh",
                      width: "100%",
                      border: "none",
                      objectFit: "contain",
                    }}
                    alt="looking"
                    src={Person}
                  />
                  <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                    Looking for the best contract of your request?
                  </span>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#ff8f00",
                      borderRadius: "12px",
                      padding: "1px 18px",
                    }}
                  >
                    <span style={{ textTransform: "capitalize" }}>
                      Upgrade to Premium
                    </span>
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Box>

        </Drawer>
        
   
    </>
  );
}

export default Sidebar;
