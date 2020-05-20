import * as c from '../actions/ActionTypes';

export default (state = {}, action) => {
  const { vehicleId, vehicleTitle, vin, stockNumber, make, model, year, condition, price, availability, exteriorColor, interiorColor, doors, fuelType, engine, transmission, mileage, features } = action;
  switch(action.type) {
    case c.SELECTED_VEHICLE:
      return Object.assign({}, state, {
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
  default:
      return state;
  }
}
