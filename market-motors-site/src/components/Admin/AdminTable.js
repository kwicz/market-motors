import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
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

  const vehicles = useSelector(state => state.vehiclesAPICall.vehicles)
  console.log("vehicles page: ", vehicles)

  useEffect(() => {
    dispatch(makeApiCall());
  }, [])
  

  async function deleteVehicle(id) {
    console.log("vehicle id: ", id)
    await fetch(`http://localhost:5000/api/vehicles/${id}`,{
      method: 'DELETE'
    })
    .then(response => response.json())
  }

  function handleClickingSale(id, availability) {
    const updatedAvailability = "Sold";
    console.log("handleClick")
    // await fetch(`http://localhost:5000/api/Vehicles/${id}`,{
    //   method: 'PUT', 
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(propsToUpdate)
    // })
  }

  function handleSelectedVehicleClick(vehicle) {
    console.log("admin table vehicle: ", vehicle)
    const action = a.selectedVehicle(vehicle)
    dispatch(action);
  }

  function handleEditClick(vehicle) {
    console.log("edit click vehicle: ", vehicle)
    const action = a.selectedVehicle(vehicle)
    dispatch(action);
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
                    <image src="https://source.unsplash.com/random"></image>
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
                      href="/vehicledetails"
                      id={row.id}
                      key={row.id}
                      >
                        <List />
                    </IconButton>
                    <IconButton 
                      onClick={() => {
                        handleEditClick(row);
                      }}
                      href="/editvehicle"
                      id={row.id}
                      key={row.id}
                      >
                        <Edit />
                    </IconButton>
                    <IconButton 
                      onClick={() => {
                        handleClickingSale(row.id, row.availability);
                      }}
                      href="/vehicledetails"
                      id={row.id}
                      key={row.id}
                      >
                        <AttachMoney />
                    </IconButton>
                    <IconButton 
                      onClick={() => {
                        deleteVehicle(row.id);
                      }}
                      href="/dashboard"
                      id={row.id}
                      key={row.id}
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