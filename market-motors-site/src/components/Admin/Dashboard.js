import React from 'react';
import NewVehicleForm from './NewVehicleForm'
import VehiclesPage from '../VehiclesPage'
import AdminVehicleDetails from './AdminVehicleDetails'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as a from '../../actions'
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme, MuiThemeProvider } from '@material-ui/core/styles';

import theme from '../../theme/muiTheme'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Dashboard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const vehicles = useSelector(state => state.vehiclesAPICall.vehicles)
  console.log("DASHBOARD VEHICLES", vehicles)
  
  function handleSelectedRowClick(vehicle) {
    const action = a.selectedVehicle(vehicle)
    dispatch(action);
  }

  return (
    <MuiThemeProvider theme={theme}>
      <h1>Current Inventory</h1>
      <Container>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Vehicle</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Miles</TableCell>
                <TableCell align="right">Condition</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicles.map((row) => (
                  <TableRow key={row.vehicleId}>
                    <TableCell component="th" scope="row" image="https://source.unsplash.com/random">

                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.vehicleTitle}
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.mileage}</TableCell>
                    <TableCell align="right">{row.condition}</TableCell>
                    <TableCell align="right">
                    <Link 
                  onClick={() => {
                    handleSelectedRowClick(row);
                  }}
                  to="/vehicledetails"
                  id={row.id}
                  key={row.id}
                  >
                      Details
                </Link>
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <br />
    </MuiThemeProvider>
  );
}