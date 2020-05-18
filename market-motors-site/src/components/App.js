import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import HomePage from './Client/HomePage'
import VehiclesPage from './VehiclesPage'
import Footer from './Footer'


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <HomePage />
      <VehiclesPage />
      <Footer />
    </React.Fragment>
  );
}

export default App;
