using Microsoft.EntityFrameworkCore;

namespace MarketMotors.Models
{
  public class MarketMotorsContext : DbContext
  {
    public MarketMotorsContext(DbContextOptions<MarketMotorsContext> options)
        : base(options)
    {
    }

    public DbSet<Vehicle> Vehicles { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder.Entity<Vehicle>()
          .HasData(
              new Vehicle {  });
    }
  }
}