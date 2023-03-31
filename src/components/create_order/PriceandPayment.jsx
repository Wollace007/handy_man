import { Add, AttachMoney, Circle, DeveloperBoard, MoreHoriz, Remove } from '@mui/icons-material';
import { Button, Card, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, ListItemText, MenuItem, OutlinedInput, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from "react";
import Select from '@mui/material/Select';
import PriceSlider from './PriceSlider';
import Credit from "../../Media/images/chip.png";
import Sidebar from '../sidebar/Sidebar';

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
            <Box sx={{ display: "flex",flexGrow:1 }}>
                <Sidebar />
                <Box sx={{ flexGrow: 1 }}>
                    <Box>
                        <div style={{ fontWeight: "bolder", fontSize: "2rem", display: "flex", marginLeft: "6rem" }}> Price and Payment</div>
                    </Box>
                    <Grid container spacing={2} style={{ marginTop: "2rem" }}>

                        <Grid item xs={8}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <div style={{ fontSize: "1.2rem", display: "flex", justifyContent: "center", alignItems: "center" }}>Number of Windows </div>
                                </Grid>
                                <Grid item xs={8} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
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
                                <Grid item xs={4}>
                                </Grid>
                                <Grid item xs={8} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                    <Box style={{ display: "flex" }}>
                                        <FormControlLabel control={<Checkbox defaultChecked />} />
                                        <span style={{ marginRight: "8rem" }}>
                                            Including window equipment cleaning (blinds,shutters,etc.)
                                        </span>
                                    </Box>
                                    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                        <FormControlLabel control={<Checkbox />} />
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Windows cleaning on both side</div>
                                    </Box>
                                </Grid>

                                <Grid item xs={4}>
                                    <div style={{ marginRight: "5rem", fontSize: "1.2rem", display: "flex", justifyContent: "center", alignItems: "center" }}> Detergents </div>
                                </Grid>
                                <Grid item xs={8} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
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

                                <Grid item xs={4} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                    <div style={{ marginLeft: "1.3rem", fontSize: "1.2rem", display: "flex", justifyContent: "center", alignItems: "center" }}> Type of Window </div>
                                </Grid>
                                <Grid item xs={8} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
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

                                <Grid item xs={4}>
                                    <div style={{ marginRight: "1.3rem", fontSize: "1.2rem", display: "flex", justifyContent: "center", alignItems: "center" }}> Payment Method </div>
                                </Grid>
                                <Grid item xs={8} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
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
                        <Grid item xs={4}>
                            <Paper style={{ borderRadius: "18px", backgroundColor: "#fafafa" }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <PriceSlider />
                                    </Grid>
                                </Grid>
                            </Paper>

                            <Card style={{ borderRadius: "13px", backgroundColor: "#fafafa", marginTop: "1rem", padding: "2rem " }}>
                                <Grid container spacing={2}>
                                    <Grid xs={8}>
                                        <Box style={{ display:"flex",color: "#81c784" }}>Credit card</Box>
                                    </Grid>
                                    <Grid xs={4}>
                                        <Button variant="text" style={{display:"flex",justifyContent:"flex-end",alignItems:"center", color: "#00e676" }}>Change</Button>
                                    </Grid>

                                    <Grid xs={8}>
                                        <Card style={{ backgroundColor: "#263238", color: "#fff", borderRadius: "20px" }}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={8} style={{ display: "flex", justifyContent: "center",marginTop:"1rem"}}>
                                                    <div>United |</div>
                                                    <div style={{ color: "#b0bec5" }}>Bank</div>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <div style={{ marginTop:"1rem",color: "#b0bec5" }}>
                                                        <AttachMoney />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} style={{ display: "flex", alignItems: "center" }}>
                                                    <div style={{ display: "flex", marginLeft: "1rem" }}>
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
                                    <Grid xs={4} style={{marginTop:"1rem", fontWeight:"bolder"}} >
                                        <p>Master Card</p>
                                        <div>..........5747</div>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default PriceandPayment
