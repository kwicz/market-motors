import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as a from '../actions'
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function VehiclesPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const vehicles = useSelector(state => state.vehiclesAPICall.vehicles)
  
  function handleSelectedRowClick(vehicle) {
    console.log("SELECTED VEHICLE: ", vehicle)
    const action = a.selectedVehicle(vehicle)
    dispatch(action);
  }

  return (
    <React.Fragment>
      <h1>Vehicles List</h1>
      {/* <ul>
        {vehiclesList}
      </ul> */}
      <Container>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Vehicle</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Miles</TableCell>
                <TableCell align="right">Condition</TableCell>
                <TableCell align="right">Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicles.map((row) => (
                <Link 
                  onClick={() => {
                    handleSelectedRowClick(row);
                  }}
                  to="/vehicledetails"
                  id={row.id}
                  key={row.id}
                  >
                  <TableRow key={row.vehicleId}>
                    <TableCell component="th" scope="row">
                      {row.vehicleTitle}
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.mileage}</TableCell>
                    <TableCell align="right">{row.condition}</TableCell>
                    <TableCell align="right">
                      Details
                    </TableCell>
                  </TableRow>
                </Link>
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