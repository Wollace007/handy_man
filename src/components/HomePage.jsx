import React from 'react'
import './main.css'
import Box from '@mui/material/Box';
import { Avatar, Card, Grid, Typography } from '@mui/material';
import { AssignmentOutlined } from '@mui/icons-material';
import './homepage.css'
import Photo from '../Media/images/prof avatar.png'
import Modal from './service_provider_modal/Modal';

function HomePage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ p: 5 }}>
        <Card style={{ padding: "20px", backgroundColor: "#f8bbd0", display: 'flex', flexDirection: 'column', color: '#fff', borderRadius: '25px' }}>
          <Grid item xs={12} style={{ display: 'flex', marginBottom: "2rem", justifyContent: 'flex-start' }}>
            Actual Form
          </Grid>

          <Grid container spacing={2} style={{ display: 'flex', marginBottom: '25px' }}>
            <Grid item xs={3} >
              <Card style={{ padding: "2rem", justifyContent: 'center', borderRadius: 8, display: 'flex', alignItems: 'center' }}>
                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item style={{ marginRight: '5px', display: 'flex', alignItems: 'center' }}>

                    <AssignmentOutlined className='preq-icon' style={{ height: '50px', width: '50px', padding: '0.5rem', backgroundColor: 'red', borderRadius: '8px' }} />
                  </Grid>
                  <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid item>
                      Women haircut
                    </Grid>
                    <Grid item style={{ display: 'flex', justifyContent: 'flex-start' }} >
                      New Client
                    </Grid>
                  </Grid>

                </Grid>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card style={{ padding: "2rem", justifyContent: 'center', borderRadius: 8, display: 'flex', alignItems: 'center' }}>
                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item style={{ marginRight: '5px', display: 'flex', alignItems: 'center' }}>

                    <AssignmentOutlined className='preq-icon' style={{ height: '50px', width: '50px', padding: '0.5rem', backgroundColor: 'red', borderRadius: '8px' }} />
                  </Grid>
                  <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid item>
                      Women haircut
                    </Grid>
                    <Grid item style={{ display: 'flex', justifyContent: 'flex-start' }} >
                      New Client
                    </Grid>
                  </Grid>

                </Grid>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card style={{ padding: "2rem", justifyContent: 'center', borderRadius: 8, display: 'flex', alignItems: 'center' }}>
                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item style={{ marginRight: '5px', display: 'flex', alignItems: 'center' }}>

                    <AssignmentOutlined className='preq-icon' style={{ height: '50px', width: '50px', padding: '0.5rem', backgroundColor: 'red', borderRadius: '8px' }} />
                  </Grid>
                  <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid item>
                      Women haircut
                    </Grid>
                    <Grid item style={{ display: 'flex', justifyContent: 'flex-start' }} >
                      New Client
                    </Grid>
                  </Grid>

                </Grid>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card style={{ padding: "2rem", justifyContent: 'center', borderRadius: 8, display: 'flex', alignItems: 'center' }}>
                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item style={{ marginRight: '5px', display: 'flex', alignItems: 'center' }}>

                    <AssignmentOutlined className='preq-icon' style={{ height: '50px', width: '50px', padding: '0.5rem', backgroundColor: 'red', borderRadius: '8px' }} />
                  </Grid>
                  <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid item>
                      Women haircut
                    </Grid>
                    <Grid item style={{ display: 'flex', justifyContent: 'flex-start' }} >
                      New Client
                    </Grid>
                  </Grid>

                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Card>

        <Grid container spacing={2} style={{ marginTop: '15px' }}>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Typography component="h2" sx={{ fontSize: "1.6rem", textTransform: "capitalize", mr: 1, fontWeight: 'bold' }}>
              Service Provider
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Card style={{ padding: "20px", borderRadius: '25px' }}
              onClick={handleClickOpen}
            >
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <span className='status'></span>
                  <span style={{ fontSize: '15px', color: 'red' }}>NEW</span>
                </Grid>
                <Grid item >
                  <span style={{ fontSize: '15px', color: 'grey' }}>Mar 14</span>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                  <Grid item>
                    <span style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>Women haircut</span>
                  </Grid>
                  <Grid item style={{ display: 'flex', justifyContent: 'flex-start' }} >
                    New Client
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt="wollace" src={Photo} sx={{ width: 50, height: 50 }} />
                  <Typography sx={{ fontSize: "1.0rem", textTransform: "capitalize", mr: 1, fontWeight: 'bold', margin: '2rem' }}> Wollace Macharia</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card style={{ padding: "20px", borderRadius: '25px' }} >
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <span className='status'></span>
                  <span style={{ fontSize: '15px', color: 'red' }}>NEW</span>
                </Grid>
                <Grid item >
                  <span style={{ fontSize: '15px', color: 'grey' }}>Mar 14</span>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                  <Grid item>
                    <span style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>Women haircut</span>
                  </Grid>
                  <Grid item style={{ display: 'flex', justifyContent: 'flex-start' }} >
                    New Client
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt="wollace" src={Photo} sx={{ width: 50, height: 50 }} />
                  <Typography sx={{ fontSize: "1.0rem", textTransform: "capitalize", mr: 1, fontWeight: 'bold', margin: '2rem' }}> Johnny Walker</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card style={{ padding: "20px", borderRadius: '25px' }} >
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <span className='status'></span>
                  <span style={{ fontSize: '15px', color: 'red' }}>NEW</span>
                </Grid>
                <Grid item >
                  <span style={{ fontSize: '15px', color: 'grey' }}>Mar 14</span>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                  <Grid item>
                    <span style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>Women haircut</span>
                  </Grid>
                  <Grid item style={{ display: 'flex', justifyContent: 'flex-start' }} >
                    New Client
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt="wollace" src={Photo} sx={{ width: 50, height: 50 }} />
                  <Typography sx={{ fontSize: "1.0rem", textTransform: "capitalize", mr: 1, fontWeight: 'bold', margin: '2rem' }}> SpongeBob Squarepants</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card style={{ padding: "20px", borderRadius: '25px' }} >
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <span className='status'></span>
                  <span style={{ fontSize: '15px', color: 'blue' }}>READ</span>
                </Grid>
                <Grid item >
                  <span style={{ fontSize: '15px', color: 'grey' }}>Mar 14</span>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                  <Grid item>
                    <span style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>Women haircut</span>
                  </Grid>
                  <Grid item style={{ display: 'flex', justifyContent: 'flex-start' }} >
                    New Client
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt="wollace" src={Photo} sx={{ width: 50, height: 50 }} />
                  <Typography sx={{ fontSize: "1.0rem", textTransform: "capitalize", mr: 1, fontWeight: 'bold', margin: '2rem' }}> Wollace Macharia</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card style={{ padding: "20px", borderRadius: '25px' }} >
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <span className='status'></span>
                  <span style={{ fontSize: '15px', color: 'blue' }}>READ</span>
                </Grid>
                <Grid item >
                  <span style={{ fontSize: '15px', color: 'grey' }}>Mar 14</span>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                  <Grid item>
                    <span style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>Women haircut</span>
                  </Grid>
                  <Grid item style={{ display: 'flex', justifyContent: 'flex-start' }} >
                    New Client
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt="wollace" src={Photo} sx={{ width: 50, height: 50 }} />
                  <Typography sx={{ fontSize: "1.0rem", textTransform: "capitalize", mr: 1, fontWeight: 'bold', margin: '2rem' }}> Wollace Macharia</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card style={{ padding: "20px", borderRadius: '25px' }} >
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <span className='status'></span>
                  <span style={{ fontSize: '15px', color: 'blue' }}>READ</span>
                </Grid>
                <Grid item >
                  <span style={{ fontSize: '15px', color: 'grey' }}>Mar 14</span>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                  <Grid item>
                    <span style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>Women haircut</span>
                  </Grid>
                  <Grid item style={{ display: 'flex', justifyContent: 'flex-start' }} >
                    New Client
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt="wollace" src={Photo} sx={{ width: 50, height: 50 }} />
                  <Typography sx={{ fontSize: "1.0rem", textTransform: "capitalize", mr: 1, fontWeight: 'bold', margin: '2rem' }}> Wollace Macharia</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card style={{ padding: "20px", borderRadius: '25px' }} >
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <span className='status'></span>
                  <span style={{ fontSize: '15px', color: 'blueviolet' }}>READ</span>
                </Grid>
                <Grid item >
                  <span style={{ fontSize: '15px', color: 'grey' }}>Mar 13</span>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                  <Grid item>
                    <span style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>Women haircut</span>
                  </Grid>
                  <Grid item style={{ display: 'flex', justifyContent: 'flex-start' }} >
                    New Client
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt="wollace" src={Photo} sx={{ width: 50, height: 50 }} />
                  <Typography sx={{ fontSize: "1.0rem", textTransform: "capitalize", mr: 1, fontWeight: 'bold', margin: '2rem' }}> Wollace Macharia</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card style={{ padding: "20px", borderRadius: '25px' }} >
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <span className='status'></span>
                  <span style={{ fontSize: '15px', color: 'blue' }}>READ</span>
                </Grid>
                <Grid item >
                  <span style={{ fontSize: '15px', color: 'grey' }}>Mar 12</span>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                  <Grid item>
                    <span style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>Women haircut</span>
                  </Grid>
                  <Grid item style={{ display: 'flex', justifyContent: 'flex-start' }} >
                    New Client
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt="wollace" src={Photo} sx={{ width: 50, height: 50 }} />
                  <Typography sx={{ fontSize: "1.0rem", textTransform: "capitalize", mr: 1, fontWeight: 'bold', margin: '2rem' }}> Remmy Martin</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>

        </Grid>
        <Modal open={open} handleClose={handleClose} />
      </Box>
    </>
  )
}

export default HomePage
