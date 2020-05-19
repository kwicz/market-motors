import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import HomePage from './Client/HomePage'
import Dashboard from './Admin/Dashboard'
import SignIn from './Admin/SignIn'
import Footer from './Footer'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <HomePage />
      <SignIn />
      <Dashboard />
      <Footer />
    </React.Fragment>
  );
}

export default App;
