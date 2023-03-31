import React from 'react'
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { Card, Checkbox, FormControlLabel } from '@mui/material';

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});
function PriceSlider() {
  return (
    <>
      <Box sx={{ width: 250, mx: 4 }}>
        <Box sx={{ m: 1 }} />
        <div style={{ display: "flex" }}>Average price rating</div> 
        <div style={{ marginRight:"3rem"}}>This price is the  preliminary estimate of your order</div> <br/>
        <div style={{ display: "flex" }}>
          <Card style={{ padding: "1rem" }}>
            <div>$1245.00</div>
          </Card> 
        </div><br/> 
        <div style={{ display: "flex" }}>Edit Price</div>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={20}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Low</span>
          <span>Deal Probability </span>
          <span>High</span>
        </div> <br/>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="Price may be discussed"
            labelPlacement="end"
          /> 
          <div style={{ display: "flex", marginRight: "2rem" }}>
            After your is completed,you'll be able to indicate the actual amount paid to the contractor
          </div>
        </div>
      </Box>
    </>
  )
}

export default PriceSlider
