import * as c from '../actions/ActionTypes';

const initialState = {
  isLoading: false,
  map: {},
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_MAP:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_MAP_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        GET_MAP_FAILURE: action.GET_MAP_FAILURE
      });
    case c.GET_MAP_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};