import vehiclesReducer from '../../reducers/vehicles-Reducer';
import * as c from '../../actions/ActionTypes';

describe('vehiclesReducer', () => {

  let action;

  const defaultState = {
    isLoading: false,
    vehicles: [],
    error: null,
    // selectedVehicle: null
  };

  const loadingState = {
    isLoading: false,
    vehicles: [],
    error: null,
    // selectedVehicle: null
  };

  test('should successfully return default state if no action is passed to it', () => {
    expect(vehiclesReducer(defaultState, {type:null})).toEqual(
      {
      isLoading: false,
      vehicles: [],
      error: null,
      // selectedPark: null
      }
    );
  });

  test('should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_VEHICLES
    };

    expect(vehiclesReducer(defaultState, action)).toEqual({
      isLoading: true,
      vehicles: [],
      error: null,
      // selectedPark: null
    });
  });

  test('failing to get vehicles should change isLoading to false and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_VEHICLES_FAILURE,
      error
    };

    expect(vehiclesReducer(loadingState, action)).toEqual({
      isLoading: false,
      vehicles: [],
      error: "An error",
      // selectedPark: null
    });
  });

});