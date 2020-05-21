import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeApiCall }from '../actions/index';
import * as a from '../actions';
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
  
  function handleSelectedRowClick(vehicle) {
    const action = a.selectedVehicle(vehicle)
    dispatch(action);
  }

  return (
    <React.Fragment>
      <br />
      <Container>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Current Inventory
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Inventory not updated daily.  Call or stop in for more information.
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Vehicle</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Miles</TableCell>
                <TableCell align="right">Condition</TableCell>
                <TableCell align="right">Details</TableCell>
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
    </React.Fragment>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     vehiclesAPICall: state.vehiclesAPICall
//   }
// }

// eslint-disable-next-line
// VehiclesPage = connect(mapStateToProps)(VehiclesPage)

export default VehiclesPage;