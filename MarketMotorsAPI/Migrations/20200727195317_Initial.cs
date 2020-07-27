using System;
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
                    VehicleTitle = table.Column<string>(nullable: true),
                    Featured = table.Column<string>(nullable: true),
                    Vin = table.Column<string>(nullable: true),
                    StockNumber = table.Column<string>(nullable: true),
                    Make = table.Column<string>(nullable: true),
                    Model = table.Column<string>(nullable: true),
                    Year = table.Column<string>(nullable: true),
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

            migrationBuilder.CreateTable(
                name: "Features",
                columns: table => new
                {
                    FeatureId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    VehicleId = table.Column<int>(nullable: false),
                    PowerWindows = table.Column<bool>(nullable: false),
                    PowerLocks = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Features", x => x.FeatureId);
                    table.ForeignKey(
                        name: "FK_Features_Vehicles_VehicleId",
                        column: x => x.VehicleId,
                        principalTable: "Vehicles",
                        principalColumn: "VehicleId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Images",
                columns: table => new
                {
                    ImageId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    ImageTitle = table.Column<string>(nullable: true),
                    ImageData = table.Column<byte[]>(nullable: true),
                    VehicleId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Images", x => x.ImageId);
                    table.ForeignKey(
                        name: "FK_Images_Vehicles_VehicleId",
                        column: x => x.VehicleId,
                        principalTable: "Vehicles",
                        principalColumn: "VehicleId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Vehicles",
                columns: new[] { "VehicleId", "Availability", "Condition", "Doors", "Engine", "ExteriorColor", "Featured", "FuelType", "InteriorColor", "Make", "Mileage", "Model", "Price", "StockNumber", "Transmission", "VehicleTitle", "Vin", "Year" },
                values: new object[] { 1, "Available", "Good", "3", "V8", "Taupe", "true", "Gasoline", "Taupe", "Chevy", "100,000", "Model", "2,000", "1655", "Automatic", "1998 Chevy S10", "79879851655", "1998" });

            migrationBuilder.InsertData(
                table: "Vehicles",
                columns: new[] { "VehicleId", "Availability", "Condition", "Doors", "Engine", "ExteriorColor", "Featured", "FuelType", "InteriorColor", "Make", "Mileage", "Model", "Price", "StockNumber", "Transmission", "VehicleTitle", "Vin", "Year" },
                values: new object[] { 2, "Available", "Like New", "4", "4 Cylinder", "Red", "true", "Gasoline", "Black", "Honda", "80,000", "Fit", "6,000", "5432", "Manual", "2006 Honda Fit", "98765432198765432", "2006" });

            migrationBuilder.InsertData(
                table: "Vehicles",
                columns: new[] { "VehicleId", "Availability", "Condition", "Doors", "Engine", "ExteriorColor", "Featured", "FuelType", "InteriorColor", "Make", "Mileage", "Model", "Price", "StockNumber", "Transmission", "VehicleTitle", "Vin", "Year" },
                values: new object[] { 3, "Available", "Like New", "4", "6 Cylinder", "Silver", "true", "Gasoline", "Black", "Subaru", "100,000", "Outback", "6,000", "5678", "Automatic", "2016 Subaru Outback", "12345678912345678", "2016" });

            migrationBuilder.CreateIndex(
                name: "IX_Features_VehicleId",
                table: "Features",
                column: "VehicleId");

            migrationBuilder.CreateIndex(
                name: "IX_Images_VehicleId",
                table: "Images",
                column: "VehicleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Features");

            migrationBuilder.DropTable(
                name: "Images");

            migrationBuilder.DropTable(
                name: "Vehicles");
        }
    }
}
