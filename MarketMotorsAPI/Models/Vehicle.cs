using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace MarketMotors.Models
{
  public class Vehicle
  {
    public Vehicle()
    {
      this.Features = new HashSet<Feature>();
    }
    public int VehicleId { get; set; }
    [Required]
    public string VehicleTitle { get; set; }
    [Required]
    public string Vin { get; set; }
    [Required]
    public string StockNumber { get; set; }
    [Required]
    [StringLength(4)]
    public string Make { get; set; }
    [Required]
    public string Model { get; set; }
    [Required]
    public int Year { get; set; }
    [Required]
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
  }
}