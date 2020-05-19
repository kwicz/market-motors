using Microsoft.EntityFrameworkCore.Migrations;

namespace MarketMotors.Migrations
{
    public partial class UpdateDataTypes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Year",
                table: "Vehicles",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<string>(
                name: "Vin",
                table: "Vehicles",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 17,
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Year",
                table: "Vehicles",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Vin",
                table: "Vehicles",
                maxLength: 17,
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
