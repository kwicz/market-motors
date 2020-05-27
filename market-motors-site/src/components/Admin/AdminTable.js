import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeApiCall }from '../../actions/index';
import * as a from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/icons/List';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import AttachMoney from '@material-ui/icons/AttachMoney';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function VehiclesPage() {
  // console.log("VehiclesPages Props: ", props)
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const vehicles = useSelector(state => state.vehiclesAPICall.vehicles)

  useEffect(() => {
    dispatch(makeApiCall());
  }, [])
  

  async function deleteVehicle(id) {
      console.log("vehicle id: ", id)
      await fetch(`http://localhost:5000/api/vehicles/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    function handleSelectedVehicleClick(vehicle) {
      console.log("admin table vehicle: ", vehicle)
      const action = a.selectedVehicle(vehicle)
      dispatch(action);
      history.push('/vehicledetails');
    }

  async function handleClickingSale(vehicle) {
    const { vehicleId, vehicleTitle, vin, stockNumber, make, model, year, condition, price, availability, exteriorColor, interiorColor, doors, fuelType, engine, transmission, mileage, features } = vehicle;
    const updatedAvailability = "Sold";
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
      availability: updatedAvailability,
      exteriorColor: exteriorColor,
      interiorColor: interiorColor,
      doors: doors,
      fuelType: fuelType,
      engine: engine,
      transmission: transmission,
      mileage: mileage,
      features: features
    }
    console.log("handleClick")
    await fetch(`http://localhost:5000/api/Vehicles/${vehicleId}`,{
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedVehicle)
    })
  }


  function handleEditClick(vehicle) {
    console.log("edit click vehicle: ", vehicle)
    const action = a.selectedVehicle(vehicle)
    dispatch(action);
    history.push('/editvehicle');
  }

  let featured;
  const handleChange = (event) => {
    event.target.name = event.target.checked;
    console.log("Handle change: ", event.target.name)
    featured = event.target.name;
  } 

  return (
    <React.Fragment>
      <br />
      <Container>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Current Inventory
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" >Feature?</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Vehicle</TableCell>
                <TableCell  align="center">Price</TableCell>
                <TableCell  align="center">Miles</TableCell>
                <TableCell  align="center">Condition</TableCell>
                <TableCell  align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicles.map((row) => (
                  <TableRow key={row.vehicleId}>
                    <TableCell align="center" component="th" scope="row">
                      <FormControlLabel  control={
                        <Checkbox
                          onChange={handleChange}
                          name="featured"
                          color="primary"
                        />
                      }
                    />
                    </TableCell>
                    <TableCell  align="center" component="th" scope="row">
                      I'm an image!
                    </TableCell>
                    <TableCell align="center" component="th" scope="row">
                      {row.vehicleTitle}
                    </TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                    <TableCell align="center">{row.mileage}</TableCell>
                    <TableCell align="center">{row.condition}</TableCell>
                    <TableCell align="center">
                    <IconButton 
                      onClick={() => {
                        handleSelectedVehicleClick(row);
                      }}
                      id={row.vehicleId}
                      >
                        <List />
                    </IconButton>
                    <IconButton 
                      onClick={() => {
                        handleEditClick(row);
                      }}
                      id={row.vehicleId}
                      >
                        <Edit />
                    </IconButton>
                    <IconButton 
                      onClick={() => {
                        handleClickingSale(row);
                      }}
                      id={row.vehicleId}
                      >
                        <AttachMoney />
                    </IconButton>
                    <IconButton 
                      onClick={() => {
                        deleteVehicle(row.vehicleId);
                      }}
                      href="/dashboard"
                      id={row.vehicleId}
                      >
                        <Delete />
                    </IconButton>
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <br />
    </React.Fragment>
  );
}

export default VehiclesPage;