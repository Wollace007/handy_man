import { PhotoCameraOutlined } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextareaAutosize,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import FormControlLabel from '@mui/material/FormControlLabel';
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatListNumberedRtlOutlinedIcon from "@mui/icons-material/FormatListNumberedRtlOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import React from "react";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import Photo from "../../Media/images/prof avatar.png";
import Pict from "../../Media/images/hat.jpg";
import { styled } from "@mui/system";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuIcon from '@mui/icons-material/Menu';
const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
  padding: 12px;
  border-radius: 12px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 320px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === "dark" ? grey[900] : grey[200]
    };
  `
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const slots = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <SelectUnstyled {...props} ref={ref} slots={slots} />;
});

const navItems = ['Home', 'Dashboard', 'About', 'Contact'];
function Profile() {

  return (
    <Box sx={{ p: 10 }}>

      <Box sx={{ display: 'flex' }}>

        <AppBar component="nav">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              MUI
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              ))}
            </Box>
            <Divider orientation="vertical" flexItem sx={{ borderRight: 'solid 5px red', mx: 4 }} />
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="#007bff">
              <Typography sx={{ fontSize: ".85rem", textTransform: "capitalize", mr: 1, fontColor: '#fff', fontWeight: 'bold' }}> Wollace Maina</Typography>
              <Tooltip title="Open settings">
                <IconButton >
                  <Avatar alt="wollace" src={Pict} sx={{ width: 44, height: 44 }} />
                </IconButton>
              </Tooltip>
            </IconButton>
          </Toolbar>
        </AppBar>

      </Box>
      <Card
        style={{
          padding: "5rem",
          backgroundColor: "#f8bbd0",
          display: "flex",
          flexDirection: "column",
          color: "#fff",
          borderRadius: "50px 0px 0px 0px",
          width: "100%",
        }}
      >
        <Box style={{ display: "flex", justifyContent: "flex-end" }}>
          <PhotoCameraOutlined style={{ width: "50px", height: "50px" }} />
        </Box>
      </Card>

      <Grid
        container
        spacing={3}
        style={{
          dispay: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Grid
            item
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginRight: "2rem",
            }}
          >
            <Avatar
              alt="Wollace"
              src={Pict}
              sx={{
                width: 200,
                height: 200,
                marginTop: "-3rem",
                marginLeft: "3rem",
              }}
            />
          </Grid>
          <Grid item style={{ display: "flex", flexDirection: "column" }}>
            <Grid
              item
              style={{
                display: "flex",
                justifyContent: "flex-start",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              Profile
            </Grid>
            <Grid item>New ClientNew ClientNew ClientNew ClientNew Client</Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "4px 15px",
          }}
        >
          <Button variant="text" color="success" style={{ textTransform: "capitalize" }}>Cancel</Button>
          <Button variant="contained" style={{ textTransform: "capitalize" }}>Save</Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: "3rem" }}>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "1.5rem",
          }}
        >
          Username
        </Grid>
        <Grid
          item
          xs={8}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "1.5rem",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"

          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            justifyContent: "flex-start !important",
            fontSize: "1.5rem",
          }}
        >
          Email
        </Grid>
        <Grid
          item
          xs={8}
          style={{
            display: "flex",
            justifyContent: "flex-start !important",
            fontSize: "1.5rem",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"

          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            fontSize: "1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "1.5rem",
            }}
          >
            Your photo
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "1rem",
            }}
          >
            This will be displayed on your profile
          </div>
        </Grid>
        <Grid
          item
          xs={8}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Avatar
            alt="wollace"
            src={Photo}
            sx={{ width: 80, height: 80, marginLeft: "0.95rem" }}
          />
          <Grid
            item
            style={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "row",
              padding: "20px 23px",
              marginLeft: "22rem",
            }}
          >
            <Button variant="text" size="small" style={{ textTransform: "capitalize" }}>
              Delete
            </Button>
            <Button variant="contained" size="small" style={{ textTransform: "capitalize" }}>
              Update
            </Button>
          </Grid>
        </Grid>

        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            fontSize: "1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "1.5rem",
            }}
          >
            Your bio{" "}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "1rem",
            }}
          >
            Write a short introduction
          </div>
        </Grid>
        <Grid
          item
          xs={8}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <CustomSelect defaultValue={10}>
            <StyledOption value={10}>Normal Text</StyledOption>
            <StyledOption value={20}>Twenty</StyledOption>
            <StyledOption value={30}>Thirty</StyledOption>
          </CustomSelect>
          <Grid
            item
            style={{
              display: "flex",
              justifyContent: "Flex-end",
              flexDirection: "row",
              padding: "5px 1px",
              marginLeft: "2rem",
            }}
          >
            <FormatBoldIcon fontSize="large" />
            <FormatItalicIcon fontSize="large" />
            <FormatListNumberedRtlOutlinedIcon fontSize="large" />
            <ListOutlinedIcon fontSize="large" />
          </Grid>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            fontSize: "1.5rem",
          }}
        ></Grid>
        <Grid
          item
          xs={8}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <TextareaAutosize
            maxRows={4}
            maxLength={100}
            placeholder="Add a short bio"
            helperText="400 characters left"
            style={{ width: 980, height: 150 }}
          />
        </Grid>

        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            fontSize: "1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "1.5rem",
            }}
          >
            Job Title
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "1rem",
            }}
          >
            This will be displayed on your profile
          </div>
        </Grid>
        <Grid item style={{ display: "flex", flexDirection: "column" }}>
          <Grid
            item
            style={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              fullWidth

            />
          </Grid>
          <Grid item xs>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Show my job title in my profile" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                fontSize: "1.5rem",
                marginLeft: '1rem'
              }}
            >
              Your bio{" "}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                fontSize: "1rem",
                marginLeft: '1rem'
              }}
            >
              Write a short introduction
            </div>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="outlined-basic"
              label="example@example.com"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}

            />
          </Grid>


        </Grid>


      </Grid>
    </Box>
  );
}

export default Profile;
