using Microsoft.EntityFrameworkCore.Migrations;

namespace MarketMotors.Migrations
{
    public partial class Authorization : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Feature_Vehicles_VehicleId",
                table: "Feature");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Feature",
                table: "Feature");

            migrationBuilder.RenameTable(
                name: "Feature",
                newName: "Features");

            migrationBuilder.RenameIndex(
                name: "IX_Feature_VehicleId",
                table: "Features",
                newName: "IX_Features_VehicleId");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Vehicles",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Features",
                table: "Features",
                column: "FeatureId");

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_UserId",
                table: "Vehicles",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Features_Vehicles_VehicleId",
                table: "Features",
                column: "VehicleId",
                principalTable: "Vehicles",
                principalColumn: "VehicleId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Vehicles_AspNetUsers_UserId",
                table: "Vehicles",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Features_Vehicles_VehicleId",
                table: "Features");

            migrationBuilder.DropForeignKey(
                name: "FK_Vehicles_AspNetUsers_UserId",
                table: "Vehicles");

            migrationBuilder.DropIndex(
                name: "IX_Vehicles_UserId",
                table: "Vehicles");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Features",
                table: "Features");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Vehicles");

            migrationBuilder.RenameTable(
                name: "Features",
                newName: "Feature");

            migrationBuilder.RenameIndex(
                name: "IX_Features_VehicleId",
                table: "Feature",
                newName: "IX_Feature_VehicleId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Feature",
                table: "Feature",
                column: "FeatureId");

            migrationBuilder.AddForeignKey(
                name: "FK_Feature_Vehicles_VehicleId",
                table: "Feature",
                column: "VehicleId",
                principalTable: "Vehicles",
                principalColumn: "VehicleId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
