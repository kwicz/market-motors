using Microsoft.EntityFrameworkCore.Migrations;

namespace MarketMotors.Migrations
{
    public partial class AddSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "StockNumber",
                table: "Vehicles",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 4,
                oldNullable: true);

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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "VehicleId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "VehicleId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "VehicleId",
                keyValue: 3);

            migrationBuilder.AlterColumn<string>(
                name: "StockNumber",
                table: "Vehicles",
                maxLength: 4,
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
