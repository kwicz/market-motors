import React from 'react';
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
import ImageUploader from 'react-images-upload';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '55ch',
    },
  },
}));

function NewVehicleForm() {
  const classes = useStyles();
  const history = useHistory();

  let featured;
  const handleChange = (event) => {
    event.target.name = event.target.checked;
    console.log("Handle change: ", event.target.name)
    featured = event.target.name;
  }

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
    console.log("image: ", event.target.image.value)
    const vehicle = {
      vehicleTitle: event.target.year.value + " " + event.target.make.value + " " + event.target.model.value,
      featured: featured,
      make: event.target.make.value,
      model: event.target.model.value,
      year: event.target.year.value,
      vin: event.target.vin.value,
      stockNumber: event.target.vin.value.slice(-4),
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
    console.log("VEHICLE: ", vehicle)
    addVehicle(vehicle);
    history.push('/dashboard');
  }

    return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Add a New Vehicle</Typography>
        <Container>
          <form className={classes.root} onSubmit={addVehicleToDatabase}>

            <Typography variant="h5" align="left" color="textSecondary" paragraph>
              Vehicle Basics
            </Typography>
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
            <ImageUploader
                name="image"
                withIcon={true}
                buttonText='Choose images'
                // onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview={true}
            />
            <TextField name="make" label="Make" type="text" helperText="e.g. Chevrolet" variant="outlined" />
            <TextField name="model" label="Model" type="text" helperText="e.g. S10" variant="outlined" />
            <TextField name="year" label="Year" type="text" helperText="e.g. 1998" variant="outlined" />
            <TextField name="vin" label="VIN" type="text" helperText="e.g. 3B7KF2363YG116285" variant="outlined" />
            <TextField name="condition" label="Condition" type="text" helperText="e.g. Good" variant="outlined" />
            <TextField name="price" label="Price" type="text" helperText="e.g. $2,000" variant="outlined" />
            <TextField name="availability" label="Availability" type="text" helperText="e.g. Available" variant="outlined" />
            <hr />    
            <Typography variant="h5" align="left" color="textSecondary" paragraph>
            Vehicle Details
            </Typography>
            <TextField name="exteriorColor" label="Exterior Color" type="text" helperText="e.g. Taupe" variant="outlined" />
            <TextField name="interiorColor" label="Interior Color" type="text" helperText="e.g. Taupe" variant="outlined" />
            <TextField name="doors" label="Number of Doors" type="text" helperText="e.g. 3" variant="outlined" />
            <TextField name="fuelType" label="Fuel Type" type="text" helperText="e.g. Gasoline" variant="outlined" />
            <TextField name="engine" label="Engine" type="text" helperText="e.g. 4 Cylinder" variant="outlined" />
            <TextField name="transmission" label="Transmission" type="text" helperText="e.g. Automatic" variant="outlined" />
            <TextField name="mileage" label="Mileage" type="text" helperText="e.g. 100,000" variant="outlined" />
            <TextField
              id="outlined-multiline-static"
              style={{ width: "112ch"}}
              label="Additional Features"
              multiline
              rows={4}
              variant="outlined"
              helperText="Separate features by comma e.g. Power Windows, Air Conditioning, Time Travel"
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

export default NewVehicleForm;