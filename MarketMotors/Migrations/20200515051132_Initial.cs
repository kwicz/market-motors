using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MarketMotors.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Vehicles",
                columns: table => new
                {
                    VehicleId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    VehicleTitle = table.Column<string>(nullable: false),
                    Vin = table.Column<string>(nullable: false),
                    StockNumber = table.Column<string>(nullable: false),
                    Make = table.Column<string>(nullable: true),
                    Model = table.Column<string>(nullable: true),
                    Year = table.Column<int>(nullable: false),
                    Condition = table.Column<string>(nullable: true),
                    Price = table.Column<string>(nullable: true),
                    Availability = table.Column<string>(nullable: true),
                    ExteriorColor = table.Column<string>(nullable: true),
                    InteriorColor = table.Column<string>(nullable: true),
                    Doors = table.Column<string>(nullable: true),
                    FuelType = table.Column<string>(nullable: true),
                    Engine = table.Column<string>(nullable: true),
                    Transmission = table.Column<string>(nullable: true),
                    Mileage = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vehicles", x => x.VehicleId);
                });

            migrationBuilder.InsertData(
                table: "Vehicles",
                columns: new[] { "VehicleId", "Availability", "Condition", "Doors", "Engine", "ExteriorColor", "FuelType", "InteriorColor", "Make", "Mileage", "Model", "Price", "StockNumber", "Transmission", "VehicleTitle", "Vin", "Year" },
                values: new object[] { 1, "Available", "Good", "3", "V8", "Taupe", "Gasoline", "Taupe", "Chevy", "100,000", "Model", "2,000", "1655", "Automatic", "1998 Chevy S10", "79879851655", 1998 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Vehicles");
        }
    }
}
