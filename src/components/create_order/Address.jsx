import React from 'react'
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
import LeafLet from '../maps/LeafLet';
import { Grid, Paper } from '@mui/material';
import Sidebar from '../sidebar/Sidebar';



const drawerWidth = 280;

function Address() {
  return (
    <>
    <Box sx={{ display: "flex" }}>
     <Sidebar/>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <LeafLet/>
        
      </Box>
    </Box>
  </>
  )
}

export default Address
