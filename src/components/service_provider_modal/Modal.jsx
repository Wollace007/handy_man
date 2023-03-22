import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Pic from "../../Media/images/prof avatar.png";
import {
  Download,
  Email,
  Phone,
 
} from "@mui/icons-material";
import "./modal.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Modal = ({ open, handleClose }) => {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="md"
        fullWidth={true}
      >
        {/* <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </BootstrapDialogTitle> */}
        {/* <DialogContent dividers>
                    <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between',padding:'20px 24px',alignItems:'center'}}>
                  
                        <Grid item xs={8} style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar alt="wollace" src={Pic} sx={{ width: 70, height: 70 }} />
                        <Grid item style={{ display: 'flex', flexDirection: 'column', margin:'30px'}}>
                    <Grid item>
                    <Typography sx={{ fontSize: "1.0rem", textTransform: "capitalize", mr: 10, fontWeight: 'bold' }}> Wollace Macharia</Typography>
                    </Grid>
                    <Grid item style={{ display: 'flex', justifyContent: 'flex-start' }} >
                    <span className='status'></span>
                  <span style={{ fontSize: '15px', color: 'red'}}>NEW</span>
                    </Grid>
                    <Grid item xs={8}style={{ display: 'flex', justifyContent:'flex-start' }}>
                            xs=8
                        </Grid> 
                        <Grid item xs={8} style={{ display: 'flex', justifyContent:'flex-end' }}>
                            xs=8
                        </Grid>
                  </Grid>
                        </Grid>
                    </Grid>
                </DialogContent> */}
        <DialogContent>
          <div className="container my-2">
            <div className="d-flex justify-content-start">
              <div className="preq-icon-wrapper">
                <Avatar
                  alt="wollace"
                  src={Pic}
                  sx={{ width: 50, height: 50 }}/>
              </div>
              <div className="view-preq-text-wrapper w-100">
                <h6 className="fs-15">Wollace Macharia</h6>
                <div className="d-flex justify-content-start">
                  <Grid item style={{ display: "flex", alignItems: "center" }}>
                    <span className="status"></span>
                    <span style={{ fontSize: "15px", color: "red" }}>NEW</span>
                  </Grid>
                </div>

                <div className="row mb-2" style={{ marginTop: "12px" }}>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-start">
                      <Phone className="fs-20" color="error" />
                      <p className="fs-14 mb-1 px-1">0705360942</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex justify-content-start mb-2">
                      <Email className="fs-20" color="primary" />
                      <p className="fs-14 mb-1 px-1">wollacemaina2@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <h6 className="fs-15">QUALIFICATIONS</h6>
                  <p className="fs-15"> Skill 1.</p>
                  <p>
                    {" "}
                    highly trained in the field of mechanics and the field of
                    automotive engineering
                  </p>
                  <p className="fs-15"> Skill 2.</p>
                  <p>
                    {" "}
                    highly trained in the field of electricity and the field of
                    automotive engineering
                  </p>
                  <p className="fs-15"> Skill 3.</p>
                  <p>
                    {" "}
                    highly trained in the field of mechanics and the field of
                    automotive engineering
                  </p>
                </div>

                <div className="mb-3">
                  <h6 className="fs-15">CERTIFICATION</h6>
                  <p className="fs-15">
                    1. First Aid CertificationAmerican Red Cross, July
                    2018Expires: January 2020Skills acquired: CPR
                  </p>
                  <p>
                    2. Certified CPR sports teacher with 15+ years of experience
                    and solid organizational skills, seeking to preserve and
                    improve the quality of sports education at Amigos Children's
                    Academy. At Jefferson Elementary, raised sports team
                    national results by 12% and led an exhibition team at the
                    2019 World Aquatics Championships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions sx={{ mx: 3, mb: 2 }}>
          <Button
            sx={{
              textTransform: "capitalize",
              position: "absolute",
              left: "6.75rem",
            }}
            // variant="outlined"
            color="inherit"
            startIcon={<Download />}
          >
            Download
          </Button>
          <Button
            sx={{ textTransform: "capitalize" }}
            onClick={handleClose}
            variant="contained"
            disableElevation
            color="inherit"
          >
            Cancel
          </Button>
        </DialogActions>
        {/* <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default Modal;
