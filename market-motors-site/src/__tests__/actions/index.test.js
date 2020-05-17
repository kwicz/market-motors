import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('vehicle reducer actions', () => {
  it('requestVehicles should create REQUEST_VEHICLES action', () => {
    expect(actions.requestVehicles()).toEqual({
      type: c.REQUEST_VEHICLES
    });
  });

  it('getVehiclesSuccess should create GET_VEHICLES_SUCCESS action', () => {
    const vehicles = "A vehicle";
    expect(actions.getVehiclesSuccess(vehicles)).toEqual({
      type: c.GET_VEHICLES_SUCCESS,
      vehicles
    });
  });

  it('getVehiclesFailure should create GET_VEHICLES_FAILURE action', () => {
    const error ="An error";
    expect(actions.getVehiclesFailure(error)).toEqual({
      type: c.GET_VEHICLES_FAILURE,
      error
    });
  });
});
