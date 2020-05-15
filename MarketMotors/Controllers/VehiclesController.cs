using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using MarketMotors.Models;
using Microsoft.EntityFrameworkCore;

namespace MarketMotors.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class VehiclesController : ControllerBase
  {
    private MarketMotorsContext _db;

    public VehiclesController(MarketMotorsContext db)
    {
      _db = db;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Vehicle>> Get(string vehicleTitle, string vin, string stockNumber, string make, string model, int year, string condition, string price, string availability, string exteriorColor, string interiorColor, string doors, string fuelType, string engine, string transmission, string mileage)
    {
      var query = _db.Vehicles.AsQueryable();

      if (vehicleTitle != null)
      {
        query = query.Where(entry => entry.VehicleTitle == vehicleTitle);
      }

      if (vin != null)
      {
        query = query.Where(entry => entry.Vin == vin);
      }

      if (stockNumber != null)
      {
        query = query.Where(entry => entry.StockNumber == stockNumber);
      }

      if (make != null)
      {
        query = query.Where(entry => entry.Make == make);
      }

      if (model != null)
      {
        query = query.Where(entry => entry.Model == model);
      }

      if (year != null)
      {
        query = query.Where(entry => entry.Year == year);
      }

      if (condition != null)
      {
        query = query.Where(entry => entry.Condition == condition);
      }

      if (price != null)
      {
        query = query.Where(entry => entry.Price == price);
      }

      if (availability != null)
      {
        query = query.Where(entry => entry.Availability == availability);
      }

      if (exteriorColor != null)
      {
        query = query.Where(entry => entry.ExteriorColor == exteriorColor);
      }

      if (interiorColor != null)
      {
        query = query.Where(entry => entry.InteriorColor == interiorColor);
      }

      if (doors != null)
      {
        query = query.Where(entry => entry.Doors == doors);
      }

      if (fuelType != null)
      {
        query = query.Where(entry => entry.FuelType == fuelType);
      }

      if (engine != null)
      {
        query = query.Where(entry => entry.Engine == engine);
      }

      if (transmission != null)
      {
        query = query.Where(entry => entry.Transmission == transmission);
      }

      if (mileage != null)
      {
        query = query.Where(entry => entry.Mileage == mileage);
      }

      return query.ToList();
    }

    [HttpPost]
    public void Post([FromBody] Vehicle vehicle)
    {
      _db.Vehicles.Add(vehicle);
      _db.SaveChanges();
    }

    [HttpGet("{id}")]
    public ActionResult<Vehicle> Get(int id)
    {
      return _db.Vehicles.FirstOrDefault(entry => entry.VehicleId == id);
    }

    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Vehicle vehicle)
    {
      vehicle.VehicleId = id;
      _db.Entry(vehicle).State = EntityState.Modified;
      _db.SaveChanges();
    }

    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      var vehicleToDelete = _db.Vehicles.FirstOrDefault(entry => entry.VehicleId == id);
      _db.Vehicles.Remove(vehicleToDelete);
      _db.SaveChanges();
    }
  }
}