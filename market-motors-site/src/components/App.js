import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux';
import NavBar from './NavBar';
import HomePage from './Client/HomePage'
import Dashboard from './Admin/Dashboard'
import SignIn from './Admin/SignIn'
import NewVehicleForm from './Admin/NewVehicleForm'
import EditVehicleForm from './Admin/EditVehicleForm'
import VehiclesPage from './VehiclesPage'
import ClientVehicleDetails from './Client/ClientVehicleDetails'
import AdminVehicleDetails from './Admin/AdminVehicleDetails'
import Footer from './Footer'
// import styled from 'styled-components';
// import img from '../assets/background.jpg'

function App() {

  // background-image: url(${img});
  // const AppStyle = styled.div`
  //   background-color: #ede5d3;
  //   background-size: cover;
  //   min-height: 95vh;
  //   padding: 50px;
  //   `;

  return (
    <Router>
      <NavBar />
      <Switch>
        {/* <AppStyle> */}
        <Route path="/homepage">
          <HomePage />
         </Route>
         <Route path="/vehicles">
          <VehiclesPage />
         </Route>
         <Route path="/vehicledetails">
          <ClientVehicleDetails />
         </Route>
         {/* </AppStyle> */}
         <Route path="/signin">
          <SignIn />
         </Route>
         <Route path="/dashboard">
          <Dashboard />
         </Route>
         <Route path="/newvehicle">
          <NewVehicleForm />
         </Route>
         <Route path="/editvehicle">
          <EditVehicleForm />
         </Route>
         <Route path="/admindetails">
          <AdminVehicleDetails />
         </Route>
       </Switch>
      <Footer />
     </Router>
  );
}

export default App;
