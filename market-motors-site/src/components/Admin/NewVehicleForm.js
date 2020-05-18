import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

function addVehicleToDatabase(event) {
  event.preventDefault();

}

function NewVehicleForm() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
        <form className={classes.root} onSubmit={addVehicleToDatabase}>
          <h1>Add a New Vehicle</h1>
          <TextField label="Vehicle Title" type="text" helperText="e.g. 1998 Chevy S10" variant="outlined" />
          <TextField label="VIN" type="text" helperText="e.g. 3B7KF2363YG116285" variant="outlined" />
          <TextField label="Stock Number" type="text" helperText="e.g. 6285" variant="outlined" />
          <TextField label="Make" type="text" helperText="e.g. Chevrolet" variant="outlined" />
          <TextField label="Model" type="text" helperText="e.g. S10" variant="outlined" />
          <TextField label="Year" type="text" helperText="e.g. 1998" variant="outlined" />
          <TextField label="Condition" type="text" helperText="e.g. Good" variant="outlined" />
          <TextField label="Price" type="text" helperText="e.g. $2,000" variant="outlined" />
          <TextField label="Availability" type="text" helperText="e.g. Available" variant="outlined" />
          <TextField label="Exterior Color" type="text" helperText="e.g. Taupe" variant="outlined" />
          <TextField label="Interior Color" type="text" helperText="e.g. Taupe" variant="outlined" />
          <TextField label="Number of Doors" type="text" helperText="e.g. 3" variant="outlined" />
          <TextField label="Fuel Type" type="text" helperText="e.g. Gasoline" variant="outlined" />
          <TextField label="Engine" type="text" helperText="e.g. 4 Cylinder" variant="outlined" />
          <TextField label="Transmission" type="text" helperText="e.g. Automatic" variant="outlined" />
          <TextField label="Mileage" type="text" helperText="e.g. 100,000" variant="outlined" />
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    </React.Fragment>
  );
}

export default NewVehicleForm;