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
import { Avatar, Button, Grid, IconButton, Paper, Rating, TextareaAutosize } from "@mui/material";
import { Add, Delete, Done, RateReview } from "@mui/icons-material";
import { Link } from "react-router-dom";


const drawerWidth = 280;

function GeneralDetails() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
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
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
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
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "flex-start" }}
              >
                <Typography paragraph sx={{ color: "#757575" }}>
                  What's to be done?(Briefy)
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "flex-start" }}
              >
                <Box sx={{ width: "100%" }}>
                  <Typography component="h4" sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}>Windows cleaning</Typography>
                  <Divider />
                </Box>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-start", mt: 3, flexDirection: 'column' }}>
                <Typography paragraph sx={{ color: "#757575", display: "flex", justifyContent: "flex-start" }}>
                  Describe your order in details
                </Typography>
                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="Empty"
                  minRows={4}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-start", mt: 3, flexDirection: 'column' }}>
                <Typography paragraph sx={{ color: "#757575", display: "flex", justifyContent: "flex-start" }}>
                  Add attachment
                </Typography>

                <Grid item xs={12} style={{ display: "flex", alignItems: "center", gap: '1.2rem' }}>
                  <div style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: '1rem', color: "#fff",
                    borderWidth: '2px', borderStyle: 'dotted', width: '30%', height: '100px', cursor: 'pointer', borderRadius: '0.7rem', borderColor: '#00e676'
                  }}>
                    <label style={{ width: '100%', height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                        <Add style={{ backgroundColor: "#00e676", borderRadius: "12px" }} className='AddIcon' />
                      </div>
                      <input
                        type="file"
                        // name='uploadimage'
                        name='photo'
                        accept="image/*"
                        // onChange={handleProductImage}
                        style={{ width: '0px', height: '0px', objectFit: 'cover' }}
                      />
                    </label>
                  </div>
                  <div style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: '1rem',
                    borderWidth: '2px', width: '30%', height: '100px', cursor: 'pointer', borderRadius: '0.7rem', borderColor: 'rgb(209 213 219)'
                  }}>
                    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                      <img
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.7rem !important', }}
                        alt="looking"
                        name="photo"
                        src={Person}
                      />
                      <button
                        type='button'
                        style={{
                          position: 'absolute', border: 'none', borderRadius: '50px', padding: '0.2rem', right: '0.75rem', bottom: '0.75rem',
                          backgroundColor: 'rgb(239 68 68)', fontSize: '1.25rem', lineHeight: '1.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center'
                        }}
                      // onClick={deleteImage}
                      >
                        <Delete className='text-white' />
                      </button>
                    </div>

                  </div>
                  <div style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: '1rem',
                    borderWidth: '2px', width: '30%', height: '100px', cursor: 'pointer', borderRadius: '0.7rem', borderColor: 'rgb(209 213 219)'
                  }}>
                    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                      <img
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.7rem !important', }}
                        alt="looking"
                        name="photo"
                        src={Person}
                      />
                      <button
                        type='button'
                        style={{
                          position: 'absolute', border: 'none', borderRadius: '50px', padding: '0.2rem', right: '0.75rem', bottom: '0.75rem',
                          backgroundColor: 'rgb(239 68 68)', fontSize: '1.25rem', lineHeight: '1.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center'
                        }}
                      // onClick={deleteImage}
                      >
                        <Delete className='text-white' />
                      </button>
                    </div>

                  </div>
                  <div style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: '1rem',
                    borderWidth: '2px', width: '30%', height: '100px', cursor: 'pointer', borderRadius: '0.7rem', borderColor: 'rgb(209 213 219)'
                  }}>
                    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                      <img
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.7rem !important', }}
                        alt="looking"
                        name="photo"
                        src={Person}
                      />
                      <button
                        type='button'
                        style={{
                          position: 'absolute', border: 'none', borderRadius: '50px', padding: '0.2rem', right: '0.75rem', bottom: '0.75rem',
                          backgroundColor: 'rgb(239 68 68)', fontSize: '1.25rem', lineHeight: '1.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center'
                        }}
                      // onClick={deleteImage}
                      >
                        <Delete className='text-white' />
                      </button>
                    </div>

                  </div>
                </Grid>
                <div style={{ display: "flex", flexDirection: "row", color: "#00e676" }}>
                  <IconButton
                    aria-label="upload picture"
                    component="label"
                    style={{ color: "#00e676" }}>
                    <input hidden accept="image/*" type="file" />
                    <Add />
                  </IconButton>
                  <Typography style={{ marginTop: "9px" }}>Add confidential data</Typography>
                </div>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Paper elevation={3}>
                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item style={{ marginRight: '5px', display: 'flex', alignItems: 'center' }}>

                    <Avatar alt="wollace" src={Pro} sx={{ width: 100, height: 100 }} />
                  </Grid>
                  <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid item style={{ display: 'flex', flexDirection: 'row' }} >
                      <span> Captain Morgan</span>

                    </Grid>
                    <Grid item style={{ display: 'flex', justifyContent: 'flex-start' }} >
                      <span> 28 years | New York </span>
                    </Grid>
                    <Grid item style={{ display: 'flex', justifyContent: 'flex-start' }} >
                      <StarIcon style={{ color: "#ffeb3b" }} />
                      <span> 4.8/5 </span>
                      <span style={{ color: "#00e676" }}> [135 reviews]</span>
                    </Grid>
                  </Grid>
                  <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
                </Grid>
              </Paper>

              <Paper elevation={0} sx={{ flexGrow: 1, mt: 6, backgroundColor: "#fafafa", p: 2 }}>
                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item style={{ marginRight: '5px', display: 'flex', alignItems: 'center' }}>
                    <Done sx={{ fontSize: "small", backgroundColor: "#b9f6ca", color: "#00c853", width: 20, height: 20, borderRadius: "18px" }} />
                  </Grid>
                  <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid item style={{ display: 'flex', flexDirection: 'row' }} >
                      <span> Validated Contractor</span>

                    </Grid>
                    <Grid item style={{ display: 'flex', justifyContent: 'flex-start' }} >
                      <span> ID Card checked </span>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              <Paper elevation={0} sx={{ flexGrow: 1, mt: 8, backgroundColor: "#fafafa", p: 2 }}>
              <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item xs={12}style={{ marginRight: '5px', display: 'flex', alignItems: 'center' }}>
                  <RateReview sx={{ backgroundColor: "#b9f6ca", color: "#00c853", width: 30, height: 30, borderRadius: "18px" }} />
                  <span style={{marginLeft:"10px"}}> Last review</span>
                  </Grid>
                  <Grid item xs={12} style={{ display: 'flex', flexDirection: 'column',justifyContent:"flex-start" }}>
                  <Rating name="read-only" value={4} readOnly />
                  <span >
                          Thanking for your service, it was not easy but you did well.
                          Everyone is advised to deal with Alex regarding cleaning services.
                          He is a very decent and proffesinall person. </span>
                         <Box>
                         Written by: <span style={{ color: "#00c853" }}> Wollace Macharia</span>
                          </Box> 
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start' }} >
                    <Rating name="read-only" value={5} readOnly />
                         </Grid>   
                         <Grid item xs={12} >
                         <span >
                          All is well.the task was completed in time ⏲ and quality is good 💕 </span>
                         <Box>
                         Written by: <span style={{ color: "#00c853" }}> Wollace Macharia</span>
                          </Box> 
                          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start' }} >
                          <Link
                          style={{ color: "#00e676" }}
                          href="target=_blank"
                          variant="body2">
                          All reviews
                        </Link>
                        </Grid>
                         </Grid> 
                </Grid>
                {/* <Grid container spacing={2}>
                  <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-start" }}>
                    <RateReview sx={{ backgroundColor: "#b9f6ca", color: "#00c853", width: 30, height: 30, borderRadius: "18px" }} />
                    <div >
                      <Typography variant="h6">Last review</Typography>
                      <div>
                        <Rating name="read-only" value={4} readOnly />
                        <Typography paragraph variant="h7">Thanking for your service, it was not easy but you did well.
                          Everyone is advised to deal with Alex regarding cleaning services.
                          He is a very decent and proffesinall person. <br />
                          Written by: <span style={{ color: "#00c853" }}> Wollace Macharia</span>
                        </Typography>
                      </div>
                      <div>
                        <Rating name="read-only" value={5} readOnly />
                        <Typography paragraph >
                          All is well. the task was completed in time ⏲ and quality is good 💕
                          <br />
                          Written by: <span style={{ color: "#00c853" }}> Wollace Macharia</span> <br />
                        </Typography>
                        <Link
                          style={{ color: "#00e676" }}
                          href="target=_blank"
                          variant="body2">
                          All reviews
                        </Link>
                      </div>
                    </div>
                  </Grid>
                </Grid> */}
              </Paper>
            </Grid>
          </Grid>
          <Divider style={{ backgroundColor: "#fff" }} />
          <footer>
            <Grid
              container
              spacing={2}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}
            >
              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button variant="text">Cancel</Button>
                <Button variant="contained" style={{ backgroundColor: "#00e676" }}>
                  Next Step
                </Button>
              </Grid>
            </Grid>
          </footer>
        </Box>
      </Box>
    </>
  );
}

export default GeneralDetails;
