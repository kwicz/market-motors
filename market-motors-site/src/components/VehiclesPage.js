import React from 'react';
import { useSelector } from 'react-redux';

function VehiclesPage() {

  const vehicles = useSelector(state => state.vehiclesAPICall.vehicles)
  const vehiclesState = useSelector(state => state.vehiclesAPICall)
  console.log("VEHICLES STATE: ", vehiclesState);
  console.log("VEHICLES: ", vehicles);
  console.log("VEHICLES NAME: ", vehicles[0])
  const vehiclesList = vehicles.map((e) => <li value={e.vehicleId - 1} key={e.vehicleId - 1}>{e.vehicleTitle}</li>)
  console.log("VEHICLES LIST: ", vehiclesList)

  return (
    <React.Fragment>
      <h1>Vehicles List</h1>
      <ul>
        {vehiclesList}
      </ul>
    </React.Fragment>
  );
}

export default VehiclesPage;