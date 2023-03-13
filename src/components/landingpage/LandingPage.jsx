import {
  AppBar,
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Logo from "../../Media/images/handyman_logo.png";
import Handymanservices from "../../Media/images/handyy.jpg";
import SendIcon from "@mui/icons-material/Send";
import Pica from "../../Media/images/plumber01.jpg";
import Picha from "../../Media/images/electrician0.jpg";
import Pich from "../../Media/images/web developer0.jpg";
import Sec from "../../Media/images/secretarty0.jpg";
import Man from "../../Media/images/manager0.jpg";
import LandingCarousel from "../carousel/LandingCarousel";
import {
  Facebook,
  Handyman,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const navItems = [
  "Dashboard",
  "Home",
  "Services",
  "About",
  "Contact",
  "Support",
];
const footItems = ["privacy", "Terms & conditions", "FAQ", "Help", "Blog"];

function LandingPage() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AppBar
            component="nav"
            style={{ backgroundColor: "white" }}
            elevation={0}
          >
            <Toolbar disableGutters>
              <Grid
                container
                spacing={2}
                columns={16}
                style={{ justifyContent: "space-between", height: "110px" }}
              >
                <Grid item xs={3} sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ height: "50%", width: "50%" }}
                      alt="logo"
                      src={Logo}
                    />
                    <Typography
                      variant="p"
                      noWrap
                      component="body1"
                      href="/"
                      sx={{
                        mb: 2,
                        display: { xs: "none", md: "flex" },
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "darkorange",
                        textDecoration: "none",
                      }}
                    >
                      Handyman
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={8}
                  sx={{ mb: 5 }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    {navItems.map((item) => (
                      <Button key={item} sx={{ color: "black" }}>
                        {item}
                      </Button>
                    ))}
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sx={{ mb: 5 }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="text"
                    style={{
                      textTransform: "capitalize",
                      backgroundColor: "#ff6d00",
                      color: "White",
                    }}
                  >
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Box>
      </Box>

      <Box>
        <Grid
          container
          spacing={2}
          style={{
            marginTop: "6rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid
            item
            xs={5}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Box sx={{ mx: 7 }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bolder",
                    color: "#ff6d00",
                  }}
                >
                  Proffessional{" "}
                  <span style={{ color: "#000000" }}>Handyman</span>{" "}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "start", ml: 0, mb: 1 }}>
                <Typography style={{ fontSize: "2rem", fontWeight: "bolder" }}>
                  {" "}
                  Services
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "start", ml: 0, mb: 2 }}>
                <Typography style={{ fontSize: "1rem", fontWeight: "bold" }}>
                  {" "}
                  We have great solution for your every need
                </Typography>
              </Box>

              <div
                style={{
                  marginTop: "3rem",
                  display: "flex",
                  justifyContent: "flex-start",
                  fontSize: "2.3rem",
                  fontWeight: "bolder",
                }}
              >
                <FormControl sx={{ width: "25ch" }} variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type="text"
                    placeholder="Enter email address"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          {<SendIcon sx={{ border: "none" }} />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
            </Box>
          </Grid>
          <Grid item xs={7} style={{ display: "flex", justifyContent: "end" }}>
            <img
              style={{
                height: "auto",
                maxWidth: "60%",
                borderRadius: "10%",
                padding: "12px 2px",
              }}
              alt="handyman services"
              src={Handymanservices}
            />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid
          container
          spacing={2}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Grid item xs={{}}>
            <LandingCarousel />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, backgroundColor: "#F5F5F5", padding: "5rem" }}>
        <Grid container spacing={2} style={{ display: "flex" }}>
          <Grid item xs={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "2.6rem",
                fontWeight: "bolder",
              }}
            >
              <span style={{ color: "#ff6d00" }}>Services We Provide</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "1.4rem",
                fontWeight: "bold",
              }}
            >
              We have great solution for your every need
            </div>
          </Grid>

          <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
            <Grid
              item
              xs={4}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Grid item xs={12}>
                <img
                  style={{
                    height: "15vh",
                    width: "100%",
                    border: "none",
                    objectFit: "contain",
                  }}
                  alt="plumber"
                  src={Pica}
                />
                <span style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                  Plumber
                </span>
              </Grid>

              <Grid item xs={12}>
                We understand the importance of good working sinks and pipes in
                our environment and how to appeal to our customers.
              </Grid>
            </Grid>

            <Grid
              item
              xs={4}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Grid item xs={12}>
                <img
                  style={{
                    height: "15vh",
                    width: "100%",
                    border: "none",
                    objectFit: "contain",
                  }}
                  alt="electrician"
                  src={Picha}
                />
                <span style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                  Electrician
                </span>
              </Grid>

              <Grid item xs={12}>
                We understand the importance of having well wired cables in our
                electronic equipmnets and the safety precautions of handling
                electronics
              </Grid>
            </Grid>

            <Grid
              item
              xs={4}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Grid item xs={12}>
                <img
                  style={{
                    height: "15vh",
                    width: "100%",
                    border: "none",
                    objectFit: "contain",
                  }}
                  alt="web developer"
                  src={Pich}
                />
                <span style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                  Web Developer
                </span>
              </Grid>

              <Grid item xs={12}>
                We understand the importance of a Proffessional website design
                and how to appeal to your clients.
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Button
                variant="text"
                style={{
                  textTransform: "capitalize",
                  backgroundColor: "#ff6d00",
                  padding: "10px 50px",
                  color: "White",
                  borderRadius: "20px",
                  marginTop: "2rem",
                }}
              >
                Discover
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="text"
                style={{
                  textTransform: "capitalize",
                  backgroundColor: "#ff6d00",
                  padding: "10px 50px",
                  color: "White",
                  borderRadius: "20px",
                  marginTop: "2rem",
                }}
              >
                Discover
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="text"
                style={{
                  textTransform: "capitalize",
                  backgroundColor: "#ff6d00",
                  padding: "10px 50px",
                  color: "White",
                  borderRadius: "20px",
                  marginTop: "2rem",
                }}
              >
                Discover
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{ marginTop: "7rem" }}>
            <Grid
              item
              xs={7}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <img
                style={{
                  height: "auto",
                  maxWidth: "90%",
                  borderRadius: "20%",
                  borderStyle: "hidden",
                }}
                alt="secretary"
                src={Sec}
              />
            </Grid>
            <Grid
              item
              xs={5}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "column",
                marginBottom: "16rem"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: "2.3rem",
                  fontWeight: "bolder",
                 
                }}
              >
                <span style={{ color: "#ff6d00" }}>
                  We are here to get your Problems fixed!
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  fontSize: "1rem",
                 
                }}
              >
                We are agile, fast paced to adjust a business
                requirement,implement best practices and up-to-date technology
                that suite the requirements.We are strongly concerned about
                clarity, that is why we have a clear workflow to help you make a
                safe deal
              </div>
              <div>
                <Button
                  variant="text"
                  style={{
                    textTransform: "capitalize",
                    backgroundColor: "#ff6d00",
                    padding: "10px 50px",
                    color: "White",
                    borderRadius: "20px",
                    marginTop: "2rem",
                  }}
                >
                  Discover
                </Button>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{ marginTop: "7rem" }}>
            <Grid item xs={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  fontSize: "2.3rem",
                  fontWeight: "bolder",
                  marginTop:"8rem"
                }}
              >
                <span style={{ color: "black" }}>
                  What you need to know about us
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  fontSize: "1rem",
                }}
              >
                We think, we act and respond as handy men who play a role in the
                repair and mending industry like farmers who play a role in the
                planting process
              </div>
              <div>
                <Button
                  variant="text"
                  style={{
                    textTransform: "capitalize",
                    backgroundColor: "#ff6d00",
                    padding: "10px 50px",
                    color: "White",
                    borderRadius: "20px",
                    marginTop: "2rem",
                  }}
                >
                  Learn more
                </Button>
              </div>
            </Grid>
            <Grid item xs={6}>
              <img
                style={{
                  height: "auto",
                  maxWidth: "90%",
                  borderRadius: "20%",
                  borderStyle: "hidden",
                  padding: "12px 2px",
                }}
                alt="Manager"
                src={Man}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, padding: "3rem" }}>
        <Grid>
          <Paper
            elevation={3}
            style={{
              backgroundColor: "#1a237e",
              borderRadius: "35px",
              padding: "2rem",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.6rem",
                    color: "white",
                  }}
                >
                  We would love to hear Your feedback
                </Typography>

                <Typography style={{ color: "white" }}>
                  we are all exicited to work with you and see you smile
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  sx={{ width: "55ch", borderRadius: "7rem" }}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type="text"
                    placeholder="Enter email address"
                    style={{ backgroundColor: "white" }}
                    endAdornment={
                      <InputAdornment position="end">
                        <Button
                          edge="end"
                          style={{ backgroundColor: "#ff6f00" }}
                        >
                          <span style={{ color: "white" }}>Get in Touch </span>
                        </Button>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Box>

     
      <footer
        style={{ flexGrow: 1, padding: "2rem", backgroundColor: "#1a237e" }}
      >
        <Grid
          container
          spacing={2}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
             
             
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
            }}
          >
            <Handyman
              style={{
                fontWeight: "bolder",
                width: "90px",
                height: "90px",
                color: "darkorange",
              }}
            />
            <Typography
              style={{
                marginTop: "2rem",
                fontWeight: "bolder",
                fontSize: "1.6rem",
                color: "white",
              }}
            >
              Handy Man{" "}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: "2rem",
            }}
          >
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {footItems.map((item) => (
                <Button key={item} sx={{ color: "white" }}>
                  {item}
                </Button>
              ))}
            </Box>

          </Grid>

<Grid item xs={12}><Box> <Divider style={{backgroundColor:"#fff"}}/></Box></Grid>

          <Grid
            item
            xs={6}
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Typography style={{ color: "white" }}>
              {"Copyright © "}
              <Link color="inherit" href="https://material-ui.com/">
                Handy Man
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
              All Rights Reserved
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <a href="https://www.facebook.com" target="_blank">
              <Facebook />
            </a>
            <a href="https://www.twitter.com"target="_blank">
              <Twitter />
            </a>
            <a href="https://www.instagram.com"target="_blank">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com"target="_blank">
              <LinkedIn />
            </a>
          </Grid>
        </Grid>
      </footer>
    </>
  );
}

export default LandingPage;
