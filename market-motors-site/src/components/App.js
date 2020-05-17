import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './HomePage'
import VehiclesPage from './VehiclesPage'


function App() {
  return (
    <React.Fragment>
      <HomePage />
      <VehiclesPage />
    </React.Fragment>
  );
}

export default App;
