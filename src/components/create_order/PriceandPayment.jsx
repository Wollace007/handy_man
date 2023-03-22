import { Add, AttachMoney, Circle, DeveloperBoard, MoreHoriz, Remove } from '@mui/icons-material';
import { Button, Card, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, ListItemText, MenuItem, OutlinedInput, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from "react";
import Select from '@mui/material/Select';
import PriceSlider from './PriceSlider';
import Credit from "../../Media/images/chip.png";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Fixed windows',
    'Sliding windows',
    'Pivoted windows',
    'Double-hung windows',
    'Louvered windows',
    'Casement windows',
    'Metal windows',
    'Sash windows',
    'Corner windows',
    'Bay windows',
];
function PriceandPayment() {
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const [typeofWindow, setTypeofWindow] = React.useState([]);

    const handleChangeWindow = (event) => {
        const {
            target: { value },
        } = event;
        setTypeofWindow(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Box>
                    <div style={{ fontWeight: "bolder", fontSize: "2rem", display: "flex" }}> Price and Payment</div>
                </Box>
                <Grid container spacing={2} style={{ marginTop: "2rem" }}>

                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <div style={{ fontSize: "1.2rem", display: "flex", justifyContent: "center", alignItems: "center" }}>Number of Windows </div>
                            </Grid>
                            <Grid item xs={6} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <div>
                                    <Button onClick={handleDecrease} variant="outlined" style={{ borderColor: "black", color: "black" }}>
                                        <Remove />
                                    </Button>
                                    <Button style={{ border: "none", color: "black" }}>{quantity}</Button>
                                    <Button onClick={handleIncrease} variant="outlined" style={{ borderColor: "black", color: "black" }}>
                                        <Add />
                                    </Button>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={6} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <FormControlLabel control={<Checkbox defaultChecked />} />
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <p>Including window equipment cleaning (blinds,shutters,etc.)</p>
                                    </div>
                                </Box>
                                <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                    <FormControlLabel control={<Checkbox />} />
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Windows cleaning on both side</div>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <div style={{ marginRight: "5rem", fontSize: "1.2rem", display: "flex", justifyContent: "center", alignItems: "center" }}> Detergents </div>
                            </Grid>
                            <Grid item xs={6} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Radio
                                        checked={selectedValue === 'a'}
                                        onChange={handleChange}
                                        value="a"
                                        name="radio-buttons"
                                        inputProps={{ 'aria-label': 'A' }}
                                    />
                                    Contractor's
                                    <Radio
                                        checked={selectedValue === 'b'}
                                        onChange={handleChange}
                                        value="b"
                                        name="radio-buttons"
                                        inputProps={{ 'aria-label': 'B' }}
                                    />
                                    Customers
                                </div>
                            </Grid>

                            <Grid item xs={6} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <div style={{ marginRight: "3rem", fontSize: "1.2rem", display: "flex", justifyContent: "center", alignItems: "center" }}> Type of Window </div>
                            </Grid>
                            <Grid item xs={6} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <div>
                                    <FormControl sx={{ m: 1, width: 300 }}>
                                        <InputLabel id="demo-multiple-checkbox-label">Type of Window</InputLabel>
                                        <Select
                                            labelId="demo-multiple-checkbox-label"
                                            id="demo-multiple-checkbox"
                                            multiple
                                            value={typeofWindow}
                                            onChange={handleChangeWindow}
                                            input={<OutlinedInput label="Type of Window" />}
                                            renderValue={(selected) => selected.join(', ')}
                                            MenuProps={MenuProps}
                                        >
                                            {names.map((name) => (
                                                <MenuItem key={name} value={name}>
                                                    <Checkbox checked={typeofWindow.indexOf(name) > -1} />
                                                    <ListItemText primary={name} />
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                            </Grid>

                            <Grid item xs={6}>
                                <div style={{ marginRight: "5rem", fontSize: "1.2rem", display: "flex", justifyContent: "center", alignItems: "center" }}> Detergents </div>
                            </Grid>
                            <Grid item xs={6} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <FormControl>

                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="By Cash" />
                                            <FormControlLabel value="male" control={<Radio />} label="Payment Through the website" />
                                            <span style={{ display: "flex", marginLeft: "2rem" }}> Secure Transaction</span>


                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper style={{ borderRadius: "18px", backgroundColor: "#fafafa" }}>
                            <Grid container spacing={2} style={{ display: "flex", alignItems: "flex-start", flexDirection: "column", justifyContent: "flex-start" }}>
                                <Grid item xs={12} >
                                    <div style={{ display: "flex" }}>Average price rating </div>
                                    <div>This price is the  preliminary estimate of your order</div>
                                    <div style={{ display: "flex" }}>
                                        <TextField
                                            id="filled-read-only-input"
                                            defaultValue="$1245.00"
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            variant="filled"
                                        /> </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div style={{ display: "flex" }}>Edit Price</div>
                                    <PriceSlider />
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <span>Low</span>
                                        <span>Deal Probability </span>
                                        <span>low</span>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        value="end"
                                        control={<Checkbox />}
                                        label="Price may be discussed"
                                        labelPlacement="end"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div style={{ display: "flex" }} >
                                        <p>
                                            After your is completed,you'll be able to indicate the actual amount paid to the contractor
                                        </p>
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>

                        <Paper style={{ borderRadius: "13px", backgroundColor: "#fafafa", marginTop: "2rem", padding: "3rem" }}>
                            <Grid container spacing={2}>
                                <Grid xs={6}>
                                    <span style={{ color: "#81c784" }}>Credit card</span>
                                </Grid>
                                <Grid xs={6}>
                                    <Button variant="text" style={{ color: "#00e676" }}>Change</Button>
                                </Grid>

                                <Grid xs={6}>
                                    <Card style={{ backgroundColor: "#263238", color: "#fff", borderRadius: "20px" }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={8} style={{ display: "flex", justifyContent: "center" }}>
                                                <div>United |</div>
                                                <div style={{ color: "#b0bec5" }}>Bank</div>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <div style={{ color: "#b0bec5" }}>
                                                    <AttachMoney />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} style={{ display: "flex", alignItems: "center" }}>
                                                <div style={{display:"flex",marginLeft:"2.5rem"}}>
                                                    <img
                                                        style={{
                                                            height: "auto",
                                                            maxWidth: "20%",
                                                            borderRadius: "10%",
                                                            padding: "12px 2px",
                                                        }}
                                                        alt="credit card"
                                                        src={Credit}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={6} style={{ display: "flex", justifyContent: "center" }}>
                                                <div> <MoreHoriz /></div>
                                                <span>3456</span>
                                            </Grid>
                                            <Grid item xs={6} style={{ display: "flex", justifyContent: "flex-end" }}>
                                                <div style={{ position: "relative", color: "red", fontSize: "large", marginRight: "1rem" }}><Circle /></div>
                                                <div style={{ position: "absolute", color: "yellow" }}><Circle /></div>

                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                                <Grid xs={6} >
                                <span style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"2.5rem"}}>Master Card</span>
                                    <span style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.5rem"}}><MoreHoriz /> <MoreHoriz /> <MoreHoriz /> <MoreHoriz /> <MoreHoriz />5747</span>
                                    
                                    
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default PriceandPayment
