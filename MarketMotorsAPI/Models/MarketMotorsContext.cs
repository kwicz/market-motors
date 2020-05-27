// using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace MarketMotors.Models
{ 
  // Use with Identity
  // public class MarketMotorsContext : IdentityDbContext<ApplicationUser>
  public class MarketMotorsContext : DbContext
  {
    public MarketMotorsContext(DbContextOptions<MarketMotorsContext> options) : base(options) { }

    public DbSet<Vehicle> Vehicles { get; set; }
    public DbSet<Feature> Features { get; set; }
    // public DbSet<Image> Images { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder.Entity<Vehicle>()
          .HasData(
              new Vehicle   {
                  VehicleId = 1,
                  VehicleTitle = "1998 Chevy S10",
                  Featured = "true",
                  Vin = "79879851655",
                  StockNumber = "1655",
                  Make = "Chevy",
                  Model = "Model",
                  Year = "1998",
                  Condition = "Good",
                  Price = "2,000",
                  Availability = "Available",
                  ExteriorColor = "Taupe",
                  InteriorColor = "Taupe",
                  Doors = "3",
                  FuelType = "Gasoline",
                  Engine = "V8",
                  Transmission = "Automatic",
                  Mileage = "100,000"
                },
              new Vehicle   {
                  VehicleId = 2,
                  VehicleTitle = "2006 Honda Fit",
                  Featured = "true",
                  Vin = "98765432198765432",
                  StockNumber = "5432",
                  Make = "Honda",
                  Model = "Fit",
                  Year = "2006",
                  Condition = "Like New",
                  Price = "6,000",
                  Availability = "Available",
                  ExteriorColor = "Red",
                  InteriorColor = "Black",
                  Doors = "4",
                  FuelType = "Gasoline",
                  Engine = "4 Cylinder",
                  Transmission = "Manual",
                  Mileage = "80,000"
                },
              new Vehicle   {
                  VehicleId = 3,
                  VehicleTitle = "2016 Subaru Outback",
                  Featured = "true",
                  Vin = "12345678912345678",
                  StockNumber = "5678",
                  Make = "Subaru",
                  Model = "Outback",
                  Year = "2016",
                  Condition = "Like New",
                  Price = "6,000",
                  Availability = "Available",
                  ExteriorColor = "Silver",
                  InteriorColor = "Black",
                  Doors = "4",
                  FuelType = "Gasoline",
                  Engine = "6 Cylinder",
                  Transmission = "Automatic",
                  Mileage = "100,000"
                }                
            );
    }
  }
}