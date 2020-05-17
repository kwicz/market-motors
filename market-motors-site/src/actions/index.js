import * as c from './ActionTypes';

export const requestVehicles = () => ({
  type: c.REQUEST_VEHICLES
});

export const getVehiclesSuccess = (vehicles) => ({
  type: c.GET_VEHICLES_SUCCESS,
  vehicles
});

export const getVehiclesFailure = (error) => ({
  type: c.GET_VEHICLES_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestVehicles);
    return fetch(`http://localhost:5000/api/vehicles/`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getVehiclesSuccess(jsonifiedResponse));
        })
      .catch((error) => {
        dispatch(getVehiclesFailure(error));
      });
  }
}

export const selectedVehicle = (vehicle) => {
  const { vehicleTitle, vin, stockNumber, make, model, vehicleId } = vehicle;
  return {
    type: c.SELECTED_VEHICLE,
    vehicleTitle: vehicleTitle,
    vin: vin,
    stockNumber: stockNumber,
    make: make,
    model: model,
    vehicleId: vehicleId
  }
};