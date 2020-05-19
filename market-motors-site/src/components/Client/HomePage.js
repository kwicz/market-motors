import React from 'react';
import Hero from '../Hero';
import { connect } from 'react-redux';
import { makeApiCall } from '../../actions';
import FeaturedVehicles from './FeaturedVehicles';
import AboutUs from './AboutUs';
import Contact from './Contact';
import VehiclesPage from './VehiclesPage';
import VehicleDetails from './VehicleDetails';

class HomePage extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
    console.log("Component did mount props: ", this.props)
  }


  render() {
    return (
      <React.Fragment>
        <Hero />
        <FeaturedVehicles />
        <AboutUs />
        <Contact />
        <VehicleDetails />
        <VehiclesPage />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    vehiclesAPICall: state.vehiclesAPICall,
    selectedVehicle: state.selectedVehicle
  }
}

export default connect(mapStateToProps)(HomePage);