using System.ComponentModel.DataAnnotations;

namespace MarketMotors.Models
{
  public class Vehicle
  {
    public int VehicleId { get; set; }
    [Required]
    public string VehicleTitle { get; set; }
    [Required]
    public string Vin { get; set; }
    [Required]
    public string StockNumber { get; set; }
    public string Make { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }
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
  }
}