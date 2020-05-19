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

// export const addVehicle = () => ({
//   type: c.ADD_VEHICLE
// });

// export const postApiCall = () => {
//   return dispatch => {
//     dispatch(addVehicle);
//     return fetch(`http://localhost:5000/api/vehicles/`,
//       method: 'POST')
//       .then(response => response.json())
//       .then(
//         (jsonifiedResponse) => {
//           dispatch(getVehiclesSuccess(jsonifiedResponse));
//         })
//       .catch((error) => {
//         dispatch(getVehiclesFailure(error));
//       });
//   }
// }

// export const requestMap = () => ({
//   type: c.REQUEST_MAP
// });

// export const getMapSuccess = (map) => ({
//   type: c.GET_MAP_SUCCESS,
//   map
// });

// export const getMapFailure = (map) => ({
//   type: c.GET_MAP_FAILURE,
//   error
// });

// export const getMap = () => {
//   return dispatch => {
//     dispatch(requestMap);
//     return fetch(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}`)
//       .then(response => response.json())
//       .then(
//         (jsonifiedResponse) => {
//           dispatch(getMapSuccess(jsonifiedResponse));
//         })
//       .catch((error) => {
//         dispatch(getMapFailure(error));
//       });
//   }
// }

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