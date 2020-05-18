import mapReducer from '../../reducers/map-reducer';
import * as c from '../../actions/ActionTypes';

describe('mapReducer', () => {

  let action;

  const defaultState = {
    isLoading: false,
    map: [],
    error: null,
    // selectedVehicle: null
  };

  const loadingState = {
    isLoading: false,
    map: [],
    error: null,
    // selectedVehicle: null
  };

  test('should successfully return default state if no action is passed to it', () => {
    expect(mapReducer(defaultState, {type:null})).toEqual(
      {
      isLoading: false,
      map: [],
      error: null,
      // selectedPark: null
      }
    );
  });

  test('should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_MAP
    };

    expect(mapReducer(defaultState, action)).toEqual({
      isLoading: true,
      map: [],
      error: null,
      // selectedPark: null
    });
  });

  test('failing to get map should change isLoading to false and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_MAP_FAILURE,
      error
    };

    expect(mapReducer(loadingState, action)).toEqual({
      isLoading: false,
      map: [],
      error: "An error",
      // selectedPark: null
    });
  });

});