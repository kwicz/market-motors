import selectedVehicleReducer from '../../reducers/selected-vehicle-reducer'
import * as c from '../../actions/ActionTypes';

describe('selectedVehicleReducer', () => {

  let action;
  const defaultState = {
    selectedVehicle: {}
  };
  const vehicleData = {
    vehicleId: 1,
    vehicleTitle: "1998 Chevy S10",
    vin: "79879851655",
    stockNumber: "1655",
    make: "Chevy",
    model: "S10",
    year: "1998",
    condition: "Good",
    price: "2,000",
    availability: "Available",
    exteriorColor: "Taupe",
    interiorColor: "Taupe",
    doors: "3",
    fuelType: "Gasoline",
    engine: "V8",
    transmission: "Automatic",
    mileage: "100,000",
    features: []
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(selectedVehicleReducer(defaultState, {type: null })).toEqual(
      {
        selectedVehicle: {}
      }
    );
  });
  
  test('Should return selected vehicle from state', () => {
    const { vehicleId, vehicleTitle, vin, stockNumber, make, model, year, condition, price, availability, exteriorColor, interiorColor, doors, fuelType, engine, transmission, mileage, features } = vehicleData;
    action = {
      type: 'SELECTED_VEHICLE',
      vehicleId: vehicleId,
      vehicleTitle: vehicleTitle,
      vin: vin,
      stockNumber: stockNumber,
      make: make,
      model: model,
      year: year,
      condition: condition,
      price: price,
      availability: availability,
      exteriorColor: exteriorColor,
      interiorColor: interiorColor,
      doors: doors,
      fuelType: fuelType,
      engine: engine,
      transmission: transmission,
      mileage: mileage,
      features: features
    };

    expect(selectedVehicleReducer(null, action)).toEqual({
      vehicleId: vehicleId,
      vehicleTitle: vehicleTitle,
      vin: vin,
      stockNumber: stockNumber,
      make: make,
      model: model,
      year: year,
      condition: condition,
      price: price,
      availability: availability,
      exteriorColor: exteriorColor,
      interiorColor: interiorColor,
      doors: doors,
      fuelType: fuelType,
      engine: engine,
      transmission: transmission,
      mileage: mileage,
      features: features
    });
  });
});
  