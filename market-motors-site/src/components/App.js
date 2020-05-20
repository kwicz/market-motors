import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/homepage">
          <HomePage />
         </Route>
         <Route path="/vehicles">
          <VehiclesPage />
         </Route>
         <Route path="/vehicledetails">
          <ClientVehicleDetails />
         </Route>
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
