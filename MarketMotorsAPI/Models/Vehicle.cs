using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace MarketMotors.Models
{
  public class Vehicle
  {
    public Vehicle()
    {
      this.Features = new HashSet<Feature>();
      this.Images = new HashSet<Image>();
    }
    public int VehicleId { get; set; }
    public string VehicleTitle { get; set; }
    public string Featured { get; set; }
    public string Vin { get; set; }
    public string StockNumber { get; set; }
    public string Make { get; set; }
    public string Model { get; set; }
    public string Year { get; set; }
    public string Condition { get; set; }
    public string Price { get; set; }
    public string Availability { get; set; }
    public string ExteriorColor { get; set; }
    public string InteriorColor { get; set; }
    public string Doors { get; set; }
    public string FuelType { get; set; }
    public string Engine { get; set; }
    public string Transmission { get; set; }
    public string Mileage { get; set; }
    public virtual ICollection<Feature> Features { get; set; }
    public virtual ICollection<Image> Images { get; set; }
  }
}