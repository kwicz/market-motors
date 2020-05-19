import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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

  const vehicles = useSelector(state => state.vehiclesAPICall.vehicles)
  const vehiclesState = useSelector(state => state.vehiclesAPICall)
  console.log("VEHICLES STATE: ", vehiclesState);
  console.log("VEHICLES: ", vehicles);
  console.log("VEHICLES NAME: ", vehicles[0])
  const vehiclesList = vehicles.map((e) => <li value={e.vehicleId - 1} key={e.vehicleId - 1}>{e.vehicleTitle}</li>)
  console.log("VEHICLES LIST: ", vehiclesList)
  
  const vehiclesRows = vehicles.map((e) => <TableRow value={e.vehicleId - 1} key={e.vehicleId - 1}>{e.vehicleTitle}</TableRow>)

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
                <TableCell align="right">Engine</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicles.map((row) => (
                <TableRow key={row.vehicleId}>
                  <TableCell component="th" scope="row">
                    {row.vehicleTitle}
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.miles}</TableCell>
                  <TableCell align="right">{row.condition}</TableCell>
                  <TableCell align="right">{row.engine}</TableCell>
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