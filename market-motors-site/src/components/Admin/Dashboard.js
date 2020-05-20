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
    <h1>Dashboard</h1>
  );
}