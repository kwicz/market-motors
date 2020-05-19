using System.Collections.Generic;
using System.Linq;
using System;
using Microsoft.AspNetCore.Mvc;
using MarketMotors.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
// using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Cors;

namespace MarketMotors.Controllers
{
  // [Authorize]
  [Route("api/[controller]")]
  [ApiController]
  public class VehiclesController : ControllerBase
  {
    private readonly MarketMotorsContext _db;
    // private readonly UserManager<ApplicationUser> _userManager;

    // public VehiclesController(UserManager<ApplicationUser> userManager, MarketMotorsContext database)
    public VehiclesController(MarketMotorsContext db)
    {
      // _userManager = userManager;
      _db = db;
    }

    // GET api/vehicles
    [HttpGet]
    public ActionResult<IEnumerable<Vehicle>> Get(string vehicleTitle, string vin, string stockNumber, string make, string model, string year, string condition, string price, string availability, string exteriorColor, string interiorColor, string doors, string fuelType, string engine, string transmission, string mileage)
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

    // POST api/vehicles
    [EnableCors("MyPolicy")]
    [HttpPost]
    public void Post([FromBody] Vehicle vehicle)
    {
      Console.WriteLine("DB ADD REACHED");
      _db.Vehicles.Add(vehicle);
      _db.SaveChanges();
    }

    // GET api/vehicles/id
    [HttpGet("{id}")]
    public ActionResult<Vehicle> Get(int id)
    {
      return _db.Vehicles.FirstOrDefault(entry => entry.VehicleId == id);
    }

    // POST api/vehicles/id
    [EnableCors("MyPolicy")]
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Vehicle vehicle)
    {
      vehicle.VehicleId = id;
      _db.Entry(vehicle).State = EntityState.Modified;
      _db.SaveChanges();
    }

    // POST api/vehicles/id
    [EnableCors("MyPolicy")]
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      var vehicleToDelete = _db.Vehicles.FirstOrDefault(entry => entry.VehicleId == id);
      _db.Vehicles.Remove(vehicleToDelete);
      _db.SaveChanges();
    }
  }
}