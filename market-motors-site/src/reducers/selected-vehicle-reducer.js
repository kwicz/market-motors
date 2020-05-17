import * as c from '../actions/ActionTypes';

export default (state = {}, action) => {
  const { vehicleTitle, vin, stockNumber, make, model, vehicleId } = action;
  switch(action.type) {
    case c.SELECTED_VEHICLE:
      return Object.assign({}, state, {
        vehicleTitle: vehicleTitle,
        vin: vin,
        stockNumber: stockNumber,
        make: make,
        model: model,
        vehicleId: vehicleId
      });
  default:
      return state;
  }
}
