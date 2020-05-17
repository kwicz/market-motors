import selectedVehicleReducer from './selected-vehicle-reducer';
import vehiclesReducer from './vehicles-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    vehiclesAPICall: vehiclesReducer,
    selectedVehicle: selectedVehicleReducer
});

export default rootReducer;