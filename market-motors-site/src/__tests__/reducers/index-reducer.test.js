import rootReducer from '../../reducers/index';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      vehiclesAPICall: {
        isLoading: false,
        vehicles: [],
        error: null
      },
      selectedVehicle: {}
    });
  });

});