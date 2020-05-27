import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeApiCall }from '../../actions/index';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import theme from '../../theme/muiTheme'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '55ch',
    },
  },
}));

function EditVehicleForm() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  let featured;
  const handleChange = (event) => {
    event.target.name = event.target.checked;
    console.log("Handle change: ", event.target.name)
    featured = event.target.name;
  }

  // Extract selected vehicle data from state
  const vehicle = useSelector(state => state.selectedVehicle)
  console.log("edit vehicles page: ", vehicle)
  const { vehicleId, vehicleTitle, vin, stockNumber, make, model, year, condition, price, availability, exteriorColor, interiorColor, doors, fuelType, engine, transmission, mileage, features } = vehicle;

  useEffect(() => {
    dispatch(makeApiCall());
  }, [])


  // Push updated data into the database
  async function handleUpdate(newVehicleValues) {
    console.log("newVehicleValues: ", newVehicleValues)
    const { vehicleId, vehicleTitle, vin, stockNumber, make, model, year, condition, price, availability, exteriorColor, interiorColor, doors, fuelType, engine, transmission, mileage, features } = newVehicleValues;
    const updatedVehicle = {
      vehicleId: vehicleId,
      vehicleTitle: vehicleTitle,
      vin: vin,
      stockNumber: stockNumber,
      make: make,
      model: model,
      year: year,
      condition: condition,
      price: price,
      availability: availability,
      exteriorColor: exteriorColor,
      interiorColor: interiorColor,
      doors: doors,
      fuelType: fuelType,
      engine: engine,
      transmission: transmission,
      mileage: mileage,
      features: features
    }
    await fetch(`http://localhost:5000/api/Vehicles/${vehicleId}`,{
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedVehicle)
    })
  }


  return (
    <React.Fragment>
    <MuiThemeProvider theme={theme}>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Update Vehicle</Typography>
      <Container>
        <form className={classes.root} onSubmit={handleUpdate(vehicle)}>
        <FormControlLabel align="center" control={
              <Checkbox
                // checked={state.featured}
                onChange={handleChange}
                name="featured"
                color="primary"
              />
            }
            label="Feature this vehicle?"
          />
          <Typography variant="h5" align="left" color="textSecondary" paragraph>
            Vehicle Basics
          </Typography>
          <TextField name="make" label="Make" type="text" helperText="e.g. Chevrolet" variant="outlined" defaultValue={make} />
          <TextField name="model" label="Model" type="text" helperText="e.g. S10" variant="outlined" defaultValue={model} />
          <TextField name="year" label="Year" type="text" helperText="e.g. 1998" variant="outlined" defaultValue={year} />
          <TextField name="vin" label="VIN" type="text" helperText="e.g. 3B7KF2363YG116285" variant="outlined" defaultValue={vin} />
          <TextField name="condition" label="Condition" type="text" helperText="e.g. Good" variant="outlined" defaultValue={condition} />
          <TextField name="price" label="Price" type="text" helperText="e.g. $2,000" variant="outlined" defaultValue={price} />
          <TextField name="availability" label="Availability" type="text" helperText="e.g. Available" variant="outlined" defaultValue={availability} />
          <hr />    
          <Typography variant="h5" align="left" color="textSecondary" paragraph>
          Vehicle Details
          </Typography>
          <TextField name="exteriorColor" label="Exterior Color" type="text" helperText="e.g. Taupe" variant="outlined" defaultValue={exteriorColor} />
          <TextField name="interiorColor" label="Interior Color" type="text" helperText="e.g. Taupe" variant="outlined" defaultValue={interiorColor}/>
          <TextField name="doors" label="Number of Doors" type="text" helperText="e.g. 3" variant="outlined" defaultValue={doors} />
          <TextField name="fuelType" label="Fuel Type" type="text" helperText="e.g. Gasoline" variant="outlined" defaultValue={fuelType}/>
          <TextField name="engine" label="Engine" type="text" helperText="e.g. 4 Cylinder" variant="outlined" defaultValue={engine} />
          <TextField name="transmission" label="Transmission" type="text" helperText="e.g. Automatic" variant="outlined" defaultValue={transmission} />
          <TextField name="mileage" label="Mileage" type="text" helperText="e.g. 100,000" variant="outlined" defaultValue={mileage} />
          <TextField
            name="features"
            style={{ width: "112ch"}}
            label="Additional Features"
            multiline
            rows={4}
            variant="outlined"
            helperText="Separate features by comma e.g. Power Windows, Air Conditioning, Time Travel"
            defaultValue={features}
          />
          <br />
          <Grid container spacing={2} justify="center">
            <Button type="submit" variant="contained" style={{ color: 
            'white', background: '#003300' }}>Add New Car</Button>     
          </Grid>
        </form>
      </Container>
    </MuiThemeProvider>
    <br />
  </React.Fragment>
);

}

export default EditVehicleForm;