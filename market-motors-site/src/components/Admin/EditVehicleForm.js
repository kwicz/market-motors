import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeApiCall }from '../../actions/index';
import * as a from '../../actions';
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

  const vehicle = useSelector(state => state.selectedVehicle)
  console.log("edit vehicles page: ", vehicle)

  useEffect(() => {
    dispatch(makeApiCall());
  }, [])


  async function updateVehicle(id) {
    await fetch(`http://localhost:5000/api/vehicles/${id}`,{
      method: 'PUT'
    })
    .then(response => response.json())
  }


  return (
    <React.Fragment>
    <MuiThemeProvider theme={theme}>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Update Vehicle</Typography>
      <Container>
        <form className={classes.root} onSubmit={updateVehicle}>
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

export default EditVehicleForm;