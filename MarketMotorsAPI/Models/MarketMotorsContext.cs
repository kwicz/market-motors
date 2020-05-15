using Microsoft.EntityFrameworkCore;

namespace MarketMotors.Models
{
  public class MarketMotorsContext : DbContext
  {
    public MarketMotorsContext(DbContextOptions<MarketMotorsContext> options) : base(options) { }

    public DbSet<Vehicle> Vehicles { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder.Entity<Vehicle>()
          .HasData(
              new Vehicle   {
                  VehicleId = 1,
                  VehicleTitle = "1998 Chevy S10",
                  Vin = "79879851655",
                  StockNumber = "1655",
                  Make = "Chevy",
                  Model = "Model",
                  Year = 1998,
                  Condition = "Good",
                  Price = "2,000",
                  Availability = "Available",
                  ExteriorColor = "Taupe",
                  InteriorColor = "Taupe",
                  Doors = "3",
                  FuelType = "Gasoline",
                  Engine = "V8",
                  Transmission = "Automatic",
                  Mileage = "100,000",
                });
    }
  }
}