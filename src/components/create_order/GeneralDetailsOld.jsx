import {
  Add,
  AddLocation,
  DateRange,
  Details,
  Handyman,
  PhotoCamera,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  TextareaAutosize,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Person from "../../Media/images/person looking.jpg";
import Logo from "../../Media/images/handyman_logo.png";
const drawerWidth = 280;
function GeneralDetails() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {/* <AppBar
          position="fixed"
          elevation={0}
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            backgroundColor: "#fff",
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div" color="black">
              General Details
            </Typography>
          </Toolbar>
        </AppBar> */}
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
          <Toolbar />
          {/* <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <img
                style={{ height: "10%", width: "50%" }}
                alt="logo"
                src={Logo}
              />
              <Typography
                variant="p"
                noWrap
                component="body1"
                sx={{
                  display: "flex",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "darkorange",
                  textDecoration: "none",
                  marginTop: "2rem",
                }}
              >
                Handyman
              </Typography>
            </Box>
          </Grid>
       */}
          <List>
            {[
              "General Details",
              "Address",
              "Date & Time",
              "Price and Payment",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 4 === 0 ? <Details /> : <AddLocation />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
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
        <Toolbar />
      </Box>

 
      {/* <Grid container spacing={2} style={{display:"flex"}}> */}
     
        {/* <Grid item xs={6}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}style={{display:"flex",justifyContent:"flex-end"}}>
              <Grid item xs={8}style={{display:"flex",justifyContent:"center"}}>
                  <TextField
                    id="standard-multiline-static"
                    label="What's to be done?(Breify)"
                    multiline
                    rows={2}
                    variant="standard"
                  />
                
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h7">
                  Describe your order in details
                </Typography>
                <div>
                  <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Empty"
                    style={{ width: 260, height: 200 }}
                  />
                </div>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h7">Add an attachment </Typography>
                <Box
                  style={{
                    borderStyle: "dotted",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end',
                    padding: '2rem',
                    color: "green",
                    
                  }}
                >
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    style={{ marginTop: "2rem" }}
                  >
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                  </IconButton>
                </Box>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <input hidden accept="image/*" type="file" />
                    <Add />
                  </IconButton>
                  <span style={{ color: "green" }}>
                    Add confidential data
                  </span>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box>
            <Grid
              container
              spacing={2}
              style={{
                direction: "column",
                justifyContent: "flex-start",
                alignItems: "flex-end",
              }}
            >
              <Grid item xs={8}>
                <Paper>step 1</Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper>step 2</Paper>
              </Grid>

              <Grid item xs={8}>
                <Paper>step 3</Paper>
              </Grid>
            </Grid>
          </Box>
        </Grid> */}

      {/* </Grid> */}
{/* 
      <Divider style={{ backgroundColor: "#fff" }} />
      <Grid
        container
        spacing={2}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Button variant="text">Cancel</Button>
          <Button variant="contained" style={{ backgroundColor: "#00e676" }}>
            Next Step
          </Button>
        </Grid>
      </Grid> */}
    </>
  );
}

export default GeneralDetails;
