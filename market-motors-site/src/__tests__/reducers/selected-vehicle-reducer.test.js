import selectedVehicleReducer from '../../reducers/selected-vehicle-reducer'
import * as c from '../../actions/ActionTypes';

describe('selectedVehicleReducer', () => {

  let action;
  const defaultState = {
    // isLoading: false,
    // vehicles: [],
    // error: null,
    selectedVehicle: {}
  };
  const vehicleData = {
    vehicleTitle: "1998 Chevy S10",
    vin: "5876873545",
    stockNumber: 3545,
    make: "Chevy",
    model: "S10",
    vehicleId: 1
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(selectedVehicleReducer(defaultState, {type: null })).toEqual(
      {
        // isLoading: false,
        // vehicles: [],
        // error: null,
        selectedVehicle: {}
      }
    );
  });
  
  test('Should return selected vehicle from state', () => {
    const { vehicleTitle, vin, stockNumber, make, model, vehicleId } = vehicleData;
    action = {
      type: 'SELECTED_VEHICLE',
      vehicleTitle: vehicleTitle,
      vin: vin,
      stockNumber: stockNumber,
      make: make,
      model: model,
      vehicleId: vehicleId
    };

    expect(selectedVehicleReducer(null, action)).toEqual({
      vehicleTitle: vehicleTitle,
      vin: vin,
      stockNumber: stockNumber,
      make: make,
      model: model,
      vehicleId: vehicleId
    });
  });
});
  