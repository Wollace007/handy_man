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
import { Avatar, Button, Grid, IconButton, Link, Menu, MenuItem, Paper, Rating, TextareaAutosize, Tooltip } from "@mui/material";
import { Add, Delete, Done, Logout, PersonAdd, RateReview, Settings } from "@mui/icons-material";
import Sidebar from "../sidebar/Sidebar";
 


const drawerWidth = 280;

function GeneralDetails() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
     <Sidebar/>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Grid container spacing={2}>
            <Grid item xs={8}>
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

            <Grid item xs={4}>
              <Paper elevation={3}>
                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item style={{ marginRight: '5px', display: 'flex', alignItems: 'center' }}>

                    <Avatar alt="wollace" src={Pro} sx={{ width: 100, height: 100 }} />
                  </Grid>
                  <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                 <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center',marginLeft:"8rem" }}>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
            <MoreVertIcon sx={{ width: 32, height: 32 }}>M</MoreVertIcon>
        </IconButton>
      </Tooltip>
    </Box>
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={handleClose}>
        <Avatar /> Profile
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Avatar /> My account
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
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
