import * as c from '../actions/ActionTypes';

const initialState = {
  isLoading: false,
  vehicles: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_VEHICLES:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_VEHICLES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        vehicles: action.vehicles
      });
    case c.GET_VEHICLES_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};