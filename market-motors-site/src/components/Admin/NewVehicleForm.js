import React, { useState, useEffect } from 'react';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import theme from '../../theme/muiTheme'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

function NewVehicleForm() {
  const classes = useStyles();

  async function addVehicle(vehicle) {
    await fetch(`http://localhost:5000/api/vehicles/`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(vehicle)
    })
  }
  
  function addVehicleToDatabase(event) {
    event.preventDefault();
    const vehicle = {
      vehicleTitle: event.target.vehicleTitle.value,
      stockNumber: event.target.stockNumber.value,
      make: event.target.make.value,
      model: event.target.model.value,
      year: event.target.year.value,
      condition: event.target.condition.value,
      price: event.target.price.value,
      availability: event.target.availability.value,
      exteriorColor: event.target.exteriorColor.value,
      interiorColor: event.target.interiorColor.value,
      doors: event.target.doors.value,
      fuelType: event.target.fuelType.value,
      engine: event.target.engine.value,
      transmission: event.target.transmission.value,
      mileage: event.target.mileage.value
    }
    addVehicle(vehicle);
  }

    return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <Container>
          <form className={classes.root} onSubmit={addVehicleToDatabase}>
            <h1>Add a New Vehicle</h1>
            <TextField name="vehicleTitle" label="Vehicle Title" type="text" helperText="e.g. 1998 Chevy S10" variant="outlined" />
            <TextField name="vin" label="VIN" type="text" helperText="e.g. 3B7KF2363YG116285" variant="outlined" />
            <TextField name="stockNumber" label="Stock Number" type="text" helperText="e.g. 6285" variant="outlined" />
            <TextField name="make" label="Make" type="text" helperText="e.g. Chevrolet" variant="outlined" />
            <TextField name="model" label="Model" type="text" helperText="e.g. S10" variant="outlined" />
            <TextField name="year" label="Year" type="text" helperText="e.g. 1998" variant="outlined" />
            <TextField name="condition" label="Condition" type="text" helperText="e.g. Good" variant="outlined" />
            <TextField name="price" label="Price" type="text" helperText="e.g. $2,000" variant="outlined" />
            <TextField name="availability" label="Availability" type="text" helperText="e.g. Available" variant="outlined" />
            <TextField name="exteriorColor" label="Exterior Color" type="text" helperText="e.g. Taupe" variant="outlined" />
            <TextField name="interiorColor" label="Interior Color" type="text" helperText="e.g. Taupe" variant="outlined" />
            <TextField name="doors" label="Number of Doors" type="text" helperText="e.g. 3" variant="outlined" />
            <TextField name="fuelType" label="Fuel Type" type="text" helperText="e.g. Gasoline" variant="outlined" />
            <TextField name="engine" label="Engine" type="text" helperText="e.g. 4 Cylinder" variant="outlined" />
            <TextField name="transmission" label="Transmission" type="text" helperText="e.g. Automatic" variant="outlined" />
            <TextField name="mileage" label="Mileage" type="text" helperText="e.g. 100,000" variant="outlined" />
            <br />
            <Button type="submit" variant="contained" style={{ color: 
              'white', background: '#003300' }}>Add New Car</Button>
          </form>
        </Container>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default NewVehicleForm;