/* eslint-disable react-hooks/rules-of-hooks */
import { AppBar, Box, Button, Container, IconButton, Menu, styled, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Logo from "../../Media/images/handyman_logo.png"
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const StyledButton = styled(Button)`
  color: #484848;
  &:hover {
    color: #00BABA;
    text-shadow: #e6fafd;
  }
  &:focus {
    background-color: #61dafb;
    box-shadow: #e6fafd;
  }
`;

const LinkButton = styled(Button)`
  background-color: #00BABA;
  &:hover {
    background-color: #00BABA;
    //color: #00BABA;
    text-shadow: #e6fafd;
  }
  //&:focus {
  //  background-color: #61dafb;
  //  box-shadow: #e6fafd;
  //}
`;

function header() {

    const [anchorElNav, setAnchorElNav] = React.useState(null); 
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navItems = ['Dashboard', 'Home', 'Services', 'About', 'Contact', 'Support'];

    
  return (
    <>
    <AppBar position="static" sx={{backgroundColor: '#ffffff'}}>
        <Container className='head' maxWidth="xl" >
            <Toolbar disableGutters sx={{backgroundColor: '#ffffff'}}>
                <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 5 }} />
                <img src={Logo} alt="logo" width='15%' height='15%' style={{ display: 'flex', alignItems: 'center', marginRight: 40 }} />

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyItems: 'space-between' }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {navItems.map((item, index) => (
                                        <Button key={index} sx={{ color: 'black' }}>
                                            {item}
                                        </Button>
                                    ))}
                    </Menu>
                </Box>
                <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 6 }} />
                {/*<img src={Logo} alt='Logo'/>*/}
                {/*<Typography*/}
                {/*    variant="h5"*/}
                {/*    noWrap*/}
                {/*    component="a"*/}
                {/*    href=""*/}
                {/*    sx={{*/}
                {/*        mr: 2,*/}
                {/        display: { xs: 'flex', md: 'none' },/}
                {/*        flexGrow: 1,*/}
                {/*        fontFamily: 'monospace',*/}
                {/*        fontWeight: 700,*/}
                {/*        letterSpacing: '.3rem',*/}
                {/*        color: '#0071BC',*/}
                {/*        textDecoration: 'none',*/}
                {/    }}/}
                {/*>*/}
                {/*    LOGO*/}
                {/*</Typography>*/}
                <Box
                    sx={{
                        flexGrow: 3,
                        display: { xs: 'none', md: 'inline flex' },
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#e6fafd',
                        width: '650px',
                        height: '70px',
                        pl: 2
                    }}>
                    {navItems.map((page) => (
                        <Link to={"/homepage"} style={{ textDecoration: 'none'}}>
                            <StyledButton
                                onClick={handleCloseNavMenu}
                            >
                                <Typography sx={{
                                    fontSize: '15px',
                                    textTransform: 'capitalize',
                                    fontFamily: 'Roboto, sans-serif'
                                }}>
                                    {page}
                                </Typography>
                            </StyledButton>
                        </Link>
                    ))}
                </Box>

                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        flexGrow: 2,
                        ml: 8
                    }}>
                    <Button variant="contained"
                            sx={{
                                borderRadius: '1px',
                                backgroundColor: '#0069DF %0 %0',
                                fontFamily:  "Helvetica Neue, sans-serif",
                                textTransform: 'capitalize',
                                mr: 2
                            }}
                            // onClick={handleClickOpenSignin}
                    >
                        Log in
                    </Button>
                    <LinkButton variant="contained"
                            sx={{
                                borderRadius: '2px',
                                textTransform: 'capitalize',
                                fontFamily:  "Helvetica Neue, sans-serif",
                            }}
                            // onClick={() => navigate('/signup-wsp')}
                    >
                        Fund my water
                    </LinkButton>

                </Box>
            </Toolbar>
        </Container>
    </AppBar>
</>
  )
}

export default header
